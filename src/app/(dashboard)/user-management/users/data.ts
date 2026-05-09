import { User } from "./types"

export const MODULES = ["HR", "Finance", "Inventory", "Procurement", "Project", "CRM", "Reports", "Settings"]
export const ROLES = ["Administrator", "Manager", "Staff", "Viewer"]
export const DEPARTMENTS = ["Engineering", "Finance", "Human Resources", "Operations", "Sales", "IT", "Procurement"]

export const ROLE_COLORS: Record<string, string> = {
  Administrator: "bg-purple-100 text-purple-700",
  Manager: "bg-blue-100 text-blue-700",
  Staff: "bg-gray-100 text-gray-700",
  Viewer: "bg-orange-100 text-orange-700",
}

export const SEED_USERS: User[] = [
  {
    id: "USR-001",
    firstName: "Abebe",
    lastName: "Tadesse",
    email: "abebe.t@finot.com",
    phone: "+251 91 234 5678",
    role: "Administrator",
    department: "IT",
    status: "Active",
    employeeId: "EMP-001",
    permissions: ["HR", "Finance", "Inventory", "Procurement", "Project", "CRM", "Reports", "Settings"],
  },
  {
    id: "USR-002",
    firstName: "Tigist",
    lastName: "Bekele",
    email: "tigist.b@finot.com",
    phone: "+251 92 345 6789",
    role: "Manager",
    department: "Finance",
    status: "Active",
    employeeId: "EMP-002",
    permissions: ["Finance", "Reports"],
  },
  {
    id: "USR-003",
    firstName: "Dawit",
    lastName: "Haile",
    email: "dawit.h@finot.com",
    phone: "+251 93 456 7890",
    role: "Staff",
    department: "Procurement",
    status: "Active",
    employeeId: "EMP-003",
    permissions: ["Procurement", "Inventory"],
  },
  {
    id: "USR-004",
    firstName: "Sara",
    lastName: "Mulugeta",
    email: "sara.m@finot.com",
    phone: "+251 94 567 8901",
    role: "Viewer",
    department: "Human Resources",
    status: "Inactive",
    employeeId: "EMP-004",
    permissions: ["HR"],
  },
]
