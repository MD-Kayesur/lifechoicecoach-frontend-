"use client";

import CommonWrapper from "@/common/CommonWrapper";
import { useRouter } from "next/navigation";

export const Hero = () => {
    const router = useRouter();
    return (
        <section id="home" className="relative min-h-[100vh] flex items-center overflow-hidden bg-transparent">
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

            <CommonWrapper className="relative z-10 max-w-[1200px] px-[48px] py-[80px]">
                <div className="grid lg:grid-cols-[1fr_460px] gap-[72px] items-center">
                    {/* Left content */}
                    <div>
                        <div className="inline-flex items-center gap-[8px] bg-primary border-none px-[16px] py-[6px] rounded-full mb-[26px] shadow-[0_4px_0_#8a1e27,0_6px_10px_rgba(0,0,0,0.3)]">
                            <div className="w-[6px] h-[6px] bg-white rounded-full blink" />
                            <span className="text-[11px] font-bold text-white tracking-[1.6px] uppercase font-mono">
                                Proof of Skill · 184 Micro-Credentials · ikonskills.ac
                            </span>
                        </div>

                        <h1 className="font-cormorant font-bold text-[clamp(38px,4.8vw,62px)] leading-[1.08] text-white mb-[22px]">
                            Skills that are<br />
                            <em className="text-gold2 not-italic">verified, stackable,</em><br />
                            and portable.
                        </h1>

                        <p className="text-[16px] leading-[1.75] text-white/60 max-w-[500px] mb-[36px] font-outfit">
                            IKON SKILLS™ is the world&apos;s most comprehensive Micro-Credential platform.
                            Each credential proves exactly what you can do — 10 verified competencies, 10 ECTS, instantly stackable toward full degrees.
                            Quality Assured by European International University, Paris.
                        </p>

                        <div className="flex flex-wrap gap-[14px] mb-[48px]">
                            <button
                                onClick={() => router.push("/catalog")}
                                className="bg-primary text-white font-bold text-[14px] px-[28px] py-[13px] rounded-[8px] hover:bg-gold2 transition-all cursor-pointer shadow-[0_6px_0_#8a1e27,0_8px_16px_rgba(0,0,0,0.35)] active:translate-y-[5px] active:shadow-[0_1px_0_#8a1e27] hover:translate-y-[3px] hover:shadow-[0_3px_0_#8a1e27]"
                            >
                                Explore All 184 Credentials
                            </button>
                            <button className="bg-primary text-white font-bold text-[14px] px-[28px] py-[13px] rounded-[8px] hover:bg-gold2 transition-all cursor-pointer shadow-[0_6px_0_#8a1e27,0_8px_16px_rgba(0,0,0,0.35)] active:translate-y-[5px] active:shadow-[0_1px_0_#8a1e27] hover:translate-y-[3px] hover:shadow-[0_3px_0_#8a1e27]">
                                Enroll Free
                            </button>
                        </div>

                        {/* KPI Display */}
                        <div className="flex gap-[32px]">
                            {[
                                { n: "184", l: "Micro-Credentials" },
                                { n: "10", l: "Domains" },
                                { n: "1,840", l: "Competencies" },
                                { n: "100%", l: "AI-Assessed" },
                            ].map((kpi) => (
                                <div key={kpi.l}>
                                    <div className="font-cormorant text-[34px] font-bold text-gold2 leading-none mb-[4px]">{kpi.n}</div>
                                    <div className="text-[10.5px] text-white/45 tracking-[1px] uppercase font-mono">{kpi.l}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right side - Floating Multi-Cards */}
                    <div className="relative h-[490px] hidden lg:block">
                        {/* Smaller Card A */}
                        <div className="absolute top-[10px] left-[10px] w-[205px] h-fit bg-white/5 border border-white/10 backdrop-blur-[6px] p-[18px_20px] rounded-[15px] animate-f2">
                            <div className="font-mono text-[9px] font-semibold tracking-[1.2px] uppercase text-gold3 mb-[7px]">Cat 02 · Data & Analytics</div>
                            <div className="text-[14px] font-bold text-white leading-[1.3] mb-[9px]">Data Storytelling Designer</div>
                            <div className="inline-flex items-center gap-[5px] bg-gold/18 border border-gold/28 p-[3px_8px] rounded-[4px] mb-[9px]">
                                <div className="w-[5px] h-[5px] rounded-full bg-gold3" />
                                <div className="text-[9px] font-semibold text-gold3 font-mono uppercase">EQF 6 · 10 ECTS</div>
                            </div>
                        </div>

                        {/* Main Floating Card */}
                        <div className="absolute top-[40px] right-0 w-[285px] bg-gradient-to-br from-navy2/95 to-navy/99 border border-[rgba(196,136,14,0.35)] shadow-[0_24px_60px_rgba(0,0,0,0.45)] backdrop-blur-[6px] p-[18px_20px] rounded-[15px] animate-f1 z-10">
                            <div className="font-mono text-[9px] font-semibold tracking-[1.2px] uppercase text-gold3 mb-[7px]">Cat 01 · AI & Automation</div>
                            <div className="text-[14px] font-bold text-white leading-[1.3] mb-[9px]">AI Prompt Engineer</div>
                            <div className="inline-flex items-center gap-[5px] bg-[rgba(196,136,14,0.18)] border border-[rgba(196,136,14,0.28)] p-[3px_8px] rounded-[4px] mb-[9px]">
                                <div className="w-[5px] h-[5px] rounded-full bg-gold3" />
                                <div className="text-[9px] font-semibold text-gold3 font-mono uppercase">Verified · EQF 6/7/8</div>
                            </div>
                            <div className="flex flex-wrap gap-[4px]">
                                {["Prompt design", "Chain logic", "Output validation", "Bias reduction"].map(chip => (
                                    <span key={chip} className="text-[9px] p-[2px_6px] rounded-[3px] bg-white/7 text-white/55 font-mono">{chip}</span>
                                ))}
                                <span className="text-[9px] p-[2px_6px] rounded-[3px] bg-white/7 text-white/55 font-mono">+6 more</span>
                            </div>
                            <div className="flex justify-between items-center mt-[11px] border-t border-white/10 pt-[11px]">
                                <div className="text-[9.5px] text-white/45 font-mono">10 ECTS · 10 Competencies</div>
                                <div className="text-[9px] font-bold text-gold2 bg-gold/15 p-[2px_7px] rounded-[3px] font-mono whitespace-nowrap">IKON Practitioner</div>
                            </div>
                        </div>

                        {/* Smaller Card B */}
                        <div className="absolute bottom-[65px] left-0 w-[222px] bg-white/5 border border-white/10 backdrop-blur-[6px] p-[18px_20px] rounded-[15px] animate-f3">
                            <div className="font-mono text-[9px] font-semibold tracking-[1.2px] uppercase text-gold3 mb-[7px]">Cat 10 · Brand Leadership</div>
                            <div className="text-[14px] font-bold text-white leading-[1.3] mb-[9px]">Brand Identity Architect</div>
                            <div className="inline-flex items-center gap-[5px] bg-gold/18 border border-gold/28 p-[3px_8px] rounded-[4px] mb-[9px]">
                                <div className="w-[5px] h-[5px] rounded-full bg-gold3" />
                                <div className="text-[9px] font-semibold text-gold3 font-mono uppercase">Foundation · TWBF</div>
                            </div>
                        </div>

                        {/* Smaller Card C */}
                        <div className="absolute bottom-[18px] right-[12px] w-[185px] bg-white/5 border border-white/10 backdrop-blur-[6px] p-[18px_20px] rounded-[15px] animate-f4">
                            <div className="font-mono text-[9px] font-semibold tracking-[1.2px] uppercase text-gold3 mb-[7px]">Cat 09 · Teaching & Edu</div>
                            <div className="text-[14px] font-bold text-white leading-[1.3] mb-[9px]">AI-Assisted Teaching</div>
                            <div className="inline-flex items-center gap-[5px] bg-gold/18 border border-gold/28 p-[3px_8px] rounded-[4px] mb-[9px]">
                                <div className="w-[5px] h-[5px] rounded-full bg-gold3" />
                                <div className="text-[9px] font-semibold text-gold3 font-mono uppercase">MQF 6</div>
                            </div>
                        </div>
                    </div>
                </div>
            </CommonWrapper>
        </section>
    );
};
