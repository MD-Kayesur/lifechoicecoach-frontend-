"use client";

import CommonWrapper from "@/common/CommonWrapper";
import {
    Target,
    Ruler,
    Cpu,
    Medal,
    Layers,
    CheckCircle
} from "lucide-react";

export const MicroCredential = () => {
    const coreFeatures = [
        {
            icon: Target,
            title: "10 Core Competencies",
            desc: "Each mapped, assessed, verified",
            iconColor: "text-red-500"
        },
        {
            icon: Ruler,
            title: "10 ECTS Credits",
            desc: "Recognised academic value",
            iconColor: "text-blue-400"
        },
        {
            icon: Cpu,
            title: "100% AI-Assessed",
            desc: "Rigorous, standardised, instant",
            iconColor: "text-cyan-400"
        },
        {
            icon: Medal,
            title: "Digital Badge + Certificate",
            desc: "Shareable, verifiable, portable",
            iconColor: "text-yellow-500"
        },
        {
            icon: Layers,
            title: "Stackable toward Degrees",
            desc: "BBA · MBA · DProf at EIU-Paris",
            iconColor: "text-slate-400"
        },
        {
            icon: CheckCircle,
            title: "Quality Assured by EIU-Paris",
            desc: "UAI 0756213W · Paris, France",
            iconColor: "text-green-500"
        }
    ];

    const valueCards = [
        {
            number: "01",
            title: "Competency-first design",
            desc: "Every credential maps to exactly 10 clearly defined, assessable professional competencies. No fluff. No filler."
        },
        {
            number: "02",
            title: "ECTS-valued and stackable",
            desc: "Each Micro-Credential carries 10 ECTS. Stack them to earn full Bachelor, Master, or Doctoral degrees from EIU-Paris."
        },
        {
            number: "03",
            title: "AI-native, AI-assessed",
            desc: "The platform is 100% AI-taught and AI-assessed. Competencies are verified with precision, at scale, on demand."
        },
        {
            number: "04",
            title: "Your IKON SKILLS™ Passport",
            desc: "Every credential earned populates your digital Micro-Credential Passport — a living proof-of-skill portfolio, shareable with employers worldwide."
        }
    ];

    return (
        <section className="py-24 bg-[#050a14] relative overflow-hidden">
            {/* Background pattern - diagonal lines */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
                style={{
                    backgroundImage: `repeating-linear-gradient(-45deg, #1e293b 0, #1e293b 1px, transparent 0, transparent 15px)`,
                }}
            />

            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-blue-500/5 pointer-events-none" />

            {/* Glowing background elements */}
            <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] glow-red opacity-20 pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] glow-blue opacity-10 pointer-events-none" />

            <CommonWrapper className="max-w-[1400px] relative z-10">
                <div className="space-y-4 mb-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <div className="text-[10px] text-primary font-bold uppercase tracking-[4px]">WHAT IS A MICRO-CREDENTIAL?</div>
                    <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-[1.1]">
                        Not a course. Not a certificate. <br />
                        A <span className="text-primary italic">Proof of Skill.</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
                        Every IKON SKILLS™ Micro-Credential is a precisely engineered unit of competence —
                        10 verified skills, AI-assessed, ECTS-valued, and immediately stackable toward full
                        degrees at EIU-Paris.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Left: Main Credential Card */}
                    <div className="relative group animate-in fade-in slide-in-from-left-8 duration-1000">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-blue-500/30 rounded-[2.5rem] blur opacity-30 group-hover:opacity-50 transition duration-1000" />
                        <div className="relative bg-[#0a1122] border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl backdrop-blur-xl overflow-hidden">
                            {/* Inner card glow */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] -mr-32 -mt-32" />

                            <div className="relative space-y-10">
                                <div>
                                    <h3 className="text-3xl font-bold text-white mb-2 tracking-tight">AI Prompt Engineer</h3>
                                    <div className="flex items-center gap-2 text-[10px] font-black text-muted-foreground uppercase tracking-widest opacity-60">
                                        <span>IKON SKILLS™ Micro-Credential</span>
                                        <span className="w-1 h-1 rounded-full bg-white/40" />
                                        <span>Category 01</span>
                                    </div>
                                </div>

                                <div className="space-y-7">
                                    {coreFeatures.map((item, idx) => (
                                        <div key={idx} className="flex gap-6 group/item items-center">
                                            <div className={`p-2.5 rounded-xl bg-white/5 border border-white/5 ${item.iconColor} group-hover/item:scale-110 transition-transform duration-300`}>
                                                <item.icon size={20} className="stroke-[2.5px]" />
                                            </div>
                                            <div>
                                                <h4 className="text-white font-bold text-base md:text-lg tracking-tight">{item.title}</h4>
                                                <p className="text-muted-foreground text-[10px] uppercase tracking-[2px] font-bold opacity-60">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="pt-8 border-t border-white/5 flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
                                            <CheckCircle className="text-primary w-5 h-5" />
                                        </div>
                                        <div className="text-[10px] text-muted-foreground uppercase font-black tracking-widest">
                                            Quality Assured
                                        </div>
                                    </div>
                                    <div className="px-3 py-1 rounded bg-white/5 border border-white/10 text-[9px] text-muted-foreground uppercase font-bold tracking-[3px]">
                                        IKON OS™ 2.0
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Value Cards */}
                    <div className="space-y-4">
                        {valueCards.map((card, idx) => (
                            <div
                                key={idx}
                                className="group relative bg-[#0f172a]/50 border border-white/5 hover:border-white/20 rounded-2xl p-6 transition-all duration-500 animate-in fade-in slide-in-from-right-8"
                                style={{ animationDelay: `${idx * 150}ms` }}
                            >
                                <div className="flex gap-6 items-start">
                                    <div className="shrink-0">
                                        <div className="w-12 h-10 rounded-lg bg-primary flex items-center justify-center text-white font-black text-sm tracking-tighter">
                                            {card.number}
                                        </div>
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="text-white font-bold text-lg tracking-tight">{card.title}</h4>
                                        <p className="text-muted-foreground text-sm leading-relaxed opacity-80">{card.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </CommonWrapper>
        </section>
    );
};
