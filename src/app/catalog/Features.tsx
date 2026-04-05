"use client";

import CommonWrapper from "@/common/CommonWrapper";
import { Search, ChevronRight } from "lucide-react";
import { useState, useMemo, useEffect } from "react";

const domains = [
    { name: "AI & Automation", count: 15, color: "bg-red-500" },
    { name: "Data & Analytics", count: 15, color: "bg-blue-500" },
    { name: "Strategy & Leadership", count: 15, color: "bg-emerald-500" },
    { name: "Project & Operations", count: 15, color: "bg-orange-500" },
    { name: "Technology", count: 10, color: "bg-purple-500" },
    { name: "Marketing & Growth", count: 10, color: "bg-pink-500" },
    { name: "HR & People Dev", count: 10, color: "bg-indigo-500" },
    { name: "Finance & ESG", count: 10, color: "bg-cyan-500" },
    { name: "Teaching & Education", count: 48, color: "bg-amber-500" },
    { name: "Brand Leadership", count: 36, color: "bg-rose-500" },
];

const credentialsData = [
    {
        id: 1,
        domain: "AI & Automation",
        cat: "CAT 01",
        title: "AI Prompt Engineer",
        skills: ["Structured prompts", "Output optimization", "Tone control", "Prompt chaining"],
        ects: 10,
        eqf: 6,
    },
    {
        id: 2,
        domain: "AI & Automation",
        cat: "CAT 01",
        title: "AI Project Manager",
        skills: ["AI scope definition", "Business translation", "Risk management", "Timeline planning"],
        ects: 10,
        eqf: 7,
    },
    {
        id: 3,
        domain: "AI & Automation",
        cat: "CAT 01",
        title: "Generative AI Practitioner",
        skills: ["Content generation control", "Model fine-tuning basics", "Data prompting", "Quality filtering"],
        ects: 10,
        eqf: 6,
    },
    {
        id: 4,
        domain: "AI & Automation",
        cat: "CAT 01",
        title: "Responsible AI Practitioner",
        skills: ["Bias identification", "Fairness evaluation", "Risk documentation", "Transparency design"],
        ects: 10,
        eqf: 7,
    },
    {
        id: 5,
        domain: "AI & Automation",
        cat: "CAT 01",
        title: "AI Workflow Automation Specialist",
        skills: ["Process mapping", "API orchestration", "Trigger-based logic", "Error handling"],
        ects: 10,
        eqf: 6,
    },
    {
        id: 6,
        domain: "AI & Automation",
        cat: "CAT 01",
        title: "Conversational AI Designer",
        skills: ["Dialogue flow design", "Intent mapping", "Entity recognition", "UX writing"],
        ects: 10,
        eqf: 6,
    },
    {
        id: 7,
        domain: "Data & Analytics",
        cat: "CAT 02",
        title: "Data Storytelling Designer",
        skills: ["Visualization", "Narrative", "Insights", "Dashboarding"],
        ects: 10,
        eqf: 6,
    },
    {
        id: 8,
        domain: "Strategy & Leadership",
        cat: "CAT 03",
        title: "Strategic Thinking Practitioner",
        skills: ["Scenario planning", "Mental models", "Visioning", "Execution"],
        ects: 10,
        eqf: 7,
    },
    {
        id: 9,
        domain: "Brand Leadership",
        cat: "CAT 10",
        title: "Brand Identity Architect",
        skills: ["Brand DNA", "Visual identity", "Touchpoint design", "Guidelines"],
        ects: 36,
        eqf: 8,
    }
];

