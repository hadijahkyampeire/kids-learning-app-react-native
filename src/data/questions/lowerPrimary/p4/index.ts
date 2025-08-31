import { p4English } from "./english";
import { p4GeneralKnowledge } from "./generalKnowledge";
import { p4MathQuestions } from "./math";
import { p4Religion } from "./religion";
import { p4Science } from "./science";

export const p4Questions = [
  ...p4English,
  ...p4GeneralKnowledge,
  ...p4MathQuestions,
  ...p4Religion,
  ...p4Science
];