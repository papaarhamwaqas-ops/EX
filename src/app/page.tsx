import { Features } from "@/components/landing/features";
import { Hero } from "@/components/landing/hero";
import { SamplePaper } from "@/components/landing/sample-paper";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <SamplePaper />
      </main>
      <Footer />
    </div>
  );
}
