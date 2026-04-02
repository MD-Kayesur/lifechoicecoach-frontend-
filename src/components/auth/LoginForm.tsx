"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Fingerprint, Apple, Globe, LayoutGrid, Mail } from "lucide-react";
import Image from "next/image";
import logo from "../../../public/logo/logo.png";

export function LoginForm() {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically handle authentication
        // For now, we'll just redirect to the dashboard as requested
        router.push("/user/dashboard");
    };

    return (
        <div className=" animate-in fade-in slide-in-from-right-4 duration-700">
            <div className="space-y-4 mb-6">
                <Link href="/" className="inline-block transform hover:scale-105 transition-transform">
                    <Image src={logo} alt="Logo" width={150} height={50} className="w-60 h-auto" />
                </Link>
                <div className="space-y-2 pt-4">
                    <h1 className="text-3xl font-black text-[#0D241C] tracking-tight">Welcome Back</h1>
                    <p className="text-sm font-bold text-gray-500">Enter your details to access your account.</p>
                </div>
            </div>

            <form className="space-y-6" onSubmit={handleLogin}>
                {/* Email Field */}
                <div className="space-y-2">
                    <label className="text-[14px] font-black uppercase tracking-widest text-[#0D241C] ml-1">Email Address</label>
                    <div className="relative group">
                        <input
                            type="email"
                            placeholder="name@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-[#fafafa] border border-gray-100 rounded-[16px] py-4 px-6 text-sm font-bold placeholder:text-gray-300 focus:outline-none focus:border-[#F6C557] focus:ring-4 focus:ring-[#F6C557]/5 transition-all"
                        />
                        <Mail className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300 group-focus-within:text-[#F6C557] transition-colors" />
                    </div>
                </div>

                {/* Password Field */}
                <div className="space-y-2">
                    <div className="flex justify-between items-center px-1">
                        <label className="text-[14px] font-black uppercase tracking-widest text-[#0D241C]">Password</label>
                    </div>
                    <div className="relative group">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full bg-[#fafafa] border border-gray-100 rounded-[16px] py-4 px-6 text-sm font-bold placeholder:text-gray-300 focus:outline-none focus:border-[#F6C557] focus:ring-4 focus:ring-[#F6C557]/5 transition-all"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-300 hover:text-[#0D241C] transition-colors focus:outline-none"
                        >
                            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                    </div>
                    <div className="text-right pt-1">
                        <Link href="/forgot-password" className="text-[14px] font-black text-[#F6C557] hover:underline underline-offset-4 decoration-2">
                            Forgot password?
                        </Link>
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full py-6 bg-[#F6C557] hover:bg-[#eab33d] text-[#11674e] font-black text-sm uppercase tracking-[2px] rounded-[24px] shadow-xl shadow-[#F6C557]/20 transition-all hover:scale-[1.01] active:scale-[0.98]"
                >
                    LOG IN
                </button>

                <div className="flex items-center justify-center gap-2 py-2">
                    <button className="flex items-center gap-2 text-[#F6C557] hover:opacity-80 transition-opacity">
                        <Fingerprint className="w-6 h-6" />
                        <span className="text-[11px] font-black uppercase tracking-[1px]">Use Face ID</span>
                    </button>
                </div>
            </form>

            <div className="space-y-6 pt-4">
                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-100"></div>
                    </div>
                    <div className="relative flex justify-center">
                        <span className="bg-white px-6 text-[14px] font-black uppercase tracking-[2px] text-gray-300">or continue with</span>
                    </div>
                </div>

                <div className="flex items-center justify-center gap-4">
                    <SocialButton icon={<Apple className="w-5 h-5 fill-current" />} />
                    <SocialButton icon={<Globe className="w-5 h-5" />} />
                    <SocialButton icon={<Mail className="w-5 h-5" />} />
                    <SocialButton icon={<LayoutGrid className="w-5 h-5" />} />
                </div>
            </div>

            <div className="text-center space-y-4 pt-4">
                <p className="text-base font-bold text-gray-400">
                    Don't have an account?{" "}
                    <Link href="/signup" className="text-[#11674E] font-black hover:underline underline-offset-4 decoration-2 decoration-[#11674E]">
                        Create account
                    </Link>
                </p>
                <p className="text-[14px] font-bold text-gray-400 leading-relaxed px-10">
                    By continuing you accept our <Link href="/terms" className="text-gray-500 hover:text-[#11674E] hover:underline transition-all">terms</Link> and <Link href="/privacy" className="text-gray-500 hover:text-[#11674E] hover:underline transition-all">privacy</Link> policies.
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
