import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs"
import { AlertCircle } from "lucide-react"
import Link from "next/link"

export default function AuthError() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <Alert variant="destructive" className="max-w-[500px]">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Authentication Error</AlertTitle>
        <AlertDescription className="mt-2">
          <p>Please log in to access this feature.</p>
          <div className="mt-4 flex gap-2">
            <LoginLink className="text-primary hover:underline">
              Login
            </LoginLink>
            <span>or</span>
            <Link href="/" className="text-primary hover:underline">
              Return Home
            </Link>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  )
} 