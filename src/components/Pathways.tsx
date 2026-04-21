"use client";

import CommonWrapper from "@/common/CommonWrapper";
import { GraduationCap, BookOpen, Trophy, BadgeCheck, Search, ChevronDown, Rocket, ShieldCheck, Globe } from "lucide-react";
import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";

const degreeData = [
    {
        category: "Bachelor",
        icon: GraduationCap,
        degrees: [
            { id: 1, title: "BBA in Applied AI & Automation", mcs: 18, ects: 180, eqf: 6 },
            { id: 2, title: "BBA in Digital Intelligence & AI Operations", mcs: 18, ects: 180, eqf: 6 },
            { id: 3, title: "BBA in Data-Driven Leadership & Strategy", mcs: 18, ects: 180, eqf: 6 },
            { id: 4, title: "BBA in Brand Leadership & Digital Psychology", mcs: 18, ects: 180, eqf: 6 },
            { id: 5, title: "BBA in Sustainable Finance & ESG Operations", mcs: 18, ects: 180, eqf: 6 },
            { id: 6, title: "BBA in Global Supply Chain Automation", mcs: 18, ects: 180, eqf: 6 }
        ]
    },
    {
        category: "Master",
        icon: Rocket,
        degrees: [
            { id: 7, title: "MBA in AI Strategy & Governance", mcs: 24, ects: 240, eqf: 7 },
            { id: 8, title: "MBA in Digital Transformation & Enterprise AI", mcs: 24, ects: 240, eqf: 7 },
            { id: 9, title: "MBA in Strategic Brand Management", mcs: 24, ects: 240, eqf: 7 },
            { id: 10, title: "MBA in Global Operations & Automation", mcs: 24, ects: 240, eqf: 7 },
            { id: 11, title: "MBA in ESG Leadership & Corporate Sustainability", mcs: 24, ects: 240, eqf: 7 }
        ]
    },
    {
        category: "Doctorate",
        icon: Trophy,
        degrees: [
            { id: 12, title: "Doctor of Professional Practice (DPP) in AI Leadership", mcs: 36, ects: 360, eqf: 8 },
            { id: 13, title: "DProf in Strategic Brand Leadership", mcs: 36, ects: 360, eqf: 8 },
            { id: 14, title: "Doctor of Education (EdD) in Digital Intelligence", mcs: 36, ects: 360, eqf: 8 }
        ]
    },
    {
        category: "Certifications",
        icon: BadgeCheck,
        degrees: [
            { id: 15, title: "Certified Brand Associate (CBA)", mcs: 3, ects: 30, eqf: 5 },
            { id: 16, title: "Certified Brand Manager (CBM)", mcs: 6, ects: 60, eqf: 5 },
            { id: 17, title: "Certified Brand Strategist (CBS)", mcs: 12, ects: 120, eqf: 6 }
        ]
    }
];

