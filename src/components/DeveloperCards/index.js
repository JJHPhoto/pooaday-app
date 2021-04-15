import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBView,
  MDBIcon,
} from "mdbreact";

function DeveloperCards(props) {
  return (
    <MDBCol md="4">
      <MDBCard>
        <MDBCardImage
          hover
          overlay="white-light"
          className="card-img-top"
          src={props.image}
          alt="man"
        />

        <MDBCardBody cascade className="text-center">
          <MDBCardTitle className="card-title">
            <strong>{props.name}</strong>
          </MDBCardTitle>

          <p className="font-weight-bold blue-text">{props.tile}</p>

          <MDBCardText>{props.description}</MDBCardText>

          <MDBCol md="12" className="d-flex justify-content-center">
            {props.github}
            {props.linkedin}
            {props.portfolio}
          </MDBCol>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
}

export default DeveloperCards;
