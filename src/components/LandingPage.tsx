"use client";

import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";

export default function LandingPage() {
    return (
        <main className="min-h-screen bg-background">
            <Hero />
            <Features />
            <HowItWorks />
        </main>
    );
}
