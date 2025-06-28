/* ---------- Modal.jsx ---------- */
import React from 'react';

export default function Modal({ open, onClose, children }) {
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-40 flex items-center justify-center bg-black/60 p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg rounded-xl bg-[#0b1a34] p-6 text-white shadow-lg"
        onClick={e => e.stopPropagation()}
      >
        <button
          className="mb-4 ml-auto inline-block rounded-full bg-gold px-3 py-1 text-[#081123]"
          onClick={onClose}
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
}
