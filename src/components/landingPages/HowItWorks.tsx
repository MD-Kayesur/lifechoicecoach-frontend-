"use client";

import CommonWrapper from "@/common/CommonWrapper";
import { GraduationCap, BookOpen, Trophy, Award } from "lucide-react";

export const HowItWorks = () => {
    const steps = [
        {
            title: "Micro-Credentials",
            desc: "Earn 10 ECTS per credential by mastering 10 core competencies.",
            icon: BookOpen,
            credits: "10 ECTS"
        },
        {
            title: "Stack & Accumulate",
            desc: "Stack multiple credentials to reach degree milestones.",
            icon: Trophy,
            credits: "Progression"
        },
        {
            title: "Earn Your Degree",
            desc: "Convert your credits into a full degree from EIU, Paris.",
            icon: GraduationCap,
            credits: "Bachelors / Masters"
        }
    ];

    return (
        <section id="how-it-works" className="py-24 bg-[#050a14] relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] glow-blue opacity-10 pointer-events-none" />

            <CommonWrapper className="max-w-[1400px]">
                <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
                    <div className="text-[10px] text-primary font-bold uppercase tracking-[4px]">SECTION 3.0</div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Stackable Degree Pathways</h2>
                    <p className="text-muted-foreground text-lg">Build toward your future by stacking verified skills into recognized university degrees.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 relative">
                    {/* Connection Lines */}
                    <div className="hidden md:block absolute top-[60px] left-[20%] right-[20%] h-[1px] border-t border-dashed border-white/10 z-0" />

                    {steps.map((step, idx) => (
                        <div key={idx} className="relative z-10 flex flex-col items-center text-center space-y-6">
                            <div className="w-24 h-24 rounded-full bg-card border border-white/5 flex items-center justify-center relative group">
                                <div className="absolute inset-0 rounded-full bg-primary/20 scale-0 group-hover:scale-100 transition-transform duration-500" />
                                <step.icon className="w-10 h-10 text-white relative z-10" />
                                <div className="absolute -top-2 -right-2 px-2 py-1 rounded bg-primary text-[10px] font-bold text-white uppercase">{step.credits}</div>
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-xl font-bold text-white">{step.title}</h3>
                                <p className="text-muted-foreground text-sm max-w-[200px]">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Degree Tiers */}
                <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { tier: "Bachelor", count: "18 MCs / 180 ECTS" },
                        { tier: "Master", count: "12 MCs / 120 ECTS" },
                        { tier: "Doctorate", count: "24 MCs / 240 ECTS" }
                    ].map((degree) => (
                        <div key={degree.tier} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all cursor-pointer group">
                            <Award className="w-8 h-8 text-primary mb-6 group-hover:scale-110 transition-transform" />
                            <h4 className="text-2xl font-bold text-white mb-2">{degree.tier}</h4>
                            <p className="text-xs text-muted-foreground uppercase font-bold tracking-widest">{degree.count}</p>
                        </div>
                    ))}
                </div>
            </CommonWrapper>
        </section>
    );
};
