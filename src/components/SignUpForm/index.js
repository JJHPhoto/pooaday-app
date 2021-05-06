import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

function SignUpForm() {
	return (
		<div>
			<Form>
				<Row>
					<Col>
						<Form.Control placeholder="First name" />
					</Col>
					<Col>
						<Form.Control placeholder="Last name" />
					</Col>
				</Row>
				<Form.Group controlId="formBasicEmail">
					<Form.Label></Form.Label>
					<Form.Control type="email" placeholder="Enter email" />
				</Form.Group>
				<Form.Group controlId="formBasicPassword">
					<Form.Label></Form.Label>
					<Form.Control type="password" placeholder="Password" />
				</Form.Group>
				<Form.Group controlId="formBasicCheckbox">
					<Form.Check
						type="checkbox"
						label="Subscribe to our newsletter"
						checked
					/>
				</Form.Group>
				<Button variant="primary btn-block" type="submit">
					Submit
				</Button>
			</Form>
		</div>
	);
}

export default SignUpForm;
