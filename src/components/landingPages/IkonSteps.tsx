"use client";

import CommonWrapper from "@/common/CommonWrapper";

export const IkonSteps = () => {
    const steps = [
        { n: "1", t: "Enroll as IKON Practitioner", d: "Create your Practitioner profile and select your first Micro-Credential from any of the 10 domains." },
        { n: "2", t: "Learn & Apply", d: "Engage with AI-native learning content mapped to 10 core competencies per Micro-Credential." },
        { n: "3", t: "AI Assessment", d: "Complete competency-based assessments. 100% AI-assessed. Rigorous, verified, standards-aligned." },
        { n: "4", t: "Earn, Stack & Share", d: "Your credential lands in your IKON SKILLS™ Passport. Stack toward full EIU-Paris degrees. Share globally." }
    ];

    return (
        <section className="hiw-bg section bg-transparent relative">
            <CommonWrapper className="max-w-[1200px] px-0">
                <div className="eyebrow">How It Works</div>
                <h2 className="sec-h text-[42px]">Four steps to Proof of Skill</h2>

                <div className="steps-row relative font-outfit mt-[44px] grid grid-cols-2 lg:grid-cols-4 gap-[22px] before:content-[''] before:absolute before:top-[26px] before:left-[calc(12.5%+18px)] before:right-[calc(12.5%+18px)] before:h-[1px] before:bg-gradient-to-r before:from-transparent before:via-gold before:to-transparent lg:before:block before:hidden">
                    {steps.map((s, i) => (
                        <div key={i} className="step text-center group">
                            <div className="step-n w-[50px] h-[50px] rounded-full bg-gold/20 border border-gold/35 text-white flex items-center justify-center mx-auto mb-[16px] font-cormorant text-[21px] font-bold relative z-10 transition-all duration-300 group-hover:bg-gold group-hover:scale-110">
                                {s.n}
                            </div>
                            <div className="text-[13.5px] font-bold text-white mb-[6px]">{s.t}</div>
                            <div className="text-[12.5px] text-white/60 leading-[1.65] max-w-[240px] mx-auto">{s.d}</div>
                        </div>
                    ))}
                </div>
            </CommonWrapper>
        </section>
    );
};
