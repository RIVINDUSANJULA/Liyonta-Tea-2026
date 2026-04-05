import React from 'react';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#fdfbf7] text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-6 text-center max-w-4xl relative z-10">
          <h1 className="text-5xl md:text-7xl font-semibold text-green-900 mb-6 tracking-tight">
            Liyonta Tea
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-10 leading-relaxed max-w-2xl mx-auto">
            Liyonta Tea is produced in an award-winning tea factory in Southern province in Sri Lanka to bring a quality product to the tea market.
          </p>
          <div className="flex justify-center">
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-colors duration-200">
              Explore Products
            </button>
          </div>
        </div>

        {/* Hero Image Container */}
        <div className="mt-16 container mx-auto px-6 max-w-5xl">
          <div className="relative aspect-[21/9] rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
            <Image
              src="/images/hero.png"
              alt="Liyonta Tea Plantation"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Feature / Product Highlight Section */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6 max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-green-900 mb-4">
            Discover Our Best Blends
          </h2>
          <p className="text-gray-600 mb-16 max-w-2xl mx-auto text-lg leading-relaxed">
            Discover the blends everyone keeps coming back for! 🍃 <br />
            From rich Black Tea to refreshing Green Tea and our premium Ceylon Tea bags — Liyonta&apos;s most-loved selections are here to elevate every sip.
          </p>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {/* Black Tea Card */}
            <div className="group border border-gray-100 rounded-2xl p-4 bg-[#fcfaf7] hover:border-green-200 transition-colors">
              <div className="relative aspect-square rounded-xl overflow-hidden mb-6 border border-gray-200">
                <Image
                  src="/images/black-tea.png"
                  alt="Black Tea"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-green-900 mb-2">Black Tea</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Experience the bold, full-bodied flavor of our traditional Ceylon black tea.
              </p>
            </div>

            {/* Green Tea Card */}
            <div className="group border border-gray-100 rounded-2xl p-4 bg-[#fcfaf7] hover:border-green-200 transition-colors">
              <div className="relative aspect-square rounded-xl overflow-hidden mb-6 border border-gray-200">
                <Image
                  src="/images/green-tea.png"
                  alt="Green Tea"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-green-900 mb-2">Green Tea</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Light, refreshing, and packed with antioxidants from our emerald fields.
              </p>
            </div>

            {/* Ceylon Tea Bags Card */}
            <div className="group border border-gray-100 rounded-2xl p-4 bg-[#fcfaf7] hover:border-green-200 transition-colors">
              <div className="relative aspect-square rounded-xl overflow-hidden mb-6 border border-gray-200">
                <Image
                  src="/images/ceylon-tea-bags.png"
                  alt="Ceylon Tea Bags"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-green-900 mb-2">Ceylon Tea Bags</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Convenient and premium bags for the perfect cup of tea anytime, anywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer-like whitespace for clean ending as requested */}
      <div className="py-12 bg-white"></div>
    </div>
  );
}
