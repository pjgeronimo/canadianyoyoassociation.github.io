// prettier-ignore
"use client";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./styles.css";

const MyNavbar = () => {
  return (
    <Navbar expand="lg" className="navbar" variant="dark">
      <Container>
        <Navbar.Brand href="#home" className="navbar-brand">
          #CanadaNats2026
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">About</Nav.Link>
            <Nav.Link href="#link">Schedule</Nav.Link>
            <Nav.Link href="#link">Venue</Nav.Link>
            <Nav.Link href="#link">Rules</Nav.Link>
            <Nav.Link href="#link">FAQ</Nav.Link>
            <Nav.Link href="#link">Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
