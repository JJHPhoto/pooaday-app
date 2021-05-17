import React, { useState } from "react";
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
              onSubmit={onSignUpFormSubmit}
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
  );
}

export default Header;
