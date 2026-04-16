"use client";

import CommonWrapper from "@/common/CommonWrapper";
import { CheckCircle2, Layers } from "lucide-react";

export const StartingPoint = () => {
    return (
        <section className="py-[60px] md:py-[100px] border-t border-white/5 bg-[#050a14]/30">
            <CommonWrapper className="max-w-[1200px] px-5 md:px-[48px]">
                <div className="grid lg:grid-cols-[1fr_420px] gap-10 md:gap-[80px] items-start">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <div className="text-[10.5px] text-primary/80 font-bold uppercase tracking-[4px] font-mono">THE STARTING POINT</div>
                            <h2 className="font-cormorant font-bold text-[clamp(32px,3.5vw,48px)] leading-[1.15] text-white">Same Micro-Credential. <br /><span className="text-gold2 italic">Different Starting Points.</span></h2>
                        </div>
                        <div className="space-y-6 text-white/60 text-[16px] leading-[1.8] font-outfit">
                            <p>
                                Imagine ten people enrolling in the same IKON SKILLS™ Micro-Credential at exactly the same time. They all have the same 10 Core Competencies to master. The benchmark is the same for everyone: <span className="text-white font-bold underline decoration-primary/30">75% proof of competency</span> before the credential is awarded.
                            </p>
                            <p>
                                But here is the key insight from neuroscience: <span className="text-primary font-bold">no two human brains arrive at the same place.</span> One learner may already know three of the ten competencies well. Another may be completely new. A third speaks English as a fourth language. A fourth learns best through stories and real examples. A fifth has strong technical skill but has never been formally assessed before.
                            </p>
                            <p>
                                Traditional learning ignores all of this. It delivers the same video, the same quiz, the same experience to everyone and calls it &quot;education.&quot; IKON SKILLS™ does something completely different. It maps the mind before the first lesson begins.
                            </p>
                        </div>
                        <div className="inline-flex items-center gap-3 px-[20px] py-[12px] rounded-xl bg-primary/10 border border-primary/20">
                            <CheckCircle2 className="w-5 h-5 text-primary" />
                            <span className="text-[14px] font-medium text-white/90 font-outfit">75% Verified Competency Threshold • Binary Verdict: Competent</span>
                        </div>
                    </div>

                    <div className="grid gap-6">
                        {[
                            { val: "10", label: "Core Competencies", sub: "Per Micro-Credential" },
                            { val: "14", label: "AI  Interaction  Points", sub: "Assessment Consistency" },
                            { val: "∞", label: "Personalized Paths", sub: "Unlimited Learning journeys" }
                        ].map((stat, i) => (
                            <div key={i} className="p-8 rounded-[20px] bg-white/[0.03] border border-white/10 relative overflow-hidden group hover:bg-white/[0.06] transition-all">
                                <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity">
                                    <Layers className="w-24 h-24" />
                                </div>
                                <div className="text-5xl font-bold text-primary mb-2 leading-none font-cormorant">{stat.val}</div>
                                <div className="text-[16px] font-bold text-white uppercase tracking-tight mb-1 font-outfit">{stat.label}</div>
                                <div className="text-[10px] text-white/40 font-mono tracking-widest uppercase">{stat.sub}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </CommonWrapper>
        </section>
    );
};
