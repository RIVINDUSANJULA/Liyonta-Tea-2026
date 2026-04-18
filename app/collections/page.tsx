"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

// --- AUTHENTIC CEYLON TEA GRADES ---
const ORTHODOX_TEAS = [
    { name: 'BOP', detail: 'Broken Orange Pekoe: A robust, rich-flavored broken leaf with deep color, ideal for morning blends.' },
    { name: 'BOPF', detail: 'Broken Orange Pekoe Fannings: Neatly made smaller leaves that brew a quick, strong, brisk liquor.' },
    { name: 'OP', detail: 'Orange Pekoe: Long, wiry, slightly twisted leaves without tips. Delicate and highly fragrant.' },
    { name: 'FBOP', detail: 'Flowery Broken Orange Pekoe: Coarser broken leaf with silvery/golden tips. Rich and mellow.' },
    { name: 'Pekoe', detail: 'Short, semi-twisted curly leaves. Brews a light, delicate cup with subtle floral sweetness.' },
    { name: 'Pekoe1', detail: 'Similar to Pekoe with a tighter curl. Offers a smooth, mellow, and slightly brisk character.' },
    { name: 'OPA', detail: 'Orange Pekoe A: Bold, long leaf producing a very light, mild, and delicate liquor.' },
    { name: 'OP1', detail: 'Orange Pekoe 1: Refined, tightly rolled wiry leaf. Light liquor with a distinct malty finish.' },
    { name: 'BOP1', detail: 'Broken Orange Pekoe 1: Twisted wiry leaf that brews a golden-red liquor with a crisp finish.' },
    { name: 'FBOP1', detail: 'Flowery Broken Orange Pekoe 1: Long wiry leaves with tips. Sweet and highly aromatic.' },
    { name: 'FBOPF', detail: 'Flowery Broken Orange Pekoe Fannings: Small tips yielding a rich, full-bodied cup.' },
    { name: 'FBOPF1', detail: 'Low-country leafy grade. Yields a brisk, strong, and highly colored liquor.' },
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

// Using your exact paths from Screenshot
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
        <div className="antialiased bg-[#FCF9F0] text-[#1C1C17] min-h-screen pb-32 font-body">

            {/* 1. ARCHIVE INTRO SECTION */}
            <section className="pt-40 pb-20 px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center border-b border-[#C7C7BC]/30">
                <div className="w-full md:w-7/12">
                    <h4 className="font-sans text-[10px] tracking-[0.4em] uppercase text-[#516445] mb-6 font-bold">
                        The Liyonta Archives
                    </h4>
                    <h1 className="font-headline text-5xl md:text-7xl leading-[1.1] text-[#1C1C17] mb-8">
                        A Lexicon <br />
                        <span className="italic text-[#869A77]">of Pure Ceylon.</span>
                    </h1>
                    <p className="font-body text-lg text-[#46483F] leading-relaxed max-w-xl">
                        A comprehensive registry of our handpicked leaf grades. From traditional Orthodox rolls to robust CTC grains, each grade represents a specific ritual of taste, color, and strength.
                    </p>
                </div>

                {/* BLUE OLD COLOR BLUR IMAGE */}
                <div className="w-full md:w-5/12 relative aspect-square rounded-[2rem] overflow-hidden border border-[#C7C7BC]/20 shadow-sm">
                    <Image
                        src="/extra/green-tea.png"
                        alt="Vintage Archive"
                        fill
                        className="object-cover blur-[0.1px]"
                        priority
                    />
                </div>
            </section>

            {/* 2. ORTHODOX SECTION */}
            <section className="py-24 px-6 md:px-12 max-w-screen-2xl mx-auto">
                <div className="mb-16 text-center lg:text-left">
                    <h2 className="font-headline text-4xl text-[#1C1C17] mb-2">Orthodox Selection</h2>
                    <p className="font-body text-[#46483F] text-sm tracking-widest uppercase">Traditional Roll & Twist</p>
                </div>

                {/* FLEX-WRAP GRID: This centers orphaned items perfectly */}
                <div className="flex flex-wrap justify-center lg:justify-start -mx-4">
                    {ORTHODOX_TEAS.map((tea, idx) => (
                        <div
                            key={tea.name}
                            onClick={() => setSelectedTea({ ...tea, image: ASSET_PATHS[idx % ASSET_PATHS.length] })}
                            className="p-4 w-full sm:w-1/2 lg:w-1/4 group cursor-pointer"
                        >
                            {/* ASYMMETRIC RADIUS CARD */}
                            <div className="relative w-full aspect-[4/5] bg-[#F6F3EA] rounded-tl-[1.5rem] rounded-br-[1.5rem] rounded-tr-[0.5rem] rounded-bl-[0.5rem] overflow-hidden mb-5 ghost-border">
                                <Image
                                    src={ASSET_PATHS[idx % ASSET_PATHS.length]}
                                    alt={tea.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-[#2C2A22]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                                    <span className="bg-[#FCF9F0] text-[#1C1C17] px-8 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm">
                                        Archive Specs
                                    </span>
                                </div>
                            </div>
                            <h3 className="font-headline text-2xl text-[#1C1C17] mb-1">{tea.name}</h3>
                            <p className="font-body text-xs text-[#46483F] uppercase tracking-[0.2em]">Orthodox Grade</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 3. CTC SECTION */}
            <section className="py-24 px-6 md:px-12 max-w-screen-2xl mx-auto border-t border-[#C7C7BC]/30">
                <div className="mb-16 text-center lg:text-left">
                    <h2 className="font-headline text-4xl text-[#1C1C17] mb-2">CTC Selection</h2>
                    <p className="font-body text-[#46483F] text-sm tracking-widest uppercase">Crush, Tear, Curl</p>
                </div>

                <div className="flex flex-wrap justify-center lg:justify-start -mx-4">
                    {CTC_TEAS.map((tea, idx) => (
                        <div
                            key={tea.name}
                            onClick={() => setSelectedTea({ ...tea, image: ASSET_PATHS[(idx + 2) % ASSET_PATHS.length] })}
                            className="p-4 w-full sm:w-1/2 lg:w-1/4 group cursor-pointer"
                        >
                            <div className="relative w-full aspect-[4/5] bg-[#F6F3EA] rounded-tl-[1.5rem] rounded-br-[1.5rem] rounded-tr-[0.5rem] rounded-bl-[0.5rem] overflow-hidden mb-5 ghost-border">
                                <Image
                                    src={ASSET_PATHS[(idx + 2) % ASSET_PATHS.length]}
                                    alt={tea.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-[#2C2A22]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                                    <span className="bg-[#FCF9F0] text-[#1C1C17] px-8 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm">
                                        Archive Specs
                                    </span>
                                </div>
                            </div>
                            <h3 className="font-headline text-2xl text-[#1C1C17] mb-1">{tea.name}</h3>
                            <p className="font-body text-xs text-[#46483F] uppercase tracking-[0.2em]">CTC Grade</p>
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
                        className="fixed inset-0 z-[999] flex items-center justify-center bg-[#1C1C17]/50 backdrop-blur-xl p-4"
                    >
                        <motion.div
                            initial={{ scale: 0.98, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.98, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            // lg:w-[35vw] matches your ~35% screen request
                            className="relative w-full max-w-md lg:w-[35vw] bg-[#FCF9F0] rounded-[2rem] overflow-hidden shadow-2xl flex flex-col"
                        >
                            <button
                                onClick={() => setSelectedTea(null)}
                                className="absolute top-5 right-5 z-10 w-12 h-12 bg-[#FCF9F0]/80 backdrop-blur-md rounded-full flex items-center justify-center text-[#1C1C17] hover:bg-[#EBE8DF] transition-colors"
                            >
                                <X size={24} strokeWidth={1} />
                            </button>

                            <div className="relative w-full aspect-square bg-[#F6F3EA]">
                                <Image src={selectedTea.image} alt={selectedTea.name} fill className="object-cover" />
                            </div>

                            <div className="p-10 text-center">
                                <span className="text-[#516445] text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">
                                    Grade Specification
                                </span>
                                <h2 className="font-headline text-4xl text-[#1C1C17] mb-6">{selectedTea.name}</h2>
                                <p className="font-body text-[#46483F] text-base leading-relaxed">
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