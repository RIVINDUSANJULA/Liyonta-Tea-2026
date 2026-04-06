"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden:  { opacity: 0, y: 40 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

const sellPoints = [
  {
    num: "01",
    title: "The Origin",
    label: "Southern Sri Lanka",
    desc: "Cultivated in the high-altitude Southern Province — a microclimate that compresses unmatched complexity into every leaf.",
  },
  {
    num: "02",
    title: "The Craft",
    label: "Masterfully Rolled",
    desc: "Generational Orthodox rolling techniques, executed with millimetre precision, preserve the cellular structure of each leaf.",
  },
  {
    num: "03",
    title: "The Record",
    label: "Highest e-Auction Bid",
    desc: "Liyonta Tea holds the highest electronic auction bid ever recorded in the Sri Lanka Tea Board history.",
  },
];

/**
 * HeroUI — all 2D overlay content: navbar, hero typography, and scroll-reveal grid.
 * This is a Client Component to support Framer Motion whileInView animations.
 * It sits above the fixed 3D canvas via z-index.
 */
export default function HeroUI() {
  return (
    <div className="relative z-10 w-full pointer-events-none">

      {/* ── Navbar ──────────────────────────────────────────────── */}
      <header className="fixed top-0 left-0 right-0 z-50 pointer-events-auto flex justify-between items-center px-6 md:px-12 py-5 backdrop-blur-xl bg-black/20 border-b border-white/10">
        <div className="font-serif text-xl tracking-[0.25em] text-[#D4AF37] select-none">
          LIYONTA
        </div>
        <nav className="hidden md:flex gap-8 items-center">
          {["Heritage", "Collection", "E-Auction", "Contact"].map((link) => (
            <a
              key={link}
              href="#"
              className="text-[11px] uppercase tracking-widest font-medium text-white/70 hover:text-[#D4AF37] transition-colors duration-300"
            >
              {link}
            </a>
          ))}
        </nav>
        <div className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37]/70 hidden md:block">
          Southern Province · Sri Lanka
        </div>
      </header>

      {/* ── Hero Section Typography ──────────────────────────────── */}
      <section className="relative w-full h-screen flex flex-col justify-end items-start pb-20 px-6 md:px-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0.4}
          className="pointer-events-none"
        >
          <p className="text-[11px] uppercase tracking-[0.4em] text-[#D4AF37] mb-4">
            Award-winning Ceylon Tea
          </p>
          <h1 className="font-serif text-[13vw] md:text-[7vw] leading-[0.9] text-white/95 drop-shadow-2xl">
            LIYONTA
            <br />
            <span className="text-[#D4AF37]">PURE</span>
          </h1>
          <p className="mt-6 max-w-sm text-sm md:text-base text-white/50 font-light leading-relaxed">
            The finest Orthodox tea leaves from the Southern Province of Sri Lanka.
            Hover the artifacts ↗
          </p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
        >
          <span className="text-[9px] uppercase tracking-[0.3em] text-white/30">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-[#D4AF37]/50 to-transparent" />
        </motion.div>
      </section>

      {/* ── Scroll-reveal grid section ──────────────────────────── */}
      <section className="relative pointer-events-auto w-full min-h-screen bg-[#020602]/90 backdrop-blur-sm border-t border-white/10 py-32 px-6 md:px-16">

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          custom={0}
          className="mb-20"
        >
          <h2 className="font-serif text-4xl md:text-6xl text-[#D4AF37] mb-4">
            Where craft meets record.
          </h2>
          <div className="w-20 h-px bg-[#D4AF37]/40" />
        </motion.div>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 border-t border-white/10 pt-12">
          {sellPoints.map((sp, i) => (
            <motion.div
              key={sp.num}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i * 0.2 + 0.1}
              className="space-y-4 group"
            >
              <div className="font-serif text-4xl text-[#D4AF37]/50">{sp.num}</div>
              <h3 className="text-xs uppercase tracking-[0.35em] text-white/40 border-b border-white/10 pb-3">
                {sp.title}
              </h3>
              <p className="text-lg font-serif text-white/90 group-hover:text-[#D4AF37] transition-colors duration-500">
                {sp.label}
              </p>
              <p className="text-sm text-white/50 leading-relaxed font-light">
                {sp.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom attribution */}
        <div className="mt-32 flex justify-between items-end text-[10px] uppercase tracking-[0.3em] text-white/20">
          <span>Liyonta Tea Estate · Est. 2009</span>
          <span>Southern Province · Sri Lanka</span>
        </div>
      </section>

    </div>
  );
}
