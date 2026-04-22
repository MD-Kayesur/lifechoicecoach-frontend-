"use client";

import { 
    useGetEarnedCredentialsQuery, 
    useGetEnrolledCredentialsWithStateQuery 
} from "@/redux/features/practitioner/PractitionerManagementApi";
import { Loader2, BookOpen, Award } from "lucide-react";

export const MyCredentials = () => {
    const { data: earnedData, isLoading: isEarnedLoading } = useGetEarnedCredentialsQuery();
    const { data: enrolledData, isLoading: isEnrolledLoading } = useGetEnrolledCredentialsWithStateQuery();

    if (isEarnedLoading || isEnrolledLoading) {
        return (
            <div className="flex items-center justify-center min-h-[400px]">
                <Loader2 className="w-8 h-8 animate-spin text-gold" />
            </div>
        );
    }

    const earnedCredentials = earnedData?.credentials || [];
    const enrolledCredentials = enrolledData?.micro_credentials || [];

    return (
        <div className="animate-in fade-in duration-500">
            {/* Active Enrollments Section */}
            <section className="mb-12">
                <div className="flex items-center gap-2 mb-4">
                    <BookOpen className="w-5 h-5 text-gold" />
                    <div className="text-[14.5px] font-bold text-white tracking-wide uppercase">Active Enrollments & Progress</div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {enrolledCredentials.length > 0 ? (
                        enrolledCredentials.map((mc, i) => {
                            const progress = mc.total_competencies > 0 
                                ? (mc.passed_competencies / mc.total_competencies) * 100 
                                : 0;
                            
                            return (
                                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-5 transition-all hover:border-gold/30 group">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <div className="text-white text-[16px] font-bold mb-1 group-hover:text-gold transition-colors">{mc.micro_credential_name}</div>
                                            <div className="flex items-center gap-2 text-[10px] text-white/40 font-mono uppercase tracking-wider">
                                                <span className={`px-2 py-0.5 rounded-md ${mc.status === 'not_started' ? 'bg-white/10' : 'bg-gold/20 text-gold'}`}>
                                                    {mc.status.replace('_', ' ')}
                                                </span>
                                                <span>•</span>
                                                <span>Enrolled: {new Date(mc.enrolled_at).toLocaleDateString()}</span>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-gold text-[18px] font-bold font-serif">{Math.round(progress)}%</div>
                                            <div className="text-[9px] text-white/30 uppercase font-bold tracking-tighter">Progress</div>
                                        </div>
                                    </div>

                                    {/* Progress Bar */}
                                    <div className="h-1.5 w-full bg-white/10 rounded-full mb-4 overflow-hidden">
                                        <div 
                                            className="h-full bg-gradient-to-r from-gold to-gold2 transition-all duration-1000" 
                                            style={{ width: `${progress}%` }}
                                        />
                                    </div>

                                    <div className="grid grid-cols-3 gap-2">
                                        <div className="bg-white/5 rounded-xl p-2 border border-white/5">
                                            <div className="text-white/40 text-[9px] uppercase font-bold mb-0.5">Competencies</div>
                                            <div className="text-white text-[12px] font-bold">{mc.passed_competencies}/{mc.total_competencies}</div>
                                        </div>
                                        <div className="bg-white/5 rounded-xl p-2 border border-white/5">
                                            <div className="text-white/40 text-[9px] uppercase font-bold mb-0.5">Attempts</div>
                                            <div className="text-white text-[12px] font-bold">{mc.attempts_remaining} Left</div>
                                        </div>
                                        <div className="bg-white/5 rounded-xl p-2 border border-white/5">
                                            <div className="text-white/40 text-[9px] uppercase font-bold mb-0.5">Points</div>
                                            <div className="text-gold text-[12px] font-bold">+{mc.gamification_points}</div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <div className="col-span-full text-white/40 text-[13px] py-10 text-center border border-dashed border-white/10 rounded-2xl">
                            No active enrollments found.
                        </div>
                    )}
                </div>
            </section>

            {/* Verified Credentials Section */}
            <section className="mb-12">
                <div className="flex items-center gap-2 mb-4">
                    <Award className="w-5 h-5 text-gold" />
                    <div className="text-[14.5px] font-bold text-white tracking-wide uppercase">Verified Micro-Credentials Wall</div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {earnedCredentials.length > 0 ? (
                        earnedCredentials.map((cred, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center cursor-pointer transition-all hover:bg-gold/5 group relative overflow-hidden">
                                <div className="absolute top-[-20px] right-[-20px] w-40 h-40 rounded-full bg-radial-gradient from-gold/15 to-transparent pointer-events-none group-hover:scale-125 transition-transform duration-700"></div>
                                <div className="ec-ic text-[32px] mb-3">
                                    {cred.badge_url ? <img src={cred.badge_url} className="w-12 h-12 mx-auto" alt="Badge" /> : "🏅"}
                                </div>
                                <div className="text-white text-[15px] font-bold leading-tight mb-2 group-hover:text-gold transition-colors">{cred.name}</div>
                                <div className="text-[10px] text-white/40 font-mono font-bold tracking-widest uppercase mb-4">{cred.domain || 'Verified Credential'}</div>
                                <div className="text-gold3 text-[11px] font-mono font-bold bg-gold/10 px-3 py-1 rounded-full mb-4 inline-block">{cred.ects} ECTS · EQF {cred.level}</div>
                                <div className="flex gap-2 justify-center mt-auto border-t border-white/5 pt-4">
                                    <button className="text-[10px] font-bold text-white/50 hover:text-white transition-colors">Certificate →</button>
                                    <span className="text-white/20">|</span>
                                    <button className="text-[10px] font-bold text-white/50 hover:text-white transition-colors">Verify →</button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full text-white/40 text-[13px] py-12 text-center border border-dashed border-white/10 rounded-2xl">
                            You haven't earned any micro-credentials yet.
                        </div>
                    )}
                </div>
            </section>

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

