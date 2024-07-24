import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/UI/Header";
import DownloadSection from "../components/download-section/DownloadSection";
import LinkSection from "../components/download-section/LinkSection";

function DownloadsPage() {
  // const [toggleGotoTop, setToggleGotoTop] = useState();
  const [menuIsOpen, setMenuIsOpen] = useState();

  // const handleScroll = () => {
  //   const position = window.pageYOffset;

  //   if (position >= 0 && position <= 100) {
  //     setToggleGotoTop(false);
  //   } else if (position === 800) {
  //     setToggleGotoTop(true);
  //   }
  // };

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
                  href="#downloads"
                  title="Download Docs"
                  onClick={handleMenuToggle}
                >
                  Docs
                </a>
              </li>
              <li>
                <a
                  className="smoothscroll"
                  href="#links"
                  title="Media Links"
                  onClick={handleMenuToggle}
                >
                  Links
                </a>
              </li>
            </ul>
          </nav>
          {/* end header-nav-wrap */}

          <Link to=".." className="btn btn--stroke btn--small">
            Back
          </Link>
        </div>
      </Header>


      {/* download-docs-section
    ================================================== */}
      <DownloadSection />
      {/* end download-docs-section */}
      {/* links
    ================================================== */}
      <LinkSection />
      {/* end s-links */}
    </div>
  );
}

export default DownloadsPage;
