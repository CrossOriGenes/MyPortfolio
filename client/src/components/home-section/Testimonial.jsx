import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

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
                    Molestiae incidunt consequatur quis ipsa autem nam sit enim
                    magni. Voluptas tempore rem. Explicabo a quaerat sint autem
                    dolore ducimus ut consequatur neque. Nisi dolores quaerat
                    fuga rem nihil nostrum. Laudantium quia consequatur
                    molestias delectus culpa.
                  </p>
                  <div className="testimonial-slider__author">
                    <img
                      src="images/avatars/user-02.jpg"
                      alt=""
                      className="testimonial-slider__avatar"
                    />
                    <cite className="testimonial-slider__cite">
                      <strong>Tim Cook</strong>
                      <span>CEO, Apple</span>
                    </cite>
                  </div>
                </div>
                {/* slide 2 */}
                <div className="testimonial-slider__slide">
                  <p>
                    Excepturi nam cupiditate culpa doloremque deleniti repellat.
                    Veniam quos repellat voluptas animi adipisci. Nisi eaque
                    consequatur. Voluptatem dignissimos ut ducimus accusantium
                    perspiciatis. Quasi voluptas eius distinctio. Atque eos
                    maxime.
                  </p>
                  <div className="testimonial-slider__author">
                    <img
                      src="images/avatars/user-01.jpg"
                      alt=""
                      className="testimonial-slider__avatar"
                    />
                    <cite className="testimonial-slider__cite">
                      <strong>Sundar Pichai</strong>
                      <span>CEO, Google</span>
                    </cite>
                  </div>
                </div>
                {/* slide 3 */}
                <div className="testimonial-slider__slide">
                  <p>
                    Repellat dignissimos libero. Qui sed at corrupti expedita
                    voluptas odit. Nihil ea quia nesciunt. Ducimus aut sed
                    ipsam. Autem eaque officia cum exercitationem sunt
                    voluptatum accusamus. Quasi voluptas eius distinctio.
                    Voluptatem dignissimos ut.
                  </p>
                  <div className="testimonial-slider__author">
                    <img
                      src="images/avatars/user-04.jpg"
                      alt=""
                      className="testimonial-slider__avatar"
                    />
                    <cite className="testimonial-slider__cite">
                      <strong>Satya Nadella</strong>
                      <span>CEO, Microsoft</span>
                    </cite>
                  </div>
                </div>
                {/* slide 4 */}
                <div className="testimonial-slider__slide">
                  <p>
                    Nunc interdum lacus sit amet orci. Vestibulum dapibus nunc
                    ac augue. Fusce vel dui. In ac felis quis tortor malesuada
                    pretium. Curabitur vestibulum aliquam leo. Qui sed at
                    corrupti expedita voluptas odit. Nihil ea quia nesciunt.
                    Ducimus aut sed ipsam.
                  </p>
                  <div className="testimonial-slider__author">
                    <img
                      src="images/avatars/user-05.jpg"
                      alt=""
                      className="testimonial-slider__avatar"
                    />
                    <cite className="testimonial-slider__cite">
                      <strong>Jeff Bezos</strong>
                      <span>CEO, Amazon</span>
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
                to="http://localhost:3000/donate"
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
