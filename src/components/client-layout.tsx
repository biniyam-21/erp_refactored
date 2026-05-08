"use client"

import { useState, useEffect } from "react"
import { AppSidebar } from "./app-sidebar"
import { TopBar } from "./top-bar"

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDark])

  const sidebarWidth = collapsed ? 72 : 256

  return (
    <>
      <AppSidebar collapsed={collapsed} onToggle={() => setCollapsed(!collapsed)} />
      <div
        className="flex flex-col h-screen transition-all duration-300"
        style={{ marginLeft: sidebarWidth }}
      >
        <TopBar isDark={isDark} onToggleDark={() => setIsDark(!isDark)} />
        <main className="flex-1 overflow-y-auto bg-[#F8FAFC] dark:bg-[#121318]">
          {children}
        </main>
      </div>
    </>
  )
}
