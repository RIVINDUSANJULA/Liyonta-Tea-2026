"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { X, Menu, ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const navHeight = useTransform(scrollYProgress, [0, 0.05], ["6rem", "4.5rem"]);

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
        ? 'bg-[#2C2A22]/90 backdrop-blur-xl shadow-sm'
        : 'bg-[#2C2A22]/70 backdrop-blur-md'
        }`}
    >
      {/* Scroll Progress Border */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#C8A84B]/30 origin-left"
      />

      <div className="container mx-auto px-8 h-full flex items-center justify-between max-w-7xl relative">

        {/* 1. LOGO (LEFT) */}
        <Link href="/" className="flex-shrink-0 group">
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            <Image
              src="/logo.png"
              alt="Liyonta Tea Logo"
              width={50}
              height={50}
              className="object-contain brightness-110"
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
              className="text-[11px] font-sans uppercase tracking-[0.3em] text-[#F5F0E8]/60 hover:text-[#C8A84B] transition-all duration-500"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* 3. SHOP & TOOLS (RIGHT) */}
        <div className="flex items-center space-x-8">
          {/* Cart Icon Tool */}
          <button className="text-[#F5F0E8]/80 hover:text-[#C8A84B] transition-colors">
            <ShoppingBag size={20} strokeWidth={1.5} />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-[#F5F0E8]"
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
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
            className="fixed inset-0 bg-[#1E1C15] z-[90] flex flex-col justify-center items-center space-y-10 p-12 lg:hidden"
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
                  className="font-serif text-4xl text-[#F5F0E8] hover:text-[#C8A84B] italic transition-colors"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}

            <Link href="/shop" onClick={() => setIsMobileMenuOpen(false)} className="w-full max-w-xs">
              <button className="bg-[#C8A84B] text-[#2C2A22] w-full py-4 rounded-full text-xs font-bold uppercase tracking-widest">
                Shop Collection
              </button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}