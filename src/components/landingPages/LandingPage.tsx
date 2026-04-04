"use client";

import { Hero } from "@/components/landingPages/Hero";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/landingPages/HowItWorks";
import { MicroCredential } from "@/components/landingPages/MicroCredential";
import { IkonPassport } from "@/components/landingPages/IkonPassport";

export default function LandingPage() {
    return (
        <main className="min-h-screen bg-background">
            <Hero />
            <MicroCredential />
            <IkonPassport />
            {/* <Features /> */}
            <HowItWorks />
        </main>
    );
}
