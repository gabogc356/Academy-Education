import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export const openaiService = {
  async generateText(prompt: string, model: string = 'gpt-4-turbo') {
    try {
      const message = await openai.messages.create({
        model: model,
        max_tokens: 2048,
        messages: [
          {
            role: 'user',
            content: prompt,
          },
        ],
      });

      return message.content[0].type === 'text' ? message.content[0].text : '';
    } catch (error: any) {
      throw new Error(error.message || 'Error en OpenAI');
    }
  },

  async chat(messages: Array<{ role: 'user' | 'assistant'; content: string }>) {
    try {
      const response = await openai.messages.create({
        model: 'gpt-4-turbo',
        max_tokens: 2048,
        messages,
      });

      return response.content[0].type === 'text' ? response.content[0].text : '';
    } catch (error: any) {
      throw new Error(error.message || 'Error en chat OpenAI');
    }
  },

  async generateBook(title: string, genre: string, chapters: number) {
    const prompt = `Genera un libro completo titulado "${title}" del género "${genre}" con ${chapters} capítulos. 
Formato: Cada capítulo debe tener título y contenido de al menos 500 palabras.`;
    return this.generateText(prompt);
  },
};
