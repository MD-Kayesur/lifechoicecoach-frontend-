"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

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
        <nav
            className={`fixed top-0 left-0 right-0 z-[200] h-[62px] flex items-center justify-between px-4 md:px-[32px] transition-all duration-300 border-b border-[rgba(196,136,14,0.2)] ${scrolled ? "bg-[rgba(11,31,58,0.97)] backdrop-blur-[16px]" : "bg-[rgba(11,31,58,0.8)] backdrop-blur-[8px]"
                }`}
        >
            {/* Brand */}
            <Link href="/" className="flex items-center gap-[10px] cursor-pointer" onClick={() => setIsMenuOpen(false)}>
                <img
                    src="https://ikonmalta.ac/IKON_LOGO_White_Color.png"
                    alt="IKON"
                    className="h-9 w-auto object-contain block"
                />
                <span className="font-cormorant font-bold text-[18.5px] text-white tracking-[0.5px]">
                    SKILLS<sup className="text-[9px] text-gold3 align-super ml-[2px]">™</sup>
                </span>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden xl:flex items-center gap-[3px]">
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link)}
                        className={`text-[13px] font-medium font-outfit px-[13px] py-[6px] rounded-[6px] transition-all duration-200 ${pathname === link.href
                                ? "text-gold3"
                                : "text-white/65 hover:text-white hover:bg-white/7"
                            }`}
                    >
                        {link.name}
                    </Link>
                ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4">
                <a
                    href="https://wa.me/66968412564"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden sm:block bg-gold text-white text-[13px] font-bold px-[18px] py-[8.5px] rounded-[7px] shadow-[0_4px_0_#8a1e27] hover:bg-[#e0323f] hover:translate-y-[2px] hover:shadow-[0_2px_0_#8a1e27] transition-all font-outfit"
                >
                    Enroll as IKON Practitioner
                </a>

                {/* Mobile Menu Toggle */}
                <button
                    className="xl:hidden flex flex-col justify-center items-center gap-[5px] w-[30px] h-[30px] transition-all"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <span className={`block w-[22px] h-[1.5px] bg-white transition-all ${isMenuOpen ? "rotate-45 translate-y-[6.5px]" : ""}`} />
                    <span className={`block w-[22px] h-[1.5px] bg-white transition-all ${isMenuOpen ? "opacity-0" : ""}`} />
                    <span className={`block w-[22px] h-[1.5px] bg-white transition-all ${isMenuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="xl:hidden fixed top-[62px] left-0 right-0 bg-[rgba(11,31,58,0.98)] backdrop-blur-[24px] border-b border-[rgba(196,136,14,0.15)] py-6 px-5 flex flex-col gap-1 transition-all animate-in slide-in-from-top-2 duration-300">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={(e) => {
                                handleNavClick(e, link);
                                if (!link.isSection) setIsMenuOpen(false);
                            }}
                            className={`text-[14.5px] font-medium font-outfit p-3.5 rounded-lg transition-all ${pathname === link.href
                                    ? "text-gold3 bg-white/5"
                                    : "text-white/70 hover:text-white hover:bg-white/5"
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a
                        href="https://wa.me/66968412564"
                        className="mt-5 bg-gold text-white text-center py-3.5 rounded-lg font-bold shadow-lg text-[14.5px] font-outfit flex items-center justify-center gap-2"
                        target="_blank"
                    >
                        Enroll as IKON Practitioner
                    </a>
                </div>
            )}
        </nav>
    );
}
