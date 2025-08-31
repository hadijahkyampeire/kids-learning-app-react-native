import { type Question } from "../../../../types";

/** IDs: js-p1-ma-<topicCode>-<nnn>
 * topicCode: num (Number & Patterns) | add | sub | shapes | meas
 */

const num: Question[] = [
  {
    _id: "js-p1-ma-num-001",
    level: "juniorSchool",
    subject: "math",
    class: "p1",
    topic: "Number & Patterns",
    text: "How many stars? ⭐⭐",
    options: ["1", "2", "4"],
    correct: "2",
    feedback: { correct: "Two stars!", incorrect: "Count slowly." }
  },
  {
    _id: "js-p1-ma-num-002",
    level: "juniorSchool",
    subject: "math",
    class: "p1",
    topic: "Number & Patterns",
    text: "What comes next? 3, 4, 5, __",
    options: ["6", "7", "2"],
    correct: "6",
    feedback: { correct: "Count forward by 1.", incorrect: "Think +1 pattern." }
  },
  {
    _id: "js-p1-ma-num-003",
    level: "juniorSchool",
    subject: "math",
    class: "p1",
    topic: "Number & Patterns",
    text: "Which is even?",
    options: ["4", "5", "7"],
    correct: "4",
    feedback: { correct: "Even numbers end 0/2/4/6/8.", incorrect: "Check the last digit." }
  },
  {
    _id: "js-p1-ma-num-004",
    level: "juniorSchool",
    subject: "math",
    class: "p1",
    topic: "Number & Patterns",
    text: "AB pattern: 🔵🔴🔵🔴 __",
    options: ["🔵", "🔴", "🟢"],
    correct: "🔵",
    feedback: { correct: "AB repeats.", incorrect: "Blue, red, blue, red…" }
  },
  {
    _id: "js-p1-ma-num-005",
    level: "juniorSchool",
    subject: "math",
    class: "p1",
    topic: "Number & Patterns",
    text: "Which is greater?",
    options: ["9", "6", "3"],
    correct: "9",
    feedback: { correct: "9 is biggest.", incorrect: "Pick the largest." }
  },
  {
    _id: "js-p1-ma-num-006",
    level: "juniorSchool",
    subject: "math",
    class: "p1",
    topic: "Number & Patterns",
    text: "Complete: 10, __, 8, 7 (counting down)",
    options: ["9", "11", "6"],
    correct: "9",
    feedback: { correct: "10, 9, 8, 7 ✅", incorrect: "Count backward by 1." }
  },
  {
    _id: "js-p1-ma-num-007",
    level: "juniorSchool",
    subject: "math",
    class: "p1",
    topic: "Number & Patterns",
    text: "Odd number?",
    options: ["5", "8", "2"],
    correct: "5",
    feedback: { correct: "5 is odd.", incorrect: "Odd ends 1/3/5/7/9." }
  },
  {
    _id: "js-p1-ma-num-008",
    level: "juniorSchool",
    subject: "math",
    class: "p1",
    topic: "Number & Patterns",
    text: "AAB pattern: 🐱🐱🐶 🐱🐱🐶 __",
    options: ["🐱", "🐶", "🐭"],
    correct: "🐱",
    feedback: { correct: "Two cats, one dog.", incorrect: "AAB repeats." }
  }
];

const add: Question[] = [
  {
    _id: "js-p1-ma-add-001",
    level: "juniorSchool",
    subject: "math",
    class: "p1",
    topic: "Addition 0–10",
    text: "2 + 3 = ?",
    options: ["4", "5", "6"],
    correct: "5",
    feedback: { correct: "Nice adding!", incorrect: "Count on from 2: 3,4,5." }
  },
  {
    _id: "js-p1-ma-add-002",
    level: "juniorSchool",
    subject: "math",
    class: "p1",
    topic: "Addition 0–10",
    text: "🧁🧁 + 🧁 = ?",
    options: ["2", "3", "4"],
    correct: "3",
    feedback: { correct: "Three cupcakes!", incorrect: "Count all the 🧁." }
  },
  {
    _id: "js-p1-ma-add-003",
    level: "juniorSchool",
    subject: "math",
    class: "p1",
    topic: "Addition 0–10",
    text: "4 + 1 = ?",
    options: ["5", "6", "4"],
    correct: "5",
    feedback: { correct: "4 and 1 make 5.", incorrect: "Add one more." }
  },
  {
    _id: "js-p1-ma-add-004",
    level: "juniorSchool",
    subject: "math",
    class: "p1",
    topic: "Addition 0–10",
    text: "3 + 3 = ?",
    options: ["5", "6", "7"],
    correct: "6",
    feedback: { correct: "Double 3 is 6.", incorrect: "Try grouping." }
  },
  {
    _id: "js-p1-ma-add-005",
    level: "juniorSchool",
    subject: "math",
    class: "p1",
    topic: "Addition 0–10",
    text: "1 + 0 = ?",
    options: ["0", "1", "2"],
    correct: "1",
    feedback: { correct: "Zero adds nothing.", incorrect: "Adding zero keeps it same." }
  },
  {
    _id: "js-p1-ma-add-006",
    level: "juniorSchool",
    subject: "math",
    class: "p1",
    topic: "Addition 0–10",
    text: "5 + 4 = ?",
    options: ["8", "9", "10"],
    correct: "9",
    feedback: { correct: "Great job!", incorrect: "Add again carefully." }
  },
  {
    _id: "js-p1-ma-add-007",
    level: "juniorSchool",
    subject: "math",
    class: "p1",
    topic: "Addition 0–10",
    text: "🐶 + 🐶 = ? dogs",
    options: ["1", "2", "3"],
    correct: "2",
    feedback: { correct: "Two dogs!", incorrect: "Count the dogs." }
  },
  {
    _id: "js-p1-ma-add-008",
    level: "juniorSchool",
    subject: "math",
    class: "p1",
    topic: "Addition 0–10",
    text: "7 + 2 = ?",
    options: ["8", "9", "10"],
    correct: "9",
    feedback: { correct: "Nice!", incorrect: "7, then 8,9." }
  }
];

