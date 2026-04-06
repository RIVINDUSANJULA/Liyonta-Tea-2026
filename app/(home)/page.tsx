import type { Metadata } from "next";
import HeroScene from "@/components/Home/HeroScene";
import HeroUI    from "@/components/Home/HeroUI";

// ── SSR Metadata (benefits SEO — server-rendered, not blocked by JS) ──────────
export const metadata: Metadata = {
  title: "Liyonta Tea | Award-Winning Ceylon Tea from Southern Sri Lanka",
  description:
    "Liyonta Tea produces the finest Orthodox Ceylon tea leaves from the Southern Province of Sri Lanka. Holder of the highest e-auction bid in Sri Lanka Tea Board history.",
  keywords: ["Ceylon tea", "Sri Lanka tea", "orthodox tea", "Liyonta Tea", "Southern Province"],
  openGraph: {
    title: "Liyonta Tea",
    description: "The finest Orthodox Ceylon tea from Southern Sri Lanka.",
    type: "website",
  },
};

/**
 * Home Page — Server Component (no "use client")
 *
 * Architecture:
 * - This file is an SSR React Server Component.
 *   Next.js renders it on the server, sending semantic HTML instantly.
 *   This gives Google/SEO bots full text content to crawl.
 *
 * - HeroScene is a Client Component ("use client") — it bootstraps the
 *   WebGL canvas in the browser only (no server-side Three.js).
 *
 * - HeroUI is a Client Component ("use client") — needed for Framer Motion's
 *   whileInView and useEffect hooks.
 *
 * This pattern is the canonical Next.js App Router pattern:
 *   Server Component renders the shell + metadata
 *   → Client Components hydrate with interactivity
 */
export default function HomePage() {
  return (
    // Dark void background, visible before JS hydrates
    <main
      className="relative w-full min-h-screen overflow-x-hidden bg-[#020602] text-white"
      style={{ fontFamily: "system-ui, sans-serif" }}
    >
      {/* 3D WebGL Canvas — fixed background layer */}
      <HeroScene />

      {/* 2D UI overlay — scrollable on top of the fixed canvas */}
      <HeroUI />
    </main>
  );
}
