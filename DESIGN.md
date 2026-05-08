# DESIGN.md — Professional ERP Login (Stitch Project)

## Project
- **Name:** Nexus ERP / Finot Engineering & Trading PLC
- **Stitch Project:** Professional ERP Login (ID: 1239486734846250823)
- **Style:** Corporate / Modern, Flat Design, High-Density Information

---

## Color Palette

| Role | Token | Hex |
|------|-------|-----|
| Primary (Brand Burgundy) | `--primary` | `#822A30` |
| Primary (Stitch Default) | `--stitch-primary` | `#2563EB` (Trustworthy Blue) |
| Secondary (Brand Blue) | `--secondary` | `#2B529F` |
| Background | `--background` | `#F7F9FB` |
| Surface (Cards) | `--card` | `#FFFFFF` |
| Surface Container | `--surface-container` | `#ECEEF0` |
| Border | `--border` | `#E2E8F0` |
| Text Primary | `--foreground` | `#191C1E` |
| Text Secondary | `--muted-foreground` | `#434655` |
| Sidebar Background | `--sidebar-background` | `#0F172A` (Tertiary Dark) |
| Sidebar Text | `--sidebar-foreground` | `#FFFFFF` |
| Error | `--destructive` | `#BA1A1A` |
| Success | — | `#16A34A` |
| Warning | — | `#D97706` |

---

## Typography

- **Font Family:** Inter (all levels)
- **Display:** 36px / 700 / -0.02em
- **H1:** 30px / 600 / -0.01em
- **H2:** 24px / 600 / -0.01em
- **H3:** 20px / 600
- **Body LG:** 18px / 400
- **Body MD:** 16px / 400
- **Body SM:** 14px / 400
- **Label MD:** 14px / 600 / 0.01em
- **Label SM:** 12px / 600 / 0.02em

---

## Spacing

| Token | Value |
|-------|-------|
| xs | 4px |
| sm | 8px |
| md | 16px (default card padding) |
| lg | 24px (section separation) |
| xl | 32px |
| 2xl | 48px |
| gutter | 24px |

---

## Border Radius

- **Default / Buttons / Inputs:** `0.5rem` (8px)
- **Cards / Modals:** `0.75rem` (12px) → `rounded-lg`
- **Full (pills):** `9999px`

---

## Elevation & Depth

- **Level 0 (Canvas):** `#F8FAFC` background, no shadow
- **Level 1 (Cards):** White `#FFFFFF` + `1px solid #E2E8F0` border
- **Level 2 (Dropdowns / Modals):** Soft shadow — `0 4px 12px rgba(0,0,0,0.10)`
- **No gradients** — depth via z-index + borders only

---

## Layout

- **Grid:** 12-column fluid grid for dashboard views
- **Sidebar:** Fixed left, 260px wide, dark background `#0F172A`
- **Header:** Fixed top, `64px` tall, white background, `1px border-bottom`
- **Main Content:** Scrollable, `bg-[#F7F9FB]`, padded `24px`

---

## Dashboard Screens

### Stitch Screen: Enterprise Dashboard Overview

**KPI Cards (row of 4):**
| Metric | Value |
|--------|-------|
| Total Revenue | $124,589.00 |
| Orders Processed | 1,247 |
| Active Branches | 8 |
| Total Employees | 342 |

**Below KPIs:**
- **Financial Overview Chart** (Revenue vs Transactions, last 30 days) — area/line chart
- **Recent Transactions** table
- **Stock Alerts** panel (Core CPU i9: Current 2 / Min 10, DDR5 RAM 32GB: Current 14 / Min 15)
- **Top 5 Products** list

---

## Component Specs

### Sidebar
- Background: `#0F172A`
- Item text: `#FFFFFF` / `opacity-70` when inactive
- Active item: left `4px` accent bar with `#822A30` (primary), slightly lighter background
- Icon size: `20px`
- Item height: `44px`
- Group labels: `12px / 600 / uppercase / opacity-50`

### Cards
- Background: `#FFFFFF`
- Border: `1px solid #E2E8F0`
- Border-radius: `12px`
- Padding: `16px`
- No shadow (flat)

### KPI Cards
- Left border accent: `4px solid var(--primary)` or `var(--secondary)` alternating
- Metric value: `H2` size, bold
- Label: `Label SM`, muted

### Buttons
- **Primary:** `bg-[#822A30] text-white rounded-md px-4 py-2`
- **Secondary / Ghost:** `border border-[#E2E8F0] text-foreground`

### Tables
- Zebra striping: odd rows `#FFFFFF`, even rows `#F7F9FB`
- Header: `Label MD`, `font-semibold`, `border-bottom`
- Row height: `48px`

### Status Chips
- Pill shape: `rounded-full px-3 py-1`
- Low-saturation background, high-contrast text
- e.g., `bg-green-100 text-green-800`, `bg-amber-100 text-amber-800`

---

## Sidebar Modules

1. Dashboard
2. HR
3. Finance
4. Inventory
5. Procurement
6. Project
7. Multi-Branch
8. CRM
9. Settings
