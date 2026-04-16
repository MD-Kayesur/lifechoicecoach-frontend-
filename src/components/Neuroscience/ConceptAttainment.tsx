"use client";

import CommonWrapper from "@/common/CommonWrapper";

export const ConceptAttainment = () => {
    return (
        <section className="py-[80px] md:py-[120px] bg-[#050a14]/20 border-t border-white/5">
            <CommonWrapper className="max-w-[1200px] px-5 md:px-[48px]">
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
                            <div className="text-4xl font-bold text-primary/20 group-hover:text-primary/30 transition-colors font-mono">{card.id}</div>
                            <div className="space-y-4">
                                <h3 className="text-[19px] font-bold text-white uppercase tracking-tight font-outfit">{card.title}</h3>
                                <p className="text-white/60 text-[15px] leading-relaxed font-outfit">{card.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </CommonWrapper>
        </section>
    );
};
