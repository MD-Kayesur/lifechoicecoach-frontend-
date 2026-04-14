"use client";

import CommonWrapper from "@/common/CommonWrapper";
import { Check, Landmark, Globe, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Pricing = () => {
    const consumerPlans = [
        {
            name: "Starter",
            price: "$9.99",
            period: "/ month",
            subtitle: "Up to 3 MCs / month",
            features: [
                "Full learning access per MC",
                "AI-powered assessment",
                "Digital credential per MC",
                "1 assessment attempt per MC",
                "Practitioner Dashboard access"
            ]
        },
        {
            name: "Pro",
            price: "$24.99",
            period: "/ month",
            subtitle: "Up to 6 MCs / month",
            popular: true,
            features: [
                "Full learning access per MC",
                "AI-powered assessment",
                "Digital credential per MC",
                "1 assessment attempt per MC",
                "Practitioner Dashboard access",
                "Stacking pathway tracker"
            ]
        },
        {
            name: "Premium",
            price: "$49.99",
            period: "/ month",
            subtitle: "Up to 12 MCs / month",
            features: [
                "Full learning access per MC",
                "AI-powered assessment",
                "Digital credential per MC",
                "1 assessment attempt per MC",
                "Practitioner Dashboard access",
                "Stacking pathway tracker",
                "Priority credential verification"
            ]
        },
        {
            name: "Pay-Per-Credential",
            price: "$14.99",
            period: "each",
            subtitle: "1 MC - No subscription",
            features: [
                "Full learning access",
                "AI-powered assessment",
                "Digital credential",
                "1 assessment attempt",
                "No ongoing commitment"
            ]
        }
    ];

    const institutionalPlans = [
        {
            icon: Landmark,
            name: "Academic Institution",
            subtitle: "University / College Partner",
            desc: "For accredited institutions integrating IKON SKILLS™ into credit-bearing programs or offering as co-curricular credentials.",
            bullets: [
                "Volume-based per-seat pricing",
                "White-label option available",
                "EIU-Paris QA documentation",
                "Cohort enrollment management",
                "Institutional analytics dashboard"
            ],
            btnText: "Request Institutional Quote"
        },
        {
            icon: Building2,
            name: "Corporate Partner",
            subtitle: "Enterprise Workforce Upskilling",
            desc: "For organizations upskilling teams across AI, data, leadership, brand, and operational domains with verified proof-of-skill credentials.",
            bullets: [
                "Team enrollment (10-10,000+ seats)",
                "Custom domain curation",
                "HR system integration support",
                "Branded credential certificates",
                "Aggregate competency reporting"
            ],
            btnText: "Request Corporate Quote"
        },
        {
            icon: Globe,
            name: "White-Label Partner",
            subtitle: "Platform Reseller / Agent",
            desc: "For training providers, agents, and edtech resellers offering IKON SKILLS™ Micro-Credentials under their own brand or as part of a bundled offering.",
            bullets: [
                "Revenue-share model",
                "Full white-label customization",
                "Partner agent portal access",
                "Co-branded credential issuance",
                "Dedicated partner support"
            ],
            btnText: "Become a Partner"
        }
    ];

    const comparisonTable = [
        { feature: "Monthly Price", s: "$9.99", p: "$24.99", pr: "$49.99", pp: "$14.99 each", i: "Custom" },
        { feature: "MCs Per Month", s: "Up to 3", p: "Up to 6", pr: "Up to 12", pp: "1 (no subscription)", i: "Volume-based" },
        { feature: "Full Learning Access", s: true, p: true, pr: true, pp: true, i: true },
        { feature: "Digital Credential Issued", s: true, p: true, pr: true, pp: true, i: true },
        { feature: "Assessment Attempts per MC", s: "1", p: "1", pr: "1", pp: "1", i: "1" },
        { feature: "Practitioner Dashboard", s: true, p: true, pr: true, pp: false, i: true },
        { feature: "Stacking Pathway Tracker", s: false, p: true, pr: true, pp: false, i: true },
        { feature: "Priority Verification", s: false, p: false, pr: true, pp: false, i: true },
        { feature: "White-Label Option", s: false, p: false, pr: false, pp: false, i: true },
        { feature: "Analytics & Reporting", s: false, p: false, pr: false, pp: false, i: true },
        { feature: "EIU-Paris QA Documentation", s: true, p: true, pr: true, pp: true, i: true },
    ];

    return (
        <section id="pricing" className="bg-[#020617] text-white py-24 min-h-screen">
            <CommonWrapper className="max-w-[1400px]">
                {/* Header */}
                <div className="text-center mb-24 space-y-4">
                    <div className="text-[10px] text-primary font-bold uppercase tracking-[4px]">TRANSPARENT. FLEXIBLE. PRACTITIONER-FIRST.</div>
                    <h2 className="text-5xl md:text-6xl font-bold tracking-tight italic font-serif">Simple Pricing for Every <br /> IKON Practitioner</h2>
                    <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
                        Start with one Micro-Credential. Build toward a degree. Every plan includes full learning access, AI assessment, and a verified digital credential.
                    </p>
                </div>

                {/* Section 1.1: Consumer Pricing */}
                
                <div className="mb-32">
                    <div className="mb-12">
                        <span className="text-[10px] text-primary font-black uppercase tracking-widest">SECTION 1.1</span>
                        <h3 className="text-2xl font-bold mt-2">Consumer Pricing Reference</h3>
                        <p className="text-xs text-muted-foreground mt-2 opacity-60 font-bold uppercase tracking-wider">The following retail plans define the baseline pricing for individual IKON Practitioners and serve as the reference point for institutional pricing.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {consumerPlans.map((plan, i) => (
                            <div key={i} className={`relative bg-[#0a1122] border rounded-[2.5rem] p-8 flex flex-col justify-between group transition-all duration-500 hover:-translate-y-2 ${plan.popular ? "border-primary/50 shadow-2xl shadow-primary/10" : "border-white/10 hover:border-white/20"}`}>
                                {plan.popular && (
                                    <div className="absolute top-0 right-0 bg-primary text-[8px] font-black px-4 py-2 rounded-bl-2xl rounded-tr-[2.5rem] uppercase tracking-widest text-white italic">
                                        POPULAR
                                    </div>
                                )}
                                <div className="space-y-6">
                                    <div className="space-y-1">
                                        <h4 className="text-xl font-bold">{plan.name}</h4>
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-3xl font-bold">{plan.price}</span>
                                            <span className="text-[10px] text-muted-foreground uppercase font-black">{plan.period}</span>
                                        </div>
                                        <p className="text-[10px] text-primary font-black uppercase tracking-widest pt-2">{plan.subtitle}</p>
                                    </div>

                                    <ul className="space-y-4 pt-6 border-t border-white/5">
                                        {plan.features.map((f, idx) => (
                                            <li key={idx} className="flex gap-3 items-center group/item">
                                                <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center">
                                                    <Check size={10} className="text-primary group-hover/item:scale-125 transition-transform" />
                                                </div>
                                                <span className="text-[11px] font-bold text-white/80 opacity-80">{f}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Section 1.2: Institutional Pricing */}
                <div className="mb-32">
                    <h3 className="text-2xl font-bold mb-2">Institutional Pricing</h3>
                    <p className="text-xs text-muted-foreground mb-12 opacity-60 font-bold uppercase tracking-wider">Designed for universities, corporations, and training providers deploying IKON SKILLS™ at scale. All institutional pricing is calculated at a discount to the consumer reference rate.</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {institutionalPlans.map((plan, i) => (
                            <div key={i} className="bg-[#0a1122] border border-white/10 rounded-[2.5rem] p-8 space-y-8 group transition-all duration-500 hover:border-white/20 hover:shadow-2xl shadow-black/40">
                                <div className="space-y-4">
                                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                        <plan.icon size={24} />
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="text-xl font-bold">{plan.name}</h4>
                                        <p className="text-[10px] text-primary font-black uppercase tracking-widest">{plan.subtitle}</p>
                                    </div>
                                </div>
                                <p className="text-xs text-muted-foreground leading-relaxed font-medium">{plan.desc}</p>
                                <ul className="space-y-3">
                                    {plan.bullets.map((b, idx) => (
                                        <li key={idx} className="flex gap-3 items-center">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                            <span className="text-[11px] font-bold text-white/80 opacity-80">{b}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Button className="w-full h-14 bg-primary hover:bg-primary/90 text-white text-[11px] font-black uppercase tracking-widest rounded-xl transition-all shadow-lg shadow-primary/20">
                                    {plan.btnText}
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Comparison Table */}
                <div className="mt-32">
                    <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
                        <div className="space-y-2">
                            <span className="text-[10px] text-primary font-black uppercase tracking-widest">PLAN COMPARISON</span>
                            <h3 className="text-3xl font-bold">What&apos;s Included in Each Plan</h3>
                        </div>
                    </div>

                    <div className="overflow-x-auto rounded-[2rem] border border-white/10 bg-[#0a1122]/50 backdrop-blur-xl">
                        <table className="w-full text-left min-w-[1000px]">
                            <thead>
                                <tr className="border-b border-white/10 bg-white/5">
                                    <th className="p-6 text-[10px] font-black text-muted-foreground uppercase tracking-widest">FEATURE</th>
                                    <th className="p-6 text-[10px] font-black text-white uppercase tracking-widest">STARTER</th>
                                    <th className="p-6 text-[10px] font-black text-white uppercase tracking-widest">PRO</th>
                                    <th className="p-6 text-[10px] font-black text-white uppercase tracking-widest">PREMIUM</th>
                                    <th className="p-6 text-[10px] font-black text-white uppercase tracking-widest">PAY-PER-CREDENTIAL</th>
                                    <th className="p-6 text-[10px] font-black text-white uppercase tracking-widest">INSTITUTIONAL</th>
                                </tr>
                            </thead>
                            <tbody>
                                {comparisonTable.map((row, i) => (
                                    <tr key={i} className="border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors">
                                        <td className="p-6 text-[11px] font-bold text-white tracking-widest uppercase opacity-80">{row.feature}</td>
                                        {[row.s, row.p, row.pr, row.pp, row.i].map((val, idx) => (
                                            <td key={idx} className="p-6 text-center">
                                                {typeof val === "boolean" ? (
                                                    val ? (
                                                        <Check size={14} className="text-primary mx-auto" />
                                                    ) : (
                                                        <span className="text-muted-foreground font-black opacity-20">—</span>
                                                    )
                                                ) : (
                                                    <span className="text-[11px] font-bold text-white tracking-widest uppercase opacity-70">{val}</span>
                                                )}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="mt-8 text-[10px] text-muted-foreground font-medium opacity-60">All plans include one (1) assessment attempt per micro-credential. Retakes are available as a separate purchase.</p>
                </div>

                {/* Stacking Value Proposition (Added for Pathways requirement) */}
                <div className="mt-40 bg-primary/5 border border-white/5 rounded-[3rem] p-12 lg:p-20 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -mr-48 -mt-48 transition-transform group-hover:scale-110 duration-700" />
                    <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <span className="text-[10px] text-primary font-black uppercase tracking-[4px]">THE STACKING VALUE</span>
                                <h2 className="text-4xl md:text-5xl font-bold tracking-tight italic font-serif">Stack Your Way to a <br /> Professional Degree</h2>
                                <p className="text-muted-foreground text-sm leading-relaxed max-w-lg">
                                    Your personal plan is just the beginning. Every Micro-Credential you earn is a building block toward a full university-conferred degree from European International University, Paris.
                                </p>
                            </div>
                            <div className="grid grid-cols-3 gap-6">
                                {[
                                    { mc: "18", label: "MCs FOR BACHELOR" },
                                    { mc: "24", label: "MCs FOR MASTER" },
                                    { mc: "36", label: "MCs FOR DPP" },
                                ].map((step, i) => (
                                    <div key={i} className="space-y-1">
                                        <div className="text-2xl font-black text-white">{step.mc}</div>
                                        <div className="text-[8px] text-muted-foreground font-black uppercase tracking-widest leading-tight">{step.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="space-y-6 bg-[#0a1122] border border-white/10 p-8 rounded-[2rem] shadow-2xl">
                                <h4 className="text-xs font-black uppercase tracking-widest text-primary italic">PATHWAY EXAMPLE</h4>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center bg-white/5 p-4 rounded-xl border border-white/5">
                                        <span className="text-[11px] font-bold">18 × AI Prompt Engineer (MC)</span>
                                        <span className="text-[10px] font-black text-primary">180 ECTS</span>
                                    </div>
                                    <div className="flex items-center justify-center py-2 h-10">
                                        <div className="w-[1px] h-full bg-white/20 relative">
                                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary" />
                                        </div>
                                    </div>
                                    <div className="bg-primary/20 border border-primary/50 p-6 rounded-2xl text-center group-hover:scale-[1.02] transition-transform">
                                        <p className="text-[10px] font-black uppercase tracking-widest text-primary mb-2">EARN DEGREE</p>
                                        <h5 className="font-bold text-white tracking-tight">BBA in Applied AI & Automation</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Degree Programs Summary (Added for Degrees requirement) */}
                <div className="mt-40 border-t border-white/5 pt-32">
                    <div className="text-center mb-16 space-y-4">
                        <span className="text-[10px] text-primary font-black uppercase tracking-[4px]">THE FULL CREDENTIAL INVENTORY</span>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight italic font-serif leading-tight">Assemble Your Future from <br /> 59 Specialized Degree Pathways</h2>
                        <p className="text-muted-foreground text-sm max-w-2xl mx-auto italic font-medium">Standardized ECTS. University-conferred qualification. Globally recognized.</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-y border-white/5 max-w-4xl mx-auto">
                        {[
                            { val: "56", label: "EIU-PARIS DEGREES" },
                            { val: "3", label: "EDUCATION DEGREES" },
                            { val: "3", label: "BRAND CERTIFICATIONS" },
                            { val: "100%", label: "ONLINE DELIVERY" },
                        ].map((stat, i) => (
                            <div key={i} className="text-center group border-r border-white/5 last:border-0">
                                <div className="text-4xl font-black text-white group-hover:text-primary transition-colors">{stat.val}</div>
                                <div className="text-[10px] text-muted-foreground font-black uppercase tracking-widest pt-2 opacity-60 group-hover:opacity-100 transition-opacity">{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-20 flex flex-wrap justify-center gap-2">
                        {[
                            "BBA Applied AI", "MBA Strategy", "DPP Leadership", "CBA Associate", "MBA Digital Transformation", "BBA Brand Psychology"
                        ].map(tag => (
                            <span key={tag} className="px-5 py-2.5 rounded-xl bg-[#0a1122]/50 border border-white/10 text-[10px] font-black text-muted-foreground uppercase tracking-widest opacity-60 hover:opacity-100 hover:border-primary/50 transition-all cursor-default">
                                {tag}
                            </span>
                        ))}
                        <span className="px-5 py-2.5 rounded-xl bg-primary/10 border border-primary/20 text-[10px] font-black text-primary uppercase tracking-widest">+53 MORE</span>
                    </div>
                </div>

                {/* Ready to Start Stacking CTA */}
                <div className="mt-40 text-center space-y-12 animate-in fade-in zoom-in duration-1000">
                    <div className="space-y-4">
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight font-serif italic text-white">Ready to Start Stacking?</h2>
                        <p className="text-muted-foreground text-sm max-w-2xl mx-auto leading-relaxed">
                            Join thousands of IKON Practitioners building verified, stackable qualifications <br /> one Micro-Credential at a time. Quality assured by European International University, Paris.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button className="h-16 px-12 bg-primary hover:bg-primary/90 text-white rounded-xl text-[12px] font-black uppercase tracking-widest transition-all shadow-2xl shadow-primary/40 hover:scale-105">
                            Enroll as IKON Practitioner
                        </Button>
                        <Button variant="outline" className="h-16 px-12 bg-white/5 border-white/10 hover:bg-white/10 text-white rounded-xl text-[12px] font-black uppercase tracking-widest transition-all">
                            Browse Credential Catalog
                        </Button>
                    </div>
                </div>
            </CommonWrapper>
        </section>
    );
};
