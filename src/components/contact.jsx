const Contact = () => {
  return (
    <>
      <div className="container py-5 text-center">
        <div className="py-5">
          <p className="mb-2 text-secondary" data-aos="zoom-in-up">
            How can you communicate?
          </p>
          <p className="fs-2 text-primary mb-4" data-aos="zoom-in-up">
            Contact Me
          </p>
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <form>
                <input
                  type="text"
                  className="form-control mb-3 p-2"
                  placeholder="Nama"
                  data-aos="zoom-in-up"
                />
                <input
                  type="text"
                  className="form-control mb-3 p-2"
                  placeholder="Email"
                  data-aos="zoom-in-up"
                />
                <textarea
                  name=""
                  id=""
                  className="form-control p-2 mb-3"
                  placeholder="Message"
                  data-aos="zoom-in-up"
                ></textarea>
                <button
                  className="btn btn-primary p-2 px-4 radius-1"
                  data-aos="zoom-in-up"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
