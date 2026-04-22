"use client";

import { useGetCertificatesQuery } from "@/redux/features/progress/certificateApi";
import { Loader2, Award, Download, ExternalLink, ShieldCheck } from "lucide-react";

export const Certificates = () => {
    const { data, isLoading } = useGetCertificatesQuery();
    const certificates = data?.certificates || [];

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
                <Award className="w-6 h-6 text-gold" />
                <h2 className="text-[20px] font-bold text-white italic font-serif">Verified Certificates</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {certificates.length > 0 ? (
                    certificates.map((cert) => (
                        <div key={cert.id} className="bg-white/5 border border-white/10 rounded-[2rem] p-6 relative overflow-hidden group hover:border-gold/30 transition-all duration-500">
                            <div className="absolute top-[-30px] right-[-30px] w-32 h-32 rounded-full bg-radial-gradient from-gold/10 to-transparent pointer-events-none group-hover:scale-125 transition-transform duration-700"></div>
                            
                            <div className="flex items-start gap-6 relative z-10">
                                <div className="w-16 h-20 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center relative overflow-hidden">
                                    {cert.image ? (
                                        <img src={cert.image} alt="Certificate Thumbnail" className="w-full h-full object-cover" />
                                    ) : (
                                        <Award className="w-8 h-8 text-white/10" />
                                    )}
                                    <div className="absolute inset-0 bg-gold/5 group-hover:bg-transparent transition-colors"></div>
                                </div>

                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                        <ShieldCheck className="w-3 h-3 text-gold" />
                                        <span className="text-[9px] font-bold text-gold uppercase tracking-widest font-mono">Official EIU-Paris Credential</span>
                                    </div>
                                    <h3 className="text-white text-[16px] font-bold mb-1 leading-tight group-hover:text-gold transition-colors">{cert.credential_name}</h3>
                                    <div className="text-white/40 text-[11px] mb-4">Issued on {new Date(cert.issue_date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</div>
                                    
                                    <div className="flex flex-wrap gap-3">
                                        <button className="flex items-center gap-1.5 bg-gold/10 hover:bg-gold text-gold hover:text-white px-3 py-1.5 rounded-lg text-[10px] font-bold transition-all border border-gold/20">
                                            <Download className="w-3 h-3" /> Download PDF
                                        </button>
                                        <button className="flex items-center gap-1.5 bg-white/5 hover:bg-white/10 text-white/60 hover:text-white px-3 py-1.5 rounded-lg text-[10px] font-bold transition-all border border-white/10">
                                            <ExternalLink className="w-3 h-3" /> Verify
                                        </button>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="mt-6 pt-4 border-t border-white/5 flex justify-between items-center text-[9px] font-mono text-white/30 uppercase tracking-[1px]">
                                <span>Certificate ID: {cert.certificate_number}</span>
                                <span className={cert.is_valid ? 'text-green-500/60' : 'text-red-500/60'}>{cert.is_valid ? 'Status: Valid' : 'Status: Expired'}</span>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="col-span-full py-20 text-center bg-white/5 border border-dashed border-white/10 rounded-[2rem]">
                        <Award className="w-12 h-12 text-white/10 mx-auto mb-4" />
                        <p className="text-white/40 text-[14px]">No certificates issued yet. Complete a micro-credential to earn your first award.</p>
                    </div>
                )}
            </div>
        </div>
    );
};
