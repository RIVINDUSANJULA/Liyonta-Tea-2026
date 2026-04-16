"use client";

import React from "react";
import Link from "next/link";
import { Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-24 bg-white border-t border-slate-200">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-6">
            <div className="text-xl font-bold tracking-[0.2em] text-[#1B3022]">LIYONTA</div>
            <p className="text-sm text-[#555555] leading-relaxed">
              Liyonta Tea brings the finest handpicked Ceylon teas from Sri Lanka&apos;s lush highlands to your cup.
              With a commitment to quality, sustainability, and community, we offer an exceptional tea experience
              rooted in tradition and passion.
            </p>
          </div>

          <div className="space-y-6">
            <h5 className="text-xs font-bold uppercase tracking-widest text-[#1B3022]">Visit Us</h5>
            <p className="text-sm text-[#555555] leading-relaxed">
              Liyonta Tea Factory,<br />
              Dangala, Alapaladeniya <br /> <br />
              <span className="font-bold">By Appointment Only</span> <br />
            </p>
          </div>

          <div className="space-y-6">
            <h5 className="text-xs font-bold uppercase tracking-widest text-[#1B3022]">Navigation</h5>
            <ul className="space-y-4 text-sm text-[#555555]">
              <li><Link href="/" className="hover:text-green-600 transition-none">Home</Link></li>
              <li><Link href="/about" className="hover:text-green-600 transition-none">Our Story</Link></li>
              <li><Link href="/gallery" className="hover:text-green-600 transition-none">Gallery</Link></li>
              <li><Link href="/contact" className="hover:text-green-600 transition-none">Contact</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h5 className="text-xs font-bold uppercase tracking-widest text-[#1B3022]">
              Contact Us
            </h5>

            <div className="text-sm text-[#1B3022]">
              Email:{" "}
              <a
                /* %20 is the URL-encoded safe way to write a space */
                href="mailto:liyonta@gmail.com?subject=Contact%20Us"
                className="hover:underline text-green-600 font-bold"
              >
                liyonta@gmail.com
              </a>
            </div>

            <div className="text-sm text-[#1B3022] leading-relaxed">
              Telephone:{" "}
              <a
                href="tel:+94413130665"
                className="hover:underline text-green-600 font-bold"
              >
                +94 41 313 0665
              </a>
              <br />
              <span className="invisible">Telephone: </span> {/* Aligns the second number with the first */}
              <a
                href="tel:+94412282268"
                className="hover:underline text-green-600 font-bold"
              >
                +94 41 228 2268
              </a>
            </div>

            <div className="text-sm text-[#1B3022] leading-relaxed">
              Location:{" "}
              <a
                href="https://www.google.com/maps/search/?api=1&query=Liyonta+Tea+Factory,+Dangala,+Alapaladeniya,+Sri+Lanka"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-green-600 font-bold"
              >
                Liyonta Tea Factory
              </a>
            </div>

            <div className="pt-4 flex items-center space-x-4 text-slate-400">
              <a 
                href="https://instagram.com/LIYONTAOFFICIAL" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-green-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://facebook.com/LIYONTAOFFICIAL" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-green-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <span className="text-[10px] font-bold uppercase tracking-widest ml-2">@LIYONTAOFFICIAL</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.2em] text-slate-400 pt-10 border-t border-slate-100 italic">
          <p>&copy; 2026 Liyonta Tea. Heritage of Sri Lanka.</p>
        </div>
      </div>
    </footer>
  );
}
