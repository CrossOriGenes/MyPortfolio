import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Root = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    /* Animate On Scroll
     * ------------------------------------------------------ */
    AOS.init({
      offset: 100,
      duration: 600,
      easing: "ease-in-out",
      delay: 300,
      once: true,
      disable: "mobile",
    });
  });

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <Outlet />
    </>
  );
};

export default Root;
