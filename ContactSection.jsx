import contactBanner from '../assets/images/contact-banner.png';
import '../App.css';

export default function ContactSection({ openModal }) {
  return (
    <section id="contact" className="bg-[#0d203f] px-0 py-16 text-center">

      <div className="section-banner">
            <img src={contactBanner} alt="Contact Section Banner" className="responsive-banner" />
      </div>

      {/* <h3 className="mb-6 text-3xl font-bold text-gold">Contact Us</h3> */}

<div className="mx-auto mb-12 max-w-5xl text-center">
   <div>
      <p className="mt-14 mb-8">
        We’re always open to questions, ideas, and collaboration proposals. Whether you’re an aspiring researcher, a potential partner, or simply curious about our work, reach out—we’d love to hear from you.
      </p>
   </div>
   <div>
       📧 Email: info@mra-research.org
   </div>
   <div>
       🌍 Website: mra-research.org
   </div>
   <div>
       📣 Follow us: [Social media handles]
   </div>
</div>

      <button
        className="rounded-2xl bg-gold px-8 py-3 text-[#081123]"
        onClick={() => openModal('contact')}
      >
        Open Contact Form
      </button>
    </section>
  );
}
