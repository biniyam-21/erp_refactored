"use client"

import { useState, useRef, useEffect } from "react"
import { Search, Bell, Sun, Moon, ChevronDown, User, LogOut } from "lucide-react"
import { cn } from "@/lib/utils"

interface TopBarProps {
  isDark: boolean
  onToggleDark: () => void
}

const notifications = [
  { msg: "Core CPU i9 stock is critical (2 remaining)", time: "2 min ago", dot: "bg-red-500" },
  { msg: "Invoice INV-9824 has been approved", time: "1 hr ago", dot: "bg-green-500" },
  { msg: "New employee successfully onboarded", time: "3 hrs ago", dot: "bg-blue-500" },
]

export function TopBar({ isDark, onToggleDark }: TopBarProps) {
  const [userOpen, setUserOpen] = useState(false)
  const [notifOpen, setNotifOpen] = useState(false)
  const userRef = useRef<HTMLDivElement>(null)
  const notifRef = useRef<HTMLDivElement>(null)

  // Close dropdowns on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (userRef.current && !userRef.current.contains(e.target as Node)) setUserOpen(false)
      if (notifRef.current && !notifRef.current.contains(e.target as Node)) setNotifOpen(false)
    }
    document.addEventListener("mousedown", handleClick)
    return () => document.removeEventListener("mousedown", handleClick)
  }, [])

  return (
    <header className="h-16 flex-shrink-0 flex items-center gap-4 px-6 bg-white dark:bg-[#1a1b23] border-b border-[#c4c6d3] dark:border-[#3f4048] z-30">

      {/* Search */}
      <div className="relative flex-1 max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#747782]" />
        <input
          type="text"
          placeholder="Search modules, records..."
          className="w-full h-9 pl-9 pr-4 text-sm rounded-lg border border-[#c4c6d3] dark:border-[#3f4048] bg-[#f4f3fa] dark:bg-[#23242e] text-[#1a1b21] dark:text-white placeholder:text-[#747782] focus:outline-none focus:ring-2 focus:ring-[#073a86] focus:border-transparent transition-all"
        />
      </div>

      <div className="ml-auto flex items-center gap-2">

        {/* Dark / Light Mode Toggle */}
        <button
          onClick={onToggleDark}
          title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
          className="w-9 h-9 rounded-lg border border-[#c4c6d3] dark:border-[#3f4048] bg-[#f4f3fa] dark:bg-[#23242e] flex items-center justify-center hover:bg-[#e8e7ef] dark:hover:bg-[#2e2f3a] transition-colors"
        >
          {isDark
            ? <Sun className="w-4 h-4 text-amber-400" />
            : <Moon className="w-4 h-4 text-[#434651]" />
          }
        </button>

        {/* Notifications */}
        <div className="relative" ref={notifRef}>
          <button
            onClick={() => { setNotifOpen(!notifOpen); setUserOpen(false) }}
            className="w-9 h-9 rounded-lg border border-[#c4c6d3] dark:border-[#3f4048] bg-[#f4f3fa] dark:bg-[#23242e] flex items-center justify-center hover:bg-[#e8e7ef] dark:hover:bg-[#2e2f3a] transition-colors relative"
          >
            <Bell className="w-4 h-4 text-[#434651] dark:text-[#b0b1bc]" />
            <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#9e3f44] text-white text-[9px] font-bold flex items-center justify-center">
              3
            </span>
          </button>

          {notifOpen && (
            <div className="absolute right-0 top-12 w-80 bg-white dark:bg-[#1a1b23] border border-[#c4c6d3] dark:border-[#3f4048] rounded-xl shadow-xl z-50 overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 border-b border-[#c4c6d3] dark:border-[#3f4048]">
                <p className="text-sm font-semibold text-[#1a1b21] dark:text-white">Notifications</p>
                <span className="text-[11px] font-medium text-[#9e3f44]">3 unread</span>
              </div>
              <div className="divide-y divide-[#eeedf4] dark:divide-[#3f4048]">
                {notifications.map((n, i) => (
                  <div key={i} className="flex items-start gap-3 px-4 py-3 hover:bg-[#f4f3fa] dark:hover:bg-[#23242e] transition-colors cursor-pointer">
                    <span className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${n.dot}`} />
                    <div>
                      <p className="text-[12px] font-medium text-[#1a1b21] dark:text-white">{n.msg}</p>
                      <p className="text-[11px] text-[#747782] mt-0.5">{n.time}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="px-4 py-3 border-t border-[#c4c6d3] dark:border-[#3f4048]">
                <button className="w-full text-center text-[12px] font-medium text-[#073a86] dark:text-[#6b9aff] hover:underline">
                  View all notifications
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Divider */}
        <div className="w-px h-6 bg-[#c4c6d3] dark:bg-[#3f4048] mx-1" />

        {/* User Dropdown */}
        <div className="relative" ref={userRef}>
          <button
            onClick={() => { setUserOpen(!userOpen); setNotifOpen(false) }}
            className="flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-[#f4f3fa] dark:hover:bg-[#23242e] transition-colors"
          >
            <div className="relative">
              <div className="w-8 h-8 rounded-full bg-[#073a86] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                AD
              </div>
              <div className="absolute bottom-0 right-0 w-2 h-2 bg-green-500 border border-white rounded-full" />
            </div>
            <div className="hidden sm:block text-left">
              <p className="text-sm font-semibold text-[#1a1b21] dark:text-white leading-tight">Administrator</p>
              <p className="text-[11px] text-[#747782] leading-tight">System Superuser</p>
            </div>
            <ChevronDown
              className={cn(
                "w-3.5 h-3.5 text-[#747782] transition-transform duration-200",
                userOpen && "rotate-180"
              )}
            />
          </button>

          {userOpen && (
            <div className="absolute right-0 top-14 w-56 bg-white dark:bg-[#1a1b23] border border-[#c4c6d3] dark:border-[#3f4048] rounded-xl shadow-xl z-50 overflow-hidden">
              {/* User info */}
              <div className="px-4 py-3 border-b border-[#c4c6d3] dark:border-[#3f4048] bg-[#f4f3fa] dark:bg-[#23242e]">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#073a86] flex items-center justify-center text-white text-xs font-bold">
                    AD
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#1a1b21] dark:text-white">Administrator</p>
                    <p className="text-[11px] text-[#747782]">admin@nexuserp.com</p>
                  </div>
                </div>
              </div>

              {/* Menu items */}
              <div className="p-2">
                <button
                  onClick={() => setUserOpen(false)}
                  className="w-full flex items-center gap-3 px-3 py-2.5 text-sm text-[#1a1b21] dark:text-white hover:bg-[#f4f3fa] dark:hover:bg-[#23242e] rounded-lg transition-colors"
                >
                  <User className="w-4 h-4 text-[#434651] dark:text-[#9a9bab]" />
                  Profile
                </button>
                <button
                  onClick={() => setUserOpen(false)}
                  className="w-full flex items-center gap-3 px-3 py-2.5 text-sm text-[#ba1a1a] hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
