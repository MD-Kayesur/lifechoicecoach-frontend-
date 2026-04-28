"use client";

import { useState } from "react";
import Image from "next/image";
import flag from "@/assets/images/flag.png";


export const Calculator = () => {
    const [sendAmount, setSendAmount] = useState("1000");
    const rate = 1.25;
    const recipientAmount = (parseFloat(sendAmount.replace(/,/g, "")) * rate).toFixed(2);

    return (
        <div className="bg-white rounded-[16px] border border-[#E4E4E4] p-4 md:p-6 w-full shadow-sm">
             <div className="mb-4">
                <p className="text-sm md:text-base font-semibold text-[#666] mb-2">You Send</p>
                <div className="flex items-center justify-between border border-[#E4E4E4] rounded-[10px] px-3 md:px-5 py-3 focus-within:border-[#11674E] transition-colors">
                    <input
                        type="text"
                        value={sendAmount}
                        onChange={(e) => setSendAmount(e.target.value)}
                        className="text-base md:text-[20px] font-bold text-[#191919] bg-transparent border-none outline-none w-full"
                    />
                    <div className="flex items-center gap-2 shrink-0">
                        <Image src={flag} alt="flag" width={40} height={24} />
                        <span className="font-bold text-base md:text-[20px] text-[#191919]">GBP</span>
                    </div>
                </div>
            </div>

            {/* Swap Arrow */}
            <div className="flex justify-center my-2">
                <div className="w-9 h-9 bg-[#11674E] rounded-full flex items-center justify-center shadow-md cursor-pointer hover:scale-110 transition-transform">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 2L8 14M8 14L4 10M8 14L12 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </div>

            {/* Recipient Receives */}
            <div className="mb-5">
                <p className="text-sm md:text-base font-semibold text-[#666] mb-2">Recipient Receives</p>
                <div className="flex items-center justify-between border border-[#E4E4E4] rounded-[10px] px-4 py-3">
                    <input
                        type="text"
                        readOnly
                        value={recipientAmount}
                        className="text-base md:text-[20px] font-bold text-[#191919] bg-transparent border-none outline-none w-full"
                    />
                    <div className="flex items-center gap-2 shrink-0">
                        <Image src={flag} alt="flag" width={40} height={24} />
                        <span className="font-bold text-base md:text-[20px] text-[#191919]">GBP</span>
                    </div>
                </div>
            </div>

             <div className="space-y-2 mb-5">
                <div className="flex justify-between items-center">
                    <span className="text-sm md:text-base font-medium text-[#808080] mb-2">Exchange Rate</span>
                    <span className="text-sm md:text-base font-semibold text-black mb-2">1 GBP = 1.25 USD</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-sm md:text-base font-medium text-[#808080] mb-2">Transfer Fee</span>
                    <span className="text-sm md:text-base font-semibold text-black mb-2">1 GBP = 1.25 USD</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-sm md:text-base font-medium text-[#808080] mb-2">Delivery Time</span>
                    <span className="text-sm md:text-base font-semibold text-black mb-2">1 GBP = 1.25 USD</span>
                </div>
            </div>

            {/* CTA Button */}
            <button className="w-full md:w-fit px-6 py-3 bg-[#11674E] hover:bg-[#0d5540] text-white text-[13px] font-bold uppercase rounded-[20px] transition-colors cursor-pointer">
                SEND MONEY NOW
            </button>
        </div>
    );
};
