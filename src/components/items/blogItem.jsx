import { Link } from "react-router-dom";

const BlogItem = ({ id, img, alt, title, desc }) => {
  return (
    <div
      className="card rounded-1 border-0 shadow-sm mb-3"
      data-aos="zoom-in-up"
    >
      <img src={img} alt={alt} className="card-img-top" />
      <div className="card-body p-4">
        <Link to={`/blog/${id}`} className="link-primary text-decoration-none">
          <h5 className="truncate-title text-primary mb-3">{title}</h5>
        </Link>
        <p className="text-secondary truncate-desc small mb-4">{desc}</p>
        <Link to={`/blog/${id}`} className="link-primary text-decoration-none">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogItem;
