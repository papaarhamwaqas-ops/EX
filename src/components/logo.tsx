import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("inline-flex items-center justify-center bg-primary text-primary-foreground font-extrabold text-2xl rounded-md size-10", className)}>
      EX
    </div>
  );
}
