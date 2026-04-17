"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="flex flex-col min-h-screen bg-cream text-charcoal pt-20 lg:pt-24">
      <main className="flex-grow">
        {/* A. The "Lens on Liyonta" Hero */}
        <section className="py-24 lg:py-32 border-b border-charcoal/10">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="max-w-3xl space-y-8">
              <div className="inline-block border-l-4 border-gold pl-6">
                <h1 className="font-serif text-5xl md:text-7xl text-charcoal leading-tight mb-4">
                  The Art of the Harvest
                </h1>
                <p className="text-lg md:text-xl text-olive leading-relaxed max-w-2xl">
                  A visual journey through our award-winning factory and the lush landscapes of the Southern Province. Witness the craftsmanship behind every leaf.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* B. The "Bento" Narrative Grid */}
        <section id="gallery-grid" className="py-24 bg-cardBg">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-6 gap-8 auto-rows-[300px] md:auto-rows-[250px]">
              {/* Image 1: The Estate (Large Landscape) */}
              <div 
                className="md:col-span-4 md:row-span-2 relative border border-charcoal/10 overflow-hidden group cursor-pointer"
                onClick={() => setSelectedImage("/gallery/gallery-estate.png")}
              >
                <div className="absolute inset-0 bg-[#2C2A22]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center">
                  <span className="border border-gold text-gold font-serif italic px-6 py-2">View Full</span>
                </div>
                <Image
                  src="/gallery/gallery-estate.png"
                  alt="Liyonta Tea Estate in Southern Sri Lanka"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105 z-10 sepia-[0.1]"
                />
                <div className="absolute bottom-4 left-4 bg-cardBg/90 backdrop-blur px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.2em] text-charcoal z-30">
                  01 // THE ESTATE
                </div>
              </div>

              {/* Image 2: The Pluckers (Square) */}
              <div 
                className="md:col-span-2 md:row-span-2 relative border border-charcoal/10 overflow-hidden group cursor-pointer"
                onClick={() => setSelectedImage("/gallery/gallery-plucking.png")}
              >
                <div className="absolute inset-0 bg-[#2C2A22]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center">
                  <span className="border border-gold text-gold font-serif italic px-6 py-2">View Full</span>
                </div>
                <Image
                  src="/gallery/gallery-plucking.png"
                  alt="Two leaves and a bud technique"
                  fill
                  className="object-cover z-10 sepia-[0.1]"
                />
                <div className="absolute bottom-4 left-4 bg-cardBg/90 backdrop-blur px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.2em] text-charcoal z-30">
                  02 // THE PLUCKERS
                </div>
              </div>

              {/* Image 3: The Factory (Tall) */}
              <div 
                className="md:col-span-2 md:row-span-2 relative border border-charcoal/10 overflow-hidden group cursor-pointer"
                onClick={() => setSelectedImage("/gallery/about-factory.png")}
              >
                <div className="absolute inset-0 bg-[#2C2A22]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center">
                  <span className="border border-gold text-gold font-serif italic px-6 py-2">View Full</span>
                </div>
                <Image
                  src="/gallery/about-factory.png"
                  alt="Traditional rolling machines at Liyonta Factory"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105 z-10 sepia-[0.1]"
                />
                <div className="absolute bottom-4 left-4 bg-cardBg/90 backdrop-blur px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.2em] text-charcoal z-30">
                  03 // THE FACTORY
                </div>
              </div>

              {/* Image 4: The Pour (Wide) */}
              <div 
                className="md:col-span-4 md:row-span-2 relative border border-charcoal/10 overflow-hidden group cursor-pointer"
                onClick={() => setSelectedImage("/gallery/gallery-pouring.png")}
              >
                <div className="absolute inset-0 bg-[#2C2A22]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center">
                  <span className="border border-gold text-gold font-serif italic px-6 py-2">View Full</span>
                </div>
                <Image
                  src="/gallery/gallery-pouring.png"
                  alt="Golden Ceylon tea pour"
                  fill
                  className="object-cover z-10 sepia-[0.1]"
                />
                <div className="absolute bottom-4 left-4 bg-cardBg/90 backdrop-blur px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.2em] text-charcoal z-30">
                  04 // THE POUR
                </div>
              </div>

              {/* Image 5: The Sorting (Small) */}
              <div 
                className="md:col-span-6 md:row-span-1 relative border border-charcoal/10 overflow-hidden group cursor-pointer"
                onClick={() => setSelectedImage("/gallery/gallery-plucking.png")}
              >
                <div className="absolute inset-0 bg-[#2C2A22]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center">
                  <span className="border border-gold text-gold font-serif italic px-6 py-2">View Full</span>
                </div>
                <Image
                  src="/gallery/gallery-plucking.png"
                  alt="Expert careful plucking of two leaves and a bud"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105 z-10 sepia-[0.1]"
                />
                <div className="absolute bottom-4 left-4 bg-cardBg/90 backdrop-blur px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.2em] text-charcoal z-30">
                  05 // THE SORTING
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* C. "The Process" Visual Timeline */}
        <section className="py-24 bg-cream border-y border-charcoal/10">
          <div className="container mx-auto px-6 max-w-7xl">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-olive mb-12 block border-l-4 border-gold pl-6">
              Visual Transformation
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { title: "Plucking", icon: "M12 2L2 7l10 5 10-5-10-5zm0 10l-10-5v10l10 5 10-5V7l-10 5z" },
                { title: "Withering", icon: "M12 1v22M1 12h22M12 1l11 11-11 11L1 12z" },
                { title: "Oxidation", icon: "M12 2v20a10 10 0 1 0 0-20z" },
                { title: "Tasting", icon: "M12 3v18M3 12h18" }
              ].map((step, idx) => (
                <div key={idx} className="aspect-square border border-charcoal/10 flex flex-col items-center justify-center space-y-6 bg-cardBg p-8">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold opacity-60">
                    <path d={step.icon} />
                  </svg>
                  <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-charcoal">{step.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* D. The "Factory Accolades" Mosaic */}
        <section className="py-24 bg-cardBg">
          <div className="container mx-auto px-6 max-w-7xl text-center md:text-left">
            <h2 className="text-3xl font-serif text-charcoal mb-12 border-l-4 border-gold pl-6 text-left">
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
                  className="w-full sm:w-[45%] lg:w-1/5 p-6 md:p-10 border border-charcoal/10 bg-lightBeige flex items-center justify-center text-center"
                >
                  <img
                    src={badge.src}
                    alt={badge.alt}
                    className="h-16 md:h-20 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* E. "Atmosphere" Full-Width Break */}
        <section className="py-32 bg-charcoal overflow-hidden relative border-t border-gold/20">
          <div className="container mx-auto px-6 max-w-5xl text-center relative z-10">
            <blockquote className="font-serif text-3xl md:text-5xl text-cream leading-tight mb-8 drop-shadow-sm italic">
              We are committed to delivering excellence in every product, with trusted certifications that ensure quality and reliability.
            </blockquote>
          </div>
        </section>

        {/* --- VINTAGE LIGHTBOX MODAL --- */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-[999] flex items-center justify-center bg-[#1E1C15]/95 backdrop-blur-md p-4 sm:p-8 animate-in fade-in duration-300"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 md:top-10 md:right-10 text-gold hover:text-cream transition-colors z-50 flex flex-col items-center gap-2 group"
            >
              <X size={44} strokeWidth={0.75} />
              <span className="text-[10px] uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-opacity">Close</span>
            </button>
            <div
              className="relative w-full max-w-6xl max-h-[90vh] flex flex-col bg-[#F5F0E8] p-4 md:p-8 shadow-2xl animate-in zoom-in-95 duration-500"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute inset-3 border border-olive/20 pointer-events-none"></div>
              <div className="absolute inset-4 border border-olive/10 pointer-events-none"></div>
              <div className="relative w-full h-[60vh] md:h-[75vh] bg-[#2C2A22]/5">
                <Image
                  src={selectedImage}
                  alt="Vintage Tea Archive"
                  fill
                  className="object-contain sepia-[0.3] contrast-[1.1] grayscale-[0.1]"
                />
              </div>
              <div className="mt-6 flex flex-col items-center justify-center text-center">
                <p className="font-serif italic text-charcoal/80 text-xl md:text-2xl">
                  Historical Archives
                </p>
                <p className="text-olive text-xs uppercase tracking-[0.2em] mt-2">
                  Liyonta Estate
                </p>
              </div>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}
