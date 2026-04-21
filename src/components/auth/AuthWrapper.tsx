"use client";

import React from "react";
import Image from "next/image";
import frameImg from "@/assets/images/Frame.png";

interface AuthWrapperProps {
    children: React.ReactNode;
}

export function AuthWrapper({ children }: AuthWrapperProps) {
    return (
        <div className="flex flex-col lg:flex-row h-screen bg-white overflow-hidden">
            {/* Left Section - Image & Layout */}
            <div className="hidden lg:flex w-[45%] bg-[#0D241C] relative overflow-hidden items-center justify-center shrink-0">
                <Image
                    src={frameImg}
                    alt="Authentication layout mockup"
                    fill
                    className="object-cover"
                    priority
                />

                {/* Decorative radial overlay to keep brand coloring if needed */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0D241C]/40 to-transparent pointer-events-none" />
            </div>

            {/* Right Section - Form */}
            <div className="flex-1 flex flex-col items-center justify-center p-8 lg:p-20 bg-white overflow-y-auto overflow-x-hidden">
                <div className="w-full max-w-md space-y-10 animate-in fade-in slide-in-from-right-4 duration-1000">
                    {children}
                </div>
            </div>
        </div>
    );
}
