import { useEffect, useState } from "react";
import CustomNavbar from "../components/navbar";
import JumbotronDetails from "../components/jumbotronDetails";
import BlogItem from "../components/items/blogItem";
import dataBlogs from "../data/dataBlog";

const ScreenAllBlogs = () => {
  let aosDuration = 100;

  const [blogs, setBlogs] = useState(dataBlogs);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <CustomNavbar />
      <JumbotronDetails text={"All Blog"} />
      <div className="container">
        <div className="py-5">
          <div className="row justify-content-center">
            <div className="row">
              {blogs.map((blog, index) => {
                return (
                  <div className="col-md-4" key={index}>
                    <BlogItem
                      id={blog.id}
                      img={blog.img}
                      alt={blog.alt}
                      title={blog.title}
                      desc={blog.desc}
                      aosDuration={(aosDuration += 50)}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScreenAllBlogs;
