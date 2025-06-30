import partnershipBanner from '../assets/images/partnership-banner.png';
import '../App.css';

export default function PartnershipSection({ openModal }) {
  return (
    <section id="partnership" className="bg-[#0d203f] px-0 py-0 text-center"> {/* ORIGINAL: px-4 pt-20 */}

      <div className="section-banner">
            <img src={partnershipBanner} alt="Partnership Section Banner" className="responsive-banner" />
      </div>

      {/* <h3 className="mb-10 text-3xl font-bold text-gold">Partnerships & Collaboration</h3> */}

{/* Institutional Collaboration */}
<div className="mx-auto mb-12 max-w-5xl text-center">
        <h4 className="mt-14 mb-4 text-2xl font-semibold text-gold">Institutional Collaboration</h4>
      <p className="mx-auto mb-8 max-w-3xl">
        MRA partners with universities, research institutes, and academic departments to co-develop research initiatives, student placements, and academic exchanges.
      </p>
</div>

{/* Industry Engagement */}
<div className="mx-auto mb-12 max-w-5xl text-center">
        <h4 className="mb-4 text-2xl font-semibold text-gold">Industry Engagement</h4>
      <p className="mx-auto mb-8 max-w-3xl">
        We collaborate with industry partners to promote applied research, drive innovation, and align scientific output with societal needs. Our partnerships foster real-world impact and commercial relevance.
      </p>
</div>

      <button
        className="rounded-2xl border border-gold px-8 py-3 hover:bg-[rgba(212,175,55,0.2)]"
        onClick={() => openModal('partnership')}
      >
        Apply for Partnership
      </button>
    </section>
  );
}
