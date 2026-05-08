"use client"
import { sidebarItems } from "@/config/sidebar"
import { Sidebar, SidebarContent, SidebarSeparator } from "@/components/ui/sidebar"
import { SidebarFooter } from "@/components/layout/sidebar/sidebar-footer"
import { SidebarGroup } from "@/components/layout/sidebar/sidebar-group"
import { SidebarHeader } from "@/components/layout/sidebar/sidebar-header"

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon" variant="inset">
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup title="Main" items={sidebarItems.slice(0, 2)} />
        <SidebarSeparator />
        <SidebarGroup title="Modules" items={sidebarItems.slice(2)} />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}
