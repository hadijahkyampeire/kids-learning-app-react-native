import { type Question } from "../../../../types";

export const middleClassMathQuestions: Question[] = [
  // Number Recognition Topic (6 questions)
  {
    _id: "md-math-nr-1",
    level: "preSchool",
    subject: "math",
    class: "middle",
    topic: "Number Recognition",
    text: "What number comes after 5?",
    options: ["6", "4", "3"],
    correct: "6",
    feedback: { correct: "Yes! 6 comes after 5.", incorrect: "Count forward from 5." }
  },
  {
    _id: "md-math-nr-2",
    level: "preSchool",
    subject: "math",
    class: "middle",
    topic: "Number Recognition",
    text: "Which is the biggest number?",
    options: ["9", "3", "6"],
    correct: "9",
    feedback: { correct: "Yes! 9 is bigger than 3 and 6.", incorrect: "Look for the largest number." }
  },
  {
    _id: "md-math-nr-3",
    level: "preSchool",
    subject: "math",
    class: "middle",
    topic: "Number Recognition",
    text: "What number comes before 4?",
    options: ["3", "5", "2"],
    correct: "3",
    feedback: { correct: "Yes! 3 comes before 4.", incorrect: "Count backward from 4." }
  },
  {
    _id: "md-math-nr-4",
    level: "preSchool",
    subject: "math",
    class: "middle",
    topic: "Number Recognition",
    text: "Which is the smallest number?",
    options: ["1", "7", "4"],
    correct: "1",
    feedback: { correct: "Yes! 1 is smaller than 7 and 4.", incorrect: "Look for the smallest number." }
  },
  {
    _id: "md-math-nr-5",
    level: "preSchool",
    subject: "math",
    class: "middle",
    topic: "Number Recognition",
    text: "What number is between 6 and 8?",
    options: ["7", "5", "9"],
    correct: "7",
    feedback: { correct: "Yes! 7 is between 6 and 8.", incorrect: "Count: 6, _, 8" }
  },
  {
    _id: "md-math-nr-6",
    level: "preSchool",
    subject: "math",
    class: "middle",
    topic: "Number Recognition",
    text: "Which number is zero?",
    options: ["0", "10", "1"],
    correct: "0",
    feedback: { correct: "Yes! That's zero (0).", incorrect: "Zero looks like a circle." }
  },

  // Basic Addition Topic (6 questions)
  {
    _id: "md-math-ba-1",
    level: "preSchool",
    subject: "math",
    class: "middle",
    topic: "Basic Addition",
    text: "How many are 2 apples and 1 apple together?",
    options: ["3", "2", "4"],
    correct: "3",
    feedback: { correct: "Yes! 2 + 1 = 3", incorrect: "Count all the apples together." }
  },
  {
    _id: "md-math-ba-2",
    level: "preSchool",
    subject: "math",
    class: "middle",
    topic: "Basic Addition",
    text: "What is 1 + 1?",
    options: ["2", "1", "3"],
    correct: "2",
    feedback: { correct: "Yes! 1 + 1 = 2", incorrect: "Count: one plus one more." }
  },
  {
    _id: "md-math-ba-3",
    level: "preSchool",
    subject: "math",
    class: "middle",
    topic: "Basic Addition",
    text: "How many are 3 birds and 2 birds?",
    options: ["5", "4", "6"],
    correct: "5",
    feedback: { correct: "Yes! 3 + 2 = 5", incorrect: "Count all birds together." }
  },
  {
    _id: "md-math-ba-4",
    level: "preSchool",
    subject: "math",
    class: "middle",
    topic: "Basic Addition",
    text: "What is 2 + 2?",
    options: ["4", "3", "5"],
    correct: "4",
    feedback: { correct: "Yes! 2 + 2 = 4", incorrect: "Count: two plus two more." }
  },
  {
    _id: "md-math-ba-5",
    level: "preSchool",
    subject: "math",
    class: "middle",
    topic: "Basic Addition",
    text: "How many are 4 flowers and 1 flower?",
    options: ["5", "4", "6"],
    correct: "5",
    feedback: { correct: "Yes! 4 + 1 = 5", incorrect: "Count all flowers together." }
  },
  {
    _id: "md-math-ba-6",
    level: "preSchool",
    subject: "math",
    class: "middle",
    topic: "Basic Addition",
    text: "What is 3 + 3?",
    options: ["6", "5", "4"],
    correct: "6",
    feedback: { correct: "Yes! 3 + 3 = 6", incorrect: "Count: three plus three more." }
  },

  // Shapes & Patterns Topic (6 questions)
  {
    _id: "md-math-sp-1",
    level: "preSchool",
    subject: "math",
    class: "middle",
    topic: "Shapes & Patterns",
    text: "Which shape has 4 equal sides?",
    options: ["Square", "Triangle", "Circle"],
    correct: "Square",
    feedback: { correct: "Yes! A square has 4 equal sides.", incorrect: "Count the sides of a square." }
  },
  {
    _id: "md-math-sp-2",
    level: "preSchool",
    subject: "math",
    class: "middle",
    topic: "Shapes & Patterns",
    text: "What shape is round like a ball?",
    options: ["Circle", "Square", "Triangle"],
    correct: "Circle",
    feedback: { correct: "Yes! A circle is round.", incorrect: "Think of a round shape." }
  },
  {
    _id: "md-math-sp-3",
    level: "preSchool",
    subject: "math",
    class: "middle",
    topic: "Shapes & Patterns",
    text: "How many corners does a triangle have?",
    options: ["3", "4", "5"],
    correct: "3",
    feedback: { correct: "Yes! A triangle has 3 corners.", incorrect: "Count the points of a triangle." }
  },
  {
    _id: "md-math-sp-4",
    level: "preSchool",
    subject: "math",
    class: "middle",
    topic: "Shapes & Patterns",
    text: "What comes next: Square, Circle, Square, Circle, ___?",
    options: ["Square", "Triangle", "Rectangle"],
    correct: "Square",
    feedback: { correct: "Yes! The pattern repeats: Square, Circle.", incorrect: "Look at how the pattern repeats." }
  },
  {
    _id: "md-math-sp-5",
    level: "preSchool",
    subject: "math",
    class: "middle",
    topic: "Shapes & Patterns",
    text: "Which shape has 3 sides?",
    options: ["Triangle", "Square", "Circle"],
    correct: "Triangle",
    feedback: { correct: "Yes! A triangle has 3 sides.", incorrect: "Count the sides of a triangle." }
  },
  {
    _id: "md-math-sp-6",
    level: "preSchool",
    subject: "math",
    class: "middle",
    topic: "Shapes & Patterns",
    text: "What comes next: Red, Blue, Red, Blue, ___?",
    options: ["Red", "Green", "Yellow"],
    correct: "Red",
    feedback: { correct: "Yes! The pattern continues with Red.", incorrect: "Look at how the colors repeat." }
  },

  // Basic Counting Topic (6 questions)
  {
    _id: "md-math-bc-1",
    level: "preSchool",
    subject: "math",
    class: "middle",
    topic: "Basic Counting",
    text: "How many fingers do you have on one hand?",
    options: ["5", "4", "6"],
    correct: "5",
    feedback: { correct: "Yes! We have 5 fingers on each hand.", incorrect: "Count your fingers on one hand." }
  },
  {
    _id: "md-math-bc-2",
    level: "preSchool",
    subject: "math",
    class: "middle",
    topic: "Basic Counting",
    text: "Count the stars: ⭐⭐⭐",
    options: ["3", "2", "4"],
    correct: "3",
    feedback: { correct: "Yes! There are 3 stars.", incorrect: "Count each star one by one." }
  },
  {
    _id: "md-math-bc-3",
    level: "preSchool",
    subject: "math",
    class: "middle",
    topic: "Basic Counting",
    text: "How many days are in a week?",
    options: ["7", "5", "6"],
    correct: "7",
    feedback: { correct: "Yes! There are 7 days in a week.", incorrect: "Count all days from Sunday to Saturday." }
  },
  {
    _id: "md-math-bc-4",
    level: "preSchool",
    subject: "math",
    class: "middle",
    topic: "Basic Counting",
    text: "Count the dots: • • • •",
    options: ["4", "3", "5"],
    correct: "4",
    feedback: { correct: "Yes! There are 4 dots.", incorrect: "Count each dot one by one." }
  },
  {
    _id: "md-math-bc-5",
    level: "preSchool",
    subject: "math",
    class: "middle",
    topic: "Basic Counting",
    text: "How many colors are in a rainbow?",
    options: ["7", "5", "6"],
    correct: "7",
    feedback: { correct: "Yes! A rainbow has 7 colors.", incorrect: "Count: red, orange, yellow, green, blue, indigo, violet." }
  },
  {
    _id: "md-math-bc-6",
    level: "preSchool",
    subject: "math",
    class: "middle",
    topic: "Basic Counting",
    text: "Count the squares: ⬛⬛⬛⬛⬛",
    options: ["5", "4", "6"],
    correct: "5",
    feedback: { correct: "Yes! There are 5 squares.", incorrect: "Count each square one by one." }
  }
];