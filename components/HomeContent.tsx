"use client";

import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import Experience3D from './Experience3D';

export default function HomeContent() {
  return (
    <div className="relative w-full">
      {/* 3D Core Interaction Layer */}
      <Experience3D />

      {/* A. Immersive Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center pointer-events-none">
        <div className="container mx-auto px-6 text-center select-none">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="text-8xl md:text-[14rem] font-serif uppercase leading-none tracking-tighter text-cream mix-blend-difference"
          >
            Liyonta
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-4 space-y-4"
          >
            <p className="text-xl md:text-2xl font-light tracking-[0.3em] uppercase text-gold">
              Liquid Gold & Leaf
            </p>
            <p className="max-w-xl mx-auto text-sm md:text-base text-cream/60 leading-relaxed font-sans">
              Award-Winning Craftsmanship from the Southern Province. Experience the ritual of premium Ceylon tea in 3D.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            className="mt-12 pointer-events-auto"
          >
            <button className="px-12 py-4 border border-gold/40 hover:border-gold text-gold text-[10px] font-bold uppercase tracking-[0.4em] transition-all bg-charcoal/40 backdrop-blur-sm">
              Explore Harvest
            </button>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 opacity-40">
          <span className="text-[9px] uppercase tracking-widest">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent" />
        </div>
      </section>

      {/* B. The "Three Pillars" 3D Hover Section */}
      <section className="relative py-32 bg-charcoal">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Signature Black", desc: "Bold, amber excellence from high-elevation estates.", tag: "ORIGIN-01" },
              { title: "Botanical Green", desc: "Pure, mountain-fresh leaves with subtle floral notes.", tag: "WELLNESS-02" },
              { title: "Estate Reserve", desc: "Our hand-selected limited batches for connoisseurs.", tag: "PREMIUM-03" }
            ].map((pillar, idx) => (
              <motion.div
                key={pillar.title}
                whileHover={{ y: -10 }}
                className="relative p-12 border border-white/5 bg-white/[0.02] backdrop-blur-3xl group overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-24 h-[1px] bg-gold/50" />
                <div className="absolute top-0 left-0 w-[1px] h-24 bg-gold/50" />
                
                <span className="text-[9px] font-bold tracking-[0.4em] text-gold/60">{pillar.tag}</span>
                <h3 className="text-3xl font-serif text-cream mt-6 mb-4">{pillar.title}</h3>
                <p className="text-sm text-cream/40 leading-relaxed">{pillar.desc}</p>
                
                <div className="mt-8 pt-8 border-t border-white/5 italic text-[10px] text-cream/30 uppercase tracking-widest">
                  View Detail
                </div>
                
                {/* 3D Depth Card Overlay Effect */}
                <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* C. Liquid Flow Story Section (With 3D Atmosphere) */}
      <section className="relative py-48 bg-[#064E3B]">
        <div className="container mx-auto px-6 max-w-5xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="space-y-12"
          >
            <h2 className="text-4xl md:text-6xl font-serif text-cream leading-tight">
              &ldquo;The leaf is just the beginning. The craft is the soul.&rdquo;
            </h2>
            <div className="w-16 h-[1px] bg-gold mx-auto" />
            <p className="text-lg text-cream/60 leading-loose max-w-2xl mx-auto">
              Our factory in Deniyaya operates at the intersection of generational heritage and modern refinement. We treat every harvest as Liquid Gold.
            </p>
          </motion.div>
        </div>
        
        {/* Animated Refractive Layer Placeholder (Real distortion is in 3D Canvas) */}
        <div className="absolute inset-0 bg-black/20 pointer-events-none" />
      </section>

      {/* D. Award Ribbon 3D Scroll */}
      <section className="relative py-24 bg-charcoal border-y border-white/5 overflow-hidden">
        <div className="flex whitespace-nowrap space-x-12 animate-scroll-text">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex space-x-12 items-center text-[10px] font-bold uppercase tracking-[0.8em] text-gold/30">
              <span>AWARD WINNING FACTORY 2024</span>
              <span>•</span>
              <span>100% SINGLE ORIGIN</span>
              <span>•</span>
              <span>CERTIFIED GRADE 1 EXCELLENCE</span>
              <span>•</span>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Branding Wrapper */}
      <footer className="relative py-24 bg-[#121212] border-t border-white/5">
        <div className="container mx-auto px-6 max-w-7xl text-center md:text-left">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
            <div className="space-y-6">
              <h4 className="font-serif text-2xl text-cream tracking-widest uppercase">Liyonta</h4>
              <p className="text-xs text-cream/40 uppercase tracking-[0.2em] leading-relaxed">
                Southern Province<br />
                Sri Lanka
              </p>
            </div>
            <div className="md:col-span-3 flex flex-col md:flex-row justify-end space-y-8 md:space-y-0 md:space-x-24">
              {[
                { title: "Legacy", links: ["Our Story", "The Estate", "Environment"] },
                { title: "Service", links: ["Shipping", "Wholesale", "Inquiries"] },
                { title: "Journal", links: ["Harvest Notes", "Tea Rituals", "Art of Taste"] }
              ].map((footer) => (
                <div key={footer.title} className="space-y-6">
                  <h5 className="text-[10px] font-bold text-gold uppercase tracking-[0.3em]">{footer.title}</h5>
                  <ul className="space-y-3 text-[9px] text-cream/50 uppercase tracking-[0.2em]">
                    {footer.links.map(l => <li key={l} className="hover:text-gold cursor-pointer transition-colors">{l}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-20 pt-10 border-t border-white/5 text-[8px] uppercase tracking-[0.4em] text-cream/20 italic">
            &copy; 2026 Liyonta Tea. Visual & Spatial Heritage.
          </div>
        </div>
      </footer>
      
      <style jsx global>{`
        @keyframes scroll-text {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-text {
          animation: scroll-text 40s linear infinite;
        }
      `}</style>
    </div>
  );
}
