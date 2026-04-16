"use client";

import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-6 pointer-events-none">
      <Link href="/" className="pointer-events-auto">
        <span className="text-2xl font-serif font-bold text-stone-900 tracking-tighter">
          Liyonta
        </span>
      </Link>
      
      <div className="flex gap-8 pointer-events-auto">
        <Link 
          href="/about" 
          className="text-stone-600 hover:text-stone-900 font-medium transition-colors duration-300 text-sm uppercase tracking-widest"
        >
          About
        </Link>
        <Link 
          href="/gallery" 
          className="text-stone-600 hover:text-stone-900 font-medium transition-colors duration-300 text-sm uppercase tracking-widest"
        >
          Gallery
        </Link>
        <Link 
          href="/contact" 
          className="text-stone-600 hover:text-stone-900 font-medium transition-colors duration-300 text-sm uppercase tracking-widest"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
