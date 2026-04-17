"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import {
  Home,
  BookOpen,
  Image as ImageIcon,
  MessageSquare,
  Globe,
  X,
  Menu
} from 'lucide-react';
import Link from 'next/link';
import Image from "next/image";

export default function Navbar() {
  // UI States
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageSi, setIsLanguageSi] = useState(false);

  // Factory Status States
  const [isFactoryOpen, setIsFactoryOpen] = useState(true);
  const [isLoadingStatus, setIsLoadingStatus] = useState(true);

  // Scroll Animations
  const { scrollYProgress } = useScroll();
  const borderDraw = useTransform(scrollYProgress, [0, 0.05], [0, 1]);
  const navHeight = useTransform(scrollYProgress, [0, 0.05], ["5rem", "4rem"]);

  useEffect(() => {
    // 1. Scroll Listener
    const checkScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', checkScroll);

    // 2. Fetch Real-time Factory Status from Google Maps API
    const fetchPlaceStatus = async () => {
      try {
        const response = await fetch('/api/factory-status');
        const data = await response.json();

        // CORRECTED: Google nests this inside 'opening_hours'
        if (data.result && data.result.opening_hours && typeof data.result.opening_hours.open_now !== 'undefined') {
          setIsFactoryOpen(data.result.opening_hours.open_now);
        } else {
          throw new Error("API didn't return valid status data.");
        }
      } catch (error) {
        // FALLBACK: Simple "Factory Open" check based on SL Time (GMT+5:30)
        console.warn("Using local time fallback for factory status.");
        const slTime = new Date(new Date().getTime() + (5.5 * 60 * 60 * 1000));
        const hours = slTime.getUTCHours();
        const isWorkingHours = hours >= 8 && hours < 18;
        setIsFactoryOpen(isWorkingHours);
      } finally {
        setIsLoadingStatus(false);
      }
    };

    fetchPlaceStatus();

    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const navLinks = [
    { name: 'The Estate', href: '/', icon: <Home size={16} /> },
    { name: 'Our Heritage', href: '/about', icon: <BookOpen size={16} /> },
    { name: 'Visual Harvest', href: '/gallery', icon: <ImageIcon size={16} /> },
    { name: 'Inquiries', href: '/contact', icon: <MessageSquare size={16} /> },
  ];

  // Animation Variants
  const leafVariants = {
    initial: { x: -10, opacity: 0, rotate: -20 },
    hover: { x: 0, opacity: 1, rotate: 0 }
  };

  return (
    <motion.nav
      style={{ height: navHeight }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${isScrolled
          ? 'bg-[#2C2A22]/95 backdrop-blur-lg shadow-md'
          : 'bg-[#2C2A22]/80 backdrop-blur-md'
        }`}
    >
      {/* Golden Border Progress */}
      <motion.div
        style={{ scaleX: borderDraw }}
        className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#C8A84B] origin-left"
      />

      <div className="container mx-auto px-6 h-full flex items-center justify-between max-w-7xl relative">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 group">
          <motion.div whileHover={{ rotate: 5 }}>
            {/* Note: Ensure logo.png is readable against the dark #2C2A22 background */}
            <Image
              src="/logo.png"
              alt="Liyonta Tea Logo"
              width={48}
              height={48}
              className="object-contain"
              priority
            />
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group py-2">
              <Link
                href={link.href}
                className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#F5F0E8]/70 hover:text-[#F5F0E8] transition-colors relative"
              >
                <div className="flex items-center">
                  <motion.span
                    variants={leafVariants}
                    initial="initial"
                    whileHover="hover"
                    className="absolute -left-6 text-[#C8A84B]"
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C7 2 2 7 2 12C2 17 7 22 17 22C17 22 22 17 22 12C22 7 17 2 12 2Z" />
                    </svg>
                  </motion.span>
                  {link.name}
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Global Tools */}
        <div className="flex items-center space-x-6">

          {/* Status Tag (API/Time Based) */}
          <div className="hidden sm:flex items-center space-x-2">
            <motion.div
              animate={!isLoadingStatus ? { opacity: [0.4, 1, 0.4] } : {}}
              transition={{ repeat: Infinity, duration: 2 }}
              className={`w-1.5 h-1.5 rounded-full ${isLoadingStatus ? 'bg-[#F5F0E8]/30' : (isFactoryOpen ? 'bg-green-500' : 'bg-red-400')
                }`}
            />
            <span className="text-[8px] font-bold uppercase tracking-[0.1em] text-[#F5F0E8]/50 min-w-[85px]">
              {isLoadingStatus ? 'Checking...' : (isFactoryOpen ? 'Factory Open' : 'Estate Closed')}
            </span>
          </div>

          {/* Language */}
          <button
            onClick={() => setIsLanguageSi(!isLanguageSi)}
            className="hidden md:flex items-center space-x-1 text-[9px] font-bold text-[#F5F0E8]/50 hover:text-[#C8A84B] transition-colors"
          >
            <Globe size={14} />
            <span>{isLanguageSi ? 'SI' : 'EN'}</span>
          </button>

          {/* CTA: Shop Now */}
          <motion.button
            whileHover={{ y: -2 }}
            className="hidden md:flex relative group overflow-hidden bg-[#C8A84B] text-[#2C2A22] px-6 py-2.5 text-[9px] font-bold uppercase tracking-widest"
          >
            <span className="relative z-10 transition-colors duration-300">Shop Now</span>
            <motion.div
              initial={{ y: "100%" }}
              whileHover={{ y: 0 }}
              transition={{ type: "tween", ease: "easeInOut", duration: 0.4 }}
              className="absolute inset-0 bg-[#D4B865]" // Lighter Gold hover state
            />
          </motion.button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-[#F5F0E8] hover:text-[#C8A84B] transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-[#1E1C15] z-[90] flex flex-col justify-center items-center space-y-8 p-12 lg:hidden"
          >
            {navLinks.map((link, idx) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * idx }}
              >
                <Link
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-serif text-3xl text-[#F5F0E8] hover:text-[#C8A84B] transition-colors flex items-center space-x-4"
                >
                  <span className="opacity-40">{link.icon}</span>
                  <span>{link.name}</span>
                </Link>
              </motion.div>
            ))}

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-8 bg-[#C8A84B] text-[#2C2A22] hover:bg-[#D4B865] transition-colors w-full py-4 text-xs font-bold uppercase tracking-[0.2em]"
            >
              Shop Collection
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}