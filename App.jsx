// src/App.jsx
import React, { useState } from 'react';
import logo from '../assets/images/mra-logo.png';
import '../App.css';
import Modal from './Modal';
import ApplicationForm from './ApplicationForm';
import ContactForm from './ContactForm';
import NewsletterSignup from './NewsletterSignup';
import AboutSection from './AboutSection';
import ResearchSection from './ResearchSection';
import MembershipSection from './MembershipSection';
import PartnershipSection from './PartnershipSection';
import EventsSection from './EventsSection';
import ContactSection from './ContactSection';

export default function App() {
  const [openModal, setOpenModal] = useState(null); // 'membership' | 'partnership' | 'contact' | null
  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen w-full bg-[#0b1a34] text-white font-serif">
      {/* ───────── Header / Navigation ───────── */}
      <header className="flex w-full items-center justify-between bg-[#081123] px-6 py-4 shadow-lg">

         <a href="/">
            <img src={logo} alt="MRA Logo" className="logo" />
         </a>

         {/* <h1 className="text-2xl font-bold">MRA</h1> */}

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

      {/* About Section */}
      <AboutSection />

      {/* ───────── Mission & Vision ───────── */}
      <section id="about" className="grid gap-12 bg-[#0d203f] px-4 py-16 md:grid-cols-2">
        <div>
          <h4 className="mb-4 text-2xl font-semibold text-gold">Vision</h4>
          <p>
            To become a globally recognized hub for transformative research,
            academic excellence, and interdisciplinary innovation.
          </p>
        </div>
        <div>
          <h4 className="mb-4 text-2xl font-semibold text-gold">Mission</h4>
          <p>
            MRA brings together diverse minds to foster collaboration, inspire
            discovery, and advance excellence in research—driving progress
            through shared purpose and intellectual freedom.
          </p>
        </div>
      </section>

      {/* ───────── Core Values ───────── */}
      <section className="px-0 py-0 bg-[#0d203f]">
        <h4 className="mb-10 text-center text-2xl font-semibold text-gold">
          Our Core Values
        </h4>
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
      <MembershipSection openModal={setOpenModal} />

      {/* ───────── Partnership ───────── */}
      <PartnershipSection openModal={setOpenModal} />

      {/* ───────── Research & Programs ───────── */}
      <ResearchSection />

      {/* ───────── Events ───────── */}
       <EventsSection />

      {/* ───────── Contact (button triggers modal) ───────── */}
      <ContactSection openModal={setOpenModal} />

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
