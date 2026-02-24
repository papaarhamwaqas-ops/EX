import Link from 'next/link';
import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function Header({ className }: { className?: string }) {
  return (
    <header className={cn("sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60", className)}>
      <div className="container flex h-16 max-w-7xl items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Logo className="size-8 text-xl" />
          <span className="font-bold text-lg hidden sm:inline-block text-foreground">EX – Exam Center</span>
        </Link>
        <nav className="flex items-center gap-2">
           <Button variant="ghost" asChild>
             <Link href="/#sample-paper">Sample Paper</Link>
           </Button>
           <Button asChild>
             <Link href="/login">Login</Link>
           </Button>
        </nav>
      </div>
    </header>
  );
}
