"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import CommonWrapper from "@/common/CommonWrapper";

export const MobileApp = () => {
    return (
        <section className="py-10 md:py-24">
            <CommonWrapper>
                <div className="grid lg:grid-cols-3 gap-10 md:gap-16 lg:gap-20 items-center w-full">
                    <div className="relative order-1 lg:order-1 flex justify-center lg:justify-start lg:col-span-1 mb-10 lg:mb-0">
                        {/* Circle Background */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#11674e]/5 rounded-full blur-[100px] -z-10" />

                        <div className="relative z-10 w-full max-w-[300px] sm:max-w-[400px] lg:max-w-none flex justify-center">
                            <Image
                                src="/images/phone.png"
                                alt="Yamo Express Mobile App"
                                width={600}
                                height={800}
                                className="object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.1)] rounded-[40px]"
                            />
                        </div>
                    </div>

                    <div className="space-y-8 md:space-y-10 order-2 lg:order-2 lg:col-span-2 text-center lg:text-left">
                        <div className="space-y-4 md:space-y-6">
                            <h2 className="font-['Plus_Jakarta_Sans'] text-[28px] sm:text-[36px] md:text-[44px] font-bold text-[#000] leading-tight">
                                Get The Yamo Express App
                            </h2>
                            <p className="font-['Plus_Jakarta_Sans'] text-[16px] md:text-[18px] text-[#333] font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
                                Simply download the app, link your debit card, verify your identity and quickly transfer money to your friends and loved ones. Seriously it&apos;s that simple. Scan this QR code with your phone to download our app!
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-10 md:gap-12 items-center lg:items-center py-4">
                            <div className="cursor-pointer shrink-0">
                                <Image
                                    src="/images/qr-code.png"
                                    alt="Yamo Express QR Code"
                                    width={160}
                                    height={160}
                                    className="object-contain"
                                />
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 md:gap-5 w-full sm:w-auto">
                                <Button className="h-auto p-[14px_20px_14px_10px] md:p-[16px_20px_16px_10px] bg-[#000] text-white hover:bg-[#000]/90 rounded-[15px] md:rounded-[20px] flex items-center justify-center sm:justify-start gap-[10px] shadow-xl shadow-black/10 transition-all hover:-translate-y-1 cursor-pointer w-full sm:w-auto">
                                    <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center">
                                        <Image src="/images/icon/apple.svg" alt="Apple" width={32} height={32} />
                                    </div>
                                    <div className="text-left">
                                        <div className="text-[8px] md:text-[9px] font-['Plus_Jakarta_Sans'] uppercase font-bold tracking-[1px] opacity-70 leading-none mb-1">Download on the</div>
                                        <div className="text-[18px] md:text-[20px] font-['Plus_Jakarta_Sans'] font-bold leading-none">App Store</div>
                                    </div>
                                </Button>
                                <Button className="h-auto p-[14px_20px_14px_10px] md:p-[16px_20px_16px_10px] bg-[#11674E] text-white hover:bg-[#11674E]/90 rounded-[15px] md:rounded-[20px] flex items-center justify-center sm:justify-start gap-[10px] shadow-xl shadow-[#11674E]/10 transition-all hover:-translate-y-1 cursor-pointer w-full sm:w-auto">
                                    <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center">
                                        <Image src="/images/icon/play.svg" alt="Google Play" width={32} height={32} />
                                    </div>
                                    <div className="text-left">
                                        <div className="text-[8px] md:text-[9px] font-['Plus_Jakarta_Sans'] uppercase font-bold tracking-[1px] opacity-70 leading-none mb-1">Get it on</div>
                                        <div className="text-[18px] md:text-[20px] font-['Plus_Jakarta_Sans'] font-bold leading-none">Google Play</div>
                                    </div>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </CommonWrapper>
        </section>
    );
};
