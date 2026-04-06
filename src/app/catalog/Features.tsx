"use client";

import { useState, useMemo } from "react";
import CommonWrapper from "@/common/CommonWrapper";
import { Search } from "lucide-react";
import { MCS, DOMAINS } from "@/lib/data";

export const Features = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [activeDomain, setActiveDomain] = useState("all");

    // Filter logic
    const filteredMCS = useMemo(() => {
        return MCS.filter(mc => {
            const matchesSearch = mc.name.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesDomain = activeDomain === "all" || mc.cat === activeDomain;
            return matchesSearch && matchesDomain;
        });
    }, [searchQuery, activeDomain]);

    return (
        <div id="page-catalog" className="page active pt-[62px]">
            <div className="cat-hdr bg-[#060e1e] px-8 md:px-12 py-12 md:py-16">
                <div className="cat-hdr-in max-w-[1200px] mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <div className="eyebrow text-gold3 mb-2">184 Micro-Credentials · 10 Domains</div>
                    <h1 className="cat-h font-serif font-bold text-[34px] text-white mb-2 ml-0">IKON SKILLS™ Credential Catalog</h1>
                    <p className="cat-sub text-sm text-white/60 leading-relaxed max-w-2xl">
                        Browse all 184 Micro-Credentials. Each credential = 10 verified competencies + 10 ECTS. Quality Assured by European International University, Paris.
                    </p>
                </div>
            </div>

            <div className="filters-bar bg-[#0d1a2e] border-b border-white/10 sticky top-[62px] z-50 shadow-sm px-8 md:px-12">
                <div className="filters-in max-w-[1200px] mx-auto py-3 flex flex-wrap items-center gap-2">
                    <div className="sw flex-1 min-w-[200px] flex items-center gap-2 bg-white/5 border-1.5 border-white/15 rounded-lg px-3 py-2">
                        <Search className="w-4 h-4 text-white/35" />
                        <input
                            type="text"
                            placeholder="Search Micro-Credentials…"
                            className="bg-transparent border-none outline-none text-[13px] text-white w-full placeholder:text-white/35"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    <button
                        className={`f-btn px-3 py-1.5 rounded-lg border-1.5 text-[12px] font-medium transition-all ${activeDomain === 'all' ? 'bg-gold border-gold text-white' : 'bg-white/5 border-white/15 text-white/75 hover:bg-gold hover:border-gold hover:text-white'}`}
                        onClick={() => setActiveDomain('all')}
                    >
                        All (184)
                    </button>
                    {DOMAINS.map(domain => (
                        <button
                            key={domain.id}
                            className={`f-btn px-3 py-1.5 rounded-lg border-1.5 text-[12px] font-medium transition-all ${activeDomain === domain.id ? 'bg-gold border-gold text-white' : 'bg-white/5 border-white/15 text-white/75 hover:bg-gold hover:border-gold hover:text-white'}`}
                            onClick={() => setActiveDomain(domain.id)}
                        >
                            {domain.name}
                        </button>
                    ))}
                </div>
            </div>

            <div className="cat-layout max-w-[1200px] mx-auto px-8 md:px-12 py-12 grid grid-cols-1 lg:grid-cols-[235px_1fr] gap-12">
                <aside className="sp hidden lg:block">
                    <div className="sp-sec mb-6">
                        <div className="sp-t text-[10px] font-semibold tracking-[1.8px] uppercase text-white/45 font-mono mb-3">Domain</div>
                        <div
                            className={`sp-item flex items-center justify-between p-2 rounded-lg cursor-pointer transition-all mb-1 ${activeDomain === 'all' ? 'bg-gold/15' : 'hover:bg-white/5'}`}
                            onClick={() => setActiveDomain('all')}
                        >
                            <div className="sp-label flex items-center gap-2 text-[13px] font-medium text-white/80">
                                <div className="sp-dot w-2 h-2 rounded-[2px]" style={{ background: '#888' }}></div>
                                All Domains
                            </div>
                            <div className="sp-ct text-[10px] text-white/50 font-mono bg-white/5 px-1.5 py-0.5 rounded-md">184</div>
                        </div>
                        {DOMAINS.map(domain => (
                            <div
                                key={domain.id}
                                className={`sp-item flex items-center justify-between p-2 rounded-lg cursor-pointer transition-all mb-1 ${activeDomain === domain.id ? 'bg-gold/15' : 'hover:bg-white/5'}`}
                                onClick={() => setActiveDomain(domain.id)}
                            >
                                <div className="sp-label flex items-center gap-2 text-[13px] font-medium text-white/80">
                                    <div className="sp-dot w-2 h-2 rounded-[2px]" style={{ background: domain.color }}></div>
                                    {domain.name}
                                </div>
                                <div className="sp-ct text-[10px] text-white/50 font-mono bg-white/5 px-1.5 py-0.5 rounded-md">{domain.count}</div>
                            </div>
                        ))}
                    </div>
                </aside>

                <main>
                    <div className="grid-hdr flex items-center justify-between mb-4">
                        <div className="grid-ct text-[13px] text-white/55">
                            <strong className="text-white">{filteredMCS.length}</strong> Micro-Credentials found
                        </div>
                    </div>

                    <div className="mc-grid grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                        {filteredMCS.map(mc => (
                            <div
                                key={mc.id}
                                className="mc-card bg-white/5 border-1.5 border-white/10 rounded-xl p-5 cursor-pointer transition-all hover:border-gold/50 hover:-translate-y-1 hover:shadow-2xl"
                                onClick={() => window.location.href = `/sample-mc?id=${mc.id}`}
                            >
                                <div className="mc-cat-tag text-[9px] font-semibold tracking-[1.2px] uppercase font-mono bg-gold text-white px-2 py-1 rounded-[4px] mb-2 inline-block">
                                    Cat {mc.cat} · {DOMAINS.find(d => d.id === mc.cat)?.name}
                                </div>
                                <h3 className="mc-name text-[14px] font-bold text-white leading-tight mb-2 min-h-[36px]">
                                    {mc.name}
                                </h3>
                                <div className="mc-chips flex flex-wrap gap-1 mb-3">
                                    <span className="mc-chip text-[9px] px-1.5 py-0.5 rounded-[3px] bg-white/5 text-white/55 font-mono">10 Competencies</span>
                                    <span className="mc-chip text-[9px] px-1.5 py-0.5 rounded-[3px] bg-white/5 text-white/55 font-mono">AI Assessment</span>
                                    <span className="mc-chip text-[9px] px-1.5 py-0.5 rounded-[3px] bg-white/10 text-white/80 font-mono">+ Skills</span>
                                </div>
                                <div className="mc-foot flex items-center justify-between border-t border-white/10 pt-3">
                                    <div className="mc-ects text-[10px] font-bold text-gold font-mono bg-gold/20 px-1.5 py-0.5 rounded-[4px]">
                                        {mc.ects} ECTS
                                    </div>
                                    <div className="mc-lvl text-[9.5px] font-semibold text-white bg-gold px-2 py-[2px] rounded-[4px] font-mono">
                                        EQF {mc.level}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </main>
            </div>
        </div>
    );
};
