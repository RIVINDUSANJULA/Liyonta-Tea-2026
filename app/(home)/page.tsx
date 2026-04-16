import React from "react";
import TeaJourneyCanvas from "@/components/home/TeaJourneyCanvas"; // Adjust import depending on your aliasing

export default function Home() {
  return (
    // Replaced bg-slate-950 with the creamy warm bg-[#FDFCF8]
    <main className="w-full h-screen relative overflow-hidden bg-[#FDFCF8]">
      <TeaJourneyCanvas />
    </main>
  );
}
