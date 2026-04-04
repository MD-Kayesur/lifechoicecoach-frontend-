"use client";

import { Hero } from "@/components/landingPages/Hero";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/landingPages/HowItWorks";

export default function LandingPage() {
    return (
        <main className="min-h-screen bg-background">
            <Hero />
            {/* <Features /> */}
            <HowItWorks />
        </main>
    );
}
