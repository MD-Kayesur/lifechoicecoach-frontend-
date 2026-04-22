"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { CheckoutForm } from "@/components/checkout/CheckoutForm";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import { Loader2 } from "lucide-react";

// Initialize Stripe with the publishable key from environment variables
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "");

const CheckoutContent = () => {
    const searchParams = useSearchParams();
    const id = searchParams.get("id");

    if (!id) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[600px] text-white">
                <p className="text-xl font-bold mb-4">Invalid Access</p>
                <p className="text-white/50">Micro-credential ID is missing.</p>
            </div>
        );
    }

    return (
        <Elements stripe={stripePromise}>
            <CheckoutForm id={id} />
        </Elements>
    );
};

export default function CheckoutPage() {
    return (
        <ProtectedRoute>
            <main className="min-h-screen bg-[#0a1628] pt-[62px]">
                <Suspense fallback={
                    <div className="flex items-center justify-center min-h-[600px]">
                        <Loader2 className="w-12 h-12 animate-spin text-gold" />
                    </div>
                }>
                    <CheckoutContent />
                </Suspense>
            </main>
        </ProtectedRoute>
    );
}
