import React from 'react';
import { X, Calendar, MessageSquare, Award, Clock, ChevronRight, ShieldCheck, Bot } from 'lucide-react';
import { useGetSessionByIdQuery } from '@/redux/features/learning/LearningSessionApi';
import { cn } from '@/lib/utils';

interface LearningSessionDetailsModalProps {
    isOpen: boolean;
    onClose: () => void;
    sessionId: string | number | null;
}

export const LearningSessionDetailsModal = ({ isOpen, onClose, sessionId }: LearningSessionDetailsModalProps) => {
    const { data: response, isLoading, isError } = useGetSessionByIdQuery(sessionId || '', {
        skip: !sessionId || !isOpen,
    });

    const session = response?.session;

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[999999] flex items-center justify-center p-4">
            <div 
                className="absolute inset-0 bg-[#040812]/95 backdrop-blur-xl animate-in fade-in duration-300"
                onClick={onClose}
            ></div>
            <div className="relative w-full max-w-[650px] max-h-[90vh] bg-[#0a111e] border border-gold/30 rounded-[24px] shadow-[0_0_100px_rgba(196,136,14,0.2)] overflow-hidden animate-in zoom-in-95 fade-in duration-300 flex flex-col">
                {/* Header Decoration */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-green-500/50 to-transparent"></div>
                
                {/* Modal Header */}
                <div className="p-6 sm:p-8 border-b border-white/10 bg-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className={cn(
                            "w-12 h-12 rounded-2xl flex items-center justify-center border transition-all duration-500",
                            session?.mastery_achieved 
                                ? "bg-green-500/10 border-green-500/20 text-green-500" 
                                : "bg-gold/10 border-gold/20 text-gold"
                        )}>
                            <Award size={24} className={session?.mastery_achieved ? "animate-bounce" : ""} />
                        </div>
                        <div>
                            <h3 className="text-white font-serif font-bold text-xl leading-tight">
                                {session?.mastery_achieved ? "Competency Mastered" : "Learning Session Details"}
                            </h3>
                            <div className="flex items-center gap-2 mt-1">
                                <span className="text-[10px] text-white/40 uppercase font-mono tracking-widest">ID: {sessionId}</span>
                                {session?.status && (
                                    <>
                                        <span className="text-white/20">•</span>
                                        <span className={cn(
                                            "text-[10px] font-bold uppercase tracking-widest",
                                            session.status === 'completed' ? "text-green-500" : "text-gold"
                                        )}>{session.status}</span>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                    <button 
                        onClick={onClose}
                        className="text-white/30 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Content Area */}
                <div className="flex-1 overflow-y-auto p-6 sm:p-8 custom-scrollbar bg-[#0a111e]">
                    {isLoading ? (
                        <div className="flex flex-col items-center justify-center py-20 gap-4">
                            <div className="w-10 h-10 border-4 border-gold border-t-transparent rounded-full animate-spin"></div>
                            <div className="text-white/40 font-mono text-xs uppercase tracking-widest">Retrieving Session Data...</div>
                        </div>
                    ) : isError || !session ? (
                        <div className="text-center py-20">
                            <div className="text-4xl mb-4">⚠️</div>
                            <div className="text-white font-bold">Failed to load details</div>
                            <div className="text-white/40 text-sm mt-2">There was an error fetching your session history.</div>
                        </div>
                    ) : (
                        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            {/* Summary Cards */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/[0.07] transition-colors">
                                    <div className="text-[10px] text-white/30 uppercase font-mono tracking-wider mb-2 flex items-center gap-2">
                                        <Clock size={12} className="text-gold" />
                                        Completed At
                                    </div>
                                    <div className="text-white font-bold text-sm">
                                        {new Date(session.completed_at || session.started_at || '').toLocaleDateString('en-US', {
                                            month: 'short',
                                            day: 'numeric',
                                            year: 'numeric',
                                            hour: '2-digit',
                                            minute: '2-digit'
                                        })}
                                    </div>
                                </div>
                                <div className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/[0.07] transition-colors">
                                    <div className="text-[10px] text-white/30 uppercase font-mono tracking-wider mb-2 flex items-center gap-2">
                                        <MessageSquare size={12} className="text-gold" />
                                        Progress
                                    </div>
                                    <div className="flex items-end gap-1">
                                        <span className="text-white font-bold text-lg leading-none">{session.interaction_count || 0}</span>
                                        <span className="text-white/30 text-[11px] font-mono leading-none pb-0.5">/ {session.max_interactions || 14} Steps</span>
                                    </div>
                                </div>
                            </div>

                            {/* Interaction History */}
                            <div className="space-y-6">
                                <div className="flex items-center justify-between">
                                    <div className="text-[11px] font-bold text-white/40 uppercase tracking-[2px] font-mono">Interaction Log</div>
                                    <div className="h-[1px] flex-1 bg-white/10 ml-4"></div>
                                </div>
                                <div className="space-y-8 relative before:absolute before:left-4 before:top-4 before:bottom-4 before:w-[1px] before:bg-gradient-to-b before:from-gold/50 before:via-white/10 before:to-transparent">
                                    {session.interactions?.map((interaction: any, idx: number) => (
                                        <div key={idx} className="relative pl-10 group">
                                            <div className="absolute left-[13px] top-1.5 w-2 h-2 rounded-full bg-gold border border-[#0a111e] shadow-[0_0_10px_rgba(196,136,14,0.5)] group-hover:scale-125 transition-transform duration-300"></div>
                                            <div className="space-y-4">
                                                <div className="flex items-center justify-between">
                                                    <span className="text-[10px] text-white/30 font-mono uppercase">Interaction #{interaction.interaction_number || idx + 1}</span>
                                                    <span className="text-[9px] text-white/20 font-mono italic">{interaction.interaction_type}</span>
                                                </div>
                                                
                                                <div className="p-5 rounded-2xl bg-white/5 border border-white/10 text-[13.5px] text-white/70 leading-relaxed relative overflow-hidden">
                                                    <div className="absolute top-0 left-0 w-1 h-full bg-white/10"></div>
                                                    <span className="text-white/20 mr-2 text-xl font-serif leading-none italic select-none">“</span>
                                                    {interaction.learner_input}
                                                    <span className="text-white/20 ml-2 text-xl font-serif leading-none italic select-none">”</span>
                                                </div>
                                                
                                                <div className="p-6 rounded-2xl bg-[#0d1726] border border-white/10 text-[14px] text-white/90 leading-relaxed shadow-xl">
                                                    <div className="flex items-center gap-2 text-[10px] text-gold font-bold uppercase tracking-wider mb-4">
                                                        <Bot size={14} />
                                                        AI Learning Coach
                                                    </div>
                                                    <div className="whitespace-pre-wrap opacity-90 font-medium">
                                                        {interaction.ai_response}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className="p-6 border-t border-white/10 bg-white/5 flex items-center justify-between">
                    <div className="text-[11px] text-white/40 flex items-center gap-2">
                        <ShieldCheck size={14} className="text-green-500" />
                        Verified Proof of Skill
                    </div>
                    <button 
                        onClick={onClose}
                        className="bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-2.5 rounded-xl transition-all text-sm"
                    >
                        Close View
                    </button>
                </div>
            </div>
        </div>
    );
};

const Sparkles = ({ size, className }: { size?: number, className?: string }) => (
    <svg 
        width={size || 16} 
        height={size || 16} 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className={className}
    >
        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
        <path d="M5 3v4"/>
        <path d="M3 5h4"/>
        <path d="M21 17v4"/>
        <path d="M19 19h4"/>
    </svg>
);
