"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-24 bg-white border-t border-slate-200">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-6">
            <div className="text-xl font-bold tracking-[0.2em] text-[#1B3022]">LIYONTA</div>
            <p className="text-sm text-[#555555] leading-relaxed">
              Elevating the art of tea through heritage, craftsmanship, and a commitment to pure Ceylon excellence.
            </p>
          </div>
          
          <div className="space-y-6">
            <h5 className="text-xs font-bold uppercase tracking-widest text-[#1B3022]">Visit Us</h5>
            <p className="text-sm text-[#555555] leading-relaxed">
              No. 124, Heritage Factory Road,<br />
              Southern Province, Sri Lanka<br />
              <span className="font-bold">By Appointment Only</span>
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
            <h5 className="text-xs font-bold uppercase tracking-widest text-[#1B3022]">Join the Tea Circle</h5>
            <form className="flex border-b border-[#1B3022] py-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-transparent text-sm w-full outline-none" 
              />
              <button 
                type="submit" 
                className="text-xs font-bold uppercase tracking-widest text-green-600 ml-4"
              >
                Join
              </button>
            </form>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.2em] text-slate-400 pt-10 border-t border-slate-100 italic">
          <p>&copy; 2026 Liyonta Tea. Heritage of Sri Lanka.</p>
        </div>
      </div>
    </footer>
  );
}
