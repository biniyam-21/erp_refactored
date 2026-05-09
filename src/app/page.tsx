"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function HomePage() {
  const router = useRouter()

  useEffect(() => {
    const isAuthenticated =
      sessionStorage.getItem("erp_authenticated") === "true"

    router.replace(isAuthenticated ? "/dashboard" : "/login")
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <p className="text-sm text-slate-500">Preparing your enterprise workspace…</p>
    </div>
  )
}
