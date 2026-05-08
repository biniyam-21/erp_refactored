import { Search } from "lucide-react"

import { Input } from "@/components/ui/input"

export function SearchBar() {
  return (
    <div className="relative w-full max-w-sm">
      <Search className="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground" />
      <Input placeholder="Search modules and records..." className="pl-8" />
    </div>
  )
}
