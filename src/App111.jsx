
import React from 'react';

export default function App() {
  const year = new Date().getFullYear();
  return (
    <div className="min-h-screen w-full bg-[#0b1a34] text-white font-serif">
      {/* Header / Navigation */}
      <header className="w-full py-4 px-6 bg-[#081123] flex items-center justify-between shadow-lg">
        <h1 className="text-2xl font-bold">MRA</h1>
        <nav className="space-x-6 hidden md:flex">
          <a href="#about" className="hover:text-gold">About</a>
          <a href="#membership" className="hover:text-gold">Membership</a>
          <a href="#partnership" className="hover:text-gold">Partnership</a>
          <a href="#research" className="hover:text-gold">Research & Programs</a>
          <a href="#events" className="hover:text-gold">Events</a>
          <a href="#contact" className="hover:text-gold">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative flex flex-col items-center justify-center text-center py-24 px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Multidisciplinary Research Academy</h2>
        <p className="text-lg md:text-xl mb-8 italic">Advancing Knowledge, Inspiring Futures</p>
        <div className="flex gap-4">
          <button className="bg-gold text-[#081123] px-6 py-3 rounded-2xl shadow hover:shadow-lg">Join MRA</button>
          <button className="border border-gold px-6 py-3 rounded-2xl hover:bg-[rgba(212,175,55,0.2)]">Partner With Us</button>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="about" className="py-20 px-4 grid md:grid-cols-2 gap-12 bg-[#0d203f]">
        <div>
          <h3 className="text-3xl font-bold mb-4 text-gold">Vision</h3>
          <p className="leading-relaxed">To become a globally recognized hub for transformative research, academic excellence, and interdisciplinary innovation.</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold mb-4 text-gold">Mission</h3>
          <p className="leading-relaxed">MRA brings together diverse minds to foster collaboration, inspire discovery, and advance excellence in research—driving progress through shared purpose and intellectual freedom.</p>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-4">
        <h3 className="text-center text-3xl font-bold mb-10 text-gold">Our Core Values</h3>
        <div className="max-w-4xl mx-auto grid md:grid-cols-5 gap-8 text-center">
          {[
            { title: 'Integrity', desc: 'Honesty & accountability' },
            { title: 'Excellence', desc: 'Highest academic standards' },
            { title: 'Collaboration', desc: 'Bridging disciplines' },
            { title: 'Innovation', desc: 'Bold ideas' },
            { title: 'Impact', desc: 'Real-world solutions' }
          ].map((v) => (
            <div key={v.title} className="p-4 border border-gold rounded-2xl">
              <h4 className="font-semibold text-gold mb-2">{v.title}</h4>
              <p className="text-sm leading-snug">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Membership */}
      <section id="membership" className="py-20 px-4 bg-[#0d203f] text-center">
        <h3 className="text-3xl font-bold text-gold mb-6">Membership</h3>
        <p className="max-w-3xl mx-auto mb-8">Apply to become a member of MRA—open to undergraduate students, postgraduate students, and researchers.</p>
        <button className="bg-gold text-[#081123] px-8 py-3 rounded-2xl">Apply for Membership</button>
        <ul className="mt-12 grid md:grid-cols-5 gap-6 max-w-5xl mx-auto text-left list-disc list-inside">
          {['Access to resources', 'Networking opportunities', 'Professional development', 'Funding & grants', 'Discounts & waivers'].map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      </section>

      {/* Partnership */}
      <section id="partnership" className="py-20 px-4 text-center">
        <h3 className="text-3xl font-bold text-gold mb-6">Partnership & Collaboration</h3>
        <p className="max-w-3xl mx-auto mb-8">Institutions and industries can collaborate with MRA on research, talent development, and innovation initiatives.</p>
        <button className="border border-gold px-8 py-3 rounded-2xl hover:bg-[rgba(212,175,55,0.2)]">Apply for Partnership</button>
      </section>

      {/* Research & Programs */}
      <section id="research" className="py-20 px-4 bg-[#0d203f]">
        <h3 className="text-center text-3xl font-bold text-gold mb-10">Research & Programs</h3>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {['Cutting-edge Research', 'Postdoctoral Fellowships', 'Graduate Placements', 'Research Stays', 'Industrial Collaboration', 'Academic Editorship'].map((item) => (
            <div key={item} className="p-6 border border-gold rounded-2xl text-center">{item}</div>
          ))}
        </div>
      </section>

      {/* Events */}
      <section id="events" className="py-20 px-4 text-center">
        <h3 className="text-3xl font-bold text-gold mb-6">Conferences, Seminars & Workshops</h3>
        <p className="max-w-3xl mx-auto">Stay tuned for upcoming events and calls for papers.</p>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 px-4 bg-[#0d203f] text-center">
        <h3 className="text-3xl font-bold text-gold mb-6">Contact Us</h3>
        <p className="mb-8">Have questions? Reach out to us via the form below.</p>
        <button className="bg-gold text-[#081123] px-8 py-3 rounded-2xl">Open Contact Form</button>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-sm bg-[#081123]">© {year} Multidisciplinary Research Academy. All rights reserved.</footer>
    </div>
  );
}
