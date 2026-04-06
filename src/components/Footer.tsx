"use client";

import Link from "next/link";
import CommonWrapper from "@/common/CommonWrapper";

export default function Footer() {
    return (
        <footer className="bg-[#040810] border-t border-gold/20 py-16 md:py-24 relative overflow-hidden">
            {/* Background Canvas */}
            <div className="bg-canvas absolute inset-0 pointer-events-none z-0">
                <div className="bg-grid absolute inset-0 opacity-[0.02] bg-[linear-gradient(rgba(203,45,57,1)_1px,transparent_1px),linear-gradient(90deg,rgba(203,45,57,1)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
            </div>

            <CommonWrapper>
                <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="footer-brand lg:col-span-1">
                        <Link href="/" className="inline-block mb-6">
                            <span className="text-2xl font-black tracking-tighter text-white">
                                IKON <span className="text-gold">SKILLS™</span>
                            </span>
                        </Link>
                        <p className="text-[14px] text-white/50 leading-relaxed max-w-[280px] mb-8">
                            High-fidelity competency-based education. Quality assured by European International University, Paris.
                        </p>
                        <div className="social-links flex gap-4">
                            {['LinkedIn', 'Twitter', 'YouTube', 'Instagram'].map(s => (
                                <a key={s} href="#" className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[10px] text-white/40 font-bold uppercase tracking-wider hover:bg-gold hover:border-gold hover:text-white transition-all cursor-pointer">
                                    {s[0]}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="footer-nav">
                        <h4 className="text-[11px] font-bold text-gold font-mono uppercase tracking-[2px] mb-6">Navigation</h4>
                        <ul className="space-y-4">
                            {[
                                { name: "Home", href: "/" },
                                { name: "Credential Catalog", href: "/catalog" },
                                { name: "Sample MC", href: "/sample-mc" },
                                { name: "Degree Programs", href: "/degrees" },
                                { name: "Credential Pathways", href: "/pathways" },
                                { name: "Pricing", href: "/pricing" }
                            ].map(link => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-[13px] text-white/60 hover:text-white hover:pl-2 transition-all">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="footer-legal">
                        <h4 className="text-[11px] font-bold text-gold font-mono uppercase tracking-[2px] mb-6">Legal & Policy</h4>
                        <ul className="space-y-4">
                            {['Privacy Policy', 'Cookie Policy', 'Terms of Service', 'Academic Policy', 'Competency Framework', 'Verification API'].map(link => (
                                <li key={link}>
                                    <a href="#" className="text-[13px] text-white/60 hover:text-white hover:pl-2 transition-all">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="footer-qa">
                        <h4 className="text-[11px] font-bold text-gold font-mono uppercase tracking-[2px] mb-6">Quality Assurance</h4>
                        <div className="qa-badges space-y-4">
                            <div className="qa-badge bg-white/5 border border-white/10 p-3 rounded-xl flex items-center gap-3 group hover:border-gold/30 transition-all">
                                <div className="w-8 h-8 rounded-full bg-gold/15 flex items-center justify-center text-gold text-[16px]">🇫🇷</div>
                                <div>
                                    <div className="text-[11px] font-bold text-white leading-none mb-1">EIU-Paris</div>
                                    <div className="text-[9px] text-white/40 uppercase font-mono leading-none">Premier Institution</div>
                                </div>
                            </div>
                            <div className="qa-badge bg-white/5 border border-white/10 p-3 rounded-xl flex items-center gap-3 group hover:border-gold/30 transition-all">
                                <div className="w-8 h-8 rounded-full bg-blue-500/15 flex items-center justify-center text-blue-400 text-[16px]">🎓</div>
                                <div>
                                    <div className="text-[11px] font-bold text-white leading-none mb-1">ASIC UK</div>
                                    <div className="text-[9px] text-white/40 uppercase font-mono leading-none">Premier Accredited</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom pt-8 border-t border-white/5 flex flex-wrap justify-between items-center gap-6">
                    <div className="text-[12px] text-white/30 font-medium">
                        © 2025 IKON SKILLS™ | Life Choice Coach Ltd. All Rights Reserved.
                    </div>
                    <div className="text-[12px] text-white/30 font-medium font-mono">
                        VERSION 2.4.0-REL | PLATFORM-ID [IKON-PROD-001]
                    </div>
                </div>
            </CommonWrapper>
        </footer>
    );
}
