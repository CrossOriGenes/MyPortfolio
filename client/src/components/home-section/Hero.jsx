import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <section
      id="hero"
      className="s-hero target-section"
      data-parallax="scroll"
      data-image-src="./images/hero-bg-3000.png"
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

          <ul className="hero-social">
            <li>
              <a href="#0" title="">
                Twitter
              </a>
            </li>
            <li>
              <a href="https://www.behance.net/snehodiptodas" title="">
                Behance
              </a>
            </li>
            <li>
              <a href="https://dribbble.com/Riju14" title="">
                Dribbble
              </a>
            </li>
          </ul>
          {/* <!-- end hero-social --> */}
        </div>
      </div>
      {/* <!-- end hero-content --> */}

      {/* <div className="hero-scroll">
        <a href="#about" className="scroll-link smoothscroll">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M12 24l-8-9h6v-15h4v15h6z" />
          </svg>
        </a>
      </div> */}
      {/* <!-- end hero-scroll --> */}
    </section>
  );
}

export default Hero;
