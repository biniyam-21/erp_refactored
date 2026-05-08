"use client"

import Image from "next/image"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard, Settings, Users, CreditCard, Package,
  ShoppingCart, FolderKanban, Building2, Handshake, LogOut,
  ChevronLeft, ChevronRight,
} from "lucide-react"
import { cn } from "@/lib/utils"

interface SidebarProps {
  collapsed: boolean
  onToggle: () => void
}

const mainNav = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
]

const adminNav = [
  { title: "Settings", url: "/settings", icon: Settings },
  { title: "HR", url: "/hr", icon: Users },
  { title: "Finance", url: "/finance", icon: CreditCard },
  { title: "Inventory", url: "/inventory", icon: Package },
  { title: "Procurement", url: "/procurement", icon: ShoppingCart },
  { title: "Project", url: "/project", icon: FolderKanban },
  { title: "Multi-Branch", url: "/multi-branch", icon: Building2 },
  { title: "CRM", url: "/crm", icon: Handshake },
]

function NavItem({
  item, active, collapsed,
}: {
  item: { title: string; url: string; icon: React.ElementType }
  active: boolean
  collapsed: boolean
}) {
  const Icon = item.icon
  return (
    <a
      href={item.url}
      title={collapsed ? item.title : undefined}
      className={cn(
        "flex items-center gap-3 py-3 rounded-lg cursor-pointer transition-all duration-200 text-sm font-medium",
        collapsed ? "justify-center px-2" : "px-4",
        active ? "text-white" : "text-[#434651] dark:text-[#b0b1bc] hover:bg-[#eeedf4] dark:hover:bg-[#2a2b35]"
      )}
      style={active ? {
        borderLeft: collapsed ? "none" : "4px solid #9e3f44",
        backgroundColor: "#2b529f",
        paddingLeft: collapsed ? undefined : "12px",
      } : {}}
    >
      <Icon className="w-[18px] h-[18px] flex-shrink-0" style={{ color: active ? "#fff" : "#9e3f44" }} />
      {!collapsed && <span className="truncate">{item.title}</span>}
    </a>
  )
}

export function AppSidebar({ collapsed, onToggle }: SidebarProps) {
  const pathname = usePathname()

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 h-full flex flex-col z-40 bg-white dark:bg-[#1a1b23] border-r border-[#c4c6d3] dark:border-[#3f4048] rounded-r-xl transition-all duration-300 overflow-hidden",
        collapsed ? "w-[72px]" : "w-64"
      )}
      style={{ paddingTop: "16px" }}
    >
      {/* Logo + Collapse Toggle */}
      <div className={cn("px-3 pb-6 flex items-center", collapsed ? "justify-center" : "justify-between")}>
        <div className="flex items-center gap-3 overflow-hidden">
          <Image
            src="/Fnot_Logo-Icon.png"
            alt="Fnot ERP Logo"
            width={36}
            height={36}
            className="rounded-xl flex-shrink-0 object-contain"
          />
          {!collapsed && (
            <div className="overflow-hidden">
              <h1 className="font-bold text-[#073a86] text-sm leading-tight whitespace-nowrap">Fnot ERP</h1>
              <p className="text-[10px] uppercase tracking-wider text-[#9e3f44] font-bold whitespace-nowrap">
                Enterprise Management
              </p>
            </div>
          )}
        </div>
        <button
          onClick={onToggle}
          className="w-7 h-7 rounded-md flex items-center justify-center hover:bg-[#eeedf4] dark:hover:bg-[#2a2b35] text-[#434651] dark:text-[#b0b1bc] transition-colors flex-shrink-0 ml-1"
          title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto overflow-x-hidden px-2 space-y-0.5">
        {!collapsed && (
          <p className="px-4 py-2 text-[10px] font-bold text-[#747782] uppercase tracking-widest">Main</p>
        )}
        {mainNav.map((item) => (
          <NavItem key={item.title} item={item} active={pathname === item.url} collapsed={collapsed} />
        ))}

        <div className={cn("border-t border-[#c4c6d3] dark:border-[#3f4048]", collapsed ? "mt-3 mb-3" : "mt-0")}>
          {!collapsed && (
            <p className="px-4 pt-3 pb-2 text-[10px] font-bold text-[#747782] uppercase tracking-widest">
              Administration
            </p>
          )}
          {collapsed && <div className="pt-1" />}
        </div>

        {adminNav.map((item) => (
          <NavItem key={item.title} item={item} active={pathname === item.url} collapsed={collapsed} />
        ))}
      </nav>

      {/* Profile Footer */}
      <div className={cn("border-t border-[#c4c6d3] dark:border-[#3f4048]", collapsed ? "px-2 py-3" : "px-4 py-3")}>
        {collapsed ? (
          <div className="flex flex-col items-center gap-2">
            <div className="relative">
              <div className="w-9 h-9 rounded-full bg-[#073a86] flex items-center justify-center text-white text-xs font-bold">
                AD
              </div>
              <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full" />
            </div>
            <button
              title="Logout"
              className="w-full flex items-center justify-center p-2 text-[#ba1a1a] hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors rounded-lg"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <>
            <div className="flex items-center gap-3 p-2 rounded-lg bg-[#f4f3fa] dark:bg-[#23242e] mb-3">
              <div className="relative flex-shrink-0">
                <div className="w-9 h-9 rounded-full bg-[#073a86] flex items-center justify-center text-white text-xs font-bold">
                  AD
                </div>
                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full" />
              </div>
              <div className="overflow-hidden">
                <p className="text-sm font-bold text-[#1a1b21] dark:text-white truncate">Administrator</p>
                <p className="text-[11px] text-[#434651] dark:text-[#9a9bab] truncate">System Superuser</p>
              </div>
            </div>
            <button className="w-full flex items-center gap-3 px-4 py-2 text-[#ba1a1a] hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors rounded-lg text-sm font-medium">
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </>
        )}
      </div>
    </aside>
  )
}
