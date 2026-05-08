"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { SidebarMenuButton, SidebarMenuItem as SidebarMenuItemPrimitive } from "@/components/ui/sidebar"
import type { SidebarItem as SidebarItemType } from "@/config/sidebar"

export function SidebarItem({ item }: { item: SidebarItemType }) {
  const pathname = usePathname()
  const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`)
  const Icon = item.icon

  return (
    <SidebarMenuItemPrimitive>
      <SidebarMenuButton asChild isActive={isActive} tooltip={item.title}>
        <Link href={item.href}>
          <Icon />
          <span>{item.title}</span>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItemPrimitive>
  )
}
