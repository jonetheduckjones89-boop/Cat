import React, { useEffect, useState } from "react";
import FileUploader from "../components/FileUploader";
import { getFiles } from "../services/fileService";

// Adapted from Next.js server component to React client component
export default function FilesPage() {
  const [files, setFiles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFiles = async () => {
      // Service handles errors and returns mock data if needed
      const data = await getFiles();
      setFiles(data);
      setLoading(false);
    };
    fetchFiles();
  }, []);

  return (
    <div className="p-6 text-white max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Patient Files</h1>
        <FileUploader />
      </div>

      <div className="mt-6 space-y-4">
        {loading ? (
           <p className="text-neutral-500">Loading files...</p>
        ) : files.length > 0 ? (
          files.map((file: any) => (
            <div key={file.id} className="p-4 bg-neutral-800 rounded-xl border border-neutral-700 flex justify-between items-center">
              <span className="text-neutral-200">{file.filename}</span>
              <button className="text-sm text-blue-400 hover:text-blue-300">Download</button>
            </div>
          ))
        ) : (
          <p className="text-neutral-500">No files found.</p>
        )}
      </div>
    </div>
  );
}