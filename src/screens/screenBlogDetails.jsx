import { useEffect, useState } from "react";
import CustomNavbar from "../components/navbar";
import { useParams } from "react-router-dom";
import JumbotronDetails from "../components/jumbotronDetails";
import dataBlogs from "../data/dataBlog";

const ScreenBlogDetails = () => {
  const { id } = useParams();
  const [blogs, setBlogs] = useState(dataBlogs);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const blog = blogs.find((item) => item.id === parseInt(id));

  if (!blog) {
    return <div>blog not found</div>;
  }
  return (
    <>
      <CustomNavbar />
      <JumbotronDetails text={"Blog Details"} />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className="py-5">
              <h1 className=" mb-4">{blog.title}</h1>
              <img src={blog.img} alt={blog.alt} className="w-100 rounded" />
              <p
                className="mt-3"
                dangerouslySetInnerHTML={{ __html: blog.desc }}
              ></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScreenBlogDetails;
