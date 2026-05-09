"use client"

import { ReactNode, useState } from "react"
import { Eye as EyeIcon, EyeOff, Mail, UserPlus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ROLES } from "../data"
import { User } from "../types"

interface RegisterUserDialogProps {
  open: boolean
  onClose: () => void
  onSave: (user: User) => void
}

export function RegisterUserDialog({ open, onClose, onSave }: RegisterUserDialogProps) {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPw, setShowPw] = useState(false)
  const [role, setRole] = useState("")
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validate = () => {
    const e: Record<string, string> = {}
    if (!firstName.trim()) e.firstName = "Required"
    if (!lastName.trim()) e.lastName = "Required"
    if (!email.trim() || !email.includes("@")) e.email = "Valid email required"
    if (!role) e.role = "Required"
    if (!password || password.length < 8) e.password = "Minimum 8 characters"
    return e
  }

  const handleClose = () => {
    setFirstName("")
    setLastName("")
    setEmail("")
    setPassword("")
    setRole("")
    setErrors({})
    onClose()
  }

  const handleSubmit = async () => {
    const e = validate()
    if (Object.keys(e).length > 0) {
      setErrors(e)
      return
    }

    setIsSubmitting(true)
    await new Promise((r) => setTimeout(r, 800))
    onSave({
      id: `USR-${String(Math.floor(Math.random() * 9000) + 1000)}`,
      firstName,
      lastName,
      email,
      phone: "",
      role,
      department: "",
      status: "Active",
      employeeId: "",
      permissions: [],
    })
    setIsSubmitting(false)
    handleClose()
  }

  const field = (label: string, node: ReactNode, errKey?: string) => (
    <div className="space-y-1.5">
      <Label className="text-sm font-semibold text-[#191c1e]" style={{ letterSpacing: "0.01em" }}>
        {label}
      </Label>
      {node}
      {errKey && errors[errKey] && (
        <p className="text-xs text-[#ba1a1a]">{errors[errKey]}</p>
      )}
    </div>
  )

  const inputCls = (errKey?: string) =>
    `h-10 text-sm rounded-lg border px-3 w-full outline-none transition-all bg-white ${
      errKey && errors[errKey]
        ? "border-[#ba1a1a] focus:ring-2 focus:ring-[#ba1a1a]/20"
        : "border-[#c3c6d7] focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/12"
    }`

  return (
    <Dialog open={open} onOpenChange={(nextOpen) => !nextOpen && handleClose()}>
      <DialogContent
        showCloseButton={false}
        className="gap-0 overflow-hidden rounded-2xl border-none bg-white p-0 shadow-2xl sm:max-w-[520px]"
      >
        <DialogClose
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 flex h-8 w-8 items-center justify-center rounded-lg text-[#737686] transition-colors hover:bg-[#f2f4f6]"
          aria-label="Close"
        >
          <svg viewBox="0 0 14 14" className="h-4 w-4" fill="none">
            <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </DialogClose>

        <DialogHeader className="flex-row items-center gap-3 border-b border-[#e6e8ea] px-7 pt-6 pb-5">
          <div className="h-9 w-9 flex-shrink-0 rounded-xl bg-[#2563EB] flex items-center justify-center">
            <UserPlus className="h-4 w-4 text-white" />
          </div>
          <div>
            <DialogTitle className="text-lg leading-tight font-semibold text-[#191c1e]">Register New User</DialogTitle>
            <DialogDescription className="mt-0.5 text-xs text-[#57657a]">
              Create a new system user account.
            </DialogDescription>
          </div>
        </DialogHeader>

        <div className="flex flex-col gap-4 px-7 py-6">
          <div className="grid grid-cols-2 gap-4">
            {field(
              "First Name",
              <Input
                id="reg-firstname"
                className={inputCls("firstName")}
                placeholder="e.g. Abebe"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />,
              "firstName"
            )}
            {field(
              "Last Name",
              <Input
                id="reg-lastname"
                className={inputCls("lastName")}
                placeholder="e.g. Tadesse"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />,
              "lastName"
            )}
          </div>

          {field(
            "Email Address",
            <div className="relative">
              <Mail className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-[#737686]" />
              <Input
                id="reg-email"
                type="email"
                className={`${inputCls("email")} pl-9`}
                placeholder="user@finot.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>,
            "email"
          )}

          {field(
            "Password",
            <div className="relative">
              <Input
                id="reg-password"
                type={showPw ? "text" : "password"}
                className={`${inputCls("password")} pr-10`}
                placeholder="Min. 8 characters"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowPw(!showPw)}
                className="absolute top-1/2 right-3 -translate-y-1/2 text-[#737686]"
              >
                {showPw ? <EyeOff className="h-4 w-4" /> : <EyeIcon className="h-4 w-4" />}
              </button>
            </div>,
            "password"
          )}

          {field(
            "Role",
            <Select value={role} onValueChange={setRole}>
              <SelectTrigger
                id="reg-role"
                className={`h-10 rounded-lg border bg-white text-sm ${errors.role ? "border-[#ba1a1a]" : "border-[#c3c6d7]"}`}
              >
                <SelectValue placeholder="Select a role…" />
              </SelectTrigger>
              <SelectContent className="z-[9999] rounded-lg border border-[#c3c6d7] bg-white shadow-lg">
                {ROLES.map((r) => (
                  <SelectItem
                    key={r}
                    value={r}
                    className="cursor-pointer text-sm text-[#191c1e] hover:bg-[#f2f4f6]"
                  >
                    {r}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>,
            "role"
          )}
        </div>

        <div className="flex justify-end gap-3 border-t border-[#e6e8ea] px-7 py-5">
          <button
            type="button"
            onClick={handleClose}
            className="h-10 rounded-lg border border-[#9B1C2E] bg-white px-6 text-sm font-semibold text-[#9B1C2E] transition-colors hover:bg-[#9B1C2E] hover:text-white"
          >
            Cancel
          </button>
          <Button
            id="create-user-submit"
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="h-10 px-6 text-sm font-semibold bg-[#2563EB] hover:bg-[#004ac6] text-white flex items-center gap-2"
          >
            {isSubmitting ? (
              <>
                <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeOpacity="0.3" />
                  <path d="M12 2a10 10 0 0110 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </svg>
                Creating...
              </>
            ) : (
              <>
                <UserPlus className="h-4 w-4" />
                Create User
              </>
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
