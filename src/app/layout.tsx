import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Finot ERP — Enterprise Management System",
  description: "Finot Engineering & Trading PLC — Enterprise Resource Planning System",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className="antialiased min-h-screen overflow-hidden"
        style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}
      >
        {children}
      </body>
    </html>
  )
}
