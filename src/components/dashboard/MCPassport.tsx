"use client";

export const MCPassport = () => {
    return (
        <div className="animate-in fade-in duration-500">
            <div className="text-[14.5px] font-bold text-white mb-3 tracking-wide">Digital Micro-Credential Passport</div>
            <div className="mx-auto max-w-[520px] bg-gradient-to-br from-[#0B1F3A] to-[#0d1a2e] border-2 border-gold/40 rounded-3xl p-8 relative overflow-hidden group shadow-2xl">
                <div className="absolute top-[-40px] left-[-40px] w-64 h-64 rounded-full bg-radial-gradient from-gold/15 to-transparent pointer-events-none group-hover:scale-125 transition-transform duration-700"></div>
                <div className="absolute bottom-[-100px] right-[-100px] w-80 h-80 rounded-full bg-radial-gradient from-navy3/30 to-transparent pointer-events-none group-hover:scale-150 transition-transform duration-700"></div>

                <div className="flex justify-between items-start mb-10 relative z-10">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-gold flex items-center justify-center font-bold text-white font-serif text-[18px]">I</div>
                        <div>
                            <div className="text-white font-serif font-bold text-[18px]">IKON SKILLS</div>
                            <div className="text-gold3 text-[9px] font-mono font-bold tracking-widest uppercase">Verified IQ Passport</div>
                        </div>
                    </div>
                    <div className="text-[24px]">🛡️</div>
                </div>

                <div className="flex gap-6 mb-12 relative z-10">
                    <div className="w-[120px] h-[150px] bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-[48px] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                        👨‍💼
                    </div>
                    <div className="flex-1 space-y-4">
                        <div>
                            <div className="text-white/40 text-[9px] font-mono font-bold uppercase tracking-wider mb-0.5">Holder</div>
                            <div className="text-white text-[17px] font-bold">Edward Krishnan</div>
                        </div>
                        <div>
                            <div className="text-white/40 text-[9px] font-mono font-bold uppercase tracking-wider mb-0.5">Passport ID</div>
                            <div className="text-gold text-[12px] font-mono font-bold">IKON-MC-9221-EX09</div>
                        </div>
                        <div>
                            <div className="text-white/40 text-[9px] font-mono font-bold uppercase tracking-wider mb-0.5">Verified ECTS</div>
                            <div className="text-white text-[15px] font-bold">60 ECTS · EQF 6/7</div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-10 relative z-10">
                    {[
                        { l: 'Issued By', v: 'EIU-Paris' },
                        { l: 'Quality Assured', v: 'ASIC Premier' },
                        { l: 'Last Updated', v: '05 APR 2026' },
                        { l: 'Competencies', v: '60 Verified' },
                    ].map((item, i) => (
                        <div key={i} className="bg-white/5 border border-white/10 rounded-lg p-3">
                            <div className="text-white/30 text-[8px] font-mono uppercase mb-0.5 tracking-widest">{item.l}</div>
                            <div className="text-white/80 text-[10.5px] font-bold truncate">{item.v}</div>
                        </div>
                    ))}
                </div>

                <div className="relative z-10 pt-6 border-t border-gold/20 flex justify-between items-center">
                    <div className="text-[28px]">📜</div>
                    <button className="bg-gold text-white text-[11px] font-bold px-6 py-2 rounded-xl shadow-lg border border-gold/20 hover:bg-gold2 transition-all">Digital Validation Link →</button>
                </div>
            </div>
        </div>
    );
};
