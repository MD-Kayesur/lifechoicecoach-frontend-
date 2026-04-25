import Link from "next/link";

export const FinalCTA = () => {
    return (
        <section className="py-32 px-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#1a2a44_0%,transparent_70%)] opacity-30"></div>
            <div className="max-w-[800px] mx-auto text-center relative z-10">
                <h2 className="text-5xl md:text-6xl font-serif font-medium text-white mb-8">
                    Ready to earn your<br />Proof of Skill?
                </h2>
                <p className="text-white/50 text-base md:text-lg leading-relaxed max-w-[650px] mx-auto mb-12">
                    Join IKON Practitioners worldwide building verified, stackable qualifications — one Micro-Credential at a time. Quality Assured by European International University, Paris.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link 
                        href="/catalog"
                        className="w-full sm:w-auto bg-[#C43030] hover:bg-[#A32828] text-white font-bold px-10 py-5 rounded-2xl shadow-[0_4px_0_#8B1E1E] transition-all"
                    >
                        Enroll as IKON Practitioner
                    </Link>
                    <Link 
                        href="/catalog"
                        className="w-full sm:w-auto bg-transparent border border-white/20 hover:border-white/40 text-white font-bold px-10 py-5 rounded-2xl transition-all"
                    >
                        Browse Credential Catalog
                    </Link>
                </div>
            </div>
        </section>
    );
};
