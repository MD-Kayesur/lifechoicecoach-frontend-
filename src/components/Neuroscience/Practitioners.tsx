"use client";

import CommonWrapper from "@/common/CommonWrapper";

export const Practitioners = () => {
    const practitioners = [
        { name: "Priya", country: "India", level: "Beginner", emoji: "👩‍💼" },
        { name: "Ahmed", country: "Nigeria", level: "Intermediate", emoji: "👨‍🔧" },
        { name: "Siti", country: "Indonesia", level: "Advanced", emoji: "👩‍🎓" },
        { name: "Raj", country: "Sri Lanka", level: "Beginner", emoji: "👨‍💻" },
        { name: "Fatima", country: "Bangladesh", level: "Intermediate", emoji: "👩‍🏫" },
        { name: "Emmanuel", country: "Ghana", level: "Beginner", emoji: "👨‍🌾" },
        { name: "Thuy", country: "Vietnam", level: "Intermediate", emoji: "👩‍⚕️" },
        { name: "Arun", country: "Nepal", level: "Advanced", emoji: "👨‍🎨" },
        { name: "Dina", country: "Philippines", level: "Beginner", emoji: "👩‍🔬" },
        { name: "Kigen", country: "Kenya", level: "Intermediate", emoji: "👨‍⚖️" }
    ];

    return (
        <section className="py-[60px] md:py-[100px] relative">
            <CommonWrapper className="max-w-[1200px] px-5 md:px-[48px]">
                <div className="text-center mb-16 space-y-4">
                    <div className="text-[10.5px] text-primary/80 font-bold uppercase tracking-[4px] font-mono">THE 10 IKON PRACTITIONERS</div>
                    <h2 className="font-cormorant font-bold text-[clamp(28px,3.2vw,44px)] leading-[1.2] text-white">Same Start Time. <span className="text-gold2 italic">Ten Different Brains.</span></h2>
                    <p className="text-white/60 text-[16px] leading-[1.8] max-w-2xl mx-auto font-outfit text-center">
                        All ten begin at the same moment. The AI engine immediately begins profiling each one before teaching a single word.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {practitioners.map((p, i) => (
                        <div key={i} className="p-6 rounded-[18px] bg-white/5 border border-white/10 text-center space-y-4 hover:border-primary/40 transition-all group backdrop-blur-[6px]">
                            <div className="text-4xl group-hover:scale-110 transition-transform duration-300">{p.emoji}</div>
                            <div>
                                <div className="font-bold text-white font-outfit text-[15px]">{p.name}</div>
                                <div className="text-[9px] text-white/40 font-mono uppercase tracking-wider">{p.country} · {p.level}</div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 p-6 md:p-[40px] rounded-[24px] bg-primary/5 border border-primary/10 text-center max-w-4xl mx-auto">
                    <p className="text-white/70 italic leading-[1.8] font-outfit text-[17px]">
                        Each of these ten practitioners gets a completely different experience, even though they are learning the exact same Core Competencies. Here is why this is not just a feature. <span className="text-white font-bold">It is a reflection of how the human brain actually learns.</span>
                    </p>
                </div>
            </CommonWrapper>
        </section>
    );
};
