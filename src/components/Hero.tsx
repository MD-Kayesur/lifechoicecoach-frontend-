"use client";

import CommonWrapper from "@/common/CommonWrapper";
import { Button } from "@/components/ui/button";

export const Hero = () => {
    return (
        <div id="home" className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-background">
            {/* Background Glows */}
            <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] glow-red opacity-50 pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] glow-blue opacity-30 pointer-events-none" />
            <div className="absolute inset-0 grid-overlay opacity-20 pointer-events-none" />

            <CommonWrapper className="relative z-10 max-w-[1400px]">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left content */}
                    <div className="space-y-8 max-w-2xl">
                        <div className="inline-flex items-center px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-4 animate-in fade-in slide-in-from-bottom-2">
                            Proof of Skill • 184 Micro-Credentials • IKONSKILLS.AC
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight animate-in fade-in slide-in-from-bottom-4 duration-700">
                            Skills that are <br />
                            <span className="text-primary">verified</span>, stackable, <br />
                            and portable.
                        </h1>
                        <p className="text-lg text-muted-foreground leading-relaxed animate-in fade-in slide-in-from-bottom-6 duration-700">
                            IKON SKILLS™ is the world&apos;s most comprehensive Micro-Credential platform.
                            Each credential proves exactly what you can do — 10 verified competencies, 10 ECTS, instantly stackable toward full degrees.
                            Quality Assured by European International University, Paris.
                        </p>

                        <div className="flex flex-wrap gap-4 animate-in fade-in slide-in-from-bottom-8 duration-700">
                            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-14 text-base font-bold transition-all hover:scale-105 shadow-lg shadow-primary/20">
                                Explore All 184 Credentials
                            </Button>
                            <Button size="lg" variant="outline" className="text-white border-white/20 bg-white/5 hover:bg-white/10 rounded-full px-8 h-14 text-base font-bold transition-all hover:scale-105">
                                Enroll Free
                            </Button>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-white/10 animate-in fade-in slide-in-from-bottom-10 duration-700">
                            {[
                                { label: "Micro-Credentials", val: "184" },
                                { label: "Domains", val: "10" },
                                { label: "Competencies", val: "1,840" },
                                { label: "AI-Assessed", val: "100%" },
                            ].map((stat) => (
                                <div key={stat.label} className="space-y-1">
                                    <div className="text-3xl font-black text-white">{stat.val}</div>
                                    <div className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right side - Floating Cards */}
                    <div className="relative hidden lg:block h-[600px]">
                        <div className="absolute top-10 right-0 w-80 p-6 rounded-3xl bg-card border border-white/10 shadow-2xl animate-in zoom-in spin-in-1 duration-1000">
                            <div className="text-[10px] text-primary font-bold uppercase tracking-widest mb-2">CAT 01 - AI & AUTOMATION</div>
                            <h3 className="text-xl font-bold text-white mb-4">AI Prompt Engineer</h3>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Prompt design", "Chain Logic", "Output validation"].map(s => (
                                    <span key={s} className="px-2 py-1 rounded bg-white/5 text-[10px] text-muted-foreground">{s}</span>
                                ))}
                            </div>
                            <div className="flex justify-between items-end border-t border-white/5 pt-4">
                                <div className="text-[10px] text-muted-foreground uppercase">10 ECTS • 10 Competencies</div>
                                <div className="px-3 py-1 rounded bg-primary/20 text-primary text-[10px] font-bold">IKON Practitioner</div>
                            </div>
                        </div>

                        <div className="absolute top-60 right-40 w-80 p-6 rounded-3xl bg-card border border-white/10 shadow-2xl animate-in zoom-in spin-in-2 duration-1000 delay-150">
                            <div className="text-[10px] text-primary font-bold uppercase tracking-widest mb-2">CAT 05 - DATA & ANALYTICS</div>
                            <h3 className="text-xl font-bold text-white mb-4">Data Storytelling Designer</h3>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Visualization", "Narrative", "Insights"].map(s => (
                                    <span key={s} className="px-2 py-1 rounded bg-white/5 text-[10px] text-muted-foreground">{s}</span>
                                ))}
                            </div>
                            <div className="flex justify-between items-end border-t border-white/5 pt-4">
                                <div className="text-[10px] text-muted-foreground uppercase">10 ECTS • 10 Competencies</div>
                                <div className="px-3 py-1 rounded bg-primary/20 text-primary text-[10px] font-bold">IKON Practitioner</div>
                            </div>
                        </div>

                        <div className="absolute top-[420px] right-20 w-80 p-6 rounded-3xl bg-card border border-white/10 shadow-2xl animate-in zoom-in spin-in-3 duration-1000 delay-300">
                            <div className="text-[10px] text-primary font-bold uppercase tracking-widest mb-2">CAT 10 - BRAND LEADERSHIP</div>
                            <h3 className="text-xl font-bold text-white mb-4">Brand Identity Architect</h3>
                            <div className="flex justify-between items-end border-t border-white/5 pt-4">
                                <div className="text-[10px] text-muted-foreground uppercase">10 ECTS • 10 Competencies</div>
                                <div className="px-3 py-1 rounded bg-primary/20 text-primary text-[10px] font-bold">IKON Practitioner</div>
                            </div>
                        </div>
                    </div>
                </div>
            </CommonWrapper>
        </div>
    );
};
