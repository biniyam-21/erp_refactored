"use client"

import {
  Building2,
  CreditCard,
  FolderKanban,
  Handshake,
  LayoutDashboard,
  Package,
  Settings,
  ShoppingCart,
  Users,
  Wrench,
  LifeBuoy,
  GitBranch,
} from "lucide-react"
import type React from "react"

export type SidebarItem = {
  title: string
  href: string
  icon: React.ComponentType<{ className?: string }>
}

export const sidebarItems: SidebarItem[] = [
  { title: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { title: "Branches", href: "/branches", icon: GitBranch },
  { title: "CRM", href: "/crm", icon: Handshake },
  { title: "Finance", href: "/finance", icon: CreditCard },
  { title: "HR", href: "/hr", icon: Users },
  { title: "Inventory", href: "/inventory", icon: Package },
  { title: "Operations", href: "/operations", icon: Wrench },
  { title: "Procurement", href: "/procurement", icon: ShoppingCart },
  { title: "Project", href: "/project", icon: FolderKanban },
  { title: "Settings", href: "/settings", icon: Settings },
  { title: "Support", href: "/support", icon: LifeBuoy },
  { title: "Branch Dashboard", href: "/dashboard/branch", icon: Building2 },
]
