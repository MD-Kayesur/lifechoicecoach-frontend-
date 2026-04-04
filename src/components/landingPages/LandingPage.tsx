"use client";

import { Hero } from "@/components/landingPages/Hero";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/landingPages/HowItWorks";
import { MicroCredential } from "@/components/landingPages/MicroCredential";

export default function LandingPage() {
    return (
        <main className="min-h-screen bg-background">
            <Hero />
            <MicroCredential />
            {/* <Features /> */}
            <HowItWorks />
        </main>
    );
}
