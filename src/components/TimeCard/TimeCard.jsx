import React, { useState } from "react";
import { Card, Accordion } from "react-bootstrap";

const TimeCard = (props) => {
	return (
		<Card>
			<Accordion.Toggle as={Card.Header} eventKey="0">
				Time
			</Accordion.Toggle>
			<Accordion.Collapse eventKey="0">
				<Card.Body>Hello! I'm the body</Card.Body>
			</Accordion.Collapse>
		</Card>
	);
};

export default TimeCard;
