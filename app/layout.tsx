import { GoogleTagManager } from "@next/third-parties/google";
import type { Metadata } from "next";

import "bootstrap/dist/css/bootstrap.min.css";

import "@/app/globals.css";
import CanyaFooter from "@/components/CanyaFooter";
import MyNavbar from "@/components/MyNavbar";

export const metadata: Metadata = {
  title: {
    template: "%s - Canadian Nationals 2026",
    default: "Canadian Nationals 2026: May 19 in Calgary",
  },
  description: "Canadian National Return Top Championship 2026",
  keywords: [
    "yo-yo",
    "yoyo",
    "yoyos",
    "calgary",
    "yoyoing",
    "canada",
    "alberta",
    "return top",
    "return",
    "top",
    "competition",
    "championship",
    "contest",
    "national",
    "nats",
    "nationals",
  ],
  openGraph: {
    title: "Canadian Nationals 2026: May 19 in Calgary",
    description: "Canadian National Return Top Championship 2026",
    url: "https://canadanationals.com",
    siteName: "Canadian Nationals 2026",
    images: [
      {
        url: "https://canadanationals.com/2024/fb_preview.jpg",
        alt: "Canadian Nationals 2026",
        width: 600,
        height: 315,
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Canadian Nationals 2026: May 19 in Calgary",
    description: "Canadian National Return Top Championship 2026",
    images: ["https://canadanationals.com/2024/fb_preview.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-bs-theme="light">
      <GoogleTagManager gtmId="GTM-MJZ4QWRJ" />
      <body>
        <MyNavbar />
        {children}
        <CanyaFooter />
      </body>
    </html>
  );
}
