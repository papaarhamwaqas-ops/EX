import { ExamGeneratorForm } from '@/components/teacher/exam-generator-form';
import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';

export default function GenerateExamPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto max-w-4xl py-16 px-4">
            <div className="space-y-4 text-center mb-12">
                <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">AI Exam Question Generator</h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Streamline your exam preparation. Instantly create high-quality questions for any subject and topic.
                </p>
            </div>
            <ExamGeneratorForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}
