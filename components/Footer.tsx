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
            <div className="text-xl font-bold tracking-[0.2em] text-cream">LIYONTA</div>
            <p className="text-sm leading-relaxed">
              Liyonta Tea brings the finest handpicked Ceylon teas from Sri Lanka&apos;s lush highlands to your cup.
              With a commitment to quality, sustainability, and community, we offer an exceptional tea experience
              rooted in tradition and passion.
            </p>
          </div>

          <div className="space-y-6">
            <h5 className="text-xs font-bold uppercase tracking-widest text-cream">Visit Us</h5>
            <p className="text-sm leading-relaxed">
              Liyonta Tea Factory,<br />
              Dangala, Alapaladeniya <br /> <br />
              <span className="font-bold text-cream">By Appointment Only</span> <br />
            </p>
          </div>

          <div className="space-y-6">
            <h5 className="text-xs font-bold uppercase tracking-widest text-cream">Navigation</h5>
            <ul className="space-y-4 text-sm">
              <li><Link href="/" className="hover:text-gold transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-gold transition-colors">Our Story</Link></li>
              <li><Link href="/gallery" className="hover:text-gold transition-colors">Gallery</Link></li>
              <li><Link href="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h5 className="text-xs font-bold uppercase tracking-widest text-cream">
              Contact Us
            </h5>

            <div className="text-sm">
              Email:{" "}
              <a
                href="mailto:liyonta@gmail.com?subject=Contact%20Us"
                className="hover:text-gold transition-colors font-bold text-cream/70"
              >
                liyonta@gmail.com
              </a>
            </div>

            <div className="text-sm leading-relaxed">
              Telephone:{" "}
              <a
                href="tel:+94413130665"
                className="hover:text-gold transition-colors font-bold text-cream/70"
              >
                +94 41 313 0665
              </a>
              <br />
              <span className="invisible">Telephone: </span>
              <a
                href="tel:+94412282268"
                className="hover:text-gold transition-colors font-bold text-cream/70"
              >
                +94 41 228 2268
              </a>
            </div>

            <div className="text-sm leading-relaxed">
              Location:{" "}
              <a
                href="https://www.google.com/maps/search/?api=1&query=Liyonta+Tea+Factory,+Dangala,+Alapaladeniya,+Sri+Lanka"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition-colors font-bold text-cream/70"
              >
                Liyonta Tea Factory
              </a>
            </div>

            <div className="pt-4 flex items-center space-x-4">
              <a
                href="https://instagram.com/LIYONTAOFFICIAL"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com/LIYONTAOFFICIAL"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <span className="text-[10px] font-bold uppercase tracking-widest ml-2 text-gold">@LIYONTAOFFICIAL</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.2em] pt-5 border-t border-gold/10 italic text-cream/20">
          <p>&copy; 2026 Liyonta Tea. Heritage of Sri Lanka.</p>
        </div>
      </div>
    </footer>
  );
}
