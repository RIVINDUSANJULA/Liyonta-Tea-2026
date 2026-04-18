"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    // Reduced margin-top (mt-12) and kept the rounded top edge
    <footer className="bg-[#f6f3ea] w-full rounded-t-[3rem] mt-12">
      {/* Reduced vertical padding (py-8) to make the footer height smaller */}
      <div className="container mx-auto px-8 lg:px-12 py-8 flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Left: Brand Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <Image
              src="/logo.png"
              alt="Liyonta Tea"
              width={80}
              height={32}
              className="object-contain"
            />
          </Link>
        </div>

        {/* Middle: Compact Navigation Links */}
        <nav className="flex items-center gap-x-6">
          {[
            { name: "Home", href: "/" },
            { name: "About Us", href: "/about" },
            { name: "Tea", href: "/collections" },
            { name: "Contact", href: "/contact" },
          ].map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-sans text-xs tracking-wide text-[#46483f] hover:text-[#516445] transition-all duration-300"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right: Minimalist Copyright */}
        <div className="text-right">
          <p className="font-sans text-[10px] tracking-widest text-[#46483f] opacity-60 uppercase">
            © 2026 Liyonta Tea.
          </p>
        </div>

      </div>
    </footer>
  );
}