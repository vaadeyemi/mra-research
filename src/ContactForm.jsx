import React, { useState } from 'react';

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    /* TODO: replace “your-form-id” with a real endpoint
       (Formspree, Getform, Google Forms, backend API, etc.) */
    fetch('https://formspree.io/f/your-form-id', {
      method: 'POST',
      body: new FormData(e.target),
      headers: { Accept: 'application/json' },
    }).then(() => setSent(true));
  };

  if (sent)
    return (
      <div className="text-center">
        <h4 className="mb-2 text-xl font-semibold text-gold">Message Sent</h4>
        <p>Thank you! We’ll be in touch shortly.</p>
      </div>
    );

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h4 className="text-xl font-semibold text-gold">Contact Us</h4>

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
      <textarea
        className="h-32 w-full resize-none rounded-md bg-[#081123] p-3 placeholder-gray-400"
        name="message"
        placeholder="Your Message"
        required
      />

      <button
        type="submit"
        className="block w-full rounded-md bg-gold py-3 font-semibold text-[#081123] hover:opacity-90"
      >
        Send
      </button>
    </form>
  );
}
