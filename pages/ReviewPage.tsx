import React, { useState } from "react";
import { reviewPresentation } from "../services/aiService";

export default function ReviewPage() {
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const runReview = async () => {
    setLoading(true);
    // Service handles errors and returns mock data if needed
    const res = await reviewPresentation("123"); 
    setResponse(res.summary);
    setLoading(false);
  };

  return (
    <div className="p-6 text-white max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">AI Presentation Review</h1>
      <p className="text-neutral-400 mb-6">Analyze patient data presentations using our advanced AI model.</p>

      <button 
        onClick={runReview} 
        disabled={loading}
        className="px-6 py-3 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 disabled:opacity-50 rounded-lg font-medium transition-colors"
      >
        {loading ? "Analyzing..." : "Run Review"}
      </button>

      {response && (
        <div className="mt-8 p-6 bg-neutral-800 rounded-xl border border-neutral-700 shadow-lg">
          <h2 className="text-lg font-semibold text-blue-300 mb-2">Analysis Result</h2>
          <p className="text-neutral-300 leading-relaxed">{response}</p>
        </div>
      )}
    </div>
  );
}