import membershipBanner from '../assets/images/membership-banner.png';
import '../App.css';

export default function MembershipSection({ openModal }) {
  return (
    <section id="membership" className="bg-[#0d203f] px-0 py-16 text-center"> {/* ORIGINAL: px-4 pt-20 */}

      <div className="section-banner">
            <img src={membershipBanner} alt="Membership Section Banner" className="responsive-banner" />
      </div>

      {/* <h3 className="mb-6 text-3xl font-bold text-gold">Membership</h3> */}

      <p className="mx-auto mb-8 max-w-3xl mt-14">
        Open to undergraduate and postgraduate students, independent
        researchers and scholars, as well as faculty members and academic professionals.
      </p>

      <button
        className="rounded-2xl bg-gold px-8 py-3 text-[#081123]"
        onClick={() => openModal('membership')}
      >
        Apply for Membership
      </button>

      <h4 className="mt-12 mb-4 text-2xl font-semibold text-gold">
        Member Benefits
      </h4>
      <ul className="mx-auto grid max-w-5xl list-disc gap-4 px-6 text-left md:grid-cols-2">
        <li>Access to research resources and funding opportunities</li>
        <li>Networking across global academic and industrial communities</li>
        <li>Professional development and training programs</li>
        <li>Opportunities to participate in publications, events, and editorial roles</li>
        <li>Discounts and waivers for MRA programs and events</li>
      </ul>
    </section>
  );
}
