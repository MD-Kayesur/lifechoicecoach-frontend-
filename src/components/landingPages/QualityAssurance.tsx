"use client";

import CommonWrapper from "@/common/CommonWrapper";
import { Award, Shield, Star, Globe, TrendingUp, Landmark } from "lucide-react";

export const QualityAssurance = () => {
    const badges = [
        {
            icon: Shield,
            title: "ACBSP Accredited",
            subtitle: "BBA · MBA · DBA",
            color: "text-yellow-500"
        },
        {
            icon: Landmark,
            title: "ASIC Premier",
            subtitle: "Institution Status",
            color: "text-green-500"
        },
        {
            icon: Star,
            title: "QS Stars 5/5",
            subtitle: "Quality Rating",
            color: "text-yellow-400"
        },
        {
            icon: Award,
            title: "BrandLaureate 2025",
            subtitle: "World BestBrands",
            color: "text-yellow-600"
        },
        {
            icon: TrendingUp,
            title: "CEOWORLD #50",
            subtitle: "Global B-School 2025",
            color: "text-blue-400"
        },
        {
            icon: Globe,
            title: "BGA · ECBE · ATHEA",
            subtitle: "EIU-Paris Memberships",
            color: "text-cyan-500"
        }
    ];

    return (
        <section id="quality" className="py-24 bg-[#050a14] relative overflow-hidden text-white">
            {/* Background pattern - diagonal lines */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
                style={{
                    backgroundImage: `repeating-linear-gradient(-45deg, #1e293b 0, #1e293b 1px, transparent 0, transparent 15px)`,
                }}
            />

            <CommonWrapper className="max-w-[1400px] relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-start">
                    {/* Left Side Content */}
                    <div className="space-y-12 animate-in fade-in slide-in-from-left-8 duration-700">
                        <div className="space-y-6">
                            <div className="text-[10px] text-primary font-bold uppercase tracking-[4px]">QUALITY ASSURANCE</div>
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.2]">
                                Quality Assured by <br />
                                European International <br />
                                University, Paris
                            </h2>
                            <p className="text-muted-foreground text-lg max-w-xl leading-relaxed">
                                All IKON SKILLS™ Micro-Credentials are quality assured by European International
                                University, Paris (EIU-Paris) — a globally recognised higher education institution.
                                The accreditations and rankings listed here belong to EIU-Paris and underpin the
                                academic standing of every credential issued on this platform.
                            </p>
                        </div>

                        <div className="space-y-4 pt-12 border-t border-white/10 max-w-md">
                            <div className="text-[10px] text-muted-foreground font-black uppercase tracking-widest leading-loose">
                                EIU-Paris · UAI 0756213W · 59 Rue Lamarck, 75018 Paris <br />
                                Centre d'enseignement à distance · French Education Law <br />
                                Founder & Director General: Hon. Ky. Col. Prof. Dr. Edward Roy Krishnan
                            </div>
                        </div>
                    </div>

                    {/* Right Side Badges Grid */}
                    <div className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-1000">
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                            {badges.map((badge, idx) => (
                                <div key={idx} className="bg-[#0a1122] border border-white/10 rounded-2xl p-6 text-center space-y-4 hover:bg-white/5 hover:border-white/20 transition-all group shadow-xl">
                                    <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mx-auto ${badge.color} group-hover:scale-110 transition-transform duration-300`}>
                                        <badge.icon size={24} className="stroke-[2px]" />
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="text-[11px] font-black uppercase tracking-widest text-white leading-tight">
                                            {badge.title}
                                        </h4>
                                        <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider opacity-60">
                                            {badge.subtitle}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="text-[9px] text-muted-foreground uppercase font-medium leading-relaxed opacity-60 bg-white/5 p-4 rounded-xl border border-white/5">
                            Note: All accreditations, rankings, and memberships listed above are held by
                            European International University, Paris (EIU-Paris). IKON SKILLS™ is operated by
                            IKON Educational and Psychological Consultancy (Reg. NS0232097X, Malaysia).
                        </div>
                    </div>
                </div>
            </CommonWrapper>
        </section>
    );
};
