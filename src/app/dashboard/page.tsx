"use client";

import { Navbar } from "@/components/Navbar";
import { Dashboard } from "@/components/Dashboard";
import { Footer } from "@/components/Footer";

export default function DashboardPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />
            <div className="pt-20">
                <Dashboard />
            </div>
            <Footer />
        </main>
    );
}
