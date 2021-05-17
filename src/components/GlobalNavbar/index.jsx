import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import toiletpaper from "../photos/icons/toilet-paper-solid.svg";

const GlobalNavbar = (props) => {
  return (
    <div>
      <Navbar variant="light">
        <Navbar.Brand href="#home">
          <img
            alt="toilet paper icon"
            src={toiletpaper}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          pooaday
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">home</Nav.Link>
          <Nav.Link href="#about">about</Nav.Link>
          <Nav.Link href="#myentry">my entry</Nav.Link>
          <Nav.Link href="#mybowel">my bowel</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};

export default GlobalNavbar;
