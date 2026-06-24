import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic({
  apiKey: import.meta.env.VITE_ANTHROPIC_API_KEY,
});

export const anthropicService = {
  async chat(messages: Array<{ role: 'user' | 'assistant'; content: string }>) {
    try {
      const response = await anthropic.messages.create({
        model: 'claude-3-5-sonnet-20241022',
        max_tokens: 2048,
        messages,
      });

      return response.content[0].type === 'text' ? response.content[0].text : '';
    } catch (error: any) {
      throw new Error(error.message || 'Error en Anthropic');
    }
  },

  async solveEquation(equation: string) {
    const prompt = `Resuelve la siguiente ecuación algebraica paso a paso: ${equation}. Explica cada paso detalladamente.`;
    return this.chat([
      {
        role: 'user',
        content: prompt,
      },
    ]);
  },

  async explainScience(topic: string) {
    const prompt = `Explica de forma clara y educativa el siguiente tema científico: ${topic}. Incluye ejemplos y analogías.`;
    return this.chat([
      {
        role: 'user',
        content: prompt,
      },
    ]);
  },
};
