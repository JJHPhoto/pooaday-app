import React from "react";
import { Navbar, Nav } from "react-bootstrap";
const GlobalNavbar = (props) => {
	return (
		<div>
			<Navbar variant="light">
				<Navbar.Brand href="#home">
					<img
						alt=""
						src=""
						width="30"
						height="30"
						className="d-inline-block align-top"
					/>{" "}
					pooaday
				</Navbar.Brand>
				<Nav className="mr-auto">
					<Nav.Link href="/">Home</Nav.Link>
					<Nav.Link href="#pricing">About</Nav.Link>
					<Nav.Link href="#features">My entry</Nav.Link>
					<Nav.Link href="#pricing">My bowel</Nav.Link>
				</Nav>
			</Navbar>
		</div>
	);
};

export default GlobalNavbar;
