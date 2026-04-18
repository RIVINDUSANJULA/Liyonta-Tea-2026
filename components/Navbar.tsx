"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { X, Menu, ShoppingBag, Search } from 'lucide-react';
import Link from 'next/link';
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  // Slightly taller nav to breathe, shrinking on scroll
  const navHeight = useTransform(scrollYProgress, [0, 0.05], ["6.5rem", "4.5rem"]);

  useEffect(() => {
    const checkScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const navLinks = [
    { name: 'The Estate', href: '/' },
    { name: 'Our Heritage', href: '/about' },
    { name: 'Visual Harvest', href: '/collections' },
    { name: 'Inquiries', href: '/contact' },
  ];

  return (
    <motion.nav
      style={{ height: navHeight }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled
          ? 'bg-[#FCF9F0]/90 backdrop-blur-xl shadow-[0_4px_20px_rgba(28,28,23,0.03)] border-b border-[#C7C7BC]/20'
          : 'bg-[#FCF9F0]/60 backdrop-blur-md'
        }`}
    >
      {/* Scroll Progress Border (Subtle Green) */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#516445]/20 origin-left"
      />

      <div className="container mx-auto px-6 md:px-8 h-full flex items-center justify-between max-w-[1920px] relative">

        {/* 1. LOGO (LEFT) */}
        <Link href="/" className="flex-shrink-0 group">
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            <Image
              src="/logo.png"
              alt="Liyonta Tea Logo"
              width={50}
              height={50}
              className="object-contain"
              priority
            />
          </motion.div>
        </Link>

        {/* 2. NAVIGATION LINKS (CENTER) */}
        <nav className="hidden lg:flex items-center space-x-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[11px] font-sans font-medium uppercase tracking-[0.3em] text-[#46483F] hover:text-[#516445] transition-all duration-500"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* 3. TOOLS (RIGHT) */}
        <div className="flex items-center space-x-6 md:space-x-8">
          <button className="hidden sm:block text-[#1C1C17] hover:text-[#516445] transition-colors">
            <Search size={20} strokeWidth={1.5} />
          </button>
          <button className="text-[#1C1C17] hover:text-[#516445] transition-colors">
            <ShoppingBag size={20} strokeWidth={1.5} />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-[#1C1C17] hover:text-[#516445] transition-colors"
          >
            {isMobileMenuOpen ? <X size={26} strokeWidth={1.5} /> : <Menu size={26} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-[#FCF9F0]/95 backdrop-blur-2xl z-[90] flex flex-col justify-center items-center space-y-10 p-12 lg:hidden"
          >
            {navLinks.map((link, idx) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-serif text-4xl text-[#1C1C17] hover:text-[#516445] italic transition-colors"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}

            <Link href="/shop" onClick={() => setIsMobileMenuOpen(false)} className="w-full max-w-xs mt-8">
              <button className="bg-gradient-to-br from-[#516445] to-[#869A77] text-white w-full py-4 rounded-full text-xs font-bold uppercase tracking-widest shadow-[0_10px_20px_rgba(81,100,69,0.2)] hover:opacity-90 transition-opacity">
                Shop Collection
              </button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}