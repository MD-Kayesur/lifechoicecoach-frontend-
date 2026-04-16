"use client";

import CommonWrapper from "@/common/CommonWrapper";

export const SkillPromise = () => {
    return (
        <section className="py-[80px] md:py-[120px] bg-[#020617] border-t border-white/5 overflow-hidden">
            <CommonWrapper className="max-w-[1200px] px-5 md:px-[48px]">
                <div className="max-w-4xl mb-20 space-y-4">
                    <div className="text-[10.5px] text-primary/80 font-bold uppercase tracking-[4px] font-mono">THE PROOF OF SKILL PROMISE</div>
                    <h2 className="font-cormorant font-bold text-[clamp(28px,3.2vw,48px)] leading-[1.2] text-white">Why 75% Proven Competency <br /><span className="text-gold2 italic">Means Something Real</span></h2>
                    <p className="text-white/60 text-[18px] font-outfit leading-[1.75]">
                        A certificate that says a learner watched a video and answered a multiple-choice quiz does not prove competency. It proves that someone completed a process. That is not the same thing.
                    </p>
                </div>

                <div className="space-y-16 max-w-5xl">
                    <div className="space-y-8 text-white/60 text-[16px] leading-[1.85] font-outfit">
                        <p>
                            The IKON SKILLS™ binary verdict, <span className="text-white font-bold">Competent</span> or <span className="text-gold2 font-bold">Not Yet Competent</span>, is grounded in a principle that is both neuroscientifically sound and professionally meaningful: a learner should only be declared competent when they have demonstrated, repeatedly and consistently, that they can apply the skill in varied contexts.
                        </p>
                        <p>
                            The 75% threshold is not arbitrary. It is a <span className="text-white font-bold underline underline-offset-4 decoration-primary/30">minimum proof-of-mastery benchmark.</span> It means the practitioner has correctly applied the competency across the required range of questions and scenarios, not by luck, not by guessing, but by demonstrated understanding.
                        </p>
                    </div>

                    {/* Promise Quote Box */}
                    <div className="p-12 md:p-16 rounded-[40px] bg-primary/5 border border-primary/10 relative backdrop-blur-[6px]">
                        <div className="absolute -top-6 -left-4 text-8xl text-primary/10 font-serif leading-none">&quot;</div>
                        <p className="text-[20px] md:text-[24px] text-white/95 font-cormorant leading-[1.65] italic border-l-4 border-primary/40 pl-10 shadow-sm">
                            When an employer or institution sees an IKON SKILLS™ Micro-Credential, they are not looking at a certificate of attendance. They are looking at documented, AI-verified, loop-tested proof that this specific practitioner has demonstrated competency in each and every one of the 10 Core Competencies at a 75% benchmark. <span className="text-white font-bold not-italic">That is a credential that means something.</span>
                        </p>
                    </div>

                    {/* Footer Chips */}
                    <div className="flex flex-wrap gap-4 pt-10 border-t border-white/5">
                        {[
                            "PRE-TEST PROFILING", "CONCEPT ATTAINMENT", "FORMATIVE DIAGNOSTICS",
                            "PERSONALIZED REINFORCEMENT", "VERIFIED MASTERY", "ANTI-PASTE INTEGRITY",
                            "LANGUAGE ADAPTATION", "REAL-LIFE APPLICATION", "14 AIPS", "BINARY COMPETENCY VERDICT"
                        ].map((chip, i) => (
                            <span key={i} className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-primary tracking-[2px] uppercase font-mono shadow-sm">
                                {chip}
                            </span>
                        ))}
                    </div>
                </div>
            </CommonWrapper>
        </section>
    );
};
