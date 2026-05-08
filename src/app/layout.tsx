import type { Metadata } from "next"
import "./globals.css"
import { ClientLayout } from "@/components/client-layout"

export const metadata: Metadata = {
  title: "Nexus ERP — Enterprise Management System",
  description: "Finot Engineering & Trading PLC — Enterprise Resource Planning System",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className="antialiased min-h-screen overflow-hidden"
        style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
