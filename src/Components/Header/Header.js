import React, { useContext } from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import './Header.css';

const Header = () => {
  const [loggedInUser,setLoggedInUser] = useContext(UserContext);
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand >Travel-Pundit</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/" className="link-style mx-2">Home</Link>
            <Link to="/login" className="link-style mx-2">Login</Link>
            <Link to="/transport/1">Transport</Link>
            <Link className="mx-2"> {loggedInUser.name}</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