export const Pathways = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [activeTab, setActiveTab] = useState("All");

    const filteredData = useMemo(() => {
        let data = activeTab === "All" ? degreeData : degreeData.filter(d => d.category === activeTab);
        if (searchQuery) {
            data = data.map(cat => ({
                ...cat,
                degrees: cat.degrees.filter(deg => deg.title.toLowerCase().includes(searchQuery.toLowerCase()))
            })).filter(cat => cat.degrees.length > 0);
        }
        return data;
    }, [searchQuery, activeTab]);

    return (
        <section className="bg-[#020617] text-white py-24 min-h-screen relative overflow-hidden">
            {/* Background pattern - diagonal lines */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
                style={{
                    backgroundImage: `repeating-linear-gradient(-45deg, #1e293b 0, #1e293b 1px, transparent 0, transparent 15px)`,
                }}
            />

            <CommonWrapper className="max-w-[1400px] relative z-10">
                {/* Hero section */}
                <div className="text-center mb-20 space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
                    <div className="text-[10px] text-primary font-black uppercase tracking-[4px]">IKON SKILLS™ CREDENTIAL PATHWAYS</div>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight italic font-serif">
                        Stack Micro-Credentials. <br />
                        <span className="text-white">Earn Professional Degrees.</span>
                    </h1>
                    <p className="text-muted-foreground text-sm max-w-2xl mx-auto leading-relaxed">
                        Every IKON SKILLS™ degree is built by stacking individual Micro-Credentials, each one a proof of skill. Browse all 56 professional degrees and 3 brand certifications, conferred by European International University, Paris.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 max-w-4xl mx-auto border-y border-white/5">
                        {[
                            { val: "56", label: "PROFESSIONAL DEGREES" },
                            { val: "3", label: "BRAND CERTIFICATIONS" },
                            { val: "184", label: "MICRO-CREDENTIALS" },
                            { val: "1,840", label: "CORE COMPETENCIES" },
                        ].map((stat, i) => (
                            <div key={i} className="text-center space-y-1">
                                <div className="text-3xl font-black text-white">{stat.val}</div>
                                <div className="text-[9px] text-muted-foreground font-bold uppercase tracking-widest">{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-wrap justify-center gap-2 pt-8">
                        {["100% Online", "Self-Paced", "AI-Native", "EIU-Paris Conferred", "Launching June 2026"].map(p => (
                            <span key={p} className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-muted-foreground uppercase tracking-wider">{p}</span>
                        ))}
                    </div>
                </div>

                {/* Stacking Banner */}
                <div className="relative mb-20 p-8 rounded-[2.5rem] bg-gradient-to-r from-primary/10 via-[#0a1122] to-primary/10 border border-white/5 flex flex-wrap items-center justify-center gap-12 text-center shadow-2xl">
                    <div className="space-y-1">
                        <div className="flex items-baseline gap-2 justify-center">
                            <span className="text-3xl font-black text-primary">18</span>
                            <span className="text-xs font-bold text-white uppercase tracking-widest">Bachelor Degree</span>
                        </div>
                        <p className="text-[10px] text-muted-foreground uppercase font-black">Micro-Credentials required</p>
                    </div>
                    <div className="w-12 h-[2px] bg-white/10 hidden md:block" />
                    <div className="space-y-1">
                        <div className="flex items-baseline gap-2 justify-center">
                            <span className="text-3xl font-black text-primary">24</span>
                            <span className="text-xs font-bold text-white uppercase tracking-widest">Master Degree</span>
                        </div>
                        <p className="text-[10px] text-muted-foreground uppercase font-black">Micro-Credentials required</p>
                    </div>
                    <div className="w-12 h-[2px] bg-white/10 hidden md:block" />
                    <div className="space-y-1">
                        <div className="flex items-baseline gap-2 justify-center">
                            <span className="text-3xl font-black text-primary">36</span>
                            <span className="text-xs font-bold text-white uppercase tracking-widest">Doctor of Professional Practice</span>
                        </div>
                        <p className="text-[10px] text-muted-foreground uppercase font-black">Micro-Credentials required</p>
                    </div>
                    <div className="w-12 h-[2px] bg-white/10 hidden md:block" />
                    <div className="space-y-1">
                        <div className="text-3xl font-black text-primary">$14.99</div>
                        <p className="text-[10px] text-muted-foreground uppercase font-black leading-tight">Per Micro-Credential <br /> <span className="opacity-60 font-medium">Most affordable globally</span></p>
                    </div>
                </div>

                {/* Filters & Grid */}
                <div className="space-y-12">
                    <div className="flex flex-col xl:flex-row gap-6 items-center border-b border-white/10 pb-12">
                        <div className="flex flex-wrap gap-2 w-full xl:w-fit">
                            {["All", "Bachelor", "Master", "Doctorate", "Certifications"].map(tab => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-6 py-2 rounded-xl text-xs font-bold uppercase tracking-widest transition-all ${activeTab === tab ? "bg-primary text-white" : "bg-white/5 text-muted-foreground hover:bg-white/10"}`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                        <div className="relative flex-1 w-full flex justify-end">
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search degrees or micro-credentials..."
                                className="w-full h-14 bg-white/5 border border-white/10 rounded-xl px-14 text-sm focus:outline-none focus:border-primary/50 transition-all"
                            />
                            <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        </div>
                    </div>

                    <div className="space-y-24">
                        {filteredData.map((cat, i) => (
                            <div key={i} className="space-y-8 animate-in fade-in slide-in-from-bottom-4" style={{ animationDelay: `${i * 100}ms` }}>
                                <div className="flex items-center gap-4">
                                    <div className="px-4 py-2 bg-primary/20 rounded-lg text-[10px] font-black text-primary uppercase tracking-[3px] border border-primary/20">
                                        {cat.category.toUpperCase()}
                                    </div>
                                    <h2 className="text-2xl font-bold">{cat.category} Degrees</h2>
                                </div>

                                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                                    {cat.degrees.map((deg) => (
                                        <div key={deg.id} className="bg-[#0a1122] border border-white/10 rounded-[2.5rem] p-8 space-y-6 group hover:border-primary/50 transition-all duration-500 hover:-translate-y-1 shadow-xl">
                                            <div className="space-y-4">
                                                <div className="flex gap-4 items-center">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                                    <h3 className="text-[10px] font-black uppercase tracking-widest text-muted-foreground opacity-60">EIU-Paris Degree Pathway</h3>
                                                </div>
                                                <h4 className="text-lg font-bold text-white group-hover:text-primary transition-colors leading-tight">
                                                    {deg.title}
                                                </h4>
                                            </div>

                                            <div className="flex flex-wrap gap-x-6 gap-y-2 border-t border-white/5 pt-6">
                                                <div className="text-[11px] font-bold">
                                                    <span className="text-primary">{deg.mcs} MCs</span> <span className="text-muted-foreground opacity-40 uppercase tracking-widest">to Stack</span>
                                                </div>
                                                <div className="text-[11px] font-bold">
                                                    <span className="text-white">{deg.ects} ECTS</span>
                                                </div>
                                                <div className="text-[11px] font-bold">
                                                    <span className="text-muted-foreground opacity-40 uppercase tracking-widest">EQF</span> <span className="text-white">{deg.eqf}</span>
                                                </div>
                                            </div>

                                            <button className="w-full h-14 bg-white/5 border border-white/10 rounded-xl text-[10px] font-black uppercase tracking-widest group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all flex items-center justify-between px-8">
                                                <span>View Micro-Credentials</span>
                                                <ChevronDown size={14} className="group-hover:translate-y-1 transition-transform" />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer CTA */}
                {/* <div className="mt-40 text-center space-y-12 pb-24 border-t border-white/5 pt-24">
                    <div className="space-y-4">
                        <h2 className="text-4xl md:text-5xl font-bold italic font-serif">Ready to Map Your Journey?</h2>
                        <p className="text-muted-foreground text-sm max-w-2xl mx-auto leading-relaxed">
                            Every professional milestone begins with a single step. Join thousands of practitioners stacking toward university-conferred degrees.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button className="h-16 px-12 bg-primary hover:bg-primary/90 text-white rounded-xl text-[12px] font-black uppercase tracking-widest transition-all">
                            Enroll as IKON Practitioner
                        </Button>
                        <Button variant="outline" className="h-16 px-12 bg-white/5 border-white/10 hover:bg-white/10 text-white rounded-xl text-[12px] font-black uppercase tracking-widest transition-all">
                            Browse Credential Catalog
                        </Button>
                    </div>
                </div> */}
            </CommonWrapper>
        </section>
    );
};
