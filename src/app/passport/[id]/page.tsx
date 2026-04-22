"use client";

import { useParams } from "next/navigation";
import { 
    Award, ShieldCheck, QrCode, MapPin, 
    Globe, Loader2, Share2, CheckCircle2
} from "lucide-react";
import { useGetPublicPassportQuery } from "@/redux/features/progress/practitionerPassportApi";
import { toast } from "sonner";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PublicPassportPage() {
    const params = useParams();
    const id = params.id as string;
    
    const { data, isLoading, error } = useGetPublicPassportQuery({ practitioner_id: id });
    const passport = data?.passport;
    const user = passport?.user_name;

    const handleShare = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href);
            toast.success("Passport link copied to clipboard!");
        } catch (error) {
            toast.error("Failed to copy link");
        }
    };

    if (isLoading) {
        return (
            <div className="min-h-screen bg-[#0a1628] flex flex-col items-center justify-center space-y-4">
                <Loader2 className="w-12 h-12 text-gold animate-spin" />
                <p className="text-white/40 font-mono text-[11px] uppercase tracking-widest">Verifying Digital Passport...</p>
            </div>
        );
    }

    if (error || !passport) {
        return (
            <div className="min-h-screen bg-[#0a1628] flex flex-col items-center justify-center space-y-6 px-4 text-center">
                <div className="w-20 h-20 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 mb-2">
                    <ShieldCheck size={40} />
                </div>
                <h1 className="text-white text-2xl font-bold font-cormorant">Passport Not Found</h1>
                <p className="text-white/40 max-w-md mx-auto">The requested practitioner passport could not be found or is set to private by the holder.</p>
                <a href="/" className="text-gold hover:underline text-sm font-mono uppercase tracking-widest">Return to Home</a>
            </div>
        );
    }

    const userInitials = passport?.user_name 
        ? passport.user_name.split(' ').map((n: string) => n[0]).join('').toUpperCase() 
        : "IK";

    const lastSync = passport?.updated_at 
        ? new Date(passport.updated_at).toLocaleDateString() 
        : "N/A";

    return (
        <main className="min-h-screen bg-[#0a1628] flex flex-col">
            <Navbar />
            
            <div className="flex-1 flex flex-col items-center justify-center py-20 px-6 animate-in fade-in duration-1000">
                <div className="mb-12 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-mono font-bold uppercase tracking-widest mb-6">
                        <CheckCircle2 size={12} />
                        Verified Digital Identity
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white font-cormorant mb-2">{user} MC Passport</h1>
                    <p className="text-white/40 text-[14px] font-outfit max-w-lg mx-auto">This official digital passport verifies the holder's professional identity and academic achievements within the IKON ecosystem.</p>
                </div>

                {/* Passport Card Implementation */}
                <div className="mx-auto w-full max-w-[560px] bg-gradient-to-br from-[#0B1F3A] via-[#0d1a2e] to-[#0B1F3A] border-[3px] border-gold/40 rounded-[32px] p-8 relative overflow-hidden group shadow-[0_40px_100px_rgba(0,0,0,0.8)]">
                    {/* Decorative background elements */}
                    <div className="absolute top-[-50px] left-[-50px] w-80 h-80 rounded-full bg-[radial-gradient(circle,rgba(203,45,57,0.15)_0%,transparent_70%)] pointer-events-none group-hover:scale-110 transition-transform duration-1000"></div>
                    <div className="absolute bottom-[-80px] right-[-80px] w-96 h-96 rounded-full bg-[radial-gradient(circle,rgba(26,58,107,0.4)_0%,transparent_70%)] pointer-events-none group-hover:scale-125 transition-transform duration-1000"></div>

                    <div className="flex justify-between items-start mb-10 relative z-10">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center font-bold text-white font-serif text-[22px] shadow-[0_10px_20px_rgba(203,45,57,0.4)]">I</div>
                            <div>
                                <div className="text-white font-serif font-bold text-[20px] tracking-tight">IKON SKILLS<sup className="text-[10px] text-primary align-super">™</sup></div>
                                <div className="text-gold3 text-[10px] font-mono font-bold tracking-[2px] uppercase flex items-center gap-2">
                                    <ShieldCheck size={12} />
                                    Verified Practitioner
                                </div>
                            </div>
                        </div>
                        <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                            <QrCode size={24} className="text-white/20" />
                        </div>
                    </div>

                    <div className="flex gap-8 mb-12 relative z-10 items-center">
                        <div className="relative">
                            <div className="w-[140px] h-[170px] bg-white/5 border-2 border-white/10 rounded-2xl flex items-center justify-center text-[44px] font-bold text-white/20 overflow-hidden group-hover:border-gold/30 transition-all duration-500 shadow-inner">
                                {userInitials}
                            </div>
                            <div className="absolute -bottom-3 -right-3 w-10 h-10 rounded-full bg-primary border-4 border-[#0B1F3A] flex items-center justify-center shadow-lg">
                                <Award size={18} className="text-white" />
                            </div>
                        </div>
                        <div className="flex-1 space-y-5">
                            <div className="border-b border-white/10 pb-2">
                                <div className="text-white/40 text-[9px] font-mono font-bold uppercase tracking-[2px] mb-1">Holder Name</div>
                                <div className="text-white text-[19px] font-bold font-outfit truncate max-w-[280px]">{passport.user_name}</div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <div className="text-white/40 text-[9px] font-mono font-bold uppercase tracking-[2px] mb-1">Passport ID</div>
                                    <div className="text-gold text-[13px] font-mono font-bold">{passport.practitioner_id}</div>
                                </div>
                                <div>
                                    <div className="text-white/40 text-[9px] font-mono font-bold uppercase tracking-[2px] mb-1">Verified Credits</div>
                                    <div className="text-white text-[14px] font-bold font-outfit">{passport.total_ects_accumulated} ECTS · EQF 6</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-10 relative z-10">
                        {[
                            { l: 'Accreditation', v: 'EIU-Paris' },
                            { l: 'Quality Assured', v: 'ASIC Premier · UK' },
                            { l: 'Last Sync', v: lastSync },
                            { l: 'Status', v: 'Valid & Active' },
                        ].map((item, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-3.5 backdrop-blur-md">
                                <div className="text-white/30 text-[8.5px] font-mono uppercase mb-1 tracking-[1.5px]">{item.l}</div>
                                <div className="text-white/80 text-[11px] font-bold truncate tracking-wide">{item.v}</div>
                            </div>
                        ))}
                    </div>

                    <div className="space-y-6 relative z-10 border-t border-white/5 pt-8 mb-8">
                        <div className="grid grid-cols-3 gap-4">
                            <div className="flex flex-col">
                                <span className="text-white/30 text-[8.5px] font-mono uppercase mb-1 tracking-[1px]">Earned MCs</span>
                                <span className="text-white text-[16px] font-bold font-outfit">{passport.total_credentials_earned}</span>
                            </div>
                            <div className="flex flex-col text-center">
                                <span className="text-white/30 text-[8.5px] font-mono uppercase mb-1 tracking-[1px]">Total ECTS</span>
                                <span className="text-white text-[16px] font-bold font-outfit">{passport.total_ects_accumulated}</span>
                            </div>
                            <div className="flex flex-col text-right">
                                <span className="text-white/30 text-[8.5px] font-mono uppercase mb-1 tracking-[1px]">Competencies</span>
                                <span className="text-white text-[16px] font-bold font-outfit">{passport.total_competencies_mastered}</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-4">
                            <div className="flex flex-col">
                                <span className="text-white/30 text-[8.5px] font-mono uppercase mb-1 tracking-[1px]">Badges</span>
                                <span className="text-emerald-400 text-[16px] font-bold font-outfit">{passport.badges}</span>
                            </div>
                            <div className="flex flex-col text-center">
                                <span className="text-white/30 text-[8.5px] font-mono uppercase mb-1 tracking-[1px]">Certificates</span>
                                <span className="text-gold text-[16px] font-bold font-outfit">{passport.certificates}</span>
                            </div>
                            <div className="flex flex-col text-right">
                                <span className="text-white/30 text-[8.5px] font-mono uppercase mb-1 tracking-[1px]">Degree Progress</span>
                                <span className="text-primary text-[16px] font-bold font-outfit">{passport.degree_progress}%</span>
                            </div>
                        </div>
                    </div>

                    <div className="relative z-10 pt-6 border-t border-gold/20 flex justify-between items-center">
                        <div className="flex items-center gap-2 text-white/40 text-[10px] font-mono uppercase tracking-widest">
                            <MapPin size={12} className="text-primary" />
                            Issued: Kuala Lumpur
                        </div>
                        <button 
                            onClick={handleShare}
                            className="flex items-center gap-2 text-white text-[12px] font-bold px-8 py-3 rounded-xl shadow-lg transition-all transform hover:-translate-y-1 active:scale-95 border bg-primary border-primary/20 shadow-[0_10px_20px_rgba(203,45,57,0.3)] hover:bg-gold2"
                        >
                            <Share2 size={14} />
                            Verify Identity
                        </button>
                    </div>
                </div>

                <div className="mt-16 text-center text-white/20 text-[11px] font-mono uppercase tracking-[4px]">
                    IKON Skills Framework · 2026
                </div>
            </div>

            <Footer />
        </main>
    );
}
