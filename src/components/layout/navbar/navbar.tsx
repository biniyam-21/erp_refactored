import { SidebarTrigger } from "@/components/ui/sidebar"
import { Notifications } from "@/components/layout/navbar/notifications"
import { SearchBar } from "@/components/layout/navbar/search-bar"
import { ThemeToggle } from "@/components/layout/navbar/theme-toggle"
import { UserDropdown } from "@/components/layout/navbar/user-dropdown"

export function Navbar() {
  return (
    <header className="sticky top-0 z-20 flex h-16 items-center gap-3 border-b bg-background px-4">
      <SidebarTrigger />
      <SearchBar />
      <div className="ml-auto flex items-center gap-2">
        <ThemeToggle />
        <Notifications />
        <UserDropdown />
      </div>
    </header>
  )
}
