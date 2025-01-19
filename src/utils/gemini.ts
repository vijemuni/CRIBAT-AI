import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY || '');

export const getInfoContent = async () => {
  try {
    const response = await fetch('/info.txt');
    const text = await response.text();
    return text;
  } catch (error) {
    console.error('Error fetching info content:', error);
    return '';
  }
};

export const getChatResponse = async (message: string, context: string) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    
    const prompt = `You are an AI assistant for CRIBAT. Your responses should be helpful, accurate, and based on the following context about CRIBAT. If the user's question cannot be answered using the provided context, provide a general helpful response or suggest contacting CRIBAT directly.

Context about CRIBAT:
${context}

Important Instructions:
- Keep responses concise and relevant
- If unsure, acknowledge limitations
- Maintain a professional yet friendly tone
- For specific inquiries not covered in context, suggest contacting CRIBAT directly

User Question: ${message}

Assistant Response:`;
    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error getting chat response:', error);
    throw error;
  }
}; 