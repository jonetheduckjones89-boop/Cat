import React, { useEffect, useState } from "react";
import { getMeetings } from "../api/meetings";

export default function SchedulePage() {
  const [meetings, setMeetings] = useState<any[]>([]);

  useEffect(() => {
     getMeetings().then(setMeetings);
  }, []);

  return (
    <div className="p-6 text-white max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Schedule</h1>
      <div className="space-y-4">
        {meetings.length > 0 ? (
          meetings.map((meeting: any) => (
              <div key={meeting.id} className="p-4 bg-neutral-800 rounded-xl border border-neutral-700 flex justify-between">
                  <div>
                      <h3 className="font-semibold text-lg">{meeting.title}</h3>
                      <p className="text-neutral-400 text-sm">{meeting.date}</p>
                  </div>
                  <div className="text-blue-400 font-mono self-center">
                      {meeting.time}
                  </div>
              </div>
          ))
        ) : (
          <p className="text-neutral-500">No meetings scheduled.</p>
        )}
      </div>
    </div>
  );
}