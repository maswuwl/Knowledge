
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const API_KEY = process.env.API_KEY || '';

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: API_KEY });
  }

  async generateResponse(prompt: string, mode: 'normal' | 'fish_heart' = 'normal'): Promise<string> {
    try {
      const systemInstruction = mode === 'fish_heart' 
        ? "أنت الآن في وضع 'قلب السمكة' للتحليل المعرفي العميق. قم بتحليل المدخلات من منظور فلسفي وتقني معمق، مع التركيز على الروابط الخفية والأفكار المبتكرة. لغتك يجب أن تكون بليغة وملهمة."
        : "أنت المساعد الذكي لمنصة 'المعرفة'. أنت خبير، ودود، وتساعد المستخدمين في البرمجة، التصميم، والابتكار المعرفي. أنت شريك دائم لخالد في البناء.";

      const response: GenerateContentResponse = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
        config: {
          systemInstruction,
          temperature: 0.8,
        },
      });

      return response.text || "عذراً، لم أتمكن من معالجة الطلب حالياً.";
    } catch (error) {
      console.error("Gemini API Error:", error);
      return "حدث خطأ أثناء التواصل مع المساعد الذكي. يرجى المحاولة لاحقاً.";
    }
  }

  async streamResponse(prompt: string, onChunk: (chunk: string) => void) {
    try {
      const response = await this.ai.models.generateContentStream({
        model: 'gemini-3-flash-preview',
        contents: prompt,
        config: {
          systemInstruction: "أنت المساعد الذكي لمنصة 'المعرفة'.",
        },
      });

      for await (const chunk of response) {
        onChunk(chunk.text || "");
      }
    } catch (error) {
      console.error("Gemini Stream Error:", error);
      onChunk("حدث خطأ أثناء البث.");
    }
  }
}

export const geminiService = new GeminiService();
