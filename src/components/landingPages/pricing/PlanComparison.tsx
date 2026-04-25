import { Check } from "lucide-react";

export const PlanComparison = () => {
    return (
        <section className="py-24 px-6">
            <div className="max-w-[1200px] mx-auto">
                <div className="mb-12">
                    <span className="text-[#C43030] text-[10px] font-mono font-bold tracking-[2px] uppercase block mb-2 italic">Plan Comparison</span>
                    <h2 className="text-4xl font-serif font-medium text-white mb-4">What Is Included</h2>
                    <p className="text-white/40 text-[14px] leading-relaxed">
                        Every IKON SKILLS™ Micro-Credential purchase — individual or institutional — includes the complete AI-powered learning and assessment experience.
                    </p>
                </div>

                <div className="overflow-x-auto rounded-[24px] border border-white/5 bg-[#0f1a2a]/40 backdrop-blur-md overflow-hidden">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-white/10 bg-white/5">
                                <th className="p-6 text-[11px] font-bold text-white/40 uppercase tracking-[2px]">Feature</th>
                                <th className="p-6 text-[11px] font-bold text-white uppercase tracking-[1px] text-center">
                                    PAY-PER-MC<br /><span className="text-[9px] text-white/40">$14.99 EACH</span>
                                </th>
                                <th className="p-6 text-[11px] font-bold text-white uppercase tracking-[1px] text-center">
                                    ACADEMIC INSTITUTION<br /><span className="text-[9px] text-white/40">CUSTOM</span>
                                </th>
                                <th className="p-6 text-[11px] font-bold text-white uppercase tracking-[1px] text-center">
                                    CORPORATE PARTNER<br /><span className="text-[9px] text-white/40">CUSTOM</span>
                                </th>
                                <th className="p-6 text-[11px] font-bold text-white uppercase tracking-[1px] text-center">
                                    WHITE-LABEL PARTNER<br /><span className="text-[9px] text-white/40">REVENUE SHARE</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="text-[13px] text-white/80">
                            {[
                                { f: "Full AI-powered learning per MC", i: true, a: true, c: true, w: true },
                                { f: "4-phase AI teaching per Core Competency", i: true, a: true, c: true, w: true },
                                { f: "3 Formative + 1 Summative Assessment per CC", i: true, a: true, c: true, w: true },
                                { f: "Unlimited competency reattempts", i: true, a: true, c: true, w: true },
                                { f: "75% pass threshold (binary: Competent / Not Yet Competent)", i: true, a: true, c: true, w: true },
                                { f: "Digital badge + Certificate of Completion", i: true, a: true, c: true, w: true },
                                { f: "Statement of Competency dashboard", i: true, a: true, c: true, w: true },
                                { f: "IKON SKILLS™ Passport & degree stacking tracker", i: true, a: true, c: true, w: true },
                                { f: "EIU-Paris quality assurance documentation", i: true, a: true, c: true, w: true },
                                { f: "Cohort management & institutional dashboard", i: false, a: true, c: true, w: true },
                                { f: "Aggregate competency reporting", i: false, a: true, c: true, w: true },
                                { f: "White-label customisation", i: false, a: true, c: false, w: true },
                                { f: "Revenue-share partner model", i: false, a: false, c: false, w: true },
                                { f: "Priority credential verification", i: false, a: true, c: true, w: true },
                            ].map((row, idx) => (
                                <tr key={idx} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                    <td className="p-5 font-medium">{row.f}</td>
                                    <td className="p-5 text-center">{row.i ? <Check size={16} className="mx-auto text-[#22C55E]" /> : <span className="text-white/10">—</span>}</td>
                                    <td className="p-5 text-center">{row.a ? <Check size={16} className="mx-auto text-[#22C55E]" /> : <span className="text-white/10">—</span>}</td>
                                    <td className="p-5 text-center">{row.c ? <Check size={16} className="mx-auto text-[#22C55E]" /> : <span className="text-white/10">—</span>}</td>
                                    <td className="p-5 text-center">{row.w ? <Check size={16} className="mx-auto text-[#22C55E]" /> : <span className="text-white/10">—</span>}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                 <div className="mt-2">
                <p className=" text-white text-[14px] leading-relaxed">
                 All plans include unlimited competency reattempts per Micro-Credential. IKON Practitioners reattempt until the 75% benchmark is achieved. There is no additional charge for reattempts.
                </p>
            </div>
            </div>
        </section>
    );
};
