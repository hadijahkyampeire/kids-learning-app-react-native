import type { Question } from "../../../../types";

export const mathP6: Question[] = [
  // ===================== FRACTIONS (10) =====================
  {
    _id: "up-p6-ma-fr-001",
    level: "upperPrimary",
    class: "p6",
    subject: "math",
    topic: "Fractions",
    type: "text",
    text: "Simplify the fraction 6/9 (use fractions only, no decimals).",
    accepted: ["2/3"],
    feedback: { correct: "Great! Divide top and bottom by 3.", incorrect: "Divide numerator and denominator by 3 → 2/3." }
  },
  {
    _id: "up-p6-ma-fr-002",
    level: "upperPrimary",
    class: "p6",
    subject: "math",
    topic: "Fractions",
    type: "text",
    text: "Write an equivalent fraction to 3/5 with denominator 20 (fractions only).",
    accepted: ["12/20"],
    feedback: { correct: "Correct: multiply 3 and 5 by 4.", incorrect: "Multiply numerator and denominator by 4 → 12/20." }
  },
  {
    _id: "up-p6-ma-fr-003",
    level: "upperPrimary",
    class: "p6",
    subject: "math",
    topic: "Fractions",
    type: "multiText",
    text: "Answer both in order (fractions or whole numbers only, no decimals): (a) 1/4 + 1/4   (b) 2/5 of 20",
    acceptedSet: ["1/2", "8"],
    minAnswers: 2,
    feedback: { correct: "Nice! a) 1/2  b) 8.", incorrect: "a) Add numerators then simplify. b) (2×20)/5 = 8." }
  },
  {
    _id: "up-p6-ma-fr-004",
    level: "upperPrimary",
    class: "p6",
    subject: "math",
    topic: "Fractions",
    type: "text",
    text: "Subtract: 5/6 − 1/6 (fractions only).",
    accepted: ["4/6", "2/3"], // allow unsimplified and simplified
    feedback: { correct: "Correct! 5/6 − 1/6 = 4/6 = 2/3.", incorrect: "Same denominator: subtract numerators → 4/6 = 2/3." }
  },
  {
    _id: "up-p6-ma-fr-005",
    level: "upperPrimary",
    class: "p6",
    subject: "math",
    topic: "Fractions",
    type: "text",
    text: "Find 3/8 of 32 (whole number only).",
    accepted: ["12"],
    feedback: { correct: "Yes—(3×32)/8 = 12.", incorrect: "Compute (3×32)/8 and give a whole number." }
  },
  {
    _id: "up-p6-ma-fr-006",
    level: "upperPrimary",
    class: "p6",
    subject: "math",
    topic: "Fractions",
    type: "text",
    text: "Which is greater: 2/3 or 3/5? (write the fraction only).",
    accepted: ["2/3"],
    feedback: { correct: "Right—2/3 > 3/5.", incorrect: "Find common denominators (15): 10/15 vs 9/15." }
  },
  {
    _id: "up-p6-ma-fr-007",
    level: "upperPrimary",
    class: "p6",
    subject: "math",
    topic: "Fractions",
    type: "multiText",
    text: "Add the fractions (fractions only): (a) 2/7 + 3/7   (b) 1/3 + 1/6",
    acceptedSet: ["5/7", "1/2"],
    minAnswers: 2,
    feedback: { correct: "Good work! a) 5/7  b) 1/2.", incorrect: "a) Same denominator → add numerators. b) LCM(3,6)=6 → 1/3=2/6; 2/6+1/6=3/6=1/2." }
  },
  {
    _id: "up-p6-ma-fr-008",
    level: "upperPrimary",
    class: "p6",
    subject: "math",
    topic: "Fractions",
    type: "text",
    text: "Simplify: 12/18 (fractions only).",
    accepted: ["2/3"],
    feedback: { correct: "Yes—divide by 6.", incorrect: "Divide top and bottom by 6 → 2/3." }
  },
  {
    _id: "up-p6-ma-fr-009",
    level: "upperPrimary",
    class: "p6",
    subject: "math",
    topic: "Fractions",
    type: "text",
    text: "Convert 7/4 to a mixed number (fractions only, e.g., 1 3/4).",
    accepted: ["1 3/4", "1 3/4 "], // minor spacing tolerance
    feedback: { correct: "Correct—1 and 3/4.", incorrect: "7 ÷ 4 = 1 remainder 3 → 1 3/4." }
  },
  {
    _id: "up-p6-ma-fr-010",
    level: "upperPrimary",
    class: "p6",
    subject: "math",
    topic: "Fractions",
    type: "text",
    text: "A class ate 3/8 of a 40-mango harvest. How many mangoes were eaten? (whole number only).",
    accepted: ["15"],
    feedback: { correct: "Right—(3×40)/8 = 15.", incorrect: "Compute the fraction of the total: (3×40)/8." }
  },

  // ===================== DECIMALS (10) =====================
  {
    _id: "up-p6-ma-de-001",
    level: "upperPrimary",
    class: "p6",
    subject: "math",
    topic: "Decimals",
    type: "text",
    text: "Write 3/10 as a decimal (use decimal form only).",
    accepted: ["0.3"],
    feedback: { correct: "Yes—0.3.", incorrect: "Tenths place → 0.3." }
  },
  {
    _id: "up-p6-ma-de-002",
    level: "upperPrimary",
    class: "p6",
    subject: "math",
    topic: "Decimals",
    type: "text",
    text: "Add: 0.4 + 0.35 (write as a decimal).",
    accepted: ["0.75", ".75"],
    feedback: { correct: "Correct—0.75.", incorrect: "Align decimal points: 0.40 + 0.35 = 0.75." }
  },
  {
    _id: "up-p6-ma-de-003",
    level: "upperPrimary",
    class: "p6",
    subject: "math",
    topic: "Decimals",
    type: "text",
    text: "Subtract: 0.9 − 0.25 (write as a decimal).",
    accepted: ["0.65", ".65"],
    feedback: { correct: "Right—0.65.", incorrect: "Borrow carefully: 0.90 − 0.25 = 0.65." }
  },
  {
    _id: "up-p6-ma-de-004",
    level: "upperPrimary",
    class: "p6",
    subject: "math",
    topic: "Decimals",
    type: "text",
    text: "Round 4.67 to 1 decimal place (decimal only).",
    accepted: ["4.7"],
    feedback: { correct: "Yes—4.7.", incorrect: "The hundredths digit is 7, so round up." }
  },
  {
    _id: "up-p6-ma-de-005",
    level: "upperPrimary",
    class: "p6",
    subject: "math",
    topic: "Decimals",
    type: "multiText",
    text: "Convert centimetres to metres (two answers, decimals allowed): (a) 950 cm  (b) 1680 cm",
    acceptedSet: ["9.5", "16.8"],
    minAnswers: 2,
    feedback: { correct: "Good: 9.5 m and 16.8 m.", incorrect: "Divide cm by 100 → (a) 9.5 m  (b) 16.8 m." }
  },
  {
    _id: "up-p6-ma-de-006",
    level: "upperPrimary",
    class: "p6",
    subject: "math",
    topic: "Decimals",
    type: "text",
    text: "Which is greater: 0.7 or 0.65? (write the number only).",
    accepted: ["0.7", ".7"],
    feedback: { correct: "Correct—0.7 is greater.", incorrect: "Compare tenths first: 0.7 > 0.65." }
  },
  {
    _id: "up-p6-ma-de-007",
    level: "upperPrimary",
    class: "p6",
    subject: "math",
    topic: "Decimals",
    type: "text",
    text: "Place value: In 5.324, what place is the digit 2 in? (write the place name only).",
    accepted: ["hundredths", "Hundredths"],
    feedback: { correct: "Yes—hundredths.", incorrect: "5 . 3(=tenths) 2(=hundredths) 4(=thousandths)." }
  },
  {
    _id: "up-p6-ma-de-008",
    level: "upperPrimary",
    class: "p6",
    subject: "math",
    topic: "Decimals",
    type: "text",
    text: "Order these in ascending order (write exactly: 0.09, 0.12, 0.2): 0.2, 0.12, 0.09",
    accepted: ["0.09, 0.12, 0.2"],
    feedback: { correct: "Great ordering.", incorrect: "Compare digit by digit: 0.09 < 0.12 < 0.2." }
  },
  {
    _id: "up-p6-ma-de-009",
    level: "upperPrimary",
    class: "p6",
    subject: "math",
    topic: "Decimals",
    type: "text",
    text: "Write 7/20 as a decimal (decimal only).",
    accepted: ["0.35", ".35"],
    feedback: { correct: "Correct—0.35.", incorrect: "7 ÷ 20 = 0.35." }
  },
  {
    _id: "up-p6-ma-de-010",
    level: "upperPrimary",
    class: "p6",
    subject: "math",
    topic: "Decimals",
    type: "text",
    text: "Multiply: 0.6 × 5 (decimal only).",
    accepted: ["3", "3.0"],
    feedback: { correct: "Yes—3.", incorrect: "6 tenths × 5 = 30 tenths = 3.0." }
  },

  // ===================== AREA & PERIMETER (10) =====================
  {
    _id: "up-p6-ma-ap-001",
    level: "upperPrimary",
    class: "p6",
    subject: "math",
    topic: "Area & Perimeter",
    type: "text",
    text: "Perimeter of a rectangle with length 9 cm and width 4 cm (write the value only, number).",
    accepted: ["26"],
    feedback: { correct: "Correct—26.", incorrect: "P = 2(L+W) = 2(9+4) = 26." }
  },
  {
    _id: "up-p6-ma-ap-002",
    level: "upperPrimary",
    class: "p6",
    subject: "math",
    topic: "Area & Perimeter",
    type: "text",
    text: "Area of a rectangle 7 cm by 6 cm (write the value only, number).",
    accepted: ["42"],
    feedback: { correct: "Yes—42.", incorrect: "Area = L × W = 7 × 6." }
  },
  {
    _id: "up-p6-ma-ap-003",
    level: "upperPrimary",
    class: "p6",
    subject: "math",
    topic: "Area & Perimeter",
    type: "text",
    text: "Perimeter of a square with side 5 cm (number only).",
    accepted: ["20"],
    feedback: { correct: "Correct—20.", incorrect: "Perimeter = 4 × side = 4×5." }
  },
  {
    _id: "up-p6-ma-ap-004",
    level: "upperPrimary",
    class: "p6",
    subject: "math",
    topic: "Area & Perimeter",
    type: "text",
    text: "Area of a square with side 8 cm (number only).",
    accepted: ["64"],
    feedback: { correct: "Right—64.", incorrect: "Area = side² = 8×8." }
  },
  {
    _id: "up-p6-ma-ap-005",
    level: "upperPrimary",
    class: "p6",
    subject: "math",
    topic: "Area & Perimeter",
    type: "text",
    text: "A triangle has sides 3 cm, 4 cm, and 5 cm. What is its perimeter? (number only).",
    accepted: ["12"],
    feedback: { correct: "Yes—12.", incorrect: "Add all three sides: 3+4+5." }
  },
  {
    _id: "up-p6-ma-ap-006",
    level: "upperPrimary",
    class: "p6",
    subject: "math",
    topic: "Area & Perimeter",
    type: "text",
    text: "A garden measures 10 m by 3 m. Find its area (number only).",
    accepted: ["30"],
    feedback: { correct: "Correct—30.", incorrect: "Area = L × W = 10 × 3." }
  },
  {
    _id: "up-p6-ma-ap-007",
    level: "upperPrimary",
    class: "p6",
    subject: "math",
    topic: "Area & Perimeter",
    type: "multiText",
    text: "Answer both (numbers only): (a) Area of 12 cm by 4 cm  (b) Perimeter of 12 cm by 4 cm",
    acceptedSet: ["48", "32"],
    minAnswers: 2,
    feedback: { correct: "Nice! a) 48  b) 32.", incorrect: "a) L×W = 48. b) 2(L+W) = 2(12+4) = 32." }
  },
  {
    _id: "up-p6-ma-ap-008",
    level: "upperPrimary",
    class: "p6",
    subject: "math",
    topic: "Area & Perimeter",
    type: "text",
    text: "The area of a rectangle is 45 cm² and one side is 5 cm. Find the other side (number only).",
    accepted: ["9"],
    feedback: { correct: "Correct—9 cm.", incorrect: "Other side = Area ÷ side = 45 ÷ 5." }
  },
  {
    _id: "up-p6-ma-ap-009",
    level: "upperPrimary",
    class: "p6",
    subject: "math",
    topic: "Area & Perimeter",
    type: "text",
    text: "A square has area 81 cm². What is its side length? (number only).",
    accepted: ["9"],
    feedback: { correct: "Yes—9.", incorrect: "Side = √Area = √81." }
  },
  {
    _id: "up-p6-ma-ap-010",
    level: "upperPrimary",
    class: "p6",
    subject: "math",
    topic: "Area & Perimeter",
    type: "text",
    text: "A rectangle has perimeter 50 cm and width 10 cm. Find its length (number only).",
    accepted: ["15"],
    feedback: { correct: "Right—15.", incorrect: "P=2(L+W)→ 50=2(L+10)→ L+10=25→ L=15." }
  },

  // ===================== FACTORS & MULTIPLES (10) =====================
  {
    _id: "up-p6-ma-fm-001",
    level: "upperPrimary",
    class: "p6",
    subject: "math",
    topic: "Factors & Multiples",
    type: "text",
    text: "Find the greatest common factor (GCF) of 12 and 18 (number only).",
    accepted: ["6"],
    feedback: { correct: "Correct—6.", incorrect: "List factors and choose the greatest common one." }
  },
  {
    _id: "up-p6-ma-fm-002",
    level: "upperPrimary",
    class: "p6",
    subject: "math",
    topic: "Factors & Multiples",
    type: "text",
    text: "Find the least common multiple (LCM) of 3 and 4 (number only).",
    accepted: ["12"],
    feedback: { correct: "Yes—12.", incorrect: "Multiples of 3: 3,6,9,12…; of 4: 4,8,12… LCM=12." }
  },
  {
    _id: "up-p6-ma-fm-003",
    level: "upperPrimary",
    class: "p6",
    subject: "math",
    topic: "Factors & Multiples",
    type: "text",
    text: "Is 11 a prime number? (write 'yes' or 'no').",
    accepted: ["yes", "Yes"],
    feedback: { correct: "Correct—11 is prime.", incorrect: "Prime numbers have exactly two factors: 1 and itself." }
  },
  {
    _id: "up-p6-ma-fm-004",
    level: "upperPrimary",
    class: "p6",
    subject: "math",
    topic: "Factors & Multiples",
    type: "text",
    text: "Write the next multiple of 7 after 35 (number only).",
    accepted: ["42"],
    feedback: { correct: "Right—42.", incorrect: "Add 7 to 35 → 42." }
  },
  {
    _id: "up-p6-ma-fm-005",
    level: "upperPrimary",
    class: "p6",
    subject: "math",
    topic: "Factors & Multiples",
    type: "multiText",
    text: "Answer both (numbers only): (a) GCF of 8 and 12  (b) LCM of 6 and 8",
    acceptedSet: ["4", "24"],
    minAnswers: 2,
    feedback: { correct: "Good! a) 4  b) 24.", incorrect: "a) Common factors: 1,2,4 → GCF=4. b) LCM of 6 & 8 is 24." }
  },
  {
    _id: "up-p6-ma-fm-006",
    level: "upperPrimary",
    class: "p6",
    subject: "math",
    topic: "Factors & Multiples",
    type: "text",
    text: "Which number is a multiple of 9: 27 or 32? (write the number only).",
    accepted: ["27"],
    feedback: { correct: "Correct—27.", incorrect: "27 = 9×3." }
  },
  {
    _id: "up-p6-ma-fm-007",
    level: "upperPrimary",
    class: "p6",
    subject: "math",
    topic: "Factors & Multiples",
    type: "text",
    text: "Are 8 and 9 co-prime? (write 'yes' or 'no').",
    accepted: ["yes", "Yes"],
    feedback: { correct: "Yes—no common factor except 1.", incorrect: "They share no common factors beyond 1." }
  },
  {
    _id: "up-p6-ma-fm-008",
    level: "upperPrimary",
    class: "p6",
    subject: "math",
    topic: "Factors & Multiples",
    type: "text",
    text: "Find the GCF of 15 and 25 (number only).",
    accepted: ["5"],
    feedback: { correct: "Right—5.", incorrect: "Common factors of 15 & 25 are 1 and 5." }
  },
  {
    _id: "up-p6-ma-fm-009",
    level: "upperPrimary",
    class: "p6",
    subject: "math",
    topic: "Factors & Multiples",
    type: "text",
    text: "Find the LCM of 5 and 12 (number only).",
    accepted: ["60"],
    feedback: { correct: "Correct—60.", incorrect: "Multiples of 12: 12,24,36,48,60… 5 divides 60." }
  },
  {
    _id: "up-p6-ma-fm-010",
    level: "upperPrimary",
    class: "p6",
    subject: "math",
    topic: "Factors & Multiples",
    type: "text",
    text: "Is 21 a multiple of 3? (write 'yes' or 'no').",
    accepted: ["yes", "Yes"],
    feedback: { correct: "Yes—21 = 3×7.", incorrect: "21 ÷ 3 = 7, so it is a multiple." }
  },

  // ===================== ANGLES (10) =====================
  {
    _id: "up-p6-ma-an-001",
    level: "upperPrimary",
    class: "p6",
    subject: "math",
    topic: "Angles",
    type: "text",
    text: "What is the measure of a right angle? (number only).",
    accepted: ["90"],
    feedback: { correct: "Correct—90.", incorrect: "A right angle measures 90°." }
  },
  {
    _id: "up-p6-ma-an-002",
    level: "upperPrimary",
    class: "p6",
    subject: "math",
    topic: "Angles",
    type: "text",
    text: "What is the measure of a straight angle? (number only).",
    accepted: ["180"],
    feedback: { correct: "Yes—180.", incorrect: "A straight line angle is 180°." }
  },
  {
    _id: "up-p6-ma-an-003",
    level: "upperPrimary",
    class: "p6",
    subject: "math",
    topic: "Angles",
    type: "text",
    text: "An angle greater than 90° but less than 180° is called what? (write one word).",
    accepted: ["obtuse", "Obtuse"],
    feedback: { correct: "Right—obtuse.", incorrect: "Acute <90°, obtuse is between 90° and 180°." }
  },
  {
    _id: "up-p6-ma-an-004",
    level: "upperPrimary",
    class: "p6",
    subject: "math",
    topic: "Angles",
    type: "text",
    text: "Angles in a triangle add up to how many degrees? (number only).",
    accepted: ["180"],
    feedback: { correct: "Correct—180.", incorrect: "Triangle angle sum property = 180°." }
  },
  {
    _id: "up-p6-ma-an-005",
    level: "upperPrimary",
    class: "p6",
    subject: "math",
    topic: "Angles",
    type: "text",
    text: "Find the complement of 35° (number only).",
    accepted: ["55"],
    feedback: { correct: "Yes—55.", incorrect: "Complementary angles add to 90° → 90−35=55." }
  },
  {
    _id: "up-p6-ma-an-006",
    level: "upperPrimary",
    class: "p6",
    subject: "math",
    topic: "Angles",
    type: "text",
    text: "Find the supplement of 110° (number only).",
    accepted: ["70"],
    feedback: { correct: "Correct—70.", incorrect: "Supplementary angles add to 180° → 180−110=70." }
  },
  {
    _id: "up-p6-ma-an-007",
    level: "upperPrimary",
    class: "p6",
    subject: "math",
    topic: "Angles",
    type: "multiText",
    text: "Answer both (numbers only): (a) Complement of 24°  (b) Supplement of 145°",
    acceptedSet: ["66", "35"],
    minAnswers: 2,
    feedback: { correct: "Good! a) 66  b) 35.", incorrect: "a) 90−24=66. b) 180−145=35." }
  },
  {
    _id: "up-p6-ma-an-008",
    level: "upperPrimary",
    class: "p6",
    subject: "math",
    topic: "Angles",
    type: "text",
    text: "A reflex angle is greater than how many degrees? (number only).",
    accepted: ["180"],
    feedback: { correct: "Right—greater than 180.", incorrect: "Reflex angles are >180° and <360°." }
  },
  {
    _id: "up-p6-ma-an-009",
    level: "upperPrimary",
    class: "p6",
    subject: "math",
    topic: "Angles",
    type: "text",
    text: "Lines that meet at 90° are called what? (one word).",
    accepted: ["perpendicular", "Perpendicular"],
    feedback: { correct: "Correct—perpendicular.", incorrect: "Perpendicular lines meet at right angles." }
  },
  {
    _id: "up-p6-ma-an-010",
    level: "upperPrimary",
    class: "p6",
    subject: "math",
    topic: "Angles",
    type: "text",
    text: "A full turn is how many degrees? (number only).",
    accepted: ["360"],
    feedback: { correct: "Yes—360.", incorrect: "A complete revolution equals 360°." }
  },

  // ===================== GRAPHS (10) =====================
  {
    _id: "up-p6-ma-gr-001",
    level: "upperPrimary",
    class: "p6",
    subject: "math",
    topic: "Graphs",
    type: "text",
    text: "Which graph is best to show parts of a whole? (write one: pie/bar/line).",
    accepted: ["pie", "Pie", "pie chart", "Pie chart"],
    feedback: { correct: "Correct—pie chart.", incorrect: "Pie charts show proportions of a whole." }
  },
  {
    _id: "up-p6-ma-gr-002",
    level: "upperPrimary",
    class: "p6",
    subject: "math",
    topic: "Graphs",
    type: "text",
    text: "Which graph is best for comparing categories? (write one: bar/pie/line).",
    accepted: ["bar", "Bar", "bar graph", "Bar graph"],
    feedback: { correct: "Right—bar graph.", incorrect: "Bar graphs compare category quantities." }
  },
  {
    _id: "up-p6-ma-gr-003",
    level: "upperPrimary",
    class: "p6",
    subject: "math",
    topic: "Graphs",
    type: "text",
    text: "Which graph is best for showing changes over time? (write one: line/pie/bar).",
    accepted: ["line", "Line", "line graph", "Line graph"],
    feedback: { correct: "Yes—line graph.", incorrect: "Line graphs show trends over time." }
  },
  {
    _id: "up-p6-ma-gr-004",
    level: "upperPrimary",
    class: "p6",
    subject: "math",
    topic: "Graphs",
    type: "text",
    text: "A pictograph key says 1 picture = 5 learners. If a class shows 7 pictures, how many learners is that? (number only).",
    accepted: ["35"],
    feedback: { correct: "Correct—35.", incorrect: "Multiply pictures by key value: 7×5." }
  },
  {
    _id: "up-p6-ma-gr-005",
    level: "upperPrimary",
    class: "p6",
    subject: "math",
    topic: "Graphs",
    type: "multiText",
    text: "A tally shows 🚲=8 and 🛴=5. Answer both (numbers only): (a) Total items  (b) How many more bicycles?",
    acceptedSet: ["13", "3"],
    minAnswers: 2,
    feedback: { correct: "Nice! a) 13  b) 3.", incorrect: "Add for total; subtract 8−5 for the difference." }
  },
  {
    _id: "up-p6-ma-gr-006",
    level: "upperPrimary",
    class: "p6",
    subject: "math",
    topic: "Graphs",
    type: "text",
    text: "A bar chart shows: 🧃Juice=8, 🥛Milk=6, 💧Water=10. Which sold the most? (write one word).",
    accepted: ["Water", "water"],
    feedback: { correct: "Correct—Water.", incorrect: "Compare the heights/values: 10 is greatest." }
  },
  {
    _id: "up-p6-ma-gr-007",
    level: "upperPrimary",
    class: "p6",
    subject: "math",
    topic: "Graphs",
    type: "text",
    text: "Survey results: 🍎=5, 🍌=7, 🍊=4. What is the total number of fruits? (number only).",
    accepted: ["16"],
    feedback: { correct: "Right—16.", incorrect: "Add all counts: 5+7+4." }
  },
  {
    _id: "up-p6-ma-gr-008",
    level: "upperPrimary",
    class: "p6",
    subject: "math",
    topic: "Graphs",
    type: "text",
    text: "Heights (cm): 120, 135, 140. Which is the highest? (number only).",
    accepted: ["140"],
    feedback: { correct: "Correct—140.", incorrect: "Choose the largest value." }
  },
  {
    _id: "up-p6-ma-gr-009",
    level: "upperPrimary",
    class: "p6",
    subject: "math",
    topic: "Graphs",
    type: "text",
    text: "Rainfall (mm): Apr=50, May=80, Jun=40. Which month had the least? (write the month).",
    accepted: ["June", "Jun", "jun", "june"],
    feedback: { correct: "Yes—June.", incorrect: "Compare 50, 80, 40: least is 40 in June." }
  },
  {
    _id: "up-p6-ma-gr-010",
    level: "upperPrimary",
    class: "p6",
    subject: "math",
    topic: "Graphs",
    type: "text",
    text: "What should a graph title tell? (short phrase).",
    accepted: ["what the graph is about", "the topic", "the subject", "what it is about"],
    feedback: { correct: "Correct—what the graph is about.", incorrect: "A title states clearly what the graph shows." }
  }
];
