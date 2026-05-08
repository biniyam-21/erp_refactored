import Image from "next/image"

import { SidebarHeader as SidebarHeaderPrimitive } from "@/components/ui/sidebar"

export function SidebarHeader() {
  return (
    <SidebarHeaderPrimitive className="border-b">
      <div className="flex items-center gap-3 p-2">
        <Image src="/Fnot_Logo-Icon.png" width={34} height={34} alt="Fnot ERP" className="rounded-md" />
        <div className="truncate">
          <p className="text-sm font-semibold">Fnot ERP</p>
          <p className="text-xs text-muted-foreground">Enterprise Suite</p>
        </div>
      </div>
    </SidebarHeaderPrimitive>
  )
}
