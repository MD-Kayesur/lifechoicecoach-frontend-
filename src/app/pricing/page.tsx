"use client";

import { Navbar } from "@/components/Navbar";
import { Pricing } from "@/components/Countries";
import { Footer } from "@/components/Footer";

export default function PricingPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />
            <div className="pt-20">
                <Pricing />
            </div>
            <Footer />
        </main>
    );
}
