import { Check, RotateCw } from "lucide-react";
import Link from "next/link";

export const ConsumerPricing = () => {
    return (
        <section className="py-24 px-6 relative">
            <div className="max-w-[1200px] mx-auto">
                <div className="mb-12">
                    <span className="text-[#C43030] text-[10px] font-mono font-bold tracking-[2px] uppercase block mb-2 italic">Section 1.1</span>
                    <h2 className="text-4xl font-serif font-medium text-white mb-4">Consumer Pricing</h2>
                    <p className="text-white/40 text-[14px] leading-relaxed max-w-[800px]">
                        Individual IKON Practitioners access the platform on a Pay-Per-Micro-Credential basis. No subscription. No monthly commitment. Purchase the credential you want, when you want it.
                    </p>
                </div>

                <div className="bg-[#0f1a2a]/80 backdrop-blur-xl border border-[#C43030]/30 rounded-[32px] p-8 md:p-12 shadow-[0_0_50px_rgba(196,48,48,0.05)] mb-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Price Column */}
                        <div className="flex flex-col">
                            <h3 className="text-2xl font-bold text-white mb-8">Pay-Per-Micro-Credential</h3>
                            <div className="flex items-end gap-3 mb-6">
                                <span className="text-7xl font-serif font-bold text-white leading-none">$14.99</span>
                                <span className="text-white/40 text-lg mb-2">per MC</span>
                            </div>
                            <div className="inline-block self-start px-4 py-1.5 rounded-full bg-[#C43030]/10 border border-[#C43030]/20 text-[#C43030] text-[10px] font-bold uppercase mb-8">
                                1 MC · No Subscription Required
                            </div>
                            <p className="text-white/50 text-[14px] leading-relaxed mb-10 max-w-[450px]">
                                Purchase any Micro-Credential from the catalog. Your AI-powered learning journey begins immediately — teach, assess, remediate, and confirm competency across all 10 Core Competencies at your own pace.
                            </p>
                            <Link 
                                href="/catalog"
                                className="w-full bg-[#C43030] hover:bg-[#A32828] text-white font-bold py-5 rounded-2xl shadow-[0_4px_0_#8B1E1E] text-center transition-all"
                            >
                                Buy a Micro-Credential
                            </Link>
                        </div>

                        {/* Features Column */}
                        <div className="space-y-4">
                            {[
                                "Full AI-powered learning journey across all 10 Core Competencies",
                                "4-phase AI teaching: concept delivery, worked example, reflective prompt, pre-assessment consolidation",
                                "AI-generated assessments: 3 Formative + 1 applied Summative per Core Competency",
                                "Unlimited competency reattempts until the 75% benchmark is achieved",
                                "Digital badge + Certificate of Completion on MC completion",
                                "Statement of Competency updated in real time as each CC is cleared",
                                "IKON SKILLS™ Passport — stackable toward full EIU-Paris degrees",
                                "Quality Assured by EIU-Paris · UAI 0756213W · Paris, France",
                                "No ongoing commitment · No subscription required"
                            ].map((feature, idx) => (
                                <div key={idx} className="flex items-start gap-4 text-[14px] text-white/80 group">
                                    <Check size={16} className="text-[#22C55E] mt-1 flex-shrink-0" />
                                    <span>{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="bg-[#1a2a44]/30 backdrop-blur-sm border border-white/5 rounded-2xl p-6 flex items-center gap-4">
                    <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center flex-shrink-0">
                        <RotateCw size={20} className="text-white/40" />
                    </div>
                    <p className="text-[13px] text-white/60 leading-relaxed">
                        Each Micro-Credential purchase includes a full AI-powered learning journey with <span className="text-[#C43030] font-bold underline decoration-[#C43030]/30 underline-offset-4">unlimited competency reattempts</span> until the 75% benchmark is achieved. IKON Practitioners advance through each Core Competency at their own pace — there is no time limit and no penalty for reattempting.
                    </p>
                </div>
            </div>
        </section>
    );
};
