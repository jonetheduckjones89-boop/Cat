import React from "react";

export default function PatientCard({ patient }: any) {
  return (
    <div className="p-4 bg-neutral-800 rounded-xl text-white border border-neutral-700 hover:border-blue-500 transition-colors">
      <h3 className="text-xl font-semibold text-blue-100">{patient.name}</h3>
      <div className="mt-2 text-neutral-400 text-sm">
        <p>Email: {patient.email}</p>
        <p>Phone: {patient.phone}</p>
      </div>
    </div>
  );
}