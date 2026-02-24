'use server';

import { generateExamQuestions, type GenerateExamQuestionsInput, type GenerateExamQuestionsOutput } from '@/ai/flows/teacher-ai-exam-question-generator';

interface ActionResult {
    success: boolean;
    data?: GenerateExamQuestionsOutput;
    error?: string;
}

export async function generateQuestionsAction(input: GenerateExamQuestionsInput): Promise<ActionResult> {
  try {
    const output = await generateExamQuestions(input);
    return { success: true, data: output };
  } catch (error) {
    console.error('Error generating questions:', error);
    // In a real app, you might want to log this error to a monitoring service
    return { success: false, error: 'An unexpected error occurred. Please try again later.' };
  }
}
