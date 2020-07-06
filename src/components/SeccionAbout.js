import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from 'react-bootstrap/Image'
import FadeIn from 'react-fade-in';
import "../css/About.css";

export default function About() {
  return (
    <Container fluid="sm" id="about-container">
        <FadeIn transitionDuration={700} delay={200}>
      <Row >
        <Col>
        <Image src="https://4.bp.blogspot.com/-AHx5Gtgw3Zk/VGqhJICeM9I/AAAAAAAAA6k/koyrXhCcZEQ/s1600/3banderas.jpg" fluid />
        </Col>
        <Col>
          <h5 id="tituloabout">ACERCA DE</h5>
          <h6>
            Institución : <span>Universidad Nacional Jose Clemente Paz</span>
          </h6>
          <h6>
            Materia : <span>Práctica integradora</span>
          </h6>
          <h6>
            Docente : <span>Ign. Gerardo Martin Gonzalez Tulian</span>
          </h6>
          <h6>
            Actividad : <span>Trabajo integrador final</span>
          </h6>
          <h6>
            Tecnologías utilizadas : <span>Express.js-React.js-Bootstrap-Material Design</span>
          </h6>
          <h6>
            Desarrollador : <span>Fernando Corinaldesi</span>
          </h6>
        </Col>
      </Row>
      <Row>
        <Col>
        <Image src="https://i.ibb.co/6t42ZXn/tpdise-o.jpg" fluid />
        </Col>
      </Row>
      </FadeIn>
    </Container>
  );
}
