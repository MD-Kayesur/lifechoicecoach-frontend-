"use client";

import { useState, useEffect } from "react";
import { useChangePasswordMutation } from "@/redux/features/auth/authApi";
import { Loader2, KeyRound, CheckCircle2, AlertCircle, X } from "lucide-react";
import { toast } from "sonner";
import { createPortal } from "react-dom";

interface ChangePasswordModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const ChangePasswordModal = ({ isOpen, onClose }: ChangePasswordModalProps) => {
    const [mounted, setMounted] = useState(false);
    const [formData, setFormData] = useState({
        new_password: "",
        confirm_password: "",
    });
    const [changePassword, { isLoading }] = useChangePasswordMutation();

    useEffect(() => {
        setMounted(true);
    }, []);

    // Reset form and disable scroll when modal opens
    useEffect(() => {
        if (isOpen) {
            setFormData({ new_password: "", confirm_password: "" });
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }

        // Cleanup on unmount
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (formData.new_password !== formData.confirm_password) {
            toast.error("Passwords do not match");
            return;
        }

        if (formData.new_password.length < 4) {
            toast.error("Password must be at least 4 characters long");
            return;
        }

        try {
            const response = await changePassword(formData).unwrap();
            toast.success(response.message || "Password changed successfully!");
            onClose();
        } catch (error: any) {
            const errorMessage = error.data?.message || error.data?.detail || "Failed to change password";
            toast.error(errorMessage);
            console.error("Change password error:", error);
        }
    };

    if (!isOpen || !mounted) return null;

    const modalContent = (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className="relative w-full max-w-md bg-[#0D1F3A] border border-white/10 rounded-2xl shadow-2xl animate-in zoom-in-95 duration-300 overflow-hidden">
                <div className="absolute top-4 right-4">
                    <button
                        onClick={onClose}
                        className="p-1.5 rounded-lg bg-white/5 text-white/50 hover:bg-white/10 hover:text-white transition-colors"
                    >
                        <X size={18} />
                    </button>
                </div>

                <div className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold">
                            <KeyRound size={20} />
                        </div>
                        <div>
                            <h2 className="text-[18px] font-bold text-white tracking-wide">Change Password</h2>
                            <p className="text-white/40 text-[12px]">Update your account credentials.</p>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="space-y-4">
                            <div className="space-y-1.5">
                                <label className="text-white/50 text-[10px] font-mono font-bold uppercase tracking-[1px] ml-1">
                                    New Password
                                </label>
                                <input
                                    type="password"
                                    required
                                    autoFocus
                                    value={formData.new_password}
                                    onChange={(e) => setFormData({ ...formData, new_password: e.target.value })}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-[14px] focus:outline-none focus:border-gold/50 focus:bg-white/[0.08] transition-all"
                                    placeholder="Enter your new password"
                                />
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-white/50 text-[10px] font-mono font-bold uppercase tracking-[1px] ml-1">
                                    Confirm New Password
                                </label>
                                <input
                                    type="password"
                                    required
                                    value={formData.confirm_password}
                                    onChange={(e) => setFormData({ ...formData, confirm_password: e.target.value })}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-[14px] focus:outline-none focus:border-gold/50 focus:bg-white/[0.08] transition-all"
                                    placeholder="Confirm your new password"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-3 pt-2">
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full bg-gold text-white text-[13px] font-bold px-8 py-3.5 rounded-xl shadow-lg shadow-gold/10 border border-gold/20 hover:bg-gold2 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {isLoading ? (
                                    <>
                                        <Loader2 className="w-4 h-4 animate-spin" />
                                        Updating...
                                    </>
                                ) : (
                                    "Update Password"
                                )}
                            </button>
                            <button
                                type="button"
                                onClick={onClose}
                                className="w-full bg-white/5 text-white text-[13px] font-bold px-8 py-3.5 rounded-xl border border-white/10 hover:bg-white/10 transition-all text-center"
                            >
                                Cancel
                            </button>
                        </div>
                    </form>

                    <div className="mt-6 p-3 bg-white/[0.03] rounded-xl border border-white/5">
                        <ul className="space-y-1.5">
                            <li className="flex items-center gap-2 text-white/30 text-[10px]">
                                <CheckCircle2 size={10} className="text-gold/30" />
                                Minimum 4 characters long
                            </li>
                            <li className="flex items-center gap-2 text-white/30 text-[10px]">
                                <CheckCircle2 size={10} className="text-gold/30" />
                                Must match confirm password
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );

    return createPortal(modalContent, document.body);
};
