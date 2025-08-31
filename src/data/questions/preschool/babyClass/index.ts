import { babyClassEnglishQuestions } from './english';
import { babyClassMathQuestions } from './math';
import { babyClassScienceQuestions } from './science';
import { babyClassGeneralKnowledgeQuestions } from './generalKnowledge';
import { babyClassReligionQuestions } from './religion';

export const babyClassQuestions = [
  ...babyClassEnglishQuestions,
  ...babyClassMathQuestions,
  ...babyClassScienceQuestions,
  ...babyClassGeneralKnowledgeQuestions,
  ...babyClassReligionQuestions
];

export {
  babyClassEnglishQuestions,
  babyClassMathQuestions,
  babyClassScienceQuestions,
  babyClassGeneralKnowledgeQuestions,
  babyClassReligionQuestions
};