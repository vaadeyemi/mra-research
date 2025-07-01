/* ---------- App.jsx (snippet where the modals are called) ---------- */
import React, { useState } from 'react';
import Modal from './Modal';
import ApplicationForm from './ApplicationForm';

export default function App() {
  const [openModal, setOpenModal] = useState(null); // 'membership' | 'partnership' | null

  /* ...rest of App.jsx above... */

  {/* HERO buttons */}
<>
  <button
    className="bg-gold text-[#081123] px-6 py-3 rounded-2xl shadow"
    onClick={() => setOpenModal('membership')}
  >
    Join MRA
  </button> 

  <button
    className="border border-gold px-6 py-3 rounded-2xl"
    onClick={() => setOpenModal('partnership')}
  >
    Partner With Us
  </button>
</>

  {/* Modals */}
<>
  <Modal open={openModal === 'membership'} onClose={() => setOpenModal(null)}>
    <ApplicationForm type="Membership" />
  </Modal>
  <Modal open={openModal === 'partnership'} onClose={() => setOpenModal(null)}>
    <ApplicationForm type="Partnership" />
  </Modal>
</>

  /* ...rest of App.jsx below... */
}
