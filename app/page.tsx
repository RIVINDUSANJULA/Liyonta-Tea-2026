import type { Metadata } from "next";
import Home from "@/app/(home)/page";

export default function Page() {
  return (
    <main className="bg-[#3B6B32] text-forest overflow-x-hidden min-h-screen selection:bg-[#6B4423] selection:text-[#FDFCF8]">
      <Home />
    </main>
  );
}