"use client";

import CommonWrapper from "@/common/CommonWrapper";

export const MicroCredential = () => {
    return (
        <section className="bg-transparent section">
            <CommonWrapper className="max-w-[1200px] px-0">
                <div className="eyebrow">What is a Micro-Credential?</div>
                <h2 className="sec-h">Not a course. Not a certificate.<br />A <span className="text-gold">Proof of Skill.</span></h2>
                <p className="sec-lead">Every IKON SKILLS™ Micro-Credential is a precisely engineered unit of competence — 10 verified skills, AI-assessed, ECTS-valued, and immediately stackable toward full degrees at EIU-Paris.</p>

                <div className="grid lg:grid-cols-2 gap-[56px] mt-[52px] items-center font-outfit">
                    {/* Left: Credential Anatomy */}
                    <div className="relative overflow-hidden p-[32px] rounded-[18px] border border-[rgba(196,136,14,0.25)] bg-[linear-gradient(145deg,var(--navy),var(--navy2))] before:content-[''] before:absolute before:top-[-60px] before:right-[-60px] before:w-[200px] before:h-[200px] before:rounded-full before:bg-[radial-gradient(circle,rgba(196,136,14,0.15),transparent)]">
                        <div className="font-cormorant text-[21px] font-bold text-white mb-[5px]">AI Prompt Engineer</div>
                        <div className="text-[11px] text-white/40 font-mono mb-[20px]">IKON SKILLS™ Micro-Credential · Category 01</div>

                        <div className="space-y-0">
                            {[
                                { ic: "🎯", l: "10 Core Competencies", v: "Each mapped, assessed, verified" },
                                { ic: "📐", l: "10 ECTS Credits", v: "Recognised academic value" },
                                { ic: "🤖", l: "100% AI-Assessed", v: "Rigorous, standardised, instant" },
                                { ic: "🏅", l: "Digital Badge + Certificate", v: "Shareable, verifiable, portable" },
                                { ic: "🔗", l: "Stackable toward Degrees", v: "BBA · MBA · DProf at EIU-Paris" },
                                { ic: "✅", l: "Quality Assured by EIU-Paris", v: "UAI 0756213W · Paris, France" },
                            ].map((row, i) => (
                                <div key={i} className="flex items-center gap-[13px] py-[10px] border-b border-white/5 last:border-b-0">
                                    <div className="text-[17px] min-w-[26px] text-center">{row.ic}</div>
                                    <div>
                                        <div className="text-[13px] font-semibold text-white">{row.l}</div>
                                        <div className="text-[11.5px] text-white/48 font-mono">{row.v}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Feature List */}
                    <div className="space-y-[24px]">
                        {[
                            { n: "01", t: "Competency-first design", d: "Every credential maps to exactly 10 clearly defined, assessable professional competencies. No fluff. No filler." },
                            { n: "02", t: "ECTS-valued and stackable", d: "Each Micro-Credential carries 10 ECTS. Stack them to earn full Bachelor, Master, or Doctoral degrees from EIU-Paris." },
                            { n: "03", t: "AI-native, AI-assessed", d: "The platform is 100% AI-taught and AI-assessed. Competencies are verified with precision, at scale, on demand." },
                            { n: "04", t: "Your IKON SKILLS™ Passport", d: "Every credential earned populates your digital Micro-Credential Passport — a living proof-of-skill portfolio, shareable with employers worldwide." },
                        ].map((item, i) => (
                            <div key={i} className="flex gap-[14px] p-[18px] bg-white/5 border border-white/10 rounded-[11px] hover:border-gold/50 hover:shadow-[0_4px_18px_rgba(203,45,57,0.1)] transition-all cursor-default group">
                                <div className="min-w-[34px] h-[34px] rounded-[7px] bg-gold text-white flex items-center justify-center font-mono text-[12.5px] font-semibold">
                                    {item.n}
                                </div>
                                <div>
                                    <div className="text-[14px] font-bold text-white mb-[4px]">{item.t}</div>
                                    <div className="text-[12.5px] text-white/60 leading-[1.6]">{item.d}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </CommonWrapper>
        </section>
    );
};
