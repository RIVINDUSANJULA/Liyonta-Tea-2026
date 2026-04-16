import React from "react";
import TeaJourneyCanvas from "@/components/home/TeaJourneyCanvas";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    // Replaced dark background with the creamy warm bg-[#FDFCF8]
    <main className="w-full h-screen relative overflow-hidden bg-[#FDFCF8]">
      <Navbar />
      <TeaJourneyCanvas />

    </main>
  );
}
