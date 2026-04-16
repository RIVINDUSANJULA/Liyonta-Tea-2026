import React from "react";
import TeaJourneyCanvas from "@/components/home/TeaJourneyCanvas"; // Adjust import depending on your aliasing

export default function Home() {
  return (
    // Slate-950 provides a deeply dark, rich canvas base 
    // ensuring high contrast for the HTML overlay font colors.
    <main className="w-full h-screen relative overflow-hidden bg-slate-950">
      <TeaJourneyCanvas />
    </main>
  );
}
