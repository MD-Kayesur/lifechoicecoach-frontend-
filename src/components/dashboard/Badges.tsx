"use client";

import React, { useState } from "react";
import { 
    useGetBadgesQuery, 
    useLazyVerifyBadgeQuery,
    useGetBadgeByIdQuery 
} from "@/redux/features/progress/progressbadgeapi";
import { 
    Loader2, Medal, ShieldCheck, Share2, 
    Calendar, Hash, Award, X, ExternalLink, 
    CheckCircle2, Info, User, BookOpen 
} from "lucide-react";
import badgeImg from "@/assets/cirtificate/telegram-cloud-photo-size-5-6246740885487947000-y.jpg";
import Image from "next/image";
import { toast } from "sonner";

export const Badges = () => {
    const { data, isLoading } = useGetBadgesQuery();
    const [selectedBadgeId, setSelectedBadgeId] = useState<number | null>(null);
    const [isVerifying, setIsVerifying] = useState(false);
    
    const [triggerVerify] = useLazyVerifyBadgeQuery();

    const badges = data?.badges || [];

    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-[400px]">
                <Loader2 className="w-8 h-8 animate-spin text-gold" />
            </div>
        );
    }

    const formatDate = (dateString: string) => {
        try {
            return new Date(dateString).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
            });
        } catch (e) {
            return dateString;
        }
    };

    const handleVerify = async (e: React.MouseEvent, code: string) => {
        e.stopPropagation();
        setIsVerifying(true);
        try {
            const result = await triggerVerify({ verification_code: code }).unwrap();
            if (result.is_valid) {
                toast.success("Badge verified successfully!");
            } else {
                toast.error("Badge verification failed.");
            }
        } catch (error) {
            toast.error("An error occurred during verification.");
        } finally {
            setIsVerifying(false);
        }
    };

    return (
        <div className="animate-in fade-in duration-500 space-y-8">
            {/* Header section */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 relative">
                        <Image src={badgeImg} alt="IKON Badge" fill className="object-contain" />
                    </div>
                    <h2 className="text-[20px] font-bold text-white italic font-serif">IKON Digital Badges</h2>
                </div>
                <div className="px-4 py-1.5 bg-gold/10 border border-gold/20 rounded-full">
                    <span className="text-[11px] font-bold text-gold uppercase tracking-widest font-mono">
                        Total Earned: {badges.length}
                    </span>
                </div>
            </div>

            {/* Badges Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {badges.length > 0 ? (
                    badges.map((badge) => (
                        <div 
                            key={badge.id} 
                            onClick={() => setSelectedBadgeId(badge.id)}
                            className="bg-gradient-to-br from-white/10 to-white/[0.02] border border-white/10 rounded-[2rem] p-6 flex flex-col group hover:border-gold/40 transition-all duration-500 relative overflow-hidden cursor-pointer active:scale-[0.98]"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                                <Award className="w-16 h-16 text-gold" />
                            </div>
                            
                            <div className="flex items-start justify-between mb-6">
                                <div className="w-14 h-14 rounded-2xl bg-gold/10 border border-gold/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-xl relative overflow-hidden p-2">
                                    <Image src={badgeImg} alt="Badge" fill className="object-contain p-2" />
                                </div>
                                <div className="flex flex-col items-end">
                                    <div className={`px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider mb-2 ${
                                        badge.badge_type === 'competency' ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' : 'bg-gold/10 text-gold border border-gold/20'
                                    }`}>
                                        {badge.badge_type}
                                    </div>
                                    <div className="flex items-center gap-1 text-[10px] text-white/40 font-mono">
                                        <Calendar className="w-3 h-3" />
                                        {formatDate(badge.issued_at)}
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-3 mb-6 relative z-10">
                                <h3 className="text-white text-[16px] font-bold leading-tight group-hover:text-gold transition-colors line-clamp-2 min-h-[2.5rem]">
                                    {badge.micro_credential_name}
                                </h3>
                                
                                {badge.competency_name && (
                                    <p className="text-white/60 text-[12px] italic">{badge.competency_name}</p>
                                )}

                                <div className="pt-4 space-y-3">
                                    <div className="flex items-center justify-between p-3 bg-black/20 rounded-xl border border-white/5">
                                        <div className="flex items-center gap-2">
                                            <Hash className="w-3 h-3 text-gold/60" />
                                            <span className="text-[10px] font-mono text-white/60 tracking-wider">
                                                {badge.verification_code}
                                            </span>
                                        </div>
                                        {badge.is_verified && (
                                            <ShieldCheck className="w-4 h-4 text-green-500" />
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="mt-auto pt-4 flex gap-2 relative z-10 w-full">
                                <button 
                                    onClick={(e) => handleVerify(e, badge.verification_code)}
                                    disabled={isVerifying}
                                    className="flex-1 bg-white/5 hover:bg-gold text-white/60 hover:text-white py-2.5 rounded-xl text-[11px] font-bold transition-all border border-white/10 hover:border-gold/30 flex items-center justify-center gap-2 group/btn disabled:opacity-50"
                                >
                                    {isVerifying ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <ExternalLink className="w-3.5 h-3.5" />}
                                    Verify
                                </button>
                                <button className="p-2.5 bg-white/5 hover:bg-white/10 text-white/40 hover:text-white rounded-xl transition-all border border-white/10">
                                    <Share2 className="w-3.5 h-3.5" />
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="col-span-full py-20 text-center bg-white/5 border border-dashed border-white/10 rounded-[2.5rem]">
                        <Award className="w-12 h-12 text-white/10 mx-auto mb-4" />
                        <p className="text-white/40 text-[14px]">No digital badges earned yet. Keep learning to unlock your achievements.</p>
                    </div>
                )}
            </div>

            {/* Detail Modal */}
            {selectedBadgeId && (
                <BadgeDetailModal 
                    id={selectedBadgeId} 
                    onClose={() => setSelectedBadgeId(null)} 
                    formatDate={formatDate}
                />
            )}
        </div>
    );
};

