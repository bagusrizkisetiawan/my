import { useState } from "react";
import BlogItem from "./items/blogItem";
import dataBlog from "../data/dataBlog";

const Blog = () => {
  const [blogs, setBlogs] = useState(dataBlog);

  return (
    <div className="container">
      <div className="py-5">
        <p className="mb-2 text-secondary text-center" data-aos="fade-up">
          Recent Posts?
        </p>
        <p className="fs-2 text-primary text-center mb-4" data-aos="fade-up">
          Blogs
        </p>
        <div className="row justify-content-center">
          <div className="row">
            {blogs.map((blog, index) => {
              if (blog.id <= 3) {
                return (
                  <div className="col-md-4" key={index}>
                    <BlogItem
                      id={blog.id}
                      img={blog.img}
                      alt={blog.alt}
                      title={blog.title}
                      desc={blog.desc}
                    />
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
