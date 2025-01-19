<<<<<<< HEAD
# CRIBAT-AI
=======
# Gemini Chat Application

A React-based chat application powered by Google's Gemini AI that provides responses based on information from a local text file.

## Features

- React + TypeScript + Vite setup
- Integration with Google's Gemini AI
- Context-aware responses based on info.txt
- Modern UI with Tailwind CSS
- Markdown support for chat messages

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory and add your Gemini API key:
   ```
   VITE_GEMINI_API_KEY=your-api-key-here
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## Configuration

The chat responses are based on the content of `info.txt` in the root directory. You can modify this file to customize the information the chatbot uses to generate responses.

## Technologies Used

- React
- TypeScript
- Vite
- Google Generative AI (Gemini)
- Tailwind CSS
- React Markdown

## Development

To modify the chat behavior, you can:
1. Update the content in `info.txt`
2. Modify the chat component in `src/components/Chat.tsx`
3. Adjust the Gemini API configuration in `src/utils/gemini.ts` 
>>>>>>> ca2d8b8 (Force update)
