import { type Question } from "../../../../types";

export const topClassMathQuestions: Question[] = [
  // Numbers and Counting (6 questions)
  {
    _id: "tp-math-nc-1",
    level: "preSchool",
    subject: "math",
    class: "top",
    topic: "Numbers and Counting",
    text: "Count the apples: 🍎🍎🍎🍎🍎. How many are there?",
    options: ["Four 4️⃣", "Five 5️⃣", "Six 6️⃣"],
    correct: "Five 5️⃣",
    type: "choice",
    feedback: { correct: "Great counting! There are 5 apples 🎯", incorrect: "Try counting the apples one by one 🔢" }
  },
  {
    _id: "tp-math-nc-2",
    level: "preSchool",
    subject: "math",
    class: "top",
    topic: "Numbers and Counting",
    text: "What number comes after seventeen (17)?",
    options: ["Sixteen 1️⃣6️⃣", "Eighteen 1️⃣8️⃣", "Nineteen 1️⃣9️⃣"],
    correct: "Eighteen 1️⃣8️⃣",
    type: "choice",
    feedback: { correct: "Yes! 18 comes after 17 ⭐", incorrect: "Remember to count up from 17 🔢" }
  },
  {
    _id: "tp-math-nc-3",
    level: "preSchool",
    subject: "math",
    class: "top",
    topic: "Numbers and Counting",
    text: "If you have 3️⃣ cookies and get 2️⃣ more, how many do you have?",
    options: ["Four 4️⃣", "Three 3️⃣", "Five 5️⃣"],
    correct: "Five 5️⃣",
    type: "choice",
    feedback: { correct: "Perfect! 3 + 2 = 5 cookies 🍪", incorrect: "Try counting: 3 cookies plus 2 more 🤔" }
  },
  {
    _id: "tp-math-nc-4",
    level: "preSchool",
    subject: "math",
    class: "top",
    topic: "Numbers and Counting",
    text: "Which group has more stars? ⭐⭐⭐ or ⭐⭐⭐⭐?",
    options: ["Same amount 🤔", "Four stars ⭐⭐⭐⭐", "Three stars ⭐⭐⭐"],
    correct: "Four stars ⭐⭐⭐⭐",
    type: "choice",
    feedback: { correct: "Yes! Four stars is more than three stars ⭐", incorrect: "Count each group of stars carefully 🔍" }
  },
  {
    _id: "tp-math-nc-5",
    level: "preSchool",
    subject: "math",
    class: "top",
    topic: "Numbers and Counting",
    text: "What number is one less than 10?",
    options: ["Eleven 1️⃣1️⃣", "Eight 8️⃣", "Nine 9️⃣"],
    correct: "Nine 9️⃣",
    type: "choice",
    feedback: { correct: "Correct! 9 is one less than 10 🎯", incorrect: "Count backward from 10 ⬅️" }
  },
  {
    _id: "tp-math-nc-6",
    level: "preSchool",
    subject: "math",
    class: "top",
    topic: "Numbers and Counting",
    text: "If you have 6️⃣ balloons and 2️⃣ pop, how many are left?",
    options: ["Four 4️⃣", "Five 5️⃣", "Three 3️⃣"],
    correct: "Four 4️⃣",
    type: "choice",
    feedback: { correct: "Yes! 6 - 2 = 4 balloons 🎈", incorrect: "Start with 6 and take away 2 ➖" }
  },

  // Shapes and Patterns (6 questions)
  {
    _id: "tp-math-sp-1",
    level: "preSchool",
    subject: "math",
    class: "top",
    topic: "Shapes and Patterns",
    text: "What shape has 4 equal sides? ⬜",
    options: ["Triangle 📐", "Circle ⭕", "Square ⬜"],
    correct: "Square ⬜",
    type: "choice",
    feedback: { correct: "Yes! A square has 4 equal sides ⬜", incorrect: "Look for a shape with 4 equal sides 👀" }
  },
  {
  _id: "tp-math-sp-2",
  level: "preSchool",
  subject: "math",
  class: "top",
  topic: "Shapes and Patterns",
  text: "Which colors are used in this pattern? 🔴🔵🔴🔵",
  options: ["Red 🔴", "Blue 🔵", "Green 🟢"],
  correct: ["Red 🔴", "Blue 🔵"],
  type: "multiChoice",
  feedback: {
    correct: "Great! This pattern is made with red and blue! 🎯",
    incorrect: "Look carefully at the repeating colors 🔄"
  }
},
  {
    _id: "tp-math-sp-3",
    level: "preSchool",
    subject: "math",
    class: "top",
    topic: "Shapes and Patterns",
    text: "How many corners does a triangle have? 📐",
    options: ["Four 4️⃣", "Three 3️⃣", "Five 5️⃣"],
    correct: "Three 3️⃣",
    type: "choice",
    feedback: { correct: "Yes! A triangle has 3 corners 📐", incorrect: "Count the points where the lines meet 👆" }
  },
  {
    _id: "tp-math-sp-4",
    level: "preSchool",
    subject: "math",
    class: "top",
    topic: "Shapes and Patterns",
    text: "What shape is like a ball? ⚽",
    options: ["Square ⬜", "Circle ⭕", "Triangle 📐"],
    correct: "Circle ⭕",
    type: "choice",
    feedback: { correct: "Yes! A ball is shaped like a circle ⭕", incorrect: "Think about what shape rolls 🤔" }
  },
  {
    _id: "tp-math-sp-5",
    level: "preSchool",
    subject: "math",
    class: "top",
    topic: "Shapes and Patterns",
    text: "Complete the pattern: 📐 ⬜ 📐 ⬜ 📐 ❓",
    options: ["Circle ⭕", "Square ⬜", "Triangle 📐"],
    correct: "Square ⬜",
    type: "choice",
    feedback: { correct: "Perfect! The pattern continues with a square ⬜", incorrect: "Watch how triangle and square alternate 🔄" }
  },
  {
    _id: "tp-math-sp-6",
    level: "preSchool",
    subject: "math",
    class: "top",
    topic: "Shapes and Patterns",
    text: "Which shape has no corners? ⭕",
    options: ["Circle ⭕", "Square ⬜", "Triangle 📐"],
    correct: "Circle ⭕",
    type: "choice",
    feedback: { correct: "Yes! A circle has no corners ⭕", incorrect: "Look for a shape that's completely round 🔄" }
  },

  // Addition and Subtraction (6 questions)
  {
    _id: "tp-math-as-1",
    level: "preSchool",
    subject: "math",
    class: "top",
    topic: "Addition and Subtraction",
    text: "If you have 4️⃣ candies and get 3️⃣ more, how many do you have?",
    options: ["Six 6️⃣", "Five 5️⃣", "Seven 7️⃣"],
    correct: "Seven 7️⃣",
    type: "choice",
    feedback: { correct: "Great! 4 + 3 = 7 candies 🍬", incorrect: "Count up from 4, adding 3 more 🔢" }
  },
  {
    _id: "tp-math-as-2",
    level: "preSchool",
    subject: "math",
    class: "top",
    topic: "Addition and Subtraction",
    text: "You have 8️⃣ toys and give 3️⃣ away. How many are left?",
    options: ["Four 4️⃣", "Six 6️⃣", "Five 5️⃣"],
    correct: "Five 5️⃣",
    type: "choice",
    feedback: { correct: "Yes! 8 - 3 = 5 toys 🧸", incorrect: "Start with 8 and take away 3 ➖" }
  },
  {
    _id: "tp-math-as-3",
    level: "preSchool",
    subject: "math",
    class: "top",
    topic: "Addition and Subtraction",
    text: "2️⃣ birds + 5️⃣ birds = ?",
    options: ["Six 6️⃣", "Eight 8️⃣", "Seven 7️⃣"],
    correct: "Seven 7️⃣",
    type: "choice",
    feedback: { correct: "Perfect! 2 + 5 = 7 birds 🐦", incorrect: "Count all the birds together 🔢" }
  },
  {
    _id: "tp-math-as-4",
    level: "preSchool",
    subject: "math",
    class: "top",
    topic: "Addition and Subtraction",
    text: "You have 9️⃣ cookies and eat 4️⃣. How many remain?",
    options: ["Five 5️⃣", "Six 6️⃣", "Four 4️⃣"],
    correct: "Five 5️⃣",
    type: "choice",
    feedback: { correct: "Yes! 9 - 4 = 5 cookies 🍪", incorrect: "Start with 9 and take away 4 ➖" }
  },
  {
    _id: "tp-math-as-5",
    level: "preSchool",
    subject: "math",
    class: "top",
    topic: "Addition and Subtraction",
    text: "3️⃣ red balls + 3️⃣ blue balls = ?",
    options: ["Six 6️⃣", "Five 5️⃣", "Seven 7️⃣"],
    correct: "Six 6️⃣",
    type: "choice",
    feedback: { correct: "Great! 3 + 3 = 6 balls ⚽", incorrect: "Count all the balls together 🔢" }
  },
  {
    _id: "tp-math-as-6",
    level: "preSchool",
    subject: "math",
    class: "top",
    topic: "Addition and Subtraction",
    text: "You have 7️⃣ stickers and use 2️⃣. How many are left?",
    options: ["Five 5️⃣", "Four 4️⃣", "Six 6️⃣"],
    correct: "Five 5️⃣",
    type: "choice",
    feedback: { correct: "Perfect! 7 - 2 = 5 stickers ⭐", incorrect: "Start with 7 and take away 2 ➖" }
  },

  // Time and Money (6 questions)
  {
    _id: "tp-math-tm-1",
    level: "preSchool",
    subject: "math",
    class: "top",
    topic: "Time and Money",
    text: "What time do we usually eat lunch? 🍽️",
    options: ["9:00 �", "12:00 �", "7:00 �"],
    correct: "12:00 🕐",
    type: "choice",
    feedback: { correct: "Yes! Lunch time is usually at 12:00 🍽️", incorrect: "Think about when you eat lunch at school 🤔" }
  },
  {
    _id: "tp-math-tm-2",
    level: "preSchool",
    subject: "math",
    class: "top",
    topic: "Time and Money",
    text: "How many minutes are in one hour? ⏰",
    options: ["45 minutes 4️⃣5️⃣", "30 minutes 3️⃣0️⃣", "60 minutes 6️⃣0️⃣"],
    correct: "60 minutes 6️⃣0️⃣",
    type: "choice",
    feedback: { correct: "Yes! There are 60 minutes in one hour ⏰", incorrect: "Remember the number of minutes in an hour 🕐" }
  },
  {
    _id: "tp-math-tm-3",
    level: "preSchool",
    subject: "math",
    class: "top",
    topic: "Time and Money",
    text: "Which is worth more? 💰",
    options: ["Penny 1¢", "Quarter 25¢", "Nickel 5¢"],
    correct: "Quarter 25¢",
    type: "choice",
    feedback: { correct: "Yes! A quarter (25¢) is worth the most 💰", incorrect: "Compare the value of each coin 🤔" }
  },
  {
    _id: "tp-math-tm-4",
    level: "preSchool",
    subject: "math",
    class: "top",
    topic: "Time and Money",
    text: "How many hours are in one day? 📅",
    options: ["12 hours 1️⃣2️⃣", "20 hours 2️⃣0️⃣", "24 hours 2️⃣4️⃣"],
    correct: "24 hours 2️⃣4️⃣",
    type: "choice",
    feedback: { correct: "Yes! There are 24 hours in a day ⏰", incorrect: "Think about a full day and night 🌞🌙" }
  },
  {
    _id: "tp-math-tm-5",
    level: "preSchool",
    subject: "math",
    class: "top",
    topic: "Time and Money",
    text: "How many pennies make a nickel? 💰",
    options: ["Three 3️⃣", "Four 4️⃣", "Five 5️⃣"],
    correct: "Five 5️⃣",
    type: "choice",
    feedback: { correct: "Yes! 5 pennies = 1 nickel 💰", incorrect: "Count how many pennies equal 5 cents 🤔" }
  },
  {
    _id: "tp-math-tm-6",
    level: "preSchool",
    subject: "math",
    class: "top",
    topic: "Time and Money",
    text: "What time do we usually wake up for school? ⏰",
    options: ["12:00 �", "7:00 �", "9:00 🕒"],
    correct: "7:00 🕖",
    type: "choice",
    feedback: { correct: "Yes! Most schools start around 7:00 ⏰", incorrect: "Think about when you get ready for school 🎒" }
  }
];