import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../api/client";

export default function DashboardPage() {
  const [serverStatus, setServerStatus] = useState<"checking" | "online" | "offline">("checking");

  useEffect(() => {
    api.get("/health")
      .then(() => setServerStatus("online"))
      .catch(() => setServerStatus("offline"));
  }, []);

  return (
    <div className="p-6 text-white">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Welcome Back, Dr. Smith</h1>
        <div className="flex items-center gap-2 text-sm bg-neutral-800 py-1 px-3 rounded-full border border-neutral-700">
          <span className={`w-2 h-2 rounded-full ${serverStatus === "online" ? "bg-green-500" : serverStatus === "offline" ? "bg-red-500" : "bg-yellow-500"}`}></span>
          <span className="text-neutral-400 capitalize">System: {serverStatus}</span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-neutral-800 rounded-xl border border-neutral-700">
            <h2 className="text-xl font-semibold mb-2 text-blue-300">Quick Stats</h2>
            <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="bg-neutral-900 p-4 rounded-lg">
                    <span className="block text-3xl font-bold">12</span>
                    <span className="text-neutral-400 text-sm">Patients Today</span>
                </div>
                <div className="bg-neutral-900 p-4 rounded-lg">
                    <span className="block text-3xl font-bold">3</span>
                    <span className="text-neutral-400 text-sm">Pending Reviews</span>
                </div>
            </div>
        </div>

        <div className="p-6 bg-neutral-800 rounded-xl border border-neutral-700">
             <h2 className="text-xl font-semibold mb-4 text-blue-300">Actions</h2>
             <div className="space-y-3">
                <Link to="/patients" className="block w-full text-center py-3 bg-neutral-700 hover:bg-neutral-600 rounded-lg transition-colors">
                    View Patient List
                </Link>
                <Link to="/schedule" className="block w-full text-center py-3 bg-neutral-700 hover:bg-neutral-600 rounded-lg transition-colors">
                    Check Schedule
                </Link>
                <Link to="/ai-review" className="block w-full text-center py-3 bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors font-semibold">
                    Start AI Review
                </Link>
             </div>
        </div>
      </div>
    </div>
  );
}
