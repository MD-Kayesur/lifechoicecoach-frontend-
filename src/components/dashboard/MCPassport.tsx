"use client";

import { 
    Award, ShieldCheck, QrCode, MapPin, 
    Globe, Loader2, Eye, EyeOff,
    Share2
} from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { 
    useGetMyPassportQuery,
    useUpdatePassportVisibilityMutation 
} from "@/redux/features/progress/practitionerPassportApi";
import { toast } from "sonner";

export const MCPassport = () => {
    const { user } = useSelector((state: RootState) => state.auth);
    
    // Fetch passport data
    const { data, isLoading } = useGetMyPassportQuery();
    const passport = data?.passport;
    
    // Visibility mutation
    const [updateVisibility, { isLoading: isUpdatingVisibility }] = useUpdatePassportVisibilityMutation();

    const handleToggleVisibility = async () => {
        if (!passport) return;
        try {
            await updateVisibility({ is_public: !passport.is_public }).unwrap();
            toast.success(`Passport is now ${!passport.is_public ? "Public" : "Private"}`);
        } catch (error) {
            toast.error("Failed to update passport visibility");
        }
    };

    if (isLoading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[500px] space-y-4">
                <Loader2 className="w-12 h-12 text-gold animate-spin" />
                <p className="text-white/40 font-mono text-[11px] uppercase tracking-widest">Generating Digital Passport...</p>
            </div>
        );
    }

    const fullName = passport?.user_name || user?.name || "Practitioner";

    const handleShare = async () => {
        if (!passport?.public_profile_url) return;
        
        try {
            const fullUrl = `${window.location.origin}${passport.public_profile_url}`;
            await navigator.clipboard.writeText(fullUrl);
            toast.success("Passport link copied to clipboard!");
        } catch (error) {
            toast.error("Failed to copy passport link");
        }
    };

    return (
        <div className="animate-in fade-in duration-700 space-y-12 pb-20">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
                <div>
                    <h2 className="text-[24px] font-bold text-white font-cormorant">IKON Digital Passport</h2>
                    <p className="text-white/40 text-[13px] font-outfit">Verified Practitioner Identity & Credential Vault</p>
                </div>
                <div className="flex items-center gap-4">
                    <button 
                        onClick={handleToggleVisibility}
                        disabled={isUpdatingVisibility}
                        className={`flex items-center gap-2 px-6 py-2.5 rounded-xl border transition-all text-[11px] font-bold uppercase tracking-wider shadow-lg transform hover:-translate-y-0.5 active:scale-95 ${
                            passport?.is_public 
                            ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400 hover:bg-emerald-500/20" 
                            : "bg-white/5 border-white/10 text-white/40 hover:bg-white/10"
                        }`}
                    >
                        {isUpdatingVisibility ? <Loader2 size={14} className="animate-spin" /> : (passport?.is_public ? <Eye size={14} /> : <EyeOff size={14} />)}
                        {passport?.is_public ? "Public Access" : "Private Mode"}
                    </button>
                    <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full">
                        <Globe size={14} className="text-emerald-400" />
                        <span className="text-[10px] font-mono font-bold text-white uppercase tracking-widest">Global Validity · EQF/ECTS</span>
                    </div>
                </div>
            </div>

            {/* Passport Identity Card */}
            <div className="mx-auto max-w-[560px] bg-gradient-to-br from-[#0B1F3A] via-[#0d1a2e] to-[#0B1F3A] border-[3px] border-gold/40 rounded-[32px] p-8 relative overflow-hidden group shadow-[0_40px_80px_rgba(0,0,0,0.6)]">
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
                        <div className="w-[140px] h-[170px] bg-white/5 border-2 border-white/10 rounded-2xl flex items-center justify-center text-[64px] overflow-hidden group-hover:border-gold/30 transition-all duration-500 shadow-inner">
                            {user?.role === "IKON Practitioner" ? "👨‍🎓" : "👨‍💼"}
                        </div>
                        <div className="absolute -bottom-3 -right-3 w-10 h-10 rounded-full bg-primary border-4 border-[#0B1F3A] flex items-center justify-center shadow-lg">
                            <Award size={18} className="text-white" />
                        </div>
                    </div>
                    <div className="flex-1 space-y-5">
                        <div className="border-b border-white/10 pb-2">
                            <div className="text-white/40 text-[9px] font-mono font-bold uppercase tracking-[2px] mb-1">Holder Name</div>
                            <div className="text-white text-[19px] font-bold font-outfit truncate max-w-[280px]">{fullName}</div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <div className="text-white/40 text-[9px] font-mono font-bold uppercase tracking-[2px] mb-1">Passport ID</div>
                                <div className="text-gold text-[13px] font-mono font-bold">{passport?.practitioner_id || "PENDING"}</div>
                            </div>
                            <div>
                                <div className="text-white/40 text-[9px] font-mono font-bold uppercase tracking-[2px] mb-1">Verified Credits</div>
                                <div className="text-white text-[14px] font-bold font-outfit">{passport?.total_ects_accumulated || 0} ECTS · EQF 6</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-10 relative z-10">
                    {[
                        { l: 'Accreditation', v: 'EIU-Paris' },
                        { l: 'Quality Assured', v: 'ASIC Premier · UK' },
                        { l: 'Badges Earned', v: passport?.badges || 0 },
                        { l: 'Certificates', v: passport?.certificates || 0 },
                    ].map((item, i) => (
                        <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-3.5 backdrop-blur-md">
                            <div className="text-white/30 text-[8.5px] font-mono uppercase mb-1 tracking-[1.5px]">{item.l}</div>
                            <div className="text-white/80 text-[11px] font-bold truncate tracking-wide">{item.v}</div>
                        </div>
                    ))}
                </div>

                <div className="relative z-10 pt-6 border-t border-gold/20 flex justify-between items-center">
                    <div className="flex items-center gap-2 text-white/40 text-[10px] font-mono uppercase tracking-widest">
                        <MapPin size={12} className="text-primary" />
                        Status: Active
                    </div>
                    <button 
                        onClick={handleShare}
                        disabled={!passport?.is_public}
                        className={`flex items-center gap-2 text-white text-[12px] font-bold px-8 py-3 rounded-xl shadow-lg transition-all transform hover:-translate-y-1 active:scale-95 border ${
                            passport?.is_public 
                            ? "bg-primary border-primary/20 shadow-[0_10px_20px_rgba(203,45,57,0.3)] hover:bg-gold2" 
                            : "bg-white/10 border-white/10 cursor-not-allowed grayscale"
                        }`}
                    >
                        <Share2 size={14} />
                        Share Passport
                    </button>
                </div>
            </div>
        </div>
    );
};
