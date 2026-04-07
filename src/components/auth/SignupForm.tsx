"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, User, Apple, Globe, LayoutGrid, Mail, Phone, Lock, Loader2, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import logo from "../../../public/logo/logo.png";
import { useRequestOtpMutation, useVerifyOtpMutation, useResendOtpMutation } from "@/redux/features/auth/authApi";

import { useDispatch } from "react-redux";
import { setCredentials } from "@/store/Slices/AuthSlice/authSlice";
import Cookies from "js-cookie";

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

            // Log user in automatically after verification
            const userData = result.data?.user || (result as any).user;
            const token = result.data?.accessToken || (result as any).access;
            const refreshToken = result.data?.refreshToken || (result as any).refresh;

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
            <div className="animate-in fade-in slide-in-from-right-4 duration-700">
                <div className="mb-8">
                    <button onClick={() => setStep(1)} className="flex items-center gap-2 text-white/40 hover:text-white mb-6 transition-colors group">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        <span className="text-sm font-bold">Back to Signup</span>
                    </button>
                    <div className="space-y-2">
                        <h1 className="text-3xl font-black text-white tracking-tight">Verify Email</h1>
                        <p className="text-base font-medium text-white/50">Enter the 6-digit code sent to <span className="text-gold3">{formData.email}</span></p>
                    </div>
                </div>

                <form className="space-y-6" onSubmit={handleVerifyOtp}>
                    {error && (
                        <div className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded-[12px] text-sm font-bold">
                            {error}
                        </div>
                    )}
                    {successMessage && !error && (
                        <div className="bg-green-500/10 border border-green-500/20 text-green-400 px-4 py-3 rounded-[12px] text-sm font-bold">
                            {successMessage}
                        </div>
                    )}

                    <div className="space-y-2">
                        <label className="text-[12px] font-black uppercase tracking-widest text-gold3 ml-1">Verification Code</label>
                        <input
                            type="text"
                            maxLength={6}
                            placeholder="••••••"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            required
                            className="w-full bg-white/5 border border-white/10 rounded-[16px] py-4 px-6 text-2xl tracking-[12px] text-center font-black text-white placeholder:text-white/10 focus:outline-none focus:border-gold transition-all"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isVerifying}
                        className="w-full py-6 bg-gold hover:bg-gold2 disabled:opacity-50 text-white font-black text-sm uppercase tracking-[2px] rounded-[24px] shadow-xl shadow-gold/20 transition-all flex items-center justify-center gap-2"
                    >
                        {isVerifying && <Loader2 className="w-4 h-4 animate-spin" />}
                        {isVerifying ? "VERIFYING..." : "VERIFY OTP"}
                    </button>

                    <div className="text-center">
                        <button
                            type="button"
                            onClick={handleResendOtp}
                            disabled={isResending}
                            className="text-sm font-black text-gold3 hover:text-white transition-colors disabled:opacity-50"
                        >
                            {isResending ? "Resending..." : "Didn't receive code? Resend"}
                        </button>
                    </div>
                </form>
            </div>
        );
    }

    return (
        <div className="animate-in fade-in slide-in-from-right-4 duration-700">
            <div className="mb-8">
                <Link href="/" className="inline-block transform hover:scale-105 transition-transform mb-6">
                    <Image src={logo} alt="Logo" width={150} height={150} className="w-56 h-auto" />
                </Link>
                <div className="space-y-2">
                    <h1 className="text-3xl font-black text-white tracking-tight">Create Account</h1>
                    <p className="text-base font-medium text-white/50">Start your journey with IKON today</p>
                </div>
            </div>

            <form className="space-y-4" onSubmit={handleSignupRequest}>
                {error && (
                    <div className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded-[12px] text-sm font-bold">
                        {error}
                    </div>
                )}

                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                        <label className="text-[12px] font-black uppercase tracking-widest text-gold3 ml-1">First Name</label>
                        <input
                            type="text"
                            name="first_name"
                            placeholder="John"
                            value={formData.first_name}
                            onChange={handleInputChange}
                            required
                            className="w-full bg-white/5 border border-white/10 rounded-[16px] py-4 px-6 text-sm font-bold text-white placeholder:text-white/20 focus:outline-none focus:border-gold transition-all"
                        />
                    </div>
                    <div className="space-y-1.5">
                        <label className="text-[12px] font-black uppercase tracking-widest text-gold3 ml-1">Last Name</label>
                        <input
                            type="text"
                            name="last_name"
                            placeholder="Doe"
                            value={formData.last_name}
                            onChange={handleInputChange}
                            required
                            className="w-full bg-white/5 border border-white/10 rounded-[16px] py-4 px-6 text-sm font-bold text-white placeholder:text-white/20 focus:outline-none focus:border-gold transition-all"
                        />
                    </div>
                </div>

                <div className="space-y-1.5">
                    <label className="text-[12px] font-black uppercase tracking-widest text-gold3 ml-1">Email Address</label>
                    <div className="relative group">
                        <input
                            type="email"
                            name="email"
                            placeholder="name@example.com"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full bg-white/5 border border-white/10 rounded-[16px] py-4 px-6 text-sm font-bold text-white placeholder:text-white/20 focus:outline-none focus:border-gold transition-all"
                        />
                        <Mail className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 group-focus-within:text-gold transition-colors" />
                    </div>
                </div>

                <div className="space-y-1.5">
                    <label className="text-[12px] font-black uppercase tracking-widest text-gold3 ml-1">Phone Number</label>
                    <div className="relative group">
                        <input
                            type="tel"
                            name="phone_number"
                            placeholder="+1 234 567 890"
                            value={formData.phone_number}
                            onChange={handleInputChange}
                            required
                            className="w-full bg-white/5 border border-white/10 rounded-[16px] py-4 px-6 text-sm font-bold text-white placeholder:text-white/20 focus:outline-none focus:border-gold transition-all"
                        />
                        <Phone className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 group-focus-within:text-gold transition-colors" />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                        <label className="text-[12px] font-black uppercase tracking-widest text-gold3 ml-1">Password</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="••••••••"
                            value={formData.password}
                            onChange={handleInputChange}
                            required
                            minLength={8}
                            className="w-full bg-white/5 border border-white/10 rounded-[16px] py-4 px-6 text-sm font-bold text-white placeholder:text-white/20 focus:outline-none focus:border-gold transition-all"
                        />
                    </div>
                    <div className="space-y-1.5">
                        <label className="text-[12px] font-black uppercase tracking-widest text-gold3 ml-1">Confirm</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password2"
                            placeholder="••••••••"
                            value={formData.password2}
                            onChange={handleInputChange}
                            required
                            minLength={8}
                            className="w-full bg-white/5 border border-white/10 rounded-[16px] py-4 px-6 text-sm font-bold text-white placeholder:text-white/20 focus:outline-none focus:border-gold transition-all"
                        />
                    </div>
                </div>

                <div className="flex items-center gap-2 px-1">
                    <input
                        type="checkbox"
                        id="show-pass"
                        checked={showPassword}
                        onChange={() => setShowPassword(!showPassword)}
                        className="w-4 h-4 accent-gold"
                    />
                    <label htmlFor="show-pass" className="text-xs font-bold text-white/40 cursor-pointer">Show Passwords</label>
                </div>

                <button
                    type="submit"
                    disabled={isRequesting}
                    className="w-full py-6 mt-4 bg-gold hover:bg-gold2 disabled:opacity-50 text-white font-black text-sm uppercase tracking-[2px] rounded-[24px] shadow-xl shadow-gold/20 transition-all hover:scale-[1.01] active:scale-[0.98] flex items-center justify-center gap-2"
                >
                    {isRequesting && <Loader2 className="w-4 h-4 animate-spin" />}
                    {isRequesting ? "REQUESTING OTP..." : "SIGN UP"}
                </button>
            </form>

            <div className="space-y-6 pt-8">
                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-white/10"></div>
                    </div>
                    <div className="relative flex justify-center">
                        <span className="bg-transparent px-4 text-[10px] font-black uppercase tracking-[2px] text-white/30 backdrop-blur-md">or continue with</span>
                    </div>
                </div>

                <div className="flex items-center justify-center gap-4">
                    <SocialButton icon={<Apple className="w-5 h-5 fill-current" />} />
                    <SocialButton icon={<Globe className="w-5 h-5" />} />
                    <SocialButton icon={<Mail className="w-5 h-5" />} />
                    <SocialButton icon={<LayoutGrid className="w-5 h-5" />} />
                </div>
            </div>

            <div className="text-center pt-8">
                <p className="text-sm font-bold text-white/40">
                    Already have an account?{" "}
                    <Link href="/login" className="text-gold3 font-black hover:underline underline-offset-4 decoration-2 decoration-gold3/30 transition-all">
                        Log In
                    </Link>
                </p>
            </div>
        </div>
    );
}

function SocialButton({ icon }: { icon: React.ReactNode }) {
    return (
        <button className="w-12 h-12 cursor-pointer rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:bg-white/10 hover:border-white/20 transition-all shadow-sm">
            {icon}
        </button>
    );
}
