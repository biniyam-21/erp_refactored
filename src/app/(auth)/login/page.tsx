import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center p-6">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Sign in to Fnot ERP</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input type="email" placeholder="Email address" />
          <Input type="password" placeholder="Password" />
          <Button className="w-full">Sign In</Button>
        </CardContent>
      </Card>
    </main>
  )
}
