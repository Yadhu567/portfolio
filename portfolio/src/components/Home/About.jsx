import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/home-main.svg";
import Tilt from "react-parallax-tilt";


const About = () => {
    return (
        <Container fluid className="home-about-section" id="about">
          <Container>
            <Row>
              <Col md={8} className="home-about-description">
                <h1 style={{ fontSize: "2.6em" }}>
                  INTRODUCTION
                </h1>
                <p className="home-about-body">
                 Hi, my name is <b className="yellow"> Yadhukrishnan PK </b>
                 and I'm from <b className="yellow"> kerala, India.</b>
                <br />
                <br />
                I recently graduated with a BTech in Computer Science in 2024.
                <br />
  
                  <br />I am proficient in
                    <b className="yellow"> Python </b>
                    as well as have knowledge in programming languages such as <b className="yellow"> C, Java, Javascript,</b> 
                
                  <br />
                  <br />
                  I also worked 
                  with libraries and frameworks like <b className="yellow">Django, React js, MongoDB</b> 
                                   
                </p>
              </Col>
              <Col md={4} className="myAvtar">
                <Tilt>
                  <img src={LaptopImg} className="img-fluid" alt="avatar" />
                </Tilt>
              </Col>
            </Row>
            
          </Container>
        </Container>
      );
    
}

export default About