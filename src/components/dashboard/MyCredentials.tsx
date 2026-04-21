"use client";

export const MyCredentials = () => {
    return (
        <div className="animate-in fade-in duration-500">
            <div className="text-[14.5px] font-bold text-white mb-3 tracking-wide">Verified Micro-Credentials Wall</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
                {[
                    { n: 'AI Prompt Engineer', e: '10 ECTS · EQF 6', d: 'Category 01 · AI & Automation' },
                    { n: 'Generative AI Practitioner', e: '10 ECTS · EQF 6', d: 'Category 01 · AI & Automation' },
                    { n: 'Responsible AI Practitioner', e: '10 ECTS · EQF 7', d: 'Category 01 · AI & Automation' },
                    { n: 'Data Storytelling Designer', e: '10 ECTS · EQF 6', d: 'Category 02 · Data & Analytics' },
                    { n: 'AI Decision Support Analyst', e: '10 ECTS · EQF 7', d: 'Category 02 · Data & Analytics' },
                    { n: 'AI Workflow Automation Specialist', e: '10 ECTS · EQF 6', d: 'Category 01 · AI & Automation' },
                ].map((cred, i) => (
                    <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center cursor-pointer transition-all hover:bg-gold/5 group relative overflow-hidden">
                        <div className="absolute top-[-20px] right-[-20px] w-40 h-40 rounded-full bg-radial-gradient from-gold/15 to-transparent pointer-events-none group-hover:scale-125 transition-transform duration-700"></div>
                        <div className="ec-ic text-[32px] mb-3">🏅</div>
                        <div className="text-white text-[15px] font-bold leading-tight mb-2 group-hover:text-gold transition-colors">{cred.n}</div>
                        <div className="text-[10px] text-white/40 font-mono font-bold tracking-widest uppercase mb-4">{cred.d}</div>
                        <div className="text-gold3 text-[11px] font-mono font-bold bg-gold/10 px-3 py-1 rounded-full mb-4 inline-block">{cred.e}</div>
                        <div className="flex gap-2 justify-center mt-auto border-t border-white/5 pt-4">
                            <button className="text-[10px] font-bold text-white/50 hover:text-white transition-colors">Certificate →</button>
                            <span className="text-white/20">|</span>
                            <button className="text-[10px] font-bold text-white/50 hover:text-white transition-colors">Verify →</button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="eiu-mini bg-gradient-to-br from-[#060e1e] to-[#0d1a2e] border-t border-gold/40 rounded-3xl p-8 flex flex-col md:flex-row items-center gap-10">
                <div className="w-24 h-24 rounded-full border-4 border-gold/20 flex items-center justify-center p-2">
                    <img src="https://ikonmalta.ac/IKON_LOGO_White_Color.png" className="w-full h-auto object-contain grayscale opacity-60" />
                </div>
                <div className="flex-1 text-center md:text-left">
                    <div className="text-gold text-[10px] font-mono font-bold uppercase tracking-[2px] mb-1">Quality Assurance Body</div>
                    <div className="text-white text-[20px] font-bold font-serif mb-2">European International University, Paris</div>
                    <div className="text-white/50 text-[13px] leading-relaxed max-w-[600px]">
                        All Micro-Credentials listed above are accredited and quality assured by EIU-Paris,
                        mapped directly to the European Qualifications Framework (EQF).
                    </div>
                </div>
            </div>
        </div>
    );
};
