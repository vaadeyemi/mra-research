import React, { useState } from 'react';

export default function NewsletterSignup() {
  const [joined, setJoined] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    /* Replace “your-newsletter-form-id” with real endpoint */
    fetch('https://formspree.io/f/your-newsletter-form-id', {
      method: 'POST',
      body: new FormData(e.target),
      headers: { Accept: 'application/json' },
    }).then(() => setJoined(true));
  };

  if (joined)
    return <p className="text-gold">✓ Thanks for subscribing!</p>;

  return (
   <center>
    <form onSubmit={handleSubmit} className="flex max-w-md gap-2">
      <input
        className="flex-1 rounded-md bg-[#081123] p-3 placeholder-gray-400"
        type="email"
        name="email"
        placeholder="Email Address"
        required
      />
      <button
        type="submit"
        className="rounded-md bg-gold px-4 py-3 font-semibold text-[#081123] hover:opacity-90"
      >
        Join
      </button>
    </form>
  </center>
  );
}
