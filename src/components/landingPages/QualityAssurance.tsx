"use client";

import CommonWrapper from "@/common/CommonWrapper";

export const QualityAssurance = () => {
    const badges = [
        { t: "ACBSP Accredited", s: "BBA · MBA · DBA", ic: "🛡️" },
        { t: "ASIC Premier", s: "Institution Status", ic: "🏛️" },
        { t: "QS Stars 5/5", s: "Quality Rating", ic: "⭐" },
        { t: "BrandLaureate 2025", s: "World BestBrands", ic: "🏅" },
        { t: "CEOWORLD #50", s: "Global B-School 2025", ic: "📈" },
        { t: "BGA · ECBE · ATHEA", s: "EIU-Paris Memberships", ic: "🌐" }
    ];

    return (
        <section className="qa-bg section bg-transparent relative">
            <CommonWrapper className="max-w-[1200px] px-0">
                <div className="grid lg:grid-cols-2 gap-[80px] items-start font-outfit">
                    {/* Left content */}
                    <div>
                        <div className="eyebrow ml-0">Quality Assurance</div>
                        <h2 className="sec-h text-left ml-0 mb-[30px]">Quality Assured by<br />European International<br />University, Paris</h2>
                        <p className="text-[14px] text-white/65 leading-[1.7] max-w-[500px] mb-[45px]">All IKON SKILLS™ Micro-Credentials are quality assured by European International University, Paris (EIU-Paris) — a globally recognised higher education institution. The accreditations and rankings listed here belong to EIU-Paris and underpin the academic standing of every credential issued on this platform.</p>

                        <div className="p-[22px] border-t border-white/7">
                            <div className="text-[10.5px] font-mono text-white/40 leading-[1.8] uppercase tracking-[0.5px]">
                                EIU-Paris · UAI 0756213W · 59 Rue Lamarck, 75018 Paris<br />
                                Centre d'enseignement à distance · French Education Law<br />
                                Founder & Director General: Hon. Ky. Col. Prof. Dr. Edward Roy Krishnan
                            </div>
                        </div>
                    </div>

                    {/* Right grid */}
                    <div className="space-y-[32px]">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-[12px]">
                            {badges.map((b, i) => (
                                <div key={i} className="bg-white/5 border border-white/10 rounded-[13px] p-[24px_12px] text-center transition-all hover:border-gold/40 hover:bg-white/[0.07] cursor-default group">
                                    <div className="text-[24px] mb-[15px] group-hover:scale-110 transition-transform duration-300">{b.ic}</div>
                                    <div className="text-[10px] font-bold text-white uppercase tracking-[1px] mb-[3px] leading-tight">{b.t}</div>
                                    <div className="text-[9px] text-white/40 font-mono uppercase">{b.s}</div>
                                </div>
                            ))}
                        </div>

                        <div className="p-[18px] bg-white/[0.03] border border-white/5 rounded-[11px] text-[9.5px] text-white/40 leading-[1.6] italic">
                            Note: All accreditations, rankings, and memberships listed above are held by European International University, Paris (EIU-Paris). IKON SKILLS™ is operated by IKON Educational and Psychological Consultancy (Reg. NS0232097X, Malaysia).
                        </div>
                    </div>
                </div>
            </CommonWrapper>
        </section>
    );
};
