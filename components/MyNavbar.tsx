"use client";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { usePathname } from "next/navigation";

import "./styles.css";

const paths = [
  { name: "About", href: "/" },
  { name: "Venue", href: "/venue" },
  { name: "Schedule", href: "/schedule" },
  { name: "Rules", href: "/rules" },
  { name: "FAQ", href: "/faq" },
  { name: "Register", href: "/register" }
];

const MyNavbar = () => {
  const pathname = usePathname();

  return (
    <Navbar expand="lg" className="navbar" variant="dark">
      <Container>
        <Navbar.Brand href="/" className="navbar-brand">
          #CanadaNats2026
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {paths.map((path) => (
              <Nav.Link
                key={path.href}
                href={path.href}
                // trailing slashes removed in next.config.ts
                active={pathname === path.href}
              >
                {path.name}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
