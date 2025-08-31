import { 
  babyClassQuestions, 
  babyClassEnglishQuestions,
  babyClassMathQuestions,
  babyClassScienceQuestions,
  babyClassGeneralKnowledgeQuestions,
  babyClassReligionQuestions
} from './babyClass';

import {
  middleClassQuestions,
  middleClassEnglishQuestions,
  middleClassMathQuestions,
  middleClassScienceQuestions,
  middleClassGeneralKnowledgeQuestions,
  middleClassReligionQuestions
} from './middleClass';

import {
  topClassQuestions,
  topClassEnglishQuestions,
  topClassMathQuestions,
  topClassScienceQuestions,
  topClassGeneralKnowledgeQuestions,
  topClassReligionQuestions
} from './topClass';

// Export individual subject questions for each class
export {
  // Baby Class Exports
  babyClassQuestions,
  babyClassEnglishQuestions,
  babyClassMathQuestions,
  babyClassScienceQuestions,
  babyClassGeneralKnowledgeQuestions,

  // Middle Class Exports
  middleClassQuestions,
  middleClassEnglishQuestions,
  middleClassMathQuestions,
  middleClassScienceQuestions,
  middleClassGeneralKnowledgeQuestions,

  // Top Class Exports
  topClassQuestions,
  topClassEnglishQuestions,
  topClassMathQuestions,
  topClassScienceQuestions,
  topClassGeneralKnowledgeQuestions
};

// Export all preschool questions combined
export const preschoolQuestions = [
  ...babyClassQuestions,
  ...middleClassQuestions,
  ...topClassQuestions
];

