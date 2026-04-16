import type { Metadata } from "next";
import Home from "@/app/(home)/page";

export const metadata: Metadata = {
  title: "Liyonta Tea | The Ceylon Journey",
  description: "Experience the finest Ceylon tea journey.",
  // If you placed your icons in the public folder instead of the app folder, 
  // you can explicitly link them here:
  icons: {
    icon: "/liyonta_tea_logo.webp",
  },
  openGraph: {
    title: "Liyonta Tea",
    description: "Experience the finest Ceylon tea journey.",
    // url: "https://yourdomain.com",
    siteName: "Liyonta Tea",
    images: [
      {
        url: "/og-image.jpg", // Create a 1200x630px image in your public folder for social sharing
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