import type { Metadata } from "next";
import HomeContent from "@/components/HomeContent";

export const metadata: Metadata = {
  title: "Liyonta Tea | Pure Ceylon Excellence",
  description: "Award-winning premium Ceylon tea from the Southern Province of Sri Lanka.",
};

export default function Page() {
  return (
    <HomeContent>
      {/* A. Weightless Arrival */}
      <section id="hero" className="relative h-screen flex flex-col items-center justify-center pointer-events-none perspective-[1000px]">
        <div className="container mx-auto px-6 text-center z-10">
          <div className="flex justify-center transform-style-3d">
            {"LIYONTA".split("").map((letter, idx) => (
              <span
                key={idx}
                className="liyonta-letter text-[15vw] md:text-[10rem] font-serif uppercase leading-none text-transparent transform origin-center font-outline-2 drop-shadow-xl"
                style={{ WebkitTextStroke: '2px #1B3022' }}
              >
                {letter}
              </span>
            ))}
          </div>
          
          <div className="mt-8 space-y-4 max-w-2xl mx-auto opacity-80 backdrop-blur-3xl bg-[#FDFCF8]/90 p-6 rounded-full border border-[#6B4423]/40 transform translate-y-12 shadow-xl">
            <p className="text-xs md:text-sm font-bold tracking-[0.4em] uppercase text-[#3B6B32]">
              Zero-G Heritage • Southern Province
            </p>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-80">
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#FDFCF8]">Descend</span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-[#FDFCF8] via-[#FDFCF8]/50 to-transparent" />
        </div>
      </section>

      {/* B. Alchemy of the Southern Province */}
      <section id="alchemy-trigger" className="relative min-h-[150vh] flex items-center justify-center pointer-events-none">
        <div className="container mx-auto px-6 z-10 w-full pointer-events-auto">
          <div className="max-w-4xl max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { id: "01", name: "OBSIDIAN BLACK", desc: "Weightless dark notes forged in high altitude." },
              { id: "02", name: "LIQUID GREEN", desc: "Verdant zero-gravity leaves steeped in mist." },
              { id: "03", name: "GOLDEN BAGS", desc: "Suspended perfection in every silken pyramid." }
            ].map((prod) => (
              <div 
                key={prod.id}
                className="relative group p-10 h-80 flex flex-col justify-between backdrop-blur-2xl bg-[#FDFCF8]/80 border-2 border-[#6B4423]/30 overflow-hidden transform transition-all duration-700 hover:-translate-y-4 hover:shadow-2xl hover:bg-white hover:border-[#6B4423]"
              >
                {/* Glassmorphism Inner Shine */}
                <div className="absolute -inset-1 bg-gradient-to-b from-[#3B6B32]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-xl" />
                
                <span className="text-[10px] font-bold tracking-[0.5em] text-[#6B4423] transition-all">{prod.id} // ALCHEMY</span>
                
                <div>
                  <h3 className="text-2xl font-serif text-[#3B6B32] mb-2">{prod.name}</h3>
                  <p className="text-xs text-[#1B3022]/70 tracking-widest uppercase leading-loose">{prod.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* C. The Dissolve to Gold (Story) */}
      <section className="relative min-h-screen py-48 pointer-events-none flex items-center">
        <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl pointer-events-auto">
          <h2 className="text-5xl md:text-7xl font-serif leading-tight mb-8 drop-shadow-sm">
            Where gravity ends, <span className="italic text-[#3B6B32]">alchemy begins.</span>
          </h2>
          <p className="text-lg md:text-xl text-forest/80 leading-relaxed font-light mx-auto">
            Experience Liyonta Tea not just as a beverage, but as a physical phenomenon. Our award-winning factory in the Southern Province uses generational technique to distill the essence of the leaf into liquid gold.
          </p>
          
          <div className="mt-20 inline-block p-[1px] bg-gradient-to-r from-transparent via-[#6B4423] to-transparent">
             <button className="px-12 py-5 bg-[#3B6B32] text-[10px] uppercase tracking-[0.4em] font-bold text-[#FDFCF8] border border-[#6B4423] hover:bg-[#6B4423] hover:text-[#FDFCF8] hover:shadow-[0_0_20px_rgba(107,68,35,0.4)] transition-all duration-500">
               Enter The Portal
             </button>
          </div>
        </div>
      </section>

      <footer className="relative z-10 bg-[#e9f2e4] border-t-[3px] border-[#6B4423] py-12">
        <div className="container mx-auto px-6 text-center">
           <div className="text-[10px] uppercase tracking-[0.5em] text-[#6B4423]">Liyonta Phygital Experience • 2026</div>
        </div>
      </footer>
    </HomeContent>
  );
}