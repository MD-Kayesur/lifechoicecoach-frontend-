"use client";

import CommonWrapper from "@/common/CommonWrapper";
import { CheckCircle2, ArrowRight, Brain, Target, Zap, Heart, MessageSquare, RefreshCw, Layers, ShieldCheck } from "lucide-react";

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
        { name: "Ahmed", country: "Nigeria", level: "Intermediate", emoji: "👨‍🔧" },
        { name: "Siti", country: "Indonesia", level: "Advanced", emoji: "👩‍🎓" },
        { name: "Raj", country: "Sri Lanka", level: "Beginner", emoji: "👨‍💻" },
        { name: "Fatima", country: "Bangladesh", level: "Intermediate", emoji: "👩‍🏫" },
        { name: "Emmanuel", country: "Ghana", level: "Beginner", emoji: "👨‍🌾" },
        { name: "Thuy", country: "Vietnam", level: "Intermediate", emoji: "👩‍⚕️" },
        { name: "Arun", country: "Nepal", level: "Advanced", emoji: "👨‍🎨" },
        { name: "Dina", country: "Philippines", level: "Beginner", emoji: "👩‍🔬" },
        { name: "Kigen", country: "Kenya", level: "Intermediate", emoji: "👨‍⚖️" }
    ];

    const steps = [
        { title: "PRE-TEST PROFILING", desc: "Identifies the &quot;Known&quot; vs &quot;Unknown&quot;. Clean baseline for the AI to begin.", icon: "🔬" },
        { title: "PERSONALIZED TEACHING", desc: "Matches language, context, and depth to this learner&apos;s level in real time.", icon: "🎯" },
        { title: "FORMATIVE ASSESSMENT", desc: "A diagnostic check to understand exactly what the brain has absorbed.", icon: "🔍" },
        { title: "TARGETED REINFORCEMENT", desc: "Gaps are addressed immediately. The concept is re-taught using a different logic.", icon: "🔄" },
        { title: "MASTERY VALIDATION", desc: "75% competency proven. Only then does the practitioner move to the next Core Competency.", icon: "✅" }
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
                                IKON SKILLS™ · NEUROSCIENCE OF LEARNING
                            </span>
                        </div>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-cormorant font-bold text-white mb-8 leading-[1.05]">
                            Every brain <br />
                            <span className="text-gold2 italic">is different.</span> <br />
                            <span className="text-white">Every learner gets proof.</span>
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
                    <div className="grid lg:grid-cols-2 gap-16 items-center font-outfit">
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <div className="text-[10px] text-primary font-bold uppercase tracking-[4px]">THE STARTING POINT</div>
                                <h2 className="text-4xl md:text-5xl font-bold text-white">Same Micro-Credential. <br /><span className="text-primary/80">Different Starting Points.</span></h2>
                            </div>
                            <div className="space-y-6 text-white/60 text-lg leading-relaxed">
                                <p>
                                    Imagine ten people enrolling in the same IKON SKILLS™ Micro-Credential at exactly the same time. They all have the same 10 Core Competencies to master. The benchmark is the same for everyone: <span className="text-white font-bold">75% proof of competency</span> before the credential is awarded.
                                </p>
                                <p>
                                    But here is the key insight from neuroscience: <span className="text-primary font-bold">no two human brains arrive at the same place.</span> One learner may already know three of the ten competencies well. Another may be completely new. A third speaks English as a fourth language.
                                </p>
                                <p>
                                    Traditional learning ignores all of this. It delivers the same video, the same quiz, the same experience to everyone and calls it &quot;education.&quot; IKON SKILLS™ does something completely different. It maps the mind before the first lesson begins.
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
                                { val: "14", label: "AI Interaction Points", sub: "Assessment Consistency" },
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
                        <h2 className="text-4xl md:text-5xl font-bold text-white font-cormorant tracking-tight">Same Start Time. <span className="text-primary/80 italic">Ten Different Brains.</span></h2>
                        <p className="text-white/60 text-lg max-w-2xl mx-auto font-outfit">
                            All ten begin at the same moment. The AI engine immediately begins profiling each one before teaching a single word.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        {practitioners.map((p, i) => (
                            <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center space-y-4 hover:border-primary/30 transition-all group backdrop-blur-[4px]">
                                <div className="text-4xl group-hover:scale-110 transition-transform">{p.emoji}</div>
                                <div>
                                    <div className="font-bold text-white font-outfit">{p.name}</div>
                                    <div className="text-[10px] text-white/40 font-mono uppercase tracking-wider">{p.country} · {p.level}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 p-8 rounded-3xl bg-primary/5 border border-primary/10 text-center max-w-4xl mx-auto">
                        <p className="text-white/70 italic leading-relaxed font-outfit">
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

            {/* Section 5: Concept Attainment */}
            <section className="py-24 bg-[#050a14]/50 border-y border-white/5">
                <CommonWrapper>
                    <div className="max-w-3xl mb-20 space-y-4">
                        <div className="text-[10px] text-primary font-bold uppercase tracking-[4px]">CONCEPT ATTAINMENT</div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white">Teaching Until the Brain <br /><span className="text-primary/80">Actually Gets It</span></h2>
                        <div className="space-y-6 text-white/60 text-lg leading-relaxed font-outfit">
                            <p>
                                Jerome Bruner&apos;s <span className="text-white font-bold italic">Concept Attainment Model</span> is at the heart of how IKON SKILLS™ teaches each competency. The idea is simple: a learner truly understands a concept only when they can identify what it is, what it is not, and apply it in a new context.
                            </p>
                            <p>
                                This is different from memorizing a definition. A practitioner who has memorized what &quot;active listening&quot; means may completely fail to demonstrate it when asked to apply it in a difficult workplace scenario. IKON SKILLS™ teaches the concept, tests recognition, then tests application in real-world contexts.
                            </p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                id: "01",
                                title: "Real-Life Examples",
                                desc: "The AI selects examples from contexts that are relevant to the practitioner's region, industry, and role. A practitioner in Kenya sees different examples than a practitioner in Nepal, even when learning the exact same competency. The concept is the same. The context is personal."
                            },
                            {
                                id: "02",
                                title: "Language-Level Matching",
                                desc: "As the practitioner responds and interacts, the AI continuously reads the vocabulary, sentence complexity, and conceptual language being used. Teaching materials adjust to this level in real time. A learner who writes at a simpler language level is not left behind."
                            },
                            {
                                id: "03",
                                title: "Learning Style Adaptation",
                                desc: "Some learners grasp concepts through logical sequences. Others need a story first. Others need to see the concept broken down step by step. The AI identifies patterns in how each practitioner responds and adapts the teaching style accordingly. This is data-driven personalization."
                            }
                        ].map((card, i) => (
                            <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 space-y-6 hover:bg-white/10 transition-all group">
                                <div className="text-4xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors font-mono">{card.id}</div>
                                <div className="space-y-4">
                                    <h3 className="text-xl font-bold text-white uppercase tracking-tight">{card.title}</h3>
                                    <p className="text-white/50 text-sm leading-relaxed">{card.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </CommonWrapper>
            </section>

            {/* Section 6: AI Integrity Engine */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
                <CommonWrapper>
                    <div className="text-center mb-20 space-y-4">
                        <div className="text-[10px] text-primary font-bold uppercase tracking-[4px]">AI INTEGRITY ENGINE</div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white">The AI Knows You. <br /><span className="text-primary/80">From the First Response.</span></h2>
                        <p className="text-white/60 text-lg max-w-3xl mx-auto font-outfit">
                            From the moment a practitioner begins their Micro-Credential, the AI engine is doing far more than teaching. It is building a deep, dynamic profile of that specific learner. This profile grows richer with every interaction.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                id: "A",
                                title: "Language Fingerprint",
                                desc: "Every person writes in a way that is uniquely theirs. Vocabulary choices, sentence construction, response patterns, and even the way they express uncertainty, all create a recognizable signature. The AI records this from the very first interaction."
                            },
                            {
                                id: "B",
                                title: "Knowledge Baseline",
                                desc: "The pre-test establishes what the practitioner knows before instruction begins. This baseline is stored. If the quality of responses suddenly jumps beyond what the baseline would predict, the system flags this as an inconsistency."
                            },
                            {
                                id: "C",
                                title: "Behavioral Consistency",
                                desc: "The AI monitors the pace of responses, the nature of errors, and how the learner navigates difficulty. A practitioner who consistently struggles does not suddenly produce flawless academic language without reason. Patterns matter."
                            }
                        ].map((card, i) => (
                            <div key={i} className="p-10 rounded-[40px] bg-white/5 border border-white/10 space-y-8 relative group hover:border-primary/30 transition-all">
                                <div className="text-6xl font-bold text-primary/5 absolute top-6 left-8 group-hover:text-primary/10 transition-colors">{card.id}</div>
                                <div className="space-y-4 pt-12">
                                    <h3 className="text-2xl font-bold text-white">{card.title}</h3>
                                    <p className="text-white/50 leading-relaxed font-outfit text-sm">{card.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Academic Integrity Box */}
                    <div className="mt-20 p-8 md:p-12 rounded-[40px] bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 max-w-5xl mx-auto space-y-8">
                        <div className="flex items-center gap-4 text-primary">
                            <ShieldCheck className="w-8 h-8" />
                            <h3 className="text-2xl font-bold font-outfit">Academic Integrity: Why Copying from Another AI Does Not Work</h3>
                        </div>
                        <div className="grid gap-6 text-white/70 text-base leading-relaxed font-outfit">
                            <p>
                                Some learners may attempt to copy a response generated by another AI tool on a separate device and paste it into the IKON SKILLS™ assessment. Here is why this strategy fails, not because of a simple plagiarism checker, but because of how deeply the AI understands the practitioner.
                            </p>
                            <p>
                                By the time a practitioner reaches an assessment question, the AI already has a detailed profile: how this person writes, what vocabulary they use, how they structure ideas, and what gaps they have shown. A response generated by a general AI tool will almost certainly <span className="text-white font-bold underline decoration-primary/40 underline-offset-4">not match this established profile.</span> The language will be too formal, too structured, or too advanced. The AI engine will detect this inconsistency immediately.
                            </p>
                            <p>
                                Furthermore, the assessment questions themselves are <span className="text-white font-bold">algorithmically personalized.</span> They are drawn from a question bank and sequenced based on the specific learner&apos;s progress. A general AI tool without access to this context cannot generate a contextually accurate answer.
                            </p>
                            <p className="border-t border-white/10 pt-6 text-white font-medium italic">
                                This is not a system trying to catch cheaters after the fact. It is a system that knows each learner so well that inauthenticity becomes visible the moment it appears.
                            </p>
                        </div>
                    </div>
                </CommonWrapper>
            </section>

            {/* Section 7: Proof of Skill Promise */}
            <section className="py-24 bg-[#050a14]/50 border-t border-white/5 overflow-hidden">
                <CommonWrapper>
                    <div className="max-w-4xl mb-16 space-y-4">
                        <div className="text-[10px] text-primary font-bold uppercase tracking-[4px]">THE PROOF OF SKILL PROMISE</div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white">Why 75% Proven Competency <br /><span className="text-primary/80">Means Something Real</span></h2>
                        <p className="text-white/60 text-lg font-outfit">
                            A certificate that says a learner watched a video and answered a multiple-choice quiz does not prove competency. It proves that someone completed a process. That is not the same thing.
                        </p>
                    </div>

                    <div className="space-y-12 max-w-5xl">
                        <div className="space-y-8 text-white/60 text-lg leading-relaxed font-outfit">
                            <p>
                                The IKON SKILLS™ binary verdict, <span className="text-white font-bold">Competent</span> or <span className="text-gold2 font-bold">Not Yet Competent</span>, is grounded in a principle that is both neuroscientifically sound and professionally meaningful: a learner should only be declared competent when they have demonstrated, repeatedly and consistently, that they can apply the skill in varied contexts.
                            </p>
                            <p>
                                The 75% threshold is not arbitrary. It is a <span className="text-white font-bold underline underline-offset-4 decoration-primary/30">minimum proof-of-mastery benchmark.</span> It means the practitioner has correctly applied the competency across the required range of questions and scenarios, not by luck, not by guessing, but by demonstrated understanding.
                            </p>
                        </div>

                        {/* Promise Quote Box */}
                        <div className="p-10 rounded-[32px] bg-primary/5 border border-primary/10 relative">
                            <div className="absolute -top-6 -left-4 text-7xl text-primary/10 font-serif leading-none">&quot;</div>
                            <p className="text-xl md:text-2xl text-white/90 font-outfit leading-relaxed italic border-l-2 border-primary/40 pl-8">
                                When an employer or institution sees an IKON SKILLS™ Micro-Credential, they are not looking at a certificate of attendance. They are looking at documented, AI-verified, loop-tested proof that this specific practitioner has demonstrated competency in each and every one of the 10 Core Competencies at a 75% benchmark. <span className="text-white font-bold">That is a credential that means something.</span>
                            </p>
                        </div>

                        {/* Footer Chips */}
                        <div className="flex flex-wrap gap-3">
                            {[
                                "PRE-TEST PROFILING", "CONCEPT ATTAINMENT", "FORMATIVE DIAGNOSTICS",
                                "PERSONALIZED REINFORCEMENT", "VERIFIED MASTERY", "ANTI-PASTE INTEGRITY",
                                "LANGUAGE ADAPTATION", "REAL-LIFE APPLICATION", "14 AIPS", "BINARY COMPETENCY VERDICT"
                            ].map((chip, i) => (
                                <span key={i} className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-primary/80 tracking-[1.5px] uppercase font-mono">
                                    {chip}
                                </span>
                            ))}
                        </div>
                    </div>
                </CommonWrapper>
            </section>
        </div>
    );
};
