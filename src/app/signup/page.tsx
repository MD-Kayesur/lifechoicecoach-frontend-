import { SignupForm } from "@/components/auth/SignupForm";

export default function SignupPage() {
    return (
        <main className="min-h-screen pt-[62px] flex items-center justify-center bg-[#0a1628] relative overflow-hidden">
            {/* Background elements */}
            <div className="page-bg-overlay overflow-hidden" />
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_100%,rgba(203,45,57,0.1),transparent_50%)] pointer-events-none" />
            <div className="hero-grid absolute inset-0 opacity-10 pointer-events-none" />

            <div className="relative z-10 w-full max-w-[550px] px-6 py-12">
                <div className="bg-white/5 backdrop-blur-[24px] rounded-[32px] p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/10 transition-all hover:border-[rgba(203,45,57,0.3)]">
                    <SignupForm />
                </div>
            </div>
        </main>
    );
}
