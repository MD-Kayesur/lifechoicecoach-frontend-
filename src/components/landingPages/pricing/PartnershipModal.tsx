import React, { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChevronDown, Check, X, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { 
    useCreateAcademicInquiryMutation, 
    useCreateCorporateInquiryMutation, 
    useCreateWhiteLabelInquiryMutation 
} from "@/redux/features/partnership/partnershipApi";
import { toast } from "sonner";

export type PartnershipType = "academic" | "corporate" | "white-label";

interface PartnershipModalProps {
    isOpen: boolean;
    onClose: () => void;
    type: PartnershipType;
}

const DOMAIN_OPTIONS = [
    "AI, Automation & Digital Intelligence",
    "Data, Analytics & Insight",
    "Business, Strategy & Leadership",
    "Project, Product & Operations",
    "Technology & Digital Enablement",
    "Marketing, Sales & Growth",
    "HR, Learning & People Development",
    "Finance, Compliance & ESG",
    "Teaching & Education Credentials",
    "Strategic Brand Leadership (TWBF)"
];

const MODAL_CONFIG = {
    academic: {
        title: "Academic Partnership Inquiry",
        description: "For accredited institutions integrating IKON SKILLS into credit-bearing programs or offering as co-curricular credentials.",
        buttonText: "Submit Academic Inquiry"
    },
    corporate: {
        title: "Corporate Partner Inquiry",
        description: "For organisations upskilling teams across AI, data, leadership, brand, and operational domains with verified proof-of-skill credentials.",
        buttonText: "Submit Corporate Inquiry"
    },
    "white-label": {
        title: "White-Label Partner Inquiry",
        description: "For training providers, agents, and edtech resellers offering IKON SKILLS Micro-Credentials under their own brand.",
        buttonText: "Submit Partner Inquiry"
    }
};

export const PartnershipModal = ({ isOpen, onClose, type }: PartnershipModalProps) => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [organisation, setOrganisation] = useState("");
    const [selectedDomain, setSelectedDomain] = useState(DOMAIN_OPTIONS[0]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const [createAcademic, { isLoading: isAcademicLoading }] = useCreateAcademicInquiryMutation();
    const [createCorporate, { isLoading: isCorporateLoading }] = useCreateCorporateInquiryMutation();
    const [createWhiteLabel, { isLoading: isWhiteLabelLoading }] = useCreateWhiteLabelInquiryMutation();

    const isLoading = isAcademicLoading || isCorporateLoading || isWhiteLabelLoading;
    const config = MODAL_CONFIG[type];

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!fullName || !email || !organisation) {
            toast.error("Please fill in all required fields.");
            return;
        }

        const data = {
            full_name: fullName,
            email,
            organisation,
            domain_name: selectedDomain
        };

        try {
            let result;
            if (type === "academic") {
                result = await createAcademic(data).unwrap();
            } else if (type === "corporate") {
                result = await createCorporate(data).unwrap();
            } else {
                result = await createWhiteLabel(data).unwrap();
            }

            if (result.success) {
                toast.success(result.message || "Your inquiry has been submitted successfully.");
                onClose();
                // Reset form
                setFullName("");
                setEmail("");
                setOrganisation("");
                setSelectedDomain(DOMAIN_OPTIONS[0]);
            } else {
                toast.error(result.message || "Failed to submit inquiry. Please try again.");
            }
        } catch (err: any) {
            console.error("Partnership submission error:", err);
            toast.error(err?.data?.message || "An unexpected error occurred. Please try again.");
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={(open) => {
            if (!open && !isLoading) {
                setIsDropdownOpen(false);
                onClose();
            }
        }}>
            <DialogContent 
                showCloseButton={false}
                className="max-w-[95vw] sm:max-w-[800px] bg-[#0a1628] border-white/10 text-white p-6 sm:p-10 rounded-[24px] sm:rounded-[32px] overflow-visible outline-none shadow-2xl"
            >
                <button 
                    onClick={onClose}
                    disabled={isLoading}
                    className="absolute top-4 right-4 sm:top-6 sm:right-6 w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-all z-50 disabled:opacity-50"
                >
                    <X className="w-4 h-4" />
                </button>

                <DialogHeader className="sm:mb-8 text-left">
                    <DialogTitle className="text-2xl sm:text-3xl font-serif font-medium text-white mb-3 leading-tight">
                        {config.title}
                    </DialogTitle>
                    <DialogDescription className="text-white/60 text-[13px] sm:text-[14px] leading-relaxed">
                        {config.description}
                    </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5 sm:gap-y-6">
                        <div className="space-y-2">
                            <Label className="text-[9px] sm:text-[10px] font-mono font-bold tracking-[2px] uppercase text-white/50">Full Name</Label>
                            <Input 
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                placeholder="Your full name" 
                                required
                                disabled={isLoading}
                                className="h-12 sm:h-14 bg-white/5 border-white/10 focus:border-[#C43030]/50 rounded-xl px-4 sm:px-5 text-white placeholder:text-white/20 transition-all text-sm sm:text-base"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label className="text-[9px] sm:text-[10px] font-mono font-bold tracking-[2px] uppercase text-white/50">Email Address</Label>
                            <Input 
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="your@email.com" 
                                required
                                disabled={isLoading}
                                className="h-12 sm:h-14 bg-white/5 border-white/10 focus:border-[#C43030]/50 rounded-xl px-4 sm:px-5 text-white placeholder:text-white/20 transition-all text-sm sm:text-base"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label className="text-[9px] sm:text-[10px] font-mono font-bold tracking-[2px] uppercase text-white/50">Organisation</Label>
                            <Input 
                                value={organisation}
                                onChange={(e) => setOrganisation(e.target.value)}
                                placeholder="Organisation name" 
                                required
                                disabled={isLoading}
                                className="h-12 sm:h-14 bg-white/5 border-white/10 focus:border-[#C43030]/50 rounded-xl px-4 sm:px-5 text-white placeholder:text-white/20 transition-all text-sm sm:text-base"
                            />
                        </div>

                        <div className="space-y-2 relative">
                            <Label className="text-[9px] sm:text-[10px] font-mono font-bold tracking-[2px] uppercase text-white/50">Domain Interest</Label>
                            <button 
                                type="button"
                                disabled={isLoading}
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className="w-full h-12 sm:h-14 bg-white/5 border border-white/10 hover:border-white/20 rounded-xl px-4 sm:px-5 flex items-center justify-between text-white text-sm transition-all text-left disabled:opacity-50"
                            >
                                <span className="truncate">{selectedDomain}</span>
                                <ChevronDown className={cn("w-4 h-4 text-white/60 transition-transform flex-shrink-0 ml-2", isDropdownOpen && "rotate-180")} />
                            </button>

                            {isDropdownOpen && (
                                <div className="absolute z-[100] left-0 right-0 top-[calc(100%+8px)] bg-[#1a2333] border border-white/10 rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] animate-in fade-in zoom-in-95 duration-200">
                                    <div className="relative max-h-[220px] sm:max-h-[280px] overflow-y-auto custom-scrollbar">
                                        <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-[#C43030]/10 to-transparent pointer-events-none" />
                                        
                                        {DOMAIN_OPTIONS.map((option) => (
                                            <button
                                                key={option}
                                                type="button"
                                                onClick={() => {
                                                    setSelectedDomain(option);
                                                    setIsDropdownOpen(false);
                                                }}
                                                className={cn(
                                                    "w-full px-5 py-3.5 text-left text-[12px] sm:text-[13px] transition-colors flex items-center justify-between relative z-10",
                                                    selectedDomain === option ? "bg-white/10 text-white font-medium" : "text-white/60 hover:bg-white/5 hover:text-white"
                                                )}
                                            >
                                                <span className="pr-4">{option}</span>
                                                {selectedDomain === option && <Check className="w-4 h-4 text-[#C43030] flex-shrink-0" />}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    <button 
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-[#C43030] hover:bg-[#A32828] text-white font-bold py-4 sm:py-5 rounded-2xl shadow-[0_4px_0_#8B1E1E] transition-all active:translate-y-[2px] active:shadow-[0_2px_0_#8B1E1E] mt-2 text-sm sm:text-base flex items-center justify-center gap-2 disabled:opacity-70"
                    >
                        {isLoading && <Loader2 className="w-5 h-5 animate-spin" />}
                        {isLoading ? "Submitting..." : config.buttonText}
                    </button>

                    <p className="text-center text-[10px] sm:text-[11px] text-white/40 mt-4 font-medium leading-tight">
                        Quality Assured by European International University, Paris · UAI 0756213W
                    </p>
                </form>
            </DialogContent>
        </Dialog>
    );
};
