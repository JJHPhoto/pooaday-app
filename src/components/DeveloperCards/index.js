import React from "react";
// import mia from "../photos/TeamImageMia.jpg";

function DeveloperCards(props) {
  return (
    <div class="card w-25">
      {/* need to add rows somehow */}
      <img src={props.image} class="card-img-top" alt="dev pic" />
      <div class="card-body">
        <h5 class="card-name">{props.name}</h5>
        <h6 class="card-role">{props.role}</h6>
        <p class="card-text">{props.description}</p>
      </div>
    </div>
  );
}

export default DeveloperCards;
