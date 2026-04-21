"use client";

import CommonWrapper from "@/common/CommonWrapper";
import { Brain, Target, Zap, Heart, MessageSquare, RefreshCw } from "lucide-react";

export const BrainScience = () => {
    const principles = [
        {
            title: "Prior Knowledge Shapes Everything",
            desc: "The brain stores new information by connecting it to what it already knows. This is called schema theory. If a learner already knows something about the topic, the new information is absorbed much faster. If they know nothing, the brain needs more time and more examples before the connection is made.",
            highlight: "The IKON SKILLS™ pre-test reads the learner's existing knowledge before anything else.",
            icon: Brain
        },
        {
            title: "The Zone of Proximal Development",
            desc: "Psychologist Lev Vygotsky showed that people learn best when they are taught just beyond what they already know, but not so far that they become lost. Too easy, and the brain switches off. Too hard, and the learner gives up.",
            highlight: "The AI engine finds this exact zone for each individual practitioner and stays there throughout the learning journey.",
            icon: Target
        },
        {
            title: "Working Memory Has a Limit",
            desc: "The human brain can only hold a small amount of new information at one time. This is called cognitive load theory. If a learner is overwhelmed with too much content at once, learning fails.",
            highlight: "The AI engine paces content delivery to match each practitioner's cognitive bandwidth, not a fixed content schedule.",
            icon: Zap
        },
        {
            title: "Emotion and Relevance Drive Memory",
            desc: "The brain's memory center, the hippocampus, works closely with the emotional center, the amygdala. Learners remember information much better when it is connected to real-life examples that feel relevant and meaningful to them. Generic examples fade. Personal, contextual examples stick.",
            highlight: "IKON SKILLS™ delivers real-life scenarios matched to each practitioner's context.",
            icon: Heart
        },
        {
            title: "The Spacing and Retrieval Effect",
            desc: "Neuroscience research consistently shows that we retain knowledge far better when we are tested on it, rather than just reading it. This is the testing effect. Additionally, spacing practice over time builds deeper memory traces.",
            highlight: "The IKON SKILLS™ formative assessment loops do exactly this: they repeatedly retrieve knowledge and reinforce it at the right moments.",
            icon: MessageSquare
        },
        {
            title: "Feedback Closes the Learning Loop",
            desc: "When the brain receives immediate, specific feedback after a response, it can correct its own patterns. This is how neural pathways are strengthened. Vague feedback does very little. Precise, timely feedback changes learning outcomes dramatically.",
            highlight: "Every assessment in the IKON SKILLS™ system is followed by targeted feedback, not just a score.",
            icon: RefreshCw
        }
    ];

    return (
        <section id="science" className="py-[80px] md:py-[120px] relative overflow-hidden bg-[#020617]">
            <CommonWrapper className="max-w-[1200px] px-5 md:px-[48px]">
                <div className="mb-20 space-y-4">
                    <div className="text-[10.5px] text-primary/80 font-bold uppercase tracking-[4px] font-mono">THE BRAIN SCIENCE</div>
                    <h2 className="font-cormorant font-bold text-[clamp(32px,3.5vw,52px)] leading-[1.15] text-white capitalize">
                        What neuroscience tells us about <br /><span className="text-gold2 italic">How people learn</span>
                    </h2>
                    <p className="text-white/60 text-[16px] leading-[1.8] max-w-4xl font-outfit">
                        Learning is not a simple transfer of information from a screen to a brain. The brain has to <span className="text-white font-bold underline decoration-primary/30">receive, process, connect, and store</span> new knowledge. Neuroscience shows us that this process looks very different depending on who the learner is.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-x-[72px] gap-y-[56px]">
                    {principles.map((p, i) => (
                        <div key={i} className="pl-6 border-l-[3px] border-primary/30 space-y-4 hover:border-primary transition-all duration-300">
                            <h3 className="text-[18px] font-bold text-[#49cbc7] font-outfit uppercase tracking-[1.5px]">{p.title}</h3>
                            <div className="space-y-4">
                                <p className="text-white/60 leading-[1.8] font-outfit text-[15.5px]">
                                    {p.desc}
                                </p>
                                <p className="text-white/80 italic font-medium font-outfit text-[15.5px]">
                                    {p.highlight}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </CommonWrapper>
        </section>
    );
};
