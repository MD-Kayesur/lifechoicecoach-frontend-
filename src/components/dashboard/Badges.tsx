"use client";

import { useGetBadgesQuery } from "@/redux/features/progress/progressbadgeapi";
import { Loader2, Medal, ShieldCheck, Share2 } from "lucide-react";

export const Badges = () => {
    const { data, isLoading } = useGetBadgesQuery();
    const badges = data?.badges || [];

    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-[400px]">
                <Loader2 className="w-8 h-8 animate-spin text-gold" />
            </div>
        );
    }

    return (
        <div className="animate-in fade-in duration-500 space-y-8">
            <div className="flex items-center gap-3">
                <Medal className="w-6 h-6 text-gold" />
                <h2 className="text-[20px] font-bold text-white italic font-serif">IKON Digital Badges</h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {badges.length > 0 ? (
                    badges.map((badge) => (
                        <div key={badge.id} className="bg-white/5 border border-white/10 rounded-[2.5rem] p-6 flex flex-col items-center text-center group hover:border-gold/40 transition-all duration-500 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-b from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            
                            <div className="w-24 h-24 rounded-full bg-white/5 border border-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 relative z-10 shadow-2xl">
                                {badge.image ? (
                                    <img src={badge.image} alt={badge.name} className="w-16 h-16 object-contain" />
                                ) : (
                                    <Medal className="w-10 h-10 text-gold/20" />
                                )}
                            </div>

                            <div className="relative z-10 space-y-2">
                                <div className="flex items-center justify-center gap-1.5 text-gold text-[9px] font-bold uppercase tracking-widest font-mono">
                                    <ShieldCheck className="w-3 h-3" /> Verified Badge
                                </div>
                                <h3 className="text-white text-[15px] font-bold leading-tight group-hover:text-gold transition-colors">{badge.name}</h3>
                                <p className="text-white/40 text-[10px] line-clamp-2 px-2">{badge.description}</p>
                            </div>

                            <div className="mt-6 flex gap-2 relative z-10 w-full">
                                <button className="flex-1 bg-white/5 hover:bg-gold text-white/60 hover:text-white py-2 rounded-xl text-[10px] font-bold transition-all border border-white/10 hover:border-gold/30 flex items-center justify-center gap-2 group/btn">
                                    <Share2 className="w-3 h-3" /> Share
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="col-span-full py-20 text-center bg-white/5 border border-dashed border-white/10 rounded-[2.5rem]">
                        <Medal className="w-12 h-12 text-white/10 mx-auto mb-4" />
                        <p className="text-white/40 text-[14px]">No digital badges earned yet. Keep learning to unlock your achievements.</p>
                    </div>
                )}
            </div>
        </div>
    );
};
