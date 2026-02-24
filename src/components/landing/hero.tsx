import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative bg-background">
      <div className="container mx-auto max-w-7xl px-4 py-20 sm:py-28 lg:py-36">
        <div className="text-center">
          <h1 className="font-extrabold tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="block text-primary">EX –</span>
            <span className="block text-foreground">Smart Digital Exam Center</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground">
            A secure platform where teachers upload exams and students attempt tests using special access keys.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#sample-paper">View Sample Paper</Link>
            </Button>
          </div>
        </div>
      </div>
       <div className="absolute inset-0 -z-10 h-full w-full bg-background [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]">
        <div className="absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 transform-gpu blur-3xl" aria-hidden="true">
          <div 
            className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#f9d527] to-[#fcefb4] opacity-20" 
          />
        </div>
      </div>
    </section>
  );
}
