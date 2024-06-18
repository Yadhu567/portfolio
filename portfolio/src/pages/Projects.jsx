import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import med from "../assets/projects/retina.png";
import guard from "../assets/projects/rail.png";


const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="yellow">Projects</strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={guard}
              isBlog={false}
              title="Rail Guard"
              description="This is a Railway Track Animal Detection System for efficient real-time animal detection near railway track for ensuring safety of train as well as animals. Here Django framework utilised for creating website for station masters to get the realtime alert about detected animal. The YOLOv8 algortihm used to train the model and the trained model achieves an accuracy of 93%. OpenCV is used for ensuring realtime detection. MongoDB is utilized as the database."
              ghLink="https://github.com/Yadhu567/Railway-Track-Animal-Detection-System"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={med}
              isBlog={false}
              title="RetinaMed Prognois"
              description="This platform features a responsive interface built with Reactjs and chakra-ui, allowing users to upload their retina images for predicting various eye diseases. Users can also see their eye health status and prediction history. Incorporated a chatbot dedicated to eye health related queries. Trained a CNN model to predict diseases and achieved an accuracy of 93%. The backend is powered by Django , while firebase is utilized as the database."
              ghLink="https://github.com/Yadhu567/RetinaMed-Prognosis"
            />
          </Col> 
        </Row>
      </Container>
    </Container>
  )
}

export default Projects