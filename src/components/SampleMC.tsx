"use client";

import CommonWrapper from "@/common/CommonWrapper";
import { CheckCircle2, Star, Clock, BookOpen, Share2, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

export const SampleMC = () => {
    return (
        <section className="py-24 bg-background text-white">
            <CommonWrapper className="max-w-[1440px] mx-auto">
                <div className="grid lg:grid-cols-[1fr_400px] gap-12">
                    {/* Main Content */}
                    <div className="space-y-12">
                        <div className="space-y-6">
                            <div className="text-primary font-bold uppercase tracking-widest text-xs">MICRO-CREDENTIAL • CAT 01</div>
                            <h1 className="text-5xl font-black leading-tight">AI Prompt Engineer</h1>
                            <p className="text-xl text-muted-foreground leading-relaxed">
                                Master the art and science of communicating with Large Language Models.
                                This credential verifies your ability to design, optimize, and chain prompts
                                for complex automation workflows.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="p-6 rounded-3xl bg-card border border-white/5 space-y-4">
                                <div className="p-3 rounded-xl bg-primary/10 w-fit">
                                    <Clock className="text-primary w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold">Estimated Time</h3>
                                <p className="text-sm text-muted-foreground">10-15 Hours of focus-learning and interactive assessment.</p>
                            </div>
                            <div className="p-6 rounded-3xl bg-card border border-white/5 space-y-4">
                                <div className="p-3 rounded-xl bg-primary/10 w-fit">
                                    <Star className="text-primary w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold">Level</h3>
                                <p className="text-sm text-muted-foreground">Practitioner (EQF 4) - Ideal for operations and creative pros.</p>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <h2 className="text-3xl font-bold">10 Verified Competencies</h2>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {[
                                    "Zero-Shot Prompting",
                                    "Few-Shot Learning",
                                    "Chain of Thought Design",
                                    "System Message Optimization",
                                    "Prompt Chaining & Logic",
                                    "Output Formatting (JSON/XML)",
                                    "Iterative Refinement",
                                    "Security (Injection Prevention)",
                                    "Domain-Specific Contextualization",
                                    "AI Personality Engineering"
                                ].map((skill) => (
                                    <div key={skill} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5">
                                        <CheckCircle2 className="text-primary w-5 h-5 shrink-0" />
                                        <span className="text-sm font-medium">{skill}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar / CTA */}
                    <div className="space-y-8">
                        <div className="p-8 rounded-3xl bg-card border border-primary/20 shadow-2xl space-y-8 sticky top-28">
                            <div className="space-y-2">
                                <div className="text-4xl font-black">$14.99</div>
                                <div className="text-xs text-muted-foreground uppercase font-bold tracking-widest">ONE-TIME ACCESS</div>
                            </div>

                            <ul className="space-y-4">
                                {[
                                    "10 ECTS Credit Points",
                                    "AI-Verified Digital Credential",
                                    "Verifiable via IKON Skill-Chain",
                                    "Stackable toward Bachelor/MBA",
                                    "Lifetime valid Proof of Skill"
                                ].map(f => (
                                    <li key={f} className="flex items-center gap-3 text-sm text-muted-foreground">
                                        <CheckCircle2 className="text-primary w-4 h-4" />
                                        {f}
                                    </li>
                                ))}
                            </ul>

                            <Button className="w-full h-14 bg-primary text-white text-base font-bold rounded-xl uppercase">Enroll in Sample MC</Button>

                            <div className="pt-4 flex items-center justify-between border-t border-white/5">
                                <button className="flex items-center gap-2 text-xs text-muted-foreground hover:text-white transition-colors">
                                    <Share2 size={14} /> Share
                                </button>
                                <button className="flex items-center gap-2 text-xs text-muted-foreground hover:text-white transition-colors">
                                    <BookOpen size={14} /> Syllabus
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </CommonWrapper>
        </section>
    );
};
