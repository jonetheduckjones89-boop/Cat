import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full p-4 bg-neutral-900 text-white flex gap-6 items-center border-b border-neutral-800">
      <div className="font-bold text-lg text-blue-500 mr-4">HealthAuto</div>
      <Link to="/" className="hover:text-blue-400 transition-colors">Dashboard</Link>
      <Link to="/patients" className="hover:text-blue-400 transition-colors">Patients</Link>
      <Link to="/schedule" className="hover:text-blue-400 transition-colors">Schedule</Link>
      <Link to="/files" className="hover:text-blue-400 transition-colors">Files</Link>
      <Link to="/ai-review" className="hover:text-blue-400 transition-colors">AI Review</Link>
    </nav>
  );
}