import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Nav, NavDropdown } from "react-bootstrap";
import logo from "../logo.svg";
import "../css/MyNavBar.css";
import { Link } from "react-router-dom";

export default function MyNavBar() {
  return (
    <div>
      <Navbar id="navheader" collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Navbar.Brand href="#home">
          <img src={logo} className="App-logo" alt="logo" />
          React-API
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">
              Inicio
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              Acerca de
            </Nav.Link>
            {/* <NavDropdown title="Idioma" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Español</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Ingles</NavDropdown.Item>
           </NavDropdown> */}
          </Nav>
          <Nav>
            <div className="social-links mr-auto">
              <a href="https://twitter.com/?lang=es" className="twitter">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="https://www.facebook.com/fernando.corinaldesi/" className="facebook">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="https://www.instagram.com/?hl=es-la" className="instagram">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://aboutme.google.com/u/0/" className="google-plus">
                <i className="fa fa-google-plus"></i>
              </a>
              <a href="https://www.linkedin.com/in/fernando-corinaldesi-2a839b175/" className="linkedin">
                <i className="fa fa-linkedin"></i>
              </a>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
