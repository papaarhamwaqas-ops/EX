import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function SamplePaper() {
  return (
    <section id="sample-paper" className="py-16 sm:py-24">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">Sample Exam Paper</h2>
          <p className="mt-4 text-lg text-muted-foreground">Get a feel for the student testing experience.</p>
        </div>
        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex flex-col sm:flex-row justify-between sm:items-center">
              <CardTitle className="text-2xl font-bold text-foreground">Mathematics</CardTitle>
              <p className="text-muted-foreground mt-2 sm:mt-0">Duration: 30 Minutes</p>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <h3 className="font-semibold text-lg text-foreground">Questions Preview:</h3>
              <ul className="list-decimal list-inside space-y-4 text-muted-foreground">
                <li>
                  <p className="inline text-foreground">What is 12 × 8?</p>
                </li>
                <li>
                  <p className="inline text-foreground">Solve for x: 5x + 10 = 20</p>
                </li>
                <li>
                  <p className="inline text-foreground">Find the square root of 144.</p>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
