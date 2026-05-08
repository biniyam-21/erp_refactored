"use client"

import { Bell } from "lucide-react"

import { Button } from "@/components/ui/button"

export function Notifications() {
  return (
    <Button variant="outline" size="icon" className="relative">
      <Bell className="size-4" />
      <span className="absolute -top-1 -right-1 inline-flex size-4 items-center justify-center rounded-full bg-destructive text-[10px] text-white">
        3
      </span>
      <span className="sr-only">Notifications</span>
    </Button>
  )
}
