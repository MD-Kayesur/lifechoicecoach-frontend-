"use client";

import CommonWrapper from "@/common/CommonWrapper";
import { GitBranch, User, GraduationCap, ArrowRight, Zap, Target, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Pathways = () => {
    const steps = [
        {
            title: "Phase 1: MC Core",
            desc: "Complete 4 foundational micro-credentials in your domain.",
            icon: BookOpen,
            color: "border-primary/20 bg-primary/10",
            iconColor: "text-primary"
        },
        {
            title: "Phase 2: Advanced MC",
            desc: "Finish 8 advanced MCs to specialize further.",
            icon: Zap,
            color: "border-blue-500/20 bg-blue-500/10",
            iconColor: "text-blue-500"
        },
        {
            title: "Phase 3: Final Stack",
            desc: "Complete remaining 6 MCs to reach the degree threshold.",
            icon: Target,
            color: "border-emerald-500/20 bg-emerald-500/10",
            iconColor: "text-emerald-500"
        },
        {
            title: "Phase 4: Graduation",
            desc: "Receive your EIU degree through the final credit accumulation.",
            icon: GraduationCap,
            color: "border-amber-500/20 bg-amber-500/10",
            iconColor: "text-amber-500"
        }
    ];

    return (
        <section className="py-24 bg-background text-white">
            <CommonWrapper className="max-w-[1440px] mx-auto">
                <div className="text-center max-w-4xl mx-auto mb-20 space-y-4">
                    <div className="text-[10px] text-primary font-bold uppercase tracking-[4px]">SECTION 6.0</div>
                    <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-tight">Your Journey Through Skills</h1>
                    <p className="text-muted-foreground text-xl">Follow the path from Micro-Credential practitioner to a full university graduate.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
                    {steps.map((step, idx) => (
                        <div key={step.title} className={`p-8 rounded-3xl border ${step.color} relative group`}>
                            <div className={`p-4 rounded-2xl bg-white/5 w-fit mb-8 ${step.iconColor}`}>
                                <step.icon className="w-8 h-8" />
                            </div>
                            <h2 className="text-xl font-bold mb-4">{step.title}</h2>
                            <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>

                            {/* Sequence Indicator */}
                            <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-white text-black flex items-center justify-center font-black text-xs">
                                0{idx + 1}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col lg:flex-row items-center gap-12 p-12 rounded-[50px] bg-card border border-white/5 shadow-2xl">
                    <div className="lg:w-1/2 space-y-8">
                        <h2 className="text-4xl font-bold font-black tracking-tight">Personalized Pathway Planning</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Every practitioner has a unique journey. Our AI-driven platform crafts a custom roadmap for you
                            based on your current skills and professional goals.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {[
                                "24/7 AI Guidance",
                                "Targeted Competency Tracking",
                                "Skill Gap Analysis",
                                "Career Growth Forecasting"
                            ].map(feat => (
                                <div key={feat} className="flex items-center gap-3">
                                    <ArrowRight className="w-4 h-4 text-primary" />
                                    <span className="text-xs font-bold uppercase tracking-widest">{feat}</span>
                                </div>
                            ))}
                        </div>
                        <Button className="h-14 px-10 bg-primary text-white text-xs font-black uppercase tracking-widest rounded-xl hover:bg-primary/90 transition-all shadow-xl shadow-primary/20">Create Your Pathway</Button>
                    </div>
                    <div className="lg:w-1/2 relative p-8">
                        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 space-y-6">
                            <h3 className="text-xs font-bold text-primary uppercase tracking-widest">REAL-TIME VISUALIZATION</h3>
                            <div className="space-y-4">
                                {[
                                    { label: "Foundation", val: 100 },
                                    { label: "Practitioner", val: 65 },
                                    { label: "Expert", val: 30 },
                                    { label: "Degree Bound", val: 15 }
                                ].map(bar => (
                                    <div key={bar.label} className="space-y-2">
                                        <div className="flex justify-between text-[10px] font-bold text-muted-foreground uppercase opacity-50">
                                            <span>{bar.label}</span>
                                            <span>{bar.val}%</span>
                                        </div>
                                        <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                                            <div className="h-full bg-primary" style={{ width: `${bar.val}%` }} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </CommonWrapper>
        </section>
    );
};
