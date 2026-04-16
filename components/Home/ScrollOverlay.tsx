"use client";

import React from "react";
import Link from "next/link";

export default function ScrollOverlay() {
  return (
    <div className="w-full text-stone-800 font-sans tracking-wide">
      {/* PAGE 1: Hero */}
      <section className="h-screen w-full flex flex-col items-center justify-center px-4 relative">
        <div className="text-center z-10">
          <h1 className="text-7xl md:text-[9rem] font-serif font-bold tracking-tighter mb-4 text-stone-900 drop-shadow-sm">
            Fluid Tea
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold tracking-[0.3em] text-[#1b4332] uppercase drop-shadow-sm">
            A Botanical Journey
          </h2>
        </div>
        <div className="absolute bottom-12 animate-bounce text-stone-500 text-sm tracking-widest uppercase font-semibold">
          Scroll to explore
        </div>
      </section>

      {/* PAGE 2: About (The Story) */}
      <section className="h-screen w-full flex flex-col items-start justify-center px-8 md:px-24 max-w-7xl mx-auto">
        <div className="max-w-xl backdrop-blur-md bg-white/30 p-10 md:p-14 rounded-3xl border border-white/40 shadow-xl">
          <p className="text-[#9c6644] font-bold uppercase tracking-[0.3em] text-sm mb-4">The Story</p>
          <h2 className="text-4xl md:text-6xl font-serif mb-6 text-stone-900 leading-tight">Roots in the Sky</h2>
          <p className="text-lg md:text-xl font-medium leading-relaxed text-stone-800 mb-8">
            Nurtured in pristine conditions, our leaves defy gravity. We harvest at the precise moment of dawn to capture a pure, elevated essence that transcends ordinary tea.
          </p>
          <Link 
            href="/about"
            className="pointer-events-auto inline-block text-sm font-bold uppercase tracking-widest text-[#1b4332] hover:text-[#9c6644] transition-colors duration-300 underline underline-offset-8"
          >
            Read Our Full Story
          </Link>
        </div>
      </section>

      {/* PAGE 3: Gallery (Visuals) */}
      <section className="h-screen w-full flex flex-col items-end justify-center px-8 md:px-24 max-w-7xl mx-auto">
        <div className="max-w-xl backdrop-blur-md bg-white/30 p-10 md:p-14 rounded-3xl border border-white/40 shadow-xl text-right">
          <p className="text-[#1b4332] font-bold uppercase tracking-[0.3em] text-sm mb-4">The Visuals</p>
          <h2 className="text-4xl md:text-6xl font-serif mb-6 text-stone-900 leading-tight">Art in Every Drop</h2>
          <p className="text-lg md:text-xl font-medium leading-relaxed text-stone-800 mb-8">
            Observe the delicate dance of golden brown stems and vibrant matcha. It is more than an infusion; it is a visual masterpiece painted with natural hues.
          </p>
          <Link 
            href="/gallery"
            className="pointer-events-auto inline-block text-sm font-bold uppercase tracking-widest text-[#1b4332] hover:text-[#9c6644] transition-colors duration-300 underline underline-offset-8"
          >
            View Gallery
          </Link>
        </div>
      </section>

      {/* PAGE 4: Contact */}
      <section className="h-screen w-full flex flex-col items-center justify-center px-4 text-center">
        <div className="max-w-2xl backdrop-blur-md bg-white/30 p-12 md:p-16 rounded-3xl border border-white/40 shadow-xl">
          <h2 className="text-5xl md:text-7xl font-serif mb-8 text-stone-900">
            Reach <span className="text-[#b5651d] italic">Out</span>
          </h2>
          <p className="text-lg md:text-xl font-medium mb-10 text-stone-800">
            Ready to experience the zero-gravity collection for yourself? 
          </p>
          <Link 
            href="/contact"
            className="pointer-events-auto px-12 py-5 bg-[#1b4332] hover:bg-[#a8e6cf] hover:text-[#1b4332] text-[#FDFCF8] rounded-full font-semibold text-lg transition-all duration-500 shadow-xl hover:shadow-[#a8e6cf]/50 hover:scale-105 active:scale-95 inline-block"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
