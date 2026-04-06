import { Certificate } from "@/components/landingPages/Certificate";
import { Suspense } from "react";

export default function CertificatePage() {
    return (
        <main className="min-h-screen bg-[#0a1628]">
            <Suspense fallback={<div className="min-h-screen bg-[#0a1628] flex items-center justify-center text-white/50 font-mono text-sm tracking-widest">LOADINGA_CERTIFICATE_VZ_01...</div>}>
                <Certificate />
            </Suspense>
        </main>
    );
}
