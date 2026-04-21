"use client";

import { useState, useEffect } from "react";
import { Loader2, Check, Globe, ShieldCheck, Users, Building2, Landmark, ArrowRight, Info } from "lucide-react";
import Link from "next/link";

export const Pricing = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className="min-h-screen bg-[#0a1628] flex items-center justify-center">
                <Loader2 className="w-10 h-10 text-gold animate-spin" />
            </div>
        );
    }

    return (
        <div className="pt-[62px] min-h-screen bg-[#0a1628]">
            {/* Hero Section */}
            <section className="relative py-20 px-6 overflow-hidden border-b border-white/5 bg-[#060e1e]">
                <div className="absolute inset-0 bg-radial-gradient from-gold/10 via-transparent to-transparent opacity-40"></div>
                <div className="max-w-[1000px] mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-[10px] font-bold tracking-[1.5px] uppercase mb-6 animate-in fade-in slide-in-from-bottom-2 duration-700">
                        <Info size={12} />
                        Transparent · Flexible · Practitioner-First
                    </div>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight animate-in fade-in slide-in-from-bottom-4 duration-700">
                        Simple Pricing for Every<br />IKON Practitioner
                    </h1>
                    <p className="text-lg text-white/60 max-w-[700px] mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-6 duration-700">
                        Individual IKON Practitioners access the platform on a Pay-Per-Micro-Credential basis. 
                        Start with one skill, build toward a degree.
                    </p>
                </div>
            </section>

            <div className="max-w-[1200px] mx-auto px-6 py-20">
                {/* Section 1.1: Individual Pricing */}
                <div className="mb-24">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-8 h-8 bg-gold/10 border border-gold/20 rounded flex items-center justify-center text-gold font-mono font-bold text-xs italic">1.1</div>
                        <h2 className="text-2xl font-serif font-bold text-white uppercase tracking-wider">Individual Practitioner</h2>
                    </div>

                    <div className="bg-gradient-to-br from-[#0f2240] to-[#0a1a30] rounded-3xl border border-gold/30 p-8 md:p-12 shadow-2xl relative overflow-hidden group hover:border-gold/50 transition-all duration-500">
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-radial-gradient from-gold/10 to-transparent pointer-events-none -translate-y-1/2 translate-x-1/4"></div>
                        
                        <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-12 items-center">
                            <div>
                                <div className="inline-block px-3 py-1 rounded bg-gold text-white text-[10px] font-black uppercase tracking-widest mb-6">Popular choice</div>
                                <h3 className="text-3xl font-bold text-white mb-4">Pay-Per-Micro-Credential</h3>
                                <p className="text-white/50 text-base mb-8 max-w-[500px]">
                                    Complete learning journey, assessments, and verified credential for a single specific skill. No ongoing commitment.
                                </p>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                                    {[
                                        "Full AI-powered learning journey",
                                        "4-phase AI teaching model",
                                        "AI-generated assessments (Formative & Summative)",
                                        "Unlimited competency reattempts",
                                        "Digital badge + Certificate of Completion",
                                        "Verified record in IKON SKILLS™ Passport",
                                        "Stackable toward EIU-Paris degrees",
                                        "Quality Assured by EIU-Paris"
                                    ].map((feat, i) => (
                                        <div key={i} className="flex items-start gap-3 text-[13.5px] text-white/80">
                                            <div className="mt-1 flex-shrink-0 w-4 h-4 rounded-full bg-gold/20 flex items-center justify-center">
                                                <Check size={10} className="text-gold" strokeWidth={4} />
                                            </div>
                                            {feat}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center backdrop-blur-sm">
                                <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-2">One-time payment</div>
                                <div className="flex items-center justify-center gap-2 mb-2">
                                    <span className="text-5xl font-serif font-bold text-white leading-none">$14.99</span>
                                    <div className="flex flex-col items-start leading-none">
                                        <span className="text-gold font-bold text-[14px]">USD</span>
                                        <span className="text-white/30 text-[10px] mt-1">per MC</span>
                                    </div>
                                </div>
                                <p className="text-[11px] text-white/40 mb-8 font-medium italic">Lifetime access to your earned credential</p>
                                
                                <Link 
                                    href="/catalog"
                                    className="w-full inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold2 text-white font-bold py-4 rounded-xl shadow-[0_4px_0_#9a7e3a] hover:translate-y-[1px] hover:shadow-[0_3px_0_#9a7e3a] active:shadow-none active:translate-y-[4px] transition-all"
                                >
                                    Browse Catalog
                                    <ArrowRight size={18} />
                                </Link>
                                
                                <div className="mt-6 flex items-center justify-center gap-3 opacity-30 grayscale">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/d1/Visa_logo_2014.svg" className="h-3" alt="Visa" />
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-4" alt="Mastercard" />
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" className="h-4" alt="Stripe" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 1.2 & 1.3: Institutional & Exclusive */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Institutional Partners */}
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-8 h-8 bg-gold/10 border border-gold/20 rounded flex items-center justify-center text-gold font-mono font-bold text-xs italic">1.2</div>
                            <h2 className="text-xl font-serif font-bold text-white uppercase tracking-wider">Institutional Partners</h2>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-gold/30 transition-all group h-full flex flex-col">
                            <div className="mb-6 w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center text-gold group-hover:scale-110 transition-transform">
                                <Building2 size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Schools & Organizations</h3>
                            <p className="text-white/50 text-[14px] leading-relaxed mb-8 flex-grow">
                                Bulk licensing for educational institutions, government agencies, and corporate teams. Deploy verified credentials at scale.
                            </p>
                            <div className="space-y-4 mb-8">
                                {[
                                    "Volume-based per-seat pricing",
                                    "Institutional analytics dashboard",
                                    "Cohort enrollment management",
                                    "Custom domain curation",
                                    "White-label options available"
                                ].map((feat, i) => (
                                    <div key={i} className="flex items-center gap-3 text-[13px] text-white/70">
                                        <Check size={14} className="text-gold" />
                                        {feat}
                                    </div>
                                ))}
                            </div>
                            <button className="w-full bg-white/5 border border-white/10 hover:border-gold hover:bg-gold hover:text-white text-white font-bold py-3 rounded-xl transition-all uppercase tracking-widest text-xs">
                                Contact Sales
                            </button>
                        </div>
                    </div>

                    {/* Exclusive Country Partner */}
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-8 h-8 bg-gold/10 border border-gold/20 rounded flex items-center justify-center text-gold font-mono font-bold text-xs italic">1.3</div>
                            <h2 className="text-xl font-serif font-bold text-white uppercase tracking-wider">Exclusive Partner</h2>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-gold/30 transition-all group h-full flex flex-col">
                            <div className="mb-6 w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center text-gold group-hover:scale-110 transition-transform">
                                <Globe size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Country Exclusive Licensing</h3>
                            <p className="text-white/50 text-[14px] leading-relaxed mb-8 flex-grow">
                                Revenue-share model for one exclusive partner per country. Manage regional operations with full white-label customization.
                            </p>
                            <div className="space-y-4 mb-8">
                                {[
                                    "Full white-label customization",
                                    "Partner agent portal access",
                                    "Co-branded credential issuance",
                                    "Dedicated regional support",
                                    "Exclusive market rights"
                                ].map((feat, i) => (
                                    <div key={i} className="flex items-center gap-3 text-[13px] text-white/70">
                                        <Check size={14} className="text-gold" />
                                        {feat}
                                    </div>
                                ))}
                            </div>
                            <button className="w-full bg-white/5 border border-white/10 hover:border-gold hover:bg-gold hover:text-white text-white font-bold py-3 rounded-xl transition-all uppercase tracking-widest text-xs">
                                Apply for Partnership
                            </button>
                        </div>
                    </div>
                </div>

                {/* Section 2.0: Comparison Table */}
                <div className="mt-24">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-8 h-8 bg-gold/10 border border-gold/20 rounded flex items-center justify-center text-gold font-mono font-bold text-xs italic">2.0</div>
                        <h2 className="text-2xl font-serif font-bold text-white uppercase tracking-wider">What is Included</h2>
                    </div>

                    <div className="overflow-x-auto rounded-2xl border border-white/10 shadow-2xl">
                        <table className="w-full text-left border-collapse bg-white/5">
                            <thead>
                                <tr className="bg-white/10 border-b border-white/20">
                                    <th className="p-6 text-[11px] font-bold text-white uppercase tracking-widest font-mono">Platform Feature</th>
                                    <th className="p-6 text-[11px] font-bold text-gold uppercase tracking-widest font-mono text-center">Individual</th>
                                    <th className="p-6 text-[11px] font-bold text-white/50 uppercase tracking-widest font-mono text-center">Institution</th>
                                    <th className="p-6 text-[11px] font-bold text-white/50 uppercase tracking-widest font-mono text-center">Country Partner</th>
                                </tr>
                            </thead>
                            <tbody className="text-[13.5px]">
                                {[
                                    { f: "AI-Powered Learning Journey", i: true, s: true, c: true },
                                    { f: "Verified Digital Badge + Certificate", i: true, s: true, c: true },
                                    { f: "IKON SKILLS™ Passport Access", i: true, s: true, c: true },
                                    { f: "10 ECTS · Stackable toward Degrees", i: true, s: true, c: true },
                                    { f: "Institutional Analytics Dashboard", i: false, s: true, c: true },
                                    { f: "White-Label Customization", i: false, s: "Optional", c: true },
                                    { f: "Co-Branded Issuance", i: false, s: false, c: true },
                                    { f: "Partner Agent Portal", i: false, s: false, c: true },
                                    { f: "Market Exclusivity Rights", i: false, s: false, c: true },
                                ].map((row, i) => (
                                    <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                        <td className="p-5 text-white/80 font-medium">{row.f}</td>
                                        <td className="p-5 text-center">
                                            {typeof row.i === 'boolean' ? (row.i ? <Check size={18} className="mx-auto text-gold" /> : <XIcon />) : <span className="text-white/40">{row.i}</span>}
                                        </td>
                                        <td className="p-5 text-center">
                                            {typeof row.s === 'boolean' ? (row.s ? <Check size={18} className="mx-auto text-white/50" /> : <XIcon />) : <span className="text-white/40">{row.s}</span>}
                                        </td>
                                        <td className="p-5 text-center">
                                            {typeof row.c === 'boolean' ? (row.c ? <Check size={18} className="mx-auto text-white/50" /> : <XIcon />) : <span className="text-white/40">{row.c}</span>}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Accreditation Footer */}
                <div className="mt-20 pt-10 border-t border-white/10 text-center">
                    <p className="text-[11px] text-white/30 max-w-[800px] mx-auto leading-relaxed">
                        IKON SKILLS™ Micro-Credentials are quality assured by European International University, Paris (EIU-Paris). 
                        All accreditations and rankings listed on this platform are held by EIU-Paris and underpin the academic 
                        standing of every credential issued.
                    </p>
                </div>
            </div>
        </div>
    );
};

const XIcon = () => (
    <div className="mx-auto w-4 h-[1.5px] bg-white/10 rounded-full"></div>
);
