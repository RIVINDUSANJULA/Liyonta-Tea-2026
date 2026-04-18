"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

// --- AUTHENTIC CEYLON TEA GRADES ---
// Formatted with colons so the UI can split the title and description dynamically
const ORTHODOX_TEAS = [
    { name: 'BOP', detail: 'Broken Orange Pekoe: A robust, rich-flavored broken leaf with deep color, ideal for morning blends.' },
    { name: 'BOPF', detail: 'Broken Orange Pekoe Fannings: Neatly made smaller leaves that brew a quick, strong, brisk liquor.' },
    { name: 'OP', detail: 'Orange Pekoe: Long, wiry, slightly twisted leaves without tips. Delicate and highly fragrant.' },
    { name: 'FBOP', detail: 'Flowery Broken Orange Pekoe: Coarser broken leaf with silvery/golden tips. Rich and mellow.' },
    { name: 'Pekoe', detail: 'Pekoe: Short, semi-twisted curly leaves. Brews a light, delicate cup with subtle floral sweetness.' },
    { name: 'Pekoe1', detail: 'Pekoe 1: Similar to Pekoe with a tighter curl. Offers a smooth, mellow, and slightly brisk character.' },
    { name: 'OPA', detail: 'Orange Pekoe A: Bold, long leaf producing a very light, mild, and delicate liquor.' },
    { name: 'OP1', detail: 'Orange Pekoe 1: Refined, tightly rolled wiry leaf. Light liquor with a distinct malty finish.' },
    { name: 'BOP1', detail: 'Broken Orange Pekoe 1: Twisted wiry leaf that brews a golden-red liquor with a crisp finish.' },
    { name: 'FBOP1', detail: 'Flowery Broken Orange Pekoe 1: Long wiry leaves with tips. Sweet and highly aromatic.' },
    { name: 'FBOPF', detail: 'Flowery Broken Orange Pekoe Fannings: Small tips yielding a rich, full-bodied cup.' },
    { name: 'FBOPF1', detail: 'Flowery Broken Orange Pekoe Fannings 1: Low-country leafy grade. Yields a brisk, strong, and highly colored liquor.' },
    { name: 'FBOPFSP', detail: 'Special Flowery Pekoe: Premium short leaf with prominent silver/golden tips.' },
    { name: 'FBOPFEXSP', detail: 'Extra Special: Bursting with pristine tips. Exquisite sweet caramel and honey notes.' },
];

const CTC_TEAS = [
    { name: 'BPS', detail: 'Broken Pekoe Souchong: Even, curly bold granular leaf. Lighter CTC cup with a smooth finish.' },
    { name: 'BP1', detail: 'Broken Pekoe 1: Brownish granular leaf. Brews a strong, thick, and brisk liquor.' },
    { name: 'PF1', detail: 'Pekoe Fannings 1: Black, uniform grains. Delivers a powerfully robust and brisk cup.' },
    { name: 'PF', detail: 'Pekoe Fannings: Grainy leaves ideal for strong blends, producing a deeply colored brew.' },
    { name: 'PD', detail: 'Pekoe Dust: Fine granular grade. Yields an intensely dark and strong liquor instantly.' },
];

// Fallback image paths based on your actual assets
const ASSET_PATHS = [
    '/extra/black-tea.png',
    '/gallery/gallery-pouring.png',
    '/gallery/about-factory.png',
    '/gallery/gallery-estate.png',
    '/gallery/gallery-plucking.png'
];

