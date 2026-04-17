import Link from 'next/link';
import Image from 'next/image';
import { Leaf, ShieldCheck, Award, Gem, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <main className="w-full bg-[#F5F0E8] overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] flex flex-col md:flex-row">
        {/* Left Side: Details & Link to About */}
        <Link
          href="/about"
          className="w-full md:w-1/2 flex flex-col justify-center items-start px-8 md:px-16 lg:px-24 py-20 bg-charcoal text-cream hover:bg-charcoal/95 transition-colors cursor-pointer group"
        >
          <span className="text-gold uppercase tracking-[0.2em] text-xs font-bold mb-6 block">
            Discover Our Roots
          </span>
          <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-tight">
            The Heritage <br />
            <span className="italic text-gold">of Ceylon</span>
          </h1>
          <p className="text-cream/60 max-w-md mb-8 leading-relaxed">
            Every leaf tells a story. Journey through our historic estates and discover the meticulous craft behind the world's finest tea.
          </p>
          <div className="flex items-center gap-4 text-xs uppercase tracking-widest font-bold text-gold group-hover:text-cream transition-colors">
            Read Our Story <ArrowRight size={16} />
          </div>
        </Link>

        {/* Right Side: Image */}
        <div className="w-full md:w-1/2 relative min-h-[50vh] md:min-h-full">
          {/* Note: Ensure you have next/image configured or replace with a standard img tag if preferred */}
          <div className="absolute inset-0 bg-[#2C2A22]/10 z-10" /> {/* Subtle overlay */}
          <Image
            src="/extra/estate-hero.png"
            alt="Liyonta Tea Estate"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* 2. FEATURES SECTION (Provided Code) */}
      <section className="bg-paleBeige border-y border-charcoal/10 py-16">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Leaf, title: "Single Origin", sub: "100% Pure Ceylon" },
              { icon: ShieldCheck, title: "Ethically Sourced", sub: "Direct from farms" },
              { icon: Award, title: "Award Winning", sub: "Global recognition" },
              { icon: Gem, title: "Premium Quality", sub: "Hand-picked leaves" }
            ].map((feature, i) => (
              <div key={i} className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center">
                  <feature.icon className="text-gold" size={28} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-charcoal font-bold text-sm uppercase tracking-widest mb-1">{feature.title}</h4>
                  <p className="text-olive text-sm">{feature.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. GALLERY TEASER SECTION */}
      <section className="py-24 px-6 container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-serif text-charcoal">
              Visual <span className="text-olive italic">Journey</span>
            </h2>
          </div>
          <Link
            href="/gallery"
            className="text-xs uppercase tracking-widest font-bold text-olive border-b border-olive/30 hover:text-charcoal hover:border-charcoal pb-1 transition-colors"
          >
            View Full Gallery
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="aspect-square bg-white border border-charcoal/5 relative overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 bg-charcoal/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
                <span className="text-cream text-xs uppercase tracking-widest font-bold">View</span>
              </div>
              <div className="w-full h-full flex items-center justify-center text-olive/30 border-2 border-dashed border-olive/20 m-2 rounded">
                Image {i}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. CERTIFICATIONS MARQUEE */}
      <section className="py-20 bg-white border-y border-charcoal/10 overflow-hidden relative">
        <div className="text-center mb-10">
          <span className="text-olive uppercase tracking-widest text-xs font-bold">Our Certifications</span>
        </div>

        {/* We use inline styles for the keyframes to ensure it works instantly without touching globals.css */}
        <style dangerouslySetInnerHTML={{
          __html: `
          @keyframes marquee-rtl { 0% { transform: translateX(0%); } 100% { transform: translateX(-50%); } }
          @keyframes marquee-ltr { 0% { transform: translateX(-50%); } 100% { transform: translateX(0%); } }
          .animate-marquee-rtl { animation: marquee-rtl 25s linear infinite; }
          .animate-marquee-ltr { animation: marquee-ltr 25s linear infinite; }
          .pause-on-hover:hover { animation-play-state: paused; cursor: grab; }
          .pause-on-hover:active { cursor: grabbing; }
        `}} />

        <div className="flex flex-col gap-8">
          {/* Row 1: Right to Left */}
          <div className="flex w-[200%] animate-marquee-rtl pause-on-hover">
            <div className="flex gap-16 px-8 items-center w-1/2 justify-around">
              {[1, 2, 3, 4, 5, 6].map(i => <div key={i} className="h-16 w-32 bg-paleBeige flex items-center justify-center text-olive/50 text-xs font-bold border border-olive/10">CERT {i}</div>)}
            </div>
            <div className="flex gap-16 px-8 items-center w-1/2 justify-around">
              {[1, 2, 3, 4, 5, 6].map(i => <div key={`dup-${i}`} className="h-16 w-32 bg-paleBeige flex items-center justify-center text-olive/50 text-xs font-bold border border-olive/10">CERT {i}</div>)}
            </div>
          </div>

          {/* Row 2: Left to Right */}
          <div className="flex w-[200%] animate-marquee-ltr pause-on-hover">
            <div className="flex gap-16 px-8 items-center w-1/2 justify-around">
              {[7, 8, 9, 10, 11, 12].map(i => <div key={i} className="h-16 w-32 bg-paleBeige flex items-center justify-center text-olive/50 text-xs font-bold border border-olive/10">CERT {i}</div>)}
            </div>
            <div className="flex gap-16 px-8 items-center w-1/2 justify-around">
              {[7, 8, 9, 10, 11, 12].map(i => <div key={`dup-${i}`} className="h-16 w-32 bg-paleBeige flex items-center justify-center text-olive/50 text-xs font-bold border border-olive/10">CERT {i}</div>)}
            </div>
          </div>

          {/* Row 3: Right to Left */}
          <div className="flex w-[200%] animate-marquee-rtl pause-on-hover" style={{ animationDuration: '30s' }}>
            <div className="flex gap-16 px-8 items-center w-1/2 justify-around">
              {[13, 14, 15, 16, 17, 18].map(i => <div key={i} className="h-16 w-32 bg-paleBeige flex items-center justify-center text-olive/50 text-xs font-bold border border-olive/10">CERT {i}</div>)}
            </div>
            <div className="flex gap-16 px-8 items-center w-1/2 justify-around">
              {[13, 14, 15, 16, 17, 18].map(i => <div key={`dup-${i}`} className="h-16 w-32 bg-paleBeige flex items-center justify-center text-olive/50 text-xs font-bold border border-olive/10">CERT {i}</div>)}
            </div>
          </div>
        </div>
      </section>

      {/* 5. SIGNATURE BLENDS (Provided Code) */}
      <section className="py-24 bg-lightBeige relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="text-olive uppercase tracking-widest text-xs font-bold mb-4 inline-block">The Selection</span>
              <h2 className="text-4xl md:text-5xl font-serif text-charcoal">
                Our Signature <span className="text-olive italic">Blends</span>
              </h2>
            </div>

            <div className="flex gap-2 pb-2">
              {['All', 'Black Tea', 'Green Tea', 'White Tea'].map((cat, i) => (
                <button
                  key={i}
                  className={`px-6 py-2 text-xs font-bold uppercase tracking-widest border transition-colors ${i === 0
                    ? 'border-charcoal bg-charcoal text-cream'
                    : 'border-olive text-olive hover:border-charcoal hover:text-charcoal'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-cardBg group relative">
                {/* Image Wrapper */}
                <div className="bg-lightBeige aspect-[4/5] relative overflow-hidden flex items-center justify-center w-full border border-charcoal/5">
                  {/* Badge */}
                  {item === 1 && (
                    <div className="absolute top-4 left-4 bg-gold text-charcoal text-[10px] font-bold uppercase tracking-widest px-3 py-1 z-10">
                      New Release
                    </div>
                  )}
                  {item === 2 && (
                    <div className="absolute top-4 left-4 bg-charcoal text-cream text-[10px] font-bold uppercase tracking-widest px-3 py-1 z-10">
                      Bestseller
                    </div>
                  )}

                  {/* Mock Image Placeholder */}
                  <div className="w-48 h-64 border-2 border-dashed border-olive/30 flex flex-col items-center justify-center text-olive/50">
                    <span className="text-xs uppercase tracking-widest">Image {item}</span>
                  </div>

                  {/* Quick Add Overlay */}
                  <div className="absolute inset-0 bg-charcoal/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                    <button className="translate-y-4 group-hover:translate-y-0 transition-all bg-charcoal text-cream px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-gold hover:text-charcoal border border-transparent">
                      Quick Add
                    </button>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-serif text-charcoal">Premium Blend {item}</h3>
                    <span className="text-charcoal font-medium">$24.00</span>
                  </div>
                  <p className="text-olive text-sm mb-4">A delicate composition of young tea shoots, carefully oxidized for a mild, floral cup.</p>
                  <div className="flex gap-2">
                    <span className="text-[10px] uppercase border border-gold text-olive px-2 py-1 tracking-wider font-bold">100g</span>
                    <span className="text-[10px] uppercase border border-gold text-olive px-2 py-1 tracking-wider font-bold">Loose Leaf</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CONTACT US TEASER */}
      <section className="py-24 bg-charcoal text-center px-6">
        <div className="max-w-2xl mx-auto flex flex-col items-center">
          <Leaf className="text-gold mb-6" size={32} strokeWidth={1} />
          <h2 className="text-4xl md:text-5xl font-serif text-cream mb-6">
            Have a Question for Our <span className="text-gold italic">Tea Masters?</span>
          </h2>
          <p className="text-cream/60 mb-10 text-sm">
            Whether you need help selecting the perfect blend or want to learn more about our wholesale opportunities, our team is here to assist you.
          </p>
          <Link
            href="/contact"
            className="bg-gold text-charcoal px-10 py-4 text-xs font-bold uppercase tracking-widest hover:bg-cream transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}