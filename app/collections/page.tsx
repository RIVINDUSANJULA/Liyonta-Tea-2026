"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

// --- REAL CEYLON TEA GRADING DATA ---
const ORTHODOX_TEAS = [
    { name: 'BOP', detail: 'Well-made, neat leaf of medium size without tips. The most common broken grade, offering a robust, rich flavor and deep color.' },
    { name: 'BOPF', detail: 'Smaller than BOP, neatly made. Brews a quick, strong, and deeply colored liquor ideal for robust morning blends.' },
    { name: 'OP', detail: 'Long, wiry, slightly twisted leaves without tips. Produces a light to medium liquor with a delicate, fragrant character.' },
    { name: 'FBOP', detail: 'Coarser broken leaf with a generous presence of silvery or golden tips. Yields a rich, highly aromatic, and mellow liquor.' },
    { name: 'Pekoe', detail: 'Short, curly, semi-twisted leaves without tips. Brews a light, delicate, and subtly sweet cup with a golden hue.' },
    { name: 'Pekoe1', detail: 'Similar in style to standard Pekoe but with a tighter, smaller curl. Offers a smooth, mellow, and slightly brisk cup.' },
    { name: 'OPA', detail: 'Bold, long leaf ranging from tightly rolled to almost open. Produces a very light, mild, and delicate liquor.' },
    { name: 'OP1', detail: 'Delicate, long, wiry, and tightly rolled leaf. Known for a highly aromatic, light, and refined liquor with a malty finish.' },
    { name: 'BOP1', detail: 'Wiry and twisted leaf, longer than standard BOP. Brews a golden-red liquor with a brisk, crisp, and malty flavor.' },
    { name: 'FBOP1', detail: 'Long, twisted, wiry leaves containing tips. Delivers a mild, sweet, and highly aromatic cup.' },
    { name: 'FBOPF', detail: 'Smaller than FBOP, containing a high proportion of tips. Exceptionally rich, full-bodied, and sweet.' },
    { name: 'FBOPF1', detail: 'Typical low-country leafy grade with a few tips. Yields a brisk, strong, and highly colored liquor.' },
    { name: 'FBOPFSP', detail: 'Premium short leaf with a heavy abundance of silver or golden tips. Exceptionally sweet and aromatic.' },
    { name: 'FBOPFEXSP', detail: 'The highest grade of broken leaf, bursting with pristine silver/golden tips. Exquisite, sweet caramel notes.' },
];

const CTC_TEAS = [
    { name: 'BPS', detail: 'Broken Pekoe Souchong. Even, curly, and bold granular leaf. Produces a relatively lighter CTC cup with a smooth finish.' },
    { name: 'BP1', detail: 'Broken Pekoe 1. Evenly sized, brownish granular leaf. Brews a strong, thick, and brisk liquor with deep color.' },
    { name: 'PF1', detail: 'Pekoe Fannings 1. Black, grainy, and uniform leaves. Delivers a powerfully brisk and robust cup.' },
    { name: 'PF', detail: 'Pekoe Fannings. Similar to PF1 but slightly larger grains. Ideal for blending, producing a strong, deeply colored brew.' },
    { name: 'PD', detail: 'Pekoe Dust. Very fine, granular dust grade. Brews exceedingly fast, yielding a thick, dark, and intensely strong liquor.' },
];

// Fallback image array to give the grid visual variety
const MOCK_IMAGES = [
    '/extra/black-tea.png',
    '/gallery/gallery-pouring.png',
    '/gallery/about-factory.png',
    '/gallery/gallery-estate.png',
    '/gallery/gallery-plucking.png'
];

