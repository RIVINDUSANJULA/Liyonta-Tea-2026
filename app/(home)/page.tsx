import React from "react";
import TeaGardenCanvas from "@/components/home/TeaGardenCanvas"; // Ensure @ alias works or change to "../../components/home/TeaGardenCanvas"

export default function Home() {
  return (
    <main className="w-full h-screen relative overflow-hidden bg-slate-950 flex flex-col justify-center items-center">
      {/* 3D Canvas Background (Lower z-index, captures normal pointer events underneath text) */}
      <div className="absolute inset-0 z-0">
        <TeaGardenCanvas />
      </div>

      {/* Overlay UI (Higher z-index, pointer-events-none so it doesn't block canvas interactions around text, but auto for buttons) */}
      <div className="relative z-10 text-center flex flex-col items-center justify-center px-4 pointer-events-none w-full h-full">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 drop-shadow-lg leading-tight">
          Experience True <span className="text-[#a8e6cf]">Serenity</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-10 drop-shadow-md">
          Welcome to the Antigravity Tea Garden. A space where nature meets innovation in a zero-gravity environment.
        </p>
        <button className="pointer-events-auto px-8 py-4 bg-gradient-to-r from-[#1b4332] to-[#40916c] hover:from-[#40916c] hover:to-[#a8e6cf] text-white rounded-full font-semibold transition-all duration-300 shadow-xl hover:shadow-[#a8e6cf]/20 hover:scale-105 active:scale-95">
          Explore Collection
        </button>
      </div>
    </main>
  );
}
