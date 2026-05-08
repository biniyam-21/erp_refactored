import { KPICards } from "@/components/kpi-cards"
import { RevenueChart } from "@/components/revenue-chart"
import { Bell, HelpCircle, AlertTriangle, XCircle, AlertCircle } from "lucide-react"

const transactions = [
  { date: "2024-06-12", ref: "INV-9824", account: "Global Suppliers Ltd", debit: "$4,200.00", credit: "—", status: "Completed" },
  { date: "2024-06-12", ref: "PAY-4412", account: "Cash Petty Account", debit: "—", credit: "$150.00", status: "Pending" },
  { date: "2024-06-11", ref: "INV-9823", account: "Corporate Client A", debit: "—", credit: "$12,450.00", status: "Completed" },
  { date: "2024-06-11", ref: "ERR-0056", account: "Inventory Adj.", debit: "$22.00", credit: "—", status: "Failed" },
]

const statusStyle: Record<string, string> = {
  Completed: "bg-green-100 text-green-700",
  Pending: "bg-blue-100 text-blue-700",
  Failed: "bg-red-100 text-red-700",
}

const products = [
  { name: "MacBook Pro M3", pct: 84 },
  { name: 'Dell UltraSharp 27"', pct: 62 },
  { name: "Logitech MX Master 3S", pct: 45 },
]

export default function DashboardPage() {
  return (
    <div className="p-6">
      <header className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl font-bold text-[#1a1b21]">Operational Dashboard</h2>
          <p className="text-sm text-[#434651]">
            System Status: <span className="text-green-600 font-semibold">Healthy</span> • Last sync 2 mins ago
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex bg-[#e2e2e9] rounded-lg p-1">
            {["Daily", "Weekly", "Monthly"].map((t, i) => (
              <button key={t}
                className={`px-4 py-1.5 text-[12px] font-medium rounded-md transition-colors ${i === 0 ? "bg-white shadow-sm text-[#1a1b21]" : "text-[#434651] hover:text-[#1a1b21]"}`}>
                {t}
              </button>
            ))}
          </div>
          <div className="flex gap-2">
            <button className="w-10 h-10 rounded-full bg-[#f4f3fa] hover:bg-[#e8e7ef] flex items-center justify-center transition-colors">
              <Bell className="w-5 h-5 text-[#1a1b21]" />
            </button>
            <button className="w-10 h-10 rounded-full bg-[#f4f3fa] hover:bg-[#e8e7ef] flex items-center justify-center transition-colors">
              <HelpCircle className="w-5 h-5 text-[#1a1b21]" />
            </button>
          </div>
        </div>
      </header>

      <KPICards />
      <RevenueChart />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 bg-white rounded-xl border border-[#c4c6d3] shadow-sm overflow-hidden">
          <div className="p-6 border-b border-[#c4c6d3] flex justify-between items-center">
            <h3 className="text-base font-semibold text-[#1a1b21]">Recent Transactions</h3>
            <button className="text-sm font-medium text-[#073a86] hover:underline">View All</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-[#eeedf4] text-[#434651] text-[11px] uppercase tracking-wider">
                <tr>
                  {["Date", "Reference", "Account", "Debit", "Credit", "Status"].map((h) => (
                    <th key={h} className="px-6 py-3 font-semibold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#c4c6d3]">
                {transactions.map((tx) => (
                  <tr key={tx.ref} className="hover:bg-[#f4f3fa] transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-[#434651]">{tx.date}</td>
                    <td className="px-6 py-4 font-bold">{tx.ref}</td>
                    <td className="px-6 py-4">{tx.account}</td>
                    <td className="px-6 py-4 text-[#434651]">{tx.debit}</td>
                    <td className="px-6 py-4 text-[#434651]">{tx.credit}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-[11px] font-bold ${statusStyle[tx.status]}`}>
                        {tx.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="bg-white rounded-xl border border-[#c4c6d3] shadow-sm p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-base font-semibold text-[#1a1b21]">Stock Alerts</h3>
              <AlertTriangle className="w-5 h-5 text-[#9e3f44]" />
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-red-50 border border-red-100 rounded-lg">
                <div>
                  <p className="text-sm font-bold text-[#1a1b21]">Core CPU i9</p>
                  <p className="text-[11px] text-[#434651]">Current: 2 | Min: 10</p>
                </div>
                <XCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
              </div>
              <div className="flex items-center justify-between p-3 bg-orange-50 border border-orange-100 rounded-lg">
                <div>
                  <p className="text-sm font-bold text-[#1a1b21]">DDR5 RAM 32GB</p>
                  <p className="text-[11px] text-[#434651]">Current: 14 | Min: 15</p>
                </div>
                <AlertCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-[#c4c6d3] shadow-sm p-6 flex-1">
            <h3 className="text-base font-semibold text-[#1a1b21] mb-6">Top 5 Products</h3>
            <div className="space-y-5">
              {products.map((p) => (
                <div key={p.name}>
                  <div className="flex justify-between text-[12px] mb-1">
                    <span className="text-[#1a1b21]">{p.name}</span>
                    <span className="font-bold text-[#1a1b21]">{p.pct}%</span>
                  </div>
                  <div className="w-full h-2 bg-[#eeedf4] rounded-full overflow-hidden">
                    <div className="h-full rounded-full" style={{ width: `${p.pct}%`, background: "#2b529f" }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
