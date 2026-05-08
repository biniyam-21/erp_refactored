import { SidebarGroup as SidebarGroupPrimitive, SidebarGroupContent, SidebarGroupLabel, SidebarMenu } from "@/components/ui/sidebar"
import type { SidebarItem as SidebarItemType } from "@/config/sidebar"
import { SidebarItem } from "@/components/layout/sidebar/sidebar-item"

export function SidebarGroup({
  title,
  items,
}: {
  title: string
  items: SidebarItemType[]
}) {
  return (
    <SidebarGroupPrimitive>
      <SidebarGroupLabel>{title}</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarItem key={item.href} item={item} />
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroupPrimitive>
  )
}
