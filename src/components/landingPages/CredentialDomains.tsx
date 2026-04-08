"use client";

import CommonWrapper from "@/common/CommonWrapper";

export const CredentialDomains = () => {
    const domains = [
        { cat: "Category 01", ic: "🤖", t: "AI, Automation & Digital Intelligence", c: "15" },
        { cat: "Category 02", ic: "📊", t: "Data, Analytics & Insight", c: "15" },
        { cat: "Category 03", ic: "🧭", t: "Business, Strategy & Leadership", c: "15" },
        { cat: "Category 04", ic: "⚙️", t: "Project, Product & Operations", c: "15" },
        { cat: "Category 05", ic: "💻", t: "Technology & Digital Enablement", c: "10" },
        { cat: "Category 06", ic: "📣", t: "Marketing, Sales & Growth", c: "10" },
        { cat: "Category 07", ic: "👥", t: "HR, Learning & People Development", c: "10" },
        { cat: "Category 08", ic: "💰", t: "Finance, Compliance & ESG", c: "10" },
        { cat: "Category 09 · Teaching & Education", ic: "🎓", t: "Teaching & Education Credentials", c: "48", sub: "· BEd / MEd / EdD" },
        { cat: "Category 10 · TWBF", ic: "🏆", t: "Strategic Brand Leadership", c: "36", sub: "· CBA to Dr.SBBI" }
    ];

    return (
        <section id="domains" className="section bg-transparent relative my-20">
            <CommonWrapper className="max-w-[1200px] px-0">
                <div className="eyebrow">10 Credential Domains</div>
                <h2 className="sec-h text-[42px]">Every professional skill.<br />One unified framework.</h2>
                <p className="sec-lead">From AI Engineering to Brand Leadership to Teaching Excellence — IKON SKILLS™ maps the full spectrum of 21st-century professional mastery across 184 verified Micro-Credentials.</p>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-[15px] mt-[44px] font-outfit">
                    {domains.map((d, i) => (
                        <div key={i} className="group relative overflow-hidden bg-white/5 border border-white/10 rounded-[13px] p-[22px_18px] cursor-pointer transition-all duration-[0.25s] hover:border-gold/50 hover:translate-y-[-3px] hover:shadow-[0_10px_34px_rgba(0,0,0,0.4)]">
                            <div className="text-[9px] font-semibold tracking-[1.5px] uppercase text-gold font-mono mb-[9px]">{d.cat}</div>
                            <div className="text-[24px] mb-[9px]">{d.ic}</div>
                            <div className="text-[13.5px] font-bold text-white leading-[1.35] mb-[6px] group-hover:text-gold transition-colors">{d.t}</div>
                            <div className="text-[12px] text-white/60 font-outfit">
                                <strong className="text-white/90">{d.c}</strong> Micro-Credentials {d.sub}
                            </div>

                            {/* Animated bottom trace */}
                            <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold to-gold2 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                        </div>
                    ))}
                </div>
            </CommonWrapper>
        </section>
    );
};
