"use client";

import { useState, useMemo } from "react";
import { DEGREES } from "@/lib/data";

export const Degrees = () => {
    const [activeFilter, setActiveFilter] = useState("all");

    // Filter logic
    const filteredDegrees = useMemo(() => {
        if (activeFilter === 'all') return DEGREES;
        if (activeFilter === 'bach') return DEGREES.filter(d => d.level === 'Bachelor');
        if (activeFilter === 'mast') return DEGREES.filter(d => d.level === 'Master');
        if (activeFilter === 'doct') return DEGREES.filter(d => d.level === 'Doctorate');
        if (activeFilter === 'cert') return DEGREES.filter(d => d.level === 'Cert');
        return DEGREES;
    }, [activeFilter]);

    return (
        <div id="page-degrees" className="page active pt-[62px] min-h-screen bg-[#0a1628]">
            <section className="deg-hero bg-[#060e1e] px-8 md:px-12 py-16 md:py-20 text-center relative overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-1000">
                <div className="absolute inset-0 bg-radial-gradient from-gold/15 via-transparent to-transparent opacity-40 pointer-events-none"></div>
                <div className="relative z-10 max-w-[900px] mx-auto">
                    <div className="deg-hero-kicker text-[10.5px] font-bold tracking-[2.5px] uppercase text-gold3 mb-4">IKON SKILLS™ Stackable Degrees</div>
                    <h1 className="deg-hero-h font-serif font-bold text-[36px] md:text-[48px] text-white leading-tight mb-4 ml-0">59 Degree Programs.<br />Built from Micro-Credentials.</h1>
                    <p className="deg-hero-sub text-[15px] text-white/70 max-w-[620px] mx-auto mb-10 leading-relaxed font-medium">
                        Every degree is assembled from verified IKON SKILLS™ Micro-Credentials. Stack your credentials. Earn your qualification. No traditional lectures required.
                    </p>

                    <div className="deg-stat-row flex flex-wrap justify-center gap-10 md:gap-16">
                        {[
                            { n: '59', l: 'Degree Programs' },
                            { n: '56', l: 'EIU-Paris Degrees' },
                            { n: '3', l: 'Education Degrees' },
                            { n: '3', l: 'Brand Certifications' }
                        ].map((stat, i) => (
                            <div key={i} className="deg-stat">
                                <div className="deg-stat-n font-serif text-[34px] font-bold text-gold3 leading-none mb-1">{stat.n}</div>
                                <div className="deg-stat-l text-[9.5px] text-white/45 tracking-[1.5px] uppercase font-mono">{stat.l}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <div className="deg-body max-w-[1200px] mx-auto px-8 md:px-12 py-12 md:py-16">
                <div className="deg-controls flex flex-wrap items-center gap-2 mb-10 bg-white/5 border border-white/10 rounded-2xl p-4 animate-in fade-in slide-in-from-left-4 duration-700">
                    <button
                        className={`deg-tab flex-1 md:flex-none px-5 py-2.5 rounded-lg text-[13px] font-bold transition-all border ${activeFilter === 'all' ? 'bg-gold border-gold text-white' : 'bg-white/5 border-white/15 text-white/75 hover:bg-gold/15 hover:border-gold/30 hover:text-white'}`}
                        onClick={() => setActiveFilter('all')}
                    >
                        All Programs
                    </button>
                    <button
                        className={`deg-tab flex-1 md:flex-none px-5 py-2.5 rounded-lg text-[13px] font-bold transition-all border ${activeFilter === 'bach' ? 'bg-gold border-gold text-white' : 'bg-white/5 border-white/15 text-white/75 hover:bg-gold/15 hover:border-gold/30 hover:text-white'}`}
                        onClick={() => setActiveFilter('bach')}
                    >
                        Bachelor
                    </button>
                    <button
                        className={`deg-tab flex-1 md:flex-none px-5 py-2.5 rounded-lg text-[13px] font-bold transition-all border ${activeFilter === 'mast' ? 'bg-gold border-gold text-white' : 'bg-white/5 border-white/15 text-white/75 hover:bg-gold/15 hover:border-gold/30 hover:text-white'}`}
                        onClick={() => setActiveFilter('mast')}
                    >
                        Master
                    </button>
                    <button
                        className={`deg-tab flex-1 md:flex-none px-5 py-2.5 rounded-lg text-[13px] font-bold transition-all border ${activeFilter === 'doct' ? 'bg-gold border-gold text-white' : 'bg-white/5 border-white/15 text-white/75 hover:bg-gold/15 hover:border-gold/30 hover:text-white'}`}
                        onClick={() => setActiveFilter('doct')}
                    >
                        Doctorate
                    </button>
                    <button
                        className={`deg-tab flex-1 md:flex-none px-5 py-2.5 rounded-lg text-[13px] font-bold transition-all border ${activeFilter === 'cert' ? 'bg-gold border-gold text-white' : 'bg-white/5 border-white/15 text-white/75 hover:bg-gold/15 hover:border-gold/30 hover:text-white'}`}
                        onClick={() => setActiveFilter('cert')}
                    >
                        Professional Certificates
                    </button>
                    <span className="deg-count text-[11px] text-white/40 font-mono ml-auto pl-4 opacity-60">{filteredDegrees.length} programs found</span>
                </div>

                <div className="deg-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
                    {filteredDegrees.map(deg => (
                        <div key={deg.id} className="deg-card group bg-white/5 border border-white/10 rounded-2xl overflow-hidden flex flex-col transition-all hover:-translate-y-2 hover:border-gold/50 hover:shadow-2xl hover:shadow-gold/10">
                            <div className="deg-card-top flex items-center gap-2 p-4 bg-white/3 border-b border-white/10 flex-wrap">
                                <div className={`deg-badge text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-[0.5px] font-mono ${deg.partner === 'TWBF' ? 'bg-[#f06070]/15 text-[#f06070] border border-[#f06070]/40' : 'bg-[#1B5FA8]/15 text-[#7ec8f0] border border-[#1B5FA8]/40'}`}>
                                    {deg.level}
                                </div>
                                <div className="deg-pb text-[9px] font-mono font-bold text-white/35 ml-auto uppercase tracking-[0.5px]">EIU-Paris Verified</div>
                            </div>
                            <div className="deg-card-body p-5 flex-1 flex flex-col">
                                <h3 className="deg-title font-serif text-[17.5px] font-bold text-white leading-tight mb-2 group-hover:text-gold transition-colors">{deg.name}</h3>
                                <div className="deg-domain text-[11px] font-bold text-gold tracking-[0.5px] mb-4">Core Track: Professional Education</div>
                                <div className="deg-meta flex flex-wrap gap-2 mt-auto">
                                    <div className="deg-pill bg-white/10 text-white/80 text-[10px] font-bold px-2 py-0.5 rounded-[4px] font-mono">{deg.mc_count} MCs</div>
                                    <div className="deg-pill bg-white/10 text-white/80 text-[10px] font-bold px-2 py-0.5 rounded-[4px] font-mono">{deg.ects} ECTS</div>
                                    <div className="deg-pill bg-white/15 text-white text-[10px] font-bold px-2 py-0.5 rounded-[4px] font-mono">EQF {deg.eqf}</div>
                                </div>
                            </div>
                            <div className="deg-card-foot p-5 pt-0">
                                <button className="deg-cta w-full bg-gold/10 border-1.5 border-gold/30 text-gold text-[13px] font-bold py-2.5 rounded-xl hover:bg-gold hover:text-white transition-all shadow-lg active:translate-y-1">
                                    View Degree Pathway →
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <section className="deg-qa-band bg-[#060e1e] py-16 md:py-20 text-center px-8 md:px-12 border-t border-white/10">
                <div className="deg-qa-inner max-w-[800px] mx-auto animate-in fade-in duration-1000">
                    <h2 className="deg-qa-h font-serif text-[28px] font-bold text-white mb-4 leading-tight ml-0">Quality Assured by European International University, Paris</h2>
                    <p className="deg-qa-p text-[14px] text-white/60 leading-relaxed mb-8 max-w-[660px] mx-auto">
                        All EIU-Paris degrees carry full institutional quality assurance. ACBSP-accredited programs (BBA, MBA, DBA) meet CHEA-recognized standards. Brand Leadership degrees are co-delivered in partnership with The World Brands Foundation (TWBF). Teaching & Education degrees are quality assured under IKON ProEd Malta.
                    </p>
                    <div className="deg-qa-pills flex flex-wrap justify-center gap-2.5">
                        {['ACBSP Accredited', 'ASIC Premier Institution', 'QS Stars 5/5', 'CEOWORLD #50 (2025)', 'BGA Member', 'ECBE Member', 'ATHEA Member'].map((item, i) => (
                            <span key={i} className="deg-qa-pill bg-gold/10 border border-gold/30 text-gold3 text-[10.5px] font-bold px-3 py-1 rounded-full uppercase tracking-[0.5px] font-mono scale-95 hover:scale-100 transition-transform">
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};
