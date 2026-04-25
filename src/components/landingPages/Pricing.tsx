"use client";

import { useState, useEffect } from "react";
import { Loader2 } from "lucide-react";
import { PricingHero } from "./pricing/PricingHero";
import { PriceBanner } from "./pricing/PriceBanner";
import { ConsumerPricing } from "./pricing/ConsumerPricing";
import { InstitutionalPricing } from "./pricing/InstitutionalPricing";
import { PlanComparison } from "./pricing/PlanComparison";
import { FinalCTA } from "./pricing/FinalCTA";

export const Pricing = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className="min-h-screen bg-[#040b16] flex items-center justify-center">
                <Loader2 className="w-10 h-10 text-[#C43030] animate-spin" />
            </div>
        );
    }

    return (
        <div className="pt-[62px] min-h-screen bg-[#040b16] text-white font-sans overflow-x-hidden">
            <PricingHero />
            <PriceBanner />
            <ConsumerPricing />
            <InstitutionalPricing />
            <PlanComparison />
            <FinalCTA />

            {/* Accreditation Footer */}
            {/* <div className="py-20 border-t border-white/5 text-center bg-[#02070e]">
                <p className="text-[11px] text-white/30 max-w-[800px] mx-auto leading-relaxed px-6">
                    IKON SKILLS™ Micro-Credentials are quality assured by European International University, Paris (EIU-Paris). 
                    All accreditations and rankings listed on this platform are held by EIU-Paris and underpin the academic 
                    standing of every credential issued.
                </p>
            </div> */}
        </div>
    );
};
