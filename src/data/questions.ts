import { type Question } from "../types";
import { juniorSchoolQuestions } from "./questions/juniroschool";
import { preschoolQuestions } from "./questions/preschool";
import { lowerPrimaryQuestions } from "./questions/lowerPrimary";
import { upperPrimaryQuestions } from "./questions/upperPrimary";

export const questionsData: {
  preSchool: Question[];
  juniorSchool: Question[];
  lowerPrimary: Question[];
  upperPrimary: Question[];
} = {
  preSchool: preschoolQuestions,
  juniorSchool: juniorSchoolQuestions,
  lowerPrimary: lowerPrimaryQuestions,
  upperPrimary: upperPrimaryQuestions
};

