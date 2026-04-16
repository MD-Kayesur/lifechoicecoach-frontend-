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

    return (
        <div className="min-h-screen pt-[62px] bg-[#020617]">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center overflow-hidden">
                {/* Background Grid & Effects */}
                <div className="absolute inset-0 pointer-events-none opacity-30"
                    style={{
                        backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)`,
                        backgroundSize: '4rem 4rem',
                        maskImage: 'radial-gradient(ellipse 60% 50% at 50% 50%, #000 70%, transparent 100%)'
                    }}
                />
                <div className="absolute top-[-150px] right-[-150px] w-[900px] h-[900px] rounded-full
                 bg-[radial-gradient(circle,rgba(203,45,57,0.1)_0%,transparent_65%)] pointer-events-none" />
                <div className="absolute bottom-[-200px] left-[-100px] w-[900px] h-[900px] rounded-full bg-[radial-gradient(circle,rgba(26,58,107,0.3)_0%,transparent_70%)] pointer-events-none" />

                <CommonWrapper className="relative z-10 max-w-[1200px] px-[48px] py-[80px]">
                    <div className="max-w-[850px]">
                        <div className="inline-flex items-center gap-[8px] bg-primary border-none px-[16px] py-[6px] rounded-full mb-[26px] shadow-[0_4px_0_#8a1e27,0_6px_10px_rgba(0,0,0,0.35)]">
                            <div className="w-[6px] h-[6px] bg-white rounded-full blink" />
                            <span className="text-[11px] font-bold text-white tracking-[1.6px] uppercase font-mono">
                                IKON SKILLS™ · NEUROSCIENCE OF LEARNING
                            </span>
                        </div>
                        <h1 className="font-cormorant font-bold text-[clamp(38px,4.8vw,72px)] leading-[1.08] text-white mb-[28px]">
                            Every brain <br />
                            <span className="text-gold2 italic italic">is different.</span> <br />
                            <span className="text-white">Every learner gets proof.</span>
                        </h1>
                        <p className="text-[17px] leading-[1.8] text-white/60 max-w-[650px] mb-[42px] font-outfit">
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
            <section className="py-[100px] border-t border-white/5 bg-[#050a14]/30">
                <CommonWrapper className="max-w-[1200px] px-[48px]">
                    <div className="grid lg:grid-cols-[1fr_420px] gap-[80px] items-start">
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <div className="text-[10.5px] text-primary/80 font-bold uppercase tracking-[4px] font-mono">THE STARTING POINT</div>
                                <h2 className="font-cormorant font-bold text-[clamp(32px,3.5vw,48px)] leading-[1.15] text-white">Same Micro-Credential. <br /><span className="text-gold2 italic">Different Starting Points.</span></h2>
                            </div>
                            <div className="space-y-6 text-white/60 text-[16px] leading-[1.8] font-outfit">
                                <p>
                                    Imagine ten people enrolling in the same IKON SKILLS™ Micro-Credential at exactly the same time. They all have the same 10 Core Competencies to master. The benchmark is the same for everyone: <span className="text-white font-bold underline decoration-primary/30">75% proof of competency</span> before the credential is awarded.
                                </p>
                                <p>
                                    But here is the key insight from neuroscience: <span className="text-primary font-bold">no two human brains arrive at the same place.</span> One learner may already know three of the ten competencies well. Another may be completely new. A third speaks English as a fourth language. A fourth learns best through stories and real examples. A fifth has strong technical skill but has never been formally assessed before.
                                </p>
                                <p>
                                    Traditional learning ignores all of this. It delivers the same video, the same quiz, the same experience to everyone and calls it &quot;education.&quot; IKON SKILLS™ does something completely different. It maps the mind before the first lesson begins.
                                </p>
                            </div>
                            <div className="inline-flex items-center gap-3 px-[20px] py-[12px] rounded-xl bg-primary/10 border border-primary/20">
                                <CheckCircle2 className="w-5 h-5 text-primary" />
                                <span className="text-[14px] font-medium text-white/90 font-outfit">75% Verified Competency Threshold • Binary Verdict: Competent</span>
                            </div>
                        </div>

                        <div className="grid gap-6">
                            {[
                                { val: "10", label: "Core Competencies", sub: "Per Micro-Credential" },
                                { val: "14", label: "AI  Interaction  Points", sub: "Assessment Consistency" },
                                { val: "∞", label: "Personalized Paths", sub: "Unlimited Learning journeys" }
                            ].map((stat, i) => (
                                <div key={i} className="p-8 rounded-[20px] bg-white/[0.03] border border-white/10 relative overflow-hidden group hover:bg-white/[0.06] transition-all">
                                    <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity">
                                        <Layers className="w-24 h-24" />
                                    </div>
                                    <div className="text-5xl font-bold text-primary mb-2 leading-none font-cormorant">{stat.val}</div>
                                    <div className="text-[16px] font-bold text-white uppercase tracking-tight mb-1 font-outfit">{stat.label}</div>
                                    <div className="text-[10px] text-white/40 font-mono tracking-widest uppercase">{stat.sub}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </CommonWrapper>
            </section>

            {/* Section 2: Practitioners */}
            <section className="py-[100px] relative">
                <CommonWrapper className="max-w-[1200px] px-[48px]">
                    <div className="text-center mb-16 space-y-4">
                        <div className="text-[10.5px] text-primary/80 font-bold uppercase tracking-[4px] font-mono">THE 10 IKON PRACTITIONERS</div>
                        <h2 className="font-cormorant font-bold text-[clamp(28px,3.2vw,44px)] leading-[1.2] text-white">Same Start Time. <span className="text-gold2 italic">Ten Different Brains.</span></h2>
                        <p className="text-white/60 text-[16px] leading-[1.8] max-w-2xl mx-auto font-outfit text-center">
                            All ten begin at the same moment. The AI engine immediately begins profiling each one before teaching a single word.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        {practitioners.map((p, i) => (
                            <div key={i} className="p-6 rounded-[18px] bg-white/5 border border-white/10 text-center space-y-4 hover:border-primary/40 transition-all group backdrop-blur-[6px]">
                                <div className="text-4xl group-hover:scale-110 transition-transform duration-300">{p.emoji}</div>
                                <div>
                                    <div className="font-bold text-white font-outfit text-[15px]">{p.name}</div>
                                    <div className="text-[9px] text-white/40 font-mono uppercase tracking-wider">{p.country} · {p.level}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 p-[40px] rounded-[24px] bg-primary/5 border border-primary/10 text-center max-w-4xl mx-auto">
                        <p className="text-white/70 italic leading-[1.8] font-outfit text-[17px]">
                            Each of these ten practitioners gets a completely different experience, even though they are learning the exact same Core Competencies. Here is why this is not just a feature. <span className="text-white font-bold">It is a reflection of how the human brain actually learns.</span>
                        </p>
                    </div>
                </CommonWrapper>
            </section>

            {/* Section 3: Brain Science */}
            <section id="science" className="py-[120px] relative overflow-hidden bg-[#020617]">
                <CommonWrapper className="max-w-[1200px] px-[48px]">
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

            {/* Section 4: Learning Loop */}
            <section className="py-[120px] relative overflow-hidden bg-[#020617] border-t border-white/5">
                <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
                <CommonWrapper className="max-w-[1200px] px-[48px]">
                    <div className="text-center mb-24 space-y-4">
                        <div className="text-[10.5px] text-primary/80 font-bold uppercase tracking-[4px] font-mono">THE LEARNING LOOP</div>
                        <h2 className="font-cormorant font-bold text-[clamp(28px,3.2vw,48px)] leading-[1.2] text-white">
                            This Is What Happens <span className="text-gold2 italic">Inside Every Competency</span>
                        </h2>
                        <p className="text-white/60 text-[16px] leading-[1.8] max-w-3xl mx-auto font-outfit text-center">
                            Each of the 10 Core Competencies within a Micro-Credential follows this learning loop. The loop repeats until competency is proven at 75%. There is no shortcut. There is no skipping ahead.
                        </p>
                    </div>

                    <div className="relative mb-28">
                        {/* Desktop Connector Arrows */}
                        <div className="hidden lg:flex absolute top-[30px] left-[10%] right-[10%] justify-between items-center z-0">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="text-primary/30 text-2xl">→</div>
                            ))}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 lg:gap-4 relative z-10 text-center">
                            {[
                                { title: "PRE-TEST", icon: "🧪", desc: "The AI checks what the practitioner already knows. No assumptions. Clean baseline." },
                                { title: "PERSONALIZED TEACHING", icon: "🎯", desc: "Content, language, examples, and depth are matched to this learner's level in real time." },
                                { title: "FORMATIVE ASSESSMENT", icon: "🔍", desc: "A diagnostic check; not to grade, but to understand what the brain has absorbed and what gaps remain." },
                                { title: "REINFORCEMENT", icon: "🔄", desc: "Gaps are addressed immediately. The concept is re-taught differently, not repeated the same way." },
                                { title: "VERIFIED MASTERY", icon: "✅", desc: "75% competency proven. Only then does the practitioner move to the next Core Competency.", badge: "COMPETENT" }
                            ].map((step, i) => (
                                <div key={i} className="space-y-6 flex flex-col items-center group">
                                    <div className="w-[68px] h-[68px] rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-3xl shadow-xl group-hover:border-primary/50 transition-all duration-300">
                                        {step.icon}
                                    </div>
                                    <div className="space-y-3">
                                        <h4 className="text-[10.5px] font-bold text-primary tracking-[2px] uppercase font-mono">{step.title}</h4>
                                        <p className="text-white/50 text-[14px] leading-relaxed max-w-[190px] mx-auto group-hover:text-white/70 transition-colors font-outfit">{step.desc}</p>
                                        {step.badge && (
                                            <div className="pt-2">
                                                <span className="inline-block px-4 py-1 rounded bg-primary text-[9.5px] font-bold text-white tracking-[2px] uppercase shadow-lg shadow-primary/20 font-mono">
                                                    {step.badge}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-20 p-[60px] rounded-[32px] bg-white/[0.03] border border-white/10 relative overflow-hidden max-w-5xl mx-auto group backdrop-blur-[4px]">
                        <div className="absolute top-0 left-0 p-8 text-primary/5 select-none group-hover:text-primary/10 transition-all">
                            <span className="text-8xl font-serif">“</span>
                        </div>
                        <p className="text-[19px] md:text-[22px] text-white/80 font-outfit leading-[1.7] relative z-10 text-center px-4 md:px-12 italic">
                            This loop is not just a system feature. It mirrors the natural learning cycle of the human brain: <span className="text-white font-bold not-italic">encounter, process, test, correct, consolidate.</span> Skip any step, and learning becomes shallow. Run all steps, and the learner builds real competency that lasts well beyond the assessment.
                        </p>
                    </div>
                </CommonWrapper>
            </section>

            {/* Section 5: Concept Attainment */}
            <section className="py-[120px] bg-[#050a14]/20 border-t border-white/5">
                <CommonWrapper className="max-w-[1200px] px-[48px]">
                    <div className="max-w-[850px] mb-20 space-y-4">
                        <div className="text-[10.5px] text-primary/80 font-bold uppercase tracking-[4px] font-mono">CONCEPT ATTAINMENT</div>
                        <h2 className="font-cormorant font-bold text-[clamp(28px,3.2vw,48px)] leading-[1.2] text-white">Teaching Until the Brain <br /><span className="text-gold2 italic">Actually Gets It</span></h2>
                        <div className="space-y-6 text-white/60 text-[16px] leading-[1.8] font-outfit">
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
                            <div key={i} className="p-10 rounded-[24px] bg-white/5 border border-white/10 space-y-6 hover:border-primary/40 transition-all group backdrop-blur-[6px]">
                                <div className="text-4xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors font-mono">{card.id}</div>
                                <div className="space-y-4">
                                    <h3 className="text-[19px] font-bold text-white uppercase tracking-tight font-outfit">{card.title}</h3>
                                    <p className="text-white/60 text-[15px] leading-relaxed font-outfit">{card.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </CommonWrapper>
            </section>

            {/* Section 6: AI Integrity Engine */}
            <section className="py-[120px] relative overflow-hidden bg-[#020617] border-t border-white/5">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[180px] pointer-events-none" />
                <CommonWrapper className="max-w-[1200px] px-[48px]">
                    <div className="text-center mb-24 space-y-4">
                        <div className="text-[10.5px] text-primary/80 font-bold uppercase tracking-[4px] font-mono">AI INTEGRITY ENGINE</div>
                        <h2 className="font-cormorant font-bold text-[clamp(28px,3.2vw,48px)] leading-[1.2] text-white">The AI Knows You. <span className="text-gold2 italic">From the First Response.</span></h2>
                        <p className="text-white/60 text-[16px] max-w-3xl mx-auto font-outfit leading-[1.8] text-center">
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
                            <div key={i} className="p-12 rounded-[28px] bg-white/5 border border-white/10 space-y-8 relative group hover:border-primary/40 transition-all backdrop-blur-[6px]">
                                <div className="text-6xl font-bold text-primary/5 absolute top-8 left-10 group-hover:text-primary/10 transition-colors font-cormorant">{card.id}</div>
                                <div className="space-y-4 pt-12">
                                    <h3 className="text-[22px] font-bold text-white font-outfit">{card.title}</h3>
                                    <p className="text-white/60 leading-[1.75] font-outfit text-[15px]">{card.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Academic Integrity Box */}
                    <div className="mt-20 p-10 md:p-14 rounded-[32px] bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 mx-auto space-y-10 backdrop-blur-[6px]">
                        <div className="flex items-center gap-5 text-primary">
                            <ShieldCheck className="w-10 h-10" />
                            <h3 className="text-[24px] md:text-[28px] font-bold font-cormorant">Academic Integrity: Why copying from another AI does not work</h3>
                        </div>
                        <div className="grid gap-8 text-white/60 text-[16px] leading-[1.8] font-outfit">
                            <p>
                                Some learners may attempt to copy a response generated by another AI tool on a separate device and paste it into the IKON SKILLS™ assessment. Here is why this strategy fails, not because of a simple plagiarism checker, but because of how deeply the AI understands the practitioner.
                            </p>
                            <p>
                                By the time a practitioner reaches an assessment question, the AI already has a detailed profile: how this person writes, what vocabulary they use, how they structure ideas, and what gaps they have shown. A response generated by a general AI tool will almost certainly <span className="text-white font-bold underline decoration-primary/40 underline-offset-4">not match this established profile.</span> The language will be too formal, too structured, or too advanced. The AI engine will detect this inconsistency immediately.
                            </p>
                            <p>
                                Furthermore, the assessment questions themselves are <span className="text-white font-bold">algorithmically personalized.</span> They are drawn from a question bank and sequenced based on the specific learner&apos;s progress. A general AI tool without access to this context cannot generate a contextually accurate answer.
                            </p>
                            <p className="border-t border-white/10 pt-8 text-[#49cbc7] font-medium italic text-[18px]">
                                This is not a system trying to catch cheaters after the fact. It is a system that knows each learner so well that inauthenticity becomes visible the moment it appears.
                            </p>
                        </div>
                    </div>
                </CommonWrapper>
            </section>

            {/* Section 7: Proof of Skill Promise */}
            <section className="py-[120px] bg-[#020617] border-t border-white/5 overflow-hidden">
                <CommonWrapper className="max-w-[1200px] px-[48px]">
                    <div className="max-w-4xl mb-20 space-y-4">
                        <div className="text-[10.5px] text-primary/80 font-bold uppercase tracking-[4px] font-mono">THE PROOF OF SKILL PROMISE</div>
                        <h2 className="font-cormorant font-bold text-[clamp(28px,3.2vw,48px)] leading-[1.2] text-white">Why 75% Proven Competency <br /><span className="text-gold2 italic">Means Something Real</span></h2>
                        <p className="text-white/60 text-[18px] font-outfit leading-[1.75]">
                            A certificate that says a learner watched a video and answered a multiple-choice quiz does not prove competency. It proves that someone completed a process. That is not the same thing.
                        </p>
                    </div>

                    <div className="space-y-16 max-w-5xl">
                        <div className="space-y-8 text-white/60 text-[16px] leading-[1.85] font-outfit">
                            <p>
                                The IKON SKILLS™ binary verdict, <span className="text-white font-bold">Competent</span> or <span className="text-gold2 font-bold">Not Yet Competent</span>, is grounded in a principle that is both neuroscientifically sound and professionally meaningful: a learner should only be declared competent when they have demonstrated, repeatedly and consistently, that they can apply the skill in varied contexts.
                            </p>
                            <p>
                                The 75% threshold is not arbitrary. It is a <span className="text-white font-bold underline underline-offset-4 decoration-primary/30">minimum proof-of-mastery benchmark.</span> It means the practitioner has correctly applied the competency across the required range of questions and scenarios, not by luck, not by guessing, but by demonstrated understanding.
                            </p>
                        </div>

                        {/* Promise Quote Box */}
                        <div className="p-12 md:p-16 rounded-[40px] bg-primary/5 border border-primary/10 relative backdrop-blur-[6px]">
                            <div className="absolute -top-6 -left-4 text-8xl text-primary/10 font-serif leading-none">&quot;</div>
                            <p className="text-[20px] md:text-[24px] text-white/95 font-cormorant leading-[1.65] italic border-l-4 border-primary/40 pl-10 shadow-sm">
                                When an employer or institution sees an IKON SKILLS™ Micro-Credential, they are not looking at a certificate of attendance. They are looking at documented, AI-verified, loop-tested proof that this specific practitioner has demonstrated competency in each and every one of the 10 Core Competencies at a 75% benchmark. <span className="text-white font-bold not-italic">That is a credential that means something.</span>
                            </p>
                        </div>

                        {/* Footer Chips */}
                        <div className="flex flex-wrap gap-4 pt-10 border-t border-white/5">
                            {[
                                "PRE-TEST PROFILING", "CONCEPT ATTAINMENT", "FORMATIVE DIAGNOSTICS",
                                "PERSONALIZED REINFORCEMENT", "VERIFIED MASTERY", "ANTI-PASTE INTEGRITY",
                                "LANGUAGE ADAPTATION", "REAL-LIFE APPLICATION", "14 AIPS", "BINARY COMPETENCY VERDICT"
                            ].map((chip, i) => (
                                <span key={i} className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-primary tracking-[2px] uppercase font-mono shadow-sm">
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
