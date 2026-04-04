"use client";

import CommonWrapper from "@/common/CommonWrapper";
import {
    Bot,
    BarChart3,
    Compass,
    Settings,
    Laptop,
    Megaphone,
    Users,
    Coins,
    GraduationCap,
    Trophy
} from "lucide-react";

export const CredentialDomains = () => {
    const domains = [
        {
            category: "CATEGORY 01",
            title: "AI, Automation & Digital Intelligence",
            count: "15 Micro-Credentials",
            icon: Bot,
            iconColor: "text-blue-400"
        },
        {
            category: "CATEGORY 02",
            title: "Data, Analytics & Insight",
            count: "15 Micro-Credentials",
            icon: BarChart3,
            iconColor: "text-cyan-400"
        },
        {
            category: "CATEGORY 03",
            title: "Business, Strategy & Leadership",
            count: "15 Micro-Credentials",
            icon: Compass,
            iconColor: "text-slate-300"
        },
        {
            category: "CATEGORY 04",
            title: "Project, Product & Operations",
            count: "15 Micro-Credentials",
            icon: Settings,
            iconColor: "text-slate-400"
        },
        {
            category: "CATEGORY 05",
            title: "Technology & Digital Enablement",
            count: "10 Micro-Credentials",
            icon: Laptop,
            iconColor: "text-slate-300"
        },
        {
            category: "CATEGORY 06",
            title: "Marketing, Sales & Growth",
            count: "10 Micro-Credentials",
            icon: Megaphone,
            iconColor: "text-yellow-500"
        },
        {
            category: "CATEGORY 07",
            title: "HR, Learning & People Development",
            count: "10 Micro-Credentials",
            icon: Users,
            iconColor: "text-blue-500"
        },
        {
            category: "CATEGORY 08",
            title: "Finance, Compliance & ESG",
            count: "10 Micro-Credentials",
            icon: Coins,
            iconColor: "text-yellow-600"
        },
        {
            category: "CATEGORY 09 · TEACHING & EDUCATION",
            title: "Teaching & Education Credentials",
            count: "48 Micro-Credentials · BEd / MEd / EdD",
            icon: GraduationCap,
            iconColor: "text-slate-300"
        },
        {
            category: "CATEGORY 10 · TWBF",
            title: "Strategic Brand Leadership",
            count: "36 Micro-Credentials · CBA to Dr.SBBI",
            icon: Trophy,
            iconColor: "text-yellow-500"
        }
    ];

    return (
        <section id="domains" className="py-24 bg-[#050a14] relative overflow-hidden">
            {/* Background pattern - diagonal lines */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
                style={{
                    backgroundImage: `repeating-linear-gradient(-45deg, #1e293b 0, #1e293b 1px, transparent 0, transparent 15px)`,
                }}
            />

            {/* Glowing background elements */}
            <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] glow-red opacity-10 pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] glow-blue opacity-10 pointer-events-none" />

            <CommonWrapper className="max-w-[1400px] relative z-10">
                <div className="space-y-4 mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <div className="text-[10px] text-primary font-bold uppercase tracking-[4px]">10 CREDENTIAL DOMAINS</div>
                    <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-[1.1]">
                        Every professional skill. <br />
                        One unified framework.
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-3xl leading-relaxed">
                        From AI Engineering to Brand Leadership to Teaching Excellence — IKON SKILLS™
                        maps the full spectrum of 21st-century professional mastery across 184 verified Micro-Credentials.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                    {domains.map((domain, idx) => (
                        <div
                            key={idx}
                            className="group relative bg-[#0a1122] border border-white/10 rounded-2xl p-6 hover:bg-white/[0.05] hover:border-white/20 transition-all duration-500 animate-in fade-in zoom-in-95"
                            style={{ animationDelay: `${idx * 50}ms` }}
                        >
                            <div className="space-y-6">
                                <div className="text-[9px] text-primary font-bold uppercase tracking-widest opacity-80">
                                    {domain.category}
                                </div>
                                <div className={`w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center ${domain.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                                    <domain.icon size={20} className="stroke-[2.5px]" />
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-white font-bold text-sm leading-tight tracking-tight group-hover:text-primary transition-colors">
                                        {domain.title}
                                    </h4>
                                    <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider opacity-60">
                                        {domain.count}
                                    </p>
                                </div>
                            </div>

                            {/* Hover glow */}
                            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />
                        </div>
                    ))}
                </div>
            </CommonWrapper>
        </section>
    );
};
