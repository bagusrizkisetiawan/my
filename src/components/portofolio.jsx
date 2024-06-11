import { useState } from "react";
import PortfolioItem from "./items/portofolioItem";
import { Link } from "react-router-dom";
import DataPortofolios from "../data/dataPortofolio";

const Portofolio = () => {
  const [portfolios, setPortfolios] = useState(DataPortofolios);

  return (
    <div className="container">
      <div className="py-5">
        <p className="mb-2 text-secondary text-center" data-aos="zoom-in-up">
          What I Did ?
        </p>
        <p className="fs-2 text-primary text-center mb-4" data-aos="zoom-in-up">
          Portfolio
        </p>
        <div className="row justify-content-center">
          {portfolios.map((portfolio, index) => {
            if (portfolio.id <= 2) {
              return (
                <div className="col-md-5" key={index}>
                  <Link to={`/portofolio/${portfolio.id}`}>
                    <PortfolioItem
                      img={portfolio.img}
                      alt={portfolio.alt}
                      title={portfolio.title}
                    />
                  </Link>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Portofolio;
