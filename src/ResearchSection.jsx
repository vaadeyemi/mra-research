import researchBanner from '../src/assets/images/research-banner.png';
import '../src/App.css';

export default function ResearchSection() {
  return (
    <section id="research" className="bg-[#0d203f] px-0 py-16"> {/* ORIGINAL: px-4 pt-20 */}

      <div className="section-banner">
            <img src={researchBanner} alt="Research Section Banner" className="responsive-banner" />
      </div>

      {/* <h3 className="mb-10 text-center text-3xl font-bold text-gold">Research & Programs</h3> */}

      {/* Research Focus */}
      <div className="mx-auto mb-12 max-w-5xl text-center">
        <h4 className="mt-14 mb-4 text-2xl font-semibold text-gold">Research Focus</h4>
        <p>
          MRA supports innovative, high-impact research across diverse fields
          including <span className="font-semibold text-white">science, technology, engineering, agriculture, arts,</span>{' '}
          and <span className="font-semibold text-white">humanities</span>. Our interdisciplinary
          approach fosters novel insights and transformative solutions.
        </p>
      </div>

      {/* Core Activities */}
      <div className="mx-auto mb-12 max-w-5xl">
        <h4 className="mb-4 text-2xl font-semibold text-gold text-center">
          Core Activities
        </h4>
        <ul className="list-disc space-y-3 px-6 text-left">
          <li>Original research projects and collaborative investigations</li>
          <li>Development of research tools, methodologies, and datasets</li>
          <li>Academic editorship to ensure quality and scholarly publications</li>
          <li>Thematic and cross-cutting research clusters</li>
          <li>Global research stays and visiting fellowships</li>
        </ul>
      </div>

      {/* Academic Programs */}
      <div className="mx-auto mb-0 max-w-5xl">
        <h4 className="mb-4 text-2xl font-semibold text-gold text-center">
          Academic Programs
        </h4>
        <div className="space-y-6 text-left">
          <div>
            <p className="font-bold text-white">Postdoctoral Fellowships</p>
            <p>
              Support for early-career researchers to advance independent work
              both internally and at our partner institutions.
            </p>
          </div>
          <div>
            <p className="font-bold text-white">Graduate Placements</p>
            <p>
              Opportunities for master’s and PhD candidates to pursue fully
              funded programs at our partner institutions.
            </p>
          </div>
          <div>
            <p className="font-bold text-white">
              Research Internships & Residencies
            </p>
            <p>Short- and long-term programs for hands-on research experience.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
