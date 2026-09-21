import type { Metadata } from "next";
import { Changa, Changa_One, Amiko, Playfair_Display } from "next/font/google";
import "./globals.css";

const changa = Changa({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-changa",
  display: "swap",
});

const changaOne = Changa_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-changa-one",
  display: "swap",
});

const amiko = Amiko({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-amiko",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Balletvita - Academia de Artes",
  description: "Ensino de dança para todas as idades. A celebrar 19 anos em 2026!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className={`${changa.variable} ${changaOne.variable} ${amiko.variable} ${playfair.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
