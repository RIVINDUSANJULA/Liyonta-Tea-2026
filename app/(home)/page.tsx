import React from 'react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="antialiased overflow-x-hidden bg-[#FCF9F0] text-[#1C1C17]">
      <main>

        {/* 1. SENSORY HERO SECTION */}
        <section className="relative min-h-[90vh] flex items-center justify-center pt-20 pb-16 px-6 md:px-12 bg-[#FCF9F0]">
          <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center gap-12 lg:gap-8 relative">

            {/* Left Side: Overlapping Text Card */}
            <div className="w-full md:w-5/12 z-20 flex flex-col items-start md:-mr-24 lg:-mr-32 mt-12 md:mt-0 relative">
              <div className="bg-white p-10 lg:p-14 rounded-2xl shadow-[0_20px_40px_rgba(28,28,23,0.06)] border border-[#C7C7BC]/20 w-full max-w-[520px]">
                <h1 className="font-serif text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.05] tracking-tight text-[#1C1C17] mb-6">
                  The Ritual <br /> <span className="italic text-[#516445]">of Breath.</span>
                </h1>
                <p className="font-sans text-[#46483F] text-lg leading-relaxed mb-10 max-w-sm">
                  Discover rare, handcrafted teas sourced from ancient gardens. A moment of pause, steeped in tradition and natural tranquility.
                </p>
                <a href="#" className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#516445] text-white font-medium tracking-wide hover:bg-[#869A77] transition-colors">
                  Explore Collections
                </a>
              </div>
            </div>

            {/* Right Side: Large Teapot Image */}
            <div className="w-full md:w-7/12 relative z-10">
              <div className="relative w-full h-[500px] md:h-[750px]">
                <Image
                  alt="Golden tea being poured from a rustic ceramic teapot"
                  fill
                  className="object-cover rounded-[2rem] rounded-tl-[4rem] rounded-br-[4rem] shadow-xl"
                  src="/gallery/gallery-pouring.png"
                  priority
                />
              </div>
            </div>

          </div>
        </section>

        {/* 2. CURATED OFFERINGS SECTION */}
        <section className="py-32 px-6 md:px-12 bg-[#F6F3EA]">
          <div className="max-w-7xl mx-auto">

            {/* Section Header */}
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div>
                <h2 className="font-serif text-4xl text-[#1C1C17] mb-4">Curated Offerings</h2>
                <p className="font-sans text-[#46483F] text-lg max-w-xl">
                  Each leaf is a testament to the earth and the artisan's hand. Explore our meticulously selected collections.
                </p>
              </div>
              <a className="text-[#3A4C2F] font-medium inline-flex items-center gap-2 hover:opacity-70 transition-opacity border-b border-[#3A4C2F] pb-1" href="#">
                View All Teas <span>→</span>
              </a>
            </div>

            {/* Asymmetric Image Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">

              {/* Large Left Card */}
              <div className="md:col-span-7 group cursor-pointer">
                <div className="relative overflow-hidden rounded-[2rem] rounded-tr-none mb-6 h-[400px] lg:h-[500px]">
                  <Image
                    alt="Vibrant green matcha powder"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    src="/gallery/gallery-plucking.png"
                  />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-serif text-2xl text-[#1C1C17] mb-2">Ceremonial Greens</h3>
                    <p className="font-sans text-[#46483F] text-sm tracking-widest uppercase">Spring Harvest</p>
                  </div>
                  <span className="text-[#869A77] group-hover:text-[#516445] transition-colors">→</span>
                </div>
              </div>

              {/* Stacked Right Cards */}
              <div className="md:col-span-5 flex flex-col gap-8 lg:gap-12">
                <div className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-[1.5rem] rounded-bl-none mb-6 h-[250px]">
                    <Image
                      alt="Dark roasted oolong tea leaves"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      src="/gallery/gallery-estate.png"
                    />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-[#1C1C17] mb-1">Roasted Oolongs</h3>
                    <p className="font-sans text-[#46483F] text-sm tracking-widest uppercase">Wuyi Mountains</p>
                  </div>
                </div>

                <div className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-[1.5rem] rounded-tl-none mb-6 h-[250px]">
                    <Image
                      alt="Aged puerh tea cake"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      src="/gallery/about-factory.png"
                    />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-[#1C1C17] mb-1">Aged Pu'erh</h3>
                    <p className="font-sans text-[#46483F] text-sm tracking-widest uppercase">Yunnan Province</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 3. THE PROCESS (NARRATIVE SECTION) */}
        <section className="py-32 px-6 md:px-12 bg-[#FCF9F0]">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="relative w-full max-w-lg">
                <div className="absolute inset-0 bg-[#EBE8DF] rounded-full rounded-tr-none transform translate-x-6 translate-y-6"></div>
                <div className="relative z-10 w-full aspect-[4/5] rounded-full rounded-tr-none overflow-hidden shadow-xl">
                  <Image
                    alt="Hands carefully sorting fresh green tea leaves"
                    fill
                    className="object-cover"
                    src="/gallery/gallery-plucking.png"
                  />
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 max-w-xl">
              <span className="font-sans text-sm uppercase tracking-widest text-[#516445] mb-6 block">The Origin</span>
              <h2 className="font-serif text-4xl md:text-5xl text-[#1C1C17] leading-tight mb-8">
                Honoring the hands that shape the leaf.
              </h2>
              <div className="space-y-6 text-[#46483F] font-sans text-lg leading-relaxed">
                <p>
                  True tea is not manufactured; it is coaxed into being. Our journey begins in remote, high-altitude gardens where generational farmers practice ancient, labor-intensive techniques.
                </p>
                <p>
                  From the gentle plucking of the first spring buds to the masterful roasting over charcoal, we preserve the human touch at every step. This dedication ensures that every cup tells a story of terroir and tradition.
                </p>
              </div>
              <a className="inline-flex items-center gap-4 mt-10 text-[#3A4C2F] font-medium group" href="#">
                <span className="border-b border-transparent group-hover:border-[#3A4C2F] transition-colors pb-1">Discover Our Process</span>
                <div className="w-10 h-10 rounded-full border border-[#C7C7BC] flex items-center justify-center group-hover:bg-[#EBE8DF] transition-colors">
                  <span>→</span>
                </div>
              </a>
            </div>

          </div>
        </section>

        {/* 4. LIFESTYLE QUOTE */}
        <section className="relative py-40 px-6 md:px-12 flex items-center justify-center bg-white overflow-hidden">
          {/* Subtle noise/texture overlay */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

          <div className="relative z-10 text-center max-w-3xl mx-auto flex flex-col items-center">
            <svg className="w-8 h-8 text-[#B8CDA8] mb-8" fill="currentColor" viewBox="0 0 24 24"><path d="M17.6 5.8C16.2 4.4 14.1 3.5 12 3.5C7.3 3.5 3.5 7.3 3.5 12C3.5 14.1 4.4 16.2 5.8 17.6L12 23.8L18.2 17.6C19.6 16.2 20.5 14.1 20.5 12C20.5 7.3 16.7 3.5 12 3.5M12 19L7.2 14.2C6.3 13.3 5.8 12.1 5.8 10.8C5.8 7.3 8.6 4.5 12 4.5C15.4 4.5 18.2 7.3 18.2 10.8C18.2 12.1 17.7 13.3 16.8 14.2L12 19Z" /></svg>
            <h2 className="font-serif text-3xl md:text-5xl text-[#1C1C17] leading-snug mb-8">
              "Drink your tea slowly and reverently, as if it is the axis on which the world earth revolves."
            </h2>
            <p className="font-sans text-[#46483F] italic mb-12">— Thich Nhat Hanh</p>
            <a className="inline-block px-10 py-4 bg-[#E5E2DA] text-[#1C1C17] rounded-full font-medium tracking-wide hover:bg-[#DDDAD1] transition-colors" href="#">
              Begin Your Ritual
            </a>
          </div>
        </section>

      </main>
    </div>
  );
}