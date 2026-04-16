"use client";

import { useState, useEffect } from "react";
import { useGetSubscriptionPlansQuery, SubscriptionPlan } from "@/redux/features/enrollment/subscriptionsplansApi";
import { Loader2 } from "lucide-react";

export const Pricing = () => {
    const { data: plansData, isLoading, isError } = useGetSubscriptionPlansQuery();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Default features if none provided by API
    const defaultFeatures = [
        'Full learning access per MC',
        'AI-powered assessment',
        'Digital credential per MC',
        'Assessment attempts included',
        'Practitioner Dashboard access'
    ];

    // Safely extract plans array from different potential API response shapes
    const plansArray = Array.isArray(plansData)
        ? plansData
        : (plansData as any)?.results || (plansData as any)?.data || [];

    const plans = plansArray.map((plan: SubscriptionPlan) => ({
        id: plan.id,
        name: plan.name,
        price: typeof plan.price === 'number' ? `$${plan.price.toFixed(2)}` : plan.price,
        per: plan.duration_months ? (plan.duration_months >= 12 ? '/ year' : `/ ${plan.duration_months} months`) : '/ month',
        cap: plan.description || 'Unlimited Access',
        feats: plan.features && plan.features.length > 0 ? plan.features : defaultFeatures,
        featured: plan.name.toLowerCase().includes('practitioner') || plan.name.toLowerCase().includes('popular')
    }));


    if (!mounted || isLoading) {
        return (
            <div className="min-h-screen bg-[#0a1628] flex items-center justify-center">
                <Loader2 className="w-10 h-10 text-gold animate-spin" />
            </div>
        );
    }


    if (isError) {
        return (
            <div className="min-h-screen bg-[#0a1628] flex items-center justify-center text-white">
                <div className="text-center">
                    <p className="text-xl mb-4">Failed to load subscription plans.</p>
                    <button
                        onClick={() => window.location.reload()}
                        className="bg-gold text-white px-6 py-2 rounded-xl"
                    >
                        Retry
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div id="page-pricing" className="page active pt-[62px] min-h-screen bg-[#0a1628]">
            <section className="pr-hero bg-[#060e1e] py-16 md:py-24 px-8 md:px-12 text-center relative overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-1000">
                <div className="absolute inset-0 bg-radial-gradient from-gold/15 via-transparent to-transparent opacity-40 pointer-events-none"></div>
                <div className="relative z-10 max-w-[900px] mx-auto">
                    <div className="pr-hero-kicker text-[10.5px] font-bold tracking-[2.5px] uppercase text-gold3 mb-4">Transparent. Flexible. Practitioner-First.</div>
                    <h1 className="pr-hero-h font-serif font-bold text-[36px] md:text-[52px] text-white leading-tight mb-4 ml-0">Simple Pricing for Every<br />IKON Practitioner</h1>
                    <p className="pr-hero-sub text-[15.5px] text-white/68 leading-relaxed max-w-[620px] mx-auto font-medium">
                        Start with one Micro-Credential. Build toward a degree. Every plan includes full learning access, AI assessment, and a verified digital credential.
                    </p>
                </div>
            </section>

            <div className="pr-body max-w-[1200px] mx-auto px-8 md:px-12 py-12 md:py-16">
                <div className="mb-12">
                    <div className="pr-section-label text-[11px] font-bold tracking-[2px] uppercase text-gold font-mono mb-2">Section 1.1</div>
                    <h2 className="pr-section-h font-serif text-[28px] md:text-[34px] font-bold text-white mb-2 leading-tight">Consumer Pricing Reference</h2>
                    <p className="pr-section-sub text-[14.5px] text-white/60 leading-relaxed max-w-[700px] mb-8">
                        The following retail plans define the baseline pricing for individual IKON Practitioners and serve as the reference point for institutional pricing.
                    </p>

                    <div className="pr-plans-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
                        {plans.map((plan: any, i: number) => (
                            <div key={plan.id || i} className={`pr-plan bg-white/5 border-1.5 border-white/10 rounded-2xl overflow-hidden flex flex-col transition-all group relative hover:-translate-y-2 hover:shadow-2xl hover:shadow-gold/10 ${plan.featured ? 'border-gold shadow-2xl shadow-gold/15' : 'hover:border-gold/30'}`}>
                                {plan.featured && (
                                    <div className="pr-plan-ribbon absolute top-[16px] right-[-28px] bg-gold text-white text-[9px] font-black tracking-[1px] uppercase py-1 px-8 rotate-45 shadow-lg">Popular</div>
                                )}
                                <div className="pr-plan-head p-6 pb-5 bg-white/3 border-b border-white/8">
                                    <div className="pr-plan-name font-serif text-[22px] font-bold text-white mb-3 group-hover:text-gold transition-colors">{plan.name}</div>
                                    <div className="pr-plan-price flex items-baseline gap-1 mb-2">
                                        <div className="pr-plan-amt font-serif text-[42px] font-bold text-white leading-none">{plan.price}</div>
                                        <div className="pr-plan-per text-[12px] text-white/50">{plan.per}</div>
                                    </div>
                                    <div className="pr-plan-mc text-[11px] font-bold text-gold font-mono bg-gold/15 px-2.5 py-1 rounded-md inline-block">{plan.cap}</div>
                                </div>
                                <div className="pr-plan-body p-6 flex-1">
                                    <ul className="pr-feat-list space-y-3">
                                        {plan.feats.map((feat: string, fi: number) => (
                                            <li key={fi} className="text-[13px] text-white/75 flex gap-2.5 items-start leading-tight group-hover:text-white transition-colors">
                                                <span className="text-gold font-bold">✓</span>
                                                {feat}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="pr-plan-foot p-6 pt-0">
                                    <button className={`pr-plan-cta w-full py-2.5 rounded-xl text-[13px] font-bold transition-all ${plan.featured ? 'bg-gold text-white shadow-lg hover:bg-gold2 active:translate-y-1' : 'bg-white/10 text-white border border-white/20 hover:border-gold hover:bg-gold hover:text-white active:translate-y-1'}`}>
                                        {plan.name === 'Starter' ? 'Get Started' : 'Select Plan'}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

                <div className="pr-note bg-gold/10 border border-gold/40 rounded-2xl p-6 flex items-start gap-4 mb-20 animate-in fade-in duration-1000">
                    <span className="pr-note-icon text-[24px]">💡</span>
                    <div className="pr-note-text text-[14px] text-white/85 leading-relaxed">
                        <strong className="text-gold3">Degree Stacking:</strong> Every Micro-Credential you earn is worth 10 ECTS credits. When you accumulate the required ECTS for a degree (e.g. 180 for Bachelor), you can apply for institutional degree award through EIU-Paris.
                    </div>
                </div>

                <div className="institutional-section">
                    <div className="pr-section-label text-[11px] font-bold tracking-[2px] uppercase text-gold font-mono mb-2">Section 2.0</div>
                    <h2 className="pr-section-h font-serif text-[28px] md:text-[34px] font-bold text-white mb-2 leading-tight ml-0">Institutional Partners</h2>
                    <p className="pr-section-sub text-[14.5px] text-white/60 leading-relaxed max-w-[700px] mb-8">
                        Custom licensing for Education Institutions, Government Agencies, and Corporate L&D Departments.
                    </p>

                    <div className="pr-inst-grid grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
                        {[
                            { name: 'Higher Education', icon: '🎓', desc: 'Deploy 184 Micro-Credentials into your existing curriculum. Quality assured by EIU-Paris.', tag: 'COLLEGES & UNIVERSITIES', feats: ['Full API integration', 'White-label dashboard', 'Co-branded certificates'] },
                            { name: 'K-12 Schools', icon: '🏫', desc: 'Verified professional development for 21st-century teaching competencies.', tag: 'SCHOOL SYSTEMS', feats: ['Teacher PD tracking', 'AI assessment tools', 'Pedagogical support'] },
                            { name: 'Corporate L&D', icon: '🏢', desc: 'Upskill your workforce with industry-aligned digital intelligence competencies.', tag: 'ENTERPRISE LICENSING', feats: ['LMS SCORM support', 'Skills gap analytics', 'Bulk learner credits'] }
                        ].map((inst, i) => (
                            <div key={i} className="pr-inst-card bg-white/5 border border-white/10 rounded-2xl overflow-hidden p-6 transition-all hover:border-gold/30 hover:-translate-y-2 group">
                                <div className="pr-inst-icon text-[32px] mb-3">{inst.icon}</div>
                                <div className="pr-inst-name font-serif text-[21px] font-bold text-white mb-1 group-hover:text-gold transition-colors">{inst.name}</div>
                                <div className="pr-inst-tag text-[9.5px] font-bold text-gold font-mono mb-4 uppercase tracking-[0.8px]">{inst.tag}</div>
                                <p className="pr-inst-desc text-[13.5px] text-white/55 leading-relaxed mb-6">{inst.desc}</p>
                                <ul className="pr-inst-feats space-y-2 mb-8">
                                    {inst.feats.map((feat, fi) => (
                                        <li key={fi} className="text-[12.5px] text-white/75 flex items-center gap-2 group-hover:text-white transition-colors">
                                            <span className="text-gold text-[10px]">◆</span> {feat}
                                        </li>
                                    ))}
                                </ul>
                                <button className="pr-inst-cta w-full bg-white/10 border border-white/20 text-white font-bold py-2.5 rounded-xl hover:bg-gold hover:border-gold transition-all active:translate-y-1">Contact for Pricing</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

