"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import CommonWrapper from "@/common/CommonWrapper";

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    const navLinks = [
        { name: "Home", href: "/", isSection: true, sectionId: "home" },
        { name: "Credential Catalog", href: "/catalog", isSection: false },
        { name: "Sample MC", href: "/sample-mc", isSection: false },
        { name: "Sample Certificate", href: "/certificate", isSection: false },
        { name: "Dashboard", href: "/dashboard", isSection: false },
        { name: "Degree Programs", href: "/degrees", isSection: false },
        { name: "Credential Pathways", href: "/pathways", isSection: false },
        { name: "Pricing", href: "/pricing", isSection: false },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, link: typeof navLinks[0]) => {
        if (link.isSection && pathname === "/") {
            e.preventDefault();
            const el = document.getElementById(link.sectionId!);
            if (el) {
                el.scrollIntoView({ behavior: "smooth" });
                setIsMenuOpen(false);
            }
        }
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-[200] h-[62px] transition-all duration-300 flex items-center border-b border-white/10 ${scrolled ? "bg-navy/95 backdrop-blur-md" : "bg-navy/80 backdrop-blur-sm"}`}>
            <CommonWrapper>
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2.5 cursor-pointer">
                        <img
                            src="https://ikonmalta.ac/IKON_LOGO_White_Color.png"
                            alt="IKON"
                            className="h-9 w-auto object-contain"
                        />
                        <span className="font-serif font-bold text-[18px] text-white tracking-[0.5px]">
                            SKILLS<sup className="text-[9px] text-[#f06070] align-super">™</sup>
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden xl:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link)}
                                className={`text-[13px] font-medium px-3 py-1.5 rounded-lg transition-all ${pathname === link.href ? "text-gold3" : "text-white/65 hover:text-white hover:bg-white/10"}`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Actions */}
                    <div className="hidden lg:flex items-center gap-4">
                        <a
                            href="https://wa.me/66968412564"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#cb2d39] text-white text-[13px] font-bold px-[18px] py-[8px] rounded-[7px] shadow-[0_4px_0_#8a1e27] hover:bg-[#e0323f] hover:translate-y-[2px] hover:shadow-[0_2px_0_#8a1e27] active:translate-y-[4px] active:shadow-none transition-all"
                        >
                            Enroll as IKON Practitioner
                        </a>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button className="xl:hidden text-white p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="xl:hidden fixed top-[62px] left-0 right-0 bg-navy/98 backdrop-blur-2xl border-b border-gold/20 py-6 px-4 flex flex-col gap-2 animate-in slide-in-from-top-4 duration-300">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={(e) => {
                                    handleNavClick(e, link);
                                    if (!link.isSection) setIsMenuOpen(false);
                                }}
                                className={`text-[14px] font-medium p-3 rounded-lg transition-all ${pathname === link.href ? "text-gold3 bg-gold/10" : "text-white/70 hover:text-white hover:bg-white/5"}`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <a
                            href="https://wa.me/66968412564"
                            className="mt-4 bg-gold text-white text-center py-3 rounded-lg font-bold shadow-lg"
                        >
                            Enroll as IKON Practitioner
                        </a>
                    </div>
                )}
            </CommonWrapper>
        </nav>
    );
}
