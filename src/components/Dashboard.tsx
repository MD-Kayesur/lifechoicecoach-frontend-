"use client";

import CommonWrapper from "@/common/CommonWrapper";
import { User, Award, Book, CreditCard, ChevronRight, Activity, Zap } from "lucide-react";

export const Dashboard = () => {
    const stats = [
        { label: "Earned Credits", val: "20 ECTS", icon: Award, color: "text-primary" },
        { label: "In-Progress MCs", val: "3", icon: Book, color: "text-blue-500" },
        { label: "AI Verification Rank", val: "Top 5%", icon: Activity, color: "text-emerald-500" },
        { label: "Degree Milestone", val: "12%", icon: Zap, color: "text-amber-500" },
    ];

    const currentCourses = [
        { title: "AI Prompt Engineer", progress: 65, duration: "10h 30m" },
        { title: "Data Storytelling Designer", progress: 20, duration: "15h" },
        { title: "Brand Identity Architect", progress: 0, duration: "12h" },
    ];

    return (
        <section className="py-24 bg-[#050a14] min-h-screen text-white">
            <CommonWrapper className="max-w-[1440px] mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
                    <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center text-2xl font-black">PK</div>
                        <div>
                            <h1 className="text-3xl font-bold">Welcome, Practitioner</h1>
                            <p className="text-muted-foreground text-sm flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-emerald-500" /> Account Active • Verified
                            </p>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {stats.map((stat) => (
                        <div key={stat.label} className="p-6 rounded-3xl bg-card border border-white/5 space-y-4">
                            <stat.icon className={`${stat.color} w-6 h-6`} />
                            <div>
                                <div className="text-2xl font-black">{stat.val}</div>
                                <div className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">{stat.label}</div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="grid lg:grid-cols-[1fr_350px] gap-8">
                    {/* Learning Section */}
                    <div className="space-y-8">
                        <h2 className="text-xl font-bold flex items-center justify-between">
                            Active Learning Track
                            <button className="text-xs text-primary font-bold uppercase tracking-widest hover:underline transition-all">View All Track</button>
                        </h2>

                        <div className="space-y-4">
                            {currentCourses.map((course) => (
                                <div key={course.title} className="p-6 rounded-3xl bg-card border border-white/5 hover:border-primary/20 transition-all cursor-pointer group">
                                    <div className="flex justify-between items-center mb-6">
                                        <h3 className="text-lg font-bold group-hover:text-primary transition-colors">{course.title}</h3>
                                        <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-white" />
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-xs font-bold text-muted-foreground uppercase tracking-widest">
                                            <span>Progress</span>
                                            <span>{course.progress}%</span>
                                        </div>
                                        <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                            <div className="h-full bg-primary transition-all duration-1000" style={{ width: `${course.progress}%` }} />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Sidebar / Quick Actions */}
                    <div className="space-y-8">
                        <h2 className="text-xl font-bold">Quick Actions</h2>
                        <div className="grid gap-4">
                            {[
                                { label: "Verify Credential", icon: Award },
                                { label: "Degree Planner", icon: Book },
                                { label: "Renew Subscription", icon: CreditCard },
                            ].map(ax => (
                                <button key={ax.label} className="flex items-center justify-between p-5 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all group">
                                    <div className="flex items-center gap-4">
                                        <ax.icon className="w-5 h-5 text-primary" />
                                        <span className="text-sm font-bold">{ax.label}</span>
                                    </div>
                                    <ChevronRight className="w-4 h-4 text-muted-foreground" />
                                </button>
                            ))}
                        </div>

                        <div className="p-8 rounded-3xl bg-primary/10 border border-primary/20 space-y-4">
                            <h3 className="text-lg font-bold text-primary">Pro Status</h3>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                                You are currently on the Pro trial. 14 days remaining to access 184 full credentials.
                            </p>
                            <button className="w-full h-12 rounded-xl bg-primary text-white text-[10px] font-black uppercase tracking-widest shadow-xl shadow-primary/20">Upgrade Now</button>
                        </div>
                    </div>
                </div>
            </CommonWrapper>
        </section>
    );
};
