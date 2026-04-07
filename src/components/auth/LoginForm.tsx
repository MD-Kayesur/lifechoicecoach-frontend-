"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Fingerprint, Apple, Globe, LayoutGrid, Mail, Loader2 } from "lucide-react";
import Image from "next/image";
import logo from "../../../public/logo/logo.png";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { useDispatch } from "react-redux";
import { setCredentials } from "@/store/Slices/AuthSlice/authSlice";
import Cookies from "js-cookie";

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
        <div className="animate-in fade-in slide-in-from-right-4 duration-700">
            <div className="mb-8">
                <Link href="/" className="inline-block transform hover:scale-105 transition-transform mb-6">
                    <Image src={logo} alt="Logo" width={150} height={150} className="w-56 h-auto" />
                </Link>
                <div className="space-y-2">
                    <h1 className="text-3xl font-black text-white tracking-tight">Welcome Back</h1>
                    <p className="text-base font-medium text-white/50">Enter your credentials to access your account</p>
                </div>
            </div>

            <form className="space-y-6" onSubmit={handleLogin}>
                {error && (
                    <div className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded-[12px] text-sm font-bold">
                        {error}
                    </div>
                )}

                <div className="space-y-1.5">
                    <label className="text-[12px] font-black uppercase tracking-widest text-[#cb2d39] ml-1">Email Address</label>
                    <div className="relative group">
                        <input
                            type="email"
                            placeholder="name@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full bg-white/5 border border-white/10 rounded-[16px] py-4 px-6 text-sm font-bold text-white placeholder:text-white/20 focus:outline-none focus:border-[#cb2d39] transition-all"
                        />
                        <Mail className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 transition-colors group-focus-within:text-[#cb2d39]" />
                    </div>
                </div>

                <div className="space-y-1.5">
                    <div className="flex items-center justify-between px-1">
                        <label className="text-[12px] font-black uppercase tracking-widest text-[#cb2d39]">Password</label>
                        <Link href="/forgot-password" className="text-xs font-black text-white/40 hover:text-[#cb2d39] transition-colors">
                            Forgot?
                        </Link>
                    </div>
                    <div className="relative group">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full bg-white/5 border border-white/10 rounded-[16px] py-4 px-6 text-sm font-bold text-white placeholder:text-white/20 focus:outline-none focus:border-[#cb2d39] transition-all"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-5 top-1/2 -translate-y-1/2 text-white/20 hover:text-white transition-colors"
                        >
                            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                    </div>
                </div>

                <div className="flex items-center gap-2 px-1">
                    <input
                        type="checkbox"
                        id="remember"
                        className="w-4 h-4 accent-[#cb2d39] rounded border-white/20 bg-white/5"
                    />
                    <label htmlFor="remember" className="text-xs font-bold text-white/40 cursor-pointer">Remember me for 30 days</label>
                </div>

                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-6 bg-[#cb2d39] hover:bg-[#a3242e] disabled:opacity-50 text-white font-black text-sm uppercase tracking-[2px] rounded-[24px] shadow-xl shadow-[#cb2d39]/20 transition-all hover:scale-[1.01] active:scale-[0.98] flex items-center justify-center gap-2"
                >
                    {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
                    {isLoading ? "Signing in..." : "LOG IN"}
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
                    Don't have an account?{" "}
                    <Link href="/signup" className="text-[#cb2d39] font-black hover:underline underline-offset-4 decoration-2 decoration-[#cb2d39]/30 transition-all">
                        Create account
                    </Link>
                </p>
            </div>
        </div>
    );
}

function SocialButton({ icon }: { icon: React.ReactNode }) {
    return (
        <button className="w-12 h-12 cursor-pointer rounded-full border border-gray-100 flex items-center justify-center text-[#0D241C] hover:bg-[#fafafa] hover:border-[#F6C557]/30 transition-all shadow-sm">
            {icon}
        </button>
    );
}
