"use client";

import Link from "next/link";
import CommonWrapper from "@/common/CommonWrapper";

export default function Footer() {
    return (
        <footer className="bg-[#060e1e] border-t border-gold/15 py-16 md:py-20 relative overflow-hidden font-outfit">
            <CommonWrapper>
                <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="footer-brand lg:col-span-1">
                        <div className="fb-n font-serif font-bold text-[21px] text-white mb-2.5">
                            IKON SKILLS<sup className="text-[10px] text-[#f06070] align-super">™</sup>
                        </div>
                        <p className="text-[13px] text-white/45 leading-[1.75] mb-4">
                            The world's most comprehensive Proof of Skill Micro-Credential platform. 184 Micro-Credentials. 10 domains. Stackable toward full degrees at EIU-Paris.
                        </p>
                        <div className="fb-qa text-[10px] text-white/30 font-mono leading-[2]">
                            Platform operated by:<br />
                            IKON Educational and Psychological Consultancy<br />
                            Reg. No. NS0232097X · ikonskills.ac<br />
                            Seremban, Negeri Sembilan, Malaysia<br /><br />
                            Quality Assured by:<br />
                            European International University, Paris<br />
                            UAI 0756213W · 59 Rue Lamarck, 75018 Paris
                        </div>
                    </div>

                    <div className="footer-nav">
                        <h4 className="text-[9.5px] font-bold text-[#e0364a] font-mono uppercase tracking-[1.8px] mb-4.5">Platform</h4>
                        <ul className="space-y-2">
                            {[
                                { name: "Credential Catalog", href: "/catalog" },
                                { name: "Practitioner Dashboard", href: "/dashboard" },
                                { name: "MC Passport", href: "/dashboard?tab=passport" },
                                { name: "Credential Pathways", href: "/pathways" },
                                { name: "Degree Programs", href: "/degrees" }
                            ].map(link => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-[13px] text-white/50 hover:text-white transition-all">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="footer-domains">
                        <h4 className="text-[9.5px] font-bold text-[#e0364a] font-mono uppercase tracking-[1.8px] mb-4.5">Domains</h4>
                        <ul className="space-y-2">
                            {["AI & Automation", "Data & Analytics", "Strategy & Leadership", "Teaching & Education", "Brand Leadership"].map(domain => (
                                <li key={domain}>
                                    <Link href="/catalog" className="text-[13px] text-white/50 hover:text-white transition-all">
                                        {domain}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="footer-about">
                        <h4 className="text-[9.5px] font-bold text-[#e0364a] font-mono uppercase tracking-[1.8px] mb-4.5">About</h4>
                        <ul className="space-y-2">
                            {[
                                { name: "About IKON SKILLS™", href: "/" },
                                { name: "EIU-Paris", href: "https://www.eiu.ac", external: true },
                                { name: "TWBF Partnership", href: "/" },
                                { name: "Accreditation & QA", href: "/" },
                                { name: "Enroll Now", href: "https://wa.me/66968412564", external: true }
                            ].map(link => (
                                <li key={link.name}>
                                    {link.external ? (
                                        <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-[13px] text-white/50 hover:text-white transition-all">
                                            {link.name}
                                        </a>
                                    ) : (
                                        <Link href={link.href} className="text-[13px] text-white/50 hover:text-white transition-all">
                                            {link.name}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom pt-5 pb-7 border-t border-white/7 flex flex-wrap justify-between items-center gap-2">
                    <div className="fc-copy text-[10.5px] text-white/30 font-mono">
                        © 2026 IKON Educational and Psychological Consultancy · ikonskills.ac · All IKON Practitioners
                    </div>
                    <div className="fc-copy text-[10.5px] text-white/30 font-mono">
                        IKON SKILLS™ is a trademark of IKON Educational and Psychological Consultancy
                    </div>
                </div>
            </CommonWrapper>
        </footer>
    );
}
