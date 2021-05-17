import React from "react";
import { Navbar, Nav } from "react-bootstrap";

function Footer() {
  return (
    <div>
      <Navbar
        fixed="bottom"
        className="justify-content-center"
        activeKey="/home"
      >
        <Nav.Item>
          <h6>© pooaday app 2021</h6>
        </Nav.Item>
      </Navbar>
    </div>
  );
}

export default Footer;
