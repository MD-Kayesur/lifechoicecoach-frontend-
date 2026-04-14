"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, User, Apple, Globe, LayoutGrid, Mail, Phone, Lock, Loader2, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRequestOtpMutation, useVerifyOtpMutation, useResendOtpMutation } from "@/redux/features/auth/authApi";

import { useDispatch } from "react-redux";
import { setCredentials } from "@/store/Slices/AuthSlice/authSlice";
import Cookies from "js-cookie";
import { SocialLogin } from "./SocialLogin/SocialLogin";

export function SignupForm() {
    const router = useRouter();
    const dispatch = useDispatch();
    const [requestOtp, { isLoading: isRequesting }] = useRequestOtpMutation();
    const [verifyOtp, { isLoading: isVerifying }] = useVerifyOtpMutation();
    const [resendOtp, { isLoading: isResending }] = useResendOtpMutation();

    const [step, setStep] = useState(1); // 1: Signup Details, 2: OTP Verification
    const [showPassword, setShowPassword] = useState(false);

    // Form fields
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
        password: "",
        password2: ""
    });
    const [otp, setOtp] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSignupRequest = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        if (formData.password !== formData.password2) {
            setError("Passwords do not match.");
            return;
        }

        try {
            await requestOtp(formData).unwrap();
            setStep(2);
            setSuccessMessage("OTP has been sent to your email.");
        } catch (err: any) {
            console.error("Signup request error:", err);
            setError(err?.data?.detail || err?.data?.message || "Registration failed. Please try again.");
        }
    };

    const handleVerifyOtp = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        try {
            const result = await verifyOtp({ email: formData.email, otp }).unwrap();

            // Log user in automatically after verification using transformed data
            if (result.data) {
                const { user: userData, accessToken: token, refreshToken } = result.data;

                dispatch(setCredentials({
                    user: userData,
                    token: token || ""
                }));

                if (token) Cookies.set("accessToken", token, { expires: 7 });
                if (refreshToken) Cookies.set("refreshToken", refreshToken, { expires: 30 });

                setSuccessMessage("Account created successfully! Redirecting to dashboard...");
                setTimeout(() => {
                    router.push("/dashboard");
                }, 1500);
            }
        } catch (err: any) {
            console.error("OTP verification error:", err);
            setError(err?.data?.detail || err?.data?.message || "OTP verification failed.");
        }
    };

    const handleResendOtp = async () => {
        setError(null);
        try {
            await resendOtp({ email: formData.email }).unwrap();
            setSuccessMessage("A new OTP has been sent to your email.");
        } catch (err: any) {
            setError(err?.data?.detail || "Failed to resend OTP.");
        }
    };

    if (step === 2) {
        return (
            <div className="animate-in fade-in slide-in-from-right-4 duration-1000">
                <div className="mb-10">
                    <button onClick={() => setStep(1)} className="flex items-center gap-3 text-white/30 hover:text-white mb-8 transition-all group font-black uppercase text-[11px] tracking-[2px]">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1.5 transition-transform" />
                        Back to Identity Check
                    </button>
                    <div className="space-y-3">
                        <h1 className="text-4xl font-black text-white tracking-tight leading-tight">Verify Identity</h1>
                        <p className="text-base font-medium text-white/50">A 6-digit secure code was sent to <br /><span className="text-[#f06070] font-bold">{formData.email}</span></p>
                    </div>
                </div>

                <form className="space-y-8" onSubmit={handleVerifyOtp}>
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

                    <div className="space-y-3">
                        <label className="text-[11px] font-black uppercase tracking-[2px] text-[#cb2d39]/90 ml-1.5 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#cb2d39]"></span>
                            Verification Code
                        </label>
                        <input
                            type="text"
                            maxLength={6}
                            placeholder="••••••"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            required
                            className="w-full bg-white/5 border border-white/10 rounded-[20px] py-6 px-6 text-3xl tracking-[15px] text-center font-black text-white placeholder:text-white/10 focus:outline-none focus:border-[#cb2d39]/40 focus:bg-white/[0.07] focus:shadow-[0_0_30px_rgba(203,45,57,0.15)] transition-all duration-300"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isVerifying}
                        className="w-full py-5 bg-[#cb2d39] hover:bg-[#e0364a] disabled:opacity-50 text-white font-black text-[15px] uppercase tracking-[3px] rounded-[24px] shadow-[0_10px_25px_rgba(203,45,57,0.3)] hover:shadow-[0_15px_35px_rgba(203,45,57,0.4)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3"
                    >
                        {isVerifying && <Loader2 className="w-5 h-5 animate-spin" />}
                        {isVerifying ? "VERIFYING IDENTITY..." : "CONFIRM OTP"}
                    </button>

                    <div className="text-center pt-2">
                        <button
                            type="button"
                            onClick={handleResendOtp}
                            disabled={isResending}
                            className="text-[13px] font-black text-[#f06070] hover:text-white transition-colors disabled:opacity-50 tracking-wide"
                        >
                            {isResending ? "RESENDING CODE..." : "Didn't receive the code? Resend"}
                        </button>
                    </div>
                </form>
            </div>
        );
    }

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
                    <h1 className="text-4xl font-black text-white tracking-tight leading-tight">Create Account</h1>
                    <p className="text-base font-medium text-white/50 px-4">Begin your journey as an IKON Practitioner today.</p>
                </div>
            </div>

            <form className="space-y-5" onSubmit={handleSignupRequest}>
                {error && (
                    <div className="bg-red-500/10 border border-red-500/30 text-red-400 px-5 py-4 rounded-[16px] text-[13px] font-bold">
                        {error}
                    </div>
                )}

                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                        <label className="text-[11px] font-black uppercase tracking-[2px] text-[#cb2d39]/90 ml-1.5">First Name</label>
                        <input
                            type="text"
                            name="first_name"
                            placeholder="John"
                            value={formData.first_name}
                            onChange={handleInputChange}
                            required
                            className="w-full bg-white/5 border border-white/10 rounded-[18px] py-4 px-6 text-[14px] font-bold text-white placeholder:text-white/15 focus:outline-none focus:border-[#cb2d39]/40 focus:bg-white/[0.07] transition-all"
                        />
                    </div>
                    <div className="space-y-1.5">
                        <label className="text-[11px] font-black uppercase tracking-[2px] text-[#cb2d39]/90 ml-1.5">Last Name</label>
                        <input
                            type="text"
                            name="last_name"
                            placeholder="Doe"
                            value={formData.last_name}
                            onChange={handleInputChange}
                            required
                            className="w-full bg-white/5 border border-white/10 rounded-[18px] py-4 px-6 text-[14px] font-bold text-white placeholder:text-white/15 focus:outline-none focus:border-[#cb2d39]/40 focus:bg-white/[0.07] transition-all"
                        />
                    </div>
                </div>

                <div className="space-y-1.5">
                    <label className="text-[11px] font-black uppercase tracking-[2px] text-[#cb2d39]/90 ml-1.5">Email Address</label>
                    <div className="relative group">
                        <input
                            type="email"
                            name="email"
                            placeholder="name@example.com"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full bg-white/5 border border-white/10 rounded-[18px] py-4 px-6 text-[14px] font-bold text-white placeholder:text-white/15 focus:outline-none focus:border-[#cb2d39]/40 focus:bg-white/[0.07] transition-all"
                        />
                        <Mail className="absolute right-6 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-white/15 group-focus-within:text-[#cb2d39] transition-all" />
                    </div>
                </div>

                <div className="space-y-1.5">
                    <label className="text-[11px] font-black uppercase tracking-[2px] text-[#cb2d39]/90 ml-1.5">Phone Number</label>
                    <div className="relative group">
                        <input
                            type="tel"
                            name="phone_number"
                            placeholder="+1 234 567 890"
                            value={formData.phone_number}
                            onChange={handleInputChange}
                            required
                            className="w-full bg-white/5 border border-white/10 rounded-[18px] py-4 px-6 text-[14px] font-bold text-white placeholder:text-white/15 focus:outline-none focus:border-[#cb2d39]/40 focus:bg-white/[0.07] transition-all"
                        />
                        <Phone className="absolute right-6 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-white/15 group-focus-within:text-[#cb2d39] transition-all" />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                        <label className="text-[11px] font-black uppercase tracking-[2px] text-[#cb2d39]/90 ml-1.5">Password</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="••••••••"
                            value={formData.password}
                            onChange={handleInputChange}
                            required
                            minLength={8}
                            className="w-full bg-white/5 border border-white/10 rounded-[18px] py-4 px-6 text-[14px] font-bold text-white placeholder:text-white/15 focus:outline-none focus:border-[#cb2d39]/40 focus:bg-white/[0.07] transition-all"
                        />
                    </div>
                    <div className="space-y-1.5">
                        <label className="text-[11px] font-black uppercase tracking-[2px] text-[#cb2d39]/90 ml-1.5">Confirm</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password2"
                            placeholder="••••••••"
                            value={formData.password2}
                            onChange={handleInputChange}
                            required
                            minLength={8}
                            className="w-full bg-white/5 border border-white/10 rounded-[18px] py-4 px-6 text-[14px] font-bold text-white placeholder:text-white/15 focus:outline-none focus:border-[#cb2d39]/40 focus:bg-white/[0.07] transition-all"
                        />
                    </div>
                </div>

                <div className="flex items-center gap-2.5 px-1.5 py-1">
                    <input
                        type="checkbox"
                        id="show-pass"
                        checked={showPassword}
                        onChange={() => setShowPassword(!showPassword)}
                        className="w-4.5 h-4.5 rounded-[6px] border border-white/20 bg-white/5 checked:bg-[#cb2d39] checked:border-[#cb2d39] appearance-none cursor-pointer transition-all"
                    />
                    <label htmlFor="show-pass" className="text-[13px] font-bold text-white/30 cursor-pointer hover:text-white/50 transition-colors">Show Passwords</label>
                </div>

                <button
                    type="submit"
                    disabled={isRequesting}
                    className="w-full py-5 mt-2 bg-[#cb2d39] hover:bg-[#e0364a] disabled:opacity-50 text-white font-black text-[15px] uppercase tracking-[3px] rounded-[24px] shadow-[0_10px_25px_rgba(203,45,57,0.3)] hover:shadow-[0_15px_35px_rgba(203,45,57,0.4)] transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-3"
                >
                    {isRequesting && <Loader2 className="w-5 h-5 animate-spin" />}
                    {isRequesting ? "PREPARING PROFILE..." : "START REGISTRATION"}
                </button>
            </form>

            <div className="space-y-8 pt-10">
                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-white/5"></div>
                    </div>
                    <div className="relative flex justify-center">
                        <span className="bg-transparent px-5 text-[10px] font-black uppercase tracking-[3px] text-white/20 backdrop-blur-md">Alternative Entry</span>
                    </div>
                </div>

                <div className="flex items-center justify-center">
                    <SocialLogin />
                </div>
            </div>

            <div className="text-center pt-10">
                <p className="text-[15px] font-bold text-white/30">
                    Already an IKON Practitioner?{" "}
                    <Link href="/login" className="text-[#f06070] font-black hover:text-white hover:underline underline-offset-[6px] decoration-[3px] transition-all decoration-[#f06070]/20">
                        Log In
                    </Link>
                </p>
            </div>
        </div>
    );
}


