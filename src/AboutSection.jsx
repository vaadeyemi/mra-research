import aboutBanner from '../src/assets/images/about-banner.png';
import '../src/App.css';

export default function AboutSection() {
  return (
    <section id="about" className="bg-[#0d203f] px-0 pt-0"> {/* ORIGINAL: px-4 pt-20 */}
      <div className="section-banner">
            <img src={aboutBanner} alt="About Section Banner" className="responsive-banner" />
      </div>

      {/* <h3 className="mb-8 text-center text-3xl font-bold text-gold">About MRA</h3> */}

      <div className="mx-auto max-w-5xl space-y-8 text-center md:text-left">
        <p className="mt-14">
          The <span className="font-semibold">Multidisciplinary Research Academy (MRA)</span> is an
          international private research center committed to fostering
          groundbreaking research, academic excellence, and global
          collaboration. We bring together scholars, students, and institutions
          across disciplines to drive progress, inspire discovery, and promote
          knowledge that addresses real-world challenges.
        </p>

        <p>
          Guided by our core values of <span className="font-semibold">Integrity, Excellence, Collaboration,
            Innovation,</span> and <span className="font-semibold">Impact</span>, we support cross-disciplinary
          partnerships, facilitate talent development, and create pathways for
          transformative research that transcends traditional boundaries.
        </p>

      </div>
    </section>
  );
}
