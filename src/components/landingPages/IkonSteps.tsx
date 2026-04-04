"use client";

import CommonWrapper from "@/common/CommonWrapper";

export const IkonSteps = () => {
    const steps = [
        {
            number: "1",
            title: "Enroll as IKON Practitioner",
            desc: "Create your Practitioner profile and select your first Micro-Credential from any of the 10 domains."
        },
        {
            number: "2",
            title: "Learn & Apply",
            desc: "Engage with AI-native learning content mapped to 10 core competencies per Micro-Credential."
        },
        {
            number: "3",
            title: "AI Assessment",
            desc: "Complete competency-based assessments. 100% AI-assessed. Rigorous, verified, standards-aligned."
        },
        {
            number: "4",
            title: "Earn, Stack & Share",
            desc: "Your credential lands in your IKON SKILLS™ Passport. Stack toward full EIU-Paris degrees. Share globally."
        }
    ];

    return (
        <section id="steps" className="py-24 bg-[#020617] relative overflow-hidden">
            {/* Background pattern - diagonal lines */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
                style={{
                    backgroundImage: `repeating-linear-gradient(-45deg, #1e293b 0, #1e293b 1px, transparent 0, transparent 15px)`,
                }}
            />

            <CommonWrapper className="max-w-[1400px] relative z-10">
                <div className="space-y-4 mb-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <div className="text-[10px] text-primary font-bold uppercase tracking-[4px]">HOW IT WORKS</div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Four steps to Proof of Skill</h2>
                </div>

                <div className="relative">
                    {/* Horizontal Line Connecting Steps */}
                    <div className="hidden md:block absolute top-10 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-primary/20 via-primary to-primary/20" />

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
                        {steps.map((step, idx) => (
                            <div key={idx} className="flex flex-col items-center text-center space-y-6 animate-in fade-in zoom-in-95" style={{ animationDelay: `${idx * 200}ms` }}>
                                {/* Circle */}
                                <div className="w-20 h-20 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center relative group">
                                    <div className="absolute inset-0 rounded-full bg-primary/40 scale-0 group-hover:scale-100 transition-transform duration-500 blur-md" />
                                    <span className="text-2xl font-black text-white relative z-10">{step.number}</span>
                                </div>

                                {/* Content */}
                                <div className="space-y-3">
                                    <h3 className="text-xl font-bold text-white tracking-tight">{step.title}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed max-w-[250px] mx-auto opacity-80">
                                        {step.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </CommonWrapper>
        </section>
    );
};
