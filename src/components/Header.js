import React, { useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../assets/STLlogo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faProcedures } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  // eslint-disable-next-line no-unused-vars
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className="flex-wrap"
      style={{
        position: "fixed",
        top: "0px",
        width: "100%",
        height: "90px",
        backgroundColor: "#fff",
        boxShadow:
          "rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",
        zIndex: 1,
      }}
    >
      <Navbar
        className={"flex mb-4"}
        data-bs-theme="light"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginLeft: "2vw",
          marginRight: "2vw",
        }}
      >
        <Navbar.Brand href="#top">
          <img alt="error 404" src={Logo} width="100px"></img>
        </Navbar.Brand>

        <div>
          <Nav className="me-auto">
            <Nav.Link href="#home" style={{ color: "#2062cb" }}>
              <div>
                <FontAwesomeIcon icon={faHome} />
              </div>
              Home
            </Nav.Link>
            <Nav.Link href="#home" style={{ color: "#2062cb" }}>
              <div>
                <FontAwesomeIcon icon={faProcedures} />
              </div>
              Product
            </Nav.Link>
          </Nav>
        </div>
      </Navbar>
    </header>
  );
};

export default Header;
