"use client";

import CommonWrapper from "@/common/CommonWrapper";
import { Search, Filter, ArrowRight } from "lucide-react";
import { useState, useMemo } from "react";

const domains = [
    { name: "AI & Automation", count: 24 },
    { name: "Data & Analytics", count: 18 },
    { name: "Brand Leadership", count: 15 },
    { name: "Finance & ESG", count: 21 },
    { name: "Digital Transformation", count: 12 },
    { name: "Global Operations", count: 19 },
];

const credentials = [
    { id: 1, domain: "AI & Automation", title: "AI Prompt Engineer", level: "Practitioner", ects: 10 },
    { id: 2, domain: "Data & Analytics", title: "Data Storytelling Designer", level: "Practitioner", ects: 10 },
    { id: 3, domain: "Brand Leadership", title: "Brand Identity Architect", level: "Foundation", ects: 10 },
    { id: 4, domain: "AI & Automation", title: "Machine Learning Ops", level: "Advanced", ects: 10 },
    { id: 5, domain: "Finance & ESG", title: "Carbon Credit Analyst", level: "Practitioner", ects: 10 },
    { id: 6, domain: "Global Operations", title: "Supply Chain Automator", level: "Practitioner", ects: 10 },
    { id: 7, domain: "Digital Transformation", title: "Cloud Transformation Specialist", level: "Advanced", ects: 10 },
    { id: 8, domain: "Data & Analytics", title: "Big Data Strategist", level: "Mastery", ects: 10 },
    { id: 9, domain: "Finance & ESG", title: "ESG Compliance Officer", level: "Practitioner", ects: 10 },
    { id: 10, domain: "AI & Automation", title: "Autonomous Agent Architect", level: "Mastery", ects: 10 },
    { id: 11, domain: "Brand Leadership", title: "Digital Brand Strategist", level: "Practitioner", ects: 10 },
    { id: 12, domain: "Global Operations", title: "Logistics Optimization Lead", level: "Advanced", ects: 10 },
    { id: 13, domain: "Digital Transformation", title: "Full-Stack AI Developer", level: "Mastery", ects: 10 },
    { id: 14, domain: "Data & Analytics", title: "Predictive Analytics Lead", level: "Practitioner", ects: 10 },
    { id: 15, domain: "Finance & ESG", title: "Sustainable Finance Lead", level: "Advanced", ects: 10 },
];

export const Features = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [activeDomain, setActiveDomain] = useState("All");

    const filteredCredentials = useMemo(() => {
        return credentials.filter(card => {
            const matchesSearch = card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                card.domain.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesDomain = activeDomain === "All" || card.domain === activeDomain;
            return matchesSearch && matchesDomain;
        });
    }, [searchQuery, activeDomain]);

    return (
        <section id="features" className="py-24 bg-background relative border-t border-white/5">
            <CommonWrapper className="max-w-[1400px]">
                <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
                    <div className="space-y-4">
                        <div className="text-[10px] text-primary font-bold uppercase tracking-[4px]">SECTION 2.0</div>
                        <h2 className="text-4xl font-bold text-white tracking-tight">Credential Catalog</h2>
                        <p className="text-muted-foreground max-w-sm">Browse our library of 184 AI-assessed micro-credentials and start stacking toward your degree.</p>
                    </div>
                    <div className="flex items-center gap-4 w-full md:w-fit">
                        <div className="relative flex-1 md:w-80">
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search credentials..."
                                className="w-full h-12 bg-white/5 border border-white/10 rounded-xl px-12 text-sm focus:outline-none focus:border-primary/50 transition-colors"
                            />
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        </div>
                        <button className="h-12 w-12 flex items-center justify-center bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors">
                            <Filter className="w-4 h-4 text-white" />
                        </button>
                    </div>
                </div>

                <div className="grid lg:grid-cols-[280px_1fr] gap-12">
                    {/* Sidebar Filters */}
                    <div className="hidden lg:block space-y-8">
                        <div>
                            <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-6">Domains</h3>
                            <div className="space-y-4">
                                <button
                                    onClick={() => setActiveDomain("All")}
                                    className={`w-full flex items-center justify-between px-2 py-1 transition-colors group ${activeDomain === "All" ? "text-primary" : "text-muted-foreground hover:text-white"}`}
                                >
                                    <span className="text-sm font-medium">All Domains</span>
                                </button>
                                {domains.map((domain) => (
                                    <button
                                        key={domain.name}
                                        onClick={() => setActiveDomain(domain.name)}
                                        className="w-full group"
                                    >
                                        <div className="flex items-center justify-between mb-2">
                                            <span className={`text-sm transition-colors ${activeDomain === domain.name ? "text-white" : "text-muted-foreground group-hover:text-white"}`}>
                                                {domain.name}
                                            </span>
                                            <span className="text-[10px] font-bold text-white/30">{domain.count}</span>
                                        </div>
                                        <div className="h-[2px] w-full bg-white/5 rounded-full overflow-hidden">
                                            <div
                                                className={`h-full bg-primary/40 group-hover:bg-primary transition-all duration-500`}
                                                style={{ width: `${(domain.count / 30) * 100}%` }}
                                            />
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Grid */}
                    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {filteredCredentials.length > 0 ? (
                            filteredCredentials.map((card) => (
                                <div key={card.id} className="group p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-primary/30 transition-all hover:-translate-y-1">
                                    <div className="text-[10px] text-primary font-bold uppercase tracking-widest mb-4">{card.domain}</div>
                                    <h3 className="text-xl font-bold text-white mb-12 group-hover:text-primary transition-colors min-h-[56px]">{card.title}</h3>

                                    <div className="flex justify-between items-end border-t border-white/5 pt-6">
                                        <div className="space-y-2">
                                            <div className="text-[10px] text-muted-foreground uppercase tracking-widest">{card.ects} ECTS</div>
                                            <div className="flex items-center gap-1.5">
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(var(--primary-rgb),0.8)]" />
                                                <span className="text-[10px] font-bold text-white/60 uppercase tracking-tighter">{card.level}</span>
                                            </div>
                                        </div>
                                        <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:scale-110 transition-all">
                                            <ArrowRight className="w-4 h-4 text-white" />
                                        </button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-span-full py-20 text-center">
                                <p className="text-muted-foreground">No credentials found matching your criteria.</p>
                            </div>
                        )}
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <button className="text-sm font-bold text-white/50 hover:text-primary transition-colors flex items-center gap-2 mx-auto uppercase tracking-widest">
                        View All 184 Micro-Credentials <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
            </CommonWrapper>
        </section>
    );
};
