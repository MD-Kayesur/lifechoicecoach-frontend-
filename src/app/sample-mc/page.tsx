"use client";

import { Navbar } from "@/components/Navbar";
import { SampleMC } from "@/components/SampleMC";
import { Footer } from "@/components/Footer";

export default function SampleMCPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />
            <div className="pt-20">
                <SampleMC />
            </div>
            <Footer />
        </main>
    );
}
