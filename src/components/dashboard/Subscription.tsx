"use client";

import { useState, useEffect } from "react";
import { useGetPaymentsQuery, PaymentTransaction } from "@/redux/features/enrollment/paymentApi";
import { Loader2, CreditCard, History, CheckCircle2 } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import Link from "next/link";

export const Subscription = () => {
    const { user } = useSelector((state: RootState) => state.auth);
    const { data: paymentsData, isLoading, isError } = useGetPaymentsQuery();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    if (!mounted || isLoading) {
        return (
            <div className="flex items-center justify-center p-12">
                <Loader2 className="w-8 h-8 text-gold animate-spin" />
            </div>
        );
    }

    // Safely extract payments array from different potential API response shapes
    const payments = Array.isArray(paymentsData)
        ? paymentsData
        : (paymentsData as any)?.results || (paymentsData as any)?.data || [];



    return (
        <div className="animate-in fade-in duration-500">
            <div className="text-[14.5px] font-bold text-white mb-3 tracking-wide flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-gold" />
                Subscription & Billing
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Current Plan Card */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 relative overflow-hidden group hover:border-gold/30 transition-all">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <CheckCircle2 className="w-16 h-16 text-gold" />
                    </div>
                    <div className="text-[14px] font-bold text-white mb-6 tracking-wide">Current Active Plan</div>
                    <div className="flex flex-col">
                        <div className="text-gold text-[10px] font-mono font-bold uppercase tracking-[2px] mb-1">Status: Active</div>
                        <div className="text-white text-[28px] font-bold font-serif mb-2">{user?.role === 'admin' ? 'Lifetime Access' : 'IKON Practitioner'}</div>
                        <p className="text-white/50 text-[13px] mb-6 max-w-[250px]">
                            You have full access to all 184 Micro-Credentials, AI assessments, and digital credentials.
                        </p>
                        <div className="flex gap-3">
                            <Link href="/pricing" className="bg-gold text-white text-[12px] font-bold px-6 py-2.5 rounded-xl hover:bg-gold2 transition-all shadow-lg shadow-gold/10">
                                Change Plan
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Billing Summary */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 relative overflow-hidden group hover:border-white/20 transition-all">
                    <div className="text-[14px] font-bold text-white mb-6 tracking-wide">Billing Summary</div>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center py-2 border-b border-white/5">
                            <span className="text-white/50 text-[12px]">Last Payment</span>
                            <span className="text-white text-[13px] font-bold">
                                {payments && payments.length > 0 ? `${payments[0].amount} ${payments[0].currency}` : "$24.99"}
                            </span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-white/5">
                            <span className="text-white/50 text-[12px]">Payment Method</span>
                            <span className="text-white text-[13px] font-bold flex items-center gap-2">
                                <CreditCard className="w-3.5 h-3.5" />
                                {payments && payments.length > 0 && payments[0].payment_method ? payments[0].payment_method : "**** 4242"}
                            </span>
                        </div>
                        <div className="flex justify-between items-center py-2">
                            <span className="text-white/50 text-[12px]">Next Billing Date</span>
                            <span className="text-white text-[13px] font-bold">May 15, 2026</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Payment History */}
            <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
                <div className="p-6 border-b border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <History className="w-4 h-4 text-white/50" />
                        <span className="text-[14px] font-bold text-white tracking-wide">Payment History</span>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-white/3">
                                <th className="p-4 text-[11px] font-bold uppercase tracking-[1px] text-white/40">Plan / Item</th>
                                <th className="p-4 text-[11px] font-bold uppercase tracking-[1px] text-white/40">Amount</th>
                                <th className="p-4 text-[11px] font-bold uppercase tracking-[1px] text-white/40">Date</th>
                                <th className="p-4 text-[11px] font-bold uppercase tracking-[1px] text-white/40">ID</th>
                                <th className="p-4 text-[11px] font-bold uppercase tracking-[1px] text-white/40 text-right">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {payments && payments.length > 0 ? (
                                payments.map((payment: PaymentTransaction) => (
                                    <tr key={payment.id} className="hover:bg-white/3 transition-colors">
                                        <td className="p-4">
                                            <div className="text-white text-[13px] font-bold">{payment.plan_name || "Monthly Subscription"}</div>
                                        </td>
                                        <td className="p-4">
                                            <div className="text-white/80 text-[13px] font-mono">{payment.amount} {payment.currency}</div>
                                        </td>
                                        <td className="p-4 text-white/50 text-[13px]">{formatDate(payment.created_at)}</td>
                                        <td className="p-4 text-white/30 text-[11px] font-mono uppercase">{payment.transaction_id}</td>
                                        <td className="p-4 text-right">
                                            <span className={`inline-flex px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-[0.5px] ${payment.status === 'success' || payment.status === 'COMPLETED' ? 'bg-green-500/10 text-green-400' : 'bg-yellow-500/10 text-yellow-500'}`}>
                                                {payment.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={5} className="p-12 text-center text-white/30 text-[13px]">
                                        {isError ? "Failed to load payment history." : "No payment history found."}
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};
