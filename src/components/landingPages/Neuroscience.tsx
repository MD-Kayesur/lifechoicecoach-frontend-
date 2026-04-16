"use client";

import CommonWrapper from "@/common/CommonWrapper";
import { CheckCircle2, ArrowRight, Brain, Target, Zap, Heart, MessageSquare, RefreshCw, Layers } from "lucide-react";

export const Neuroscience = () => {
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

    const practitioners = [
        { name: "Priya", country: "India", level: "Beginner", emoji: "👩‍💼" },
        { name: "Ahmed", country: "Nigeria", level: "Intermediate", emoji: "👨‍💻" },
        { name: "Siti", country: "Indonesia", level: "Advanced", emoji: "👩‍🔬" },
        { name: "Raj", country: "Sri Lanka", level: "Beginner", emoji: "👨‍🏫" },
        { name: "Fatima", country: "Bangladesh", level: "Intermediate", emoji: "👩‍🎓" },
        { name: "Emmanuel", country: "Ghana", level: "Beginner", emoji: "👨‍🌾" },
        { name: "Thuy", country: "Vietnam", level: "Intermediate", emoji: "👩‍⚕️" },
        { name: "Arun", country: "Nepal", level: "Advanced", emoji: "👨‍🔧" },
        { name: "Dina", country: "Philippines", level: "Beginner", emoji: "👩‍🍳" },
        { name: "Kigen", country: "Kenya", level: "Intermediate", emoji: "👨‍⚖️" }
    ];

    const steps = [
        { title: "PRE-TEST", desc: "The AI checks what the practitioner already knows. No assumptions. Clean baseline.", icon: "🔬" },
        { title: "PERSONALIZED TEACHING", desc: "Content, language, examples, and depth are matched to this learner's level in real time.", icon: "🎯" },
        { title: "FORMATIVE ASSESSMENT", desc: "A diagnostic check; not to grade, but to understand what the brain has absorbed.", icon: "🔍" },
        { title: "REINFORCEMENT", desc: "Gaps are addressed immediately. The concept is re-taught differently, not repeated.", icon: "🔄" },
        { title: "VERIFIED MASTERY", desc: "75% competency proven. Only then does the practitioner move to the next Core Competency.", icon: "✅" }
    ];

    return (
        <div className="min-h-screen pt-[62px]">
            {/* Hero Section */}
            <section className="relative py-24 md:py-32 overflow-hidden flex items-center min-h-[90vh]">
                {/* Background Grid & Effects */}
                <div className="absolute inset-0 pointer-events-none opacity-30"
                    style={{
                        backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)`,
                        backgroundSize: '4rem 4rem',
                        maskImage: 'radial-gradient(ellipse 60% 50% at 50% 50%, #000 70%, transparent 100%)'
                    }}
                />
                <div className="absolute top-[-150px] right-[-150px] w-[800px] h-[800px] rounded-full
                 bg-[radial-gradient(circle,rgba(203,45,57,0.1)_0%,transparent_65%)] pointer-events-none" />
                <div className="absolute bottom-[-200px] left-[-100px] w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,rgba(26,58,107,0.3)_0%,transparent_70%)] pointer-events-none" />

                <CommonWrapper className="relative z-10">
                    <div className="max-w-5xl mx-auto text-center">
                        <div className="inline-flex items-center gap-[8px] bg-primary border-none px-[16px] py-[6px] rounded-full mb-8 shadow-[0_4px_0_#8a1e27,0_6px_10px_rgba(0,0,0,0.35)]">
                            <div className="w-[6px] h-[6px] bg-white rounded-full blink" />
                            <span className="text-[11px] font-bold text-white tracking-[1.6px] uppercase font-mono">
                                Neuroscience of Learning · ikonskills.ac
                            </span>
                        </div>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-cormorant font-bold text-white mb-8 leading-[1.05]">
                            Every brain <br />
                            <span className="text-gold2 italic">is different.</span> <br />
                            <span className="text-white/80">Every learner gets proof.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-white/55 mb-12 font-outfit max-w-2xl mx-auto leading-relaxed">
                            Ten IKON Practitioners. One Micro-Credential. Ten completely personalized journeys, each ending at the same destination: <span className="text-white font-semibold underline decoration-primary/40 underline-offset-4">proven, verified competency.</span>
                        </p>
                        <a
                            href="#science"
                            className="inline-flex items-center gap-2 text-primary font-bold tracking-[2px] uppercase text-xs border-b border-primary/30 pb-1 hover:border-primary transition-all group"
                        >
                            Read the science below
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </CommonWrapper>
            </section>

            {/* Section 1: Starting Point */}
            <section className="py-24 border-t border-white/5 bg-[#050a14]/50">
                <CommonWrapper>
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <div className="text-[10px] text-primary font-bold uppercase tracking-[4px]">THE STARTING POINT</div>
                                <h2 className="text-4xl md:text-5xl font-bold text-white">Same Micro-Credential. <br /><span className="text-primary/80">Different Starting Points.</span></h2>
                            </div>
                            <div className="space-y-6 text-white/60 text-lg leading-relaxed font-outfit">
                                <p>
                                    Imagine ten people enrolling in the same IKON SKILLS™ Micro-Credential at exactly the same time. They all have the same 10 Core Competencies to master. The benchmark is the same for everyone: <span className="text-white font-bold">75% proof of competency</span> before the credential is awarded.
                                </p>
                                <p>
                                    But here is the key insight from neuroscience: <span className="text-primary font-bold">no two human brains arrive at the same place.</span> One learner may already know three of the ten competencies well. Another may be completely new. A third speaks English as a fourth language.
                                </p>
                                <p>
                                    Traditional learning ignores all of this. It delivers the same video, the same quiz, the same experience to everyone and calls it &quot;education.&quot; IKON SKILLS™ does something completely different.
                                </p>
                            </div>
                            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-primary/10 border border-primary/20">
                                <CheckCircle2 className="w-5 h-5 text-primary" />
                                <span className="text-sm font-medium text-white/90">75% Verified Competency Threshold • Binary Verdict: Competent</span>
                            </div>
                        </div>

                        <div className="grid gap-6">
                            {[
                                { val: "10", label: "Core Competencies", sub: "Per Micro-Credential" },
                                { val: "14", label: "AI Interaction Points", sub: "Per Core Competency" },
                                { val: "∞", label: "Personalized Paths", sub: "Unlimited Learning journeys" }
                            ].map((stat, i) => (
                                <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 relative overflow-hidden group hover:bg-white/10 transition-all">
                                    <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
                                        <Layers className="w-24 h-24" />
                                    </div>
                                    <div className="text-6xl font-bold text-primary mb-2 leading-none">{stat.val}</div>
                                    <div className="text-xl font-bold text-white uppercase tracking-tight mb-1">{stat.label}</div>
                                    <div className="text-xs text-white/40 font-mono tracking-widest uppercase">{stat.sub}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </CommonWrapper>
            </section>

            {/* Section 2: Practitioners */}
            <section className="py-24 relative">
                <CommonWrapper>
                    <div className="text-center mb-16 space-y-4">
                        <div className="text-[10px] text-primary font-bold uppercase tracking-[4px]">THE 10 IKON PRACTITIONERS</div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white">Same Start Time. <span className="text-primary/80">Ten Different Brains.</span></h2>
                        <p className="text-white/60 text-lg max-w-2xl mx-auto">
                            All ten begin at the same moment. The AI engine immediately begins profiling each one before teaching a single word.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        {practitioners.map((p, i) => (
                            <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center space-y-4 hover:border-primary/30 transition-all group">
                                <div className="text-4xl group-hover:scale-110 transition-transform">{p.emoji}</div>
                                <div>
                                    <div className="font-bold text-white">{p.name}</div>
                                    <div className="text-[10px] text-white/40 font-mono uppercase tracking-wider">{p.country} · {p.level}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 p-8 rounded-3xl bg-primary/5 border border-primary/10 text-center max-w-4xl mx-auto">
                        <p className="text-white/70 italic leading-relaxed">
                            Each of these ten practitioners gets a completely different experience, even though they are learning the exact same Core Competencies. Here is why this is not just a feature. <span className="text-white font-bold">It is a reflection of how the human brain actually learns.</span>
                        </p>
                    </div>
                </CommonWrapper>
            </section>

            {/* Section 3: Brain Science */}
            <section id="science" className="py-24 bg-[#050a14]/50 border-y border-white/5">
                <CommonWrapper>
                    <div className="max-w-3xl mb-20 space-y-4">
                        <div className="text-[10px] text-primary font-bold uppercase tracking-[4px]">THE BRAIN SCIENCE</div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white">What Neuroscience Tells Us <br /><span className="text-primary/80">About How People Learn</span></h2>
                        <p className="text-white/60 text-lg">
                            Learning is not a simple transfer of information from a screen to a brain. The brain has to receive, process, connect, and store new knowledge.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {principles.map((p, i) => (
                            <div key={i} className="p-10 rounded-[32px] bg-white/5 border border-white/10 flex flex-col gap-6 hover:bg-white/10 transition-all group">
                                <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                                    <p.icon className="w-7 h-7 text-primary" />
                                </div>
                                <div className="space-y-4 flex-1">
                                    <h3 className="text-2xl font-bold text-white">{p.title}</h3>
                                    <p className="text-white/50 leading-relaxed font-outfit text-base">
                                        {p.desc}
                                    </p>
                                    <div className="pt-4 border-t border-white/5">
                                        <div className="text-primary/90 text-[13px] font-medium leading-relaxed italic">
                                            {p.highlight}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </CommonWrapper>
            </section>

            {/* Section 4: Learning Loop */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
                <CommonWrapper>
                    <div className="text-center mb-20 space-y-4">
                        <div className="text-[10px] text-primary font-bold uppercase tracking-[4px]">THE LEARNING LOOP</div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white">This Is What Happens <br /><span className="text-primary/80">Inside Every Competency</span></h2>
                        <p className="text-white/60 text-lg max-w-2xl mx-auto">
                            Each of the 10 Core Competencies within a Micro-Credential follows this learning loop. The loop repeats until competency is proven at 75%.
                        </p>
                    </div>

                    <div className="relative">
                        <div className="hidden lg:block absolute top-[44px] left-[10%] right-[10%] h-[1px] border-t border-dashed border-primary/30 z-0" />
                        <div className="grid lg:grid-cols-5 gap-8 relative z-10 text-center">
                            {steps.map((step, i) => (
                                <div key={i} className="space-y-6 flex flex-col items-center group">
                                    <div className="w-24 h-24 rounded-full bg-[#0a1628] border border-white/10 flex items-center justify-center text-4xl shadow-xl group-hover:border-primary/50 transition-all">
                                        {step.icon}
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="text-sm font-bold text-primary tracking-widest uppercase">{step.title}</h4>
                                        <p className="text-white/50 text-[13px] leading-relaxed max-w-[200px] mx-auto">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-24 p-12 rounded-[40px] bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 relative overflow-hidden max-w-5xl mx-auto">
                        <div className="absolute top-0 left-0 p-8 text-primary/10 pointer-events-none">
                            <MessageSquare className="w-32 h-32" />
                        </div>
                        <p className="text-xl md:text-2xl text-white/80 font-outfit leading-relaxed relative z-10 text-center">
                            &quot;This loop is not just a system feature. It mirrors the natural learning cycle of the human brain: <span className="text-white font-bold">encounter, process, test, correct, consolidate.</span> Skip any step, and learning becomes shallow. Run all steps, and the learner builds real competency that lasts well beyond the assessment.&quot;
                        </p>
                    </div>
                </CommonWrapper>
            </section>
        </div>
    );
};
