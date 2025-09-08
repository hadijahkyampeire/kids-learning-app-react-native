import type { Question } from "../../../../types";
import { p5EnglishQuestions } from "./english";
import { p5GeneralKnowledge } from "./generalKnowledge";
import { p5MathQuestions } from "./math";
import { p5ReligionQuestions } from "./religion";
import { p5ScienceQuestions } from "./science";

export const p5Questions: Question[] = [   
  ...p5EnglishQuestions,
  ...p5GeneralKnowledge,
  ...p5MathQuestions,
  ...p5ReligionQuestions,
  ...p5ScienceQuestions
];
