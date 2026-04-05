"use client";

import CommonWrapper from "@/common/CommonWrapper";
import {
    LayoutDashboard,
    BookOpen,
    CreditCard,
    Award,
    TrendingUp,
    GraduationCap,
    Settings,
    LogOut,
    CheckCircle2,
    Clock,
    Medal,
    ChevronRight
} from "lucide-react";
import { useState } from "react";

export const Dashboard = () => {
    const [activeTab, setActiveTab] = useState("Overview");

    const navItems = [
        { label: "Overview", icon: LayoutDashboard },
        { label: "My Learning", icon: BookOpen },
        { label: "MC Passport", icon: CreditCard },
        { label: "My Credentials", icon: Medal },
        { label: "Progress", icon: TrendingUp },
        { label: "Degree Pathways", icon: GraduationCap },
        { label: "Settings", icon: Settings },
    ];

    const stats = [
        { label: "Credentials Earned", val: "6" },
        { label: "ECTS Accumulated", val: "60" },
        { label: "In Progress", val: "3" },
        { label: "Competencies Verified", val: "60" },
    ];

    const inProgress = [
        {
            title: "AI Policy & Governance Analyst",
            category: "Category 01 • AI, Automation & Digital Intelligence",
            progress: 68,
            competencies: "7/10"
        },
        {
            title: "Strategic Thinking Practitioner",
            category: "Category 03 • Business, Strategy & Leadership",
            progress: 40,
            competencies: "4/10"
        },
        {
            title: "Brand Identity Architect",
            category: "Category 10 • Strategic Brand Leadership (TWBF)",
            progress: 10,
            competencies: "1/10"
        },
    ];

    const earned = [
        { name: "AI Prompt Engineer", ects: 10, eqf: 6 },
        { name: "Generative AI Practitioner", ects: 10, eqf: 6 },
        { name: "Responsible AI Practitioner", ects: 10, eqf: 7 },
        { name: "Data Storytelling Designer", ects: 10, eqf: 6 },
        { name: "AI Decision Support Analyst", ects: 10, eqf: 7 },
        { name: "AI Workflow Automation Specialist", ects: 10, eqf: 6 },
    ];

    return (
        <section className="bg-[#020617] min-h-screen text-white py-12 pb-24">
            <CommonWrapper className="max-w-[1500px]">
                <div className="grid lg:grid-cols-[280px_1fr] gap-12">

                    {/* Sidebar */}
                    <aside className="bg-[#0a1122] border border-white/5 rounded-[2.5rem] p-8 flex flex-col h-fit sticky top-28">
                        <div className="space-y-6 mb-12">
                            <div className="flex flex-col items-center text-center space-y-4">
                                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-orange-600 flex items-center justify-center text-2xl font-black shadow-2xl">EK</div>
                                <div>
                                    <h2 className="text-xl font-bold">Edward Krishnan</h2>
                                    <p className="text-[10px] text-muted-foreground font-black uppercase tracking-widest opacity-60">Founder & CEO, IKON</p>
                                </div>
                                <div className="px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-[9px] font-black text-primary uppercase tracking-widest italic">
                                    IKON Practitioner
                                </div>
                            </div>
                        </div>

                        <nav className="space-y-1">
                            {navItems.map((item) => (
                                <button
                                    key={item.label}
                                    onClick={() => setActiveTab(item.label)}
                                    className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all ${activeTab === item.label ? "bg-primary/20 text-white border border-primary/20 shadow-lg shadow-primary/5" : "text-muted-foreground hover:bg-white/5 hover:text-white"}`}
                                >
                                    <item.icon size={16} className={activeTab === item.label ? "text-primary" : "opacity-40"} />
                                    {item.label}
                                </button>
                            ))}
                        </nav>

                        <div className="mt-12 pt-8 border-t border-white/5">
                            <button className="w-full flex items-center gap-4 px-6 py-4 rounded-2xl text-[11px] font-black uppercase tracking-widest text-[#ef4444] hover:bg-[#ef4444]/10 transition-all">
                                <LogOut size={16} />
                                Sign Out
                            </button>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <main className="space-y-12">

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                            {stats.map((stat, i) => (
                                <div key={i} className="bg-[#0a1122]/50 border border-white/5 rounded-3xl p-8 space-y-2 hover:border-white/10 transition-all">
                                    <div className="text-4xl font-black italic font-serif text-white">{stat.val}</div>
                                    <div className="text-[10px] text-muted-foreground font-black uppercase tracking-[2px] leading-tight opacity-70">{stat.label}</div>
                                </div>
                            ))}
                        </div>

                        {/* Currently In Progress */}
                        <div className="space-y-6">
                            <div className="flex items-center justify-between">
                                <h2 className="text-xl font-bold font-serif italic">Currently In Progress</h2>
                            </div>
                            <div className="space-y-4">
                                {inProgress.map((item, i) => (
                                    <div key={i} className="bg-[#0a1122] border border-white/5 rounded-[2rem] p-8 group hover:border-white/20 transition-all relative overflow-hidden">
                                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 relative z-10">
                                            <div className="space-y-1">
                                                <h3 className="text-lg font-bold group-hover:text-primary transition-colors">{item.title}</h3>
                                                <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest opacity-60">{item.category}</p>
                                            </div>
                                            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-[9px] font-black text-primary uppercase tracking-widest italic shrink-0">
                                                In Progress
                                            </div>
                                        </div>

                                        <div className="space-y-3 relative z-10">
                                            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                                <div
                                                    className="h-full bg-primary transition-all duration-1000 group-hover:shadow-[0_0_15px_rgba(225,29,72,0.5)]"
                                                    style={{ width: `${item.progress}%` }}
                                                />
                                            </div>
                                            <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-muted-foreground opacity-60">
                                                <span>{item.progress}% complete</span>
                                                <span>{item.competencies} competencies assessed</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Earned Credentials */}
                        <div className="space-y-6 pt-8">
                            <h2 className="text-xl font-bold font-serif italic">Earned Credentials • IKON SKILLS™ Passport</h2>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {earned.map((item, i) => (
                                    <div key={i} className="bg-[#0a1122] border border-white/5 rounded-[2rem] p-8 space-y-6 group hover:border-primary/40 transition-all relative overflow-hidden text-center hover:-translate-y-1">
                                        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                                        <div className="relative z-10 flex flex-col items-center space-y-4">
                                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                                                <Medal className="text-primary" size={24} />
                                            </div>
                                            <div className="space-y-1">
                                                <h4 className="font-bold text-sm leading-tight min-h-[40px] flex items-center justify-center">{item.name}</h4>
                                                <div className="flex items-center justify-center gap-3">
                                                    <span className="text-[10px] text-primary font-black uppercase tracking-widest">{item.ects} ECTS</span>
                                                    <span className="text-[10px] text-muted-foreground font-black uppercase tracking-widest opacity-40">•</span>
                                                    <span className="text-[10px] text-white/60 font-black uppercase tracking-widest">EQF {item.eqf}</span>
                                                </div>
                                            </div>
                                            <button className="text-[9px] font-black text-white/40 group-hover:text-primary uppercase tracking-[2px] pt-2 flex items-center gap-2 transition-colors">
                                                View Certificate <ChevronRight size={10} />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </main>
                </div>
            </CommonWrapper>
        </section>
    );
};
