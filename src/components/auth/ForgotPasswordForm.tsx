"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, Loader2, ArrowLeft, KeyRound, ShieldCheck } from "lucide-react";

export function ForgotPasswordForm() {
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        try {
            // Mock API call - I will implement the actual mutation once provided by user
            await new Promise((resolve) => setTimeout(resolve, 1500));
            setIsSubmitted(true);
        } catch (err: any) {
            setError(err.message || "Failed to send reset instructions.");
        } finally {
            setIsLoading(false);
        }
    };

    if (isSubmitted) {
        return (
            <div className="animate-in fade-in zoom-in-95 duration-700 text-center">
                <div className="w-24 h-24 bg-[#cb2d39]/10 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_40px_rgba(203,45,57,0.15)] border border-[#cb2d39]/20">
                    <ShieldCheck className="w-12 h-12 text-[#cb2d39]" />
                </div>
                <h1 className="text-3xl font-black text-white tracking-tight mb-4 leading-tight">Check your inbox</h1>
                <p className="text-base font-medium text-white/50 mb-10 px-4 leading-relaxed">
                    We've sent recovery instructions to <br />
                    <span className="text-[#f06070] font-bold">{email}</span>. <br />
                    Please follow the secure link to reset your password.
                </p>

                <Link
                    href="/login"
                    className="w-full py-5 bg-[#cb2d39] hover:bg-[#e0364a] text-white font-black text-[15px] uppercase tracking-[3px] rounded-[24px] shadow-[0_10px_25px_rgba(203,45,57,0.3)] transition-all block text-center"
                >
                    Return to Log In
                </Link>

                <div className="mt-8">
                    <p className="text-sm font-bold text-white/20">
                        Didn't receive the email?{" "}
                        <button
                            onClick={() => setIsSubmitted(false)}
                            className="text-[#f06070] hover:text-white transition-colors"
                        >
                            Try again
                        </button>
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="animate-in fade-in slide-in-from-right-4 duration-1000">
            <div className="mb-10">
                <Link href="/login" className="flex items-center gap-3 text-white/30 hover:text-white mb-8 transition-all group font-black uppercase text-[11px] tracking-[2px]">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1.5 transition-transform" />
                    Back to Secure Login
                </Link>
                <div className="text-center flex flex-col items-center">
                    <Link href="/" className="flex items-center gap-[10px] transform hover:scale-105 transition-all duration-300 mb-6 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                        <img
                            src="https://ikonmalta.ac/IKON_LOGO_White_Color.png"
                            alt="IKON"
                            className="h-14 w-auto object-contain block"
                        />
                        <span className="font-cormorant font-bold text-[28px] text-white tracking-[1px] flex items-start">
                            SKILLS<sup className="text-[12px] text-[#f06070] ml-[2px] mt-1">™</sup>
                        </span>
                    </Link>
                    <div className="space-y-3">
                        <h1 className="text-4xl font-black text-white tracking-tight leading-tight">Reset Password</h1>
                        <p className="text-base font-medium text-white/50 px-4">Enter your email and we'll send you recovery instructions.</p>
                    </div>
                </div>
            </div>

            <form className="space-y-8" onSubmit={handleSubmit}>
                {error && (
                    <div className="bg-red-500/10 border border-red-500/30 text-red-400 px-5 py-4 rounded-[16px] text-[13px] font-bold">
                        {error}
                    </div>
                )}

                <div className="space-y-3">
                    <label className="text-[11px] font-black uppercase tracking-[2px] text-[#cb2d39]/90 ml-1.5 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#cb2d39]"></span>
                        Email Address
                    </label>
                    <div className="relative group">
                        <input
                            type="email"
                            placeholder="practitioner@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full bg-white/5 border border-white/10 rounded-[20px] py-4.5 px-6 text-[15px] font-bold text-white placeholder:text-white/15 focus:outline-none focus:border-[#cb2d39]/40 focus:bg-white/[0.07] focus:shadow-[0_0_25px_rgba(203,45,57,0.15)] transition-all duration-300"
                        />
                        <Mail className="absolute right-6 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-white/15 group-focus-within:text-[#cb2d39] transition-all" />
                    </div>
                </div>

                <div className="space-y-4">
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full py-5 bg-[#cb2d39] hover:bg-[#e0364a] disabled:opacity-50 text-white font-black text-[15px] uppercase tracking-[3px] rounded-[24px] shadow-[0_10px_25px_rgba(203,45,57,0.3)] hover:shadow-[0_15px_35px_rgba(203,45,57,0.4)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3"
                    >
                        {isLoading && <Loader2 className="w-5 h-5 animate-spin" />}
                        {isLoading ? "INITIATING RECOVERY..." : "SEND RESET LINK"}
                    </button>

                    <div className="p-4 bg-white/[0.03] border border-white/5 rounded-[18px] flex gap-4 items-start">
                        <div className="mt-1">
                            <KeyRound className="w-5 h-5 text-[#f06070]/60" />
                        </div>
                        <p className="text-[12px] font-medium text-white/30 leading-relaxed uppercase tracking-tight">
                            For security, we will never share your password. You will receive a secure token to verify your identity.
                        </p>
                    </div>
                </div>
            </form>
        </div>
    );
}
