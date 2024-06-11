import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Service = () => {
  const [showModal, setShowModal] = useState(null);

  const handleClose = () => setShowModal(null);
  const handleShow = (id, e) => {
    e.preventDefault(); // Mencegah scroll ke atas
    setShowModal(id);
  };

  return (
    <div className="py-5 bg-secondary-light">
      <div className="container">
        <p className="mb-2 text-secondary text-center" data-aos="zoom-in-up">
          Who Am I?
        </p>
        <p className="fs-2 text-primary text-center" data-aos="zoom-in-up">
          Service
        </p>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div
              className="card mb-3 rounded-1 border-0 shadow-sm"
              data-aos="zoom-in-up"
              data-aos-duration="500"
            >
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  <i className="bx bx-link icon-service icon-service-1 rounded-1"></i>
                  <h5 className="mb-0 ms-3">Web Development</h5>
                </div>
                <p className="text-secondary">
                  Transforming your ideas into robust, high-performing web
                  applications.
                </p>
                <a
                  href="#"
                  onClick={(e) => handleShow(1, e)}
                  className="text-decoration-none text-primary"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className="card mb-3 rounded-1 border-0 shadow-sm"
              data-aos="zoom-in-up"
              data-aos-duration="750"
            >
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  <i className="bx bx-book-content icon-service icon-service-2 rounded-1"></i>
                  <h5 className="mb-0 ms-3">Web Design</h5>
                </div>
                <p className="text-secondary">
                  Crafting visually stunning and user-friendly websites tailored
                  to your brand.
                </p>
                <a
                  href="#"
                  onClick={(e) => handleShow(2, e)}
                  className="text-decoration-none text-primary"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className="card mb-3 rounded-1 border-0 shadow-sm"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  <i className="bx bx-devices icon-service icon-service-3 rounded-1"></i>
                  <h5 className="mb-0 ms-3">Mobile Development</h5>
                </div>
                <p className="text-secondary">
                  Creating seamless and intuitive mobile experiences to engage
                  your audience.
                </p>
                <a
                  href="#"
                  onClick={(e) => handleShow(3, e)}
                  className="text-decoration-none text-primary"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <Modal size="lg" show={showModal === 1} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <div className="d-flex align-items-center mb-0">
              <i className="bx bx-link icon-service icon-service-1 rounded-1"></i>
              <h5 className="mb-0 ms-3">Web Development</h5>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Transforming your ideas into robust, high-performing web applications.
          <br />
          <br />
          We use modern technologies and frameworks to build scalable, secure,
          and user-friendly websites that meet your business needs.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal size="lg" show={showModal === 2} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <div className="d-flex align-items-center mb-0">
              <i className="bx bx-book-content icon-service icon-service-2 rounded-1"></i>
              <h5 className="mb-0 ms-3">Web Design</h5>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Crafting visually stunning and user-friendly websites tailored to your
          brand.
          <br />
          <br />
          Our design process ensures that your website not only looks great but
          also provides a seamless user experience.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal size="lg" show={showModal === 3} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <div className="d-flex align-items-center mb-0">
              <i className="bx bx-devices icon-service icon-service-3 rounded-1"></i>
              <h5 className="mb-0 ms-3">Mobile Development</h5>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Creating seamless and intuitive mobile experiences to engage your
          audience.
          <br />
          <br />
          We specialize in developing mobile applications that are not only
          functional but also provide an excellent user experience.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Service;
