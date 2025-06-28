/* ---------- ApplicationForm.jsx ---------- */
import React, { useState } from 'react';

export default function ApplicationForm({ type }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    // TODO: replace with real endpoint (Formspree, etc.)
    setSubmitted(true);
  };

  if (submitted)
    return (
      <div className="text-center">
        <h4 className="mb-2 text-xl font-semibold text-gold">
          {type} Application
        </h4>
        <p>Thank you! Your application has been received.</p>
      </div>
    );

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <h4 className="text-xl font-semibold text-gold">
        {type} Application
      </h4>

      <input
        className="w-full rounded-md bg-[#081123] p-3 placeholder-gray-400"
        type="text"
        name="name"
        placeholder="Full Name"
        required
      />
      <input
        className="w-full rounded-md bg-[#081123] p-3 placeholder-gray-400"
        type="email"
        name="email"
        placeholder="Email Address"
        required
      />
      {type === 'Membership' ? (
        <select
          className="w-full rounded-md bg-[#081123] p-3"
          name="category"
          required
        >
          <option value="">Member Category</option>
          <option>Undergraduate Student</option>
          <option>Postgraduate Student</option>
          <option>Researcher</option>
        </select>
      ) : (
        <input
          className="w-full rounded-md bg-[#081123] p-3 placeholder-gray-400"
          type="text"
          name="organization"
          placeholder="Institution / Company Name"
          required
        />
      )}

      <textarea
        className="h-28 w-full resize-none rounded-md bg-[#081123] p-3 placeholder-gray-400"
        name="message"
        placeholder="Brief message / motivation"
        required
      />

      <button
        type="submit"
        className="block w-full rounded-md bg-gold py-3 font-semibold text-[#081123] hover:opacity-90"
      >
        Submit
      </button>
    </form>
  );
}
