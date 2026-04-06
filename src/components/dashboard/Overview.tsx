"use client";

export const Overview = () => {
    return (
        <div className="animate-in fade-in duration-500">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                {[
                    { n: '6', l: 'Credentials Earned', g: true },
                    { n: '60', l: 'ECTS Accumulated' },
                    { n: '3', l: 'In Progress' },
                    { n: '60', l: 'Competencies Verified' }
                ].map((stat, i) => (
                    <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4 transition-all hover:border-white/20">
                        <div className={`font-serif text-[28px] font-bold text-white mb-0.5 ${stat.g ? 'text-gold' : ''}`}>{stat.n}</div>
                        <div className="text-[11.5px] text-white/55 font-medium leading-tight">{stat.l}</div>
                    </div>
                ))}
            </div>

            <section className="mb-8">
                <div className="text-[14.5px] font-bold text-white mb-3 tracking-wide">Currently In Progress</div>
                <div className="space-y-2">
                    {[
                        { n: 'AI Policy & Governance Analyst', c: 'Category 01 · AI, Automation & Digital Intelligence', p: 68, s: '7/10 competencies assessed' },
                        { n: 'Strategic Thinking Practitioner', c: 'Category 03 · Business, Strategy & Leadership', p: 40, s: '4/10 competencies assessed' },
                        { n: 'Brand Identity Architect', c: 'Category 10 · Strategic Brand Leadership (TWBF)', p: 10, s: '1/10 competencies assessed' }
                    ].map((prog, i) => (
                        <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4 transition-all hover:border-gold/50 cursor-pointer flex justify-between items-center gap-4 group">
                            <div className="flex-1">
                                <div className="text-[14px] font-bold text-white mb-1 group-hover:text-gold transition-colors">{prog.n}</div>
                                <div className="text-[10.5px] text-white/45 font-mono mb-2 uppercase tracking-wide">{prog.c}</div>
                                <div className="bg-white/10 rounded-full h-[5px] mb-1 overflow-hidden">
                                    <div className="h-full bg-gradient-to-r from-gold to-gold2 rounded-full" style={{ width: `${prog.p}%` }}></div>
                                </div>
                                <div className="text-[10px] text-white/45 font-mono">{prog.p}% complete · {prog.s}</div>
                            </div>
                            <div className="text-[10px] font-bold px-2.5 py-1 rounded-md bg-gold/20 text-[#f06070] font-mono whitespace-nowrap">In Progress</div>
                        </div>
                    ))}
                </div>
            </section>

            <section>
                <div className="text-[14.5px] font-bold text-white mb-3 tracking-wide">Last Earned Credential</div>
                <div className="bg-gradient-to-br from-[#0B1F3A] to-[#142E55] border border-gold/40 rounded-2xl p-6 relative overflow-hidden group">
                    <div className="absolute top-[-40px] right-[-40px] w-48 h-48 rounded-full bg-radial-gradient from-gold/20 to-transparent pointer-events-none group-hover:scale-125 transition-transform duration-700"></div>
                    <div className="flex items-center gap-6 relative z-10">
                        <div className="text-[48px]">🏅</div>
                        <div>
                            <div className="text-gold text-[10px] font-mono font-bold uppercase tracking-[1.5px] mb-1">Latest Awarded</div>
                            <div className="text-white text-[22px] font-bold font-serif mb-1 leading-tight">AI Workflow Automation Specialist</div>
                            <div className="text-white/60 text-[13px] mb-4">10 ECTS · EQF Level 6 · Verified by EIU-Paris</div>
                            <div className="flex gap-3">
                                <button className="bg-gold text-white text-[11px] font-bold px-4 py-1.5 rounded-lg">Share Certificate</button>
                                <button className="bg-white/10 text-white/80 text-[11px] font-bold px-4 py-1.5 rounded-lg border border-white/10">Verification ID: IKON-882-990</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
