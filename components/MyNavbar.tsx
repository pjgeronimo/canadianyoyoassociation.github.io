"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container, Nav, Navbar } from "react-bootstrap";

const paths = [
  { name: "About", href: "/", active: new Set(["/", "/index", "/index.html"]) },
  { name: "Venue", href: "/venue", active: new Set(["/venue", "/venue.html"]) },
  {
    name: "Schedule",
    href: "/schedule",
    active: new Set(["/schedule", "/schedule.html"]),
  },
  { name: "Rules", href: "/rules", active: new Set(["/rules", "/rules.html"]) },
  { name: "FAQ", href: "/faq", active: new Set(["/faq", "/faq.html"]) },
  {
    name: "Register",
    href: "/register",
    active: new Set(["/register", "/register.html"]),
  },
];

const MyNavbar = () => {
  const pathname = usePathname();

  return (
    <Navbar expand="lg" className="navbar" variant="dark">
      <Container>
        <Navbar.Brand href="/" className="navbar-brand" as={Link}>
          #CanadaNats2026
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {paths.map((path) => (
              <Nav.Link
                key={path.href}
                href={path.href}
                //
                // trailing slashes removed in next.config.ts
                active={path.active.has(pathname)}
                //
                // fix react-bootstrap not reading base path
                // https://github.com/react-bootstrap/react-bootstrap/issues/4131#issuecomment-551964379
                as={Link}
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
