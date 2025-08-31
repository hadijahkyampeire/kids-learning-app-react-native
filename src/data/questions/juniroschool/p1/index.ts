import type { Question } from "../../../../types";
import { englishP1 } from "./english";
import { mathP1 } from "./math";
import { juniorSchoolP1GeneralKnowledgeQuestions } from "./generalKnowledge";
import { juniorSchoolP1ScienceQuestions } from "./science";
import { juniorSchoolP1ReligionQuestions } from "./religion";


export const juniorSchoolP1Questions: Question[] = [
  ...englishP1,
  ...mathP1,
  ...juniorSchoolP1GeneralKnowledgeQuestions,
  ...juniorSchoolP1ScienceQuestions,
  ...juniorSchoolP1ReligionQuestions
];

export * from "./english";
export * from "./math";
export * from "./science";
export * from "./generalKnowledge";
export * from "./religion";