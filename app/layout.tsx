import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Liyonta Tea | Pure Ceylon Excellence",
  description: "Award-winning premium Ceylon tea from the Southern Province of Sri Lanka.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} scroll-smooth`}
    >
      <body className="antialiased font-sans bg-[#FDFCF8] text-[#1B3022]">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
