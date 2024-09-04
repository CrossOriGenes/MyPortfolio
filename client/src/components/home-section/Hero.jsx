import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <section
      id="hero"
      className="s-hero target-section"
      data-parallax="scroll"
      data-image-src="https://res.cloudinary.com/dtfoedy3u/image/upload/v1725468793/hero-bg-3000_f537ca.png"
      data-natural-width="3000"
      data-natural-height="2000"
      data-position-y="center"
    >
      <div className="row hero-content">
        <div className="column large-full" data-aos="fade-up">
          <h2
            className="d-inline mb-3"
            style={{ color: "#555", fontSize: "4rem" }}
          >
            I'm
          </h2>
          <h1
            className="display-3 text-uppercase text-light mb-4"
            style={{ WebkitTextStroke: "2px #ffffff" }}
          >
            Snehodipto Das
          </h1>
          <h2
            className="d-inline mb-3"
            style={{ color: "#555", marginTop: "5rem", fontWeight: 400 }}
          >
            A
            <ReactTyped
              strings={[
                "Web Designer",
                "Web Developer",
                "Full Stack Developer",
                "Apps Designer",
                "Apps Developer",
              ]}
              typeSpeed={100}
              backSpeed={20}
              smartBackspace="false"
              loop
            >
              <span className="typed-text-output"></span>
            </ReactTyped>
          </h2>

          <div className="hero-social">
            <a className="btn btn--primary btn--stroke" href="#contact">
              hire me
            </a>
          </div>
          {/* <!-- end hero-social --> */}
        </div>
      </div>
      {/* <!-- end hero-content --> */}
    </section>
  );
};

export default Hero;
