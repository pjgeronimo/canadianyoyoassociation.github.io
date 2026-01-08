"use client";
import Link from "next/link";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Home() {
  return (
    <>
      <Container className="text-center">
        <Row>
          <Col>
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH}/assets/2026natslogo.png`}
              alt="2026 Canadian Nationals Logo"
              width="40%"
            />
          </Col>
        </Row>
        <Row>
          <h1>May 17th, 2026</h1>
          <h1>Calgary, AB</h1>
          <p>
            Welcome to the official website of the Canadian National Return Top
            Championship 2026! Some of the finest return top players from all
            over Canada will be competing for this year's nationals titles in
            Calgary, AB on Sunday, May 17th.
          </p>
          <p>
            As a member organization of the{" "}
            <Link href="https://iyyf.org/" className="link">
              International Yo-yo Federation
            </Link>
            , the winners of Canadian Nationals will be seeded to the World
            Yo-yo Contest 2026.
          </p>
          <p>
            This event is family-friendly and open to the public for free.
            Contestants must register{" "}
            <Link href="/register" className="link">
              here
            </Link>
            .
          </p>
          <p>
            To keep up to date or get in touch with us, use the hashtag
            #CanadaNats2026 and follow us on social media
          </p>
        </Row>

        <Button
          href="https://linktr.ee/canadianyoyoassociation"
          className="socials-btn"
          target="_blank"
        >
          @canadianyoyoassociation
        </Button>
      </Container>
    </>
  );
}
