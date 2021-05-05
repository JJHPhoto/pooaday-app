import React, { useContext, useState } from "react";
import {
	Accordion,
	AccordionContext,
	Card,
	Container,
	Jumbotron,
} from "react-bootstrap";
import { useAccordionToggle } from "react-bootstrap/AccordionToggle";
import StyleCard from "../../components/StyleCard/StyleCard";

import TimeCard from "../../components/TimeCard/TimeCard";

function ContextAwareToggle({ children, eventKey, callback }) {
	const currentEventKey = useContext(AccordionContext);

	const decoratedOnClick = useAccordionToggle(
		eventKey,
		() => callback && callback(eventKey)
	);

	const isCurrentEventKey = currentEventKey === eventKey;

	return (
		<button
			type="button"
			style={{
				backgroundColor: isCurrentEventKey ? "transparent" : "lavender",
			}}
			onClick={decoratedOnClick}
		>
			{children}
		</button>
	);
}

function BM() {
	return (
		<Container>
			<Jumbotron fluid>
				<h1>Fluid jumbotron</h1>
				<p>
					This is a modified jumbotron that occupies the entire horizontal space
					of its parent.
				</p>
			</Jumbotron>
			<Accordion defaultActiveKey="0">
				<TimeCard />
				<StyleCard />

				<Card>
					<Accordion.Toggle as={Card.Header} eventKey="2">
						Click me!
					</Accordion.Toggle>
					<Accordion.Collapse eventKey="2">
						<Card.Body>Hello! I'm the body</Card.Body>
					</Accordion.Collapse>
				</Card>
				<Card>
					<Accordion.Toggle as={Card.Header} eventKey="3">
						Click me!
					</Accordion.Toggle>
					<Accordion.Collapse eventKey="3">
						<Card.Body>Hello! I'm the body</Card.Body>
					</Accordion.Collapse>
				</Card>
			</Accordion>
		</Container>
	);
}

export default BM;
