import React, { useState } from "react";
import { Card, Accordion } from "react-bootstrap";
import RangeSlider from "react-bootstrap-range-slider";

const StyleCard = (props) => {
	const [value1, setValue1] = useState(0);
    const [ finalValue, setFinalValue ] = useState(null);
	return (
		<Card>
			<Accordion.Toggle as={Card.Header} eventKey="1">
				Style
			</Accordion.Toggle>
			<Accordion.Collapse eventKey="1">
				<Card.Body>
					<RangeSlider
						value={value1}
						onChange={(changeEvent) => setValue1(changeEvent.target.value)}
                        min ={1}
                        max = {5}
                        onAfterChange={e => setFinalValue(e.target.value)}
					/>
                    <div>Final value: {finalValue}</div>
					Hello! I'm the body
				</Card.Body>
			</Accordion.Collapse>
		</Card>
	);
};

export default StyleCard;
