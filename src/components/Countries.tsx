"use client";

import CommonWrapper from "@/common/CommonWrapper";
import { Check, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Pricing = () => {
    const plans = [
        {
            name: "Starter",
            price: "$9.99",
            desc: "Up to 3 MCs / month",
            features: ["Full learning access per MC", "AI-powered assessment", "Digital credential per MC", "1 assessment attempt per MC"]
        },
        {
            name: "Pro",
            price: "$24.99",
            desc: "Up to 6 MCs / month",
            features: ["Full learning access per MC", "AI-powered assessment", "Digital credential per MC", "1 assessment attempt per MC", "Practitioner Dashboard access"],
            popular: true
        },
        {
            name: "Premium",
            price: "$49.99",
            desc: "Up to 12 MCs / month",
            features: ["Full learning access per MC", "AI-powered assessment", "Digital credential per MC", "1 assessment attempt per MC", "Practitioner Dashboard access", "Priority support"]
        },
        {
            name: "Pay-Per-MC",
            price: "$14.99",
            desc: "1 MC - No subscription",
            features: ["Full learning access per MC", "AI-powered assessment", "Digital credential per MC", "1 assessment attempt per MC", "No ongoing commitment"]
        }
    ];

    return (
        <section id="pricing" className="py-24 bg-background border-t border-white/5">
            <CommonWrapper className="max-w-[1400px]">
                <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
                    <div className="text-[10px] text-primary font-bold uppercase tracking-[4px]">SECTION 4.0</div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Flexible Pricing</h2>
                    <p className="text-muted-foreground text-lg">Start with one Micro-Credential. Build toward a degree. Transparency at every step.</p>
                </div>

                <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
                    {plans.map((plan) => (
                        <div key={plan.name} className={`relative p-8 rounded-3xl border transition-all hover:-translate-y-1 ${plan.popular ? "bg-card border-primary/50 shadow-2xl shadow-primary/10" : "bg-card/50 border-white/5 hover:border-white/20"}`}>
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-[10px] font-bold text-white rounded-full uppercase tracking-widest">
                                    Most Popular
                                </div>
                            )}
                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl font-black text-white">{plan.price}</span>
                                    <span className="text-sm text-muted-foreground">/ month</span>
                                </div>
                                <p className="text-xs font-bold text-primary mt-2 uppercase tracking-wider">{plan.desc}</p>
                            </div>

                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feat) => (
                                    <li key={feat} className="flex items-start gap-3">
                                        <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                        <span className="text-xs text-muted-foreground leading-relaxed">{feat}</span>
                                    </li>
                                ))}
                            </ul>

                            <Button className={`w-full rounded-xl h-12 text-xs font-bold uppercase tracking-widest transition-all ${plan.popular ? "bg-primary text-white hover:bg-primary/90" : "bg-white/5 text-white hover:bg-white/10 border border-white/10"}`}>
                                Get Started
                            </Button>
                        </div>
                    ))}
                </div>
            </CommonWrapper>
        </section>
    );
};
