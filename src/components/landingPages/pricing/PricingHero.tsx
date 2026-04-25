import { Medal, Cpu, GraduationCap } from "lucide-react";
import Link from "next/link";

export const PricingHero = () => {
    return (
        <section className="relative pt-12 pb-32 px-6 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#1a2a44_0%,transparent_60%)] opacity-50"></div>
            
            <div className="max-w-[1200px] mx-auto relative z-10">
                <div className="mb-8">
                    <span className="text-[#C43030] text-[10px] font-bold tracking-[3px] uppercase block mb-4">What You Earn</span>
                    <h1 className="text-4xl md:text-6xl font-serif font-medium text-white mb-2 leading-tight max-w-[800px]">
                        Every credential opens three doors.
                    </h1>
                    <p className="text-white/60 text-base md:text-lg max-w-[650px] leading-relaxed">
                        Each Micro-Credential you earn stacks directly toward full degrees at EIU-Paris and instantly populates your IKON SKILLS™ Passport.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 mb-16">
                    {/* Card 1 */}
                    <div className="bg-[#0f1a2a]/60 backdrop-blur-md border border-white/5 rounded-2xl p-8 hover:border-white/20 transition-all duration-300">
                        <div className="w-10 h-10 bg-[#C43030]/10 rounded-lg flex items-center justify-center mb-6">
                            <Medal size={24} className="text-[#C43030]" />
                        </div>
                        <span className="text-[#C43030] text-[9px] font-black tracking-[2px] uppercase block mb-2">Credential</span>
                        <h3 className="text-xl font-serif font-bold text-white mb-4">Digital Badge + Certificate</h3>
                        <p className="text-white/50 text-[14px] leading-relaxed">
                            A flat-top hexagon digital badge and a formal Certificate of Completion — both issued immediately upon MC completion, both quality assured by EIU-Paris.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-[#0f1a2a]/60 backdrop-blur-md border border-white/5 rounded-2xl p-8 hover:border-white/20 transition-all duration-300">
                        <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center mb-6">
                            <Cpu size={24} className="text-white/40" />
                        </div>
                        <span className="text-[#C43030] text-[9px] font-black tracking-[2px] uppercase block mb-2">Portfolio</span>
                        <h3 className="text-xl font-serif font-bold text-white mb-4">IKON SKILLS™ Passport</h3>
                        <p className="text-white/50 text-[14px] leading-relaxed">
                            Every credential earned appears in your personal digital Passport — a shareable, verifiable portfolio of exactly what you can do, visible to employers and institutions worldwide.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-[#0f1a2a]/60 backdrop-blur-md border border-white/5 rounded-2xl p-8 hover:border-white/20 transition-all duration-300">
                        <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center mb-6">
                            <GraduationCap size={24} className="text-white/40" />
                        </div>
                        <span className="text-[#C43030] text-[9px] font-black tracking-[2px] uppercase block mb-2">Degree Pathway</span>
                        <h3 className="text-xl font-serif font-bold text-white mb-4">Stack Toward EIU-Paris Degrees</h3>
                        <p className="text-white/50 text-[14px] leading-relaxed">
                            Each MC carries 10 ECTS. Stack Micro-Credentials to earn full institutional degrees from European International University, Paris — including Bachelor, Master, and Doctoral qualifications.
                        </p>
                        <p className="mt-4 text-[10px] text-white/30 leading-tight">
                            Degrees are awarded by EIU-Paris · UAI 0756213W · Quality Assured by EIU-Paris as an institution. EIU-Paris holds ACBSP accreditation for its BBA, MBA, and DBA programs specifically.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link 
                        href="/catalog"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#C43030] hover:bg-[#A32828] text-white font-bold px-8 py-4 rounded-xl shadow-[0_4px_0_#8B1E1E] hover:translate-y-[1px] hover:shadow-[0_3px_0_#8B1E1E] active:shadow-none active:translate-y-[4px] transition-all"
                    >
                        Buy a Micro-Credential · $14.99
                    </Link>
                    <Link 
                        href="/catalog"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#D33F49]/10 border border-[#D33F49]/30 hover:bg-[#D33F49]/20 text-white font-bold px-8 py-4 rounded-xl transition-all"
                    >
                        Browse All 184 Credentials
                    </Link>
                </div>
            </div>
        </section>
    );
};
