"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Mail, Loader2, ArrowLeft, ShieldCheck, RefreshCw } from "lucide-react";
import { useVerifyOtpMutation, useResendOtpMutation } from "@/redux/features/auth/authApi";
import { useDispatch } from "react-redux";
import { setCredentials } from "@/store/Slices/AuthSlice/authSlice";

export function VerifyForm() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const dispatch = useDispatch();

    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);

    const [verifyOtp, { isLoading: isVerifying }] = useVerifyOtpMutation();
    const [resendOtp, { isLoading: isResending }] = useResendOtpMutation();

    useEffect(() => {
        const emailParam = searchParams.get("email");
        if (emailParam) {
            setEmail(emailParam);
        }
    }, [searchParams]);

    const handleVerify = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setSuccessMessage(null);

        try {
            const result = await verifyOtp({ email, otp }).unwrap();

            // Check for success in various response formats
            const success = (result as any).status === "success" || (result as any).success;

            if (success) {
                // Set credentials if possible
                const userData = result.data?.user || (result as any).user;
                const token = result.data?.accessToken || (result as any).access;
                const refreshToken = result.data?.refreshToken || (result as any).refresh;

                if (token) {
                    dispatch(setCredentials({
                        user: userData,
                        token: token
                    }));
                }

                setSuccessMessage("Email verified successfully! Redirecting...");
                setTimeout(() => {
                    router.push("/dashboard");
                }, 2000);
            }
        } catch (err: any) {
            setError(err.data?.message || err.data?.detail || "Verification failed. Please check your OTP.");
        }
    };

    const handleResend = async () => {
        if (!email) {
            setError("Please enter your email first.");
            return;
        }
        setError(null);
        setSuccessMessage(null);

        try {
            await resendOtp({ email }).unwrap();
            setSuccessMessage("OTP has been resent to your email.");
        } catch (err: any) {
            setError(err.data?.message || "Failed to resend OTP.");
        }
    };

    return (
        <div className="animate-in fade-in slide-in-from-right-4 duration-1000">
            <div className="mb-10 text-center flex flex-col items-center">
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
                    <h1 className="text-4xl font-black text-white tracking-tight leading-tight">Verify Email</h1>
                    <p className="text-base font-medium text-white/50 px-4">Complete your registration by verifying your email address.</p>
                </div>
            </div>

            <form className="space-y-6" onSubmit={handleVerify}>
                {error && (
                    <div className="bg-red-500/10 border border-red-500/30 text-red-400 px-5 py-4 rounded-[16px] text-[13px] font-bold">
                        {error}
                    </div>
                )}
                {successMessage && !error && (
                    <div className="bg-green-500/10 border border-green-500/30 text-green-400 px-5 py-4 rounded-[16px] text-[13px] font-bold">
                        {successMessage}
                    </div>
                )}

                <div className="space-y-2">
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
                            disabled={!!searchParams.get("email")}
                            className="w-full bg-white/5 border border-white/10 rounded-[20px] py-4.5 px-6 text-[15px] font-bold text-white placeholder:text-white/15 focus:outline-none focus:border-[#cb2d39]/40 focus:bg-white/[0.07] focus:shadow-[0_0_25px_rgba(203,45,57,0.15)] transition-all duration-300 disabled:opacity-50"
                        />
                        <Mail className="absolute right-6 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-white/15 group-focus-within:text-[#cb2d39] transition-all" />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-[11px] font-black uppercase tracking-[2px] text-[#cb2d39]/90 ml-1.5 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#cb2d39]"></span>
                        Verification Code (OTP)
                    </label>
                    <div className="relative group">
                        <input
                            type="text"
                            maxLength={6}
                            placeholder="••••••"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            required
                            className="w-full bg-white/5 border border-white/10 rounded-[20px] py-6 px-6 text-3xl tracking-[15px] text-center font-black text-white placeholder:text-white/10 focus:outline-none focus:border-[#cb2d39]/40 focus:bg-white/[0.07] focus:shadow-[0_0_30px_rgba(203,45,57,0.15)] transition-all duration-300"
                        />
                        <ShieldCheck className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-white/15 group-focus-within:text-[#cb2d39] transition-all" />
                    </div>
                </div>

                <div className="space-y-4">
                    <button
                        type="submit"
                        disabled={isVerifying}
                        className="w-full py-5 bg-[#cb2d39] hover:bg-[#e0364a] disabled:opacity-50 text-white font-black text-[15px] uppercase tracking-[3px] rounded-[24px] shadow-[0_10px_25px_rgba(203,45,57,0.3)] hover:shadow-[0_15px_35px_rgba(203,45,57,0.4)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3"
                    >
                        {isVerifying && <Loader2 className="w-5 h-5 animate-spin" />}
                        {isVerifying ? "CONFIRMING IDENTITY..." : "VERIFY CODE"}
                    </button>

                    <button
                        type="button"
                        onClick={handleResend}
                        disabled={isResending}
                        className="w-full py-5 bg-white/5 hover:bg-white/10 text-white font-black text-[11px] uppercase tracking-[2px] rounded-[24px] border border-white/10 transition-all flex items-center justify-center gap-2"
                    >
                        {isResending ? <RefreshCw className="w-4 h-4 animate-spin" /> : <RefreshCw className="w-4 h-4" />}
                        {isResending ? "RESENDING..." : "RESEND OTP CODE"}
                    </button>
                </div>
            </form>

            <div className="text-center pt-10">
                <Link href="/login" className="text-[13px] font-black text-white/30 hover:text-white transition-all flex items-center justify-center gap-2 group uppercase tracking-widest leading-none">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Login
                </Link>
            </div>
        </div>
    );
}
