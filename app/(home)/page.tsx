import React from 'react';
import Image from 'next/image';

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen pt-20 lg:pt-24">
      {/* B. The Grand Hero Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl text-center">
          <h1 className="font-serif text-6xl md:text-8xl text-forest mb-8 leading-tight">
            Liyonta Tea
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-[#333333] mb-12 leading-relaxed">
            Produced in an award-winning tea factory in the Southern Province of Sri Lanka. We bridge the gap between heritage craftsmanship and the modern tea market.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-sage text-white px-10 py-4 font-medium min-w-[200px] border border-sage transition-none">
              Explore Products
            </button>
            <button className="bg-transparent border border-forest text-forest px-10 py-4 font-medium min-w-[200px] transition-none">
              Our Heritage
            </button>
          </div>

          <div className="mt-20 relative w-full aspect-[21/9] bg-slate-100 overflow-hidden border border-slate-100">
            <Image
              src="/images/estate-hero.png"
              alt="Misty Sri Lankan tea estate in the Southern Province"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* C. The "Origin Story" Section */}
      <section className="py-24 bg-cream overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative aspect-square bg-[#E8E6E0] border border-slate-200 overflow-hidden">
              <Image
                src="/images/origin-story.png"
                alt="Detailed shot of a tea leaf"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-8">
              <h2 className="font-serif text-4xl md:text-5xl text-forest leading-tight">
                From the Southern Hills
              </h2>
              <div className="space-y-6 text-[#333333] tracking-normal leading-relaxed">
                <p>
                  Our Award-Winning Factory is nestled in the heart of the Southern Province, a region celebrated for its unique microclimate and rich soil that imparts a distinct complexity to our leaves. Every leaf is processed with techniques passed down through generations, ensuring the soul of Sri Lankan heritage remains intact.
                </p>
                <p>
                  The warm tropical breeze and the precise elevation of our estate create the perfect atmosphere for slow-growing leaves, resulting in a tea that is not only refreshing but also deeply layered with flavor and tradition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* D. Featured Collections (Product Cards) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <div className="mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-forest mb-4">
              Discover Our Best Blends
            </h2>
            <p className="text-[#333333] max-w-2xl leading-relaxed">
              From rich Black Tea to refreshing Green Tea and our premium Ceylon Tea bags — Liyonta&apos;s most-loved selections are here to elevate every sip.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Card 1: Black Tea */}
            <article className="group space-y-6 border border-transparent">
              <div className="relative aspect-square bg-[#F5F5F5] border border-slate-100 overflow-hidden">
                <Image
                  src="/images/black-tea.png"
                  alt="Black Tea Pack"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-2">
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-sage">Traditional</span>
                <h3 className="text-xl font-bold text-forest">Black Tea</h3>
                <p className="text-sm text-[#555555]">Rich & Bold signature heritage blend.</p>
              </div>
            </article>

            {/* Card 2: Green Tea */}
            <article className="group space-y-6 border border-transparent">
              <div className="relative aspect-square bg-[#F5F5F5] border border-slate-100 overflow-hidden">
                <Image
                  src="/images/green-tea.png"
                  alt="Green Tea Pack"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-2">
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-sage">Wellness</span>
                <h3 className="text-xl font-bold text-forest">Green Tea</h3>
                <p className="text-sm text-[#555555]">Fresh & Antioxidant-rich botanical notes.</p>
              </div>
            </article>

            {/* Card 3: Ceylon Tea Bags */}
            <article className="group space-y-6 border border-transparent">
              <div className="relative aspect-square bg-[#F5F5F5] border border-slate-100 overflow-hidden">
                <Image
                  src="/images/ceylon-tea-bags.png"
                  alt="Ceylon Tea Bags Pack"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-2">
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-sage">Modern Essentials</span>
                <h3 className="text-xl font-bold text-forest">Ceylon Tea Bags</h3>
                <p className="text-sm text-[#555555]">Convenience without compromise on quality.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* E. Brand Values Grid */}
      <section className="py-24 bg-forest text-cream">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { title: "Direct Trade", desc: "Straight from our factory to your cup, ensuring peak freshness." },
              { title: "Ethically Picked", desc: "Supporting and empowering our Southern Province workforce." },
              { title: "100% Pure Ceylon", desc: "Certified origin from the world's most renowned hills." },
              { title: "Eco-Packaging", desc: "Committed to sustainability through biodegradable materials." }
            ].map((value, idx) => (
              <div key={idx} className="space-y-4">
                <div className="w-8 h-[1px] bg-sage"></div>
                <h4 className="text-lg font-bold tracking-tight">{value.title}</h4>
                <p className="text-sm text-cream/70 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* F. The "Tea Master's Note" */}
      <section className="py-32 bg-cream text-center">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="mb-10 text-sage">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="mx-auto opacity-30"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 8.44772 15.017 9V12C15.017 12.5523 14.5693 13 14.017 13H12.017V21H14.017ZM5.01697 21L5.01697 18C5.01697 16.8954 5.91241 16 7.01697 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H7.01697C6.46468 8 6.01697 8.44772 6.01697 9V12C6.01697 12.5523 5.56925 13 5.01697 13H3.01697V21H5.01697Z" /></svg>
          </div>
          <blockquote className="font-serif text-3xl md:text-4xl italic text-forest leading-relaxed mb-8">
            &ldquo;Liyonta Tea represents the perfect harmony between nature&apos;s raw beauty and the precise art of processing. It is the purest expression of the Southern Province.&rdquo;
          </blockquote>
          <cite className="text-xs font-bold uppercase tracking-[0.3em] text-[#1B3022]/60 not-italic">
            Lead Tea Taster, Liyonta Factory
          </cite>
        </div>
      </section>

      {/* G. Detailed Footer */}
      <footer className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
            {/* Column 1: Brand Bio */}
            <div className="space-y-6">
              <div className="text-xl font-bold tracking-[0.2em] text-forest">LIYONTA</div>
              <p className="text-sm text-[#555555] leading-relaxed">
                Elevating the art of tea through heritage, craftsmanship, and a commitment to pure Ceylon excellence. Straight from the Southern Province hills.
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div className="space-y-6">
              <h5 className="text-xs font-bold uppercase tracking-widest text-forest">Collections</h5>
              <ul className="space-y-4 text-sm text-[#555555]">
                <li><a href="#" className="hover:text-sage transition-none">Signature Black</a></li>
                <li><a href="#" className="hover:text-sage transition-none">Botanical Green</a></li>
                <li><a href="#" className="hover:text-sage transition-none">Premium Bags</a></li>
                <li><a href="#" className="hover:text-sage transition-none">Special Reserve</a></li>
              </ul>
            </div>

            {/* Column 3: Support */}
            <div className="space-y-6">
              <h5 className="text-xs font-bold uppercase tracking-widest text-forest">Support</h5>
              <ul className="space-y-4 text-sm text-[#555555]">
                <li><a href="#" className="hover:text-sage transition-none">Our Story</a></li>
                <li><a href="#" className="hover:text-sage transition-none">Shipping & Privacy</a></li>
                <li><a href="#" className="hover:text-sage transition-none">Wholesale Inquiries</a></li>
                <li><a href="#" className="hover:text-sage transition-none">Contact Us</a></li>
              </ul>
            </div>

            {/* Column 4: Newsletter */}
            <div className="space-y-6">
              <h5 className="text-xs font-bold uppercase tracking-widest text-forest">Newsletter</h5>
              <p className="text-sm text-[#555555]">Join our journal for tea-tasting notes and seasonal updates.</p>
              <form className="flex border-b border-forest py-2">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="bg-transparent text-sm w-full outline-none placeholder:text-slate-400"
                />
                <button type="submit" className="text-xs font-bold uppercase tracking-widest text-sage ml-4">
                  Join
                </button>
              </form>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.2em] text-slate-400 pt-10 border-t border-slate-100 space-y-4 md:space-y-0">
            <p>&copy; 2026 Liyonta Tea. All rights reserved.</p>
            <p>Crafted in Sri Lanka</p>
          </div>
        </div>
      </footer>
    </div>
  );
}