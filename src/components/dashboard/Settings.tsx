"use client";

import { useState } from "react";
import { ChangePasswordModal } from "@/components/dashboard/ChangePassword";

export const Settings = () => {
    const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);

    return (
        <div className="animate-in fade-in duration-500">
            <div className="text-[14.5px] font-bold text-white mb-3 tracking-wide">Account & Portal Settings</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 relative overflow-hidden group hover:border-gold/30">
                    <div className="text-[14px] font-bold text-white mb-6 tracking-wide">User Profile & Identity</div>
                    <div className="space-y-4">
                        {[
                            { l: 'Full Name', v: 'Edward Krishnan' },
                            { l: 'Official Identity', v: 'Founder & CEO, IKON' },
                            { l: 'Registered Email', v: 'edward@ikonskills.ac' },
                            { l: 'Passport Active Since', v: '2024' },
                        ].map((item, i) => (
                            <div key={i} className="flex justify-between items-center py-3 border-b border-white/5 last:border-0 hover:bg-white/3 px-3 transition-colors rounded-lg group/item">
                                <div className="text-white/40 text-[10px] font-mono font-bold uppercase tracking-[1px]">{item.l}</div>
                                <div className="text-white/80 text-[13px] font-bold group-item:text-gold transition-colors">{item.v}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 relative overflow-hidden group hover:border-gold/30">
                    <div className="text-[14px] font-bold text-white mb-6 tracking-wide">Subscription & Portal Access</div>
                    <div className="flex flex-col items-center justify-center py-6 text-center">
                        <div className="text-[32px] mb-3">🏅</div>
                        <div className="text-gold text-[11px] font-mono font-bold uppercase tracking-[2px] mb-1">Current Tier</div>
                        <div className="text-white text-[24px] font-bold font-serif mb-2">IKON Practitioner</div>
                        <div className="text-white/50 text-[12px] mb-6 max-w-[200px]">Unlimited access to all 184 Micro-Credentials.</div>
                        <button className="bg-white/10 text-white text-[12px] font-bold px-6 py-2 rounded-xl border border-white/10">Manage Subscription</button>
                    </div>
                </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 relative overflow-hidden group hover:border-white/20">
                <div className="text-[14px] font-bold text-white mb-6 tracking-wide">General Portal Settings & Security</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                    {[
                        { title: 'Email Notifications', desc: 'Receive updates on newly added MCs and progress.' },
                        { title: 'Public Profile Visibility', desc: 'Allow employers to view your MC Passport and earned credentials.' },
                        { title: 'AI Assistant Preferences', desc: 'Customize the AI tutor for your learning pathways.' },
                        { title: 'Two-Factor Authentication', desc: 'Secure your academic record and MC Passport.' }
                    ].map((set, idx) => (
                        <div key={idx} className="flex justify-between items-start group/set cursor-pointer">
                            <div>
                                <div className="text-white text-[15px] font-bold group-hover/set:text-gold transition-colors mb-1">{set.title}</div>
                                <div className="text-white/40 text-[12px] leading-relaxed">{set.desc}</div>
                            </div>
                            <div className="w-10 h-5 bg-white/10 rounded-full relative group-hover/set:bg-gold/20 transition-all">
                                <div className={`w-4 h-4 rounded-full bg-white/40 absolute top-0.5 transition-all ${idx % 2 === 0 ? 'left-0.5' : 'right-0.5 bg-gold'}`}></div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-10 pt-8 border-t border-white/5">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div>
                            <div className="text-white text-[15px] font-bold mb-1">Security Credentials</div>
                            <div className="text-white/40 text-[12px]">Manage your login password and active sessions.</div>
                        </div>
                        <button
                            onClick={() => setIsPasswordModalOpen(true)}
                            className="bg-white/5 text-white text-[12px] font-bold px-6 py-3 rounded-xl border border-white/10 hover:bg-white/10 transition-all flex items-center gap-2 w-fit"
                        >
                            <span>🔑</span> Change Password
                        </button>
                    </div>
                </div>

                <div className="mt-12 flex gap-4 border-t border-white/5 pt-8">
                    <button className="bg-gold text-white text-[13px] font-bold px-8 py-3 rounded-xl shadow-lg border border-gold/20 hover:bg-gold2 transition-all">Save Changes</button>
                    <button className="bg-white/5 text-white/50 text-[13px] font-bold px-8 py-3 rounded-xl border border-white/10 hover:text-white transition-colors">Discard Draft</button>
                </div>
            </div>

            <ChangePasswordModal
                isOpen={isPasswordModalOpen}
                onClose={() => setIsPasswordModalOpen(false)}
            />
        </div>
    );
};
