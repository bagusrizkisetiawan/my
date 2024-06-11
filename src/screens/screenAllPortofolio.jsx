import { useEffect, useState } from "react";
import JumbotronDetails from "../components/jumbotronDetails";
import CustomNavbar from "../components/navbar";
import PortfolioItem from "../components/items/portofolioItem";
import { Link } from "react-router-dom";
import DataPortofolios from "../data/dataPortofolio";

const ScreenAllPortofolio = () => {
  let aosDuration = 300;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [portfolios, setPortfolios] = useState(DataPortofolios);
  return (
    <>
      <CustomNavbar />
      <JumbotronDetails text={"All Portofolio"} />
      <div className="container">
        <div className="row justify-content-center my-5">
          {portfolios.map((portfolio, index) => {
            return (
              <div className="col-md-5" key={index}>
                <Link to={`/portofolio/${portfolio.id}`}>
                  <PortfolioItem
                    img={portfolio.img}
                    alt={portfolio.alt}
                    title={portfolio.title}
                    aosDuration={aosDuration}
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ScreenAllPortofolio;
