import { LogOut } from "lucide-react"

import { Button } from "@/components/ui/button"
import { SidebarFooter as SidebarFooterPrimitive } from "@/components/ui/sidebar"

export function SidebarFooter() {
  return (
    <SidebarFooterPrimitive className="border-t">
      <Button variant="ghost" className="justify-start text-destructive hover:text-destructive">
        <LogOut className="size-4" />
        Logout
      </Button>
    </SidebarFooterPrimitive>
  )
}
