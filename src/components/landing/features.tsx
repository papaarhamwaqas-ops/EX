import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { KeyRound, UploadCloud, UserCheck, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: <KeyRound className="size-8 text-primary" />,
    title: "Secure Exam Keys",
    description: "Teachers retain full control over who can access their exams with unique, secure keys for students.",
  },
  {
    icon: <UploadCloud className="size-8 text-primary" />,
    title: "Easy Paper Upload",
    description: "A fast and intuitive interface allows teachers to upload exam papers in just a few clicks.",
  },
  {
    icon: <UserCheck className="size-8 text-primary" />,
    title: "Student-Friendly Interface",
    description: "A simple, clean, and distraction-free test experience designed to help students focus.",
  },
  {
    icon: <ShieldCheck className="size-8 text-primary" />,
    title: "Admin Approval System",
    description: "Centralized management with an admin panel to approve and manage all uploaded exam papers.",
  },
];

export function Features() {
  return (
    <section className="py-16 sm:py-24 bg-muted/40">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">Platform Benefits</h2>
          <p className="mt-4 text-lg text-muted-foreground">Everything you need for a modern examination process.</p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Card key={feature.title} className="text-center shadow-sm hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <CardTitle className="text-xl font-semibold text-foreground">{feature.title}</CardTitle>
                <CardDescription className="mt-2 text-muted-foreground">{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
