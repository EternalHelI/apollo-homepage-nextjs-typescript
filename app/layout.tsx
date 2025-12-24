import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const roboto = localFont({
  src: [
    {
      path: "../public/fonts/Roboto/Roboto-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Roboto/Roboto-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Roboto/Roboto-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Apollo Hub · Home",
  description:
    "Apollo Hub is a minimal, space-inspired home for your team’s docs and internal tools.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.variable}>{children}</body>
    </html>
  );
}
