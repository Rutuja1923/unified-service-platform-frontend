import React, { useState } from "react";

export default function BookingModal({ service, onClose, onBooked }) {
  const [scheduledAt, setScheduledAt] = useState("");
  const [notes, setNotes] = useState("");

  const handleBook = () => {
    onBooked();
  };

  return (
    <div className="fixed inset-0 bg-blue-900/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-96 shadow-lg">
        <h3 className="font-bold text-blue-800 mb-2 text-lg">Book: {service.title}</h3>
        <input type="datetime-local" className="w-full mb-2" value={scheduledAt} onChange={e => setScheduledAt(e.target.value)} />
        <textarea className="w-full mb-2" placeholder="Notes" value={notes} onChange={e => setNotes(e.target.value)} />
        <div className="flex justify-end gap-2 mt-2">
          <button onClick={onClose} className="px-3 py-1 border border-blue-400 rounded hover:bg-blue-50">Cancel</button>
          <button onClick={handleBook} className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700">Book</button>
        </div>
      </div>
    </div>
  );
}
