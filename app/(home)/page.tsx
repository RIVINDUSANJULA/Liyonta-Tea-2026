import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="antialiased overflow-x-hidden bg-[#FCF9F0] text-[#1C1C17]">
      <main>
        {/* HERO SECTION */}
        <section className="relative w-full min-h-screen flex items-center justify-center px-4 sm:px-8 py-32 lg:py-40">
          <div className="relative w-full max-w-7xl mx-auto">
            {/* Image */}
            <div className="w-full relative aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9] overflow-hidden rounded-[2rem] rounded-tl-[4rem] rounded-br-[4rem]">
              <Image
                src="/gallery/gallery-estate.png"
                alt="Liyonta Tea Gardens"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Floating Card */}
            <div className="absolute top-1/2 left-4 sm:left-12 lg:left-24 -translate-y-1/2 bg-white/95 backdrop-blur-sm p-8 sm:p-12 rounded-3xl max-w-md shadow-xl border border-[#EBE8DF]">
              <h1 className="font-serif text-4xl sm:text-5xl mb-6 leading-tight text-[#1C1C17]">
                The Ritual of Ceylon.
              </h1>
              <p className="font-sans text-lg mb-8 leading-relaxed text-[#46483F]">
                Discover rare, handcrafted teas sourced from ancient gardens.
              </p>
              <Link href="/shop" className="inline-flex items-center justify-center px-8 py-4 rounded-full font-sans tracking-wide text-white transition-opacity hover:opacity-90 font-medium bg-[#516445]">
                Shop Collection
              </Link>
            </div>
          </div>
        </section>

        {/* GALLERY TEASER */}
        <section className="py-32 px-6 md:px-12 bg-[#FCF9F0]">
          <div className="max-w-7xl mx-auto">

            {/* Section Header */}
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div>
                <h2 className="font-serif text-4xl sm:text-5xl text-[#1C1C17] mb-4">
                  Visual Harvest
                </h2>
                <p className="font-sans text-[#46483F] text-lg max-w-xl leading-relaxed">
                  Every leaf passes through meticulous hands, carrying generations of wisdom from the mist-covered hills of Sri Lanka straight to your cup.
                </p>
              </div>
            </div>

            {/* Asymmetric Image Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">

              {/* Large Left Card */}
              <div className="md:col-span-7 group cursor-pointer relative">
                <div className="relative overflow-hidden rounded-[2rem] mb-6 h-[400px] lg:h-[550px] shadow-sm">
                  <Image
                    src="/gallery/gallery-pouring.png"
                    alt="Pouring fresh Ceylon tea"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex justify-between items-start pr-4">
                  <div>
                    <h3 className="font-serif text-2xl text-[#1C1C17] mb-2">The Perfect Pour</h3>
                    <p className="font-sans text-[#46483F] text-sm tracking-widest uppercase">Liyonta Estate</p>
                  </div>
                </div>
              </div>

              {/* Stacked Right Cards */}
              <div className="md:col-span-5 flex flex-col gap-8 lg:gap-12">

                {/* Top Right Card */}
                <div className="group cursor-pointer relative">
                  <div className="relative overflow-hidden rounded-[1.5rem] mb-6 h-[250px] shadow-sm">
                    <Image
                      src="/extra/black-tea.png"
                      alt="Orthodox Black Tea Leaves"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-[#1C1C17] mb-1">Orthodox Black Tea</h3>
                    <p className="font-sans text-[#46483F] text-sm tracking-widest uppercase">Handpicked</p>
                  </div>
                </div>

                {/* Bottom Right Card */}
                <div className="group cursor-pointer relative">
                  <div className="relative overflow-hidden rounded-[1.5rem] mb-6 h-[250px] shadow-sm">
                    <Image
                      src="/gallery/about-factory.png"
                      alt="Liyonta Tea Factory"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-[#1C1C17] mb-1">Our Heritage</h3>
                    <p className="font-sans text-[#46483F] text-sm tracking-widest uppercase">Since 1980</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* THE ORIGIN */}
        <section className="px-4 sm:px-8 py-32 lg:py-40">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 lg:gap-24">
            {/* Left Image Mask */}
            <div className="w-full md:w-1/2 relative">
              <div className="absolute inset-0 translate-x-4 translate-y-4 sm:translate-x-8 sm:translate-y-8 rounded-full bg-[#EBE8DF]"></div>
              <div className="relative aspect-[4/5] rounded-full overflow-hidden border-8 border-[#FCF9F0]">
                <Image src="/gallery/gallery-plucking.png" alt="Tea Plucking" fill className="object-cover" />
              </div>
            </div>
            {/* Right Content */}
            <div className="w-full md:w-1/2 space-y-8">
              <h2 className="font-serif text-4xl sm:text-5xl leading-tight text-[#1C1C17]">
                Honoring the hands that shape the leaf.
              </h2>
              <p className="font-sans text-lg leading-relaxed text-[#46483F]">
                Our artisanal teas are birthed from the traditional wisdom of Sri Lankan tea farmers. Each harvest reflects a labor-intensive, hand-plucked methodology that ensures only the finest, tender most leaves are selected. We preserve centuries-old techniques to bring out the purity and robust character synonymous with real Ceylon tea.
              </p>
              <Link href="/about" className="inline-block font-sans text-lg transition-opacity hover:opacity-70 border-b pb-1 text-[#1C1C17] border-[#C7C7BC]">
                Discover Our Story &rarr;
              </Link>
            </div>
          </div>
        </section>

        {/* MOST POPULAR PRODUCTS */}
        <section className="px-4 sm:px-8 py-32 lg:py-40">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-serif text-4xl sm:text-5xl text-center mb-16 text-[#1C1C17]">Most Popular</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {/* Product 1 */}
              <Link href="/shop" className="group block cursor-pointer">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-6 flex items-center justify-center p-8 transition-colors bg-[#F6F3EA]">
                  <div className="relative w-full h-full">
                    {/* <Image src="https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&q=80&w=800" alt="Premium Liyonta Pekoe" fill className="object-contain group-hover:scale-105 transition-transform duration-500" /> */}
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-6 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="px-6 py-3 rounded-full text-sm font-medium tracking-wide text-white shadow-lg bg-[#516445]">
                      Quick Add
                    </span>
                  </div>
                </div>
                <h3 className="font-serif text-2xl mb-2 text-[#1C1C17]">Premium Liyonta Pekoe</h3>
                <p className="font-sans mb-3 text-sm text-[#46483F]">Crisp, coppery notes with a bright aroma.</p>
                <p className="font-sans font-medium text-[#1C1C17]">$24.00</p>
              </Link>

              {/* Product 2 */}
              <Link href="/shop" className="group block cursor-pointer">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-6 flex items-center justify-center p-8 transition-colors bg-[#F6F3EA]">
                  <div className="relative w-full h-full">
                    {/* <Image src="https://images.unsplash.com/photo-1594891108256-4b95f1345ac5?auto=format&fit=crop&q=80&w=800" alt="Classic Black Tea" fill className="object-contain group-hover:scale-105 transition-transform duration-500" /> */}
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-6 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="px-6 py-3 rounded-full text-sm font-medium tracking-wide text-white shadow-lg bg-[#516445]">
                      Quick Add
                    </span>
                  </div>
                </div>
                <h3 className="font-serif text-2xl mb-2 text-[#1C1C17]">Classic Black Tea</h3>
                <p className="font-sans mb-3 text-sm text-[#46483F]">Bold, robust, and unmistakable Ceylon character.</p>
                <p className="font-sans font-medium text-[#1C1C17]">$19.00</p>
              </Link>

              {/* Product 3 */}
              <Link href="/shop" className="group block cursor-pointer">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-6 flex items-center justify-center p-8 transition-colors bg-[#F6F3EA]">
                  <div className="relative w-full h-full">
                    {/* <Image src="https://images.unsplash.com/photo-1588675404561-124b873325c4?auto=format&fit=crop&q=80&w=800" alt="Silver Tips White Tea" fill className="object-contain group-hover:scale-105 transition-transform duration-500" /> */}
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-6 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="px-6 py-3 rounded-full text-sm font-medium tracking-wide text-white shadow-lg bg-[#516445]">
                      Quick Add
                    </span>
                  </div>
                </div>
                <h3 className="font-serif text-2xl mb-2 text-[#1C1C17]">Silver Tips White Tea</h3>
                <p className="font-sans mb-3 text-sm text-[#46483F]">Delicate, floral, and meticulously hand-rolled.</p>
                <p className="font-sans font-medium text-[#1C1C17]">$42.00</p>
              </Link>
            </div>
          </div>
        </section>

        {/* FOUNDER QUOTE & IMAGE */}
        <section className="px-4 sm:px-8 py-32 lg:py-40">
          <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden mb-12 border-4 border-[#EBE8DF]">
              <Image src="/MrRonnieLiyanage.png" alt="Ronnie Liyanage" fill className="object-cover" />
            </div>
            <blockquote className="font-serif italic text-3xl sm:text-4xl lg:text-5xl leading-tight mb-12 text-[#1C1C17]">
              &quot;We started Liyonta to bring the world a true taste of Sri Lanka—one that isn&apos;t diluted by mass-market blending, but defined by its origin.&quot;
            </blockquote>
            <div className="flex flex-col items-center space-y-2 mb-12">
              <cite className="font-sans not-italic text-sm tracking-widest font-bold uppercase text-[#1C1C17]">
                MR RONNIE LIYANAGE
              </cite>
              <span className="font-sans text-sm text-[#46483F]">
                Founder, Liyonta Factory
              </span>
            </div>

            {/* Contact Page CTA */}
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-3 rounded-full border border-[#C7C7BC] text-[#1C1C17] font-sans text-sm font-medium tracking-wide hover:bg-[#EBE8DF] transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}