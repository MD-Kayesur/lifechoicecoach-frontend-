"use client";

import { useState, useMemo } from "react";
import { DEGREES, CERTS } from "@/lib/data";

export const Pathways = () => {
    const [activeFilter, setActiveFilter] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");
    const [expandedDegrees, setExpandedDegrees] = useState<number[]>([]);

    const toggleDegree = (id: number) => {
        setExpandedDegrees(prev =>
            prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
        );
    };

    const filteredDegrees = useMemo(() => {
        const query = searchQuery.toLowerCase().trim();
        return DEGREES.filter(deg => {
            const levelMatch = activeFilter === 'all' || deg.level === activeFilter;
            const searchMatch = !query ||
                deg.name.toLowerCase().includes(query) ||
                deg.mcs.some(mc => mc.toLowerCase().includes(query));
            return levelMatch && searchMatch;
        });
    }, [activeFilter, searchQuery]);

    const filteredCerts = useMemo(() => {
        const query = searchQuery.toLowerCase().trim();
        return CERTS.filter(cert => {
            const levelMatch = activeFilter === 'all' || activeFilter === 'Cert';
            const searchMatch = !query ||
                cert.name.toLowerCase().includes(query) ||
                cert.mcs.some(mc => mc.toLowerCase().includes(query));
            return levelMatch && searchMatch;
        });
    }, [activeFilter, searchQuery]);

    const groups = [
        { id: 'Bachelor', label: 'Bachelor Degrees', items: filteredDegrees.filter(d => d.level === 'Bachelor') },
        { id: 'Master', label: 'Master Degrees', items: filteredDegrees.filter(d => d.level === 'Master') },
        { id: 'Doctorate', label: 'Doctorate Degrees', items: filteredDegrees.filter(d => d.level === 'Doctorate') },
        { id: 'Cert', label: 'Brand Strategy Certifications', items: filteredCerts }
    ];

    return (
        <div id="page-pathways" className="page active pt-[62px] min-h-screen bg-[#070c14] relative overflow-hidden">
            {/* Background Canvas */}
            <div className="bg-canvas absolute inset-0 pointer-events-none z-0">
                <div className="bg-grid absolute inset-0 opacity-[0.04] bg-[linear-gradient(rgba(203,45,57,1)_1px,transparent_1px),linear-gradient(90deg,rgba(203,45,57,1)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
                <div className="bg-dots absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle,rgba(203,45,57,1)_1px,transparent_1px)] bg-[size:30px_30px] bg-[15px_15px]"></div>
            </div>

            <div className="page-content relative z-10">
                <section className="cp-hero bg-gradient-to-br from-[#040810] via-[#070c14] to-[#0a1020] px-8 md:px-12 py-16 md:py-20 text-center border-b border-gold/30">
                    <div className="hero-badge inline-block bg-gold/15 border border-gold/40 text-gold text-[11px] font-bold tracking-[2px] uppercase px-4 py-1.5 rounded-full mb-6">
                        IKON SKILLS™ Credential Pathways
                    </div>
                    <h1 className="font-serif font-black text-[36px] md:text-[52px] text-white leading-none mb-4 tracking-tighter">
                        Stack Micro-Credentials.<br /><span className="text-gold">Earn Professional Degrees.</span>
                    </h1>
                    <p className="text-[16px] text-white/50 max-w-[680px] mx-auto mb-10 leading-relaxed">
                        Every IKON SKILLS™ degree is built by stacking individual Micro-Credentials, each one a proof of skill. Browse all 56 professional degrees and 3 brand certifications, conferred by European International University, Paris.
                    </p>
                    <div className="hero-stats flex flex-wrap justify-center gap-12 mb-10">
                        {[
                            { n: '56', l: 'Professional Degrees' },
                            { n: '3', l: 'Brand Certifications' },
                            { n: '184', l: 'Micro-Credentials' },
                            { n: '1,840', l: 'Core Competencies' }
                        ].map((stat, i) => (
                            <div key={i} className="hero-stat">
                                <div className="num font-mono text-[32px] font-extrabold text-gold leading-none">{stat.n}</div>
                                <div className="lbl text-[11px] text-white/40 uppercase tracking-[1px] mt-1">{stat.l}</div>
                            </div>
                        ))}
                    </div>
                </section>

                <div className="stacking-banner bg-gradient-to-r from-gold/10 via-gold/15 to-gold/10 border-y border-gold/20 py-4 px-8 flex flex-wrap justify-center gap-12 items-center text-center">
                    <div className="stack-item flex items-center gap-3">
                        <span className="stack-num font-mono text-[22px] font-bold text-gold">18</span>
                        <span className="stack-txt text-[12px] text-white/50 leading-tight text-left">
                            <strong className="text-white block text-[13px]">Bachelor Degree</strong>Micro-Credentials required
                        </span>
                    </div>
                    <div className="stack-sep text-gold/40 text-[20px]">→</div>
                    <div className="stack-item flex items-center gap-3">
                        <span className="stack-num font-mono text-[22px] font-bold text-gold">24</span>
                        <span className="stack-txt text-[12px] text-white/50 leading-tight text-left">
                            <strong className="text-white block text-[13px]">Master Degree</strong>Micro-Credentials required
                        </span>
                    </div>
                    <div className="stack-sep text-gold/40 text-[20px]">→</div>
                    <div className="stack-item flex items-center gap-3">
                        <span className="stack-num font-mono text-[22px] font-bold text-gold">36</span>
                        <span className="stack-txt text-[12px] text-white/50 leading-tight text-left">
                            <strong className="text-white block text-[13px]">Doctor of Practice</strong>Micro-Credentials required
                        </span>
                    </div>
                </div>

                <div className="filters-section max-w-[1400px] mx-auto px-8 md:px-12 pt-8">
                    <div className="filters-row flex flex-wrap items-center gap-3 mb-4">
                        <button
                            className={`filter-btn px-4 py-2 rounded-lg text-[13px] font-medium transition-all ${activeFilter === 'all' ? 'bg-gold text-white' : 'bg-white/5 border border-white/10 text-white/50 hover:bg-white/10 hover:text-white'}`}
                            onClick={() => setActiveFilter('all')}
                        >
                            All (59)
                        </button>
                        <button
                            className={`filter-btn px-4 py-2 rounded-lg text-[13px] font-medium transition-all ${activeFilter === 'Bachelor' ? 'bg-[#1E6B8C]/40 border border-[#1E6B8C] text-white' : 'bg-white/5 border border-white/10 text-white/50 hover:bg-white/10'}`}
                            onClick={() => setActiveFilter('Bachelor')}
                        >
                            Bachelor (22)
                        </button>
                        <button
                            className={`filter-btn px-4 py-2 rounded-lg text-[13px] font-medium transition-all ${activeFilter === 'Master' ? 'bg-gold/30 border border-gold text-gold3' : 'bg-white/5 border border-white/10 text-white/50 hover:bg-white/10'}`}
                            onClick={() => setActiveFilter('Master')}
                        >
                            Master (22)
                        </button>
                        <button
                            className={`filter-btn px-4 py-2 rounded-lg text-[13px] font-medium transition-all ${activeFilter === 'Doctorate' ? 'bg-gold/40 border border-gold text-[#FF8080]' : 'bg-white/5 border border-white/10 text-white/50 hover:bg-white/10'}`}
                            onClick={() => setActiveFilter('Doctorate')}
                        >
                            Doctorate (12)
                        </button>
                        <button
                            className={`filter-btn px-4 py-2 rounded-lg text-[13px] font-medium transition-all ${activeFilter === 'Cert' ? 'bg-[#4A1E6B]/40 border border-[#9B59B6] text-[#C39BD3]' : 'bg-white/5 border border-white/10 text-white/50 hover:bg-white/10'}`}
                            onClick={() => setActiveFilter('Cert')}
                        >
                            Certifications (3)
                        </button>
                        <div className="search-box flex-1 min-w-[260px] max-w-[360px]">
                            <input
                                type="text"
                                placeholder="Search degrees or micro-credentials..."
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-[13px] text-white outline-none focus:border-gold/50"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </div>
                </div>

                <div className="degrees-section max-w-[1400px] mx-auto px-8 md:px-12 py-8">
                    {groups.map(group => group.items.length > 0 && (
                        <div key={group.id} className="level-group mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
                            <div className="level-header flex items-center gap-4 mb-6 pb-3 border-b border-white/10">
                                <span className={`level-badge text-[11px] font-bold tracking-[2px] uppercase px-3 py-1 rounded-[4px] border ${group.id === 'Bachelor' ? 'bg-[#1E6B8C]/30 text-[#7EC8E3] border-[#1E6B8C]/50' :
                                        group.id === 'Master' ? 'bg-gold/20 text-gold border-gold/40' :
                                            group.id === 'Doctorate' ? 'bg-gold/20 text-[#FF8080] border-gold/40' :
                                                'bg-[#9B59B6]/20 text-[#C39BD3] border-[#9B59B6]/40'
                                    }`}>
                                    {group.id === 'Cert' ? 'Professional Certification' : group.id}
                                </span>
                                <span className="level-title text-[18px] font-bold text-white font-serif">{group.label}</span>
                                <span className="level-count ml-auto text-[13px] text-white/30 font-mono">{group.items.length} programs</span>
                            </div>

                            <div className="degrees-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {group.items.map((deg: any) => (
                                    <div
                                        key={deg.id}
                                        className={`degree-card bg-white/5 border border-white/10 rounded-xl overflow-hidden transition-all hover:bg-white/[0.08] hover:border-white/20 hover:-translate-y-1 hover:shadow-2xl ${expandedDegrees.includes(deg.id) ? 'expanded' : ''
                                            } border-l-4 ${group.id === 'Bachelor' ? 'border-l-[#1E6B8C]' :
                                                group.id === 'Master' ? 'border-l-gold' :
                                                    group.id === 'Doctorate' ? 'border-l-gold/80' :
                                                        'border-l-[#9B59B6]'
                                            }`}
                                    >
                                        <div className="card-header p-4 pb-3 flex items-start gap-3">
                                            <span className="card-num font-mono text-[11px] font-semibold text-white/30 bg-white/5 px-2 py-0.5 rounded-[4px]">
                                                {typeof deg.id === 'string' ? deg.id : String(deg.id).padStart(2, '0')}
                                            </span>
                                            <span className="card-name text-[13.5px] font-bold text-white leading-snug flex-1">{deg.name}</span>
                                            {deg.partner && (
                                                <span className="card-partner text-[10px] font-bold text-[#C39BD3] bg-[#9B59B6]/15 border border-[#9B59B6]/30 px-2 py-0.5 rounded-[4px] uppercase">{deg.partner}</span>
                                            )}
                                        </div>
                                        <div className="card-meta px-4 pb-3 flex flex-wrap gap-x-4 gap-y-1">
                                            <div className="card-meta-item text-[11px] text-white/40"><span className="text-white/70 font-semibold">{deg.mc_count}</span> MCs to Stack</div>
                                            <div className="card-meta-item text-[11px] text-white/40"><span className="text-white/70 font-semibold">{deg.ects}</span> ECTS</div>
                                            <div className="card-meta-item text-[11px] text-white/40">EQF <span className="text-white/70 font-semibold">{deg.eqf}</span></div>
                                            <div className="card-meta-item text-[11px] text-white/40">Issued by <span className="text-white/70 font-semibold">EIU-Paris</span></div>
                                        </div>
                                        <div
                                            className="card-toggle p-3 border-t border-white/5 flex items-center justify-between text-[12px] text-gold font-bold cursor-pointer hover:text-white transition-colors"
                                            onClick={() => toggleDegree(deg.id)}
                                        >
                                            <span>{expandedDegrees.includes(deg.id) ? 'Hide Micro-Credentials' : `View ${deg.mcs.length} Micro-Credentials`}</span>
                                            <svg className={`w-4 h-4 transition-transform duration-300 ${expandedDegrees.includes(deg.id) ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9" /></svg>
                                        </div>

                                        {expandedDegrees.includes(deg.id) && (
                                            <div className="mc-list p-4 pt-0 border-t border-white/5 animate-in slide-in-from-top-2 duration-300">
                                                <div className="mc-intro text-[11px] text-white/30 flex items-center gap-2 py-3">
                                                    <div className={`w-5 h-[1px] ${group.id === 'Bachelor' ? 'bg-[#1E6B8C]' : 'bg-gold'
                                                        }`}></div>
                                                    Required Micro-Credentials to earn this degree
                                                </div>
                                                <div className="mc-items space-y-1">
                                                    {deg.mcs.map((mc: string, idx: number) => (
                                                        <div key={idx} className="mc-item flex items-center gap-2 px-2.5 py-1.5 bg-white/5 rounded-lg border border-transparent hover:border-gold/30 hover:bg-gold/5 transition-all group">
                                                            <span className="mc-num font-mono text-[10px] text-white/30 w-5">{String(idx + 1).padStart(2, '0')}</span>
                                                            <div className={`w-1.5 h-1.5 rounded-full ${group.id === 'Bachelor' ? 'bg-[#1E6B8C]' :
                                                                    group.id === 'Master' ? 'bg-gold' :
                                                                        group.id === 'Doctorate' ? 'bg-gold/80' :
                                                                            'bg-[#9B59B6]'
                                                                }`}></div>
                                                            <span className="text-[12px] text-white/80 group-hover:text-white">{mc}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
