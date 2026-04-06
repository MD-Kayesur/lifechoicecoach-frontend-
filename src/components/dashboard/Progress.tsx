"use client";

export const Progress = () => {
    return (
        <div className="animate-in fade-in duration-500">
            <div className="text-[14.5px] font-bold text-white mb-3 tracking-wide">Skills Progress Tracking</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 relative overflow-hidden group hover:border-gold/30">
                    <div className="text-[14px] font-bold text-white mb-6 tracking-wide">Overall Completion Status</div>
                    <div className="flex flex-col items-center justify-center py-10 relative">
                        <div className="w-48 h-48 rounded-full border-12 border-white/5 flex items-center justify-center p-4">
                            <div className="w-full h-full rounded-full border-12 border-gold/40 flex items-center justify-center relative">
                                <div className="text-[36px] font-bold text-white">45%</div>
                            </div>
                        </div>
                        <div className="mt-8 text-center">
                            <div className="text-white text-[18px] font-bold mb-1">Advanced Level Achieved</div>
                            <div className="text-white/50 text-[11px] font-mono uppercase tracking-[1px]">60/184 Micro-Credentials</div>
                        </div>
                    </div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 relative overflow-hidden group hover:border-gold/30">
                    <div className="text-[14px] font-bold text-white mb-6 tracking-wide">Verified Competencies Domain Breakdown</div>
                    <div className="space-y-4">
                        {[
                            { n: 'AI & Data Intelligence', p: 85, c: '60 Verified' },
                            { n: 'Business & Management', p: 40, c: '28 Verified' },
                            { n: 'Creative & Digital Arts', p: 10, c: '8 Verified' },
                            { n: 'Education & Pedagogy', p: 0, c: '0 Verified' }
                        ].map((prog, i) => (
                            <div key={i} className="group cursor-pointer">
                                <div className="flex justify-between items-center mb-1.5">
                                    <div className="text-[13px] font-bold text-white group-hover:text-gold transition-colors">{prog.n}</div>
                                    <div className="text-[10px] text-white/50 font-mono font-bold tracking-widest uppercase">{prog.c}</div>
                                </div>
                                <div className="bg-white/5 rounded-full h-[6px] overflow-hidden">
                                    <div className="h-full bg-gradient-to-r from-gold to-gold2 rounded-full" style={{ width: `${prog.p}%` }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="bg-gradient-to-br from-[#0B1F3A] to-[#142E55] border border-gold/20 rounded-2xl p-6 relative overflow-hidden group shadow-2xl">
                <div className="absolute top-[-30px] right-[-30px] w-48 h-48 rounded-full bg-radial-gradient from-gold/15 to-transparent pointer-events-none group-hover:scale-125 transition-transform duration-700"></div>
                <div className="text-[14px] font-bold text-white mb-6 tracking-wide">Learning Speed Index (Last 30 Days)</div>
                <div className="h-32 flex items-end gap-3 px-4 relative z-10">
                    {[10, 25, 45, 30, 60, 85, 100, 75, 55, 90].map((h, i) => (
                        <div key={i} className="flex-1 bg-white/10 rounded-t-lg transition-all hover:bg-gold relative group/bar" style={{ height: `${h}%` }}>
                            <div className="absolute top-[-25px] left-1/2 -translate-x-1/2 text-[9px] font-bold text-white opacity-0 group-hover/bar:opacity-100 transition-opacity font-mono tracking-widest">{h}%</div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-between items-center mt-6 text-white/30 text-[9px] font-mono tracking-[2px] pt-4 border-t border-white/5">
                    <span>MAR 06</span>
                    <span>MAR 16</span>
                    <span>MAR 26</span>
                    <span>APR 06</span>
                </div>
            </div>
        </div>
    );
};
