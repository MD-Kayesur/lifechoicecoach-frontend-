"use client";

import { Navbar } from "@/components/Navbar";
import { Pathways } from "@/components/Pathways";
import { Footer } from "@/components/Footer";

export default function PathwaysPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />
            <div className="pt-20">
                <Pathways />
            </div>
            <Footer />
        </main>
    );
}
