import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const transactions = [
  { date: "2026-05-05", ref: "INV-1084", account: "Global Suppliers", amount: "$4,250.00", status: "Completed" },
  { date: "2026-05-05", ref: "PAY-1221", account: "Petty Cash", amount: "$320.00", status: "Pending" },
  { date: "2026-05-04", ref: "INV-1080", account: "Corporate Client A", amount: "$12,800.00", status: "Completed" },
  { date: "2026-05-03", ref: "ADJ-0089", account: "Inventory Adjustment", amount: "$90.00", status: "Failed" },
]

export function RecentTransactionsTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b text-left text-muted-foreground">
                <th className="p-2">Date</th>
                <th className="p-2">Reference</th>
                <th className="p-2">Account</th>
                <th className="p-2">Amount</th>
                <th className="p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((row) => (
                <tr key={row.ref} className="border-b last:border-none">
                  <td className="p-2">{row.date}</td>
                  <td className="p-2 font-medium">{row.ref}</td>
                  <td className="p-2">{row.account}</td>
                  <td className="p-2">{row.amount}</td>
                  <td className="p-2">{row.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}
