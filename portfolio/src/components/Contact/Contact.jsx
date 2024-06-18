import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import './Contact.css';

const Contact = () => {
    return (
        <Container style={{ paddingTop: '50px' }} >
            <Row>
                <Col md={6} className="c-left">
                    <h1 className="yellow">Contact me</h1>
                </Col>
                <Col md={6} className="c-right">
                    <div className="contact-info">
                        <h2>Email ID:</h2>
                        <p>yadhukrishnanrma@gmail.com</p>
                        <h2>Phone Number:</h2>
                        <p>+91 7994287975</p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Contact;
