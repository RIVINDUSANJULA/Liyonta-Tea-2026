import React from 'react';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FDFCF8] text-[#1B3022] pt-20 lg:pt-24">
      <main>
        {/* A. The Narrative Hero */}
        <header className="relative py-24 lg:py-32">
          <div className="container mx-auto px-6 max-w-screen-xl text-center">
            <h1 className="font-serif text-5xl md:text-7xl text-[#1B3022] mb-8 leading-tight">
              From the Southern Hills of Sri Lanka to Your Cup
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-[#333333]/80 leading-relaxed font-light">
              The story of Liyonta Tea begins in the mist-covered landscapes of the Southern Province, where heritage meets modern excellence.
            </p>
            <div className="mt-20 relative aspect-[21/9] w-full bg-[#E8E6E0] border border-slate-200 overflow-hidden">
              <Image
                src="/images/about-hero.png"
                alt="Colonial-style tea factory facade in Sri Lanka"
                fill
                className="object-cover opacity-90 contrast-75"
                priority
              />
            </div>
          </div>
        </header>

        {/* B. "The Award-Winning Factory" Section */}
        <section className="py-24 bg-white border-y border-slate-100">
          <div className="container mx-auto px-6 max-w-screen-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-8 lg:pr-12">
                <h2 className="font-serif text-4xl md:text-5xl text-[#1B3022]">
                  The Award-Winning Factory
                </h2>
                <div className="space-y-6 text-[#333333] leading-relaxed">
                  <p>
                    Liyonta Tea is processed in our state-of-the-art facility in the Southern Province, a site recognized globally for its adherence to &ldquo;Quality Grade 1&rdquo; standards. Our commitment to excellence has earned us numerous accolades, positioning our factory as a beacon of artisanal tea production.
                  </p>
                  <p>
                    We combine traditional craftsmanship with precision engineering to ensure that every batch preserves the delicate aromatic profiles unique to our soil. Our facility is not just a place of work, but a sanctuary of tea expertise.
                  </p>
                </div>
              </div>
              <div className="relative aspect-[4/3] bg-[#F5F5F5] border border-slate-200">
                <Image
                  src="/images/about-factory.png"
                  alt="Modern tea processing facility interior"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-2 text-[10px] uppercase font-bold tracking-widest border border-slate-200">
                  Our Southern Province processing facility
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* C. The "Soil to Sip" Timeline */}
        <section className="py-24 bg-[#FDFCF8]">
          <div className="container mx-auto px-6 max-w-screen-xl text-center">
            <h2 className="font-serif text-4xl md:text-5xl text-[#1B3022] mb-16">Soil to Sip</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
              {[
                { step: "01", title: "Harvesting", desc: "Hand-plucking only the finest two leaves and a bud." },
                { step: "02", title: "Withering & Rolling", desc: "Traditional methods preserved for flavor depth." },
                { step: "03", title: "Oxidation", desc: "The secret to our world-renowned deep amber blends." },
                { step: "04", title: "Packaging", desc: "Sealed at the source for unparalleled freshness." }
              ].map((item, idx) => (
                <article key={idx} className="space-y-4 px-4 text-center">
                  <div className="text-xs font-bold text-green-600 tracking-[0.3em] font-sans border-b border-slate-200 pb-2 inline-block">
                    STAGE {item.step}
                  </div>
                  <h3 className="text-xl font-bold font-serif text-[#1B3022]">{item.title}</h3>
                  <p className="text-sm text-[#555555] leading-relaxed">{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* D. Core Values Grid */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 max-w-screen-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Purity", desc: "Every leaf is 100% Single-Origin Ceylon, untainted by mass blending." },
                { title: "Community", desc: "Directly supporting the artisan families of the Southern Province." },
                { title: "Sustainability", desc: "Utilizing rain-fed crops and strictly organic-first cultivation." },
                { title: "Innovation", desc: "Evolving our process while honoring the soul of tea heritage." }
              ].map((value, idx) => (
                <div key={idx} className="p-8 border border-slate-200 hover:border-green-600 transition-none space-y-4">
                  <div className="w-10 h-[1px] bg-green-600"></div>
                  <h4 className="text-lg font-bold font-serif tracking-tight">{value.title}</h4>
                  <p className="text-sm text-[#555555] leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* E. "Meet the Tea Master" Section */}
        <section className="py-24 bg-[#FDFCF8]">
          <div className="container mx-auto px-6 max-w-screen-xl">
            <div className="flex flex-col items-center text-center space-y-12">
              <div className="relative w-48 h-48 rounded-full border border-slate-200 overflow-hidden bg-[#E8E6E0]">
                <Image
                  src="/images/about-master.png"
                  alt="Dignified portrait of the Tea Master"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-none"
                />
              </div>
              <div className="max-w-2xl space-y-6">
                <h2 className="font-serif text-3xl md:text-4xl italic text-[#1B3022]">
                  &ldquo;We started Liyonta to bring the world a true taste of Sri Lanka—one that isn&apos;t diluted by mass-market blending, but defined by its origin.&rdquo;
                </h2>
                <div className="space-y-1">
                  <p className="text-xs font-bold uppercase tracking-[0.4em] text-green-600">The Tea Master</p>
                  <p className="text-sm text-[#333333]">Founder, Liyonta Factory</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* F. Quality Certification Banner */}
        <aside className="py-12 bg-[#F5F4F0] border-y border-slate-100">
          <div className="container mx-auto px-6 max-w-screen-xl">
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60">
              {["ISO CERTIFIED", "SINGLE ESTATE", "HAND PICKED", "AWARD-WINNING 2024"].map((badge, idx) => (
                <span key={idx} className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#1B3022]">
                  [{badge}]
                </span>
              ))}
            </div>
          </div>
        </aside>
      </main>

      {/* G. Detailed Footer */}
      <footer className="py-24 bg-white border-t border-slate-200">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
            <div className="space-y-6">
              <div className="text-xl font-bold tracking-[0.2em] text-[#1B3022]">LIYONTA</div>
              <p className="text-sm text-[#555555] leading-relaxed">
                Elevating the art of tea through heritage, craftsmanship, and a commitment to pure Ceylon excellence.
              </p>
            </div>
            <div className="space-y-6">
              <h5 className="text-xs font-bold uppercase tracking-widest text-[#1B3022]">Visit Us</h5>
              <p className="text-sm text-[#555555] leading-relaxed">
                No. 124, Heritage Factory Road,<br />
                Southern Province, Sri Lanka<br />
                <span className="font-bold">By Appointment Only</span>
              </p>
            </div>
            <div className="space-y-6">
              <h5 className="text-xs font-bold uppercase tracking-widest text-[#1B3022]">Our Philosophy</h5>
              <ul className="space-y-4 text-sm text-[#555555]">
                <li><a href="#" className="hover:text-green-600 transition-none">Heritage Crafts</a></li>
                <li><a href="#" className="hover:text-green-600 transition-none">Ethical Trade</a></li>
                <li><a href="#" className="hover:text-green-600 transition-none">Sustainability</a></li>
              </ul>
            </div>
            <div className="space-y-6">
              <h5 className="text-xs font-bold uppercase tracking-widest text-[#1B3022]">Join the Tea Circle</h5>
              <form className="flex border-b border-[#1B3022] py-2">
                <input type="email" placeholder="Email Address" className="bg-transparent text-sm w-full outline-none" />
                <button type="submit" className="text-xs font-bold uppercase tracking-widest text-green-600 ml-4">Join</button>
              </form>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.2em] text-slate-400 pt-10 border-t border-slate-100 italic">
            <p>&copy; 2026 Liyonta Tea. Heritage of Sri Lanka.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