export default function CollectionsPage() {
    const [selectedTea, setSelectedTea] = useState<{ name: string; detail: string; image: string } | null>(null);

    // Lock body scroll when modal is open
    useEffect(() => {
        if (selectedTea) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [selectedTea]);

    return (
        <div className="antialiased bg-[#FCF9F0] text-[#1C1C17] min-h-screen pb-32">

            {/* 1. INTRO SECTION */}
            <section className="pt-40 pb-20 px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-end border-b border-[#C7C7BC]/30">
                <div className="w-full md:w-2/3">
                    <h4 className="font-sans text-xs tracking-[0.3em] uppercase text-[#516445] mb-6">
                        The Liyonta Archives
                    </h4>
                    <h1 className="font-serif text-5xl md:text-7xl leading-[1.1] text-[#1C1C17] mb-8">
                        A Lexicon <br />
                        <span className="italic text-[#869A77]">of Pure Ceylon.</span>
                    </h1>
                    <p className="font-sans text-lg text-[#46483F] leading-relaxed max-w-xl">
                        From the delicate, wiry leaves of our Orthodox grades to the robust, deeply colored liquors of our CTC selection. Every grade is a testament to the soil, the climate, and the hands that coaxed it into being.
                    </p>
                </div>
            </section>

            {/* 2. ORTHODOX COLLECTION */}
            <section className="py-24 px-6 md:px-12 max-w-screen-2xl mx-auto">
                <div className="mb-16">
                    <h2 className="font-serif text-3xl text-[#1C1C17] mb-2">Orthodox Selection</h2>
                    <p className="font-sans text-[#46483F] text-sm tracking-widest uppercase">Traditional Roll & Twist</p>
                </div>

                {/* 4-Column Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {ORTHODOX_TEAS.map((tea, idx) => {
                        const imageSrc = MOCK_IMAGES[idx % MOCK_IMAGES.length];
                        return (
                            <div
                                key={tea.name}
                                onClick={() => setSelectedTea({ ...tea, image: imageSrc })}
                                className="group cursor-pointer flex flex-col"
                            >
                                <div className="relative w-full aspect-[4/5] bg-[#F6F3EA] rounded-2xl overflow-hidden mb-5 border border-[#C7C7BC]/20">
                                    <Image
                                        src={imageSrc}
                                        alt={tea.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                                    />
                                    <div className="absolute inset-0 bg-[#2C2A22]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[1px]">
                                        <span className="bg-[#FCF9F0]/90 text-[#1C1C17] px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest">
                                            View Details
                                        </span>
                                    </div>
                                </div>
                                <h3 className="font-serif text-xl text-[#1C1C17] mb-1">{tea.name}</h3>
                                <p className="font-sans text-xs text-[#46483F] uppercase tracking-wider">Orthodox Grade</p>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* 3. CTC COLLECTION */}
            <section className="py-24 px-6 md:px-12 max-w-screen-2xl mx-auto border-t border-[#C7C7BC]/30">
                <div className="mb-16">
                    <h2 className="font-serif text-3xl text-[#1C1C17] mb-2">CTC Selection</h2>
                    <p className="font-sans text-[#46483F] text-sm tracking-widest uppercase">Crush, Tear, Curl</p>
                </div>

                {/* 4-Column Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {CTC_TEAS.map((tea, idx) => {
                        const imageSrc = MOCK_IMAGES[(idx + 2) % MOCK_IMAGES.length];
                        return (
                            <div
                                key={tea.name}
                                onClick={() => setSelectedTea({ ...tea, image: imageSrc })}
                                className="group cursor-pointer flex flex-col"
                            >
                                <div className="relative w-full aspect-[4/5] bg-[#F6F3EA] rounded-2xl overflow-hidden mb-5 border border-[#C7C7BC]/20">
                                    <Image
                                        src={imageSrc}
                                        alt={tea.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                                    />
                                    <div className="absolute inset-0 bg-[#2C2A22]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[1px]">
                                        <span className="bg-[#FCF9F0]/90 text-[#1C1C17] px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest">
                                            View Details
                                        </span>
                                    </div>
                                </div>
                                <h3 className="font-serif text-xl text-[#1C1C17] mb-1">{tea.name}</h3>
                                <p className="font-sans text-xs text-[#46483F] uppercase tracking-wider">CTC Grade</p>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* 4. ZEN 35% QUICK VIEW MODAL */}
            <AnimatePresence>
                {selectedTea && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedTea(null)}
                        className="fixed inset-0 z-[999] flex items-center justify-center bg-[#1C1C17]/40 backdrop-blur-md p-4"
                    >
                        <motion.div
                            initial={{ scale: 0.95, y: 20, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            exit={{ scale: 0.95, y: 20, opacity: 0 }}
                            transition={{ type: "spring", duration: 0.5, bounce: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            // w-[35vw] on large screens to hit that ~35% request perfectly
                            className="relative w-full max-w-sm lg:max-w-md lg:w-[35vw] bg-[#FCF9F0] rounded-3xl overflow-hidden shadow-2xl flex flex-col"
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedTea(null)}
                                className="absolute top-4 right-4 z-10 w-10 h-10 bg-[#FCF9F0]/80 backdrop-blur-sm rounded-full flex items-center justify-center text-[#1C1C17] hover:bg-[#EBE8DF] transition-colors"
                            >
                                <X size={20} strokeWidth={1.5} />
                            </button>

                            {/* Modal Image */}
                            <div className="relative w-full aspect-square bg-[#F6F3EA]">
                                <Image
                                    src={selectedTea.image}
                                    alt={selectedTea.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Modal Content - Name & 1 Line Detail */}
                            <div className="p-8 text-center flex flex-col items-center">
                                <span className="text-[#516445] text-[10px] font-bold uppercase tracking-[0.3em] mb-3">
                                    Liyonta Grade
                                </span>
                                <h2 className="font-serif text-4xl text-[#1C1C17] mb-4">
                                    {selectedTea.name}
                                </h2>
                                <div className="w-12 h-[1px] bg-[#C7C7BC] mb-4" />
                                <p className="font-sans text-[#46483F] text-sm leading-relaxed mb-8">
                                    {selectedTea.detail}
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    );
}