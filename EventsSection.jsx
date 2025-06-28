import eventsBanner from '../src/assets/images/events-banner.png';
import '../src/App.css';

export default function EventsSection() {
  return (
    <section id="events" className="bg-[#0d203f] px-0 py-0 text-center">

      <div className="section-banner">
            <img src={eventsBanner} alt="Events Section Banner" className="responsive-banner" />
      </div>

      {/* <h3 className="mb-10 text-3xl font-bold text-gold">Events & Engagement</h3> */}

{/* Annual Conferences */}
<div className="mx-auto mb-12 max-w-5xl text-center">
        <h4 className="mt-14 mb-4 text-2xl font-semibold text-gold">Annual Conferences</h4>
      <p className="mx-auto mb-8 max-w-3xl">
        MRA hosts annual international conferences spotlighting multidisciplinary breakthroughs and encouraging cross-sector dialogue.
      </p>
</div>

{/* Workshops & Seminars */}
<div className="mx-auto mb-12 max-w-5xl text-center">
        <h4 className="mb-4 text-2xl font-semibold text-gold">Workshops & Seminars</h4>
      <p className="mx-auto mb-8 max-w-3xl">
        Regular workshops and themed seminars provide platforms for training, collaboration, and dissemination of ongoing research.
      </p>
</div>

{/* Calls & Competitions */}
<div className="mx-auto mb-0 max-w-5xl text-center">
        <h4 className="mb-4 text-2xl font-semibold text-gold">Calls & Competitions</h4>
      <p className="mx-auto mb-0 max-w-3xl">
        We invite proposals and papers for symposia and global research competitions throughout the year.
      </p>
</div>

    </section>
  );
}
