"use client"

import { useState } from "react"
import {
  UserPlus,
  Search,
  MoreHorizontal,
  Eye,
  Pencil,
  Trash2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { SEED_USERS, ROLE_COLORS } from "./data"
import { RegisterUserDialog } from "./components/register-user-dialog"
import { User } from "./types"

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function UsersPage() {
  const [users, setUsers] = useState<User[]>(SEED_USERS)
  const [search, setSearch] = useState("")
  const [dialogOpen, setDialogOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [successMsg, setSuccessMsg] = useState("")

  const filtered = users.filter(
    (u) =>
      `${u.firstName} ${u.lastName} ${u.email} ${u.role} ${u.department}`
        .toLowerCase()
        .includes(search.toLowerCase())
  )

  const handleSave = (user: User) => {
    setUsers((prev) => [user, ...prev])
    setSuccessMsg(`User "${user.firstName} ${user.lastName}" created successfully.`)
    setTimeout(() => setSuccessMsg(""), 4000)
  }

  return (
    <div className="p-6 space-y-6">

      {/* Success toast */}
      {successMsg && (
        <div className="fixed top-6 right-6 z-50 flex items-center gap-3 px-4 py-3 bg-white border border-green-200 rounded-xl shadow-lg text-sm text-green-700 font-medium animate-in slide-in-from-top-2">
          <span className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0" />
          {successMsg}
        </div>
      )}

      {/* ── Page Header ── */}
      <header className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-[#1a1b21]">Users</h2>
          <p className="text-sm text-[#434651] mt-0.5">
            Manage system user accounts and access control.
          </p>
        </div>
        <Button
          id="open-register-user"
          onClick={() => setDialogOpen(true)}
          className="h-10 px-5 text-sm font-semibold bg-[#2563EB] hover:bg-[#004ac6] text-white flex items-center gap-2 rounded-lg"
        >
          <UserPlus className="w-4 h-4" />
          Register New User
        </Button>
      </header>

      {/* ── Stats Bar ── */}
      <div className="grid grid-cols-4 gap-4">
        {[
          { label: "Total Users", value: users.length, color: "text-[#2563EB]", bg: "bg-blue-50" },
          { label: "Active", value: users.filter((u) => u.status === "Active").length, color: "text-green-700", bg: "bg-green-50" },
          { label: "Inactive", value: users.filter((u) => u.status === "Inactive").length, color: "text-gray-500", bg: "bg-gray-50" },
          { label: "Admins", value: users.filter((u) => u.role === "Administrator").length, color: "text-purple-700", bg: "bg-purple-50" },
        ].map((s) => (
          <div key={s.label} className={`${s.bg} rounded-xl p-4 border border-white`}>
            <p className={`text-2xl font-bold ${s.color}`}>{s.value}</p>
            <p className="text-xs text-[#737686] font-medium mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      {/* ── Users Table ── */}
      <div className="bg-white rounded-xl border border-[#c4c6d3] shadow-sm overflow-hidden">
        {/* Table toolbar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#e6e8ea]">
          <h3 className="text-base font-semibold text-[#1a1b21]">All Users</h3>
          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#737686]" />
            <Input
              placeholder="Search users…"
              className="pl-9 h-9 text-sm border-[#c3c6d7] rounded-lg"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-[#f2f4f6] text-[#737686] text-[11px] uppercase tracking-wider">
              <tr>
                {["User", "Employee ID", "Role", "Department", "Status", "Permissions", "Actions"].map((h) => (
                  <th key={h} className="px-6 py-3 text-left font-semibold">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[#e6e8ea]">
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-6 py-12 text-center text-sm text-[#737686]">
                    No users found.
                  </td>
                </tr>
              ) : (
                filtered.map((user) => (
                  <tr key={user.id} className="hover:bg-[#f7f9fb] transition-colors">
                    {/* User */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-[#2563EB] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                          {user.firstName[0]}{user.lastName[0]}
                        </div>
                        <div>
                          <p className="font-semibold text-[#1a1b21]">{user.firstName} {user.lastName}</p>
                          <p className="text-[11px] text-[#737686]">{user.email}</p>
                        </div>
                      </div>
                    </td>
                    {/* EmpID */}
                    <td className="px-6 py-4 text-[#434651] font-mono text-xs">{user.employeeId || "—"}</td>
                    {/* Role */}
                    <td className="px-6 py-4">
                      <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold ${ROLE_COLORS[user.role] ?? "bg-gray-100 text-gray-700"}`}>
                        {user.role}
                      </span>
                    </td>
                    {/* Department */}
                    <td className="px-6 py-4 text-[#434651]">{user.department}</td>
                    {/* Status */}
                    <td className="px-6 py-4">
                      <span className={`flex items-center gap-1.5 w-fit px-2.5 py-1 rounded-full text-[11px] font-bold ${user.status === "Active" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"
                        }`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${user.status === "Active" ? "bg-green-500" : "bg-gray-400"}`} />
                        {user.status}
                      </span>
                    </td>
                    {/* Permissions */}
                    <td className="px-6 py-4">
                      <div className="flex flex-wrap gap-1 max-w-[200px]">
                        {user.permissions.slice(0, 3).map((p) => (
                          <Badge key={p} variant="secondary" className="text-[10px] px-1.5 py-0.5 rounded-md bg-[#eceef0] text-[#57657a]">
                            {p}
                          </Badge>
                        ))}
                        {user.permissions.length > 3 && (
                          <Badge variant="secondary" className="text-[10px] px-1.5 py-0.5 rounded-md bg-[#d5e3fc] text-[#2563EB]">
                            +{user.permissions.length - 3}
                          </Badge>
                        )}
                      </div>
                    </td>
                    {/* Actions */}
                    <td className="px-6 py-4">
                      <div className="relative">
                        <button
                          onClick={() => setOpenMenu(openMenu === user.id ? null : user.id)}
                          className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-[#eceef0] transition-colors"
                        >
                          <MoreHorizontal className="w-4 h-4 text-[#737686]" />
                        </button>
                        {openMenu === user.id && (
                          <div className="absolute right-0 top-10 w-40 bg-white border border-[#c4c6d3] rounded-xl shadow-lg z-20 overflow-hidden py-1">
                            {[
                              { icon: Eye, label: "View", color: "text-[#1a1b21]" },
                              { icon: Pencil, label: "Edit", color: "text-[#1a1b21]" },
                              { icon: Trash2, label: "Delete", color: "text-[#ba1a1a]" },
                            ].map(({ icon: Icon, label, color }) => (
                              <button
                                key={label}
                                onClick={() => setOpenMenu(null)}
                                className={`w-full flex items-center gap-2.5 px-4 py-2.5 text-sm font-medium hover:bg-[#f7f9fb] transition-colors ${color}`}
                              >
                                <Icon className="w-4 h-4" />
                                {label}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Table footer */}
        <div className="px-6 py-3 border-t border-[#e6e8ea] flex items-center justify-between">
          <p className="text-xs text-[#737686]">
            Showing {filtered.length} of {users.length} users
          </p>
          <p className="text-xs text-[#737686]">Page 1 of 1</p>
        </div>
      </div>

      {/* Dialog */}
      <RegisterUserDialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        onSave={handleSave}
      />
    </div>
  )
}
