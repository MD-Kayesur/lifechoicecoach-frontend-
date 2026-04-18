"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import Link from "next/link";
import { useGetLessonCompetenciesQuery } from "@/redux/features/lesson/lessonCompetenciesApi";

export const Features = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [debouncedSearch, setDebouncedSearch] = useState("");
    const [activeDomain, setActiveDomain] = useState<number | "all">("all");
    const [activeMC, setActiveMC] = useState<number | "all">("all");
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const cardsSectionRef = useRef<HTMLDivElement>(null);

    // Scroll tracking for filters bar visibility - only active when viewing cards on desktop
    useEffect(() => {
        const handleScroll = () => {
            if (window.innerWidth < 1024) {
                setIsVisible(true);
                return;
            }

            const currentScrollY = window.scrollY;
            const threshold = cardsSectionRef.current ? cardsSectionRef.current.offsetTop - 150 : 400;

            if (currentScrollY > threshold) {
                if (currentScrollY > lastScrollY) {
                    setIsVisible(false); // Hide on scroll down
                } else {
                    setIsVisible(true); // Show on scroll up
                }
            } else {
                setIsVisible(true); // Always show when in header area
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    // Debounce search query
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedSearch(searchQuery);
        }, 500);
        return () => clearTimeout(timer);
    }, [searchQuery]);

    // Fetch all domains and micro-credentials once to populate filters
    const { data: allDataResponse } = useGetLessonCompetenciesQuery();

    // Main query for the filtered grid
    const { data: apiResponse, isLoading, isError } = useGetLessonCompetenciesQuery({
        search: debouncedSearch || undefined,
        domain_id: activeDomain === "all" ? undefined : activeDomain,
        micro_credential_id: activeMC === "all" ? undefined : activeMC
    });

    // Extract domains for filters from allData (this stays stable)
    const availableDomains = useMemo(() => {
        return allDataResponse?.data?.domains || [];
    }, [allDataResponse]);

    // Extract micro-credentials for the MC filter based on selected domain
    const availableMCs = useMemo(() => {
        if (!allDataResponse?.data?.domains) return [];

        let domains = allDataResponse.data.domains;
        if (activeDomain !== "all") {
            domains = domains.filter(d => d.id === activeDomain);
        }

        return domains.flatMap(d => d.micro_credentials);
    }, [allDataResponse, activeDomain]);

    // Flatten domains and their micro-credentials from the filtered API response for rendering
    const filteredMCS = useMemo(() => {
        if (!apiResponse?.data?.domains) return [];

        return apiResponse.data.domains.flatMap(domain =>
            domain.micro_credentials.map(mc => ({
                id: mc.id.toString(),
                cat: domain.id.toString(),
                name: mc.micro_credential,
                level: mc.level || "6",
                ects: 10,
                domain_name: domain.domain,
            }))
        );
    }, [apiResponse]);

    return (
        <div id="page-catalog" className="page active pt-[62px] min-h-screen bg-[#0a1628]">
            {/* Catalog Header */}
            <div className="cat-hdr bg-[#060e1e] px-6 md:px-12 py-12 md:py-16">
                <div className="cat-hdr-in max-w-[1200px] mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <div className="eyebrow text-gold3 mb-2 font-mono text-[10.5px] font-bold tracking-[2px] uppercase">
                        IKON Micro-Credentials · {availableDomains.length} Domains
                    </div>
                    <h1 className="cat-h font-serif font-bold text-[34px] md:text-[42px] text-white mb-3 leading-tight ml-0">
                        IKON SKILLS™ Credential Catalog
                    </h1>
                    <p className="cat-sub text-[14.5px] text-white/60 leading-relaxed max-w-2xl font-medium">
                        Search and filter through our verified Micro-Credentials. Each credential carries 10 ECTS value and is quality assured by EIU-Paris.
                    </p>
                </div>
            </div>

            {/* Filters Bar */}
            <div className={`filters-bar bg-[#0d1a2e] border-b border-white/10 lg:sticky top-[62px] z-[100] shadow-xl px-6 md:px-12 transition-all duration-300 ${isVisible ? 'translate-y-0 opacity-100' : 'lg:-translate-y-full lg:opacity-0 pointer-events-none'}`}>
                <div className="filters-in max-w-[1200px] mx-auto py-3.5 flex flex-wrap items-center gap-4">
                    {/* Search Field */}
                    <div className="sw flex-[2] min-w-[200px] flex items-center gap-3 bg-white/5 border-1.5 border-white/15 rounded-lg px-3.5 py-2 group hover:border-gold/40 transition-all">
                        <span className="text-white/35 text-[15px]">🔍</span>
                        <input
                            type="text"
                            placeholder="Search by keywords..."
                            className="bg-transparent border-none outline-none text-[13.5px] text-white w-full placeholder:text-white/35 font-medium"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    {/* Micro-Credential Selector */}
                    <div className="sw flex-1 min-w-[200px] flex items-center gap-3 bg-white/5 border-1.5 border-white/15 rounded-lg px-3.5 py-2 group hover:border-gold/40 transition-all">
                        <select
                            className="bg-transparent border-none outline-none text-[13.5px] text-white w-full font-medium cursor-pointer"
                            value={activeMC}
                            onChange={(e) => setActiveMC(e.target.value === "all" ? "all" : Number(e.target.value))}
                        >
                            <option value="all" className="bg-[#0d1a2e]">All Credentials</option>
                            {availableMCs.map(mc => (
                                <option key={mc.id} value={mc.id} className="bg-[#0d1a2e]">
                                    {mc.micro_credential}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Domain Filter Buttons */}
                    <div className="flex flex-wrap gap-2">
                        <button
                            className={`f-btn px-4 py-2 rounded-lg border-1.5 text-[12.5px] font-bold transition-all ${activeDomain === 'all' ? 'bg-gold border-gold text-white shadow-lg' : 'bg-white/5 border-white/15 text-white/75 hover:bg-gold hover:border-gold hover:text-white'}`}
                            onClick={() => { setActiveDomain('all'); setActiveMC('all'); }}
                        >
                            All Domains
                        </button>
                        {availableDomains.map(domain => (
                            <button
                                key={domain.id}
                                className={`f-btn px-4 py-2 rounded-lg border-1.5 text-[12.5px] font-bold transition-all hidden xl:block ${activeDomain === domain.id ? 'bg-gold border-gold text-white shadow-lg' : 'bg-white/5 border-white/15 text-white/75 hover:bg-gold hover:border-gold hover:text-white'}`}
                                onClick={() => { setActiveDomain(domain.id); setActiveMC('all'); }}
                            >
                                {domain.domain}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div ref={cardsSectionRef} className="cat-layout max-w-[1200px] mx-auto px-6 md:px-12 py-10 grid grid-cols-1 lg:grid-cols-[235px_1fr] gap-10">
                {/* Sidebar */}
                <aside className="sp sticky top-[80px] h-fit hidden lg:block animate-in fade-in slide-in-from-left-4 duration-700">
                    <div className="sp-sec mb-8">
                        <div className="sp-t text-[10px] font-bold tracking-[2px] uppercase text-white/45 font-mono mb-4">Domains</div>
                        <div
                            className={`sp-item flex items-center justify-between p-2.5 rounded-xl cursor-pointer transition-all mb-1.5 group ${activeDomain === 'all' ? 'bg-gold/15 border border-gold/20' : 'hover:bg-white/5'}`}
                            onClick={() => { setActiveDomain('all'); setActiveMC('all'); }}
                        >
                            <div className="sp-label flex items-center gap-3 text-[13.5px] font-bold text-white/80 group-hover:text-white transition-colors">
                                <div className="sp-dot w-2 h-2 rounded-[3px] shadow-[0_0_8px_rgba(136,136,136,0.5)]" style={{ background: '#888' }}></div>
                                All Domains
                            </div>
                        </div>
                        {availableDomains.map((domain, idx) => (
                            <div
                                key={domain.id}
                                className={`sp-item flex items-center justify-between p-2.5 rounded-xl cursor-pointer transition-all mb-1.5 group ${activeDomain === domain.id ? 'bg-gold/15 border border-gold/20' : 'hover:bg-white/5'}`}
                                onClick={() => { setActiveDomain(domain.id); setActiveMC('all'); }}
                            >
                                <div className="sp-label flex items-center gap-3 text-[13.5px] font-bold text-white/80 group-hover:text-white transition-colors">
                                    <div className="sp-dot w-2 h-2 rounded-[3px]" style={{ background: ['#cb2d39', '#1B5FA8', '#1B6B4A', '#6B3A1B'][idx % 4], boxShadow: `0 0 8px ${['#cb2d39', '#1B5FA8', '#1B6B4A', '#6B3A1B'][idx % 4]}80` }}></div>
                                    {domain.domain}
                                </div>
                                <div className="sp-ct text-[10px] text-white/50 font-bold font-mono bg-white/5 px-2 py-0.5 rounded-md">{domain.no_of_MCs}</div>
                            </div>
                        ))}
                    </div>

                    <div className="qa-mini bg-white/3 border border-white/8 rounded-2xl p-5 mt-10">
                        <div className="text-[10px] font-bold text-gold font-mono uppercase tracking-[1px] mb-3">Accreditation</div>
                        <div className="text-[12px] text-white/50 leading-relaxed font-medium">
                            All credentials are quality assured by European International University, Paris.
                        </div>
                    </div>
                </aside>

                {/* Grid */}
                <main className="animate-in fade-in slide-in-from-bottom-6 duration-1000">
                    <div className="grid-hdr flex items-center justify-between mb-6 pb-4 border-b border-white/5">
                        <div className="grid-ct text-[14px] text-white/55 font-medium">
                            Showing <strong className="text-white text-[15px]">{filteredMCS.length}</strong> Micro-Credentials
                        </div>
                    </div>

                    <div className="mc-grid grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                        {isLoading ? (
                            Array.from({ length: 6 }).map((_, i) => (
                                <div key={i} className="mc-card bg-white/5 border-1.5 border-white/10 rounded-2xl p-6 h-[280px] animate-pulse">
                                    <div className="flex justify-between mb-4">
                                        <div className="h-6 w-16 bg-white/10 rounded"></div>
                                        <div className="h-6 w-12 bg-white/10 rounded"></div>
                                    </div>
                                    <div className="h-6 w-3/4 bg-white/10 rounded mb-3"></div>
                                    <div className="h-4 w-full bg-white/10 rounded mb-2"></div>
                                    <div className="h-4 w-2/3 bg-white/10 rounded mb-4"></div>
                                    <div className="mt-auto pt-4 border-t border-white/10 flex justify-between">
                                        <div className="h-5 w-14 bg-white/10 rounded"></div>
                                        <div className="h-5 w-20 bg-white/10 rounded"></div>
                                    </div>
                                </div>
                            ))
                        ) : isError ? (
                            <div className="col-span-full py-20 text-center bg-white/3 rounded-3xl border border-dashed border-white/10">
                                <p className="text-red-400 font-medium">Failed to load micro-credentials. Please try again.</p>
                            </div>
                        ) : (
                            filteredMCS.map(mc => (
                                <Link
                                    key={mc.id}
                                    href={`/sample-mc?id=${mc.id}`}
                                    className="mc-card bg-white/5 border-1.5 border-white/10 rounded-2xl p-6 cursor-pointer transition-all hover:border-gold/50 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] group flex flex-col h-full"
                                >
                                    <h1>{mc.id}</h1>
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="mc-cat-tag text-[9.5px] font-bold tracking-[1.2px] uppercase font-mono bg-gold text-white px-2.5 py-1 rounded-[5px] shadow-lg shadow-gold/20">
                                            {mc.domain_name}
                                        </div>
                                        <div className="mc-lvl text-[10px] font-bold text-white bg-white/10 px-2 py-0.5 rounded-[4px] font-mono border border-white/5">
                                            EQF {mc.level}
                                        </div>
                                    </div>

                                    <h3 className="mc-name text-[15px] font-bold text-white leading-tight mb-3 group-hover:text-gold3 transition-colors flex-grow min-h-[40px]">
                                        {mc.name}
                                    </h3>

                                    <p className="text-[12px] text-white/45 mb-4 line-clamp-2 leading-relaxed">
                                        Verified competency in {mc.domain_name}. 10 ECTS Value.
                                    </p>

                                    <div className="mc-chips flex flex-wrap gap-1.5 mb-5">
                                        <span className="mc-chip text-[9px] px-2 py-0.5 rounded-[4px] bg-white/5 text-white/45 font-bold font-mono uppercase tracking-[0.5px]">10 Skills</span>
                                        <span className="mc-chip text-[9px] px-2 py-0.5 rounded-[4px] bg-white/5 text-white/45 font-bold font-mono uppercase tracking-[0.5px]">AI Assessed</span>
                                    </div>

                                    <div className="mc-foot flex items-center justify-between border-t border-white/10 pt-4 mt-auto">
                                        <div className="mc-ects text-[11px] font-bold text-gold3 font-mono bg-gold/15 px-2 py-0.5 rounded-[5px]">
                                            10 ECTS
                                        </div>
                                        <div className="text-[11px] font-bold text-white/40 group-hover:text-white transition-colors">
                                            More Info →
                                        </div>
                                    </div>
                                </Link>
                            ))
                        )}
                    </div>

                    {filteredMCS.length === 0 && !isLoading && (
                        <div className="py-20 text-center bg-white/3 rounded-3xl border border-dashed border-white/10">
                            <div className="text-4xl mb-4">🔍</div>
                            <h3 className="text-white text-lg font-bold mb-2">No credentials found</h3>
                            <p className="text-white/40 text-sm">Try adjusting your search or filters.</p>
                            <button
                                onClick={() => { setSearchQuery(""); setActiveDomain("all"); setActiveMC("all"); }}
                                className="mt-6 text-gold font-bold text-sm hover:underline"
                            >
                                Reset all filters
                            </button>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
};
