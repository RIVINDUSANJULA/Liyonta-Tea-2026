"use client";

import React from "react";

export default function ScrollOverlay() {
  return (
    <div className="w-full text-white font-sans">
      {/* PAGE 1: Hero */}
      <section className="h-screen w-full flex flex-col items-center justify-center px-4 relative">
        <div className="text-center">
          <h1 className="text-6xl md:text-[8rem] font-bold tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 drop-shadow-2xl">
            Fluid Tea
          </h1>
          <h2 className="text-3xl md:text-5xl font-light tracking-widest text-[#a8e6cf] uppercase">Journey</h2>
        </div>
        <div className="absolute bottom-10 animate-bounce text-white/50 text-sm tracking-widest uppercase">
          Scroll to explore
        </div>
      </section>

      {/* PAGE 2: The Origins */}
      <section className="h-screen w-full flex flex-col items-start justify-center px-8 md:px-24 max-w-7xl mx-auto">
        <div className="max-w-xl backdrop-blur-md bg-white/5 p-12 rounded-[2rem] border border-white/10 shadow-2xl">
          <p className="text-[#a8e6cf] uppercase tracking-[0.3em] text-sm mb-4">Chapter I</p>
          <h2 className="text-5xl md:text-7xl font-serif mb-6 text-white leading-tight">The Origins</h2>
          <p className="text-lg md:text-xl font-light leading-relaxed text-slate-300">
            Born from the misty peaks, each leaf carries the whisper of mountain winds. Hand-picked at dawn to capture the absolute highest essence of vitality and purity.
          </p>
        </div>
      </section>

      {/* PAGE 3: The Blends */}
      <section className="h-screen w-full flex flex-col items-end justify-center px-8 md:px-24 max-w-7xl mx-auto">
        <div className="max-w-xl backdrop-blur-md bg-white/5 p-12 rounded-[2rem] border border-white/10 shadow-2xl text-right">
          <p className="text-[#40916c] uppercase tracking-[0.3em] text-sm mb-4">Chapter II</p>
          <h2 className="text-5xl md:text-7xl font-serif mb-6 text-white leading-tight">The Blends</h2>
          <p className="text-lg md:text-xl font-light leading-relaxed text-slate-300">
            Our master blenders craft zero-gravity infusions that defy expectation. From deep, roasted Oolongs to vibrant Matcha, we curate exceptional profiles in every drop.
          </p>
        </div>
      </section>

      {/* PAGE 4: The Experience */}
      <section className="h-screen w-full flex flex-col items-center justify-center px-4 text-center">
        <h2 className="text-6xl md:text-8xl font-serif mb-8 text-white drop-shadow-xl">
          The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a8e6cf] to-[#40916c]">Experience</span>
        </h2>
        <button className="px-12 py-5 bg-gradient-to-r from-[#1b4332] to-[#40916c] hover:from-[#40916c] hover:to-[#a8e6cf] text-white rounded-full font-medium text-lg transition-all duration-500 shadow-2xl hover:shadow-[#a8e6cf]/40 hover:scale-105 active:scale-95">
          Begin Your Ritual
        </button>
      </section>
    </div>
  );
}