// Modal Component for Badge Details
const BadgeDetailModal = ({ id, onClose, formatDate }: { id: number, onClose: () => void, formatDate: (d: string) => string }) => {
    const { data: badge, isLoading } = useGetBadgeByIdQuery(id);

    return (
        <div className="fixed inset-0 z-[300] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-300">
            <div className="bg-[#0b1f3a] border border-white/10 rounded-[2.5rem] w-full max-w-lg overflow-hidden relative shadow-2xl">
                {/* Close Button */}
                <button 
                    onClick={onClose}
                    className="absolute top-6 right-6 p-2 bg-white/5 hover:bg-white/10 rounded-full text-white/40 hover:text-white transition-all z-20"
                >
                    <X className="w-5 h-5" />
                </button>

                {isLoading ? (
                    <div className="p-20 flex flex-col items-center gap-4">
                        <Loader2 className="w-10 h-10 animate-spin text-gold" />
                        <span className="text-white/40 font-mono text-xs uppercase tracking-widest">Fetching Details...</span>
                    </div>
                ) : badge ? (
                    <div className="p-8">
                        {/* Header Image/Icon */}
                        <div className="flex flex-col items-center text-center mb-8">
                            <div className="w-24 h-24 rounded-3xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-6 shadow-2xl relative overflow-hidden p-4">
                                <Image src={badgeImg} alt="Badge Detail" fill className="object-contain p-4" />
                            </div>
                            <div className="flex items-center gap-2 text-gold text-[10px] font-bold uppercase tracking-[2px] mb-2 font-mono">
                                <ShieldCheck className="w-4 h-4" /> Official Verified Achievement
                            </div>
                            <h2 className="text-2xl font-bold text-white leading-tight font-serif italic">{badge.micro_credential_name}</h2>
                            {badge.competency_name && (
                                <p className="text-gold/80 text-sm mt-1">{badge.competency_name}</p>
                            )}
                        </div>

                        {/* Details List */}
                        <div className="grid grid-cols-2 gap-4 mb-8">
                            <DetailItem icon={<User />} label="Recipient" value={badge.user_email} />
                            <DetailItem icon={<Calendar />} label="Issued On" value={formatDate(badge.issued_at)} />
                            <DetailItem icon={<BookOpen />} label="Micro-Credential ID" value={`#${badge.micro_credential}`} />
                            <DetailItem icon={<Award />} label="Badge Type" value={badge.badge_type} className="capitalize" />
                        </div>

                        {/* Verification Section */}
                        <div className="bg-black/20 rounded-2xl border border-white/5 p-6 mb-8">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-2">
                                    <Hash className="w-4 h-4 text-gold" />
                                    <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest font-mono">Verification Code</span>
                                </div>
                                {badge.is_verified && (
                                    <div className="flex items-center gap-1.5 px-2 py-0.5 bg-green-500/10 rounded-full border border-green-500/20">
                                        <CheckCircle2 className="w-3 h-3 text-green-500" />
                                        <span className="text-[9px] font-bold text-green-500 uppercase tracking-wider">Verified</span>
                                    </div>
                                )}
                            </div>
                            <div className="text-xl font-mono text-white font-bold tracking-wider text-center py-4 bg-white/5 rounded-xl border border-white/5 select-all">
                                {badge.verification_code}
                            </div>
                        </div>

                        {/* Action */}
                        <div className="flex gap-3">
                            <button 
                                className="flex-1 bg-gold text-white font-bold py-4 rounded-2xl shadow-[0_4px_0_#9a7e3a] hover:bg-gold2 hover:translate-y-[1px] hover:shadow-[0_3px_0_#9a7e3a] transition-all flex items-center justify-center gap-2"
                            >
                                <Share2 className="w-4 h-4" /> Share Achievement
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="p-20 text-center">
                        <Info className="w-10 h-10 text-white/10 mx-auto mb-4" />
                        <p className="text-white/40">Failed to load badge details.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

const DetailItem = ({ icon, label, value, className = "" }: { icon: any, label: string, value: string, className?: string }) => (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center gap-3">
        <div className="p-2 bg-gold/10 rounded-lg text-gold">
            {React.cloneElement(icon as React.ReactElement, { size: 16 } as any)}
        </div>
        <div className="flex flex-col">
            <span className="text-[9px] font-bold text-white/30 uppercase tracking-widest font-mono">{label}</span>
            <span className={`text-[12px] font-bold text-white truncate max-w-[140px] ${className}`}>{value}</span>
        </div>
    </div>
);