export const Features = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [activeDomain, setActiveDomain] = useState("All Domains");

    // Filtered results
    const filteredCredentials = useMemo(() => {
        return credentialsData.filter(card => {
            const matchesSearch = card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                card.domain.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesDomain = activeDomain === "All Domains" || card.domain === activeDomain;
            return matchesSearch && matchesDomain;
        });
    }, [searchQuery, activeDomain]);

    return (
        <section id="catalog" className="py-24 bg-[#020617] relative">
            <CommonWrapper className="max-w-[1400px]">
                {/* Header Section */}
                <div className="space-y-4 mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <div className="text-[10px] text-primary font-bold uppercase tracking-[4px]">184 MICRO-CREDENTIALS · 10 DOMAINS</div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">IKON SKILLS™ Credential Catalog</h2>
                    <p className="text-muted-foreground text-sm max-w-3xl">
                        Browse all 184 Micro-Credentials. Each credential = 10 verified competencies + 10 ECTS. Quality Assured by European International University, Paris.
                    </p>
                </div>

                {/* Sticky Filter Bar */}
                <div className="sticky top-20 z-40 py-6 bg-[#020617]/95 backdrop-blur-md border-y border-white/5 mb-12">
                    <div className="flex flex-col xl:flex-row gap-6 items-center">
                        {/* Search */}
                        <div className="relative w-full xl:w-[400px] group">
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search Micro-Credentials..."
                                className="w-full h-14 bg-white/5 border border-white/10 rounded-xl px-14 text-sm text-white focus:outline-none focus:border-primary/50 transition-all placeholder:text-muted-foreground/50"
                            />
                            <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                        </div>

                        {/* Top Tabs */}
                        <div className="flex flex-wrap gap-2 w-full">
                            <button
                                onClick={() => setActiveDomain("All Domains")}
                                className={`px-5 py-2 rounded-lg text-xs font-bold transition-all border ${activeDomain === "All Domains" ? "bg-primary border-primary text-white" : "bg-white/5 border-white/10 text-muted-foreground hover:bg-white/10"}`}
                            >
                                All (184)
                            </button>
                            {domains.map(d => (
                                <button
                                    key={d.name}
                                    onClick={() => setActiveDomain(d.name)}
                                    className={`px-5 py-2 rounded-lg text-xs font-bold transition-all border ${activeDomain === d.name ? "bg-primary border-primary text-white" : "bg-white/5 border-white/10 text-muted-foreground hover:bg-white/10"}`}
                                >
                                    {d.name}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="grid lg:grid-cols-[280px_1fr] gap-12 items-start">
                    {/* Sticky Sidebar */}
                    <aside className="hidden lg:block sticky top-60 space-y-8 animate-in fade-in slide-in-from-left-4">
                        <div>
                            <h3 className="text-[10px] font-black text-muted-foreground uppercase tracking-[3px] mb-6 opacity-60">DOMAIN</h3>
                            <div className="space-y-1">
                                <button
                                    onClick={() => setActiveDomain("All Domains")}
                                    className={`w-full group flex items-center justify-between p-3 rounded-xl transition-all ${activeDomain === "All Domains" ? "bg-primary/20 text-white" : "text-muted-foreground hover:bg-white/5 hover:text-white"}`}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className={`w-2 h-2 rounded-full border border-white/10 bg-slate-500`} />
                                        <span className="text-xs font-bold uppercase tracking-wider">All Domains</span>
                                    </div>
                                    <span className="text-[10px] font-bold opacity-40">184</span>
                                </button>
                                {domains.map((d) => (
                                    <button
                                        key={d.name}
                                        onClick={() => setActiveDomain(d.name)}
                                        className={`w-full group flex items-center justify-between p-3 rounded-xl transition-all ${activeDomain === d.name ? "bg-primary/20 text-white border-l-2 border-primary" : "text-muted-foreground hover:bg-white/5 hover:text-white"}`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className={`w-2 h-2 rounded-full border border-white/10 ${d.color}`} />
                                            <span className="text-xs font-bold uppercase tracking-wider">{d.name}</span>
                                        </div>
                                        <span className="text-[10px] font-bold opacity-40">{d.count}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </aside>

                    {/* Main Grid Area */}
                    <div className="space-y-8">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-sm font-bold text-white uppercase tracking-widest">{filteredCredentials.length} Micro-Credentials found</h2>
                        </div>

                        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                            {filteredCredentials.length > 0 ? (
                                filteredCredentials.map((card) => (
                                    <div key={card.id} className="group relative bg-[#0a1122] border border-white/5 hover:border-primary/50 rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1 shadow-2xl flex flex-col justify-between min-h-[340px]">
                                        <div className="space-y-6">
                                            <div className="flex justify-between items-start">
                                                <div className="px-3 py-1 rounded bg-primary text-[8px] font-black text-white uppercase tracking-widest">
                                                    {card.cat} · {card.domain}
                                                </div>
                                            </div>

                                            <h3 className="text-lg font-bold text-white tracking-tight leading-tight group-hover:text-primary transition-colors min-h-[48px]">
                                                {card.title}
                                            </h3>

                                            <div className="flex flex-wrap gap-1.5">
                                                {card.skills.map(s => (
                                                    <span key={s} className="px-2 py-1 rounded bg-white/5 text-[9px] text-muted-foreground font-medium border border-white/5">
                                                        {s}
                                                    </span>
                                                ))}
                                                <span className="px-2 py-1 rounded bg-white/5 text-[9px] text-primary font-black border border-primary/20">+6</span>
                                            </div>
                                        </div>

                                        <div className="pt-8 mt-auto flex justify-between items-end border-t border-white/5">
                                            <div className="text-[12px] text-primary font-black uppercase tracking-widest">
                                                {card.ects} ECTS
                                            </div>
                                            <div className="px-2 py-1 bg-primary rounded text-[10px] font-black text-white uppercase tracking-tighter shadow-lg shadow-primary/20">
                                                EQF {card.eqf}
                                            </div>
                                        </div>

                                        {/* Hover border glow */}
                                        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />
                                    </div>
                                ))
                            ) : (
                                <div className="col-span-full py-20 text-center border-2 border-dashed border-white/5 rounded-3xl">
                                    <p className="text-muted-foreground">No credentials found matching your criteria.</p>
                                    <button
                                        onClick={() => { setSearchQuery(""); setActiveDomain("All Domains"); }}
                                        className="mt-4 text-primary font-bold text-xs uppercase tracking-widest hover:underline"
                                    >
                                        Clear all filters
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </CommonWrapper>
        </section>
    );
};
