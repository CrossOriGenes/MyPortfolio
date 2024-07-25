import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Header from "../components/UI/Header";
import Hero from "../components/home-section/Hero";
import ContactUs from "../components/home-section/ContactUs";
import Testimonial from "../components/home-section/Testimonial";
import About from "../components/home-section/About";
import Services from "../components/home-section/Services";
import Portfolio from "../components/home-section/Portfolio";

function HomePage() {
  const [menuIsOpen, setMenuIsOpen] = useState();
  const [toggleGotoTop, setToggleGotoTop] = useState(false);

  // When the user clicks on the button, scroll to the top of the document
  function goToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  /* mobile menu
   * ---------------------------------------------------- */
  const handleMenuToggle = () => {
    setMenuIsOpen((menuIsOpen) => !menuIsOpen);
  };

  const handleScroll = () => {
    const position = window.scrollY;

    if (position >= 800) {
      setToggleGotoTop(true);
    } else {
      setToggleGotoTop(false);
    }
  };

  useEffect(() => {
    /* move header
     * -------------------------------------------------- */
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div id="top" className={menuIsOpen ? "menu-is-open" : ""}>
      {/* Header NavBar */}
      <Header headerClasses="s-header" onClick={handleMenuToggle}>
        <div className="header-content">
          <nav className="row header-nav-wrap">
            <ul className="header-nav">
              <li className="active">
                <a
                  className={`smoothscroll`}
                  href="#hero"
                  title="Intro"
                  onClick={handleMenuToggle}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className={`smoothscroll`}
                  href="#about"
                  title="About"
                  onClick={handleMenuToggle}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className={`smoothscroll`}
                  href="#services"
                  title="Services"
                  onClick={handleMenuToggle}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  className={`smoothscroll`}
                  href="#portfolio"
                  title="Works"
                  onClick={handleMenuToggle}
                >
                  Works
                </a>
              </li>
              <li>
                <a
                  className={`smoothscroll`}
                  href="#contact"
                  title="Contact us"
                  onClick={handleMenuToggle}
                >
                  Say Hello
                </a>
              </li>
            </ul>
            <div className="d-flex justify-content-between">
              {/* <button className="btn btn--primary">Logout</button> */}
              <Link to="downloads" id="dwnld-redt-btn" className="btn btn--stroke btn--small">
                Download CV
              </Link>
            </div>
          </nav>
        </div>
      </Header>

      {/* Hero section */}
      <Hero />

      {/* About section */}
      <About />

      {/* Services section */}
      <Services />

      {/* Portfolio section */}
      <Portfolio />

      {/* Testimonials section */}
      <Testimonial />

      {/* Contact Us section */}
      {/* <ContactUs toggleGotoTop={toggleGotoTop} /> */}
      <ContactUs />

      <div
        className={`ss-go-top ${!toggleGotoTop ? "link-is-visible" : ""}`}
        title="Back-to-Top"
        onClick={goToTop}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
        >
          <path d="M12 0l8 9h-6v15h-4v-15h-6z" />
        </svg>
      </div>
      {/* end ss-go-top */}
    </div>
  );
}

export default HomePage;
