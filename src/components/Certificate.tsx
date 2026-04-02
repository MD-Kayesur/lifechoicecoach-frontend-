"use client";

import CommonWrapper from "@/common/CommonWrapper";
import { ShieldCheck, Share2, Download, ExternalLink, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Certificate = () => {
    return (
        <section className="py-24 bg-background text-white min-h-screen">
            <CommonWrapper>
                <div className="grid lg:grid-cols-[1fr_450px] gap-12 items-center">
                    {/* Visual Section */}
                    <div className="relative group">
                        <div className="absolute inset-0 bg-primary/20 blur-[100px] pointer-events-none rounded-full" />
                        <div className="relative p-1 rounded-[40px] bg-gradient-to-br from-primary/30 to-blue-500/30 overflow-hidden shadow-2xl">
                            <div className="p-12 rounded-[38px] bg-card border border-white/10 space-y-12">
                                <div className="flex justify-between items-center">
                                    <div className="text-secondary font-black tracking-tighter text-2xl">IKON SKILLS</div>
                                    <div className="w-16 h-16 rounded-full border border-primary/30 flex items-center justify-center">
                                        <Award className="w-8 h-8 text-primary" />
                                    </div>
                                </div>

                                <div className="space-y-6 text-center">
                                    <div className="text-[10px] text-primary font-bold uppercase tracking-[4px]">CERTIFICATE OF COMPETENCY</div>
                                    <h2 className="text-4xl font-black italic">John Practitioner Doe</h2>
                                    <p className="text-muted-foreground text-sm max-w-sm mx-auto leading-relaxed">
                                        Has successfully demonstrated mastery of 10 verified competencies in the domain of
                                    </p>
                                    <h3 className="text-2xl font-bold">AI Prompt Engineering</h3>
                                </div>

                                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                                    <div className="space-y-1 text-center md:text-left">
                                        <div className="text-[8px] text-muted-foreground uppercase font-bold tracking-widest">CREDENTIAL ID</div>
                                        <div className="text-[10px] font-mono text-white">IKON-MC-2024-X49S2</div>
                                    </div>
                                    <div className="space-y-1 text-center md:text-left">
                                        <div className="text-[8px] text-muted-foreground uppercase font-bold tracking-widest">VERIFIED BY</div>
                                        <div className="text-[10px] font-bold text-primary">IKON AI-ASSESSOR v4.2</div>
                                    </div>
                                    <div className="space-y-1 text-center md:text-left">
                                        <div className="text-[8px] text-muted-foreground uppercase font-bold tracking-widest">ISSUED ON</div>
                                        <div className="text-[10px] text-white">02 APR 2024</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Metadata Section */}
                    <div className="space-y-12">
                        <div className="space-y-6">
                            <div className="flex items-center gap-2 text-emerald-500 font-bold uppercase tracking-widest text-[10px]">
                                <ShieldCheck size={14} /> BLOCKCHAIN VERIFIED
                            </div>
                            <h1 className="text-4xl md:text-5xl font-black tracking-tight">Your Proof of Skill, Everywhere.</h1>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Every IKON Micro-Credential comes with a dynamic, digital-native certificate.
                                Instantly verifiable, shareable on LinkedIn, and stackable for university credit.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                            <Button className="h-14 bg-primary text-white text-xs font-black uppercase tracking-widest rounded-xl hover:bg-primary/90 flex items-center justify-center gap-2">
                                <Download size={16} /> Download PDF
                            </Button>
                            <Button variant="outline" className="h-14 bg-white/5 text-white text-xs font-black uppercase tracking-widest rounded-xl border-white/10 hover:bg-white/10 flex items-center justify-center gap-2">
                                <Share2 size={16} /> Share on LinkedIn
                            </Button>
                        </div>

                        <div className="pt-12 border-t border-white/5 space-y-6">
                            <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Technical Metadata</h3>
                            <div className="space-y-4">
                                {[
                                    { label: "Issuer", val: "European International University, Paris" },
                                    { label: "Protocol", val: "Skill-Chain v2.1" },
                                    { label: "Status", val: "Active / Permanent" },
                                    { label: "ECTS Credits", val: "10 ECTS" }
                                ].map(row => (
                                    <div key={row.label} className="flex justify-between items-center py-3 border-b border-white/5">
                                        <span className="text-xs text-muted-foreground font-bold">{row.label}</span>
                                        <span className="text-xs font-medium">{row.val}</span>
                                    </div>
                                ))}
                            </div>
                            <button className="flex items-center gap-2 text-[10px] text-primary font-bold uppercase hover:underline">
                                <ExternalLink size={12} /> View Certificate JSON on Skill-Chain
                            </button>
                        </div>
                    </div>
                </div>
            </CommonWrapper>
        </section>
    );
};
