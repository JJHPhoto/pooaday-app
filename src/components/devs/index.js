import { MDBIcon, MDBBtn } from "mdbreact";
import mia from "../photos/TeamImageMia.jpg";
import josh from "../photos/TeamImageJosh.jpg";
import lana from "../photos/TeamImageLana.jpg";

const devs = [
  {
    id: 1,
    name: "Mia Dilberovic",
    image: mia,
    github: (
      <MDBBtn
        color="secondary"
        href="https://github.com/Dilberovicka31"
        target="_blank"
      >
        <MDBIcon fab icon="github" /> Github{" "}
      </MDBBtn>
    ),
    linkedin: (
      <MDBBtn
        color="secondary"
        href="https://www.linkedin.com/in/mia-dilberovic/"
        target="_blank"
      >
        <MDBIcon fab icon="linkedin" /> LinkedIn{" "}
      </MDBBtn>
    ),
    description: "filler descrption",
    title: "title",
    role: "role",
    portfolio: (
      <MDBBtn
        color="secondary"
        href="https://portfolio-miadilberovic.herokuapp.com/"
        target="_blank"
      >
        <MDBIcon fab icon="desktop" /> Portfolio{" "}
      </MDBBtn>
    ),
  },
  {
    id: 2,
    name: "Joshua Haller",
    image: josh,
    github: (
      <MDBBtn
        color="secondary"
        href="https://github.com/JJHPhoto"
        target="_blank"
      >
        <MDBIcon fab icon="github" /> Github{" "}
      </MDBBtn>
    ),
    linkedin: (
      <MDBBtn
        color="secondary"
        href="https://www.linkedin.com/in/joshuajhaller/"
        target="_blank"
      >
        <MDBIcon fab icon="linkedin" /> LinkedIn{" "}
      </MDBBtn>
    ),
    description: "blank",
    title: "title",
    role: "role",
    portfolio: (
      <MDBBtn
        color="secondary"
        href="https://jjh-webdev-portfolio.herokuapp.com/"
        target="_blank"
      >
        <MDBIcon fab icon="desktop" /> Portfolio{" "}
      </MDBBtn>
    ),
  },
  {
    id: 3,
    name: "Lana Kim",
    image: lana,
    github: (
      <MDBBtn
        color="secondary"
        href="https://github.com/lk9988"
        target="_blank"
      >
        <MDBIcon fab icon="github" /> Github{" "}
      </MDBBtn>
    ),
    linkedin: (
      <MDBBtn
        color="secondary"
        href="https://www.linkedin.com/in/lana-kim-a79a3520a/"
        target="_blank"
      >
        <MDBIcon fab icon="linkedin" /> LinkedIn{" "}
      </MDBBtn>
    ),
    description: "blank",
    title: "title",
    role: "role",
    portfolio: (
      <MDBBtn
        color="secondary"
        href="https://jjh-webdev-portfolio.herokuapp.com/"
        target="_blank"
      >
        <MDBIcon fab icon="desktop" /> Portfolio{" "}
      </MDBBtn>
    ),
  },
];

export default devs;
