import { Building2, Briefcase, Handshake } from "lucide-react";

export const InstitutionalPricing = () => {
    return (
        <section className="py-24 px-6 bg-[#02070e]">
            <div className="max-w-[1200px] mx-auto">
                <div className="mb-12">
                    <span className="text-[#C43030] text-[10px] font-mono font-bold tracking-[2px] uppercase block mb-2 italic">Section 1.2</span>
                    <h2 className="text-4xl font-serif font-medium text-white mb-4">Institutional Pricing</h2>
                    <p className="text-white/40 text-[14px] leading-relaxed">
                        Designed for universities, corporations, and training providers deploying IKON SKILLS™ at scale. All institutional pricing is calculated at a discount to the consumer reference rate.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Card 1: Academic */}
                    <div className="bg-[#0f1a2a]/60 border border-white/5 rounded-3xl p-8 flex flex-col hover:border-[#C43030]/30 transition-all group">
                        <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Building2 size={24} className="text-white/60" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Academic Institution</h3>
                        <span className="text-[#C43030] text-[10px] font-mono uppercase tracking-[1px] mb-6">University / College Partner</span>
                        <p className="text-white/40 text-[13px] leading-relaxed mb-8 flex-grow">
                            For accredited institutions integrating IKON SKILLS™ into credit-bearing programs or offering as co-curricular credentials.
                        </p>
                        <ul className="space-y-3 mb-10">
                            {[
                                "Volume-based per-seat pricing",
                                "White-label option available",
                                "EIU-Paris QA documentation",
                                "Cohort enrollment management",
                                "Institutional analytics dashboard"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-[13px] text-white/60">
                                    <div className="w-1 h-1 rounded-full bg-[#C43030]" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <button className="w-full bg-[#C43030] hover:bg-[#A32828] text-white font-bold py-4 rounded-xl shadow-[0_4px_0_#8B1E1E] transition-all">
                            Request Institutional Quote
                        </button>
                    </div>

                    {/* Card 2: Corporate */}
                    <div className="bg-[#0f1a2a]/60 border border-white/5 rounded-3xl p-8 flex flex-col hover:border-[#C43030]/30 transition-all group">
                        <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Briefcase size={24} className="text-white/60" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Corporate Partner</h3>
                        <span className="text-[#C43030] text-[10px] font-mono uppercase tracking-[1px] mb-6">Enterprise Workforce Upskilling</span>
                        <p className="text-white/40 text-[13px] leading-relaxed mb-8 flex-grow">
                            For organisations upskilling teams across AI, data, leadership, brand, and operational domains with verified proof-of-skill credentials.
                        </p>
                        <ul className="space-y-3 mb-10">
                            {[
                                "Team enrollment (10-10,000+ seats)",
                                "Custom domain curation",
                                "HR system integration support",
                                "Branded credential certificates",
                                "Aggregate competency reporting"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-[13px] text-white/60">
                                    <div className="w-1 h-1 rounded-full bg-[#C43030]" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <button className="w-full bg-[#C43030] hover:bg-[#A32828] text-white font-bold py-4 rounded-xl shadow-[0_4px_0_#8B1E1E] transition-all">
                            Request Corporate Quote
                        </button>
                    </div>

                    {/* Card 3: White-Label */}
                    <div className="bg-[#0f1a2a]/60 border border-white/5 rounded-3xl p-8 flex flex-col hover:border-[#C43030]/30 transition-all group">
                        <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Handshake size={24} className="text-white/60" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">White-Label Partner</h3>
                        <span className="text-[#C43030] text-[10px] font-mono uppercase tracking-[1px] mb-6">Platform Reseller / Agent</span>
                        <p className="text-white/40 text-[13px] leading-relaxed mb-8 flex-grow">
                            For training providers, agents, and edtech resellers offering IKON SKILLS™ Micro-Credentials under their own brand or as part of a bundled offering.
                        </p>
                        <ul className="space-y-3 mb-10">
                            {[
                                "Revenue-share model (one exclusive partner per country)",
                                "Full white-label customisation",
                                "Partner agent portal access",
                                "Co-branded credential issuance",
                                "Dedicated partner support"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-[13px] text-white/60">
                                    <div className="w-1 h-1 rounded-full bg-[#C43030]" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <button className="w-full bg-[#C43030] hover:bg-[#A32828] text-white font-bold py-4 rounded-xl shadow-[0_4px_0_#8B1E1E] transition-all">
                            Become a Partner
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
