// import { Button } from "bootstrap";
import React from "react";
import {
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
  Button,
  Container,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Travel Monkey</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Container>
              <Nav className="mr-auto">
                <Nav.Link> <Link className="text-white" to="/">Home </Link> </Nav.Link>
                <Link to="/login" className="btn btn-success">Log In</Link>
              </Nav>
            </Container>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
