"use client";

import CommonWrapper from "@/common/CommonWrapper";

export const IkonPassport = () => {
    return (
        <section className="relative overflow-hidden bg-navy before:content-[''] before:absolute before:inset-0 before:bg-[repeating-linear-gradient(-45deg,transparent,transparent_39px,rgba(196,136,14,0.04)_40px)]">
            <CommonWrapper className="relative z-10 max-w-[1200px] px-[48px] py-[80px]">
                <div className="grid lg:grid-cols-2 gap-[64px] items-center font-outfit">
                    {/* Left content */}
                    <div>
                        <div className="p-label">Featured · IKON SKILLS™ Passport</div>
                        <h2 className="p-h text-[38px]">Your IKON SKILLS™ Micro-Credential Passport</h2>
                        <p className="p-lead">Every Micro-Credential you earn is logged in your personal digital Passport — a portable, verifiable record of exactly what you can do. Show employers, clients, and institutions your Proof of Skill in seconds.</p>

                        <div className="space-y-[17px]">
                            {[
                                { t: "Live credential registry", d: "All earned Micro-Credentials appear instantly with verification status and competency detail." },
                                { t: "Unique Practitioner ID", d: "Each IKON Practitioner receives a unique, verifiable digital identity across the platform." },
                                { t: "Shareable public profile", d: "Share a single link showing your full Passport to anyone, anywhere, without login." },
                                { t: "Degree progress tracker", d: "See exactly how many more Micro-Credentials you need to unlock a full degree from EIU-Paris." },
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-[12px]">
                                    <div className="w-[22px] h-[22px] rounded-full bg-[rgba(196,136,14,0.2)] border border-[rgba(196,136,14,0.3)] flex items-center justify-center min-w-[22px] text-[10px] text-gold3 mt-[1px]">✓</div>
                                    <div>
                                        <div className="text-[14px] font-semibold text-white mb-[3px]">{item.t}</div>
                                        <div className="text-[12px] text-white/50 leading-[1.5]">{item.d}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Passport Card */}
                    <div className="relative overflow-hidden rounded-[18px] border border-[rgba(196,136,14,0.3)] bg-[linear-gradient(150deg,#1B3A6B,#0B1F3A)] shadow-[0_32px_80px_rgba(0,0,0,0.5)]">
                        <div className="bg-[linear-gradient(135deg,var(--gold),var(--gold2))] p-[20px_26px] flex items-center justify-between">
                            <div className="font-cormorant font-bold text-[17px] text-white">IKON SKILLS<sup className="text-[9px] align-super">™</sup></div>
                            <div className="text-[9.5px] font-bold text-white font-mono tracking-[0.7px]">MICRO-CREDENTIAL PASSPORT</div>
                        </div>

                        <div className="p-[20px_26px] border-b border-white/7">
                            <div className="text-[9px] text-white/40 font-mono tracking-[1px] uppercase mb-[3px]">IKON Practitioner</div>
                            <div className="text-[16px] font-bold text-white mb-[4px]">Edward Roy Krishnan</div>
                            <div className="text-[10px] text-gold3 font-mono">ID: IKON-P-2026-00042 · Quality Assured by EIU-Paris</div>
                        </div>

                        <div className="p-[13px_26px_7px] text-[9px] text-white/40 font-mono tracking-[1px] uppercase">
                            Earned Micro-Credentials · 6 of 18 toward BBA at EIU-Paris
                        </div>

                        <div className="p-[0_18px_18px] grid grid-cols-2 gap-[7px]">
                            {[
                                { n: "AI Prompt Engineer", e: "10 ECTS · EQF 6" },
                                { n: "Generative AI Practitioner", e: "10 ECTS · EQF 6" },
                                { n: "Responsible AI Practitioner", e: "10 ECTS · EQF 7" },
                                { n: "Data Storytelling Designer", e: "10 ECTS · EQF 6" },
                                { n: "Strategic Thinking Practitioner", e: "10 ECTS · EQF 7" },
                                { n: "AI Decision Support Analyst", e: "10 ECTS · EQF 7" },
                            ].map((mc, i) => (
                                <div key={i} className="bg-white/5 border border-white/10 rounded-[7px] p-[9px_11px]">
                                    <div className="text-[10.5px] font-semibold text-white leading-[1.3] mb-[3px]">{mc.n}</div>
                                    <div className="text-[9px] text-gold3 font-mono">{mc.e}</div>
                                </div>
                            ))}
                        </div>

                        <div className="p-[13px_26px] border-t border-white/7 flex justify-between items-center">
                            <div className="text-[9.5px] text-white/35 font-mono">Quality Assured: EIU-Paris · UAI 0756213W</div>
                            <div className="text-[11.5px] font-bold text-gold2 font-mono">60 ECTS Accumulated</div>
                        </div>
                    </div>
                </div>
            </CommonWrapper>
        </section>
    );
};
