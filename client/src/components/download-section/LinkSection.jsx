import React from "react";
import { Link } from "react-router-dom";

const LinkSection = () => {
  return (
    <footer id="links" className="s-footer h-dark-bg">
      <div className="right-vert-line" />
      <div className="row s-footer__main">
        <div className="column col-lg-7 mb-4">
          <h2
            className="fw-bold"
            style={{
              color: "#fff",
              fontFamily: " Poppins, sans-serif",
              fontSize: "3.5rem",
            }}
          >
            Buy me a coffee🥤
          </h2>
          <p
            className="text-secondary"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Fund my works and support me on my patreon if you want more of my
            contents and works.{" "}
          </p>
          <Link className="btn btn--primary" to="../donate" id="subscribe-btn">
            Subscribe at &#8377;100
          </Link>
        </div>
        <div className="column col-lg-5 mb-4">
          <div className="d-flex flex-column footer-intro">
            <div className="footer-contact-block" data-aos="fade-up">
              <h5 className="footer-contact-block__header">Phone</h5>
              <p className="footer-contact-block__content">
                <a href="tel:+91 9123944263">+91 9123944263</a>
              </p>
            </div>
            {/* end footer-contact-block */}
            <div className="footer-contact-block" data-aos="fade-up">
              <h5 className="footer-contact-block__header">My Location</h5>
              <div className="footer-contact-block__content">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3675.63907552687!2d88.3709535!3d22.8897875!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89164c24a26d9%3A0x833d2fa88fbfbb65!2sV9QF%2BVCP%2C%20Ghoshbari%2C%20Kaeipara%2C%20Dharampur%2C%20Chinsurah%2C%20West%20Bengal%20712101!5e0!3m2!1sen!2sin!4v1714067558622!5m2!1sen!2sin"
                  title="my-loc"
                  width="540px"
                  height="470px"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
            {/* end footer-contact-block */}
          </div>
        </div>
      </div>
      {/* end s-footer__main */}
      <div className="column s-footer__bottom d-flex flex-column text-center">
        <br />
        <div className="row large-full ss-scicons d-flex">
          <hr />
          <ul className="ss-scicons__list d-flex">
            <li>
              <Link to="https://wa.link/98nicp" target="_blank">
                <i className="fa-brands fa-whatsapp" />
              </Link>
            </li>
            <li>
              <Link to="https://www.instagram.com/_.deeptoo._" target="_blank">
                <i className="fa-brands fa-instagram" />
              </Link>
            </li>
            <li>
              <Link
                to="https://www.facebook.com/snehodipto.das.37"
                target="_blank"
              >
                <i className="fa-brands fa-facebook" />
              </Link>
            </li>
            <li>
              <Link to="https://github.com/CrossOriGenes" target="_blank">
                <i className="fa-brands fa-github" />
              </Link>
            </li>
          </ul>
        </div>
        {/* end ss-social-links */}
        <div className="column large-full ss-copyright">
          <span>© 2024-25 CrossOriGenes</span>
          <span>All rights reserved</span>
        </div>
        {/* end ss-copyright */}
        <div className="row large-full ss-policies">
          <ul>
            <li>
              <Link to="https://www.privacypolicies.com/live/71ff0509-6e38-4a0c-b455-e789fd7ea5c1">
                Terms
              </Link>
            </li>
            <li>
              <Link to="https://www.privacypolicies.com/live/e26d56c7-8387-4b24-a804-ace7fdb7eea1">
                Privacy
              </Link>
            </li>
            <li>
              <Link to="https://www.privacypolicies.com/live/08403d58-6030-43aa-83d4-b1c27b229b59">
                Refund policy
              </Link>
            </li>
            <li>
              <Link to="mailto:crossorigenes@gmail.com">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      {/* end s-footer__bottom */}
    </footer>
  );
};

export default LinkSection;
