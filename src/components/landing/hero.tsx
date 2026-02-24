import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative bg-black">
      <div className="container mx-auto max-w-7xl px-4 py-20 sm:py-28 lg:py-36">
        <div className="text-center">
          <h1 className="font-extrabold tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="block text-primary">EX –</span>
            <span className="block text-white">Smart Digital Exam Center</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-neutral-200">
            A secure platform where teachers upload exams and students attempt tests using special access keys.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-foreground" asChild>
              <Link href="#sample-paper">View Sample Paper</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
