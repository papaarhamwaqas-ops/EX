import Link from "next/link";
import { LoginForm } from "@/components/login/login-form";
import { Logo } from "@/components/logo";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-dvh bg-background p-4">
        <div className="absolute top-4 left-4">
            <Button variant="ghost" asChild>
                <Link href="/" className="flex items-center gap-2">
                    <ArrowLeft className="size-4" />
                    Back to Home
                </Link>
            </Button>
        </div>
      <div className="w-full max-w-md">
        <div className="flex flex-col items-center text-center mb-8">
            <Logo />
            <h1 className="text-2xl font-bold mt-4">Welcome to Exam Center</h1>
            <p className="text-muted-foreground">Select your role to sign in</p>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}
