export interface User {
  id: string
  firstName: string
  lastName: string
  email: string
  phone: string
  role: string
  department: string
  status: "Active" | "Inactive"
  employeeId: string
  permissions: string[]
}
