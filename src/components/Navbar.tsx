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
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-md border-b" : "bg-transparent"}`}>
            <CommonWrapper>
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <span className="text-2xl font-black tracking-tighter text-white">
                            IKON <span className="text-primary">SKILLS™</span>
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden xl:flex items-center gap-5">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link)}
                                className={`text-[13px] font-bold uppercase tracking-wider transition-colors ${pathname === link.href ? "text-primary" : "text-muted-foreground hover:text-white"}`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Actions */}
                    <div className="hidden xl:flex items-center gap-4">
                        <Button variant="ghost" className="text-white hover:bg-white/10 text-xs font-bold uppercase">
                            Login
                        </Button>
                        <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-6 text-xs font-bold uppercase tracking-wider">
                            Enroll as IKON Practitioner
                        </Button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button className="xl:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="xl:hidden bg-background/95 backdrop-blur-xl border-b py-6 animate-in slide-in-from-top-4 duration-300">
                        <div className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => {
                                        handleNavClick(e, link);
                                        if (!link.isSection) setIsMenuOpen(false);
                                    }}
                                    className="text-lg font-medium text-muted-foreground hover:text-white px-4"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="pt-4 flex flex-col gap-3 px-4">
                                <Button variant="outline" className="w-full">Login</Button>
                                <Button className="w-full bg-primary text-white">Enroll as IKON Practitioner</Button>
                            </div>
                        </div>
                    </div>
                )}
            </CommonWrapper>
        </nav>
    );
}
