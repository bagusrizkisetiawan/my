const PortfolioItem = ({ img, alt, title }) => {
  return (
    <div
      className="card rounded-1 border-0 shadow-sm card-portofolio mb-4"
      data-aos="zoom-in-up"
    >
      <img src={img} alt={alt} className="rounded" />
      <div className="title-portofolio">
        <p>{title}</p>
      </div>
    </div>
  );
};

export default PortfolioItem;
