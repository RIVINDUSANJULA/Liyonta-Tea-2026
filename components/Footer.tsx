"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#f6f3ea] w-full rounded-t-[3rem] mt-20">
      <div className="container mx-auto px-8 lg:px-12 py-16 flex flex-col md:flex-row justify-between items-center gap-8">

        {/* Left: Brand Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <Image
              src="/logo.png"
              alt="Liyonta Tea"
              width={100}
              height={40}
              className="object-contain"
            />
          </Link>
        </div>

        {/* Middle: Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
          {[
            { name: "Sustainability", href: "#" },
            { name: "Wholesale", href: "#" },
            { name: "Privacy", href: "#" },
            { name: "Contact", href: "/contact" },
          ].map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-sans text-sm tracking-wide text-[#46483f] hover:text-[#516445] underline-offset-4 hover:underline transition-all duration-300"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right: Copyright & Slogan */}
        <div className="text-right">
          <p className="font-sans text-xs tracking-wide text-[#46483f] opacity-80">
            © 2026 Liyonta Tea. Cultivating the Ritual of Breath.
          </p>
        </div>

      </div>
    </footer>
  );
}