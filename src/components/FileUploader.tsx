import React, { useState } from "react";
import { uploadFile } from "../api/files";

export default function FileUploader() {
  const [loading, setLoading] = useState(false);

  const handleUpload = async (e: any) => {
    if (!e.target.files?.[0]) return;
    
    setLoading(true);
    const formData = new FormData();
    formData.append("file", e.target.files[0]);

    // Service handles errors
    await uploadFile(formData);
    
    setLoading(false);
    alert("File uploaded");
  };

  return (
    <div className="flex items-center gap-4">
      <label className="cursor-pointer bg-neutral-800 hover:bg-neutral-700 text-white py-2 px-4 rounded-lg transition-colors border border-neutral-700">
        <input type="file" onChange={handleUpload} className="hidden" />
        {loading ? "Uploading..." : "Select File"}
      </label>
      {loading && <span className="text-sm text-neutral-400 animate-pulse">Processing...</span>}
    </div>
  );
}