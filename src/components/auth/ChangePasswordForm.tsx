"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Lock, Loader2, ArrowLeft, ShieldCheck, Eye, EyeOff } from "lucide-react";
import { useChangePasswordMutation } from "@/redux/features/auth/authApi";

export function ChangePasswordForm() {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        new_password: "",
        confirm_password: "",
    });
    const [error, setError] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);

    const [changePassword, { isLoading }] = useChangePasswordMutation();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setSuccessMessage(null);

        if (formData.new_password !== formData.confirm_password) {
            setError("Passwords do not match.");
            return;
        }

        try {
            const result = await changePassword(formData).unwrap();
            setSuccessMessage(result.message || "Password changed successfully!");

            // Redirect to login or dashboard after delay
            setTimeout(() => {
                router.push("/dashboard");
            }, 2000);
        } catch (err: any) {
            setError(err.data?.message || err.data?.detail || "Failed to change password. Please ensure you are logged in.");
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
                    <h1 className="text-4xl font-black text-white tracking-tight leading-tight">Change Password</h1>
                    <p className="text-base font-medium text-white/50 px-4">Update your IKON Practitioner account credentials.</p>
                </div>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
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
                        New Password
                    </label>
                    <div className="relative group">
                        <input
                            type={showPassword ? "text" : "password"}
                            name="new_password"
                            placeholder="••••••••"
                            value={formData.new_password}
                            onChange={handleInputChange}
                            required
                            minLength={8}
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
                </div>

                <div className="space-y-2">
                    <label className="text-[11px] font-black uppercase tracking-[2px] text-[#cb2d39]/90 ml-1.5 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#cb2d39]"></span>
                        Confirm New Password
                    </label>
                    <div className="relative group">
                        <input
                            type={showPassword ? "text" : "password"}
                            name="confirm_password"
                            placeholder="••••••••"
                            value={formData.confirm_password}
                            onChange={handleInputChange}
                            required
                            minLength={8}
                            className="w-full bg-white/5 border border-white/10 rounded-[20px] py-4.5 px-6 text-[15px] font-bold text-white placeholder:text-white/15 focus:outline-none focus:border-[#cb2d39]/40 focus:bg-white/[0.07] focus:shadow-[0_0_25px_rgba(203,45,57,0.15)] transition-all duration-300"
                        />
                        <ShieldCheck className="absolute right-6 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-white/15 group-focus-within:text-[#cb2d39] transition-all" />
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-5 bg-[#cb2d39] hover:bg-[#e0364a] disabled:opacity-50 text-white font-black text-[15px] uppercase tracking-[3px] rounded-[24px] shadow-[0_10px_25px_rgba(203,45,57,0.3)] hover:shadow-[0_15px_35px_rgba(203,45,57,0.4)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3"
                >
                    {isLoading && <Loader2 className="w-5 h-5 animate-spin" />}
                    {isLoading ? "UPDATING PASSWORD..." : "SAVE PASSWORD"}
                </button>
            </form>

            <div className="text-center pt-10">
                <Link href="/dashboard" className="text-[13px] font-black text-white/30 hover:text-white transition-all flex items-center justify-center gap-2 group uppercase tracking-widest leading-none">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Return to Dashboard
                </Link>
            </div>
        </div>
    );
}
