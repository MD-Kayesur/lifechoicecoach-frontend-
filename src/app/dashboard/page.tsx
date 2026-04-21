import { Dashboard } from "@/components/landingPages/Dashboard";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

export default function DashboardPage() {
    return (
        <ProtectedRoute>
            <main className="min-h-screen bg-[#0a1628]">
                <Dashboard />
            </main>
        </ProtectedRoute>
    );
}
