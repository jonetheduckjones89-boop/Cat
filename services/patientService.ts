import { api } from "./client";

export const getPatients = async () => {
  try {
    const res = await api.get("/patients");
    return res.data;
  } catch (error) {
    console.warn("API unavailable, using mock data for getPatients");
    return [
      { id: 1, name: "John Doe", email: "john@example.com", phone: "555-0101" },
      { id: 2, name: "Jane Smith", email: "jane@example.com", phone: "555-0102" },
      { id: 3, name: "Robert Johnson", email: "robert.j@example.com", phone: "555-0103" },
      { id: 4, name: "Emily Davis", email: "emily.d@example.com", phone: "555-0104" }
    ];
  }
};

export const getPatientById = async (id: string) => {
  try {
    const res = await api.get(`/patients/${id}`);
    return res.data;
  } catch (error) {
    return { id, name: "John Doe", email: "john@example.com", phone: "555-0101" };
  }
};

export const createPatient = async (patient: any) => {
  try {
    const res = await api.post("/patients", patient);
    return res.data;
  } catch (error) {
    return { ...patient, id: Math.floor(Math.random() * 1000) };
  }
};