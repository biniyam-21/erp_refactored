"use client"

import {
  ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer,
} from "recharts"

const data = [
  { name: "Jun 1",  revenue: 38000, tx: 210 },
  { name: "Jun 5",  revenue: 29000, tx: 165 },
  { name: "Jun 8",  revenue: 55000, tx: 310 },
  { name: "Jun 11", revenue: 41000, tx: 240 },
  { name: "Jun 14", revenue: 68000, tx: 390 },
  { name: "Jun 17", revenue: 32000, tx: 185 },
  { name: "Jun 20", revenue: 51000, tx: 295 },
  { name: "Jun 23", revenue: 74000, tx: 425 },
  { name: "Jun 26", revenue: 47000, tx: 270 },
  { name: "Jun 29", revenue: 59000, tx: 340 },
  { name: "Jun 30", revenue: 63000, tx: 360 },
]

export function RevenueChart() {
  return (
    <div className="bg-white rounded-xl border border-[#c4c6d3] shadow-sm mb-4 p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-base font-semibold text-[#1a1b21]">Financial Overview</h3>
          <p className="text-sm text-[#434651]">Revenue vs Transaction trends over the last 30 days</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-4 mr-2">
            <span className="flex items-center gap-2 text-[12px]">
              <span className="w-3 h-3 rounded-full inline-block" style={{ background: "#2b529f" }} />Revenue
            </span>
            <span className="flex items-center gap-2 text-[12px]">
              <span className="w-3 h-3 rounded-full inline-block" style={{ background: "#9e3f44" }} />Transactions
            </span>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border border-[#c4c6d3] rounded-lg text-sm hover:bg-[#eeedf4] transition-colors">
            June 2024
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-white hover:opacity-90 transition-opacity"
            style={{ background: "#2b529f" }}>
            Export
          </button>
        </div>
      </div>

      <div className="h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={data} margin={{ top: 4, right: 8, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#c4c6d3" vertical={false} />
            <XAxis dataKey="name" tick={{ fontSize: 11, fill: "#747782" }} tickLine={false} axisLine={false} />
            <YAxis yAxisId="left" tick={{ fontSize: 11, fill: "#747782" }} tickLine={false} axisLine={false}
              tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`} />
            <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 11, fill: "#747782" }} tickLine={false} axisLine={false} />
            <Tooltip
              contentStyle={{ fontSize: 12, borderRadius: 8, border: "1px solid #c4c6d3", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}
              formatter={(v, name) => [
                name === "revenue" ? `$${Number(v).toLocaleString()}` : v,
                name === "revenue" ? "Revenue" : "Transactions"
              ]}
            />
            <Bar yAxisId="left" dataKey="revenue" fill="#2b529f" radius={[4, 4, 0, 0]} maxBarSize={32} />
            <Line yAxisId="right" type="monotone" dataKey="tx" stroke="#9e3f44" strokeWidth={2.5} dot={false} />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
