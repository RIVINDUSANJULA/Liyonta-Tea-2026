import type { Metadata } from "next";
import Home from "@/app/(home)/page";


export const metadata: Metadata = {
  title: "Liyonta Tea",
  // description: "Empty",
};

export default function Page() {
  return (
    <main>
      <Home />
    </main>
  );
}