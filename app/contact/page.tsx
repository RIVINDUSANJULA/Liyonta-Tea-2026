"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Instagram, Facebook } from '@/components/contact/SocialIcons';// Assuming lucide-react or your custom icons

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

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
    <div className="antialiased overflow-x-hidden bg-[#FCF9F0] text-[#1C1C17] font-sans pb-20">
      <main className="flex-grow">

        {/* 1. SENSORY HERO SECTION */}
        <section className="relative w-full min-h-[90vh] flex items-center justify-center pt-32 pb-20 px-6 md:px-12 bg-[#FCF9F0] overflow-hidden">
          <div className="max-w-7xl mx-auto w-full flex flex-col-reverse md:flex-row items-center relative">

            {/* Left: Overlapping Text Card */}
            <div className="w-full md:w-5/12 relative z-20 mt-[-4rem] md:mt-0 md:-mr-16">
              <div className="bg-[#FFFFFF]/95 backdrop-blur-xl p-10 md:p-14 rounded-2xl shadow-[0_20px_40px_rgba(28,28,23,0.06)] border border-[#C7C7BC]/10 max-w-lg">
                <h4 className="font-sans text-[10px] tracking-[0.4em] uppercase text-[#516445] mb-6 font-bold">
                  Connect With Us
                </h4>
                <h1 className="font-serif text-5xl md:text-[4rem] leading-[1.05] tracking-tight text-[#1C1C17] mb-6">
                  Reach Out <br /> <span className="italic text-[#516445]">to Liyonta.</span>
                </h1>
                <p className="font-sans text-[#46483F] text-lg leading-relaxed mb-10 max-w-sm">
                  Whether you are looking for a morning brew or a wholesale partnership, our doors in the Southern Province are always open.
                </p>
                <a href="#contact-form" className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-br from-[#516445] to-[#869A77] text-white font-sans font-medium tracking-wide hover:opacity-90 transition-opacity">
                  Send an Inquiry
                </a>
              </div>
            </div>

            {/* Right: Asymmetric Image */}
            <div className="w-full md:w-8/12 relative z-10 flex justify-end">
              <div className="relative w-full md:w-[90%] h-[500px] md:h-[750px] rounded-[2rem] rounded-tl-[4rem] rounded-br-[4rem] overflow-hidden shadow-xl">
                <Image
                  src="/contact/contact-hero.png"
                  alt="Veranda overlooking a Sri Lankan tea garden"
                  fill
                  className="object-cover contrast-[0.95]"
                  priority
                />
              </div>
            </div>

          </div>
        </section>

        {/* 2. THE INQUIRY SUITE (Nested Depth & Zen Inputs) */}
        <section id="contact-form" className="py-32 bg-[#F6F3EA]">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

              {/* Left Column: Information */}
              <div className="lg:col-span-5 space-y-16 mt-8">
                <div>
                  <h2 className="font-serif text-4xl text-[#1C1C17] mb-10">Our Estate</h2>
                  <div className="space-y-10">
                    <div className="space-y-2">
                      <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#516445]">Physical Address</p>
                      <p className="text-base font-sans text-[#46483F] leading-relaxed">
                        Liyonta Tea Factory,<br />
                        Dangala, Alapaladeniya,<br />
                        Southern Province, Sri Lanka.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#516445]">Global Support</p>
                      <p className="text-base font-sans text-[#46483F]">Customer: liyonta@gmail.com</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#516445]">Operating Hours</p>
                      <p className="text-base font-sans text-[#46483F] italic leading-relaxed">
                        Mon - Sat<br />
                        06:00 AM - 10:00 PM<br />
                        (GMT+5:30)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Zen Form Card */}
              <div className="lg:col-span-7">
                <div className="bg-[#FFFFFF] rounded-3xl p-8 md:p-12 shadow-[0_20px_40px_rgba(28,28,23,0.04)] border border-[#C7C7BC]/10">
                  <form className="space-y-8" onSubmit={handleSubmit}>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Name Input */}
                      <div className="space-y-2 flex flex-col">
                        <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#46483F] ml-1">Full Name</label>
                        <input
                          required
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full bg-[#EBE8DF] px-4 py-3 rounded-t-md border-b-2 border-transparent focus:border-[#516445] outline-none text-sm font-sans text-[#1C1C17] transition-all duration-300"
                        />
                      </div>

                      {/* Email Input */}
                      <div className="space-y-2 flex flex-col">
                        <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#46483F] ml-1">Email Address</label>
                        <input
                          required
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full bg-[#EBE8DF] px-4 py-3 rounded-t-md border-b-2 border-transparent focus:border-[#516445] outline-none text-sm font-sans text-[#1C1C17] transition-all duration-300"
                        />
                      </div>
                    </div>

                    {/* Subject Select */}
                    <div className="space-y-2 flex flex-col">
                      <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#46483F] ml-1">Subject of Inquiry</label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full bg-[#EBE8DF] px-4 py-3 rounded-t-md border-b-2 border-transparent focus:border-[#516445] outline-none text-sm font-sans text-[#1C1C17] transition-all duration-300 cursor-pointer"
                      >
                        <option value="General Feedback">General Feedback</option>
                        <option value="Wholesale/Partnership">Wholesale/Partnership</option>
                        <option value="Order Tracking">Order Tracking</option>
                        <option value="Press & Media">Press & Media</option>
                      </select>
                    </div>

                    {/* Message Textarea */}
                    <div className="space-y-2 flex flex-col">
                      <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#46483F] ml-1">Message</label>
                      <textarea
                        required
                        rows={5}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full bg-[#EBE8DF] px-4 py-3 rounded-t-md border-b-2 border-transparent focus:border-[#516445] outline-none text-sm font-sans text-[#1C1C17] resize-none transition-all duration-300"
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="w-full bg-gradient-to-br from-[#516445] to-[#869A77] text-white rounded-full py-4 uppercase tracking-[0.2em] text-[11px] font-bold transition-opacity hover:opacity-90 mt-4 shadow-sm">
                      Send Global Inquiry
                    </button>
                  </form>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 3. SOUTHERN PROVINCE MAP (Asymmetric Shapes) */}
        <section className="py-32 bg-[#FCF9F0]">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl text-[#1C1C17] mb-4">The Heart of Sri Lankan Tea</h2>
              <p className="font-sans text-[#46483F] text-sm tracking-widest uppercase">Our Location</p>
            </div>

            {/* Asymmetric Map Container */}
            <div className="relative aspect-[4/3] md:aspect-[21/9] bg-[#EBE8DF] rounded-[2rem] rounded-tl-[4rem] rounded-br-[4rem] overflow-hidden mb-16 shadow-[0_20px_40px_rgba(28,28,23,0.06)] border border-[#C7C7BC]/20">
              <iframe
                src="https://maps.google.com/maps?q=Liyonta%20Tea%20Factory&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Liyonta Tea Factory Location"
                className="grayscale-[0.3] contrast-[0.95] hover:grayscale-0 transition-all duration-700"
              ></iframe>
            </div>

            {/* Location Highlights (Editorial Rhythm) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <div className="space-y-3">
                <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#1C1C17]">Heritage Access</h4>
                <p className="text-sm font-sans text-[#46483F] leading-relaxed max-w-xs mx-auto">Located in Alapaladeniya, approx. 78km from the historic Galle Fort.</p>
              </div>
              <div className="space-y-3">
                <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#1C1C17]">Elevation</h4>
                <p className="text-sm font-sans text-[#46483F] leading-relaxed max-w-xs mx-auto">Low-grown excellence near the lush Kalubowitiyana and Deniyaya ranges.</p>
              </div>
              <div className="space-y-3">
                <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#1C1C17]">Global Gateway</h4>
                <p className="text-sm font-sans text-[#46483F] leading-relaxed max-w-xs mx-auto">Exported globally via the Port of Colombo, the primary tea hub of South Asia.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. SOCIAL & COMMUNITY (Small, refined padding) */}
        <section className="py-12 bg-[#F6F3EA] border-t border-[#C7C7BC]/20">
          <div className="container mx-auto px-6 max-w-screen-xl">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#516445] mb-10 text-center">
              Connect With Liyonta
            </h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
              {[
                { name: "Instagram", icon: <Instagram size={24} strokeWidth={1.5} />, href: "https://instagram.com/LIYONTAOFFICIAL" },
                { name: "Facebook", icon: <Facebook size={24} strokeWidth={1.5} />, href: "https://facebook.com/LIYONTAOFFICIAL" }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center space-y-3 text-[#516445] hover:text-[#869A77] transition-all duration-300"
                >
                  <div className="p-4 rounded-full border border-[#C7C7BC]/30 group-hover:border-[#869A77] group-hover:bg-[#869A77]/10 transition-all">
                    {social.icon}
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#1C1C17]">{social.name}</span>
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