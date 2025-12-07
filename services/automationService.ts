import { api } from "./client";

export const triggerAutomation = async (payload: any) => {
  try {
    const res = await api.post("/automation/trigger", payload);
    return res.data;
  } catch (error) {
    console.warn("API unavailable, using mock response for triggerAutomation");
    // Simulate delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    return { success: true, message: "Automation triggered successfully (Mock)" };
  }
};