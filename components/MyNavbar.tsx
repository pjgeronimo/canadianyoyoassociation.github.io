"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container, Nav, Navbar } from "react-bootstrap";

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
                active={pathname === path.href}
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
