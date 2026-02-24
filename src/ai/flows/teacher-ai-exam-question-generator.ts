'use server';
/**
 * @fileOverview An AI tool for teachers to generate exam questions.
 *
 * - generateExamQuestions - A function that generates exam questions based on subject, topic, and difficulty.
 * - GenerateExamQuestionsInput - The input type for the generateExamQuestions function.
 * - GenerateExamQuestionsOutput - The return type for the generateExamQuestions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateExamQuestionsInputSchema = z.object({
  subject: z.string().describe('The subject for which to generate questions (e.g., "Mathematics", "History").'),
  topic: z.string().describe('The specific topic within the subject (e.g., "Algebra", "World War II").'),
  difficulty: z.enum(['Easy', 'Medium', 'Hard']).describe('The desired difficulty level of the questions.'),
  numberOfQuestions: z.number().int().min(1).default(5).describe('The number of questions to generate. Defaults to 5.'),
});
export type GenerateExamQuestionsInput = z.infer<typeof GenerateExamQuestionsInputSchema>;

const GenerateExamQuestionsOutputSchema = z.object({
  questions: z.array(z.string()).describe('An array of generated exam questions.'),
});
export type GenerateExamQuestionsOutput = z.infer<typeof GenerateExamQuestionsOutputSchema>;

export async function generateExamQuestions(input: GenerateExamQuestionsInput): Promise<GenerateExamQuestionsOutput> {
  return generateExamQuestionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateExamQuestionsPrompt',
  input: {schema: GenerateExamQuestionsInputSchema},
  output: {schema: GenerateExamQuestionsOutputSchema},
  prompt: `You are an expert educator and exam question generator. Your task is to create high-quality exam questions based on the provided subject, topic, and difficulty level.

Generate {{{numberOfQuestions}}} questions for the following criteria:
Subject: {{{subject}}}
Topic: {{{topic}}}
Difficulty: {{{difficulty}}}

Ensure the questions are clear, concise, and appropriate for the specified difficulty.

Example Output format:
[
  "Question 1?",
  "Question 2?",
  "Question 3?"
]`,
});

const generateExamQuestionsFlow = ai.defineFlow(
  {
    name: 'generateExamQuestionsFlow',
    inputSchema: GenerateExamQuestionsInputSchema,
    outputSchema: GenerateExamQuestionsOutputSchema,
  },
  async (input) => {
    const {output} = await prompt(input);
    return output!;
  }
);
