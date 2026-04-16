"use client";

import CommonWrapper from "@/common/CommonWrapper";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import neuralScanImg from "@/assets/images/neural_scan.png";
import learningLoopImg from "@/assets/images/learning_loop_diagram.png";

export const NeuroscienceHero = () => {
    return (
        <section className="relative min-h-[100vh] flex items-center overflow-hidden bg-transparent">
            {/* Background Grid & Effects */}
            <div className="absolute inset-0 pointer-events-none opacity-40"
                style={{
                    backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)`,
                    backgroundSize: '4rem 4rem',
                    maskImage: 'radial-gradient(ellipse 60% 50% at 50% 50%, #000 70%, transparent 100%)'
                }}
            />
            <div className="absolute top-[-150px] right-[-150px] w-[1000px] h-[1000px] rounded-full
             bg-[radial-gradient(circle,rgba(231, 156, 27, 0.13)_0%,transparent_65%)] pointer-events-none" />
            <div className="absolute bottom-[-350px] left-[-200px] w-[1000px] h-[1000px] rounded-full bg-[radial-gradient(circle,rgba(26,58,107,0.5)_0%,transparent_70%)] pointer-events-none" />

            <CommonWrapper className="relative z-10 w-full max-w-[1200px] px-5 md:px-[48px] py-[80px]">
                <div className="grid lg:grid-cols-[1fr_420px] gap-10 md:gap-[72px] items-center">
                    {/* Left content */}
                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-6 duration-1000 ease-in-out">
                        <div>
                            <div className="inline-flex items-center gap-[8px] bg-primary border-none p-[6px_14px] md:px-[16px] md:py-[6px] rounded-full mb-[26px] shadow-[0_4px_0_#8a1e27,0_6px_10px_rgba(0,0,0,0.3)] max-w-full">
                                <div className="w-[6px] h-[6px] bg-white rounded-full blink flex-shrink-0" />
                                <span className="text-[10px] md:text-[11px] font-bold text-white tracking-[1px] md:tracking-[1.6px] uppercase font-mono truncate">
                                    IKON SKILLS™ · NEUROSCIENCE OF LEARNING
                                </span>
                            </div>
                            <h1 className="font-cormorant font-bold text-[clamp(38px,4.5vw,68px)] leading-[1.08] text-white mb-[28px]">
                                Every brain <br />
                                <span className="text-gold2 italic italic">is different.</span> <br />
                                <span className="text-white">Every learner gets proof.</span>
                            </h1>
                        </div>
                        <p className="text-[17px] leading-[1.8] text-white/60 max-w-[650px] font-outfit">
                            Ten IKON Practitioners. One Micro-Credential. Ten completely personalized journeys, each ending at the same destination: <span className="text-white font-semibold underline decoration-primary/40 underline-offset-4">proven, verified competency.</span>
                        </p>
                        <div className="pt-4 flex items-center gap-[14px]">
                            <a
                                href="#science"
                                className="bg-primary text-white font-bold text-[14px] px-[24px] md:px-[28px] py-[13px] rounded-[8px] hover:bg-gold2 transition-all cursor-pointer shadow-[0_6px_0_#8a1e27,0_8px_16px_rgba(0,0,0,0.35)] active:translate-y-[5px] active:shadow-[0_1px_0_#8a1e27] hover:translate-y-[3px] hover:shadow-[0_3px_0_#8a1e27] w-full sm:w-auto text-center"
                            >
                                Read Science Below
                            </a>
                        </div>
                    </div>

                    {/* Right side - Floating Proof Cards */}
                    <div className="relative h-[520px] hidden lg:block animate-in fade-in slide-in-from-right-8 duration-1000 delay-300">
                        {/* Neural Sync Card */}
                        <div className="absolute top-0 right-[-80px] w-[340px] bg-[#0a1122]/90 border border-white/10 backdrop-blur-[12px] p-5 rounded-[24px] animate-f1 z-20 shadow-[0_30px_60px_rgba(0,0,0,0.5)]">
                            <div className="aspect-[4/3] w-full rounded-[16px] overflow-hidden mb-4 relative">
                                <Image
                                    src={neuralScanImg}
                                    alt="Neural Activity Scan"
                                    className="object-cover w-full h-full opacity-90 group-hover:scale-110 transition-transform duration-700"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1122] to-transparent opacity-40" />
                            </div>
                            <div className="space-y-3">
                                <div className="flex justify-between items-center text-[10px] font-mono tracking-widest text-[#49cbc7] uppercase">
                                    <span>Neural Response Mapping</span>
                                    <span>V.4.2</span>
                                </div>
                                <h3 className="text-white text-lg font-bold font-outfit leading-tight">Dynamic Cognitive Baseline established</h3>
                                <div className="flex gap-2">
                                    <div className="h-1 flex-1 bg-white/10 rounded-full overflow-hidden">
                                        <div className="h-full bg-[#49cbc7] w-[78%]" />
                                    </div>
                                    <span className="text-[10px] text-white/40 font-mono">78% Sync</span>
                                </div>
                            </div>
                        </div>

                        {/* Learning Loop Card */}
                        <div className="absolute bottom-[40px] left-[-10px] w-[260px] bg-[#0a1122]/80 border border-white/5 backdrop-blur-[8px] p-5 rounded-[24px] animate-f2 z-10 shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
                            <div className="aspect-square w-full rounded-[16px] overflow-hidden mb-4 border border-white/5">
                                <Image
                                    src={learningLoopImg}
                                    alt="Learning Loop Diagram"
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <div className="space-y-2">
                                <div className="text-[9px] font-mono tracking-widest text-[#e04d2e] uppercase font-bold">Closed Loop Assessment</div>
                                <h3 className="text-white/90 text-sm font-bold font-outfit">Self-Correcting <br />Neural Pathways</h3>
                            </div>
                        </div>

                        {/* Tiny Verification Badge */}
                        <div className="absolute top-[80px] left-[20px] p-3 px-4 rounded-[16px] bg-[#1a7a72]/20 border border-[#1a7a72]/30 backdrop-blur-[6px] animate-f3 z-30 flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-[#1a7a72] flex items-center justify-center text-white shadow-[0_0_15px_rgba(26,122,114,0.5)]">
                                <CheckCircle2 size={16} />
                            </div>
                            <div>
                                <div className="text-[8px] font-mono text-white/40 uppercase">Verified</div>
                                <div className="text-[11px] font-bold text-white font-outfit">Competency Proven</div>
                            </div>
                        </div>
                    </div>
                </div>
            </CommonWrapper>
        </section>
    );
};
