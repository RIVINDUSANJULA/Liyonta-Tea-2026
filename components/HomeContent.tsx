"use client";

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Experience3D from './Experience3D';

gsap.registerPlugin(ScrollTrigger);

export default function HomeContent() {
  const heroTextRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Kinetic Typography Parallax
    if (heroTextRef.current) {
      const letters = heroTextRef.current.children;
      gsap.fromTo(letters, 
        { y: 100, opacity: 0, z: -200 },
        { 
          y: 0, 
          opacity: 1, 
          z: 0,
          stagger: 0.1, 
          duration: 1.5, 
          ease: "power4.out" 
        }
      );

      gsap.to(letters, {
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: 1
        },
        y: (i) => -100 * (i % 2 === 0 ? 1 : 1.5),
        z: (i) => 200 * (i % 2 === 0 ? 1 : -1),
        opacity: 0,
        stagger: 0.05
      });
    }
  }, []);

  return (
    <div className="relative w-full bg-gradient-to-b from-[#050805] via-[#0A1A0F] to-[#050805] text-[#F8FAF8] selection:bg-[#A3E635] selection:text-obsidian overflow-x-hidden font-sans">
      {/* 3D Core Layer */}
      <Experience3D />

      {/* A. Weightless Arrival */}
      <section id="hero" className="relative h-screen flex flex-col items-center justify-center pointer-events-none perspective-[1000px]">
        <div className="container mx-auto px-6 text-center z-10">
          <div ref={heroTextRef} className="flex justify-center transform-style-3d">
            {"LIYONTA".split("").map((letter, idx) => (
              <span
                key={idx}
                className="text-[12vw] md:text-[15rem] font-serif uppercase leading-none text-transparent transform origin-center font-outline-2 drop-shadow-2xl"
                style={{ WebkitTextStroke: '2px #F8FAF8' }}
              >
                {letter}
              </span>
            ))}
          </div>
          
          <div className="mt-8 space-y-4 max-w-2xl mx-auto opacity-80 backdrop-blur-md bg-white/5 p-6 rounded-full border border-[#A3E635]/30 transform translate-y-12 shadow-[0_0_30px_rgba(163,230,53,0.15)]">
            <p className="text-xs md:text-sm font-bold tracking-[0.4em] uppercase text-[#A3E635]">
              Zero-G Heritage • Southern Province
            </p>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-50">
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#A3E635]">Descend</span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-[#A3E635] via-gold to-transparent" />
        </div>
      </section>

      {/* B. Alchemy of the Southern Province */}
      <section id="alchemy-trigger" className="relative min-h-[150vh] flex items-center justify-center pointer-events-none">
        <div className="container mx-auto px-6 z-10 w-full pointer-events-auto">
          <div className="max-w-4xl max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { id: "01", name: "OBSIDIAN BLACK", desc: "Weightless dark notes forged in high altitude." },
              { id: "02", name: "LIQUID GREEN", desc: "Verdant zero-gravity leaves steeped in mist." },
              { id: "03", name: "GOLDEN BAGS", desc: "Suspended perfection in every silken pyramid." }
            ].map((prod) => (
              <div 
                key={prod.id}
                className="relative group p-10 h-80 flex flex-col justify-between backdrop-blur-xl bg-white/5 border border-[#A3E635]/10 overflow-hidden transform transition-all duration-700 hover:-translate-y-4 hover:bg-white/10 hover:border-[#A3E635]/50 hover:shadow-[0_0_40px_rgba(163,230,53,0.2)]"
              >
                {/* Glassmorphism Inner Shine */}
                <div className="absolute -inset-1 bg-gradient-to-b from-[#A3E635]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-xl" />
                
                <span className="text-[10px] font-bold tracking-[0.5em] text-[#A3E635] group-hover:drop-shadow-[0_0_8px_rgba(163,230,53,0.8)] transition-all">{prod.id} // ALCHEMY</span>
                
                <div>
                  <h3 className="text-2xl font-serif text-[#F8FAF8] mb-2">{prod.name}</h3>
                  <p className="text-xs text-[#F8FAF8]/50 tracking-widest uppercase leading-loose">{prod.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* C. The Dissolve to Gold (Story) */}
      <section className="relative min-h-screen py-48 pointer-events-none flex items-center">
        <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl pointer-events-auto">
          <h2 className="text-5xl md:text-7xl font-serif leading-tight mb-8 drop-shadow-2xl">
            Where gravity ends, <span className="italic text-[#4ADE80] drop-shadow-[0_0_15px_rgba(74,222,128,0.4)]">alchemy begins.</span>
          </h2>
          <p className="text-lg md:text-xl text-[#F8FAF8]/60 leading-relaxed font-light mx-auto">
            Experience Liyonta Tea not just as a beverage, but as a physical phenomenon. Our award-winning factory in the Southern Province uses generational technique to distill the essence of the leaf into liquid gold.
          </p>
          
          <div className="mt-20 inline-block p-[1px] bg-gradient-to-r from-transparent via-[#A3E635] to-transparent">
             <button className="px-12 py-5 bg-[#020402] text-[10px] uppercase tracking-[0.4em] font-bold text-[#A3E635] hover:bg-[#A3E635] hover:text-obsidian hover:shadow-[0_0_30px_rgba(163,230,53,0.5)] transition-all duration-500">
               Enter The Portal
             </button>
          </div>
        </div>
      </section>

      <footer className="relative z-10 bg-[#020402] border-t border-white/10 py-12">
        <div className="container mx-auto px-6 text-center">
           <div className="text-[10px] uppercase tracking-[0.5em] text-[#F8FAF8]/30">Liyonta Phygital Experience • 2026</div>
        </div>
      </footer>
    </div>
  );
}
