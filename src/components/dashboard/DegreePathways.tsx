"use client";

import { DegreeProgress } from "./DegreeProgress";
import { useGetDegreePathwaysQuery } from "@/redux/features/degree/degreePathwaysApi";
import { Loader2, GraduationCap, ChevronRight } from "lucide-react";
import Link from "next/link";

export const DegreePathways = () => {
    const { data: pathways, isLoading: isPathwaysLoading } = useGetDegreePathwaysQuery();

    return (
        <div className="animate-in fade-in duration-500 space-y-10">
            {/* Active Progress Component */}
            <DegreeProgress />

            {/* Available Pathways Gallery */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 relative overflow-hidden group hover:border-white/20 transition-all duration-500">
                <div className="absolute top-0 right-0 p-10 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity duration-700 pointer-events-none">
                    <GraduationCap size={200} />
                </div>

                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 relative z-10">
                    <div>
                        <div className="text-[15px] font-bold text-white mb-1 tracking-wide">Available Degree Pathways at EIU-Paris</div>
                        <p className="text-white/40 text-[12px]">Direct credit transfer from IKON SKILLS™ Micro-Credentials</p>
                    </div>
                    <Link href="/degrees" className="text-gold2 text-[11px] font-bold uppercase tracking-[2px] hover:text-white transition-colors flex items-center gap-1 group/link">
                        View All Pathways <ChevronRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="space-y-3 relative z-10">
                    {isPathwaysLoading ? (
                        <div className="flex items-center justify-center py-12">
                            <Loader2 className="w-8 h-8 text-gold/50 animate-spin" />
                        </div>
                    ) : pathways && pathways.length > 0 ? (
                        pathways.map((degree) => (
                            <div key={degree.id} className="flex justify-between items-center p-5 rounded-2xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all cursor-pointer group/row">
                                <div className="flex items-center gap-5">
                                    <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold group-hover/row:bg-gold group-hover/row:text-white transition-all duration-300">
                                        <GraduationCap size={24} />
                                    </div>
                                    <div>
                                        <div className="text-white text-[16px] font-bold group-hover/row:text-gold transition-colors">{degree.name}</div>
                                        <div className="text-white/40 text-[10px] font-mono tracking-[1.5px] uppercase flex items-center gap-2">
                                            <span>Level {degree.eqf_level}</span>
                                            <span className="w-1 h-1 rounded-full bg-white/20" />
                                            <span>Full Stackability</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-right hidden sm:block">
                                    <div className="text-gold2 text-[10px] font-mono font-bold uppercase tracking-[1px] mb-1">Scholarship Active</div>
                                    <div className="text-white/30 text-[11px] font-bold group-hover/row:text-white/60 transition-colors">Apply Now →</div>
                                </div>
                            </div>
                        ))
                    ) : (
                        [
                            { title: 'Bachelor of Applied AI & Automation', duration: '3 Years (Stackable)', fee: 'Premium Access Only' },
                            { title: 'Bachelor of Digital Intelligence & AI Operations', duration: '3 Years (Stackable)', fee: 'Premium Access Only' },
                            { title: 'MBA in AI Strategy & Governance', duration: '18 Months (Stackable)', fee: 'Scholarship Active' },
                        ].map((degree, idx) => (
                            <div key={idx} className="flex justify-between items-center p-5 rounded-2xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all cursor-pointer group/row">
                                <div className="flex items-center gap-5">
                                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white/20 group-hover/row:bg-gold group-hover/row:text-white transition-all duration-300">
                                        <GraduationCap size={24} />
                                    </div>
                                    <div>
                                        <div className="text-white text-[16px] font-bold group-hover/row:text-gold transition-colors">{degree.title}</div>
                                        <div className="text-white/40 text-[10px] font-mono tracking-[1.5px] uppercase">{degree.duration}</div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="text-gold2 text-[10px] font-mono font-bold uppercase tracking-[1px] mb-1">{degree.fee}</div>
                                    <div className="text-white/30 text-[11px] font-bold group-hover/row:text-white/60 transition-colors">Apply Now →</div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};
