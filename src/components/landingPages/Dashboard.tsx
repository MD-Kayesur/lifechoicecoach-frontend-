"use client";

export const Dashboard = () => {
    return (
        <div id="page-dashboard" className="page active pt-[62px] min-h-screen bg-[#0a1628]">
            <div className="dash-wrap max-w-[1200px] mx-auto px-8 md:px-12 py-8 grid grid-cols-1 lg:grid-cols-[225px_1fr] gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                {/* Sidebar */}
                <aside className="dash-sb bg-white/5 border border-white/10 rounded-[15px] p-5 h-fit sticky top-[90px]">
                    <div className="dash-av w-[54px] h-[54px] rounded-full bg-gradient-to-br from-[#0B1F3A] to-[#cb2d39] flex items-center justify-center font-serif text-[20px] font-bold text-white mb-3 shadow-lg">
                        EK
                    </div>
                    <div className="dash-name text-[15px] font-bold text-white mb-0.5">Edward Krishnan</div>
                    <div className="dash-role text-[11.5px] text-white/50 mb-3">Founder & CEO, IKON</div>
                    <div className="p-badge inline-flex items-center gap-1.5 bg-gold/15 border border-gold/30 px-2.5 py-1 rounded-md mb-4">
                        <span className="p-badge-t text-[10px] font-bold text-[#f06070] font-mono leading-none">IKON Practitioner</span>
                    </div>

                    <nav className="space-y-1">
                        {[
                            { icon: '🏠', label: 'Overview', active: true },
                            { icon: '📖', label: 'My Learning' },
                            { icon: '🎫', label: 'MC Passport' },
                            { icon: '🏅', label: 'My Credentials' },
                            { icon: '📈', label: 'Progress' },
                            { icon: '🎓', label: 'Degree Pathways' },
                            { icon: '⚙️', label: 'Settings' }
                        ].map((item, i) => (
                            <div key={i} className={`dni flex items-center gap-2.5 p-2.5 rounded-lg cursor-pointer transition-all text-[13px] font-medium ${item.active ? 'bg-gold/20 text-white font-bold' : 'text-white/70 hover:bg-white/5 hover:text-white'}`}>
                                <span className="dni-ic text-[14px] w-5 text-center">{item.icon}</span>
                                {item.label}
                            </div>
                        ))}
                    </nav>
                </aside>

                {/* Main Content */}
                <main>
                    <div className="d-stats grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                        {[
                            { n: '6', l: 'Credentials Earned', g: true },
                            { n: '60', l: 'ECTS Accumulated' },
                            { n: '3', l: 'In Progress' },
                            { n: '60', l: 'Competencies Verified' }
                        ].map((stat, i) => (
                            <div key={i} className="d-stat bg-white/5 border border-white/10 rounded-xl p-4 transition-all hover:border-white/20">
                                <div className={`d-sn font-serif text-[28px] font-bold text-white mb-0.5 ${stat.g ? 'text-gold' : ''}`}>{stat.n}</div>
                                <div className="d-sl text-[11.5px] text-white/55 font-medium leading-tight">{stat.l}</div>
                            </div>
                        ))}
                    </div>

                    <section className="mb-8">
                        <div className="d-st text-[14.5px] font-bold text-white mb-3">Currently In Progress</div>
                        <div className="space-y-2">
                            {[
                                { n: 'AI Policy & Governance Analyst', c: 'Category 01 · AI, Automation & Digital Intelligence', p: 68, s: '7/10 competencies assessed' },
                                { n: 'Strategic Thinking Practitioner', c: 'Category 03 · Business, Strategy & Leadership', p: 40, s: '4/10 competencies assessed' },
                                { n: 'Brand Identity Architect', c: 'Category 10 · Strategic Brand Leadership (TWBF)', p: 10, s: '1/10 competencies assessed' }
                            ].map((prog, i) => (
                                <div key={i} className="prog-card bg-white/5 border border-white/10 rounded-xl p-4 transition-all hover:border-gold/50 cursor-pointer flex justify-between items-center gap-4 group">
                                    <div className="flex-1">
                                        <div className="pc-n text-[14px] font-bold text-white mb-1 group-hover:text-gold transition-colors">{prog.n}</div>
                                        <div className="pc-c text-[10.5px] text-white/45 font-mono mb-2 uppercase tracking-wide">{prog.c}</div>
                                        <div className="prog-bar bg-white/10 rounded-full h-[5px] mb-1 overflow-hidden">
                                            <div className="prog-fill h-full bg-gradient-to-r from-gold to-gold2 rounded-full" style={{ width: `${prog.p}%` }}></div>
                                        </div>
                                        <div className="prog-pct text-[10px] text-white/45 font-mono">{prog.p}% complete · {prog.s}</div>
                                    </div>
                                    <div className="s-pip text-[10px] font-bold px-2.5 py-1 rounded-md bg-gold/20 text-[#f06070] font-mono whitespace-nowrap">In Progress</div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section>
                        <div className="d-st text-[14.5px] font-bold text-white mb-3">Earned Credentials · IKON SKILLS™ Passport</div>
                        <div className="cred-wall grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                            {[
                                { n: 'AI Prompt Engineer', e: '10 ECTS · EQF 6' },
                                { n: 'Generative AI Practitioner', e: '10 ECTS · EQF 6' },
                                { n: 'Responsible AI Practitioner', e: '10 ECTS · EQF 7' },
                                { n: 'Data Storytelling Designer', e: '10 ECTS · EQF 6' },
                                { n: 'AI Decision Support Analyst', e: '10 ECTS · EQF 7' },
                                { n: 'AI Workflow Automation Specialist', e: '10 ECTS · EQF 6' }
                            ].map((cred, i) => (
                                <div key={i} className="ec-card bg-gradient-to-br from-[#0B1F3A] to-[#142E55] border border-gold/20 rounded-xl p-4 text-center cursor-pointer transition-all hover:-translate-y-1 hover:shadow-2xl relative overflow-hidden group">
                                    <div className="absolute top-[-28px] right-[-28px] w-[72px] h-[72px] rounded-full bg-radial-gradient from-gold/15 to-transparent pointer-events-none group-hover:scale-150 transition-transform duration-500"></div>
                                    <div className="ec-ic text-[20px] mb-1.5">🏅</div>
                                    <div className="ec-cn text-[11px] font-bold text-white leading-tight mb-1 group-hover:text-gold transition-colors">{cred.n}</div>
                                    <div className="ec-ects text-[9.5px] font-mono text-gold3">{cred.e}</div>
                                    <div className="ec-view text-[9.5px] font-mono text-white/40 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">View Certificate →</div>
                                </div>
                            ))}
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
};
