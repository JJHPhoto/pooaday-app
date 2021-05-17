import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

function SignUpForm({ onSignUpFormSubmit, handleClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <Form onSubmit={onSignUpFormSubmit}>
        {/* props not passing correctly. it should be changed  yellow  */}
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
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label></Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Subscribe to our newsletter"
            // checked
            // need to have onChange
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          onSubmit={onSignUpFormSubmit}
          block
        >
          SIGN UP
        </Button>
      </Form>
    </div>
  );
}

export default SignUpForm;
