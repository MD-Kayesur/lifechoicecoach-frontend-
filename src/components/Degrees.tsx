"use client";

import CommonWrapper from "@/common/CommonWrapper";
import { GraduationCap, Award, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Degrees = () => {
    const degrees = [
        {
            category: "Bachelor of Business Administration (BBA)",
            specializations: ["Global Leadership", "Innovation Management", "Finance", "Micro-Marketing"],
            requirement: "18 Micro-Credentials / 180 ECTS",
            popular: true
        },
        {
            category: "Master of Business Administration (MBA)",
            specializations: ["AI Strategic Management", "Data Governance", "Executive Leadership", "Global ESG Ops"],
            requirement: "12 Micro-Credentials / 120 ECTS"
        },
        {
            category: "Doctor of Business Administration (DBA)",
            specializations: ["AI-Driven Organizational Design", "Strategic Innovation Models", "Global Policy Architecture"],
            requirement: "24 Micro-Credentials / 240 ECTS"
        }
    ];

    return (
        <section className="py-24 bg-background text-white">
            <CommonWrapper>
                <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
                    <div className="text-[10px] text-primary font-bold uppercase tracking-[4px]">SECTION 5.0</div>
                    <h1 className="text-5xl md:text-6xl font-black tracking-tight">59 Degree Programs</h1>
                    <p className="text-muted-foreground text-xl">Stack your micro-credentials to earn internationally recognized degrees from EIU, Paris.</p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {degrees.map((degree) => (
                        <div key={degree.category} className={`p-10 rounded-3xl border transition-all hover:scale-[1.02] ${degree.popular ? "bg-card border-primary/50 shadow-2xl shadow-primary/10" : "bg-card/50 border-white/5"}`}>
                            <div className="p-4 rounded-2xl bg-white/5 w-fit mb-8">
                                <GraduationCap className="w-8 h-8 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold mb-8 leading-tight">{degree.category}</h2>

                            <div className="space-y-6 mb-12">
                                <div className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">Specializations</div>
                                <div className="space-y-3">
                                    {degree.specializations.map(spec => (
                                        <div key={spec} className="flex items-center gap-3 text-sm font-medium">
                                            <div className="w-1 h-1 rounded-full bg-primary" />
                                            {spec}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-6 pt-6 border-t border-white/5">
                                <div className="text-xs font-bold text-primary uppercase">{degree.requirement}</div>
                                <Button className="w-full h-14 bg-primary text-white text-xs font-black uppercase tracking-widest rounded-xl hover:bg-primary/90">Enroll in Course</Button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Info Section */}
                <div className="mt-20 p-12 rounded-[40px] bg-primary/10 border border-primary/20 grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold">University Partner</h2>
                        <p className="text-muted-foreground">
                            All degrees are conferred by the <span className="text-white font-bold">European International University (EIU), Paris</span>.
                            EIU is a private, independent higher education institution duly authorized to award diploma,
                            undergraduate, and postgraduate degrees.
                        </p>
                        <div className="flex gap-4">
                            <span className="px-4 py-2 rounded-full bg-white/5 text-[10px] font-bold border border-white/10 uppercase">ACBSP ACCREDITED</span>
                            <span className="px-4 py-2 rounded-full bg-white/5 text-[10px] font-bold border border-white/10 uppercase">UNESCO RECOGNIZED</span>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="text-[10px] text-primary font-bold uppercase tracking-widest">WHY STACK?</div>
                        <ul className="space-y-4">
                            {[
                                "No traditional entrance exams required",
                                "Pay-as-you-learn per Micro-Credential",
                                "Lifetime access to all core materials",
                                "Blockchain-verified final diplomas"
                            ].map(text => (
                                <li key={text} className="flex items-center gap-3 text-sm">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                                    {text}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </CommonWrapper>
        </section>
    );
};
