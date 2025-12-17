"use client";
import Link from "next/link";
import Image from "next/image";
import Button from "react-bootstrap/Button";

export default function Home() {
  return (
    <>
      <Image
        src="/assets/logos/2026natslogo.png"
        width={800}
        height={800}
        alt="2026 Canadian Nationals Logo"
      />
      <h1>Canadian Nationals 2025</h1>
      <p>
        Welcome to the official website of the Canadian National Return Top
        Championship 2026! Some of the finest return top players from all over
        Canada will be competing for this year's nationals titles in Calgary, AB
        on Sunday, May 17th.
      </p>
      <p>
        As a member organization of the{" "}
        <Link href="https://iyyf.org/">International Yo-yo Federation</Link>,
        the winners of Canadian Nationals will be seeded to the World Yo-yo
        Contest 2026.
      </p>
      <p>
        This event is family-friendly and open to the public for free.
        Contestants must register <Link href="/register">here</Link>.
      </p>
      <p>
        To keep up to date or get in touch with us, use the hashtag
        #CanadaNats2026 and follow us on social media
      </p>
      <Button href="https://linktr.ee/canadianyoyoassociation">
        @canadianyoyoassociation
      </Button>
    </>
  );
}
