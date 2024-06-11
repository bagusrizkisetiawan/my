import { useEffect } from "react";
import Contact from "../components/contact";
import JumbotronDetails from "../components/jumbotronDetails";
import CustomNavbar from "../components/navbar";

const ScreenContact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <CustomNavbar />
      <JumbotronDetails text={"Contact"} />

      <Contact />
    </>
  );
};

export default ScreenContact;
