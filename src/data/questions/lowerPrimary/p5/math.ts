import type { Question } from "../../../../types";

export const p5MathQuestions: Question[] = [
  // =========================================================
  // 1) Number Sense & Place Value (10)
  // =========================================================
  {
    _id: "lp-p5-ma-ns-001",
    level: "lowerPrimary",
    subject: "math",
    class: "p5",
    topic: "Number Sense & Place Value",
    type: "choice",
    text: "Express XXV in Hindu-Arabic numerals.",
    options: ["25", "15", "35"],
    correct: "25",
    feedback: { correct: "Correct! XXV = 25.", incorrect: "XXV means 25." }
  },
  {
    _id: "lp-p5-ma-ns-002",
    level: "lowerPrimary",
    subject: "math",
    class: "p5",
    topic: "Number Sense & Place Value",
    type: "choice",
    text: "Write 6,795 in words.",
    options: [
      "Six thousand seven hundred ninety-five",
      "Seven thousand six hundred ninety-five",
      "Six thousand nine hundred seventy-five"
    ],
    correct: "Six thousand seven hundred ninety-five",
    feedback: { correct: "Nice reading!", incorrect: "Read digit by digit in groups." }
  },
  {
    _id: "lp-p5-ma-ns-003",
    level: "lowerPrimary",
    subject: "math",
    class: "p5",
    topic: "Number Sense & Place Value",
    type: "choice",
    text: "Round 29 to the nearest tens.",
    options: ["30", "20", "40"],
    correct: "30",
    feedback: { correct: "Yes!", incorrect: "29 is closer to 30 than 20." }
  },
  {
    _id: "lp-p5-ma-ns-004",
    level: "lowerPrimary",
    subject: "math",
    class: "p5",
    topic: "Number Sense & Place Value",
    type: "fill-in",
    text: "Write the number for: 9000 + 500 + 7",
    correct: "9507",
    feedback: { correct: "Correct.", incorrect: "9000 + 500 + 7 = 9507." }
  },
  {
    _id: "lp-p5-ma-ns-005",
    level: "lowerPrimary",
    subject: "math",
    class: "p5",
    topic: "Number Sense & Place Value",
    type: "choice",
    text: "Which digit is in the thousands place of 48,361?",
    options: ["8", "4", "3"],
    correct: "8",
    feedback: { correct: "Yes.", incorrect: "Places: ones, tens, hundreds, thousands…" }
  },
  {
    _id: "lp-p5-ma-ns-006",
    level: "lowerPrimary",
    subject: "math",
    class: "p5",
    topic: "Number Sense & Place Value",
    type: "choice",
    text: "Change 23/5 to a mixed number.",
    options: ["4 3/5", "5 3/5", "3 4/5"],
    correct: "4 3/5",
    feedback: { correct: "23 ÷ 5 = 4 r 3.", incorrect: "Divide 23 by 5 to get 4 remainder 3." }
  },
  {
    _id: "lp-p5-ma-ns-007",
    level: "lowerPrimary",
    subject: "math",
    class: "p5",
    topic: "Number Sense & Place Value",
    type: "choice",
    text: "Complete: 3 + 3 + 3 + 3 = ____ × ____",
    options: ["4 × 3", "3 × 4", "2 × 6"],
    correct: "4 × 3",
    feedback: { correct: "Good! Repeated addition.", incorrect: "Four groups of 3 is 4 × 3." }
  },
  {
    _id: "lp-p5-ma-ns-008",
    level: "lowerPrimary",
    subject: "math",
    class: "p5",
    topic: "Number Sense & Place Value",
    type: "choice",
    text: "What is the value of 7 in 705,432?",
    options: ["700,000", "70,000", "7,000"],
    correct: "700,000",
    feedback: { correct: "Correct.", incorrect: "7 is in the hundred-thousands place." }
  },
  {
    _id: "lp-p5-ma-ns-009",
    level: "lowerPrimary",
    subject: "math",
    class: "p5",
    topic: "Number Sense & Place Value",
    type: "choice",
    text: "Find the lowest common multiple (LCM) of 5 and 10.",
    options: ["10", "15", "20"],
    correct: "10",
    feedback: { correct: "Yes.", incorrect: "Multiples: 5,10,15…; 10,20… LCM is 10." }
  },
  {
    _id: "lp-p5-ma-ns-010",
    level: "lowerPrimary",
    subject: "math",
    class: "p5",
    topic: "Number Sense & Place Value",
    type: "choice",
    text: "Write 4,508 in expanded form.",
    options: ["4000 + 500 + 8", "4000 + 50 + 8", "400 + 5000 + 8"],
    correct: "4000 + 500 + 8",
    feedback: { correct: "Well done.", incorrect: "Look at each digit’s place value." }
  },

  // =========================================================
  // 2) Operations & Word Problems (10)
  // =========================================================
  {
    _id: "lp-p5-ma-op-001",
    level: "lowerPrimary",
    subject: "math",
    class: "p5",
    topic: "Operations & Word Problems",
    type: "choice",
    text: "3,245 + 1,706 = ?",
    options: ["4,951", "4,941", "4,961"],
    correct: "4,951",
    feedback: { correct: "Nice addition!", incorrect: "Add by columns and carry." }
  },
  {
    _id: "lp-p5-ma-op-002",
    level: "lowerPrimary",
    subject: "math",
    class: "p5",
    topic: "Operations & Word Problems",
    type: "choice",
    text: "7,000 − 2,458 = ?",
    options: ["4,542", "4,552", "4,532"],
    correct: "4,542",
    feedback: { correct: "Good subtraction!", incorrect: "Borrow across zeros carefully." }
  },
  {
    _id: "lp-p5-ma-op-003",
    level: "lowerPrimary",
    subject: "math",
    class: "p5",
    topic: "Operations & Word Problems",
    type: "choice",
    text: "125 × 4 = ?",
    options: ["500", "490", "510"],
    correct: "500",
    feedback: { correct: "Great!", incorrect: "Multiply 125 by 4." }
  },
  {
    _id: "lp-p5-ma-op-004",
    level: "lowerPrimary",
    subject: "math",
    class: "p5",
    topic: "Operations & Word Problems",
    type: "choice",
    text: "936 ÷ 9 = ?",
    options: ["104", "105", "103"],
    correct: "104",
    feedback: { correct: "Correct division!", incorrect: "Use long division." }
  },
  {
    _id: "lp-p5-ma-op-005",
    level: "lowerPrimary",
    subject: "math",
    class: "p5",
    topic: "Operations & Word Problems",
    type: "choice",
    text: "A shop sold 248 books on Monday and 379 on Tuesday. How many in all?",
    options: ["627", "617", "637"],
    correct: "627",
    feedback: { correct: "Yes.", incorrect: "Add 248 and 379." }
  },
  {
    _id: "lp-p5-ma-op-006",
    level: "lowerPrimary",
    subject: "math",
    class: "p5",
    topic: "Operations & Word Problems",
    type: "choice",
    text: "Okello had 950 shillings and spent 365. How much remains?",
    options: ["585", "595", "575"],
    correct: "585",
    feedback: { correct: "Nice.", incorrect: "950 − 365." }
  },
  {
    _id: "lp-p5-ma-op-007",
    level: "lowerPrimary",
    subject: "math",
    class: "p5",
    topic: "Operations & Word Problems",
    type: "choice",
    text: "A class has 28 desks with 2 seats each. How many seats?",
    options: ["56", "58", "54"],
    correct: "56",
    feedback: { correct: "Good!", incorrect: "28 × 2." }
  },
  {
    _id: "lp-p5-ma-op-008",
    level: "lowerPrimary",
    subject: "math",
    class: "p5",
    topic: "Operations & Word Problems",
    type: "choice",
    text: "A farmer packs 96 eggs equally into trays of 12. How many trays?",
    options: ["8", "7", "6"],
    correct: "8",
    feedback: { correct: "Yes.", incorrect: "96 ÷ 12." }
  },
  {
    _id: "lp-p5-ma-op-009",
    level: "lowerPrimary",
    subject: "math",
    class: "p5",
    topic: "Operations & Word Problems",
    type: "fill-in",
    text: "Find the missing number: 47 + __ = 100",
    correct: "53",
    feedback: { correct: "Correct.", incorrect: "100 − 47 = 53." }
  },
  {
    _id: "lp-p5-ma-op-010",
    level: "lowerPrimary",
    subject: "math",
    class: "p5",
    topic: "Operations & Word Problems",
    type: "choice",
    text: "A book costs 2,750 sh. How much for 4 such books?",
    options: ["11,000 sh", "10,500 sh", "12,000 sh"],
    correct: "11,000 sh",
    feedback: { correct: "Well done!", incorrect: "2,750 × 4." }
  },

  // =========================================================
  // 3) Fractions & Decimals (10)
  // =========================================================
  {
    _id: "lp-p5-ma-fr-001",
    level: "lowerPrimary",
    subject: "math",
    class: "p5",
    topic: "Fractions & Decimals",
    type: "choice",
    text: "Which is equal to 0.5?",
    options: ["1/2", "1/5", "2/5"],
    correct: "1/2",
    feedback: { correct: "Yes.", incorrect: "0.5 is one-half." }
  },
  {
    _id: "lp-p5-ma-fr-002",
    level: "lowerPrimary",
    subject: "math",
    class: "p5",
    topic: "Fractions & Decimals",
    type: "choice",
    text: "Which is equal to 0.25?",
    options: ["1/4", "2/5", "3/8"],
    correct: "1/4",
    feedback: { correct: "Correct.", incorrect: "0.25 = 1/4." }
  },
  {
    _id: "lp-p5-ma-fr-003",
    level: "lowerPrimary",
    subject: "math",
    class: "p5",
    topic: "Fractions & Decimals",
    type: "choice",
    text: "Which fraction is greater?",
    options: ["3/4", "2/3", "1/2"],
    correct: "3/4",
    feedback: { correct: "Good compare!", incorrect: "Change to like denominators to compare." }
  },
  {
    _id: "lp-p5-ma-fr-004",
    level: "lowerPrimary",
    subject: "math",
    class: "p5",
    topic: "Fractions & Decimals",
    type: "choice",
    text: "Which equals 0.2?",
    options: ["1/5", "2/10", "both 1/5 and 2/10"],
    correct: "both 1/5 and 2/10",
    feedback: { correct: "Right.", incorrect: "0.2 = 1/5 = 2/10." }
  },
  {
    _id: "lp-p5-ma-fr-005",
    level: "lowerPrimary",
    subject: "math",
    class: "p5",
    topic: "Fractions & Decimals",
    type: "choice",
    text: "Simplify 4/8.",
    options: ["1/2", "2/4", "both are equal"],
    correct: "1/2",
    feedback: { correct: "Yes.", incorrect: "Divide top and bottom by 4." }
  },
  {
    _id: "lp-p5-ma-fr-006",
    level: "lowerPrimary",
    subject: "math",
    class: "p5",
    topic: "Fractions & Decimals",
    type: "choice",
    text: "Which is smaller?",
    options: ["0.35", "0.4", "0.45"],
    correct: "0.35",
    feedback: { correct: "Correct.", incorrect: "Compare digit by digit." }
  },
  {
    _id: "lp-p5-ma-fr-007",
    level: "lowerPrimary",
    subject: "math",
    class: "p5",
    topic: "Fractions & Decimals",
    type: "choice",
    text: "Which pair are equivalent fractions?",
    options: ["2/3 and 4/6", "3/5 and 6/7", "1/2 and 3/5"],
    correct: "2/3 and 4/6",
    feedback: { correct: "Nice!", incorrect: "Multiply/divide top and bottom by the same number." }
  },
  {
    _id: "lp-p5-ma-fr-008",
    level: "lowerPrimary",
    subject: "math",
    class: "p5",
    topic: "Fractions & Decimals",
    type: "fill-in",
    text: "Add: 3/8 + 1/8 = __",
    correct: "4/8",
    feedback: { correct: "Correct.", incorrect: "Add numerators: 3+1=4; keep denominator 8." }
  },
  {
    _id: "lp-p5-ma-fr-009",
    level: "lowerPrimary",
    subject: "math",
    class: "p5",
    topic: "Fractions & Decimals",
    type: "fill-in",
    text: "Subtract: 7/10 − 2/10 = __",
    correct: "5/10",
    feedback: { correct: "Yes.", incorrect: "7−2=5 over 10." }
  },
  {
    _id: "lp-p5-ma-fr-010",
    level: "lowerPrimary",
    subject: "math",
    class: "p5",
    topic: "Fractions & Decimals",
    type: "choice",
    text: "Change 1.5 to a fraction.",
    options: ["3/2", "15/10", "both are equal"],
    correct: "both are equal",
    feedback: { correct: "Right.", incorrect: "1.5 = 15/10 = 3/2." }
  },

  // =========================================================
  // 4) Measurement & Geometry (10)
  // =========================================================
  {
    _id: "lp-p5-ma-mg-001",
    level: "lowerPrimary",
    subject: "math",
    class: "p5",
    topic: "Measurement & Geometry",
    type: "choice",
    text: "Area of a rectangle 12 cm × 4 cm is:",
    options: ["48 cm²", "32 cm²", "16 cm²"],
    correct: "48 cm²",
    feedback: { correct: "Area = L × W.", incorrect: "Multiply length by width." }
  },
  {
    _id: "lp-p5-ma-mg-002",
    level: "lowerPrimary",
    subject: "math",
    class: "p5",
    topic: "Measurement & Geometry",
    type: "choice",
    text: "Perimeter of a rectangle 7 cm by 5 cm is:",
    options: ["24 cm", "12 cm", "35 cm"],
    correct: "24 cm",
    feedback: { correct: "Perimeter = 2(L+W).", incorrect: "2 × (7+5) = 24." }
  },
  {
    _id: "lp-p5-ma-mg-003",
    level: "lowerPrimary",
    subject: "math",
    class: "p5",
    topic: "Measurement & Geometry",
    type: "choice",
    text: "Convert 300 cm to meters.",
    options: ["3 m", "30 m", "0.3 m"],
    correct: "3 m",
    feedback: { correct: "Yes.", incorrect: "100 cm = 1 m." }
  },
  {
    _id: "lp-p5-ma-mg-004",
    level: "lowerPrimary",
    subject: "math",
    class: "p5",
    topic: "Measurement & Geometry",
    type: "choice",
    text: "A right angle measures:",
    options: ["90°", "45°", "180°"],
    correct: "90°",
    feedback: { correct: "Correct!", incorrect: "A right angle is 90°." }
  },
  {
    _id: "lp-p5-ma-mg-005",
    level: "lowerPrimary",
    subject: "math",
    class: "p5",
    topic: "Measurement & Geometry",
    type: "choice",
    text: "An angle less than 90° is ____.",
    options: ["acute", "obtuse", "straight"],
    correct: "acute",
    feedback: { correct: "Yes.", incorrect: "Acute < 90°." }
  },
  {
    _id: "lp-p5-ma-mg-006",
    level: "lowerPrimary",
    subject: "math",
    class: "p5",
    topic: "Measurement & Geometry",
    type: "choice",
    text: "Lines meeting at 90° are ____.",
    options: ["perpendicular", "parallel", "intersecting (any)"],
    correct: "perpendicular",
    feedback: { correct: "Right.", incorrect: "Perpendicular lines form right angles." }
  },
  {
    _id: "lp-p5-ma-mg-007",
    level: "lowerPrimary",
    subject: "math",
    class: "p5",
    topic: "Measurement & Geometry",
    type: "choice",
    text: "Two lines that never meet are ____ lines.",
    options: ["parallel", "perpendicular", "skew"],
    correct: "parallel",
    feedback: { correct: "Good!", incorrect: "Parallel lines are always the same distance apart." }
  },
  {
    _id: "lp-p5-ma-mg-008",
    level: "lowerPrimary",
    subject: "math",
    class: "p5",
    topic: "Measurement & Geometry",
    type: "fill-in",
    text: "Convert 2.5 kg to grams.",
    correct: "2500",
    feedback: { correct: "Yes.", incorrect: "1 kg = 1000 g → 2.5 kg = 2500 g." }
  },
  {
    _id: "lp-p5-ma-mg-009",
    level: "lowerPrimary",
    subject: "math",
    class: "p5",
    topic: "Measurement & Geometry",
    type: "choice",
    text: "Area of a square with side 9 cm is:",
    options: ["81 cm²", "36 cm²", "18 cm²"],
    correct: "81 cm²",
    feedback: { correct: "Area = side².", incorrect: "9 × 9 = 81." }
  },
  {
    _id: "lp-p5-ma-mg-010",
    level: "lowerPrimary",
    subject: "math",
    class: "p5",
    topic: "Measurement & Geometry",
    type: "choice",
    text: "A straight angle measures ____.",
    options: ["180°", "90°", "360°"],
    correct: "180°",
    feedback: { correct: "Well done.", incorrect: "A straight angle is a half-turn." }
  },

  // =========================================================
  // 5) Data, Sets & Graphs (10)
  // =========================================================
  {
    _id: "lp-p5-ma-dg-001",
    level: "lowerPrimary",
    subject: "math",
    class: "p5",
    topic: "Data, Sets & Graphs",
    type: "choice",
    text: "Bar chart shows: 🧃8, 🥛6, 💧10. Which sold most?",
    options: ["Water", "Juice", "Milk"],
    correct: "Water",
    feedback: { correct: "Good reading!", incorrect: "Compare the heights/values." }
  },
  {
    _id: "lp-p5-ma-dg-002",
    level: "lowerPrimary",
    subject: "math",
    class: "p5",
    topic: "Data, Sets & Graphs",
    type: "choice",
    text: "Survey: 🍎 5, 🍌 7, 🍊 4. Total fruits?",
    options: ["16", "15", "14"],
    correct: "16",
    feedback: { correct: "Yes.", incorrect: "Add 5+7+4." }
  },
  {
    _id: "lp-p5-ma-dg-003",
    level: "lowerPrimary",
    subject: "math",
    class: "p5",
    topic: "Data, Sets & Graphs",
    type: "choice",
    text: "Heights (cm): 120, 135, 140. Highest?",
    options: ["140", "135", "120"],
    correct: "140",
    feedback: { correct: "Correct.", incorrect: "Pick the greatest number." }
  },
  {
    _id: "lp-p5-ma-dg-004",
    level: "lowerPrimary",
    subject: "math",
    class: "p5",
    topic: "Data, Sets & Graphs",
    type: "choice",
    text: "Votes: 🐶11, 🐱9, 🐟6. 2nd place?",
    options: ["Cat", "Dog", "Fish"],
    correct: "Cat",
    feedback: { correct: "Nice.", incorrect: "Order: 11, 9, 6 → cat is 2nd." }
  },
  {
    _id: "lp-p5-ma-dg-005",
    level: "lowerPrimary",
    subject: "math",
    class: "p5",
    topic: "Data, Sets & Graphs",
    type: "multiChoice",
    text: "Which are even numbers?",
    options: ["24", "19", "30", "27"],
    correct: ["24", "30"],
    feedback: { correct: "Great!", incorrect: "Even numbers end in 0,2,4,6,8." }
  },
  {
    _id: "lp-p5-ma-dg-006",
    level: "lowerPrimary",
    subject: "math",
    class: "p5",
    topic: "Data, Sets & Graphs",
    type: "multiChoice",
    text: "From set A = {2,3,4,5,6}, select all prime numbers.",
    options: ["2", "3", "4", "5", "6"],
    correct: ["2", "3", "5"],
    feedback: { correct: "Yes—2,3,5.", incorrect: "Prime numbers have exactly two factors." }
  },
  {
    _id: "lp-p5-ma-dg-007",
    level: "lowerPrimary",
    subject: "math",
    class: "p5",
    topic: "Data, Sets & Graphs",
    type: "choice",
    text: "Mode of {4, 6, 4, 7, 4, 6} is:",
    options: ["4", "6", "7"],
    correct: "4",
    feedback: { correct: "Mode = most frequent.", incorrect: "4 appears most often." }
  },
  {
    _id: "lp-p5-ma-dg-008",
    level: "lowerPrimary",
    subject: "math",
    class: "p5",
    topic: "Data, Sets & Graphs",
    type: "choice",
    text: "Median of {3, 5, 7} is:",
    options: ["5", "3", "7"],
    correct: "5",
    feedback: { correct: "Yes.", incorrect: "Order them and pick the middle value." }
  },
  {
    _id: "lp-p5-ma-dg-009",
    level: "lowerPrimary",
    subject: "math",
    class: "p5",
    topic: "Data, Sets & Graphs",
    type: "choice",
    text: "If each 🟩 in a pictograph equals 2 pupils, and there are 7 🟩, how many pupils?",
    options: ["14", "7", "9"],
    correct: "14",
    feedback: { correct: "Correct.", incorrect: "Multiply 7 by the key value 2." }
  },
  {
    _id: "lp-p5-ma-dg-010",
    level: "lowerPrimary",
    subject: "math",
    class: "p5",
    topic: "Data, Sets & Graphs",
    type: "choice",
    text: "In a Venn diagram, A∩B shows elements that are:",
    options: ["In both sets", "Only in A", "Only in B"],
    correct: "In both sets",
    feedback: { correct: "Well done.", incorrect: "Intersection means in both." }
  },

  // =========================================================
  // 6) Time & Calendar (10)
  // =========================================================
  {
    _id: "lp-p5-ma-tc-001",
    level: "lowerPrimary",
    subject: "math",
    class: "p5",
    topic: "Time & Calendar",
    type: "choice",
    text: "A bus leaves 08:20 and arrives 09:05. Journey time is:",
    options: ["45 minutes", "35 minutes", "50 minutes"],
    correct: "45 minutes",
    feedback: { correct: "Nice!", incorrect: "Count from 8:20 to 9:05." }
  },
  {
    _id: "lp-p5-ma-tc-002",
    level: "lowerPrimary",
    subject: "math",
    class: "p5",
    topic: "Time & Calendar",
    type: "choice",
    text: "Start 11:15, end 12:00 → duration?",
    options: ["45 minutes", "50 minutes", "40 minutes"],
    correct: "45 minutes",
    feedback: { correct: "Correct.", incorrect: "From 11:15 to noon is 45 minutes." }
  },
  {
    _id: "lp-p5-ma-tc-003",
    level: "lowerPrimary",
    subject: "math",
    class: "p5",
    topic: "Time & Calendar",
    type: "choice",
    text: "Movie 14:30–16:10 lasts:",
    options: ["1 h 40 min", "1 h 30 min", "2 h"],
    correct: "1 h 40 min",
    feedback: { correct: "Good.", incorrect: "Count hours and minutes." }
  },
  {
    _id: "lp-p5-ma-tc-004",
    level: "lowerPrimary",
    subject: "math",
    class: "p5",
    topic: "Time & Calendar",
    type: "choice",
    text: "From 07:55 to 08:25 is ____.",
    options: ["30 minutes", "20 minutes", "25 minutes"],
    correct: "30 minutes",
    feedback: { correct: "Yes.", incorrect: "From :55 to :25 is 30 min." }
  },
  {
    _id: "lp-p5-ma-tc-005",
    level: "lowerPrimary",
    subject: "math",
    class: "p5",
    topic: "Time & Calendar",
    type: "choice",
    text: "A break starts 10:10 and ends 10:25. Duration?",
    options: ["15 minutes", "20 minutes", "10 minutes"],
    correct: "15 minutes",
    feedback: { correct: "Correct.", incorrect: "10:10 → 10:25 is 15 min." }
  },
  {
    _id: "lp-p5-ma-tc-006",
    level: "lowerPrimary",
    subject: "math",
    class: "p5",
    topic: "Time & Calendar",
    type: "choice",
    text: "Train 18:05–19:00 takes:",
    options: ["55 minutes", "45 minutes", "1 h"],
    correct: "55 minutes",
    feedback: { correct: "Well done.", incorrect: "From :05 to :00 next hour is 55 min." }
  },
  {
    _id: "lp-p5-ma-tc-007",
    level: "lowerPrimary",
    subject: "math",
    class: "p5",
    topic: "Time & Calendar",
    type: "choice",
    text: "Class 09:00–09:40 is ____ long.",
    options: ["40 minutes", "30 minutes", "45 minutes"],
    correct: "40 minutes",
    feedback: { correct: "Yes.", incorrect: "40 minutes long." }
  },
  {
    _id: "lp-p5-ma-tc-008",
    level: "lowerPrimary",
    subject: "math",
    class: "p5",
    topic: "Time & Calendar",
    type: "fill-in",
    text: "How many days are in June?",
    correct: "30",
    feedback: { correct: "Correct.", incorrect: "June has 30 days." }
  },
  {
    _id: "lp-p5-ma-tc-009",
    level: "lowerPrimary",
    subject: "math",
    class: "p5",
    topic: "Time & Calendar",
    type: "choice",
    text: "Which month has 29 days in a leap year?",
    options: ["February", "March", "January"],
    correct: "February",
    feedback: { correct: "Good!", incorrect: "Leap years give February 29 days." }
  },
  {
    _id: "lp-p5-ma-tc-010",
    level: "lowerPrimary",
    subject: "math",
    class: "p5",
    topic: "Time & Calendar",
    type: "fill-in",
    text: "Convert 2 hours 30 minutes to minutes.",
    correct: "150",
    feedback: { correct: "Yes.", incorrect: "2 h = 120 min; 120 + 30 = 150." }
  }
];
