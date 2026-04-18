import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="antialiased overflow-x-hidden bg-[#FCF9F0] text-[#1C1C17] font-sans pb-20">
      <main>

        {/* 1. THE NARRATIVE HERO */}
        <section className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24 pt-32 pb-24 lg:pb-32">
          <div className="relative h-[60vh] min-h-[500px] lg:h-[716px] rounded-2xl overflow-hidden flex items-center justify-center shadow-lg">
            <Image
              src="/about/about-hero.png"
              alt="Colonial-style tea factory facade in Sri Lanka"
              fill
              className="object-cover"
              priority
            />
            {/* Gradient Overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-[#1C1C17]/80"></div>

            <div className="relative z-10 max-w-4xl text-center px-6">
              <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#FCF9F0] tracking-tight mb-6 drop-shadow-lg leading-[1.1]">
                From the Southern Hills <br /> to Your Cup
              </h1>
              <p className="font-sans text-lg md:text-xl text-[#F6F3EA] max-w-2xl mx-auto drop-shadow-md leading-relaxed">
                The story of Liyonta Tea begins in the mist-covered landscapes of the Southern Province, where heritage meets modern excellence.
              </p>
            </div>
          </div>
        </section>

        {/* 2. THE AWARD-WINNING FACTORY (Text Left, Asymmetric Image Right) */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 mb-32">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <h2 className="font-serif text-4xl md:text-5xl text-[#1C1C17] mb-8 tracking-tight">
                The Award-Winning Factory
              </h2>
              <div className="space-y-6 font-sans text-lg text-[#46483F] leading-relaxed mb-8">
                <p>
                  Since 2005, Liyonta Tea has been a proud steward of Sri Lanka&apos;s rich tea heritage, bringing the finest handpicked teas from the lush highlands of Ceylon to tea lovers around the world.
                </p>
                <p>
                  Our unwavering commitment to quality defines who we are. Every step reflects a passion for excellence—from delicate leaf plucking to bold, aromatic blends.
                </p>
                <p>
                  Whether bold or aromatic, Liyonta Tea invites you to an unforgettable experience—quality, flavor, and tradition in every sip.
                </p>
              </div>
              <Link href="/gallery" className="inline-flex items-center gap-2 font-sans text-[#516445] hover:text-[#869A77] transition-colors duration-300 group font-medium">
                <span className="border-b border-transparent group-hover:border-[#869A77] transition-colors duration-300 pb-1">View Our Factory</span>
                <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
              </Link>
            </div>

            <div className="lg:w-1/2 order-1 lg:order-2 w-full">
              {/* Asymmetric Shape applied here */}
              <div className="relative w-full aspect-[4/5] rounded-lg rounded-tr-[4rem] rounded-bl-[4rem] overflow-hidden shadow-[0_20px_40px_rgba(28,28,23,0.06)]">
                <Image
                  src="/gallery/about-factory.png"
                  alt="Modern tea processing facility interior"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 3. SOIL TO SIP TIMELINE (The Zen Ritual Bento Grid) */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 mb-32">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-[#1C1C17] tracking-tight mb-4">Soil to Sip</h2>
            <p className="font-sans text-[#46483F] max-w-2xl mx-auto text-lg">
              Embrace the process. The act of preparing the leaf is as important as the tea itself.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Harvesting", desc: "Hand-plucking only the finest two leaves and a bud.", shape: "rounded-tl-[2rem]" },
              { step: "02", title: "Withering", desc: "Traditional methods preserved for deep flavor extraction.", shape: "" },
              { step: "03", title: "Oxidation", desc: "The secret to our world-renowned deep amber blends.", shape: "" },
              { step: "04", title: "Packaging", desc: "Sealed at the source for unparalleled freshness.", shape: "rounded-br-[2rem]" }
            ].map((item, idx) => (
              <div
                key={idx}
                className={`bg-[#FFFFFF] p-8 rounded-xl ${item.shape} shadow-[0_20px_40px_rgba(28,28,23,0.04)] flex flex-col items-center text-center hover:bg-[#F6F3EA] transition-colors duration-500 cursor-default border border-[#C7C7BC]/10`}
              >
                <span className="font-sans text-[10px] uppercase tracking-[0.3em] font-bold text-[#516445] mb-6 block border-b border-[#516445]/20 pb-2">
                  Stage {item.step}
                </span>
                <h3 className="font-serif text-xl text-[#1C1C17] mb-3">{item.title}</h3>
                <p className="font-sans text-sm text-[#46483F] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. CORE VALUES (Image Left, Text Right) */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 mb-32">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 w-full">
              {/* Opposite Asymmetric Shape */}
              <div className="relative w-full aspect-square rounded-lg rounded-tl-[4rem] rounded-br-[4rem] overflow-hidden shadow-[0_20px_40px_rgba(28,28,23,0.06)]">
                <Image
                  src="/gallery/gallery-plucking.png"
                  alt="Artisan hands plucking tea"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="lg:w-1/2">
              <h2 className="font-serif text-4xl text-[#1C1C17] mb-10 tracking-tight">Our Core Values</h2>
              <div className="space-y-8">
                {[
                  { title: "Purity", desc: "Every leaf is 100% Single-Origin Ceylon, untainted by mass blending." },
                  { title: "Community", desc: "Directly supporting the artisan families of the Southern Province." },
                  { title: "Sustainability", desc: "Utilizing rain-fed crops and strictly organic-first cultivation." },
                  { title: "Innovation", desc: "Evolving our process while honoring the soul of tea heritage." }
                ].map((value, idx) => (
                  <div key={idx} className="group relative pl-6 border-l border-[#C7C7BC]/40 hover:border-[#516445] transition-colors duration-300">
                    <h4 className="text-xl font-serif text-[#1C1C17] mb-2">{value.title}</h4>
                    <p className="text-base font-sans text-[#46483F] leading-relaxed">{value.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 5. FOUNDER QUOTE (Full Width Highlight) */}
        <section className="w-full bg-[#F6F3EA] py-32 mb-24">
          <div className="max-w-4xl mx-auto px-6 md:px-12 flex flex-col items-center text-center">
            <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden mb-10 shadow-lg border-2 border-[#EBE8DF]">
              <Image
                src="/MrRonnieLiyanage.png"
                alt="Mr. Ronnie Liyanage"
                fill
                className="object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
              />
            </div>

            <blockquote className="font-serif text-3xl md:text-5xl text-[#516445] leading-[1.2] mb-10 italic">
              "We started Liyonta to bring the world a true taste of Sri Lanka—one that isn't diluted by mass-market blending, but defined by its origin."
            </blockquote>

            <div className="flex flex-col items-center">
              <span className="font-sans text-[10px] uppercase tracking-[0.4em] font-bold text-[#1C1C17] mb-1">
                Mr Ronnie Liyanage
              </span>
              <span className="font-sans text-sm text-[#46483F]">Founder, Liyonta Factory</span>
            </div>
          </div>
        </section>

        {/* 6. QUALITY CERTIFICATIONS */}
        <section className="max-w-6xl mx-auto px-6 md:px-12 py-12">
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
            {[
              { src: "/certification/CEYLONTEA.png", alt: "Ceylon Tea" },
              { src: "/certification/ISO.png", alt: "ISO Certified" },
              { src: "/certification/OZONE.png", alt: "OZONE Friendly" },
              { src: "/certification/SGS.png", alt: "SGS Certified" },
              { src: "/certification/SLS.png", alt: "SLS Standard" }
            ].map((badge, idx) => (
              <div key={idx} className="relative h-16 md:h-20 w-24 md:w-32 group">
                <Image
                  src={badge.src}
                  alt={badge.alt}
                  fill
                  className="object-contain grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                />
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}