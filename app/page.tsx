import type { Metadata } from "next";
import Home from "@/app/(home)/page";

export const metadata: Metadata = {
  title: "Liyonta Tea | The Ceylon Journey",
  description: "Experience the finest Ceylon tea journey.",
  icons: {
    icon: [
      { url: "/logo.png", type: "image/webp" },
    ],
  },
  openGraph: {
    title: "Liyonta Tea",
    description: "Experience the finest Ceylon tea journey.",
    siteName: "Liyonta Tea",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function Page() {
  return (
    <main className="bg-[#3B6B32] text-forest overflow-x-hidden min-h-screen selection:bg-[#6B4423] selection:text-[#FDFCF8]">
      <Home />
    </main>
  );
}