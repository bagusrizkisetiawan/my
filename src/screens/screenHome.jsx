import React, { useEffect } from "react";
import Jumbotron from "../components/jumbotron";
import About from "../components/about";
import Service from "../components/service";
import Hire from "../components/hire";
import Portofolio from "../components/portofolio";
import Blog from "../components/blog";
import Contact from "../components/contact";

const ScreenHome = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Jumbotron />
      <About />
      <Service />
      <Portofolio />
      <Hire />
      <Blog />
      <Contact />
    </>
  );
};

export default ScreenHome;
