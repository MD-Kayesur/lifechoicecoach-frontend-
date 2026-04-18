"use client";

import { useSearchParams } from "next/navigation";
import { MCS, DOMAINS } from "@/lib/data";
import Image from "next/image";
import certPhoto from "@/assets/images/PHOTO-2026-04-10-12-51-07.jpeg";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useRef } from "react";

export const Certificate = () => {
    const searchParams = useSearchParams();
    const id = searchParams.get("id") || "01-01";
    const mc = MCS.find(item => item.id === id) || MCS[0];
    const category = DOMAINS.find(d => d.id === mc.cat);


    const certRef = useRef<HTMLDivElement>(null);



    const handleDownload = async () => {
        if (!certRef.current) return;

        const canvas = await html2canvas(certRef.current, {
            scale: 2, // better quality
        });

        const imgData = canvas.toDataURL("image/png");

        const pdf = new jsPDF("landscape", "px", [canvas.width, canvas.height]);
        pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
        pdf.save("certificate.pdf");
    };


    return (
        <div id="page-certificate" className="page active pt-[62px] min-h-screen bg-[#0a1628]">
            <div className="cert-layout max-w-[1200px] mx-auto px-8 md:px-12 py-10 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10">
                <div className="animate-in fade-in slide-in-from-left-4 duration-700">
                    <div className="cert-bc text-sm text-white/50 hover:text-white mb-6 cursor-pointer flex items-center gap-2 transition-colors" onClick={() => window.location.href = `/sample-mc?id=${mc.id}`}>
                        ← Back to Credential
                    </div>
                    <div className="header mb-8">
                        <div className="eyebrow text-gold font-bold text-[10.5px] tracking-[2px] uppercase font-mono mb-2">Sample Micro-Credential Certificate</div>
                        <h2 className="sec-h font-serif font-bold text-[26px] text-white leading-tight mb-4 ml-0">This is what your Proof of Skill looks like.</h2>
                        <p className="text-[13.5px] text-white/60 leading-relaxed max-w-[520px]">
                            Every IKON SKILLS™ Micro-Credential you earn generates a formal digital certificate quality assured by European International University, Paris — together with a digital badge for your IKON SKILLS™ Passport.
                        </p>
                    </div>

                    {/* Certificate Card */}
                    <div className="certificate bg-white border-2 border-gold rounded-[4px] relative overflow-hidden shadow-2xl scale-[0.98] origin-left">
                        <div ref={certRef} className="cert-ob m-3 border-[1.5px] border-gold rounded-[2px] p-10 md:p-12 relative">

                            <div className="cc absolute w-4 h-4 top-[-1px] left-[-1px] border-t-3 border-l-3 border-gold"></div>
                            <div className="cc absolute w-4 h-4 top-[-1px] right-[-1px] border-t-3 border-r-3 border-gold"></div>
                            <div className="cc absolute w-4 h-4 bottom-[-1px] left-[-1px] border-b-3 border-l-3 border-gold"></div>
                            <div className="cc absolute w-4 h-4 bottom-[-1px] right-[-1px] border-b-3 border-r-3 border-gold"></div>


                            <div className="cert-recipient-photo absolute top-10 right-10 w-[90px] h-[115px] border-[1.5px] border-gold rounded-[2px] overflow-hidden grayscale hover:grayscale-0 transition-all shadow-sm z-10 hidden md:block">
                                <Image
                                    src={certPhoto}
                                    alt="Edward Roy Krishnan"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="cert-hdr text-center pb-6 border-b border-gold/15 mb-8">
                                <div className="cert-logo-row flex items-center justify-center gap-2 mb-2">
                                    <img src="https://ikonmalta.ac/IKON_LOGO_White_Color.png" alt="IKON" className="h-7 w-auto object-contain filter brightness-0 saturate-100 invert-[18%] sepia-[82%] saturate-[1200%] hue-rotate-[340deg] brightness-[0.85]" />
                                    <div className="cert-ln font-serif font-bold text-[21px] text-[#0B1F3A]">SKILLS<sup>™</sup></div>
                                </div>
                                <div className="cert-qa-line text-[10px] text-[#74798A] font-mono leading-relaxed">
                                    Quality Assured by European International University, Paris · UAI 0756213W · 59 Rue Lamarck, 75018 Paris
                                </div>
                            </div>

                            <div className="cert-body text-center mb-8">
                                <div className="cert-pres text-[11px] text-[#74798A] tracking-[2px] uppercase font-mono mb-2">This certifies that</div>
                                <div className="cert-recipient font-serif text-[36px] font-bold text-[#0B1F3A] border-b-[1.5px] border-gold pb-2 inline-block mb-4">Edward Roy Krishnan</div>
                                <div className="cert-earned text-[12.5px] text-[#3D4556] mb-4">has successfully earned the IKON SKILLS™ Micro-Credential in</div>
                                <div className="cert-mc-name font-serif text-[27px] font-bold text-[#0B1F3A] leading-tight mb-2">{mc.name}</div>
                                <div className="cert-domain text-[11px] text-gold font-mono font-bold tracking-[1px] mb-6">Category {mc.cat} · {category?.name}</div>
                                <div className="cert-note text-[12px] text-[#3D4556] leading-relaxed max-w-[460px] mx-auto mb-8">
                                    Having demonstrated mastery of all 10 core competencies as assessed by the IKON SKILLS™ AI-native assessment framework, in accordance with the European Qualifications Framework (EQF) standards.
                                </div>

                                <div className="cert-meta-row flex justify-center gap-6 md:gap-10 mb-8 flex-wrap">
                                    <div className="cert-mb">
                                        <div className="cert-ml text-[9.5px] font-mono text-[#74798A] tracking-[1px] uppercase mb-0.5">ECTS Credits</div>
                                        <div className="cert-mv text-[13.5px] font-bold text-[#0B1F3A]">{mc.ects} ECTS</div>
                                    </div>
                                    <div className="cert-mb">
                                        <div className="cert-ml text-[9.5px] font-mono text-[#74798A] tracking-[1px] uppercase mb-0.5">EQF Level</div>
                                        <div className="cert-mv text-[13.5px] font-bold text-[#0B1F3A]">Level {mc.level}</div>
                                    </div>
                                    <div className="cert-mb">
                                        <div className="cert-ml text-[9.5px] font-mono text-[#74798A] tracking-[1px] uppercase mb-0.5">Date of Issue</div>
                                        <div className="cert-mv text-[13.5px] font-bold text-[#0B1F3A]">07 March 2026</div>
                                    </div>
                                    <div className="cert-mb">
                                        <div className="cert-ml text-[9.5px] font-mono text-[#74798A] tracking-[1px] uppercase mb-0.5">Credential ID</div>
                                        <div className="cert-mv text-[13.5px] font-bold text-[#0B1F3A]">IKS-{mc.id}-2026-4201</div>
                                    </div>
                                </div>

                                <div className="cert-seal-row flex flex-col md:flex-row justify-between items-center md:items-end pt-6 border-t border-gold/15 gap-8">
                                    <div className="cert-sig text-center">
                                        <div className="cert-sig-line w-[130px] h-[1px] bg-[#0B1F3A]/40 mx-auto mb-2"></div>
                                        <div className="cert-sig-n text-[10px] font-bold text-[#0B1F3A] font-mono">HON. KY. COL. PROF. DR. EDWARD ROY KRISHNAN</div>
                                        <div className="cert-sig-t text-[8.5px] text-[#74798A] font-mono mt-1">Founder & CEO, IKON SKILLS™ · EIU-Paris</div>
                                    </div>
                                    <div className="cert-seal w-[80px] h-[80px] rounded-full border-[2.5px] border-gold bg-gold/5 flex flex-col items-center justify-center text-center p-2">
                                        <div className="cert-seal-t text-[8.5px] font-bold text-gold font-mono leading-tight uppercase tracking-[0.4px]">IKON<br />SKILLS™<br />VERIFIED</div>
                                    </div>
                                    <div className="cert-sig text-center">
                                        <div className="cert-sig-line w-[130px] h-[1px] bg-[#0B1F3A]/40 mx-auto mb-2"></div>
                                        <div className="cert-sig-n text-[10px] font-bold text-[#0B1F3A] font-mono uppercase tracking-wider">Quality Assured</div>
                                        <div className="cert-sig-t text-[8.5px] text-[#74798A] font-mono mt-1">European International University, Paris<br />UAI 0756213W</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <aside className="cv-sidebar sticky top-[92px] animate-in fade-in slide-in-from-right-4 duration-700">
                    <div className="cv-panel bg-white border border-gold/20 rounded-2xl p-6 mb-4 shadow-xl">
                        <div className="cv-t text-[13px] font-bold text-[#0B1F3A] mb-4 flex items-center gap-2">
                            <span>🔒</span> Credential Verification
                        </div>

                        {/* Sidebar Recipeint Photo */}
                        <div className="cv-profile-box flex items-center gap-4 mb-6 pb-6 border-b border-[#0B1F3A]/5">
                            <div className="w-[60px] h-[60px] rounded-full border-2 border-gold overflow-hidden bg-gold/5 shrink-0">
                                <Image
                                    src={certPhoto}
                                    alt="Edward Roy Krishnan"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div>
                                <div className="text-[14px] font-bold text-[#0B1F3A]">Edward Roy Krishnan</div>
                                <div className="text-[10px] text-green-600 font-bold uppercase tracking-wider">✓ Verified Identity</div>
                            </div>
                        </div>

                        <div className="cv-id bg-[#F9F5EE] border border-gold/10 rounded-lg p-3 text-[11.5px] font-mono text-[#1A1A1E] break-all mb-4">
                            IKS-{mc.id}-2026-4201-XKPM7
                        </div>
                        <div className="space-y-3">
                            {[
                                { l: 'Practitioner', v: 'Edward Roy Krishnan' },
                                { l: 'Credential', v: mc.name },
                                { l: 'Domain', v: `Cat ${mc.cat} · ${category?.name}` },
                                { l: 'ECTS', v: `${mc.ects} ECTS · EQF ${mc.level}` },
                                { l: 'Date Issued', v: '07 March 2026' },
                                { l: 'Quality Assured By', v: 'EIU-Paris' },
                                { l: 'Status', v: '✓ Verified', color: '#0A6B45' },
                            ].map((row, i) => (
                                <div key={i} className="cv-row flex justify-between text-[12px] pb-2 border-b border-[#0B1F3A]/5 last:border-0 last:pb-0">
                                    <span className="cv-l text-[#74798A]">{row.l}</span>
                                    <span className="cv-v font-bold text-[#0B1F3A]" style={row.color ? { color: row.color } : {}}>{row.v}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button onClick={handleDownload} className="btn-dl w-full bg-gold text-white font-bold text-[13.5px] py-3 rounded-xl shadow-[0_4px_0_#8a1e27] hover:bg-gold2 hover:translate-y-[2px] hover:shadow-[0_2px_0_#8a1e27] active:shadow-none active:translate-y-[4px] transition-all mb-3">
                        ⬇ Download Certificate (PDF)
                    </button>


                    <div className="note bg-[#F9F5EE] border border-gold/15 rounded-2xl p-4">
                        <div className="text-[12px] font-bold text-[#0B1F3A] mb-2">What this certificate proves</div>
                        <div className="text-[12px] text-[#3D4556] leading-relaxed">
                            This IKON SKILLS™ Micro-Credential certificate is quality assured by European International University, Paris (UAI 0756213W) and verifies mastery of 10 EQF-aligned competencies. It carries 10 ECTS and is stackable toward full degree programs at EIU-Paris.
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
};
