"use client";

import { Suspense } from "react";
import { CredentialDetail } from "@/components/landingPages/CredentialDetail";

export default function SampleMCPage() {
    return (
        <main className="min-h-screen bg-[#0a1628]">
            <Suspense fallback={<div className="min-h-screen bg-[#0a1628] flex items-center justify-center text-white">Loading...</div>}>
                <CredentialDetail />
            </Suspense>
        </main>
    );
}
