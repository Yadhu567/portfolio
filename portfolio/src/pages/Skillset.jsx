import React from "react";
import { Container } from "react-bootstrap";

import Particle from '../components/Particle'
import Techstack from "../components/Skillset/Techstack";



const Skillset = () => {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
         <strong className="yellow">Skill Set </strong>
        </h1>

        <Techstack />

      </Container>
    </Container>
  )
}

export default Skillset