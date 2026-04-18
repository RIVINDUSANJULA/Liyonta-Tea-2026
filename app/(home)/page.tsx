import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="antialiased overflow-x-hidden bg-[#FCF9F0] text-[#1C1C17]">
      <main>
        {/* 1. HERO SECTION */}
        <section className="relative w-full flex items-center justify-center px-4 sm:px-8 py-16 lg:py-20">
          <div className="relative w-full max-w-7xl mx-auto">
            {/* Image Container */}
            <div className="w-full relative aspect-[16/9] lg:aspect-[21/9] overflow-hidden rounded-[2rem] rounded-tl-[4rem] rounded-br-[4rem]">
              <Image
                src="/gallery/gallery-estate.png"
                alt="Liyonta Tea Gardens"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Floating Text Card */}
            <div className="absolute top-1/2 left-4 sm:left-12 lg:left-24 -translate-y-1/2 bg-white/95 backdrop-blur-sm p-8 sm:p-10 rounded-3xl max-w-md shadow-xl border border-[#EBE8DF]">
              <h1 className="font-serif text-4xl sm:text-5xl mb-4 leading-tight text-[#1C1C17]">
                The Ritual of Ceylon.
              </h1>
              <p className="font-sans text-base mb-6 leading-relaxed text-[#46483F]">
                Discover rare, handcrafted teas sourced from ancient gardens. A moment of pause, steeped in tradition.
              </p>
              <Link href="/shop" className="inline-flex items-center justify-center px-8 py-3 rounded-full font-sans tracking-wide text-white transition-opacity hover:opacity-90 font-medium bg-[#516445]">
                Shop Collection
              </Link>
            </div>
          </div>
        </section>

        {/* 2. VISUAL HARVEST (GALLERY TEASER) */}
        <section className="py-16 px-6 md:px-12 bg-[#FCF9F0]">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-8">
              <div>
                <h2 className="font-serif text-4xl text-[#1C1C17] mb-3">Visual Harvest</h2>
                <p className="font-sans text-[#46483F] text-base max-w-xl leading-relaxed">
                  Every leaf passes through meticulous hands, carrying generations of wisdom from the hills of Sri Lanka straight to your cup.
                </p>
              </div>
              <Link href="/gallery" className="text-[#3A4C2F] font-medium inline-flex items-center gap-2 hover:opacity-70 border-b border-[#3A4C2F] pb-1 transition-opacity">
                View Full Gallery &rarr;
              </Link>
            </div>

            {/* Asymmetric Editorial Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
              <div className="md:col-span-7 group cursor-pointer relative">
                <div className="relative overflow-hidden rounded-[2rem] mb-4 h-[350px] lg:h-[450px] shadow-sm">
                  <Image src="/gallery/gallery-pouring.png" alt="Perfect Pour" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <h3 className="font-serif text-xl text-[#1C1C17]">The Perfect Pour</h3>
                <p className="font-sans text-[#46483F] text-xs tracking-widest uppercase">Liyonta Estate</p>
              </div>

              <div className="md:col-span-5 flex flex-col gap-6 lg:gap-8">
                <div className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-[1.5rem] mb-4 h-[200px] shadow-sm">
                    <Image src="/extra/black-tea.png" alt="Black Tea" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <h3 className="font-serif text-lg text-[#1C1C17]">Orthodox Black Tea</h3>
                </div>
                <div className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-[1.5rem] mb-4 h-[200px] shadow-sm">
                    <Image src="/gallery/about-factory.png" alt="Heritage" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <h3 className="font-serif text-lg text-[#1C1C17]">Our Heritage</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. THE ORIGIN (ABOUT TEASER) */}
        <section className="px-4 sm:px-8 py-16 lg:py-20 bg-[#F6F3EA]">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full md:w-1/2 relative">
              <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-full bg-[#EBE8DF]"></div>
              <div className="relative aspect-square sm:aspect-[4/5] rounded-full overflow-hidden border-4 border-[#FCF9F0] shadow-lg">
                <Image src="/gallery/gallery-plucking.png" alt="Tea Plucking" fill className="object-cover" />
              </div>
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="font-serif text-4xl leading-tight text-[#1C1C17]">
                Honoring the hands that shape the leaf.
              </h2>
              <p className="font-sans text-base leading-relaxed text-[#46483F]">
                Our artisanal teas are birthed from the traditional wisdom of Sri Lankan tea farmers. Each harvest reflects a labor-intensive methodology that ensures only the tender most leaves are selected.
              </p>
              <Link href="/about" className="inline-block font-sans text-base transition-opacity hover:opacity-70 border-b pb-1 text-[#1C1C17] border-[#C7C7BC]">
                Discover Our Story &rarr;
              </Link>
            </div>
          </div>
        </section>

        {/* 4. MOST POPULAR PRODUCTS */}
        <section className="px-4 sm:px-8 py-16 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-serif text-4xl text-center mb-12 text-[#1C1C17]">Most Popular</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
              {[
                { name: "Premium Liyonta Pekoe", price: "$24.00", desc: "Crisp, coppery notes." },
                { name: "Classic Black Tea", price: "$19.00", desc: "Bold Ceylon character." },
                { name: "Silver Tips White Tea", price: "$42.00", desc: "Delicate and floral." }
              ].map((product, i) => (
                <Link key={i} href="/shop" className="group block">
                  <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-4 bg-[#F6F3EA] flex items-center justify-center">
                    <div className="absolute inset-x-0 bottom-0 p-4 flex justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                      <span className="px-5 py-2 rounded-full text-xs font-medium text-white bg-[#516445]">Quick Add</span>
                    </div>
                  </div>
                  <h3 className="font-serif text-xl mb-1 text-[#1C1C17]">{product.name}</h3>
                  <p className="font-sans text-sm text-[#46483F] mb-2">{product.desc}</p>
                  <p className="font-sans font-semibold text-[#1C1C17]">{product.price}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 5. FOUNDER QUOTE */}
        <section className="px-4 sm:px-8 py-16 lg:py-24 bg-white">
          <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
            <div className="relative w-28 h-28 rounded-full overflow-hidden mb-8 border-2 border-[#EBE8DF]">
              <Image src="/MrRonnieLiyanage.png" alt="Ronnie Liyanage" fill className="object-cover" />
            </div>
            <blockquote className="font-serif italic text-2xl sm:text-3xl leading-snug mb-8 text-[#1C1C17]">
              &quot;We started Liyonta to bring the world a true taste of Sri Lanka—one that isn&apos;t diluted by mass-market blending, but defined by its origin.&quot;
            </blockquote>
            <div className="mb-10">
              <cite className="font-sans not-italic text-xs tracking-widest font-bold uppercase text-[#1C1C17] block mb-1">
                MR RONNIE LIYANAGE
              </cite>
              <span className="font-sans text-xs text-[#46483F]">Founder, Liyonta Factory</span>
            </div>
            <Link href="/contact" className="px-8 py-3 rounded-full border border-[#C7C7BC] text-[#1C1C17] font-sans text-xs font-bold uppercase tracking-widest hover:bg-[#EBE8DF] transition-colors">
              Get in Touch
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}