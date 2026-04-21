"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Apple, Globe, LayoutGrid, Mail, Loader2 } from "lucide-react";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { useDispatch } from "react-redux";
import { setCredentials } from "@/store/Slices/AuthSlice/authSlice";
import Cookies from "js-cookie";
import { SocialLogin } from "./SocialLogin/SocialLogin";

export function LoginForm() {
    const router = useRouter();
    const dispatch = useDispatch();
    const [login, { isLoading }] = useLoginMutation();

    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        try {
            const result = await login({ email, password }).unwrap();

            if (result.data || result.access) {
                const userData = result.data?.user || (result as any).user;
                const token = result.data?.accessToken || result.access;
                const refreshToken = result.data?.refreshToken || result.refresh;

                // Save to Redux
                dispatch(setCredentials({
                    user: userData,
                    token: token || ""
                }));

                // Save to Cookies
                if (token) Cookies.set("accessToken", token, { expires: 7 });
                if (refreshToken) Cookies.set("refreshToken", refreshToken, { expires: 30 });

                router.push("/dashboard");
            } else {
                setError("Login failed. Please check your credentials.");
            }
        } catch (err: any) {
            console.error("Login error:", err);
            setError(err?.data?.detail || err?.data?.message || "An error occurred during login. Please try again.");
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
                    <h1 className="text-4xl font-black text-white tracking-tight leading-tight">Welcome Back</h1>
                    <p className="text-base font-medium text-white/50 px-4">Access your IKON Skill Passport and learning resources.</p>
                </div>
            </div>

            <form className="space-y-6" onSubmit={handleLogin}>
                {error && (
                    <div className="bg-red-500/10 border border-red-500/30 text-red-400 px-5 py-4 rounded-[16px] text-[13px] font-bold animate-in zoom-in-95 duration-300">
                        {error}
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
                            placeholder="name@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full bg-white/5 border border-white/10 rounded-[20px] py-4.5 px-6 text-[15px] font-bold text-white placeholder:text-white/15 focus:outline-none focus:border-[#cb2d39]/40 focus:bg-white/[0.07] focus:shadow-[0_0_25px_rgba(203,45,57,0.15)] transition-all duration-300"
                        />
                        <Mail className="absolute right-6 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-white/15 group-focus-within:text-[#cb2d39] transition-all duration-300" />
                    </div>
                </div>

                <div className="space-y-2">
                    <div className="flex items-center justify-between px-1.5">
                        <label className="text-[11px] font-black uppercase tracking-[2px] text-[#cb2d39]/90 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#cb2d39]"></span>
                            Password
                        </label>
                    </div>

                    <div className="relative group">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full bg-white/5 border border-white/10 rounded-[20px] py-4.5 px-6 text-[15px] font-bold text-white placeholder:text-white/15 focus:outline-none focus:border-[#cb2d39]/40 focus:bg-white/[0.07] focus:shadow-[0_0_25px_rgba(203,45,57,0.15)] transition-all duration-300"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-6 top-1/2 -translate-y-1/2 text-white/15 hover:text-white transition-all duration-300"
                        >
                            {showPassword ? <EyeOff className="w-4.5 h-4.5" /> : <Eye className="w-4.5 h-4.5" />}
                        </button>
                    </div>
                    <Link href="/forgot-password" className="text-xs font-black text-white/30 hover:text-[#cb2d39] transition-colors tracking-wide">
                        Forgot Password?
                    </Link>
                </div>

                <div className="flex items-center gap-2.5 px-1.5 py-1">
                    <div className="relative flex items-center">
                        <input
                            type="checkbox"
                            id="remember"
                            className="peer w-4.5 h-4.5 rounded-[6px] border border-white/20 bg-white/5 checked:bg-[#cb2d39] checked:border-[#cb2d39] appearance-none cursor-pointer transition-all"
                        />
                        <div className="absolute opacity-0 peer-checked:opacity-100 pointer-events-none text-white left-1">
                            <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path></svg>
                        </div>
                    </div>
                    <label htmlFor="remember" className="text-[13px] font-bold text-white/30 cursor-pointer hover:text-white/50 transition-colors">Remember for 30 days</label>
                </div>

                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-5 bg-[#cb2d39] hover:bg-[#e0364a] disabled:opacity-50 text-white font-black text-[15px] uppercase tracking-[3px] rounded-[24px] shadow-[0_10px_25px_rgba(203,45,57,0.3)] hover:shadow-[0_15px_35px_rgba(203,45,57,0.4)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3"
                >
                    {isLoading && <Loader2 className="w-5 h-5 animate-spin" />}
                    {isLoading ? "AUTHENTICATING..." : "LOG IN"}
                </button>
            </form>

            <div className="space-y-8 pt-10">
                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-white/5"></div>
                    </div>
                    <div className="relative flex justify-center">
                        <span className="bg-transparent px-5 text-[10px] font-black uppercase tracking-[3px] text-white/20 backdrop-blur-md">Secure Login Options</span>
                    </div>
                </div>

                <div className="flex items-center justify-center">
                    <SocialLogin />
                </div>
            </div>

            <div className="text-center pt-10">
                <p className="text-[15px] font-bold text-white/30">
                    Not an IKON Practitioner?{" "}
                    <Link href="/signup" className="text-[#f06070] font-black hover:text-white hover:underline underline-offset-[6px] decoration-[3px] transition-all decoration-[#f06070]/20">
                        Create account
                    </Link>
                </p>
            </div>
        </div>
    );
}


