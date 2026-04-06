"use client";

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Experience3D from './Experience3D';

gsap.registerPlugin(ScrollTrigger);

export default function HomeContent({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (containerRef.current) {
      const letters = containerRef.current.querySelectorAll('.liyonta-letter');
      
      if (letters.length > 0) {
        // 1. Entrance Animation
        gsap.fromTo(letters, 
          { y: 100, opacity: 0, z: -200 },
          { 
            y: 0, 
            opacity: 1, 
            z: 0,
            stagger: 0.1, 
            duration: 1.2, 
            ease: "power4.out"
          }
        );

        // 2. Scroll Parallax
        gsap.to(letters, {
          scrollTrigger: {
            trigger: "#hero",
            start: "top top",
            end: "bottom top",
            scrub: 1,
            invalidateOnRefresh: true,
          },
          y: (i) => -150 * (i % 2 === 0 ? 1 : 1.5),
          z: (i) => 300 * (i % 2 === 0 ? 1 : -1),
          opacity: 0,
          stagger: 0.02,
          immediateRender: false, // CRITICAL: Don't capture opacity 0 from entrance
        });
      }
    }
  }, []);

  return (
    <div ref={containerRef} className="relative w-full bg-gradient-to-b from-[#3B6B32] via-[#3B6B32] via-[50%] to-[#FDFCF8] to-[50%] text-[#1B3022] selection:bg-[#6B4423] selection:text-[#FDFCF8] overflow-x-hidden font-sans">
      {/* 3D Core Layer */}
      <Experience3D />
      {children}
    </div>
  );
}
