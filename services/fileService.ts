import { api } from "./client";

export const uploadFile = async (formData: FormData) => {
  try {
    const res = await api.post("/files/upload", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return res.data;
  } catch (error) {
    console.warn("API unavailable, using mock response for uploadFile");
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 800));
    return { success: true, message: "File uploaded successfully (Mock)" };
  }
};

export const getFiles = async () => {
  try {
    const res = await api.get("/files");
    return res.data;
  } catch (error) {
    console.warn("API unavailable, using mock data for getFiles");
    return [
      { id: 1, filename: "patient_x_rays.pdf" },
      { id: 2, filename: "lab_results_2024.pdf" },
      { id: 3, filename: "referral_letter_smith.docx" },
      { id: 4, filename: "insurance_claim_v2.pdf" }
    ];
  }
};