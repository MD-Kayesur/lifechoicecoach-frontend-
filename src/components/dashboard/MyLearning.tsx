"use client";

export const MyLearning = () => {
    return (
        <div className="animate-in fade-in duration-500">
            <div className="text-[14.5px] font-bold text-white mb-3 tracking-wide">Academic & Professional Learning</div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {[
                    { n: '6', l: 'Completed MCs', g: true },
                    { n: '4', l: 'Courses in Progress' },
                    { n: '2', l: 'Degree Pathways Active' },
                ].map((stat, i) => (
                    <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-5 transition-all hover:border-gold/40">
                        <div className={`font-serif text-[32px] font-bold text-white mb-0.5 ${stat.g ? 'text-gold' : ''}`}>{stat.n}</div>
                        <div className="text-[12px] text-white/50 font-medium">{stat.l}</div>
                    </div>
                ))}
            </div>

            <div className="d-st text-[14.5px] font-bold text-white mb-4">Domain Focus</div>
            <div className="space-y-4">
                {[
                    { n: 'AI, Automation & Digital Intelligence', p: 85, c: '6/10 Micro-Credentials completed', icon: '🤖' },
                    { n: 'Business, Strategy & Leadership', p: 40, c: '4/10 Micro-Credentials completed', icon: '💼' },
                    { n: 'Creative Thinking & Innovation', p: 10, c: '1/10 Micro-Credentials completed', icon: '🎨' }
                ].map((domain, i) => (
                    <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 relative overflow-hidden group hover:border-gold/30">
                        <div className="flex items-start gap-4 mb-5">
                            <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-2xl group-hover:bg-gold/20 transition-all">{domain.icon}</div>
                            <div className="flex-1">
                                <div className="text-[17px] font-bold text-white mb-1">{domain.n}</div>
                                <div className="text-[11px] text-white/40 font-mono font-bold tracking-widest uppercase mb-4">{domain.c}</div>
                                <div className="bg-white/10 rounded-full h-[6px] mb-2 overflow-hidden">
                                    <div className="h-full bg-gradient-to-r from-gold to-gold2 rounded-full" style={{ width: `${domain.p}%` }}></div>
                                </div>
                                <div className="flex justify-between items-center text-[10px] text-white/60 font-mono">
                                    <span>{domain.p}% through the Curriculum</span>
                                    <span className="text-gold font-bold">Details →</span>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-5 gap-2 px-1">
                            {Array.from({ length: 10 }).map((_, idx) => (
                                <div key={idx} className={`h-1.5 rounded-full ${idx < (domain.p / 10) ? 'bg-gold' : 'bg-white/5'}`}></div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
