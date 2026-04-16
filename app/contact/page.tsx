"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Instagram, Facebook } from 'lucide-react';

// Define the shape of our form data for TypeScript
interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactPage() {
  // --- Form State & Handlers ---
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "General Feedback",
    message: "",
  });

  // Type the 'e' as a ChangeEvent for inputs, selects, and textareas
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Type the 'e' as a FormEvent
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const mailTo = "liyonta@gmail.com";
    const emailSubject = encodeURIComponent(formData.subject);

    const emailBody = encodeURIComponent(
      `Full Name: ${formData.name}\nEmail Address: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:${mailTo}?subject=${emailSubject}&body=${emailBody}`;
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FDFCF8] text-slate-900 font-sans pt-20 lg:pt-24">
      <main className="flex-grow">
        {/* A. The "Tea Garden" Contact Hero */}
        <section className="py-24 bg-white border-b border-slate-100">
          <div className="container mx-auto px-6 max-w-screen-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h1 className="font-serif text-5xl md:text-6xl text-slate-900 leading-tight">
                  Reach Out to Liyonta
                </h1>
                <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
                  Whether you are looking for a morning brew or a wholesale partnership, our doors in the Southern Province are always open. We are here to bring the finest Ceylon tea to your doorstep.
                </p>
                <a href="#contact-form" className="inline-block text-xs font-bold uppercase tracking-widest text-green-600 border-b border-green-600 pb-1">
                  Scroll to Form ↓
                </a>
              </div>
              <div className="relative aspect-[4/3] bg-[#F5F5F5] border border-slate-200 overflow-hidden">
                <Image
                  src="/images/contact-hero.png"
                  alt="Veranda overlooking a Sri Lankan tea garden"
                  fill
                  className="object-cover contrast-[0.95]"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* B. The Dual-Channel Communication Hub */}
        <section id="contact-form" className="py-24 bg-[#FDFCF8]">
          <div className="container mx-auto px-6 max-w-screen-xl">
            <div className="grid grid-cols-12 gap-12 lg:gap-24">
              {/* Left Column: Information */}
              <div className="col-span-12 lg:col-span-5 space-y-16">
                <div>
                  <h2 className="font-serif text-3xl text-slate-900 mb-8 border-b border-slate-200 pb-4">Our Estate</h2>
                  <div className="space-y-6">
                    <div className="space-y-1">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-green-600">Physical Address</p>
                      <p className="text-sm text-slate-700 leading-loose">
                        Liyonta Tea Factory,<br />
                        Dangala,<br />
                        Alapaladeniya,<br />
                        Southern Province, Sri Lanka.
                      </p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-green-600">Global Support</p>
                      <p className="text-sm text-slate-700 font-medium">Customer: liyonta@gmail.com</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-green-600">Operating Hours</p>
                      <p className="text-sm text-slate-700 italic">
                        Mon - Sat<br />
                        06:00 AM - 10:00 PM<br />
                        (GMT+5:30)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: The Inquiry Suite (Integrated Form) */}
              <div className="col-span-12 lg:col-span-7">
                <div className="bg-white border border-slate-200 p-8 md:p-12">
                  <form className="space-y-8" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Full Name</label>
                        <input
                          required
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full bg-transparent border-b border-slate-200 py-2 outline-none text-sm focus:border-green-600"
                        />
                      </div>
                      {/* BUG FIX: Re-added the missing Email field */}
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Email Address</label>
                        <input
                          required
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full bg-transparent border-b border-slate-200 py-2 outline-none text-sm focus:border-green-600"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Subject of Inquiry</label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-slate-200 py-2 outline-none text-sm focus:border-green-600 appearance-none"
                      >
                        <option value="General Feedback">General Feedback</option>
                        <option value="Wholesale/Partnership">Wholesale/Partnership</option>
                        <option value="Order Tracking">Order Tracking</option>
                        <option value="Press & Media">Press & Media</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Message</label>
                      <textarea
                        required
                        rows={4}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-slate-200 py-2 outline-none text-sm focus:border-green-600 resize-none"
                      ></textarea>
                    </div>

                    <button type="submit" className="w-full bg-green-600 text-white font-bold py-4 uppercase tracking-[0.2em] text-xs transition-colors hover:bg-slate-900">
                      Send Global Inquiry
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* C. Wholesale & Export Detail Section */}
        <aside className="bg-slate-900 py-12 text-white">
          <div className="container mx-auto px-6 max-w-screen-xl">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
              <div className="max-w-2xl text-center lg:text-left">
                <p className="text-lg font-serif">Interested in sourcing Liyonta Tea for your cafe or retail chain?</p>
                <p className="text-sm text-slate-400 mt-2">Our award-winning factory handles bulk shipping to over 20 countries with guaranteed peak freshness.</p>
              </div>
              <button className="bg-white text-slate-900 border border-white px-8 py-3 text-[10px] font-bold uppercase tracking-widest transition-none hover:bg-transparent hover:text-white">
                Download Product Catalog
              </button>
            </div>
          </div>
        </aside>

        {/* D. The "Southern Province" Map/Visual Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 max-w-screen-xl">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 mb-8 block text-center lg:text-left">
              Our Location: The Heart of Sri Lankan Tea
            </h2>

            {/* Map Container */}
            <div className="relative aspect-[16/9] md:aspect-[21/9] bg-[#F9F9F9] border border-slate-200 overflow-hidden mb-12">
              {/* BUG FIX: Replaced placeholder URL with a working Google Maps embed URL */}
              <iframe
                src="https://maps.google.com/maps?q=Liyonta%20Tea%20Factory,%20Sri%20Lanka&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Liyonta Tea Factory Location"
                className="grayscale-[0.2] contrast-[0.9] hover:grayscale-0 transition-all duration-500"
              ></iframe>
            </div>

            {/* Location Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-900">Heritage Access</h4>
                <p className="text-sm text-slate-600">85km from UNESCO Galle Fort</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-900">Elevation</h4>
                <p className="text-sm text-slate-600">Proximity to Deniyaya Hills Range</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-900">Global Gateway</h4>
                <p className="text-sm text-slate-600">Port of Export: Colombo International</p>
              </div>
            </div>
          </div>
        </section>

        {/* E. FAQ "Quick Help" Grid */}
        <section className="py-24 bg-[#FDFCF8] border-t border-slate-200">
          <div className="container mx-auto px-6 max-w-screen-xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
              <div className="space-y-4">
                <h4 className="font-serif text-xl text-slate-900">Shipping Times</h4>
                <p className="text-sm text-slate-600 leading-relaxed">International orders typically arrive within 7-12 business days via air freight from Colombo.</p>
              </div>
              <div className="space-y-4">
                <h4 className="font-serif text-xl text-slate-900">Organic Status</h4>
                <p className="text-sm text-slate-600 leading-relaxed">We use strictly organic-first practices and traditional techniques passed down through generations.</p>
              </div>
              <div className="space-y-4">
                <h4 className="font-serif text-xl text-slate-900">Tea Storage</h4>
                <p className="text-sm text-slate-600 leading-relaxed">Store in a cool, dark place within our airtight canisters to preserve the essential oils for up to 18 months.</p>
              </div>
            </div>
          </div>
        </section>

        {/* F. Social & Community Links */}
        <section className="py-24 bg-white border-t border-slate-100">
          <div className="container mx-auto px-6 max-w-screen-xl">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400 mb-16 text-center">
              Connect With Liyonta
            </h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24">
              {[
                { 
                  name: "Instagram", 
                  user: "@LIYONTAOFFICIAL", 
                  icon: <Instagram size={32} />, 
                  href: "https://instagram.com/LIYONTAOFFICIAL" 
                },
                { 
                  name: "Facebook", 
                  user: "@LIYONTAOFFICIAL", 
                  icon: <Facebook size={32} />, 
                  href: "https://facebook.com/LIYONTAOFFICIAL" 
                }
              ].map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.href} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center space-y-4 text-slate-400 hover:text-green-600 transition-all duration-300"
                >
                  <div className="p-6 rounded-full border border-slate-100 group-hover:border-green-600/30 group-hover:bg-green-50/50 transition-all">
                    {social.icon}
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em]">{social.name}</span>
                    <span className="text-sm font-medium text-slate-900 mt-1">{social.user}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}