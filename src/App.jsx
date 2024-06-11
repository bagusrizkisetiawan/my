import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import MyNavbar from "./components/navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./components/footer";
import ScreenPortofolioDetails from "./screens/screenPortofolioDetails";
import ScreenAbout from "./screens/screenAbout";
import ScreenHome from "./screens/screenHome";
import ScreenService from "./screens/screenService";
import ScreenAllPortofolio from "./screens/screenAllPortofolio";
import ScreenAllBlogs from "./screens/screenAllBlogs";
import ScreenContact from "./screens/screenContact";
import ScreenBlogDetails from "./screens/screenBlogDetails";

function App() {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<ScreenHome />} />
        <Route path="/about" element={<ScreenAbout />} />
        <Route path="/service" element={<ScreenService />} />
        <Route path="/portofolio" element={<ScreenAllPortofolio />} />
        <Route path="/blog" element={<ScreenAllBlogs />} />
        <Route path="/contact" element={<ScreenContact />} />
        <Route path="/portofolio/:id" element={<ScreenPortofolioDetails />} />
        <Route path="/blog/:id" element={<ScreenBlogDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
