"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  ShoppingCart,
  Home,
  BookOpen,
  MessageSquare,
  ImageIcon
} from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: 'The Estate', href: '/', icon: <Home size={16} /> },
    { name: 'Our Heritage', href: '/about', icon: <BookOpen size={16} /> },
    { name: 'Visual Harvest', href: '/gallery', icon: <ImageIcon size={16} /> },
    { name: 'Inquiries', href: '/contact', icon: <MessageSquare size={16} /> },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${isScrolled ? 'bg-charcoal/95 backdrop-blur-md shadow-lg py-4' : 'bg-charcoal py-6'
        }`}
    >
      <div className="container mx-auto px-6 h-full flex items-center justify-between max-w-7xl">

        {/* LOGO: Logo Badge (Circle behind letter) */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center">
            <span className="text-charcoal font-serif font-bold text-xl italic">L</span>
          </div>
          <span className="text-cream font-bold tracking-[0.2em] uppercase text-sm group-hover:text-gold transition-colors">
            Liyonta
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[10px] font-bold uppercase tracking-[0.2em] text-cream/70 hover:text-cream transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Global Tools: Cart & Mobile Toggle */}
        <div className="flex items-center space-x-6">

          {/* Cart Icon Border/Details: #F5F0E8 with a #C8A84B notification dot */}
          <button className="relative group p-2 border border-cream/20 rounded-full hover:border-gold transition-colors">
            <ShoppingCart size={18} className="text-cream group-hover:text-gold transition-colors" />
            <span className="absolute top-0 right-0 w-2.5 h-2.5 rounded-full bg-gold border-[2px] border-charcoal translate-x-1/4 -translate-y-1/4" />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-cream"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-charcoal border-t border-cream/10 z-[90] flex flex-col p-6 md:hidden shadow-xl"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-4 text-center font-serif text-2xl text-cream/70 hover:text-gold transition-colors block border-b border-cream/5 last:border-0"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}