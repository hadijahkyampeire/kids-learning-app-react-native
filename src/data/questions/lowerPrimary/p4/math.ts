import { type Question } from "../../../../types";

export const p4MathQuestions: Question[] = [
  // Place Value (7 questions)
  {
    _id: "lp-p4-math-pv-1",
    level: "lowerPrimary",
    subject: "math",
    class: "p4",
    topic: "Place Value",
    text: "What is the place value of 4 in 3,456? 🔢",
    options: ["Hundreds 💯", "Tens 🔟", "Ones 1️⃣"],
    correct: "Hundreds 💯",
    feedback: { correct: "Yes! In 3,456, the 4 is in the hundreds place 💯", incorrect: "Look at the position from right to left: ones, tens, hundreds, thousands" }
  },
  {
    _id: "lp-p4-math-pv-2",
    level: "lowerPrimary",
    subject: "math",
    class: "p4",
    topic: "Place Value",
    text: "What number has 5 hundreds, 3 tens, and 2 ones? 🔢",
    options: ["532", "352", "523"],
    correct: "532",
    feedback: { correct: "Great! 5 hundreds (500) + 3 tens (30) + 2 ones (2) = 532", incorrect: "Remember: hundreds, tens, then ones" }
  },
  {
    _id: "lp-p4-math-pv-3",
    level: "lowerPrimary",
    subject: "math",
    class: "p4",
    topic: "Place Value",
    text: "In 2,789, what digit is in the tens place? 🔢",
    options: ["8", "7", "9"],
    correct: "8",
    feedback: { correct: "Yes! In 2,789, 8 is in the tens place", incorrect: "Count from right: ones (9), tens (8), hundreds (7), thousands (2)" }
  },
  {
    _id: "lp-p4-math-pv-4",
    level: "lowerPrimary",
    subject: "math",
    class: "p4",
    topic: "Place Value",
    text: "What is 1,000 + 500 + 40 + 3? 🔢",
    options: ["1,543", "1,453", "1,534"],
    correct: "1,543",
    feedback: { correct: "Perfect! 1,000 + 500 + 40 + 3 = 1,543", incorrect: "Add each place value: thousands, hundreds, tens, ones" }
  },
  {
    _id: "lp-p4-math-pv-5",
    level: "lowerPrimary",
    subject: "math",
    class: "p4",
    topic: "Place Value",
    text: "Which number has the greatest value in 4,567? 🔢",
    options: ["4", "7", "6"],
    correct: "4",
    feedback: { correct: "Yes! 4 is worth 4,000, which is the largest value", incorrect: "The leftmost digit has the greatest place value" }
  },
  {
    _id: "lp-p4-math-pv-6",
    level: "lowerPrimary",
    subject: "math",
    class: "p4",
    topic: "Place Value",
    text: "What is 7 tens + 3 hundreds + 5 ones? 🔢",
    options: ["375", "357", "735"],
    correct: "375",
    feedback: { correct: "Yes! 3 hundreds (300) + 7 tens (70) + 5 ones (5) = 375", incorrect: "Arrange in order: hundreds, tens, ones" }
  },
  {
    _id: "lp-p4-math-pv-7",
    level: "lowerPrimary",
    subject: "math",
    class: "p4",
    topic: "Place Value",
    text: "In 6,420, what does the 0 represent? 🔢",
    options: ["0 ones", "0 tens", "0 hundreds"],
    correct: "0 ones",
    feedback: { correct: "Yes! The 0 in 6,420 means there are 0 ones", incorrect: "Look at the position from right to left" }
  },

  // Addition & Subtraction (7 questions)
  {
    _id: "lp-p4-math-as-1",
    level: "lowerPrimary",
    subject: "math",
    class: "p4",
    topic: "Addition & Subtraction",
    text: "234 + 567 = ? 🔢",
    options: ["801", "701", "891"],
    correct: "801",
    feedback: { correct: "Yes! 234 + 567 = 801", incorrect: "Add carefully, starting from ones, then tens, then hundreds" }
  },
  {
    _id: "lp-p4-math-as-2",
    level: "lowerPrimary",
    subject: "math",
    class: "p4",
    topic: "Addition & Subtraction",
    text: "856 - 347 = ? 🔢",
    options: ["509", "519", "499"],
    correct: "509",
    feedback: { correct: "Great! 856 - 347 = 509", incorrect: "Subtract carefully, borrowing when needed" }
  },
  {
    _id: "lp-p4-math-as-3",
    level: "lowerPrimary",
    subject: "math",
    class: "p4",
    topic: "Addition & Subtraction",
    text: "What is 1,234 + 5,678? 🔢",
    options: ["6,912", "6,812", "7,012"],
    correct: "6,912",
    feedback: { correct: "Perfect! 1,234 + 5,678 = 6,912", incorrect: "Add each place value carefully" }
  },
  {
    _id: "lp-p4-math-as-4",
    level: "lowerPrimary",
    subject: "math",
    class: "p4",
    topic: "Addition & Subtraction",
    text: "4,321 - 2,123 = ? 🔢",
    options: ["2,198", "2,298", "2,098"],
    correct: "2,198",
    feedback: { correct: "Yes! 4,321 - 2,123 = 2,198", incorrect: "Subtract from right to left, borrowing when needed" }
  },
  {
    _id: "lp-p4-math-as-5",
    level: "lowerPrimary",
    subject: "math",
    class: "p4",
    topic: "Addition & Subtraction",
    text: "345 + 567 + 89 = ? 🔢",
    options: ["1,001", "1,101", "991"],
    correct: "1,001",
    feedback: { correct: "Yes! 345 + 567 + 89 = 1,001", incorrect: "Add all numbers carefully, starting from right" }
  },
  {
    _id: "lp-p4-math-as-6",
    level: "lowerPrimary",
    subject: "math",
    class: "p4",
    topic: "Addition & Subtraction",
    text: "900 - 456 = ? 🔢",
    options: ["444", "454", "434"],
    correct: "444",
    feedback: { correct: "Correct! 900 - 456 = 444", incorrect: "Remember to borrow when needed" }
  },
  {
    _id: "lp-p4-math-as-7",
    level: "lowerPrimary",
    subject: "math",
    class: "p4",
    topic: "Addition & Subtraction",
    text: "What is 3,999 + 1? 🔢",
    options: ["4,000", "3,991", "4,100"],
    correct: "4,000",
    feedback: { correct: "Yes! 3,999 + 1 = 4,000", incorrect: "Watch what happens when 9 + 1 makes 10" }
  },

  // Multiplication (7 questions)
  {
    _id: "lp-p4-math-mu-1",
    level: "lowerPrimary",
    subject: "math",
    class: "p4",
    topic: "Multiplication",
    text: "What is 7 × 8? ✖️",
    options: ["56", "54", "48"],
    correct: "56",
    feedback: { correct: "Yes! 7 × 8 = 56", incorrect: "Try using your multiplication tables" }
  },
  {
    _id: "lp-p4-math-mu-2",
    level: "lowerPrimary",
    subject: "math",
    class: "p4",
    topic: "Multiplication",
    text: "23 × 3 = ? ✖️",
    options: ["69", "63", "66"],
    correct: "69",
    feedback: { correct: "Correct! 23 × 3 = 69", incorrect: "Multiply 3 by each digit in 23" }
  },
  {
    _id: "lp-p4-math-mu-3",
    level: "lowerPrimary",
    subject: "math",
    class: "p4",
    topic: "Multiplication",
    text: "How much is 15 × 4? ✖️",
    options: ["60", "55", "65"],
    correct: "60",
    feedback: { correct: "Yes! 15 × 4 = 60", incorrect: "Think: (10 × 4) + (5 × 4)" }
  },
  {
    _id: "lp-p4-math-mu-4",
    level: "lowerPrimary",
    subject: "math",
    class: "p4",
    topic: "Multiplication",
    text: "What is 100 × 5? ✖️",
    options: ["500", "550", "450"],
    correct: "500",
    feedback: { correct: "Great! 100 × 5 = 500", incorrect: "Add a zero to 50" }
  },
  {
    _id: "lp-p4-math-mu-5",
    level: "lowerPrimary",
    subject: "math",
    class: "p4",
    topic: "Multiplication",
    text: "6 × 12 = ? ✖️",
    options: ["72", "62", "82"],
    correct: "72",
    feedback: { correct: "Yes! 6 × 12 = 72", incorrect: "Think: (6 × 10) + (6 × 2)" }
  },
  {
    _id: "lp-p4-math-mu-6",
    level: "lowerPrimary",
    subject: "math",
    class: "p4",
    topic: "Multiplication",
    text: "What is 25 × 4? ✖️",
    options: ["100", "90", "110"],
    correct: "100",
    feedback: { correct: "Perfect! 25 × 4 = 100", incorrect: "Think: (20 × 4) + (5 × 4)" }
  },
  {
    _id: "lp-p4-math-mu-7",
    level: "lowerPrimary",
    subject: "math",
    class: "p4",
    topic: "Multiplication",
    text: "9 × 7 = ? ✖️",
    options: ["63", "56", "72"],
    correct: "63",
    feedback: { correct: "Yes! 9 × 7 = 63", incorrect: "Use your multiplication tables" }
  },

  // Fractions (7 questions)
  {
    _id: "lp-p4-math-fr-1",
    level: "lowerPrimary",
    subject: "math",
    class: "p4",
    topic: "Fractions",
    text: "What fraction of this is shaded? ■■□□ ",
    options: ["2/4", "1/4", "3/4"],
    correct: "2/4",
    feedback: { correct: "Yes! 2 parts out of 4 are shaded = 2/4", incorrect: "Count shaded parts over total parts" }
  },
  {
    _id: "lp-p4-math-fr-2",
    level: "lowerPrimary",
    subject: "math",
    class: "p4",
    topic: "Fractions",
    text: "Which fraction is equal to 1/2? 🍕",
    options: ["2/4", "1/4", "3/4"],
    correct: "2/4",
    feedback: { correct: "Yes! 2/4 = 1/2", incorrect: "Think about equal parts" }
  },
  {
    _id: "lp-p4-math-fr-3",
    level: "lowerPrimary",
    subject: "math",
    class: "p4",
    topic: "Fractions",
    text: "What is 1/4 of 12? 🔢",
    options: ["3", "4", "6"],
    correct: "3",
    feedback: { correct: "Yes! 1/4 of 12 = 3", incorrect: "Divide 12 by 4" }
  },
  {
    _id: "lp-p4-math-fr-4",
    level: "lowerPrimary",
    subject: "math",
    class: "p4",
    topic: "Fractions",
    text: "Which is larger: 1/2 or 1/4? 📏",
    options: ["1/2", "1/4", "Same"],
    correct: "1/2",
    feedback: { correct: "Yes! 1/2 is larger than 1/4", incorrect: "Think about pizza slices - which gives you more?" }
  },
  {
    _id: "lp-p4-math-fr-5",
    level: "lowerPrimary",
    subject: "math",
    class: "p4",
    topic: "Fractions",
    text: "How many quarters make a whole? 🔄",
    options: ["4", "2", "3"],
    correct: "4",
    feedback: { correct: "Yes! 4 quarters (4/4) make a whole", incorrect: "Think about how many 1/4 pieces make 1" }
  },
  {
    _id: "lp-p4-math-fr-6",
    level: "lowerPrimary",
    subject: "math",
    class: "p4",
    topic: "Fractions",
    text: "What is 1/3 of 15? 🔢",
    options: ["5", "3", "4"],
    correct: "5",
    feedback: { correct: "Yes! 1/3 of 15 = 5", incorrect: "Divide 15 by 3" }
  },
  {
    _id: "lp-p4-math-fr-7",
    level: "lowerPrimary",
    subject: "math",
    class: "p4",
    topic: "Fractions",
    text: "If 3/6 of the pizza is left, how much was eaten? 🍕",
    options: ["3/6", "2/6", "4/6"],
    correct: "3/6",
    feedback: { correct: "Yes! If 3/6 is left, 3/6 was eaten", incorrect: "Think: whole (6/6) - what's left (3/6)" }
  },

  // Time (7 questions)
  {
    _id: "lp-p4-math-ti-1",
    level: "lowerPrimary",
    subject: "math",
    class: "p4",
    topic: "Time",
    text: "How many minutes are in 2 hours? ⏰",
    options: ["120", "100", "90"],
    correct: "120",
    feedback: { correct: "Yes! 2 hours = 120 minutes", incorrect: "Remember: 1 hour = 60 minutes" }
  },
  {
    _id: "lp-p4-math-ti-2",
    level: "lowerPrimary",
    subject: "math",
    class: "p4",
    topic: "Time",
    text: "What time is 15:00 in regular time? 🕒",
    options: ["3:00 PM", "5:00 PM", "3:00 AM"],
    correct: "3:00 PM",
    feedback: { correct: "Yes! 15:00 = 3:00 PM", incorrect: "Subtract 12 from hours after 12:00" }
  },
  {
    _id: "lp-p4-math-ti-3",
    level: "lowerPrimary",
    subject: "math",
    class: "p4",
    topic: "Time",
    text: "How many minutes in quarter of an hour? ⏱️",
    options: ["15", "20", "30"],
    correct: "15",
    feedback: { correct: "Yes! A quarter of an hour = 15 minutes", incorrect: "Think: 1/4 of 60 minutes" }
  },
  {
    _id: "lp-p4-math-ti-4",
    level: "lowerPrimary",
    subject: "math",
    class: "p4",
    topic: "Time",
    text: "What time will it be in 30 minutes from 2:45? 🕐",
    options: ["3:15", "3:00", "3:30"],
    correct: "3:15",
    feedback: { correct: "Yes! 2:45 + 30 minutes = 3:15", incorrect: "Add 30 minutes to 2:45" }
  },
  {
    _id: "lp-p4-math-ti-5",
    level: "lowerPrimary",
    subject: "math",
    class: "p4",
    topic: "Time",
    text: "How many days are in 2 weeks? 📅",
    options: ["14", "12", "10"],
    correct: "14",
    feedback: { correct: "Yes! 2 weeks = 14 days", incorrect: "Remember: 1 week = 7 days" }
  },
  {
    _id: "lp-p4-math-ti-6",
    level: "lowerPrimary",
    subject: "math",
    class: "p4",
    topic: "Time",
    text: "What time is 45 minutes before 9:00? ⏰",
    options: ["8:15", "8:45", "8:30"],
    correct: "8:15",
    feedback: { correct: "Yes! 9:00 - 45 minutes = 8:15", incorrect: "Count backwards 45 minutes from 9:00" }
  },
  {
    _id: "lp-p4-math-ti-7",
    level: "lowerPrimary",
    subject: "math",
    class: "p4",
    topic: "Time",
    text: "Which is longer: 1 hour or 50 minutes? ⏱️",
    options: ["1 hour", "50 minutes", "Same"],
    correct: "1 hour",
    feedback: { correct: "Yes! 1 hour (60 minutes) is longer than 50 minutes", incorrect: "Remember: 1 hour = 60 minutes" }
  },

  // Shapes & Perimeter (7 questions)
  {
    _id: "lp-p4-math-sp-1",
    level: "lowerPrimary",
    subject: "math",
    class: "p4",
    topic: "Shapes & Perimeter",
    text: "How many sides does a pentagon have? 📐",
    options: ["5", "6", "4"],
    correct: "5",
    feedback: { correct: "Yes! A pentagon has 5 sides", incorrect: "Count the sides of a pentagon" }
  },
  {
    _id: "lp-p4-math-sp-2",
    level: "lowerPrimary",
    subject: "math",
    class: "p4",
    topic: "Shapes & Perimeter",
    text: "What is the perimeter of a square with sides of 4cm? 📏",
    options: ["16 cm", "12 cm", "8 cm"],
    correct: "16 cm",
    feedback: { correct: "Yes! 4 cm × 4 sides = 16 cm", incorrect: "Add all four sides together" }
  },
  {
    _id: "lp-p4-math-sp-3",
    level: "lowerPrimary",
    subject: "math",
    class: "p4",
    topic: "Shapes & Perimeter",
    text: "How many vertices does a triangle have? 📐",
    options: ["3", "4", "5"],
    correct: "3",
    feedback: { correct: "Yes! A triangle has 3 vertices (corners)", incorrect: "Count the corners of a triangle" }
  },
  {
    _id: "lp-p4-math-sp-4",
    level: "lowerPrimary",
    subject: "math",
    class: "p4",
    topic: "Shapes & Perimeter",
    text: "What shape is this? ⭕",
    options: ["Circle", "Oval", "Square"],
    correct: "Circle",
    feedback: { correct: "Yes! A circle is perfectly round", incorrect: "Look at the shape's properties" }
  },
  {
    _id: "lp-p4-math-sp-5",
    level: "lowerPrimary",
    subject: "math",
    class: "p4",
    topic: "Shapes & Perimeter",
    text: "Find the perimeter: Length=5cm, Width=3cm 📏",
    options: ["16 cm", "15 cm", "14 cm"],
    correct: "16 cm",
    feedback: { correct: "Yes! (5 + 3 + 5 + 3) = 16 cm", incorrect: "Add all sides: length + width + length + width" }
  },
  {
    _id: "lp-p4-math-sp-6",
    level: "lowerPrimary",
    subject: "math",
    class: "p4",
    topic: "Shapes & Perimeter",
    text: "How many edges does a cube have? 📦",
    options: ["12", "8", "6"],
    correct: "12",
    feedback: { correct: "Yes! A cube has 12 edges", incorrect: "Count all the lines where faces meet" }
  },
  {
    _id: "lp-p4-math-sp-7",
    level: "lowerPrimary",
    subject: "math",
    class: "p4",
    topic: "Shapes & Perimeter",
    text: "Which shape has all equal sides? 📐",
    options: ["Square", "Rectangle", "Triangle"],
    correct: "Square",
    feedback: { correct: "Yes! A square has 4 equal sides", incorrect: "Think about which shape must have all sides the same length" }
  },

  // Money (7 questions)
  {
    _id: "lp-p4-math-mo-1",
    level: "lowerPrimary",
    subject: "math",
    class: "p4",
    topic: "Money",
    text: "How many cents make one dollar? 💵",
    options: ["100", "10", "1000"],
    correct: "100",
    feedback: { correct: "Yes! 100 cents = $1", incorrect: "Remember: 100 cents equals one dollar" }
  },
  {
    _id: "lp-p4-math-mo-2",
    level: "lowerPrimary",
    subject: "math",
    class: "p4",
    topic: "Money",
    text: "If something costs $3.50, how many cents is that? 💰",
    options: ["350", "35", "3050"],
    correct: "350",
    feedback: { correct: "Yes! $3.50 = 350 cents", incorrect: "Convert dollars to cents by multiplying by 100" }
  },
  {
    _id: "lp-p4-math-mo-3",
    level: "lowerPrimary",
    subject: "math",
    class: "p4",
    topic: "Money",
    text: "How much is quarter of a dollar? 💵",
    options: ["25¢", "50¢", "10¢"],
    correct: "25¢",
    feedback: { correct: "Yes! A quarter is 25 cents", incorrect: "Think: 1/4 of 100 cents" }
  },
  {
    _id: "lp-p4-math-mo-4",
    level: "lowerPrimary",
    subject: "math",
    class: "p4",
    topic: "Money",
    text: "How many quarters make $1? 💰",
    options: ["4", "2", "5"],
    correct: "4",
    feedback: { correct: "Yes! 4 quarters (4 × 25¢) = $1", incorrect: "Count how many 25¢ pieces make $1" }
  },
  {
    _id: "lp-p4-math-mo-5",
    level: "lowerPrimary",
    subject: "math",
    class: "p4",
    topic: "Money",
    text: "If you spend $2.75 from $5, how much is left? 💵",
    options: ["$2.25", "$2.50", "$3.25"],
    correct: "$2.25",
    feedback: { correct: "Yes! $5.00 - $2.75 = $2.25", incorrect: "Subtract carefully, watching the decimal point" }
  },
  {
    _id: "lp-p4-math-mo-6",
    level: "lowerPrimary",
    subject: "math",
    class: "p4",
    topic: "Money",
    text: "How many dimes make a dollar? 💰",
    options: ["10", "5", "20"],
    correct: "10",
    feedback: { correct: "Yes! 10 dimes (10 × 10¢) = $1", incorrect: "Remember: each dime is 10 cents" }
  },
  {
    _id: "lp-p4-math-mo-7",
    level: "lowerPrimary",
    subject: "math",
    class: "p4",
    topic: "Money",
    text: "What's the total: $1.25 + 75¢? 💵",
    options: ["$2.00", "$1.75", "$2.25"],
    correct: "$2.00",
    feedback: { correct: "Yes! $1.25 + $0.75 = $2.00", incorrect: "Convert cents to dollars and add" }
  }
];