const sub: Question[] = [
  {
    _id: "js-p1-ma-sub-001",
    level: "juniorSchool",
    subject: "math",
    class: "p1",
    topic: "Subtraction 0–10",
    text: "5 − 2 = ?",
    options: ["2", "3", "4"],
    correct: "3",
    feedback: { correct: "Three left.", incorrect: "Count back two steps." }
  },
  {
    _id: "js-p1-ma-sub-002",
    level: "juniorSchool",
    subject: "math",
    class: "p1",
    topic: "Subtraction 0–10",
    text: "🍎🍎🍎 − 🍎 = ? apples",
    options: ["1", "2", "3"],
    correct: "2",
    feedback: { correct: "Two apples left.", incorrect: "Take away one." }
  },
  {
    _id: "js-p1-ma-sub-003",
    level: "juniorSchool",
    subject: "math",
    class: "p1",
    topic: "Subtraction 0–10",
    text: "10 − 7 = ?",
    options: ["2", "3", "4"],
    correct: "3",
    feedback: { correct: "Good!", incorrect: "Count back from 10." }
  },
  {
    _id: "js-p1-ma-sub-004",
    level: "juniorSchool",
    subject: "math",
    class: "p1",
    topic: "Subtraction 0–10",
    text: "6 − 1 = ?",
    options: ["4", "5", "6"],
    correct: "5",
    feedback: { correct: "Five.", incorrect: "Take away one." }
  },
  {
    _id: "js-p1-ma-sub-005",
    level: "juniorSchool",
    subject: "math",
    class: "p1",
    topic: "Subtraction 0–10",
    text: "3 − 3 = ?",
    options: ["0", "1", "2"],
    correct: "0",
    feedback: { correct: "Zero left.", incorrect: "Same number minus itself is 0." }
  },
  {
    _id: "js-p1-ma-sub-006",
    level: "juniorSchool",
    subject: "math",
    class: "p1",
    topic: "Subtraction 0–10",
    text: "8 − 5 = ?",
    options: ["2", "3", "4"],
    correct: "3",
    feedback: { correct: "Three left.", incorrect: "Count down: 8,7,6,5 → 3." }
  },
  {
    _id: "js-p1-ma-sub-007",
    level: "juniorSchool",
    subject: "math",
    class: "p1",
    topic: "Subtraction 0–10",
    text: "🧸🧸🧸🧸 − 🧸🧸 = ?",
    options: ["1", "2", "3"],
    correct: "2",
    feedback: { correct: "Two toys remain.", incorrect: "Remove two from four." }
  },
  {
    _id: "js-p1-ma-sub-008",
    level: "juniorSchool",
    subject: "math",
    class: "p1",
    topic: "Subtraction 0–10",
    text: "9 − 0 = ?",
    options: ["0", "9", "10"],
    correct: "9",
    feedback: { correct: "Subtracting zero changes nothing.", incorrect: "Zero means take away none." }
  }
];

