// src/App.jsx
import React, { useState } from 'react';
import Modal from './Modal';
import ApplicationForm from './ApplicationForm';
import ContactForm from './ContactForm';
import NewsletterSignup from './NewsletterSignup';

export default function App() {
  const [openModal, setOpenModal] = useState(null); // 'membership' | 'partnership' | 'contact' | null
  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen w-full bg-[#0b1a34] text-white font-serif">
      {/* ───────── Header / Navigation ───────── */}
      <header className="flex w-full items-center justify-between bg-[#081123] px-6 py-4 shadow-lg">
        <h1 className="text-2xl font-bold">MRA</h1>
        <nav className="hidden space-x-6 md:flex">
          <a href="#about" className="hover:text-gold">About</a>
          <a href="#membership" className="hover:text-gold">Membership</a>
          <a href="#partnership" className="hover:text-gold">Partnership</a>
          <a href="#research" className="hover:text-gold">Research</a>
          <a href="#events" className="hover:text-gold">Events</a>
          <a href="#contact" className="hover:text-gold">Contact</a>
        </nav>
      </header>

      {/* ───────── Hero ───────── */}
      <section id="hero" className="relative flex flex-col items-center justify-center px-4 py-24 text-center">
        <h2 className="mb-4 text-4xl font-bold md:text-5xl">
          Multidisciplinary Research Academy
        </h2>
        <p className="mb-8 text-lg italic md:text-xl">
          Advancing Knowledge, Inspiring Futures
        </p>

        <div className="flex gap-4">
          <button
            className="rounded-2xl bg-gold px-6 py-3 text-[#081123] shadow"
            onClick={() => setOpenModal('membership')}
          >
            Join MRA
          </button>
          <button
            className="rounded-2xl border border-gold px-6 py-3 hover:bg-[rgba(212,175,55,0.2)]"
            onClick={() => setOpenModal('partnership')}
          >
            Partner With Us
          </button>
        </div>
      </section>

      {/* ───────── Mission & Vision ───────── */}
      <section id="about" className="grid gap-12 bg-[#0d203f] px-4 py-20 md:grid-cols-2">
        <div>
          <h3 className="mb-4 text-3xl font-bold text-gold">Vision</h3>
          <p>
            To become a globally recognized hub for transformative research,
            academic excellence, and interdisciplinary innovation.
          </p>
        </div>
        <div>
          <h3 className="mb-4 text-3xl font-bold text-gold">Mission</h3>
          <p>
            MRA brings together diverse minds to foster collaboration, inspire
            discovery, and advance excellence in research—driving progress
            through shared purpose and intellectual freedom.
          </p>
        </div>
      </section>

      {/* ───────── Core Values ───────── */}
      <section className="px-4 py-16">
        <h3 className="mb-10 text-center text-3xl font-bold text-gold">
          Our Core Values
        </h3>
        <div className="mx-auto grid max-w-4xl gap-8 text-center md:grid-cols-5">
          {[
            { title: 'Integrity', desc: 'Honesty & accountability' },
            { title: 'Excellence', desc: 'Highest academic standards' },
            { title: 'Collaboration', desc: 'Bridging disciplines' },
            { title: 'Innovation', desc: 'Bold ideas' },
            { title: 'Impact', desc: 'Real-world solutions' },
          ].map((v) => (
            <div key={v.title} className="rounded-2xl border border-gold p-4">
              <h4 className="mb-2 font-semibold text-gold">{v.title}</h4>
              <p className="text-sm leading-snug">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ───────── Membership ───────── */}
      <section id="membership" className="bg-[#0d203f] px-4 py-20 text-center">
        <h3 className="mb-6 text-3xl font-bold text-gold">Membership</h3>
        <p className="mx-auto mb-8 max-w-3xl">
          Apply to become a member of MRA—open to undergraduate students,
          postgraduate students, and researchers.
        </p>
        <button
          className="rounded-2xl bg-gold px-8 py-3 text-[#081123]"
          onClick={() => setOpenModal('membership')}
        >
          Apply for Membership
        </button>
        <ul className="mx-auto mt-12 grid max-w-5xl list-inside list-disc gap-6 text-left md:grid-cols-5">
          {[
            'Access to resources',
            'Networking opportunities',
            'Professional development',
            'Funding & grants',
            'Discounts & waivers',
          ].map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      </section>

      {/* ───────── Partnership ───────── */}
      <section id="partnership" className="px-4 py-20 text-center">
        <h3 className="mb-6 text-3xl font-bold text-gold">
          Partnership & Collaboration
        </h3>
        <p className="mx-auto mb-8 max-w-3xl">
          Institutions and industries can collaborate with MRA on research,
          talent development, and innovation initiatives.
        </p>
        <button
          className="rounded-2xl border border-gold px-8 py-3 hover:bg-[rgba(212,175,55,0.2)]"
          onClick={() => setOpenModal('partnership')}
        >
          Apply for Partnership
        </button>
      </section>

      {/* ───────── Research & Programs ───────── */}
      <section id="research" className="bg-[#0d203f] px-4 py-20">
        <h3 className="mb-10 text-center text-3xl font-bold text-gold">
          Research & Programs
        </h3>
        <div className="mx-auto grid max-w-5xl gap-8 text-center md:grid-cols-3">
          {[
            'Cutting-edge Research',
            'Postdoctoral Fellowships',
            'Graduate Placements',
            'Research Stays',
            'Industrial Collaboration',
            'Academic Editorship',
          ].map((item) => (
            <div key={item} className="rounded-2xl border border-gold p-6">
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* ───────── Events ───────── */}
      <section id="events" className="px-4 py-20 text-center">
        <h3 className="mb-6 text-3xl font-bold text-gold">
          Conferences, Seminars & Workshops
        </h3>
        <p className="mx-auto max-w-3xl">
          Stay tuned for upcoming events and calls for papers.
        </p>
      </section>

      {/* ───────── Contact (button triggers modal) ───────── */}
      <section id="contact" className="bg-[#0d203f] px-4 py-16 text-center">
        <h3 className="mb-6 text-3xl font-bold text-gold">Contact Us</h3>
        <p className="mb-8">Have questions? Reach out via our form.</p>
        <button
          className="rounded-2xl bg-gold px-8 py-3 text-[#081123]"
          onClick={() => setOpenModal('contact')}
        >
          Open Contact Form
        </button>
      </section>

      {/* ───────── Newsletter Signup ───────── */}
      <section className="px-4 py-12 text-center">
        <h4 className="mb-4 text-2xl font-bold text-gold">
          Subscribe to our Newsletter
        </h4>
        <p className="mb-6">
          Stay informed about research highlights and events.
        </p>
        <NewsletterSignup />
      </section>

      {/* ───────── Footer ───────── */}
      <footer className="bg-[#081123] py-6 text-center text-sm">
        © {year} Multidisciplinary Research Academy. All rights reserved.
      </footer>

      {/* ───────── Modals ───────── */}
      <Modal
        open={openModal === 'membership'}
        onClose={() => setOpenModal(null)}
      >
        <ApplicationForm type="Membership" />
      </Modal>

      <Modal
        open={openModal === 'partnership'}
        onClose={() => setOpenModal(null)}
      >
        <ApplicationForm type="Partnership" />
      </Modal>

      <Modal
        open={openModal === 'contact'}
        onClose={() => setOpenModal(null)}
      >
        <ContactForm />
      </Modal>
    </div>
  );
}
