"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/store/Slices/AuthSlice/authSlice";
import { useLogoutMutation } from "@/redux/features/auth/authApi";
import { RootState } from "@/store/store";
import { LogOut, Loader2 } from "lucide-react";

import { Overview } from "@/components/dashboard/Overview";
import { MyLearning } from "@/components/dashboard/MyLearning";
import { MCPassport } from "@/components/dashboard/MCPassport";
import { MyCredentials } from "@/components/dashboard/MyCredentials";
import { Progress } from "@/components/dashboard/Progress";
import { DegreePathways } from "@/components/dashboard/DegreePathways";
import { Settings } from "@/components/dashboard/Settings";

export const Dashboard = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const { user } = useSelector((state: RootState) => state.auth);
    const [logoutApi, { isLoading: isLoggingOut }] = useLogoutMutation();
    const [selectedTab, setSelectedTab] = useState("Overview");

    const navLinks = [
        { icon: '🏠', label: 'Overview' },
        { icon: '📖', label: 'My Learning' },
        { icon: '🎫', label: 'MC Passport' },
        { icon: '🏅', label: 'My Credentials' },
        { icon: '📈', label: 'Progress' },
        { icon: '🎓', label: 'Degree Pathways' },
        { icon: '⚙️', label: 'Settings' }
    ];

    const handleLogout = async () => {
        try {
            await logoutApi().unwrap();
        } catch (error) {
            console.error("Logout API failed:", error);
        } finally {
            dispatch(logout());
            router.push("/login");
        }
    };

    const renderContent = () => {
        switch (selectedTab) {
            case "Overview": return <Overview />;
            case "My Learning": return <MyLearning />;
            case "MC Passport": return <MCPassport />;
            case "My Credentials": return <MyCredentials />;
            case "Progress": return <Progress />;
            case "Degree Pathways": return <DegreePathways />;
            case "Settings": return <Settings />;
            default: return <Overview />;
        }
    };

    const userInitials = user?.name ? user.name.split(' ').map((n: string) => n[0]).join('') : (user?.first_name ? user.first_name[0] + (user?.last_name?.[0] || '') : "IK");
    const fullName = user?.name || (user?.first_name ? `${user.first_name} ${user.last_name || ''}` : "Guest User");

    return (
        <div id="page-dashboard" className="page active pt-[62px] min-h-screen bg-[#0a1628]">
            <div className="dash-wrap max-w-[1200px] mx-auto px-8 md:px-12 py-8 grid grid-cols-1 lg:grid-cols-[225px_1fr] gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                {/* Sidebar */}
                <aside className="dash-sb bg-white/5 border border-white/10 rounded-[15px] p-5 h-fit lg:sticky top-[70px] flex flex-col">
                    <div className="dash-av w-[54px] h-[54px] rounded-full bg-gradient-to-br from-[#0B1F3A] to-[#cb2d39] flex items-center justify-center font-serif text-[20px] font-bold text-white mb-3 shadow-lg">
                        {userInitials}
                    </div>
                    <div className="dash-name text-[15px] font-bold text-white mb-0.5">{fullName}</div>
                    <div className="dash-role text-[11.5px] text-white/50 mb-3">{user?.role || "IKON Student"}</div>
                    <div className="p-badge inline-flex items-center gap-1.5 bg-gold/15 border border-gold/30 px-2.5 py-1 rounded-md mb-4 w-fit">
                        <span className="p-badge-t text-[10px] font-bold text-[#f06070] font-mono leading-none">IKON Practitioner</span>
                    </div>

                    <nav className="space-y-1 mb-6">
                        {navLinks.map((item, i) => (
                            <div
                                key={i}
                                onClick={() => setSelectedTab(item.label)}
                                className={`dni flex items-center gap-2.5 p-2.5 rounded-lg cursor-pointer transition-all text-[13px] font-medium ${selectedTab === item.label ? 'bg-gold/20 text-white font-bold' : 'text-white/70 hover:bg-white/5 hover:text-white'}`}
                            >
                                <span className="dni-ic text-[14px] w-5 text-center">{item.icon}</span>
                                {item.label}
                            </div>
                        ))}
                    </nav>

                    <button
                        onClick={handleLogout}
                        disabled={isLoggingOut}
                        className="mt-4 flex items-center gap-2.5 p-2.5 rounded-lg w-full text-[13px] font-bold text-red-400 hover:bg-red-500/10 transition-all border border-red-500/20"
                    >
                        {isLoggingOut ? <Loader2 className="w-4 h-4 animate-spin" /> : <LogOut className="w-4 h-4" />}
                        Logout
                    </button>
                </aside>

                {/* Main Content */}
                <main className="min-h-[600px]">
                    {renderContent()}
                </main>
            </div>
        </div>
    );
};
