"use client";

import React from "react";
import TeaJourneyCanvas from "@/components/home/TeaJourneyCanvas";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  return (
    // Replaced dark background with the creamy warm bg-[#FDFCF8]
    <main className="w-full h-screen relative overflow-hidden bg-[#FDFCF8]">
      {/* Example usage of the translation hook! */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 z-50 text-[#1B3022] font-serif text-sm tracking-widest uppercase opacity-40 pointer-events-none">
        {t.home.welcome}
      </div>
      <TeaJourneyCanvas />
    </main>
  );
}
