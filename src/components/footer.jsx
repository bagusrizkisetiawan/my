const Footer = () => {
  return (
    <>
      <div className="bg-dark py-5 mt-5 text-light">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-6 mb-3 col-lg-3">
              <h5>BagusRizki</h5>
              <p className="small my-4">
                My principle <br />
                Solve Your Problem With the System
              </p>
              <a
                href="https://www.instagram.com/bagusrizkiiii/"
                target="_blank"
                className="link-secondary me-4"
              >
                <i className="fa-brands fa-lg fa-instagram"></i>
              </a>
              <a href="" className="link-secondary me-4">
                <i className="fa-brands fa-lg fa-facebook"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/bagus-rizki-s/"
                target="_blank"
                className="link-secondary me-4"
              >
                <i className="fa-brands fa-lg fa-linkedin"></i>
              </a>
              <br />
              <br />

              <a
                href="mailto:bagus30122002@gamil.com"
                className="link-light text-decoration-none small "
              >
                bagus30122002@gmail.com
              </a>
              <br />
              <a
                href="https://wa.me/+6285609201388"
                target="_blank"
                className="link-light text-decoration-none small "
              >
                +62 856 0920 1388
              </a>
            </div>
            <div className="col-md-6 col-lg-2">
              <h6 className="text-secondary mb-3">Product</h6>
              <p>
                <a
                  href="/portofolio"
                  className="link-light text-decoration-none small"
                >
                  Portofolio
                </a>
              </p>

              <p>
                <a
                  href="/blog"
                  className="link-light text-decoration-none small"
                >
                  Blog
                </a>
              </p>
            </div>
            <div className="col-md-6 col-lg-2">
              <h6 className="text-secondary mb-3">Shortcut</h6>
              <p>
                <a href="" className="link-light text-decoration-none small">
                  Home
                </a>
              </p>

              <p>
                <a
                  href="/about"
                  className="link-light text-decoration-none small"
                >
                  About
                </a>
              </p>

              <p>
                <a
                  href="/contact"
                  className="link-light text-decoration-none small"
                >
                  Contact
                </a>
              </p>
            </div>
            <div className="col-md-6 col-lg-2">
              <h6 className="text-secondary mb-3">Support Me</h6>
              <p>
                <a
                  href="https://www.youtube.com/channel/UCAsBhpkMuMqk2O-o93T7hkw"
                  target="_blank"
                  className="link-light text-decoration-none small"
                >
                  Youtube
                </a>
              </p>

              <p>
                <a
                  href="https://developers.google.com/profile/u/bagusrizki"
                  target="_blank"
                  className="link-light text-decoration-none small"
                >
                  GoDev
                </a>
              </p>
              <p>
                <a
                  href="https://github.com/bagusrizkisetiawan"
                  target="_blank"
                  className="link-light text-decoration-none small"
                >
                  Github
                </a>
              </p>
            </div>
            <div className="col-12 mt-5">
              <p className="small text-secondary">
                &copy; bagusrizkisetiawan 2024
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
