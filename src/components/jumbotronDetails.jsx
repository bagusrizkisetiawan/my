const JumbotronDetails = ({ text }) => {
  return (
    <>
      <div className="jumbotron-details">
        <div className="bg-jumbotron-details">
          <div className="container text-light text-center">
            <h1 data-aos="fade-up">{text}</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default JumbotronDetails;
