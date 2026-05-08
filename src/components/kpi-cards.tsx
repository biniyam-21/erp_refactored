"use client"

import { TrendingUp, ShoppingCart, Building2, UserPlus, Plus } from "lucide-react"
import { ReactNode } from "react"

interface KPICardProps {
  title: string
  value: string
  icon: ReactNode
  iconBg: string
  accentColor: string
  badge: ReactNode
}

function KPICard({ title, value, icon, iconBg, accentColor, badge }: KPICardProps) {
  return (
    <div className="bg-white p-6 rounded-xl border border-[#c4c6d3] shadow-sm relative overflow-hidden">
      {/* left accent bar */}
      <div className="absolute top-0 left-0 w-1.5 h-full" style={{ background: accentColor }} />
      <div className="flex justify-between items-start mb-4">
        <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ background: iconBg }}>
          {icon}
        </div>
        {badge}
      </div>
      <h3 className="text-[11px] font-medium text-[#434651] uppercase tracking-wider mb-1">{title}</h3>
      <p className="text-[28px] font-bold leading-[34px] tracking-tight">{value}</p>
    </div>
  )
}

function GreenBadge({ label }: { label: string }) {
  return (
    <span className="flex items-center gap-1 text-green-600 text-[11px] font-bold bg-green-50 px-2 py-1 rounded">
      <TrendingUp className="w-3.5 h-3.5" />{label}
    </span>
  )
}

function NeutralBadge({ label }: { label: string }) {
  return (
    <span className="text-[#434651] text-[11px] font-bold bg-[#eeedf4] px-2 py-1 rounded">{label}</span>
  )
}

export function KPICards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
      <KPICard
        title="Total Revenue"
        value="$124,589.00"
        accentColor="#073a86"
        iconBg="#d9e2ff"
        icon={<TrendingUp className="w-6 h-6 text-[#073a86]" />}
        badge={<GreenBadge label="+12.5%" />}
      />
      <KPICard
        title="Orders Processed"
        value="1,247"
        accentColor="#9e3f44"
        iconBg="#ffdad9"
        icon={<ShoppingCart className="w-6 h-6 text-[#9e3f44]" />}
        badge={<GreenBadge label="+8.2%" />}
      />
      <KPICard
        title="Active Branches"
        value="8"
        accentColor="#633100"
        iconBg="#ffdcc4"
        icon={<Building2 className="w-6 h-6 text-[#633100]" />}
        badge={<NeutralBadge label="Stable" />}
      />
      <KPICard
        title="Total Employees"
        value="342"
        accentColor="#2b529f"
        iconBg="#b0c6ff"
        icon={<UserPlus className="w-6 h-6 text-[#073a86]" />}
        badge={
          <span className="flex items-center gap-1 text-green-600 text-[11px] font-bold bg-green-50 px-2 py-1 rounded">
            <Plus className="w-3 h-3" />24 New
          </span>
        }
      />
    </div>
  )
}
