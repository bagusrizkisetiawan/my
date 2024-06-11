import cv from "../../public/CV-Bagus Rizki Setiawan.pdf";
const Jumbotron = () => {
  return (
    <>
      <div className="jumbotron">
        <div className="bg-jumbotron">
          <div className="container text-light ">
            <h1 data-aos="fade-up">Hello, I'm</h1>
            <h1 className="mb-3" data-aos="fade-up">
              Bagus Rizki Setiawan
            </h1>
            <p data-aos="fade-up">Solve Your Problem With the System</p>
            <a
              href={cv}
              className="btn btn-primary px-4 p-2 mb-0 radius-1"
              data-aos="fade-up"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Jumbotron;
