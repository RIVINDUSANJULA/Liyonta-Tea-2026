"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

// Import dictionaries
import en from "@/dictionaries/en.json";
import si from "@/dictionaries/si.json";

type Language = "on" | "si"; // using "en" actually, let's fix type
type Dictionary = typeof en;

interface LanguageContextType {
  language: "en" | "si";
  toggleLanguage: () => void;
  t: Dictionary;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<"en" | "si">("en");
  const [isMounted, setIsMounted] = useState(false);

  // Load language preference on mount
  useEffect(() => {
    setIsMounted(true);
    const saved = localStorage.getItem("preferred-language");
    if (saved === "en" || saved === "si") {
      setLanguage(saved);
    }
  }, []);

  const toggleLanguage = () => {
    const nextLang = language === "en" ? "si" : "en";
    setLanguage(nextLang);
    localStorage.setItem("preferred-language", nextLang);
  };

  const t = language === "en" ? en : si;

  // Render children immediately but with default "en" dictionary until mounted
  // to prevent hydration mismatches if possible, or just render "en" purely on server
  if (!isMounted) {
    return (
      <LanguageContext.Provider value={{ language: "en", toggleLanguage: () => {}, t: en }}>
        {children}
      </LanguageContext.Provider>
    );
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
