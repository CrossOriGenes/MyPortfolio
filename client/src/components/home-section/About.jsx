import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    /* skill bars onscroll transitions
     * ------------------------------------------------------ */
    const observer = new IntersectionObserver((entries) => {
      // Loop over the entries
      entries.forEach((entry) => {
        // If the element is visible
        if (entry.isIntersecting) {
          // Add the animation class
          entry.target.classList.add("progress-bar-animation");
        }
      });
    });
    document
      .querySelectorAll(".progress-bar")
      .forEach((elem) => observer.observe(elem));
  });

  return (
    <section id="about" className="s-about target-section">
      <div className="s-about__section s-about__section--profile">
        <div className="right-vert-line" />

        <div className="row">
          <div className="column large-6 medium-8 tab-full">
            <div className="section-intro" data-num="01">
              <h3 className="subhead">About Me</h3>
              <h1 className="display-1">
                I'm the kind of person who isn't afraid of challenges.
              </h1>
            </div>

            <div className="profile-pic" data-aos="fade-left">
              <img
                src="images/profile-pic-self.jpg"
                srcSet="images/profile-pic-self.jpg 1x, images/profile-pic-self@2x.jpg 2x"
                alt="zzzzzz"
              />
            </div>

            <h3 data-aos="fade-up">Profile</h3>

            <p data-aos="fade-up">
              I generally believe in honesty, patience, efforts, labour and
              practice in everything which I do. I&apos;m dedicated to serve
              people and motivate others, which provides me with an immense
              satisfaction. All my works includes high endorsement of latest
              trending build settings, current in-trade software modules,
              designs and performances that includes a majority of web and
              mobile-app related approaches.
            </p>
          </div>
        </div>
      </div>

      <div className="s-about__section">
        <div className="row">
          <div className="column">
            <h3 data-aos="fade-up">Education &amp; Career</h3>
          </div>
        </div>
      </div>

      <div className="row align-items-start">
        <div className="col-lg-6" data-aos="fade-up">
          <h3 className="mb-4">My Education</h3>
          <div className="border-left border-primary column pt-4 pr-2 pl-6 ml-2">
            <div className="position-relative mb-4" data-aos="fade-up">
              <i
                className="far fa-dot-circle text-primary position-absolute"
                style={{ top: 2, left: "-30px" }}
              />
              <div className="position__header">
                <h6 className="font-weight-bold mb-1">Schooling</h6>
                <div className="position__timeframe mb-2">
                  <strong>Techno India Group Public School</strong> |
                  <small>2006 - 2019</small>
                </div>
              </div>
              <p>
                Done both of my primary and secondary schooling from The TIGPS -
                Hooghly (CBSE), securing an aggregate of 80.3% (1<sup>st</sup>{" "}
                class) in my Boards.
              </p>
            </div>
            <div className="position-relative mb-4" data-aos="fade-up">
              <i
                className="far fa-dot-circle text-primary position-absolute"
                style={{ top: 2, left: "-30px" }}
              />
              <div className="position__header">
                <h6 className="font-weight-bold mb-1">Higher Secondary</h6>
                <div className="position__timeframe mb-2">
                  <strong>Hooghly Branch Govt. High School</strong> |
                  <small>2019 - 2021</small>
                </div>
              </div>
              <p>
                Hence followed by the high schooling from the WBCHSE board with
                an aggregate of 84% (1<sup>st</sup> class) in my Higher
                secondary.
              </p>
            </div>
            <div className="position-relative mb-4" data-aos="fade-up">
              <i
                className="far fa-dot-circle text-primary position-absolute"
                style={{ top: 2, left: "-30px" }}
              />
              <div className="position__header">
                <h6 className="font-weight-bold mb-1">University</h6>
                <div className="position__timeframe mb-2">
                  <strong>The University of Burdwan</strong> |
                  <small>2021 - 2024</small>
                </div>
              </div>
              <p>
                Persued my BCA (Honours) Graduation degree securing a CGPA of
                9.2 in aggregate.
              </p>
            </div>
          </div>
        </div>
        {/* Educations */}
        <div className="col-lg-6" data-aos="fade-up">
          <h3 className="mb-4">My Expericence</h3>
          <div className="border-left border-primary column pt-4 pr-2 pl-6 ml-2">
            <div className="position-relative mb-4" data-aos="fade-up">
              <i
                className="far fa-dot-circle text-primary position-absolute"
                style={{ top: 2, left: "-30px" }}
              />
              {/* <div className="position__header">
                <h6 className="font-weight-bold mb-1">Fresher</h6>
              </div> */}
              <div className="position__header">
                <h6 className="font-weight-bold mb-1">Frontend Developer</h6>
                <div className="position__timeframe mb-2">
                  <strong>Self Owned</strong> | <small>2022 - Present</small>
                </div>
              </div>
              <p>
                Currently specializing on Frontend development based on React
                for websites and as an UI designer.
              </p>
            </div>
          </div>
          <h3 className="mb-4">Hobbies</h3>
          <div className="border-left border-primary column pt-4 pr-2 pl-6 ml-2">
            <div className="position-relative mb-4" data-aos="fade-up">
              <i
                className="far fa-dot-circle text-primary position-absolute"
                style={{ top: 2, left: "-30px" }}
              />
              <strong className="font-weight-bold mb-1">Painting</strong>
            </div>
            <div className="position-relative mb-4" data-aos="fade-up">
              <i
                className="far fa-dot-circle text-primary position-absolute"
                style={{ top: 2, left: "-30px" }}
              />
              <strong className="font-weight-bold mb-1">
                Reading Novels and Informative articles
              </strong>
            </div>
            <div className="position-relative mb-4" data-aos="fade-up">
              <i
                className="far fa-dot-circle text-primary position-absolute"
                style={{ top: 2, left: "-30px" }}
              />
              <strong className="font-weight-bold mb-1">
                Playing Musical Instruments
              </strong>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="column">
          <h3 data-aos="fade-up">Skills</h3>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-lg-6 pr-2 pl-2" data-aos="fade-up">
          <ul className="skill-bars ml-0 mb-4">
            <li>
              <div className="label d-flex justify-content-between">
                <strong>HTML</strong>
                <span>90%</span>
              </div>
              <div
                className="progress"
                role="progressbar"
                aria-valuenow={90}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div
                  className="progress-bar bg-success percent90"
                  style={{ width: "90%" }}
                />
              </div>
            </li>
            <li>
              <div className="label d-flex justify-content-between">
                <strong>CSS3</strong>
                <span>70%</span>
              </div>
              <div
                className="progress"
                role="progressbar"
                aria-valuenow={70}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div
                  className="progress-bar bg-warning percent70"
                  style={{ width: "70%" }}
                />
              </div>
            </li>
            <li>
              <div className="label d-flex justify-content-between">
                <strong>Express</strong>
                <span>85%</span>
              </div>
              <div
                className="progress"
                role="progressbar"
                aria-valuenow={85}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div
                  className="progress-bar bg-info percent85"
                  style={{ width: "85%" }}
                />
              </div>
            </li>
          </ul>
        </div>
        <div className="col-lg-6 pr-2 pl-2" data-aos="fade-up">
          <ul className="skill-bars ml-0 mb-4">
            <li>
              <div className="label d-flex justify-content-between">
                <strong>React</strong>
                <span>95%</span>
              </div>
              <div
                className="progress"
                role="progressbar"
                aria-valuenow={95}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div
                  className="progress-bar bg-secondary percent95"
                  style={{ width: "95%" }}
                />
              </div>
            </li>
            <li>
              <div className="label d-flex justify-content-between">
                <strong>PHP</strong>
                <span>75%</span>
              </div>
              <div
                className="progress"
                role="progressbar"
                aria-valuenow={75}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div
                  className="progress-bar bg-primary percent75"
                  style={{ width: "75%" }}
                />
              </div>
            </li>
            <li>
              <div className="label d-flex justify-content-between">
                <strong>Java</strong>
                <span>90%</span>
              </div>
              <div
                className="progress"
                role="progressbar"
                aria-valuenow={90}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div
                  className="progress-bar bg-danger percent90"
                  style={{ width: "90%" }}
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
