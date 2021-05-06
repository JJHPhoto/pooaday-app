import React from "react";

import { Modal, Button } from "react-bootstrap";
import SignUpForm from "../SignUpForm";

const SignUpModal = ({ show, handleClose }) => {
	return (
		<div>
			<Modal
				show={show}
				onHide={handleClose}
				size="lg"
				aria-labelledby="contained-modal-title-vcenter"
				centered
			>
				<Modal.Header closeButton>
					<Modal.Title>Sign up</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<SignUpForm />
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button variant="primary" onClick={handleClose}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
};

export default SignUpModal;
