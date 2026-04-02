"use client";

import { Navbar } from "@/components/Navbar";
import { Certificate } from "@/components/Certificate";
import { Footer } from "@/components/Footer";

export default function CertificatePage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />
            <div className="pt-20">
                <Certificate />
            </div>
            <Footer />
        </main>
    );
}
