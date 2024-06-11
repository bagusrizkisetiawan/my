import { useEffect } from "react";
import About from "../components/about";
import Blog from "../components/blog";
import Contact from "../components/contact";
import Hire from "../components/hire";
import JumbotronDetails from "../components/jumbotronDetails";
import CustomNavbar from "../components/navbar";
import Portofolio from "../components/portofolio";
import Service from "../components/service";

const ScreenAbout = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <CustomNavbar />
      <JumbotronDetails text={"About"} />
      <About />
      <Service />
      <Portofolio />
      <Hire />
      <Blog />
      <Contact />
    </>
  );
};

export default ScreenAbout;
