import React, { useState } from "react";
import { MDBJumbotron, MDBContainer, MDBIcon } from "mdbreact";
import { Jumbotron, Button, Modal } from "react-bootstrap";
import "./style.css";
import SignUpModal from "../SignUpModal/SignUpModal";
import SignUpForm from "../SignUpForm";

function Header() {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const onSignUpFormSubmit = (e) => {
		e.preventDefault();
		handleClose();
	};
	const onLoginFormSubmit = (e) => {
		e.preventDefault();
		handleClose();
	};
	return (
		<div>
			{/* <MDBJumbotron fluid>
				<MDBContainer>
					<h2 className="display-4">Pooaday</h2>
					<p className="lead">
						Made with love by Lana, Josh and Mia.
						{/* <MDBIcon icon="heart" size="2x" className="red-text pr-3" />{" "} */}
			{/* </p> */}
			{/* </MDBContainer> */}
			{/* </MDBJumbotron>  */}
			<Jumbotron className="bg-transparent intro">
				<h1>pooaday</h1>
				<p>made with ❤️ by Lana, Josh and Mia </p>
				<p>
					<Button variant="primary" onClick={handleShow}>
						sign up
						<SignUpModal
							show={show}
							onHide={handleClose}
							onClick={handleClose}
              onSubmit ={onSignUpFormSubmit }
						/>
					</Button>
				</p>
				{/* <Button variant="primary" onClick={handleShow}>
					Launch Form modal
				</Button>

				<Modal show={show} onHide={handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>Login Form</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<SignUpForm onSubmit={onLoginFormSubmit} />
					</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={handleClose}>
							Close Modal
						</Button>
					</Modal.Footer>
				</Modal> */}
			</Jumbotron>
		</div>

		// <div>
		/* <header>
        <nav class="navbar navbar-expand-lg navbar-light">
          <div class="container-fluid">
            <button
              class="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#navbarExample01"
              aria-controls="navbarExample01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i class="fas fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarExample01">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item active">
                  <a class="nav-link" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Features
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Developers
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Newsletter
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div class="p-5 text-center">
          <h1 class="mb-3">Pooaday</h1>
          <h4 class="mb-3">Made with love by Lana, Josh and Mia</h4>
          <a class="btn btn-primary" href="" role="button">
            Call to action
          </a>
        </div>
      </header> */
		// </div>
	);
}

export default Header;
