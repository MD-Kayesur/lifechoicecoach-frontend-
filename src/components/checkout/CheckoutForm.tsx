"use client";

import { useState, useMemo } from "react";
import { 
    CardNumberElement, 
    CardExpiryElement, 
    CardCvcElement, 
    useStripe, 
    useElements 
} from "@stripe/react-stripe-js";
import { useBuyCredentialMutation } from "@/redux/features/enrollment/EnrollmentManagementapi";
import { useGetLessonCompetenciesQuery } from "@/redux/features/lesson/lessonCompetenciesApi";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { ShieldCheck, Loader2, CreditCard, ArrowLeft } from "lucide-react";

interface CheckoutFormProps {
    id: string;
}

const inputStyle = {
    style: {
        base: {
            fontSize: "16px",
            color: "#ffffff",
            fontFamily: "Inter, sans-serif",
            "::placeholder": {
                color: "rgba(255, 255, 255, 0.3)",
            },
        },
        invalid: {
            color: "#ef4444",
        },
    },
};

export const CheckoutForm = ({ id }: CheckoutFormProps) => {
    const stripe = useStripe();
    const elements = useElements();
    const router = useRouter();
    const [isProcessing, setIsProcessing] = useState(false);

    const [buyCredential] = useBuyCredentialMutation();
    const pricing = { price: "14.99", currency: "USD" };

    const { data: apiResponse, isLoading: isCredentialLoading } = useGetLessonCompetenciesQuery(
        id ? { micro_credential_id: Number(id) } : undefined
    );

    const mcName = useMemo(() => {
        if (!apiResponse?.data?.domains || apiResponse.data.domains.length === 0) return "Loading...";
        return apiResponse.data.domains[0].micro_credentials?.[0]?.micro_credential || "Micro-Credential";
    }, [apiResponse]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!stripe || !elements) return;

        setIsProcessing(true);

        const cardNumberElement = elements.getElement(CardNumberElement);

        if (!cardNumberElement) {
            setIsProcessing(false);
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: cardNumberElement,
        });

        if (error) {
            toast.error(error.message || "Payment method creation failed");
            setIsProcessing(false);
            return;
        }

        try {
            const result = await buyCredential({
                micro_credential_id: Number(id),
                payment_method_id: paymentMethod.id,
            }).unwrap();

            if (result.success || !result.error) {
                toast.success(result.message || "Enrollment successful!");
                router.push("/dashboard?tab=My Learning");
            } else {
                toast.error(result.message || "Enrollment failed");
            }
        } catch (err: any) {
            toast.error(err.data?.message || "An error occurred during enrollment");
        } finally {
            setIsProcessing(false);
        }
    };

    if (isCredentialLoading) {
        return (
            <div className="flex flex-col items-center justify-center p-12">
                <Loader2 className="w-10 h-10 animate-spin text-gold mb-4" />
                <p className="text-white/60 font-mono text-xs uppercase tracking-widest">Loading details...</p>
            </div>
        );
    }

    return (
        <div className="max-w-[1000px] mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12">
            {/* Left Side: Order Summary */}
            <div className="animate-in fade-in slide-in-from-left-4 duration-700">
                <button 
                    onClick={() => router.back()}
                    className="flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-8 text-sm group"
                >
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    Back to Details
                </button>

                <h1 className="text-3xl font-serif font-bold text-white mb-8">Checkout</h1>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-8">
                    <div className="flex items-start gap-4 mb-6">
                        <div className="w-16 h-16 bg-gold/10 rounded-xl flex items-center justify-center text-3xl">🏅</div>
                        <div>
                            <div className="text-xs font-mono text-gold uppercase tracking-widest mb-1">Micro-Credential</div>
                            <h2 className="text-xl font-bold text-white">{mcName}</h2>
                        </div>
                    </div>

                    <div className="space-y-4 pt-6 border-t border-white/10">
                        <div className="flex justify-between text-sm">
                            <span className="text-white/50">Enrollment Fee</span>
                            <span className="text-white font-bold">{pricing?.currency || "USD"} {pricing?.price || "14.99"}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-white/50">VAT / Tax</span>
                            <span className="text-white font-bold">Included</span>
                        </div>
                        <div className="flex justify-between text-lg pt-4 border-t border-white/10">
                            <span className="text-white font-serif font-bold">Total Due</span>
                            <span className="text-gold font-bold">{pricing?.currency || "USD"} {pricing?.price || "14.99"}</span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                        { title: "Secure Payment", desc: "Your payment data is encrypted and secure.", icon: <ShieldCheck className="text-gold" /> },
                        { title: "Instant Access", desc: "Get access to your credentials immediately.", icon: <CreditCard className="text-gold" /> }
                    ].map((item, i) => (
                        <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-5 flex gap-4">
                            <div className="mt-1">{item.icon}</div>
                            <div>
                                <h3 className="text-white font-bold text-sm mb-1">{item.title}</h3>
                                <p className="text-xs text-white/50 leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Side: Payment Form */}
            <div className="animate-in fade-in slide-in-from-right-4 duration-700">
                <form onSubmit={handleSubmit} className="bg-gradient-to-br from-[#0f2240] to-[#0a1a30] rounded-2xl p-8 border border-gold/30 shadow-2xl sticky top-[100px]">
                    <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                        <CreditCard size={20} className="text-gold" />
                        Card Details
                    </h3>

                    {/* Test Card Info Helper */}
                    <div className="bg-gold/10 border border-gold/20 rounded-xl p-4 mb-6">
                        <div className="text-[10px] font-bold text-gold uppercase tracking-wider mb-2 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
                            Test Mode Active
                        </div>
                        <div className="space-y-1">
                            <div className="flex justify-between text-[11px]">
                                <span className="text-white/40">Card Number:</span>
                                <span className="text-white font-mono font-bold">4242 4242 4242 4242</span>
                            </div>
                            <div className="flex justify-between text-[11px]">
                                <span className="text-white/40">Expiry / CVC:</span>
                                <span className="text-white font-mono font-bold">12/26 · 123</span>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4 mb-8">
                        <div>
                            <label className="block text-[10px] font-mono text-white/45 uppercase tracking-widest mb-2">Card Number</label>
                            <div className="bg-white/5 border border-white/15 rounded-xl p-4 focus-within:border-gold/50 transition-all shadow-inner">
                                <CardNumberElement options={inputStyle} />
                            </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-[10px] font-mono text-white/45 uppercase tracking-widest mb-2">Expiry Date</label>
                                <div className="bg-white/5 border border-white/15 rounded-xl p-4 focus-within:border-gold/50 transition-all shadow-inner">
                                    <CardExpiryElement options={inputStyle} />
                                </div>
                            </div>
                            <div>
                                <label className="block text-[10px] font-mono text-white/45 uppercase tracking-widest mb-2">CVC</label>
                                <div className="bg-white/5 border border-white/15 rounded-xl p-4 focus-within:border-gold/50 transition-all shadow-inner">
                                    <CardCvcElement options={inputStyle} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={!stripe || isProcessing}
                        className="w-full bg-gold text-white font-bold py-4 rounded-xl shadow-[0_4px_0_#9a7e3a] hover:bg-gold2 hover:translate-y-[1px] hover:shadow-[0_3px_0_#9a7e3a] active:shadow-none active:translate-y-[4px] disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-3"
                    >
                        {isProcessing ? (
                            <>
                                <Loader2 size={18} className="animate-spin" />
                                Processing Payment...
                            </>
                        ) : (
                            <>
                                Pay {pricing?.currency || "USD"} {pricing?.price || "14.99"}
                            </>
                        )}
                    </button>

                    <div className="mt-6 space-y-3">
                        <p className="text-[10px] text-white/30 text-center leading-relaxed">
                            Secure payment processing by <span className="text-white/60 font-bold">Stripe</span>. 
                            No card data is stored on our servers.
                        </p>
                        <div className="flex items-center justify-center gap-4 grayscale opacity-30">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" alt="Stripe" className="h-4" />
                            <div className="h-3 w-[1px] bg-white/20"></div>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/5/d1/Visa_logo_2014.svg" alt="Visa" className="h-3" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-4" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

