import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="antialiased overflow-x-hidden bg-[#FCF9F0] text-[#1C1C17] font-sans">
      <main>

        {/* 1. SENSORY HERO SECTION */}
        <section className="relative w-full min-h-[90vh] flex items-center justify-center pt-32 pb-20 px-6 md:px-12 bg-[#FCF9F0] overflow-hidden">
          <div className="max-w-7xl mx-auto w-full flex flex-col-reverse md:flex-row items-center relative">

            {/* Left: Overlapping Text Card */}
            <div className="w-full md:w-5/12 relative z-20 mt-[-4rem] md:mt-0 md:-mr-16">
              <div className="bg-[#FFFFFF]/95 backdrop-blur-xl p-10 md:p-14 rounded-2xl shadow-[0_20px_40px_rgba(28,28,23,0.06)] border border-[#C7C7BC]/10 max-w-lg">
                <h1 className="font-serif text-5xl md:text-[4rem] leading-[1.05] tracking-tight text-[#1C1C17] mb-6">
                  The Ritual <br /> <span className="italic text-[#516445]">of Breath.</span>
                </h1>
                <p className="font-sans text-[#46483F] text-lg leading-relaxed mb-10 max-w-sm">
                  Discover rare, handcrafted teas sourced from ancient gardens. A moment of pause, steeped in tradition and natural tranquility.
                </p>
                <Link href="/shop" className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-br from-[#516445] to-[#869A77] text-white font-sans font-medium tracking-wide hover:opacity-90 transition-opacity">
                  Explore Collections
                </Link>
              </div>
            </div>

            {/* Right: Asymmetric Image */}
            <div className="w-full md:w-8/12 relative z-10 flex justify-end">
              <div className="relative w-full md:w-[90%] h-[500px] md:h-[750px] rounded-[2rem] rounded-tl-[4rem] rounded-br-[4rem] overflow-hidden shadow-xl">
                <Image
                  src="/gallery/gallery-pouring.png"
                  alt="Golden tea being poured from a rustic ceramic teapot"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

          </div>
        </section>

        {/* 2. CURATED OFFERINGS (Visual Harvest) */}
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
              <Link href="/shop" className="text-[#3A4C2F] font-medium font-sans text-sm tracking-wide inline-flex items-center gap-2 hover:opacity-70 transition-opacity pb-1 border-b border-[#3A4C2F]/30">
                View All Teas <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>

            {/* Asymmetric Image Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">

              {/* Large Left Card */}
              <div className="md:col-span-7 group cursor-pointer relative">
                <Link href="/shop">
                  <div className="relative overflow-hidden rounded-[2rem] rounded-tr-[0.5rem] mb-6 h-[400px] lg:h-[500px] shadow-[0_20px_40px_rgba(28,28,23,0.04)]">
                    <Image
                      src="/extra/green-tea.png"
                      alt="Ceremonial Greens"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-serif text-2xl text-[#1C1C17] mb-2">Ceremonial Greens</h3>
                      <p className="font-sans text-[#46483F] text-xs tracking-widest uppercase">Spring Harvest</p>
                    </div>
                    <span className="text-[#869A77] group-hover:text-[#516445] transition-colors text-xl font-light">&rarr;</span>
                  </div>
                </Link>
              </div>

              {/* Stacked Right Cards */}
              <div className="md:col-span-5 flex flex-col gap-8 lg:gap-12">

                {/* Top Right Card */}
                <div className="group cursor-pointer relative">
                  <Link href="/shop">
                    <div className="relative overflow-hidden rounded-[1.5rem] rounded-bl-[0.5rem] mb-6 h-[220px] shadow-[0_20px_40px_rgba(28,28,23,0.04)]">
                      <Image
                        src="/extra/black-tea.png"
                        alt="Roasted Oolongs"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl text-[#1C1C17] mb-1">Roasted Oolongs</h3>
                      <p className="font-sans text-[#46483F] text-xs tracking-widest uppercase">Wuyi Mountains</p>
                    </div>
                  </Link>
                </div>

                {/* Bottom Right Card */}
                <div className="group cursor-pointer relative">
                  <Link href="/shop">
                    <div className="relative overflow-hidden rounded-[1.5rem] rounded-tl-[0.5rem] mb-6 h-[220px] shadow-[0_20px_40px_rgba(28,28,23,0.04)]">
                      <Image
                        src="/gallery/about-factory.png"
                        alt="Aged Pu'erh"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl text-[#1C1C17] mb-1">Aged Pu'erh</h3>
                      <p className="font-sans text-[#46483F] text-xs tracking-widest uppercase">Yunnan Province</p>
                    </div>
                  </Link>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* 3. THE ORIGIN */}
        <section className="py-32 px-6 md:px-12 bg-[#FCF9F0]">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

            {/* Left Image Masking */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
              <div className="relative w-full max-w-md aspect-square">
                {/* Background Offset Layer */}
                <div className="absolute inset-0 bg-[#EBE8DF] rounded-full translate-x-6 translate-y-6"></div>
                {/* Foreground Image */}
                <div className="relative z-10 w-full h-full rounded-full rounded-tr-none overflow-hidden shadow-xl border-4 border-[#FCF9F0]">
                  <Image
                    src="/gallery/gallery-plucking.png"
                    alt="Hands carefully sorting fresh green tea leaves"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right Text Content */}
            <div className="w-full lg:w-1/2 max-w-xl">
              <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#516445] mb-6 block font-bold">The Origin</span>
              <h2 className="font-serif text-4xl md:text-5xl text-[#1C1C17] leading-[1.1] mb-8">
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
              <Link href="/about" className="inline-flex items-center gap-4 mt-10 text-[#1C1C17] font-medium group">
                <span className="font-sans text-sm tracking-wide border-b border-transparent group-hover:border-[#1C1C17] transition-colors pb-1">Discover Our Process</span>
                <div className="w-10 h-10 rounded-full border border-[#C7C7BC] flex items-center justify-center group-hover:bg-[#EBE8DF] transition-colors">
                  <span aria-hidden="true" className="text-sm font-light">&rarr;</span>
                </div>
              </Link>
            </div>

          </div>
        </section>

        {/* 4. MOST POPULAR PRODUCTS (Styled perfectly to Zen Minimalist system) */}
        <section className="py-32 px-6 md:px-12 bg-[#FFFFFF]">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-serif text-4xl text-center mb-16 text-[#1C1C17]">Most Popular</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {[
                { name: "Premium Liyonta Pekoe", price: "$24.00", desc: "Crisp, coppery notes with a bright aroma.", img: "/extra/black-tea.png" },
                { name: "Classic Black Tea", price: "$19.00", desc: "Bold, robust, and unmistakable Ceylon character.", img: "/gallery/gallery-pouring.png" },
                { name: "Silver Tips White Tea", price: "$42.00", desc: "Delicate, floral, and meticulously hand-rolled.", img: "/extra/green-tea.png" }
              ].map((product, i) => (
                <Link key={i} href="/shop" className="group block text-center">
                  <div className="relative aspect-[4/5] rounded-[1.5rem] overflow-hidden mb-6 bg-[#F6F3EA] shadow-[0_20px_40px_rgba(28,28,23,0.03)]">
                    <Image src={product.img} alt={product.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" />
                    <div className="absolute inset-x-0 bottom-0 p-6 flex justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 backdrop-blur-[1px]">
                      <span className="px-8 py-3 rounded-full text-xs font-bold tracking-widest uppercase text-[#1C1C17] bg-[#FCF9F0] shadow-lg">
                        Quick Add
                      </span>
                    </div>
                  </div>
                  <h3 className="font-serif text-2xl mb-2 text-[#1C1C17]">{product.name}</h3>
                  <p className="font-sans text-sm text-[#46483F] mb-3 max-w-[250px] mx-auto">{product.desc}</p>
                  <p className="font-sans font-medium text-[#1C1C17]">{product.price}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 5. FOUNDER QUOTE (Styled like Wabi-Sabi Ritual) */}
        <section className="relative py-40 px-6 md:px-12 flex items-center justify-center bg-[#F6F3EA] overflow-hidden">
          <div className="relative z-10 text-center max-w-3xl mx-auto flex flex-col items-center">

            {/* Small subtle visual at the top */}
            <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden mb-10 shadow-lg border-2 border-[#EBE8DF]">
              <Image
                src="/MrRonnieLiyanage.png"
                alt="Mr. Ronnie Liyanage"
                fill
                className="object-cover grayscale contrast-125"
              />
            </div>

            <h2 className="font-serif italic text-3xl md:text-[2.75rem] text-[#1C1C17] leading-snug mb-10">
              "We started Liyonta to bring the world a true taste of Sri Lanka—one that isn't diluted by mass-market blending, but defined by its origin."
            </h2>

            <div className="flex flex-col items-center mb-12">
              <span className="font-sans text-[10px] uppercase tracking-[0.3em] font-bold text-[#1C1C17] mb-1">— MR RONNIE LIYANAGE</span>
              <span className="font-sans text-sm text-[#46483F]">Founder, Liyonta Factory</span>
            </div>

            <Link href="/contact" className="inline-block px-10 py-4 bg-[#EBE8DF] text-[#1C1C17] rounded-full font-sans text-xs font-bold uppercase tracking-widest hover:bg-[#C7C7BC] transition-colors shadow-sm">
              Get in Touch
            </Link>

          </div>
        </section>

      </main>
    </div>
  );
}