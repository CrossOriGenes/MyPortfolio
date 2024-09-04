import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { slickSettings } from "../../utils/Utilities";
import { Link } from "react-router-dom";

const Testimonial = () => {
  return (
    <>
      <section id="testimonials" className="s-testimonials">
        <div className="text-center pt-0 pb-4 mb-5">
          <h2 id="header-text">Client's Says...</h2>
        </div>
        <div className="row collapse-col">
          <div className="column large-full">
            <div className="testimonial-slider" data-aos="fade-up">
              <Slider {...slickSettings}>
                {/* slide 1 */}
                <div className="testimonial-slider__slide">
                  <p>
                    His works are highly promising, both modern and modular in
                    approach and also premium finished. Well satisfied with the
                    work and detailings.
                  </p>
                  <div className="testimonial-slider__author">
                    <img
                      src="images/avatars/client-01.png"
                      alt=""
                      className="testimonial-slider__avatar"
                    />
                    <cite className="testimonial-slider__cite">
                      <strong>Anup Kumar Paswan</strong>
                      <span>Freelancer / Instructor</span>
                    </cite>
                  </div>
                </div>
                {/* slide 2 */}
                <div className="testimonial-slider__slide">
                  <p>
                    Great ability and skills in web-development and an
                    extraordinary creative designer. Love the works and frontend
                    builds.
                  </p>
                  <div className="testimonial-slider__author">
                    <img
                      src="images/avatars/client-02.png"
                      alt=""
                      className="testimonial-slider__avatar"
                    />
                    <cite className="testimonial-slider__cite">
                      <strong>Upal Chatterjee</strong>
                      <span>
                        Enterprenuer, Founder of Webstrummer Infolab(Kolkata)
                      </span>
                    </cite>
                  </div>
                </div>
                {/* slide 3 */}
                <div className="testimonial-slider__slide">
                  <p>
                    The works are really awesome. Specially the designs and
                    ergonomic structures. Personally working with him was a best
                    ever experiencing bond ever. He is both very down-to-earth
                    and a kind-to-heart person.
                  </p>
                  <div className="testimonial-slider__author">
                    <img
                      src="images/avatars/client-03.png"
                      alt=""
                      className="testimonial-slider__avatar"
                    />
                    <cite className="testimonial-slider__cite">
                      <strong>Arjun Roy</strong>
                      <span>UI Designer, TISCO</span>
                    </cite>
                  </div>
                </div>
                {/* slide 4 */}
                <div className="testimonial-slider__slide">
                  <p>
                    A great UI builder with a great brain in web-development!
                  </p>
                  <div className="testimonial-slider__author">
                    <img
                      src="images/avatars/client-04.png"
                      alt=""
                      className="testimonial-slider__avatar"
                    />
                    <cite className="testimonial-slider__cite">
                      <strong>Rahul Bhattacharya </strong>
                      <span>Co-Founder/Producer at Irised Solutions Pvt. Ltd.</span>
                    </cite>
                  </div>
                </div>
              </Slider>
            </div>
            {/* end testimonial slider */}
          </div>
          {/* end column */}
        </div>
        {/* end row */}
        {/* CTA
                ================================================== */}
        <div className="s-cta">
          <div className="row">
            <div className="column large-full">
              <h2
                data-aos="fade-up"
                style={{
                  fontWeight: "700",
                  fontSize: "3.5rem",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                Liked my works?
              </h2>
            </div>
          </div>
          <div className="row cta-content" data-aos="fade-up">
            <div className="column large-full d-flex flex-column justify-content-center align-items-center">
              <p className="text-secondary">
                Support by funding my works and to buy me a coffee on Clicking
                this link
              </p>
              <Link
                to="https://crossorigenes148.onrender.com/donate"
                className="btn btn--primary h-full-width"
              >
                Buy me a Coffee
              </Link>
            </div>
          </div>
          {/* end cta-content */}
        </div>
        {/* end s-cta */}
      </section>
    </>
  );
};

export default Testimonial;
