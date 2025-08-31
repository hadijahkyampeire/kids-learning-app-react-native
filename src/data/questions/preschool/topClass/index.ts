import { topClassEnglishQuestions } from './english';
import { topClassMathQuestions } from './math';
import { topClassScienceQuestions } from './science';
import { topClassGeneralKnowledgeQuestions } from './generalKnowledge';
import { topClassReligionQuestions } from './religion';

export const topClassQuestions = [
  ...topClassEnglishQuestions,
  ...topClassMathQuestions,
  ...topClassScienceQuestions,
  ...topClassGeneralKnowledgeQuestions,
  ...topClassReligionQuestions
];

export {
  topClassEnglishQuestions,
  topClassMathQuestions,
  topClassScienceQuestions,
  topClassGeneralKnowledgeQuestions,
  topClassReligionQuestions
};