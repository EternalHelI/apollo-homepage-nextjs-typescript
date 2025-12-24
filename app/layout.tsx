import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const inter = localFont({
  src: [
    {
      path: "./fonts/Inter-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Inter-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Inter-Bold.ttf",
      weight: "700",
      style: "normal",
    }
  ],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Apollo Hub · Home",
  description:
    "Apollo Hub is a dark, minimal home for your team’s documents and internal links.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.variable}>{children}</body>
    </html>
  );
}
