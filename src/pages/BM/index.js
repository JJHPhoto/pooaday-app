import React, { useContext, useState } from "react";
import {
	Accordion,
	AccordionContext,
	Card,
	Container,
	Jumbotron,
} from "react-bootstrap";
import { useAccordionToggle } from "react-bootstrap/AccordionToggle";
import RangeSlider from "react-bootstrap-range-slider";

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
	const [value, setValue] = useState(0);
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
				<Card>
					<Card.Header>
						<ContextAwareToggle eventKey="0">Click me!</ContextAwareToggle>
					</Card.Header>
					<Accordion.Collapse eventKey="0">
						<Card.Body>
							<RangeSlider
								value={value}
								onChange={(changeEvent) => setValue(changeEvent.target.value)}
							/>
							Hello! I'm the body
						</Card.Body>
					</Accordion.Collapse>
				</Card>
				<Card>
					<Card.Header>
						<ContextAwareToggle eventKey="1">Click me!</ContextAwareToggle>
					</Card.Header>
					<Accordion.Collapse eventKey="1">
						<Card.Body>Hello! I'm another body</Card.Body>
					</Accordion.Collapse>
				</Card>
			</Accordion>
		</Container>
	);
}

export default BM;
