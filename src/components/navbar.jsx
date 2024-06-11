import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../public/images/logo.png";
import { Link } from "react-router-dom";

function CustomNavbar() {
  const [navbarClass, setNavbarClass] = useState("bg-transparent navbar-dark");
  const [linkClass, setLinkClass] = useState("link-light");
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarClass("bg-light navbar-light shadow-sm");
        setLinkClass("link-dark");
      } else {
        if (!expanded) {
          setNavbarClass("bg-transparent navbar-dark");
          setLinkClass("link-light");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [expanded]);

  const handleToggle = () => {
    setExpanded(!expanded);
    if (!expanded) {
      setNavbarClass("bg-light navbar-light shadow-sm");
      setLinkClass("link-dark");
    } else if (window.scrollY <= 50) {
      setNavbarClass("bg-transparent navbar-dark");
      setLinkClass("link-light");
    }
  };

  return (
    <Navbar
      expand="lg"
      className={`${navbarClass} py-3 fixed-top`}
      id="customNav"
      expanded={expanded}
      onToggle={handleToggle}
    >
      <Container>
        <Navbar.Brand href="/my/">
          <img
            alt="Bagus Rizki Setiawan"
            src={Logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Bagus Rizki
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={handleToggle}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="ms-lg-3 ms-0">
              <Link className={`${linkClass} text-decoration-none`} to="/">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link className="ms-lg-3 ms-0">
              <Link className={`${linkClass} text-decoration-none`} to="/about">
                About
              </Link>
            </Nav.Link>
            <Nav.Link className="ms-lg-3 ms-0">
              <Link
                className={`${linkClass} text-decoration-none`}
                to="/service"
              >
                Services
              </Link>
            </Nav.Link>
            <Nav.Link className="ms-lg-3 ms-0">
              <Link
                className={`${linkClass} text-decoration-none`}
                to="/portofolio"
              >
                Portfolio
              </Link>
            </Nav.Link>
            <Nav.Link className="ms-lg-3 ms-0">
              <Link className={`${linkClass} text-decoration-none`} to="/blog">
                Blog
              </Link>
            </Nav.Link>
            <Nav.Link className="ms-lg-3 ms-0">
              <Link
                className={`${linkClass} text-decoration-none`}
                to="/contact"
              >
                Contact
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
