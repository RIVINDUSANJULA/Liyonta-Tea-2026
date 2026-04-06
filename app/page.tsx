import type { Metadata } from "next";
import HomeContent from "@/components/HomeContent";

export const metadata: Metadata = {
  title: "Liyonta Tea | Pure Ceylon Excellence",
  description: "Award-winning premium Ceylon tea from the Southern Province of Sri Lanka.",
};

export default function Page() {
  return (
    <main className="bg-[#3B6B32] text-forest overflow-x-hidden min-h-screen selection:bg-[#6B4423] selection:text-[#FDFCF8]">
      <HomeContent />
    </main>
  );
}