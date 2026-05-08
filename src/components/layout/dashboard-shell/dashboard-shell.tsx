import { AppSidebar } from "@/components/layout/sidebar/app-sidebar"
import { Navbar } from "@/components/layout/navbar/navbar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

export function DashboardShell({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider defaultOpen>
      <AppSidebar />
      <SidebarInset>
        <Navbar />
        <ScrollArea className="h-[calc(100svh-4rem)]">
          <div className="p-6">{children}</div>
        </ScrollArea>
      </SidebarInset>
    </SidebarProvider>
  )
}
