"use client";

import Container from "react-bootstrap/Container";
import Link from "next/link";
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
  { name: "Register", href: "/register" },
];

const MyNavbar = () => {
  const pathname = usePathname();

  return (
    <Navbar expand="lg" className="navbar" variant="dark">
      <Container>
        <Link href="/" passHref>
          <Navbar.Brand className="navbar-brand">#CanadaNats2026</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {paths.map((path) => (
              <Link key={path.href} href={path.href} passHref>
                <Nav.Link
                  // trailing slashes removed in next.config.ts
                  active={pathname === path.href}
                >
                  {path.name}
                </Nav.Link>
              </Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
