"use client";

import { Navbar } from "@/components/Navbar";
import { Degrees } from "@/components/Degrees";
import { Footer } from "@/components/Footer";

export default function DegreesPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />
            <div className="pt-20">
                <Degrees />
            </div>
            <Footer />
        </main>
    );
}
