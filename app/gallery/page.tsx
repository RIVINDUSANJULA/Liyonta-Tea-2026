"use client";

import React from 'react';
import Image from 'next/image';

export default function GalleryPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FDFCF8] text-[#1B3022] pt-20 lg:pt-24">
      <main className="flex-grow">
        {/* A. The "Lens on Liyonta" Hero */}
        <section className="py-24 lg:py-32 border-b border-slate-100">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="max-w-3xl space-y-8">
              <div className="inline-block border-l-4 border-green-600 pl-6">
                <h1 className="font-serif text-5xl md:text-7xl text-[#1B3022] leading-tight mb-4">
                  The Art of the Harvest
                </h1>
                <p className="text-lg md:text-xl text-[#333333]/80 leading-relaxed max-w-2xl">
                  A visual journey through our award-winning factory and the lush landscapes of the Southern Province. Witness the craftsmanship behind every leaf.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* B. The "Bento" Narrative Grid */}
        <section id="gallery-grid" className="py-24 bg-white">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-6 gap-8 auto-rows-[300px] md:auto-rows-[250px]">
              {/* Image 1: The Estate (Large Landscape) */}
              <div className="md:col-span-4 md:row-span-2 relative border border-slate-200 overflow-hidden group">
                <Image
                  src="/gallery/gallery-estate.png"
                  alt="Liyonta Tea Estate in Southern Sri Lanka"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.2em] text-[#1B3022]">
                  01 // THE ESTATE
                </div>
              </div>

              {/* Image 2: The Pluckers (Square) */}
              <div className="md:col-span-2 md:row-span-2 relative border border-slate-200 overflow-hidden group">
                <Image
                  src="/gallery/gallery-plucking.png"
                  alt="Two leaves and a bud technique"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.2em] text-[#1B3022]">
                  02 // THE PLUCKERS
                </div>
              </div>

              {/* Image 3: The Factory (Tall) */}
              <div className="md:col-span-2 md:row-span-2 relative border border-slate-200 overflow-hidden group">
                <Image
                  src="/gallery/about-factory.png"
                  alt="Traditional rolling machines at Liyonta Factory"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.2em] text-[#1B3022]">
                  03 // THE FACTORY
                </div>
              </div>

              {/* Image 4: The Pour (Wide) */}
              <div className="md:col-span-4 md:row-span-2 relative border border-slate-200 overflow-hidden group">
                <Image
                  src="/gallery/gallery-pouring.png"
                  alt="Golden Ceylon tea pour"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.2em] text-[#1B3022]">
                  04 // THE POUR
                </div>
              </div>

              {/* Image 5: The Sorting (Small) */}
              <div className="md:col-span-6 md:row-span-1 relative border border-slate-200 overflow-hidden group">
                <Image
                  src="/gallery/gallery-plucking.png"
                  alt="Expert careful plucking of two leaves and a bud"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.2em] text-[#1B3022]">
                  05 // THE SORTING
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* C. "The Process" Visual Timeline */}
        <section className="py-24 bg-[#FDFCF8] border-y border-slate-100">
          <div className="container mx-auto px-6 max-w-7xl">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400 mb-12 block border-l-4 border-green-600 pl-6">
              Visual Transformation
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { title: "Plucking", icon: "M12 2L2 7l10 5 10-5-10-5zm0 10l-10-5v10l10 5 10-5V7l-10 5z" },
                { title: "Withering", icon: "M12 1v22M1 12h22M12 1l11 11-11 11L1 12z" },
                { title: "Oxidation", icon: "M12 2v20a10 10 0 1 0 0-20z" },
                { title: "Tasting", icon: "M12 3v18M3 12h18" }
              ].map((step, idx) => (
                <div key={idx} className="aspect-square border border-slate-200 flex flex-col items-center justify-center space-y-6 bg-white p-8">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-green-600 opacity-60">
                    <path d={step.icon} />
                  </svg>
                  <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-[#1B3022]">{step.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* D. The "Factory Accolades" Mosaic */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 max-w-7xl text-center md:text-left">
            <h2 className="text-3xl font-serif text-[#1B3022] mb-12 border-l-4 border-green-600 pl-6">
              Our Award-Winning Environment
            </h2>
            <div className="flex flex-wrap lg:flex-nowrap justify-center items-center gap-4 md:gap-8">
              {[
                { src: "/certification/CEYLONTEA.png", alt: "Ceylon Tea" },
                { src: "/certification/ISO.png", alt: "ISO Certified" },
                { src: "/certification/OZONE.png", alt: "OZONE" },
                { src: "/certification/SGS.png", alt: "SGS" },
                { src: "/certification/SLS.png", alt: "SLS" }
              ].map((badge, idx) => (
                <div
                  key={idx}
                  // Added w-full lg:w-1/5 to ensure they share space equally on desktop
                  className="w-full sm:w-[45%] lg:w-1/5 p-6 md:p-10 border border-slate-100 bg-[#FBFBFB] flex items-center justify-center text-center"
                >
                  {/* The Image */}
                  <img
                    src={badge.src}
                    alt={badge.alt}
                    className="h-16 md:h-20 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* E. "Atmosphere" Full-Width Break */}
        <section className="py-32 bg-green-900 overflow-hidden relative">
          <div className="container mx-auto px-6 max-w-5xl text-center relative z-10">
            <blockquote className="font-serif text-3xl md:text-5xl text-white leading-tight mb-8 drop-shadow-sm italic">
              We are committed to delivering excellence in every product, with trusted certifications that ensure quality and reliability.
            </blockquote>
          </div>
          {/* Subtle texture overlay placeholder if needed */}
          <div className="absolute inset-0 bg-[#000]/10 pointer-events-none"></div>
        </section>
      </main>
    </div>
  );
}
