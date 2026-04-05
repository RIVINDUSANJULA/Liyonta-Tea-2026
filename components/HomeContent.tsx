"use client";

import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Experience3D from './Experience3D';

const alphabet = "LIYONTA".split("");

export default function HomeContent() {
  const [isHovered, setIsHovered] = useState(false);
  const { scrollYProgress } = useScroll();
  
  // Spatial Typography Z-depth mapping
  const titleOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const titleScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.8]);

  return (
    <div className="relative w-full bg-obsidian selection:bg-gold selection:text-obsidian">
      {/* 3D Visual Experience Layer */}
      <Experience3D />

      {/* A. The "Immersive Arrival" (Hero) */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden pointer-events-none">
        <div className="container mx-auto px-6 text-center select-none z-10">
          <motion.div 
            style={{ opacity: titleOpacity, scale: titleScale }}
            className="flex justify-center flex-wrap gap-2 md:gap-4"
          >
            {alphabet.map((letter, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, z: -100, y: 50 }}
                animate={{ opacity: 1, z: 0, y: 0 }}
                transition={{ 
                  duration: 2, 
                  delay: idx * 0.1, 
                  ease: [0.16, 1, 0.3, 1] 
                }}
                className="text-8xl md:text-[16rem] font-serif uppercase leading-none tracking-[-0.05em] text-[#F1F5F1] mix-blend-difference"
                style={{ 
                  transform: `translateZ(${idx * 20}px)`,
                  textShadow: `0 0 40px rgba(212, 175, 55, 0.2)`
                }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="mt-8 space-y-4"
          >
            <p className="text-sm md:text-lg font-bold tracking-[0.5em] uppercase text-gold">
              Award-Winning Tea from the Southern Province
            </p>
            <div className="w-12 h-[1px] bg-gold/40 mx-auto" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
            className="mt-16 pointer-events-auto"
          >
            <button 
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="group relative px-12 py-4 overflow-hidden border border-gold/30"
            >
              <span className="relative z-10 text-[10px] font-bold uppercase tracking-[0.4em] text-white group-hover:text-obsidian transition-colors duration-500">
                Explore The Estate
              </span>
              <div className="absolute inset-x-0 bottom-0 h-0 group-hover:h-full bg-gold transition-all duration-500 ease-out" />
            </button>
          </motion.div>
        </div>

        {/* Scroll Indicator (Refined) */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-40">
          <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-gold to-transparent" />
        </div>
      </section>

      {/* B. The "3D Product Carousel" (Feature Portal) */}
      <section className="relative h-[200vh] bg-transparent">
        <div className="sticky top-0 h-screen flex items-center justify-center pointer-events-none">
          <div className="container mx-auto px-6 flex flex-col items-center text-center max-w-4xl space-y-12">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ margin: "-10%" }}
              className="space-y-4"
            >
              <p className="text-gold text-[10px] font-bold tracking-[0.4em] uppercase">Visual Harvest</p>
              <h2 className="text-4xl md:text-6xl font-serif text-[#F1F5F1]">The Glass Collection</h2>
            </motion.div>
            
            <p className="text-sm md:text-base text-[#F1F5F1]/40 leading-loose max-w-xl">
              Experience the liquid amber of Liyonta through our spatial product exhibition. Fly through the Obsidian Black, Emerald Green, and Golden Harvest collections.
            </p>
          </div>
        </div>
      </section>

      {/* C. The "Factory Pulse" (Story Section) */}
      <section className="relative py-48 overflow-hidden">
        {/* Background "Liquid Mesh" simulation anchor */}
        <div className="absolute inset-0 z-0 bg-emerald/10 opacity-30 blur-3xl pointer-events-none" />
        
        <div className="container mx-auto px-6 max-w-5xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-16"
          >
            <div className="flex justify-center items-center gap-8 text-gold/30">
              <div className="w-24 h-[1px] bg-current" />
              <div className="italic font-serif">Provenance</div>
              <div className="w-24 h-[1px] bg-current" />
            </div>

            <h2 className="text-5xl md:text-7xl font-serif text-[#F1F5F1] leading-tight">
              A Pulse from the Southern Province
            </h2>
            
            <p className="text-lg md:text-xl text-[#F1F5F1]/60 leading-relaxed font-light max-w-3xl mx-auto">
              Our factory operates not just with clockwork, but with a pulse. Every harvest is an award-winning performance, refined through generations of Sri Lankan craftsmanship.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12">
              {[
                { label: "elevation", value: "850M" },
                { label: "artisan count", value: "120+" },
                { label: "grade output", value: "Q-01" }
              ].map((stat, i) => (
                <div key={i} className="space-y-2 border-l border-gold/10 pl-6 text-left">
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold/50">{stat.label}</p>
                  <p className="text-3xl font-serif text-white">{stat.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Exhibition Wrapper */}
      <footer className="relative py-32 bg-[#080A08] border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
            <div className="space-y-8">
              <div className="text-3xl font-serif tracking-widest text-[#F1F5F1]">LIYONTA</div>
              <p className="text-sm text-[#F1F5F1]/30 leading-relaxed uppercase tracking-[0.1em]">
                Liquid Gold Estate<br />
                Southern Hills Corridor<br />
                Sri Lanka
              </p>
            </div>
            {/* Navigation Lists */}
            {[
              { title: "Legacy", links: ["Our Story", "Environment", "Heritage"] },
              { title: "Museum", links: ["Visual Harvest", "Liquid 3D", "The Pour"] },
              { title: "The Circle", links: ["Wholesale", "Inquiries", "Press"] }
            ].map((col, i) => (
              <div key={i} className="space-y-8">
                <h5 className="text-[10px] font-bold text-gold uppercase tracking-[0.5em]">{col.title}</h5>
                <ul className="space-y-4 text-xs text-[#F1F5F1]/50 uppercase tracking-[0.2em]">
                  {col.links.map(l => <li key={l} className="hover:text-gold transition-colors cursor-pointer">{l}</li>)}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-[9px] uppercase tracking-[0.6em] text-white/20 italic">
              Experience Crafted in Sri Lanka // 2026
            </div>
            <div className="flex gap-12 text-[9px] uppercase tracking-[0.3em] text-gold/40 font-bold">
              <a href="#">Instagram</a>
              <a href="#">LinkedIn</a>
              <a href="#">Journal</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Animation Styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        body { background: #080A08; }
        ::selection { background: #D4AF37; color: #080A08; }
      ` }} />
    </div>
  );
}
