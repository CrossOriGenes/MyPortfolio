// import { Link } from "react-router-dom";

const ContactUs = ({ toggleGotoTop }) => {
  // // When the user clicks on the button, scroll to the top of the document
  // function goToTop() {
  //   document.body.scrollTop = 0;
  //   document.documentElement.scrollTop = 0;
  // }

  return (
    <>
      <footer id="contact" className="s-footer h-dark-bg">
        <div className="right-vert-line" />
        <div className="row s-footer__main">
          <div className="column col-lg-7 mb-4">
            <div className="section-intro" data-aos="fade-up">
              <h3 className="subhead">Get In Touch</h3>
              <h1 className="display-1">
                Have an idea or a concept that really excite you? Let's turn
                that idea into reality. Shoot me a message.
              </h1>
            </div>
          </div>
          <div className="column col-lg-5 mb-4">
            <div className="d-flex flex-column footer-intro">
              <div className="footer-contact-block" data-aos="fade-up">
                <h5 className="footer-contact-block__header">Phone</h5>
                <p className="footer-contact-block__content">
                  <a href="tel:+1975432345">+91 9123944263</a>
                </p>
              </div>
              {/* end footer-contact-block */}
              <div className="footer-contact-block" data-aos="fade-up">
                <h5 className="footer-contact-block__header">My Location</h5>
                <div className="footer-contact-block__content">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3675.63907552687!2d88.3709535!3d22.8897875!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89164c24a26d9%3A0x833d2fa88fbfbb65!2sV9QF%2BVCP%2C%20Ghoshbari%2C%20Kaeipara%2C%20Dharampur%2C%20Chinsurah%2C%20West%20Bengal%20712101!5e0!3m2!1sen!2sin!4v1714067558622!5m2!1sen!2sin"
                    title="my-location"
                    width="550px"
                    height="450px"
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
          <div className="column large-full mt-6" data-aos="fade-up">
            <form>
              <div
                className="row form-row justify-content-center"
                style={{ columnGap: "6rem" }}
              >
                <div className="form-group col-sm-5 pl-0">
                  <input
                    type="text"
                    className="form-control p-4"
                    id="inputUsername"
                    placeholder="Name"
                  />
                </div>
                <div className="form-group col-sm-5 pr-0">
                  <input
                    type="email"
                    className="form-control p-4"
                    id="inputEmail4"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="form-group col-md-11 d-flex justify-content-center m-auto">
                <input
                  type="text"
                  className="form-control p-4"
                  id="inputSubject"
                  placeholder="Subject:  Hiring for a special web-design"
                />
              </div>
              <div className="form-group col-md-11 d-flex justify-content-center m-auto">
                <textarea
                  className="form-control p-4"
                  id="exampleFormControlTextarea1"
                  rows={5}
                  placeholder="Your Message..."
                  defaultValue={""}
                />
              </div>
              <div className="d-flex justify-content-center footer-email-us">
                <button className="btn btn--primary h-full-width">
                  Let's Talk
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* end s-footer__main */}
        <div className="column s-footer__bottom d-flex flex-column text-center">
          <br />
          <div className="row large-full ss-scicons d-flex">
            <hr />
            <ul className="ss-scicons__list d-flex">
              <li>
                <a href="#0">
                  <i className="fa-brands fa-twitter" />
                </a>
              </li>
              <li>
                <a href="#0">
                  <i className="fa-brands fa-instagram" />
                </a>
              </li>
              <li>
                <a href="#0">
                  <i className="fa-brands fa-facebook" />
                </a>
              </li>
              <li>
                <a href="#0">
                  <i className="fa-brands fa-github" />
                </a>
              </li>
            </ul>
          </div>
          <div className="column large-full ss-copyright">
            <span>© 2023-24 CrossOriGenes</span>
            <span>
              All rights reserved
            </span>
          </div>
          {/* end ss-copyright */}
        </div>
        {/* end s-footer__bottom */}
      </footer>
      
    </>
  );
};

export default ContactUs;
