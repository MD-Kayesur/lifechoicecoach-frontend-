"use client";

import CommonWrapper from "@/common/CommonWrapper";
import { GraduationCap, Award, Search, ChevronDown, Rocket, Trophy, BadgeCheck } from "lucide-react";
import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";

const degreeData = [
    {
        category: "Bachelor",
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
        degrees: [
            { id: 12, title: "Doctor of Professional Practice (DPP) in AI Leadership", mcs: 36, ects: 360, eqf: 8 },
            { id: 13, title: "DProf in Strategic Brand Leadership", mcs: 36, ects: 360, eqf: 8 },
            { id: 14, title: "Doctor of Education (EdD) in Digital Intelligence", mcs: 36, ects: 360, eqf: 8 }
        ]
    }
];

export const Degrees = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [activeTab, setActiveTab] = useState("All Programs");

    const filteredData = useMemo(() => {
        let data = activeTab === "All Programs" ? degreeData : degreeData.filter(d => d.category === activeTab);
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
            {/* Background glow effects */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <CommonWrapper className="max-w-[1400px] relative z-10">
                {/* Hero section */}
                <div className="text-center mb-24 space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
                    <div className="text-[10px] text-primary font-black uppercase tracking-[4px]">IKON SKILLS™ STACKABLE DEGREES</div>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight italic font-serif">
                        59 Degree Programs. <br />
                        <span className="text-white">Built from Micro-Credentials.</span>
                    </h1>
                    <p className="text-muted-foreground text-sm max-w-2xl mx-auto leading-relaxed">
                        Every degree is assembled from verified IKON SKILLS™ Micro-Credentials. Stack your credentials. Earn your qualification. No traditional lectures required.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 max-w-4xl mx-auto border-y border-white/5">
                        {[
                            { val: "59", label: "DEGREE PROGRAMS" },
                            { val: "56", label: "EIU-PARIS DEGREES" },
                            { val: "3", label: "EDUCATION DEGREES" },
                            { val: "3", label: "BRAND CERTIFICATIONS" },
                        ].map((stat, i) => (
                            <div key={i} className="text-center space-y-1">
                                <div className="text-3xl font-black text-white italic">{stat.val}</div>
                                <div className="text-[9px] text-muted-foreground font-bold uppercase tracking-widest leading-tight">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Filter & Search Bar */}
                <div className="mb-24 flex flex-col xl:flex-row gap-6 items-center border-b border-white/10 pb-12">
                    <div className="flex flex-wrap gap-2 w-full xl:w-fit bg-[#0a1122]/50 p-1.5 rounded-[1.5rem] border border-white/5 backdrop-blur-xl">
                        {["All Programs", "Bachelor", "Master", "Doctorate"].map(tab => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === tab ? "bg-primary text-white shadow-lg shadow-primary/20" : "text-muted-foreground hover:text-white"}`}
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
                            placeholder="Search degrees or disciplines..."
                            className="w-full h-16 bg-[#0a1122]/50 border border-white/10 rounded-2xl px-16 text-sm focus:outline-none focus:border-primary/50 transition-all backdrop-blur-xl"
                        />
                        <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <div className="absolute right-6 top-1/2 -translate-y-1/2 text-[10px] font-black text-muted-foreground uppercase tracking-widest opacity-40">
                            {filteredData.reduce((acc, cat) => acc + cat.degrees.length, 0)} programs
                        </div>
                    </div>
                </div>

                {/* Degrees Grid */}
                <div className="space-y-32">
                    {filteredData.map((cat, i) => (
                        <div key={i} className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500" style={{ animationDelay: `${i * 100}ms` }}>
                            <div className="flex items-center gap-6">
                                <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent to-white/5" />
                                <div className="flex items-center gap-4 px-8 py-3 rounded-2xl bg-white/5 border border-white/10">
                                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                    <h2 className="text-xl font-bold uppercase tracking-widest italic">{cat.category} Degrees</h2>
                                </div>
                                <div className="h-[2px] flex-1 bg-gradient-to-l from-transparent to-white/5" />
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {cat.degrees.map((deg) => (
                                    <div key={deg.id} className="bg-[#0a1122] border border-white/10 rounded-[3rem] p-10 space-y-8 group hover:border-primary/50 transition-all duration-700 hover:-translate-y-2 shadow-2xl relative overflow-hidden">
                                        <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-700">
                                            <GraduationCap size={120} strokeWidth={1} />
                                        </div>

                                        <div className="space-y-6 relative z-10">
                                            <div className="flex gap-4 items-center">
                                                <BadgeCheck className="text-primary w-5 h-5" />
                                                <h3 className="text-[10px] font-black uppercase tracking-widest text-primary italic">EIU-Paris Accredited</h3>
                                            </div>
                                            <h4 className="text-xl font-bold text-white group-hover:text-primary transition-colors leading-tight min-h-[56px] flex items-center">
                                                {deg.title}
                                            </h4>
                                        </div>

                                        <div className="grid grid-cols-2 gap-x-8 gap-y-4 border-y border-white/5 py-8 relative z-10">
                                            <div className="space-y-1">
                                                <div className="text-lg font-black text-white">{deg.mcs} <span className="text-[9px] text-muted-foreground uppercase opacity-40">MCs</span></div>
                                                <div className="text-[9px] text-muted-foreground font-black uppercase tracking-widest">To Stack</div>
                                            </div>
                                            <div className="space-y-1">
                                                <div className="text-lg font-black text-white">{deg.ects}</div>
                                                <div className="text-[9px] text-muted-foreground font-black uppercase tracking-widest">ECTS Credits</div>
                                            </div>
                                            <div className="space-y-1">
                                                <div className="text-lg font-black text-white">EQF {deg.eqf}</div>
                                                <div className="text-[9px] text-muted-foreground font-black uppercase tracking-widest">Framework</div>
                                            </div>
                                            <div className="space-y-1">
                                                <div className="text-lg font-black text-white">100%</div>
                                                <div className="text-[9px] text-muted-foreground font-black uppercase tracking-widest">Online Delivery</div>
                                            </div>
                                        </div>

                                        <Button className="w-full h-16 bg-white/5 border border-white/10 rounded-2xl text-[11px] font-black uppercase tracking-widest group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all transform-gpu shadow-xl relative z-10">
                                            Enroll in Pathway
                                        </Button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Quality Assurance Section */}
                <div className="mt-40 text-center space-y-12">
                    <div className="space-y-4">
                        <h3 className="text-2xl md:text-3xl font-bold italic font-serif">Quality Assured by European International University, Paris</h3>
                        <p className="text-muted-foreground text-sm max-w-3xl mx-auto leading-relaxed">
                            All EIU-Paris degrees carry full institutional quality assurance. ACBSP-accredited programs (BBA, MBA, DBA) meet CHEA-recognized standards. Brand Leadership degrees are co-delivered in partnership with The World Brands Foundation (TWBF). Teaching & Education degrees are quality-assured under IKON ProEd Malta.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-3">
                        {[
                            "ACBSP Accredited",
                            "ASIC Premier Institution",
                            "QS Stars 5/5",
                            "CEOWORLD #50 (2025)",
                            "BGA Member",
                            "ECBE Member",
                            "ATHEA Member"
                        ].map(badge => (
                            <span key={badge} className="px-6 py-2.5 rounded-full bg-[#0a1122] border border-white/10 text-[10px] font-black text-muted-foreground uppercase tracking-widest hover:border-primary hover:text-primary transition-all cursor-default">
                                {badge}
                            </span>
                        ))}
                    </div>
                </div>
            </CommonWrapper>
        </section>
    );
};
