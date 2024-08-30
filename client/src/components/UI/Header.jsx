// import { useEffect,useState } from "react";
import { Link } from "react-router-dom";

function Header({ headerClasses, children, onClick }) {
  return (
    <>
      <header className={`s-header ${headerClasses}`} data-aos="fade-down">
        <div className="header-logo">
          <Link to="..">
            <img src="icon.png" alt="" />
          </Link>
        </div>
        {children}
        <div className="header-menu-toggle" onClick={onClick}>
          <span>Menu</span>
        </div>
      </header>
    </>
  );
}

export default Header;
