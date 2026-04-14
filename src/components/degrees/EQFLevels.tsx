"use client";

import { useGetEqfLevelsQuery } from "@/redux/features/degree/degreeLevelsApi";
import { Loader2, GraduationCap, BookOpen, Layers, Award, CheckCircle2 } from "lucide-react";

export const EQFLevels = () => {
    const { data: response, isLoading, error } = useGetEqfLevelsQuery();

    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-[400px]">
                <Loader2 className="w-10 h-10 animate-spin text-gold" />
            </div>
        );
    }

    if (error) {
        return (
            <div className="p-8 text-center bg-red-500/10 border border-red-500/20 rounded-3xl">
                <p className="text-red-400 font-bold">Failed to load EQF levels. Please try again later.</p>
            </div>
        );
    }

    const levels = response?.eqf_levels || [];

    return (
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-6 duration-1000">
            <div className="text-center max-w-3xl mx-auto space-y-4">
                <span className="text-gold text-[10px] font-black uppercase tracking-[4px]">Academic Framework</span>
                <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">EQF Qualification Levels</h2>
                <p className="text-white/50 text-[15px] leading-relaxed">
                    Explore the European Qualifications Framework levels supported by IKON.
                    Stack your Micro-Credentials to earn globally recognized degrees and certificates.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {levels.map((level, idx) => (
                    <div
                        key={level.id}
                        className="group relative bg-white/5 border border-white/10 rounded-[32px] p-8 overflow-hidden hover:border-gold/30 transition-all duration-500"
                    >
                        {/* Background Gradient Effect */}
                        <div className="absolute -top-24 -right-24 w-48 h-48 bg-gold/5 blur-[80px] rounded-full group-hover:bg-gold/10 transition-all duration-500" />

                        <div className="relative flex flex-col h-full">
                            <div className="flex items-start justify-between mb-8">
                                <div className="space-y-1">
                                    <div className="flex items-center gap-3">
                                        <div className="px-3 py-1 rounded-full bg-gold/20 border border-gold/30 text-gold text-[10px] font-black tracking-widest uppercase">
                                            Level {level.level}
                                        </div>
                                        {level.id === 1 && (
                                            <span className="text-[10px] text-white/30 font-bold uppercase tracking-widest">Entry Level</span>
                                        )}
                                    </div>
                                    <h3 className="text-2xl font-black text-white tracking-tight group-hover:text-gold transition-colors duration-300">
                                        {level.name}
                                    </h3>
                                </div>
                                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/20 group-hover:text-gold transition-all duration-500 group-hover:scale-110">
                                    {idx === 0 ? <GraduationCap size={28} /> :
                                        idx === 1 ? <BookOpen size={28} /> :
                                            idx === 2 ? <Layers size={28} /> :
                                                <Award size={28} />}
                                </div>
                            </div>

                            <p className="text-white/40 text-[14px] leading-relaxed mb-10 flex-grow">
                                {level.description}
                            </p>

                            <div className="grid grid-cols-2 gap-4 pt-10 border-t border-white/5">
                                <div className="space-y-1">
                                    <span className="text-white/20 text-[9px] font-black uppercase tracking-widest block">Required MCs</span>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 size={14} className="text-gold/50" />
                                        <span className="text-white font-black text-[15px]">{level.mc_range}</span>
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <span className="text-white/20 text-[9px] font-black uppercase tracking-widest block">ECTS Volume</span>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 size={14} className="text-[#f06070]/50" />
                                        <span className="text-white font-black text-[15px]">{level.ects_range}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Hover Border Accent */}
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                    </div>
                ))}
            </div>
        </div>
    );
};
