"use client";

import CommonWrapper from "@/common/CommonWrapper";
import Link from "next/link";
import { Award, ShieldCheck, Globe, Star, CheckCircle2 } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="bg-[#020617] border-t border-white/5 pt-24 pb-12">
            <CommonWrapper className="max-w-[1400px]">
                {/* Pre-Footer: Quality Assurance */}
                <div className="grid lg:grid-cols-2 gap-12 items-center pb-24 border-b border-white/5 mb-24">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-white">Quality Assured by <br /> European International University, Paris</h2>
                        <p className="text-muted-foreground text-sm leading-relaxed max-w-lg">
                            All IKON SKILLS™ Micro-Credentials are quality assured by European International University, Paris (EIU-Paris) —
                            a globally recognised higher education institution. The accreditations and rankings listed here belong to EIU-Paris
                            and underpin the academic standing of every credential issued on this platform.
                        </p>
                        <div className="space-y-2 text-[10px] text-muted-foreground uppercase font-bold tracking-widest">
                            <p>EIU-Paris - UAI 0756313B - 59 Rue Lamarck, 75018 Paris</p>
                            <p>Centre d&apos;enseignement à distance - French Education Law</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {[
                            { label: "ACBSP Accredited", sub: "BBA - MBA - DBA", icon: ShieldCheck },
                            { label: "ASIC Premier", sub: "Institution Status", icon: CheckCircle2 },
                            { label: "QS Stars 5/5", sub: "Quality Rating", icon: Star },
                            { label: "BrandLaureate 2023", sub: "World BestBrands", icon: Award },
                            { label: "CEOWORLD #50", sub: "Global B-School 2023", icon: Globe },
                            { label: "BGA: OCBE-ATHEA", sub: "EIU-Paris Memberships", icon: Award },
                        ].map((badge) => (
                            <div key={badge.label} className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col items-center text-center space-y-2">
                                <badge.icon className="w-5 h-5 text-primary" />
                                <div className="space-y-1">
                                    <div className="text-[10px] font-bold text-white uppercase tracking-tighter">{badge.label}</div>
                                    <div className="text-[8px] text-muted-foreground uppercase font-bold">{badge.sub}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Main Footer Links */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
                    <div className="space-y-8">
                        <Link href="/" className="flex items-center gap-2">
                            <span className="text-2xl font-black tracking-tighter text-white">
                                IKON <span className="text-primary">SKILLS™</span>
                            </span>
                        </Link>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            The world&apos;s most comprehensive Proof of Skill Micro-Credential platform. 184 Micro-Credentials.
                            10 domains. Stackable toward full degrees at EIU-Paris.
                        </p>
                        <div className="space-y-4">
                            <div className="space-y-1">
                                <div className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">Platform operated by:</div>
                                <p className="text-[10px] text-white">IKON Educational and Psychological Consultancy (Reg. NS0233097X)</p>
                            </div>
                            <div className="space-y-1">
                                <div className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">Quality Assured by:</div>
                                <p className="text-[10px] text-white">European International University, Paris</p>
                            </div>
                        </div>
                    </div>

                    {[
                        {
                            title: "PLATFORM",
                            links: ["Credential Catalog", "Practitioner Dashboard", "MC Passport", "Stacking Pathways", "Degree Programs"]
                        },
                        {
                            title: "DOMAINS",
                            links: ["AI & Automation", "Data & Analytics", "Strategy & Leadership", "Teaching & Education", "Brand Leadership"]
                        },
                        {
                            title: "ABOUT",
                            links: ["About IKON SKILLS™", "EIU-Paris", "TWBF Partnership", "Accreditation & QA", "Enroll Now"]
                        }
                    ].map((col) => (
                        <div key={col.title} className="space-y-6">
                            <h3 className="text-xs font-bold text-primary uppercase tracking-[2px]">{col.title}</h3>
                            <ul className="space-y-4">
                                {col.links.map((link) => (
                                    <li key={link}>
                                        <Link href="#" className="text-sm text-muted-foreground hover:text-white transition-colors">{link}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-[10px] text-muted-foreground">
                        © 2026 IKON Educational and Psychological Consultancy • ikonskills.ac • All IKON Practitioners
                    </p>
                    <p className="text-[10px] text-muted-foreground">
                        IKON SKILLS™ is a trademark of IKON Educational and Psychological Consultancy
                    </p>
                </div>
            </CommonWrapper>
        </footer>
    );
};
