"use client";

export const TrustBar = () => {
    const items = [
        { text: "Quality Assured by European International University, Paris", icon: "🛡️" },
        { text: "100% AI-Native Delivery & Assessment", icon: "⚡" },
        { text: "Proof-of-Skill Digital Credentials", icon: "🏅" },
        { text: "Stackable toward Full Degrees", icon: "🔗" },
        { text: "IKON SKILLS™ Micro-Credential Passport", icon: "📔" },
        { text: "EQF Level 6, 7 & 8 Certified", icon: "💎" },
        { text: "Globally Recognised & Accredited", icon: "🌍" },
        { text: "Earn ECTS Credits Instantly", icon: "🎓" },
        { text: "Verified by Blockchain Technology", icon: "⛓️" },
    ];

    // Double the items for seamless infinite scroll
    const marqueeItems = [...items, ...items];

    return (
        <div className="w-full bg-[#0a1628] border-y border-white/5 py-4.5 overflow-hidden relative group">
            <div className="flex animate-marquee">
                <div className="flex items-center gap-x-12 shrink-0">
                    {marqueeItems.map((item, index) => (
                        <div key={index} className="flex items-center gap-3 px-4">
                            <span className="text-[14px]">{item.icon}</span>
                            <span className="text-[12px] font-black text-white/50 uppercase tracking-[2px] font-mono whitespace-nowrap group-hover:text-white transition-colors duration-300">
                                {item.text}
                            </span>
                            <div className="ml-8 w-1 h-1 bg-[#cb2d39] rotate-45 shrink-0" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Gradient overlays for smooth edges */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0a1628] to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0a1628] to-transparent z-10 pointer-events-none" />

            <style jsx global>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 40s linear infinite;
                    display: flex;
                    width: max-content;
                }
                /* Pause on hover */
                .group:hover .animate-marquee {
                    animation-play-state: paused;
                }
            `}</style>
        </div>
    );
};
