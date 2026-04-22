"use client";

import { DegreeProgress } from "./DegreeProgress";
import { useGetDegreePathwayProgressQuery } from "@/redux/features/practitioner/PractitionerManagementApi";
import { Loader2, GraduationCap, ChevronRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const DegreePathways = () => {
    const { data: pathwaysData, isLoading } = useGetDegreePathwayProgressQuery();

    const pathways = pathwaysData?.degree_pathways || [];

    return (
        <div className="animate-in fade-in duration-500 space-y-10">
            {/* Active Progress Component */}
            <DegreeProgress />

            {/* Degree Pathways Progress */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 relative overflow-hidden group hover:border-white/20 transition-all duration-500">
                <div className="absolute top-0 right-0 p-10 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity duration-700 pointer-events-none">
                    <GraduationCap size={200} />
                </div>

                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 relative z-10">
                    <div>
                        <div className="text-[15px] font-bold text-white mb-1 tracking-wide uppercase">Degree Pathway Progress</div>
                        <p className="text-white/40 text-[12px]">Tracking your credit accumulation towards EIU-Paris degrees</p>
                    </div>
                    <Link href="/degrees" className="text-gold2 text-[11px] font-bold uppercase tracking-[2px] hover:text-white transition-colors flex items-center gap-1 group/link">
                        Explore All Degrees <ChevronRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="space-y-4 relative z-10">
                    {isLoading ? (
                        <div className="flex items-center justify-center py-12">
                            <Loader2 className="w-8 h-8 text-gold/50 animate-spin" />
                        </div>
                    ) : pathways.length > 0 ? (
                        pathways.map((degree) => (
                            <div key={degree.degree_id} className="bg-white/5 border border-white/5 rounded-2xl p-5 hover:border-gold/30 transition-all group/row">
                                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center text-gold group-hover/row:bg-gold group-hover/row:text-white transition-all duration-300">
                                            <GraduationCap size={20} />
                                        </div>
                                        <div>
                                            <div className="text-white text-[15px] font-bold group-hover/row:text-gold transition-colors">{degree.degree_name}</div>
                                            <div className="text-white/40 text-[10px] font-mono tracking-[1px] uppercase flex items-center gap-2 mt-0.5">
                                                <span className="bg-white/10 px-1.5 py-0.5 rounded text-[9px]">{degree.degree_type}</span>
                                                <span className="w-1 h-1 rounded-full bg-white/20" />
                                                <span>Level {degree.eqf_level}</span>
                                                {degree.is_completed && (
                                                    <>
                                                        <span className="w-1 h-1 rounded-full bg-white/20" />
                                                        <span className="text-gold flex items-center gap-1"><CheckCircle2 size={10} /> Completed</span>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-6">
                                        <div className="text-right">
                                            <div className="text-white text-[16px] font-serif font-bold">{degree.degree_pathway_progress}</div>
                                            <div className="text-[9px] text-white/30 uppercase font-bold tracking-wider">MCs Completed</div>
                                        </div>
                                        <div className="text-right min-w-[50px]">
                                            <div className="text-gold text-[16px] font-serif font-bold">{Math.round(degree.progress_percentage)}%</div>
                                            <div className="text-[9px] text-white/30 uppercase font-bold tracking-wider">Overall</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Progress Bar */}
                                <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                                    <div 
                                        className="h-full bg-gradient-to-r from-gold to-gold2 transition-all duration-1000" 
                                        style={{ width: `${degree.progress_percentage}%` }}
                                    />
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-white/40 text-[13px] py-12 text-center border border-dashed border-white/10 rounded-2xl">
                            No degree pathway progress available.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
