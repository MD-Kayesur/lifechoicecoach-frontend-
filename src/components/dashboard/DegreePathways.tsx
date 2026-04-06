"use client";

export const DegreePathways = () => {
    return (
        <div className="animate-in fade-in duration-500">
            <div className="text-[14.5px] font-bold text-white mb-3 tracking-wide">University Degree Stackability</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                {[
                    { n: 'BBA in Applied AI & Automation', p: 45, d: 'EIU-Paris', s: '6/18 Micro-Credentials' },
                    { n: 'MBA in AI Strategy & Governance', p: 15, d: 'EIU-Paris', s: '2/12 Micro-Credentials' },
                ].map((path, i) => (
                    <div key={i} className="bg-gradient-to-br from-[#0B1F3A] to-[#142E55] border border-gold/40 rounded-2xl p-6 relative overflow-hidden group hover:border-gold/60 transition-all duration-300">
                        <div className="absolute top-[-30px] right-[-30px] w-48 h-48 rounded-full bg-radial-gradient from-gold/15 to-transparent pointer-events-none group-hover:scale-125 transition-transform duration-700"></div>
                        <div className="flex items-start justify-between mb-8 relative z-10">
                            <div>
                                <div className="text-gold text-[10px] font-mono font-bold uppercase tracking-[1.5px] mb-1">In Progress Pathway</div>
                                <div className="text-white text-[20px] font-bold font-serif mb-1 leading-tight">{path.n}</div>
                                <div className="text-white/40 text-[11px] font-medium">{path.d}</div>
                            </div>
                            <div className="text-[28px]">🎓</div>
                        </div>

                        <div className="relative z-10 mb-6">
                            <div className="flex justify-between items-center mb-1.5 text-[12px] text-white/70 font-mono">
                                <span>{path.p}% Mastery</span>
                                <span className="text-gold2 font-bold">{path.s}</span>
                            </div>
                            <div className="bg-white/10 rounded-full h-[8px] overflow-hidden">
                                <div className="h-full bg-gradient-to-r from-gold to-gold2 rounded-full" style={{ width: `${path.p}%` }}></div>
                            </div>
                        </div>

                        <div className="relative z-10 pt-4 border-t border-white/5 flex gap-3">
                            <button className="bg-gold text-white text-[11px] font-bold px-4 py-2 rounded-lg shadow-lg">Resume Coursework</button>
                            <button className="bg-white/5 text-white/50 text-[11px] font-bold px-4 py-2 rounded-lg border border-white/10 hover:text-white transition-colors">Study Planner</button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 relative overflow-hidden group hover:border-white/20">
                <div className="text-[14px] font-bold text-white mb-6 tracking-wide">Available Degree Pathways at EIU-Paris</div>
                <div className="space-y-4">
                    {[
                        { title: 'Bachelor of Applied AI & Automation', duration: '3 Years (Stackable)', fee: 'Premium Access Only' },
                        { title: 'Bachelor of Digital Intelligence & AI Operations', duration: '3 Years (Stackable)', fee: 'Premium Access Only' },
                        { title: 'MBA in AI Strategy & Governance', duration: '18 Months (Stackable)', fee: 'Scholarship Active' },
                        { title: 'DProf in AI Leadership', duration: '3 Years (Stackable)', fee: 'Industry Nomination Required' }
                    ].map((degree, idx) => (
                        <div key={idx} className="flex justify-between items-center p-4 rounded-xl hover:bg-white/5 transition-colors cursor-pointer group/row">
                            <div className="flex items-center gap-4">
                                <div className="text-[18px]">🏅</div>
                                <div>
                                    <div className="text-white text-[15px] font-bold group-hover/row:text-gold transition-colors">{degree.title}</div>
                                    <div className="text-white/40 text-[10px] font-mono tracking-[1px] uppercase">{degree.duration}</div>
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="text-gold2 text-[10px] font-mono font-bold uppercase tracking-[1px] mb-1">{degree.fee}</div>
                                <div className="text-white/30 text-[11px] font-bold group-hover/row:text-white/60 transition-colors">Apply Now →</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
