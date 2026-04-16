"use client";

import CommonWrapper from "@/common/CommonWrapper";

export const LearningLoop = () => {
    return (
        <section className="py-[80px] md:py-[120px] relative overflow-hidden bg-[#020617] border-t border-white/5">
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
            <CommonWrapper className="max-w-[1200px] px-5 md:px-[48px]">
                <div className="mb-24 space-y-4">
                    <div className="text-[10.5px] text-[#e04d2e] font-bold uppercase tracking-[4px] font-mono">THE LEARNING LOOP</div>
                    <h2 className="font-cormorant font-bold text-[clamp(28px,3.2vw,48px)] leading-[1.2] text-white max-w-4xl">
                        This Is What Happens Inside <span className="text-[#e04d2e]">Every Competency</span>
                    </h2>
                    <p className="text-white/60 text-[16px] leading-[1.8] max-w-3xl font-outfit">
                        Each of the 10 Core Competencies within a Micro-Credential follows this learning loop. The loop repeats until competency is proven at 75%. There is no shortcut. There is no skipping ahead.
                    </p>
                </div>

                <div className="relative mb-28">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-4 relative z-10">
                        {[
                            { title: "PRE-TEST", icon: "🧪", desc: "The AI checks what the practitioner already knows. No assumptions. Clean baseline." },
                            { title: "PERSONALIZED TEACHING", icon: "🎯", desc: "Content, language, examples, and depth are matched to this learner's level in real time." },
                            { title: "FORMATIVE ASSESSMENT", icon: "🔍", desc: "A diagnostic check; not to grade, but to understand what the brain has absorbed and what gaps remain." },
                            { title: "REINFORCEMENT", icon: "🔄", desc: "Gaps are addressed immediately. The concept is re-taught differently, not repeated the same way." },
                            { title: "VERIFIED MASTERY", icon: "✅", desc: "75% competency proven. Only then does the practitioner move to the next Core Competency.", badge: "COMPETENT" }
                        ].map((step, i, arr) => (
                            <div key={i} className="flex flex-col items-center relative gap-6">
                                {/* Arrow for desktop */}
                                {i < arr.length - 1 && (
                                    <div className="hidden md:block absolute top-[28px] -right-[15%] text-[#e04d2e] text-lg font-bold">
                                        →
                                    </div>
                                )}
                                <div className="w-[64px] h-[64px] flex items-center justify-center text-3xl">
                                    {step.icon}
                                </div>
                                <div className="space-y-3 text-center">
                                    <h4 className="text-[12px] font-bold text-[#1a7a72] tracking-[1.2px] uppercase font-mono">{step.title}</h4>
                                    <p className="text-white/50 text-[14px] leading-relaxed max-w-[200px] mx-auto font-outfit">{step.desc}</p>

                                    {step.badge && (
                                        <div className="pt-4 flex justify-center">
                                            <span className="inline-block px-5 py-2 rounded-full bg-[#e04d2e] text-[10px] font-extrabold text-white tracking-[1.5px] uppercase shadow-lg shadow-[#e04d2e]/20 font-mono">
                                                {step.badge}
                                            </span>
                                        </div>
                                    )}
                                </div>
                                {/* Arrow for mobile */}
                                {i < arr.length - 1 && (
                                    <div className="md:hidden text-[#e04d2e] text-2xl font-bold py-2">
                                        ↓
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-20 p-10 md:p-[40px] rounded-[12px] bg-gradient-to-br from-[#e04d2e]/10 to-[#1a7a72]/10 border border-[#e04d2e]/25 relative overflow-hidden max-w-5xl group">
                    <div className="absolute top-[-10px] left-8 text-[#e04d2e]/10 select-none pointer-events-none">
                        <span className="text-[120px] font-serif leading-none">“</span>
                    </div>
                    <p className="text-[18px] md:text-[20px] text-white/90 font-outfit leading-[1.7] relative z-10 px-0">
                        This loop is not just a system feature. It mirrors the natural learning cycle of the human brain: <span className="text-white font-bold">encounter, process, test, correct, consolidate.</span> Skip any step, and learning becomes shallow. Run all steps, and the learner builds real competency that lasts well beyond the assessment.
                    </p>
                </div>
            </CommonWrapper>
        </section>
    );
};
