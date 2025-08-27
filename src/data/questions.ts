import { type Question } from "../types";
import { juniorSchoolQuestionsData } from "./questions/juniorschool";
import { lowerPrimaryQuestionsData } from "./questions/lowerprimary";
import { preSchoolQuestionsData } from "./questions/preschool";
import { upperPrimaryQuestionsData } from "./questions/upperprimary";

export const questionsData: {
  preSchool: Question[];
  juniorSchool: Question[];
  lowerPrimary: Question[];
  upperPrimary: Question[];
} = {
  preSchool: preSchoolQuestionsData,
  juniorSchool: juniorSchoolQuestionsData,
  lowerPrimary: lowerPrimaryQuestionsData,
  upperPrimary: upperPrimaryQuestionsData
};

