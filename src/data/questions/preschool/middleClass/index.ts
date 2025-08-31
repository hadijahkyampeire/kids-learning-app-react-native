import { middleClassEnglishQuestions } from './english';
import { middleClassMathQuestions } from './math';
import { middleClassScienceQuestions } from './science';
import { middleClassArtQuestions } from './art';
import { middleClassGeneralKnowledgeQuestions } from './generalKnowledge';
import { middleClassReligionQuestions } from './religion';

export const middleClassQuestions = [
  ...middleClassEnglishQuestions,
  ...middleClassMathQuestions,
  ...middleClassScienceQuestions,
  ...middleClassArtQuestions,
  ...middleClassGeneralKnowledgeQuestions,
  ...middleClassReligionQuestions
];

export {
  middleClassEnglishQuestions,
  middleClassMathQuestions,
  middleClassScienceQuestions,
  middleClassArtQuestions,
  middleClassGeneralKnowledgeQuestions,
  middleClassReligionQuestions
};