import { VerifiedCertificateView } from "@/components/landingPages/VerifiedCertificateView";
import { Suspense } from "react";
import { Loader2 } from "lucide-react";

export default async function VerifiedCertificatePage({ params }: { params: { id: string } }) {
    const { id } = await params;
    
    return (
        <main className="min-h-screen bg-[#0a1628]">
            <Suspense fallback={
                <div className="min-h-screen bg-[#0a1628] flex items-center justify-center">
                    <Loader2 className="w-10 h-10 animate-spin text-gold" />
                </div>
            }>
                <VerifiedCertificateView id={id} />
            </Suspense>
        </main>
    );
}
