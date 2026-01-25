import "../../styles/about/hero-section.css";

export default function HeroSection() {
  return (
    <section className="about-hero">
      <div className="container">
        <div className="about-hero-container">
          {/* LEFT */}
          <div className="about-hero-left">
            <span className="about-badge">
              Skill Education for Future Careers
            </span>

            <h1 className="about-hero-title">
              Building Professional Careers Through
              <span> Vocational Education</span>
            </h1>

            <p className="about-hero-desc">
              Mindmine Academy offers UGC-approved B.Voc degrees and
              Nursing programs, shaping students into job-ready professionals
              across West Bengal.
            </p>

            {/* HIGHLIGHT BOX */}
            <div className="about-highlight">
              <div>
                <h4>UGC Approved</h4>
                <p>B.Voc Degrees</p>
              </div>
              <div>
                <h4>3 Campuses</h4>
                <p>Howrah & Kolkata</p>
              </div>
              <div>
                <h4>Nursing</h4>
                <p>WBNC & INC</p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="about-hero-right">
            <div className="about-info-card">
              <h3>Who We Are</h3>
              <p>
                A vocational institution delivering industry-aligned programs in
                AI, Animation, Software Development and Nursing.
              </p>
            </div>

            <div className="about-info-card">
              <h3>Our Campuses</h3>
              <p>
                Three city-accessible campuses offering hands-on training and
                professional learning environments.
              </p>
            </div>

            <div className="about-info-card">
              <h3>Recognition</h3>
              <p>
                Degrees awarded by UGC-approved university and Nursing programs
                governed by WBNC & INC.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
