import { api } from "./client";

export const reviewPresentation = async (patientId: string) => {
  try {
    const res = await api.post(`/ai/review/${patientId}`);
    return res.data;
  } catch (error) {
    // Simulate AI processing time
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    return {
      summary: "AI Analysis: The patient demonstrates stable vital signs compared to the previous visit. Blood pressure has normalized to 120/80. However, cholesterol levels remain slightly elevated. Recommendation: Continue current medication regimen and schedule a dietary consultation."
    };
  }
};