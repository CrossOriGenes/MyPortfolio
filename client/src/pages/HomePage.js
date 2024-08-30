import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import Header from "../components/UI/Header";
import Hero from "../components/home-section/Hero";
import ContactUs from "../components/home-section/ContactUs";
import Testimonial from "../components/home-section/Testimonial";
import About from "../components/home-section/About";
import Services from "../components/home-section/Services";
import Portfolio from "../components/home-section/Portfolio";

function HomePage() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  /* mobile menu
   * ---------------------------------------------------- */
  const handleMenuToggle = () => {
    setMenuIsOpen((menuIsOpen) => !menuIsOpen);
  };

  return (
    <div id="top" className={menuIsOpen ? "menu-is-open" : ""}>
      {/* Header NavBar */}
      <Header headerClasses="s-header" onClick={handleMenuToggle}>
        <div className="header-content">
          <nav className="row header-nav-wrap">
            <ul className="header-nav">
              <li className="active">
                <a
                  className="smoothscroll"
                  href="#hero"
                  title="Intro"
                  onClick={handleMenuToggle}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="smoothscroll"
                  href="#about"
                  title="About"
                  onClick={handleMenuToggle}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="smoothscroll"
                  href="#services"
                  title="Services"
                  onClick={handleMenuToggle}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  className="smoothscroll"
                  href="#portfolio"
                  title="Works"
                  onClick={handleMenuToggle}
                >
                  Works
                </a>
              </li>
              <li>
                <a
                  className="smoothscroll"
                  href="#contact"
                  title="Contact us"
                  onClick={handleMenuToggle}
                >
                  Say Hello
                </a>
              </li>
            </ul>
            <div className="d-flex justify-content-between">
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
      <ContactUs />

      {/* go to top button */}
      <ScrollToTop smooth />
      {/* //go to top button */}
    </div>
  );
}

export default HomePage;
