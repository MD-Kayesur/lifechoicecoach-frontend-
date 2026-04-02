"use client";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { Pricing } from "@/components/Countries"; // I replaced content in Countries.tsx with Pricing
import { Footer } from "@/components/Footer";

// --- Main Landing Page Component ---

export default function LandingPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />
            <Hero />
            <Features />
            <HowItWorks />
            <Footer />
        </main>
    );
}