export default function CollectionsPage() {
    const [selectedTea, setSelectedTea] = useState<{ name: string; detail: string; image: string } | null>(null);

    // Scroll Lock for Modal
    useEffect(() => {
        if (selectedTea) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [selectedTea]);

    return (
        <div className="antialiased bg-[#FCF9F0] text-[#1C1C17] min-h-screen font-sans">

            {/* 1. SENSORY HERO (ARCHIVE INTRO) 
                100% Structural match to screen.jpg's "The Ritual of Breath" Hero 
            */}
            <section className="relative w-full min-h-[90vh] flex items-center justify-center pt-32 pb-20 px-6 md:px-12 bg-[#FCF9F0] overflow-hidden">
                <div className="max-w-7xl mx-auto w-full flex flex-col-reverse md:flex-row items-center relative">

                    {/* Left: Overlapping Glassmorphic Text Card */}
                    <div className="w-full md:w-5/12 relative z-20 mt-[-4rem] md:mt-0 md:-mr-16">
                        <div className="bg-[#FFFFFF]/95 backdrop-blur-xl p-10 md:p-14 rounded-2xl shadow-[0_20px_40px_rgba(28,28,23,0.06)] border border-[#C7C7BC]/10 max-w-lg">
                            <h4 className="font-sans text-[10px] tracking-[0.4em] uppercase text-[#516445] mb-6 font-bold">
                                The Liyonta Archives
                            </h4>
                            <h1 className="font-serif text-5xl md:text-[4rem] leading-[1.05] tracking-tight text-[#1C1C17] mb-6">
                                A Lexicon <br />
                                <span className="italic text-[#869A77]">of Pure Ceylon.</span>
                            </h1>
                            <p className="font-sans text-[#46483F] text-lg leading-relaxed mb-0 max-w-sm">
                                A comprehensive registry of our handpicked leaf grades. From traditional Orthodox rolls to robust CTC grains, each grade represents a specific ritual of taste, color, and strength.
                            </p>
                        </div>
                    </div>

                    {/* Right: Large Asymmetric Image */}
                    <div className="w-full md:w-8/12 relative z-10 flex justify-end">
                        <div className="relative w-full md:w-[90%] h-[500px] md:h-[750px] rounded-[2rem] rounded-tl-[4rem] rounded-br-[4rem] overflow-hidden shadow-xl">
                            <Image
                                src="/extra/estate-hero.png"
                                alt="Vintage Archive"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>

                </div>
            </section>

            {/* 2. ORTHODOX SECTION 
                Uses the #F6F3EA background to shift layers without using 1px borders (No-Line Rule)
            */}
            <section className="py-32 px-6 md:px-12 bg-[#F6F3EA] w-full">
                <div className="max-w-7xl mx-auto mb-16 flex flex-col md:flex-row justify-between items-end gap-8">
                    <div>
                        <h2 className="font-serif text-4xl text-[#1C1C17] mb-4">Orthodox Selection</h2>
                        <p className="font-sans text-[#46483F] text-sm tracking-widest uppercase">Traditional Roll & Twist</p>
                    </div>
                    <div className="text-[#3A4C2F] font-sans text-sm tracking-widest uppercase font-medium border-b border-[#3A4C2F]/30 pb-1">
                        14 Grades
                    </div>
                </div>

                {/* FLEX-WRAP GRID: Centers orphans seamlessly on the last row */}
                <div className="max-w-7xl mx-auto flex flex-wrap justify-center -mx-4">
                    {ORTHODOX_TEAS.map((tea, idx) => (
                        <div
                            key={tea.name}
                            onClick={() => setSelectedTea({ ...tea, image: ASSET_PATHS[idx % ASSET_PATHS.length] })}
                            className="p-4 w-full sm:w-1/2 lg:w-1/4 group cursor-pointer flex flex-col"
                        >
                            {/* Asymmetric Cards Rule: Mixed radii for an organic feel */}
                            <div className="relative w-full aspect-[4/5] bg-[#FFFFFF] rounded-[1.5rem] rounded-bl-[0.5rem] rounded-tr-[0.5rem] overflow-hidden mb-6 shadow-[0_20px_40px_rgba(28,28,23,0.03)] border border-[#C7C7BC]/10">
                                <Image
                                    src={ASSET_PATHS[idx % ASSET_PATHS.length]}
                                    alt={tea.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-[#2C2A22]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                                    <span className="bg-[#FCF9F0] text-[#1C1C17] px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm">
                                        View Specs
                                    </span>
                                </div>
                            </div>
                            <div>
                                <h3 className="font-serif text-2xl text-[#1C1C17] mb-2">{tea.name}</h3>
                                <p className="font-sans text-[#46483F] text-[10px] tracking-[0.2em] uppercase line-clamp-1">
                                    {tea.detail.split(':')[0]}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 3. CTC SECTION 
                Shifts back to #FFFFFF to create section depth naturally
            */}
            <section className="py-32 px-6 md:px-12 bg-[#FFFFFF] w-full">
                <div className="max-w-7xl mx-auto mb-16 flex flex-col md:flex-row justify-between items-end gap-8">
                    <div>
                        <h2 className="font-serif text-4xl text-[#1C1C17] mb-4">CTC Selection</h2>
                        <p className="font-sans text-[#46483F] text-sm tracking-widest uppercase">Crush, Tear, Curl</p>
                    </div>
                    <div className="text-[#3A4C2F] font-sans text-sm tracking-widest uppercase font-medium border-b border-[#3A4C2F]/30 pb-1">
                        5 Grades
                    </div>
                </div>

                <div className="max-w-7xl mx-auto flex flex-wrap justify-center -mx-4">
                    {CTC_TEAS.map((tea, idx) => (
                        <div
                            key={tea.name}
                            onClick={() => setSelectedTea({ ...tea, image: ASSET_PATHS[(idx + 2) % ASSET_PATHS.length] })}
                            className="p-4 w-full sm:w-1/2 lg:w-1/4 group cursor-pointer flex flex-col"
                        >
                            <div className="relative w-full aspect-[4/5] bg-[#F6F3EA] rounded-[1.5rem] rounded-bl-[0.5rem] rounded-tr-[0.5rem] overflow-hidden mb-6 shadow-[0_20px_40px_rgba(28,28,23,0.03)] border border-[#C7C7BC]/10">
                                <Image
                                    src={ASSET_PATHS[(idx + 2) % ASSET_PATHS.length]}
                                    alt={tea.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-[#2C2A22]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                                    <span className="bg-[#FCF9F0] text-[#1C1C17] px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm">
                                        View Specs
                                    </span>
                                </div>
                            </div>
                            <div>
                                <h3 className="font-serif text-2xl text-[#1C1C17] mb-2">{tea.name}</h3>
                                <p className="font-sans text-[#46483F] text-[10px] tracking-[0.2em] uppercase line-clamp-1">
                                    {tea.detail.split(':')[0]}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 4. MODAL QUICK VIEW (35% WIDTH) */}
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
                            initial={{ scale: 0.98, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.98, opacity: 0, y: 20 }}
                            transition={{ type: "spring", duration: 0.5, bounce: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full max-w-md lg:w-[35vw] bg-[#FCF9F0] rounded-[2rem] overflow-hidden shadow-2xl flex flex-col"
                        >
                            <button
                                onClick={() => setSelectedTea(null)}
                                className="absolute top-5 right-5 z-10 w-10 h-10 bg-[#FFFFFF]/80 backdrop-blur-md rounded-full flex items-center justify-center text-[#1C1C17] hover:bg-[#EBE8DF] transition-colors"
                            >
                                <X size={20} strokeWidth={1.5} />
                            </button>

                            <div className="relative w-full aspect-square bg-[#F6F3EA]">
                                <Image src={selectedTea.image} alt={selectedTea.name} fill className="object-cover" />
                            </div>

                            <div className="p-10 text-center">
                                {/* Dynamically splits the data to extract the full name for the top label */}
                                <span className="text-[#516445] text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block">
                                    {selectedTea.detail.split(':')[0]}
                                </span>
                                <h2 className="font-serif text-4xl text-[#1C1C17] mb-6">{selectedTea.name}</h2>
                                <div className="w-12 h-[1px] bg-[#C7C7BC]/50 mx-auto mb-6" />
                                <p className="font-sans text-[#46483F] text-base leading-relaxed">
                                    {selectedTea.detail.split(':')[1]?.trim() || selectedTea.detail}
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}