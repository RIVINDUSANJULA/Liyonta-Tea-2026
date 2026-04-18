'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Leaf, ShieldCheck, Award, Gem, ArrowRight, X } from 'lucide-react';

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // --- NEW: Lock body scroll when modal is open for a premium feel ---
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  // Image paths pulled directly from your public folder structure
  const galleryImages = [
    '/extra/black-tea.png',
    '/extra/hero.png',
    '/extra/origin-story.png',
    '/gallery/gallery-estate.png'
  ];

  const certImages = [
    '/certification/CEYLONTEA.png',
    '/certification/ISO.png',
    '/certification/OZONE.png',
    '/certification/SGS.png',
    '/certification/SLS.png'
  ];

  return (
    <main className="w-full bg-[#F5F0E8] overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] flex flex-col md:flex-row">
        {/* Left Side: Details & Link to About */}
        <Link
          href="/about"
          className="w-full md:w-1/2 flex flex-col justify-center items-start px-8 md:px-16 lg:px-24 py-20 bg-charcoal text-cream hover:bg-charcoal/95 transition-colors cursor-pointer group"
        >
          <span className="text-gold uppercase tracking-[0.2em] text-xs font-bold mb-6 block">
            Discover Our Roots
          </span>
          <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-tight">
            The Heritage <br />
            <span className="italic text-gold">of Ceylon</span>
          </h1>
          <p className="text-cream/60 max-w-md mb-8 leading-relaxed">
            Every leaf tells a story. Journey through our historic estates and discover the meticulous craft behind the world's finest tea.
          </p>
          <div className="flex items-center gap-4 text-xs uppercase tracking-widest font-bold text-gold group-hover:text-cream transition-colors">
            Read Our Story <ArrowRight size={16} />
          </div>
        </Link>

        {/* Right Side: Image */}
        <div className="w-full md:w-1/2 relative min-h-[50vh] md:min-h-full">
          <div className="absolute inset-0 bg-[#2C2A22]/10 z-10" /> {/* Subtle overlay */}
          <Image
            src="/extra/estate-hero.png"
            alt="Liyonta Tea Estate"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* 2. FEATURES SECTION */}
      <section className="bg-paleBeige border-y border-charcoal/10 py-16">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Leaf, title: "Single Origin", sub: "100% Pure Ceylon" },
              { icon: ShieldCheck, title: "Ethically Sourced", sub: "Direct from farms" },
              { icon: Award, title: "Award Winning", sub: "Global recognition" },
              { icon: Gem, title: "Premium Quality", sub: "Hand-picked leaves" }
            ].map((feature, i) => (
              <div key={i} className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center">
                  <feature.icon className="text-gold" size={28} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-charcoal font-bold text-sm uppercase tracking-widest mb-1">{feature.title}</h4>
                  <p className="text-olive text-sm">{feature.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. GALLERY TEASER SECTION */}
      <section className="py-24 px-6 container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-serif text-charcoal">
              Visual <span className="text-olive italic">Journey</span>
            </h2>
          </div>
          <Link
            href="/gallery"
            className="text-xs uppercase tracking-widest font-bold text-olive border-b border-olive/30 hover:text-charcoal hover:border-charcoal pb-1 transition-colors"
          >
            View Full Gallery
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((src, i) => (
            <div
              key={i}
              onClick={() => setSelectedImage(src)}
              className="aspect-square bg-charcoal border border-charcoal/10 relative overflow-hidden group cursor-pointer"
            >
              <div className="absolute inset-0 bg-[#2C2A22]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 flex items-center justify-center backdrop-blur-[2px]">
                {/* Vintage Plaque Style Button */}
                <div className="border border-gold/50 px-6 py-3 flex flex-col items-center">
                  <span className="text-gold text-[10px] uppercase tracking-[0.3em] font-bold mb-1">Archive</span>
                  <span className="text-cream font-serif italic text-lg tracking-wider">View</span>
                </div>
              </div>
              <Image
                src={src}
                alt={`Liyonta Gallery Image ${i + 1}`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-1000 z-10 sepia-[0.3] grayscale-[0.2]"
              />
            </div>
          ))}
        </div>
      </section>

      {/* 4. CERTIFICATIONS MARQUEE */}
      <section className="py-20 bg-white border-y border-charcoal/10 overflow-hidden relative">
        <div className="text-center mb-10">
          <span className="text-olive uppercase tracking-widest text-xs font-bold">Our Certifications</span>
        </div>

        <style dangerouslySetInnerHTML={{
          __html: `
          @keyframes marquee-rtl { 0% { transform: translateX(0%); } 100% { transform: translateX(-50%); } }
          @keyframes marquee-ltr { 0% { transform: translateX(-50%); } 100% { transform: translateX(0%); } }
          .animate-marquee-rtl { animation: marquee-rtl 35s linear infinite; }
          .animate-marquee-ltr { animation: marquee-ltr 35s linear infinite; }
          .pause-on-hover:hover { animation-play-state: paused; cursor: grab; }
          .pause-on-hover:active { cursor: grabbing; }
        `}} />

        <div className="flex flex-col gap-12">
          {/* Row 1: Right to Left */}
          <div className="flex w-[200%] animate-marquee-rtl pause-on-hover">
            <div className="flex gap-20 px-10 items-center w-1/2 justify-around">
              {certImages.map((src, i) => (
                <div key={i} className="h-20 w-32 relative flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                  <Image src={src} alt="Certification" fill className="object-contain" />
                </div>
              ))}
            </div>
            <div className="flex gap-20 px-10 items-center w-1/2 justify-around">
              {certImages.map((src, i) => (
                <div key={`dup-${i}`} className="h-20 w-32 relative flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                  <Image src={src} alt="Certification" fill className="object-contain" />
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Left to Right */}
          <div className="flex w-[200%] animate-marquee-ltr pause-on-hover">
            <div className="flex gap-20 px-10 items-center w-1/2 justify-around">
              {certImages.reverse().map((src, i) => (
                <div key={i} className="h-20 w-32 relative flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                  <Image src={src} alt="Certification" fill className="object-contain" />
                </div>
              ))}
            </div>
            <div className="flex gap-20 px-10 items-center w-1/2 justify-around">
              {certImages.map((src, i) => (
                <div key={`dup-${i}`} className="h-20 w-32 relative flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                  <Image src={src} alt="Certification" fill className="object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. SIGNATURE BLENDS */}
      <section className="py-24 bg-lightBeige relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="text-olive uppercase tracking-widest text-xs font-bold mb-4 inline-block">The Selection</span>
              <h2 className="text-4xl md:text-5xl font-serif text-charcoal">
                Our Signature <span className="text-olive italic">Blends</span>
              </h2>
            </div>

            <div className="flex gap-2 pb-2">
              {['All', 'Black Tea', 'Green Tea', 'White Tea'].map((cat, i) => (
                <button
                  key={i}
                  className={`px-6 py-2 text-xs font-bold uppercase tracking-widest border transition-colors ${i === 0
                    ? 'border-charcoal bg-charcoal text-cream'
                    : 'border-olive text-olive hover:border-charcoal hover:text-charcoal'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-cardBg group relative bg-white border border-charcoal/5">
                {/* Image Wrapper */}
                <div className="bg-[#F9F7F2] aspect-[4/5] relative overflow-hidden flex items-center justify-center w-full border-b border-charcoal/5">
                  {/* Badge */}
                  {item === 1 && (
                    <div className="absolute top-4 left-4 bg-gold text-charcoal text-[10px] font-bold uppercase tracking-widest px-3 py-1 z-20">
                      New Release
                    </div>
                  )}
                  {item === 2 && (
                    <div className="absolute top-4 left-4 bg-charcoal text-cream text-[10px] font-bold uppercase tracking-widest px-3 py-1 z-20">
                      Bestseller
                    </div>
                  )}

                  {/* Product Image */}
                  <Image
                    src="/gallery/gallery-pouring.jpg"
                    alt={`Premium Blend ${item}`}
                    fill
                    className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-700 z-10"
                  />

                  {/* Quick Add Overlay */}
                  <div className="absolute inset-0 bg-charcoal/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-30">
                    <button className="translate-y-4 group-hover:translate-y-0 transition-all bg-charcoal text-cream px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-gold hover:text-charcoal border border-transparent">
                      Quick Add
                    </button>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-serif text-charcoal">Premium Blend {item}</h3>
                    <span className="text-charcoal font-medium">$24.00</span>
                  </div>
                  <p className="text-olive text-sm mb-4">A delicate composition of young tea shoots, carefully oxidized for a mild, floral cup.</p>
                  <div className="flex gap-2">
                    <span className="text-[10px] uppercase border border-gold text-olive px-2 py-1 tracking-wider font-bold">100g</span>
                    <span className="text-[10px] uppercase border border-gold text-olive px-2 py-1 tracking-wider font-bold">Loose Leaf</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CONTACT US TEASER */}
      <section className="py-24 bg-charcoal text-center px-6">
        <div className="max-w-2xl mx-auto flex flex-col items-center">
          <Leaf className="text-gold mb-6" size={32} strokeWidth={1} />
          <h2 className="text-4xl md:text-5xl font-serif text-cream mb-6">
            Have a Question for Our <span className="text-gold italic">Tea Masters?</span>
          </h2>
          <p className="text-cream/60 mb-10 text-sm">
            Whether you need help selecting the perfect blend or want to learn more about our wholesale opportunities, our team is here to assist you.
          </p>
          <Link
            href="/contact"
            className="bg-gold text-charcoal px-10 py-4 text-xs font-bold uppercase tracking-widest hover:bg-cream transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* --- VINTAGE 1910s LIGHTBOX MODAL --- */}
      {selectedImage && (
        <div
          // --- UPDATED: z-[999] forces the modal to render above your NavBar ---
          className="fixed inset-0 z-[999] flex items-center justify-center bg-[#1E1C15]/95 backdrop-blur-md p-4 sm:p-8 animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          {/* Elegant Close Button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 md:top-10 md:right-10 text-gold hover:text-cream transition-colors z-50 flex flex-col items-center gap-2 group"
          >
            <X size={44} strokeWidth={0.75} />
            <span className="text-[10px] uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-opacity">Close</span>
          </button>

          {/* Vintage Photo Frame */}
          <div
            className="relative w-full max-w-6xl max-h-[90vh] flex flex-col bg-[#F5F0E8] p-4 md:p-8 shadow-2xl animate-in zoom-in-95 duration-500"
            onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside the frame
          >
            {/* Inner frame matting decorations */}
            <div className="absolute inset-3 border border-olive/20 pointer-events-none"></div>
            <div className="absolute inset-4 border border-olive/10 pointer-events-none"></div>

            {/* Image Container */}
            <div className="relative w-full h-[60vh] md:h-[75vh] bg-[#2C2A22]/5">
              <Image
                src={selectedImage}
                alt="Vintage Tea Archive"
                fill
                className="object-contain sepia-[0.3] contrast-[1.1] grayscale-[0.1]"
              />
            </div>

            {/* Vintage Plaque / Caption */}
            <div className="mt-6 flex flex-col items-center justify-center text-center">
              <Leaf className="text-gold/50 mb-3" size={20} strokeWidth={1} />
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
  );
}