import type { Metadata } from "next";
import HomeContent from "@/components/HomeContent";

export const metadata: Metadata = {
  title: "Liyonta Tea | Pure Ceylon Excellence",
  description: "Award-winning premium Ceylon tea from the Southern Province of Sri Lanka.",
};

export default function Page() {
  return (
    <main className="bg-charcoal text-cream overflow-x-hidden min-h-screen selection:bg-gold selection:text-charcoal">
      <HomeContent />
    </main>
  );
}