"use client";

import { NeuroscienceHero } from "./Neuroscience/NeuroscienceHero";
import { StartingPoint } from "./Neuroscience/StartingPoint";
import { Practitioners } from "./Neuroscience/Practitioners";
import { BrainScience } from "./Neuroscience/BrainScience";
import { LearningLoop } from "./Neuroscience/LearningLoop";
import { ConceptAttainment } from "./Neuroscience/ConceptAttainment";
import { IntegrityEngine } from "./Neuroscience/IntegrityEngine";
import { SkillPromise } from "./Neuroscience/SkillPromise";

export const Neuroscience = () => {
    return (
        <div className="min-h-screen pt-[62px] bg-[#020617]">
            <NeuroscienceHero />
            <StartingPoint />
            <Practitioners />
            <BrainScience />
            <LearningLoop />
            <ConceptAttainment />
            <IntegrityEngine />
            <SkillPromise />
        </div>
    );
};
