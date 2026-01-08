"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Image } from "react-bootstrap";

export default function CanyaBanner() {
  const pathname = usePathname();

  // Do not show the banner except on the home page
  if (!new Set(["/", "/index", "/index.html"]).has(pathname)) return;

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{
        backgroundImage: `url(${process.env.NEXT_PUBLIC_BASE_PATH}/assets/web_bg.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "40rem",
      }}
    >
      <Image
        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/assets/2026natslogo.png`}
        alt="2026 Canadian Nationals Logo"
      />
      <h1 style={{ marginTop: "0.5em", color: "black" }}>May 17th, 2026</h1>
      <h1 style={{ marginTop: "0", color: "black" }}>Calgary, AB</h1>
    </div>
  );
}
