import { useEffect, useState } from "react";
import CustomNavbar from "../components/navbar";
import { useParams } from "react-router-dom";
import JumbotronDetails from "../components/jumbotronDetails";
import DataPortofolios from "../data/dataPortofolio";

const ScreenPortofolioDetails = () => {
  const { id } = useParams();

  const [portfolios, setPortfolios] = useState(DataPortofolios);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const portfolio = portfolios.find((item) => item.id === parseInt(id));

  if (!portfolio) {
    return <div>Portfolio not found</div>;
  }
  return (
    <>
      <CustomNavbar />
      <JumbotronDetails text={"Portofolio Details"} />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className="py-5">
              <img
                src={portfolio.img}
                alt={portfolio.alt}
                className="w-100 rounded mb-4"
              />
              <h1 className=" mb-4">{portfolio.title}</h1>
              <p
                className="mt-3"
                dangerouslySetInnerHTML={{ __html: portfolio.desc }}
              ></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScreenPortofolioDetails;
