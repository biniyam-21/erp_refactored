import { Activity, CircleDollarSign, Package, Users } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const items = [
  { title: "Total Revenue", value: "$128,450", icon: CircleDollarSign, change: "+12.4%" },
  { title: "Active Customers", value: "2,486", icon: Users, change: "+6.8%" },
  { title: "Inventory Value", value: "$84,720", icon: Package, change: "+3.1%" },
  { title: "Operational Health", value: "98.2%", icon: Activity, change: "+0.4%" },
]

export function KpiCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {items.map((item) => (
        <Card key={item.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0">
            <CardTitle className="text-sm">{item.title}</CardTitle>
            <item.icon className="size-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold">{item.value}</p>
            <p className="text-xs text-muted-foreground">{item.change} since last month</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
