// @ts-nocheck
import { createReactAgent } from '@langchain/langgraph/prebuilt';
import { ChatGoogleGenerativeAI } from '@langchain/google-genai';
import { z } from 'zod';
import { MemorySaver } from '@langchain/langgraph';

import { tool } from '@langchain/core/tools';

const budgetSchema = z.object({
  pay: z.number().describe('The total pay amount'),
  bills: z.number().describe('The total bills amount'),
});

type BudgetInput = z.infer<typeof budgetSchema>;

const budgetTool = tool(async ({ pay, bills }: BudgetInput) => {
  const amount = pay - bills;
  if (amount < 0) {
    return `You are over budget by $${Math.abs(amount)}.`;
  }
  return `You are within budget by $${amount}.`;
}, {
  name: 'budget_tool',
  description: 'Calculate if you are over or within budget given pay and bills.',
  schema: budgetSchema
});

const model = new ChatGoogleGenerativeAI({
  model: 'gemini-2.5-flash',
  apiKey: process.env.GOOGLE_API_KEY,
});

const checkpointSaver = new MemorySaver();


export const agent = createReactAgent({
  name: 'human',
  llm: model,
  tools: [budgetTool],
  checkpointSaver,
});