import Link from "next/link";
import { Logo } from "../logo";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t">
            <div className="container mx-auto max-w-7xl px-4 py-8">
                <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                    <div className="flex items-center gap-3">
                        <Logo className="size-8 text-xl" />
                        <span className="font-bold text-lg text-foreground">EX – Exam Center</span>
                    </div>
                    <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
                        <Link href="/" className="hover:text-primary">Home</Link>
                        <Link href="/login" className="hover:text-primary">Login</Link>
                        <Link href="/#sample-paper" className="hover:text-primary">Sample Paper</Link>
                        <Link href="/teacher/generate-exam" className="hover:text-primary">Teacher Tools</Link>
                    </nav>
                </div>
                <div className="mt-6 text-center text-xs text-muted-foreground">
                    &copy; {currentYear} EX – Exam Center. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
