import React, { useEffect, useState } from "react";
import PatientCard from "../components/PatientCard";
import { getPatients } from "../api/patients";

export default function PatientsPage() {
  const [patients, setPatients] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPatients = async () => {
      const data = await getPatients();
      setPatients(data);
      setLoading(false);
    };
    fetchPatients();
  }, []);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-white">Patients</h1>
        <button className="bg-neutral-800 hover:bg-neutral-700 text-white px-4 py-2 rounded-lg border border-neutral-700">
          Add Patient
        </button>
      </div>
      
      {loading ? (
        <div className="text-white">Loading patients...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {patients.map((patient, idx) => (
            <PatientCard key={patient.id || idx} patient={patient} />
          ))}
        </div>
      )}
    </div>
  );
}