const shapes: Question[] = [
  {
    _id: "js-p1-ma-shapes-001",
    level: "juniorSchool",
    subject: "math",
    class: "p1",
    topic: "Shapes & Position",
    text: "Which one is a circle?",
    options: ["⚫", "🔺", "⬜"],
    correct: "⚫",
    feedback: { correct: "Round like a ball.", incorrect: "Circle is round." }
  },
  {
    _id: "js-p1-ma-shapes-002",
    level: "juniorSchool",
    subject: "math",
    class: "p1",
    topic: "Shapes & Position",
    text: "Which one is a triangle?",
    options: ["🔺", "⚫", "⬜"],
    correct: "🔺",
    feedback: { correct: "Three sides!", incorrect: "Find 3 corners." }
  },
  {
    _id: "js-p1-ma-shapes-003",
    level: "juniorSchool",
    subject: "math",
    class: "p1",
    topic: "Shapes & Position",
    text: "Square has __ sides.",
    options: ["4", "3", "2"],
    correct: "4",
    feedback: { correct: "Four equal sides.", incorrect: "Count the edges." }
  },
  {
    _id: "js-p1-ma-shapes-004",
    level: "juniorSchool",
    subject: "math",
    class: "p1",
    topic: "Shapes & Position",
    text: "The ball is __ the box. (📦\n⚽)",
    options: ["under", "over", "behind"],
    correct: "under",
    feedback: { correct: "Under means below.", incorrect: "Look at its position." }
  },
  {
    _id: "js-p1-ma-shapes-005",
    level: "juniorSchool",
    subject: "math",
    class: "p1",
    topic: "Shapes & Position",
    text: "The cat is __ the table. (🐱🪑)",
    options: ["on", "in", "behind"],
    correct: "on",
    feedback: { correct: "On top of it.", incorrect: "Where is the cat placed?" }
  },
  {
    _id: "js-p1-ma-shapes-006",
    level: "juniorSchool",
    subject: "math",
    class: "p1",
    topic: "Shapes & Position",
    text: "Which is a rectangle?",
    options: ["🟦 (long)", "⚫", "🔺"],
    correct: "🟦 (long)",
    feedback: { correct: "Four sides; two are longer.", incorrect: "Look for long opposite sides." }
  },
  {
    _id: "js-p1-ma-shapes-007",
    level: "juniorSchool",
    subject: "math",
    class: "p1",
    topic: "Shapes & Position",
    text: "The dog is __ the chair. (🐶🪑)",
    options: ["behind", "under", "in"],
    correct: "behind",
    feedback: { correct: "Behind the chair.", incorrect: "Think of back side." }
  },
  {
    _id: "js-p1-ma-shapes-008",
    level: "juniorSchool",
    subject: "math",
    class: "p1",
    topic: "Shapes & Position",
    text: "Pick the shape with no sides.",
    options: ["⚫", "⬜", "🔺"],
    correct: "⚫",
    feedback: { correct: "Circle has no sides.", incorrect: "Count the edges." }
  }
];

const meas: Question[] = [
  {
    _id: "js-p1-ma-meas-001",
    level: "juniorSchool",
    subject: "math",
    class: "p1",
    topic: "Measurement & Time",
    text: "Which is heavier?",
    options: ["rock 🪨", "feather 🪶", "leaf 🍃"],
    correct: "rock 🪨",
    feedback: { correct: "Rocks are heavy.", incorrect: "Think weight." }
  },
  {
    _id: "js-p1-ma-meas-002",
    level: "juniorSchool",
    subject: "math",
    class: "p1",
    topic: "Measurement & Time",
    text: "Which is longer?",
    options: ["pencil ✏️", "eraser 🧽", "coin 🪙"],
    correct: "pencil ✏️",
    feedback: { correct: "Pencil is long.", incorrect: "Compare lengths." }
  },
  {
    _id: "js-p1-ma-meas-003",
    level: "juniorSchool",
    subject: "math",
    class: "p1",
    topic: "Measurement & Time",
    text: "Morning ☀️ or Night 🌙 for breakfast?",
    options: ["Morning ☀️", "Night 🌙"],
    correct: "Morning ☀️",
    feedback: { correct: "We eat breakfast in morning.", incorrect: "Think day start." }
  },
  {
    _id: "js-p1-ma-meas-004",
    level: "juniorSchool",
    subject: "math",
    class: "p1",
    topic: "Measurement & Time",
    text: "Which holds more water?",
    options: ["bucket 🪣", "cup ☕", "spoon 🥄"],
    correct: "bucket 🪣",
    feedback: { correct: "Bucket holds most.", incorrect: "Capacity comparison." }
  },
  {
    _id: "js-p1-ma-meas-005",
    level: "juniorSchool",
    subject: "math",
    class: "p1",
    topic: "Measurement & Time",
    text: "Clock shows 3 o’clock 🕒. What time is it?",
    options: ["3 o’clock", "6 o’clock", "9 o’clock"],
    correct: "3 o’clock",
    feedback: { correct: "Short hand at 3.", incorrect: "Read the hands." }
  },
  {
    _id: "js-p1-ma-meas-006",
    level: "juniorSchool",
    subject: "math",
    class: "p1",
    topic: "Measurement & Time",
    text: "Which is shorter?",
    options: ["straw 🥤", "rope 🪢 (long)", "broom 🧹"],
    correct: "straw 🥤",
    feedback: { correct: "Shortest object.", incorrect: "Compare sizes." }
  },
  {
    _id: "js-p1-ma-meas-007",
    level: "juniorSchool",
    subject: "math",
    class: "p1",
    topic: "Measurement & Time",
    text: "Day after Monday is…",
    options: ["Tuesday", "Sunday", "Friday"],
    correct: "Tuesday",
    feedback: { correct: "Mon → Tue.", incorrect: "Think of weekdays order." }
  },
  {
    _id: "js-p1-ma-meas-008",
    level: "juniorSchool",
    subject: "math",
    class: "p1",
    topic: "Measurement & Time",
    text: "Which container is empty?",
    options: ["🫙 (empty)", "🫗 (pouring)", "🍶 (full)"],
    correct: "🫙 (empty)",
    feedback: { correct: "Empty jar.", incorrect: "Look carefully at icons." }
  }
];

export const mathP1: Question[] = [...num, ...add, ...sub, ...shapes, ...meas];
