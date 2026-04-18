"use client";

import React from "react";
import Link from "next/link";
import { Instagram, Facebook } from "@/components/contact/SocialIcons";

export default function Footer() {
  return (
    <footer className="py-12 lg:py-16 bg-footerBg border-t border-gold/10 text-cream/35">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-12 lg:mb-16">
          <div className="space-y-6">
            <h5 className="text-xs font-bold uppercase tracking-widest text-cream">Navigation</h5>
            <ul className="space-y-4 text-sm">
              <li><Link href="/" className="hover:text-gold transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-gold transition-colors">Our Story</Link></li>
              <li><Link href="/gallery" className="hover:text-gold transition-colors">Gallery</Link></li>
              <li><Link href="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.2em] pt-5 border-t border-gold/10 italic text-cream/20">
          <p>&copy; 2026 Liyonta Tea. Heritage of Sri Lanka.</p>
        </div>
      </div>
    </footer>
  );
}
