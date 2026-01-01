"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Col, Container, Image, Row } from "react-bootstrap";

import { Sponsor, sponsorsGold, sponsorsSilver } from "@/components/sponsors";
import { useEffect, useState } from "react";

/**
 * Fisher–Yates shuffle
 * https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#JavaScript_implementation
 * @param arr array to shuffle
 * @returns shuffled array
 */
function shuffleArray(arr: any[]) {
  for (let i = arr.length - 1; i >= 1; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function renderSponsor(sponsor: Sponsor, scale: number, className: string) {
  return (
    <Link key={sponsor.name} href={sponsor.url} target="_blank">
      <Image
        src={sponsor.img}
        alt={sponsor.name}
        width={scale * sponsor.size}
        className={className}
      />
    </Link>
  );
}

function renderSponsorsLarge(gold: Sponsor[], silver: Sponsor[]) {
  const scaleGold = 0.6;
  const scaleSilver = 0.3;

  // // TODO
  // scale_gold = 0.6;
  // scale_silver = 0.3;
  // screen_width = $(document).width();
  // if (screen_width < 700) {
  //     scale_gold = 0.36;
  //     scale_silver = 0.24;
  // }

  return (
    <Col>
      <h1>Sponsors</h1>
      {gold.map((sponsor) => renderSponsor(sponsor, scaleGold, "large-gold"))}
      {silver.map((sponsor) =>
        renderSponsor(sponsor, scaleSilver, "large-silver")
      )}
    </Col>
  );
}

function renderSponsorsSmall(gold: Sponsor[]) {
  return (
    <Col>
      <h2>Gold Sponsors</h2>
      {gold.map((sponsor) => renderSponsor(sponsor, 0.25, "small-gold"))}
    </Col>
  );
}

export default function CanyaFooter() {
  const pathname = usePathname();

  const [gold, setGold] = useState(sponsorsGold);
  const [silver, setSilver] = useState(sponsorsSilver);
  useEffect(() => {
    setGold(shuffleArray([...sponsorsGold]));
    setSilver(shuffleArray([...sponsorsSilver]));
  }, [pathname]);

  return (
    <footer>
      <Container>
        <Row className="text-center">
          {pathname === "/" || pathname === "/index"
            ? renderSponsorsLarge(gold, silver)
            : renderSponsorsSmall(gold)}
        </Row>
      </Container>
    </footer>
  );
}
