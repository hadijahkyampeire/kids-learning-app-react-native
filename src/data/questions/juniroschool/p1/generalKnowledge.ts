import { type Question } from "../../../../types";
    
export const juniorSchoolP1GeneralKnowledgeQuestions: Question[] = [
  {
    _id: "js-p1-gk-community-001",
    level: "juniorSchool",
    subject: "generalKnowledge",
    class: "p1",
    topic: "Community & Services",
    text: "Who helps us learn? Select all that apply.",
    options: [
      "teacher 👩‍🏫",
      "librarian 📚",
      "tutor 🎓",
      "chef 👨‍🍳",
      "driver 🚗"
    ],
    correct: ["teacher 👩‍🏫", "librarian 📚", "tutor 🎓"],
    type: "multiChoice",
    feedback: {
      correct: "Yes—these people help us learn!",
      incorrect: "Think who teaches us."
    }
  },
  {
    _id: "js-p1-gk-community-002",
    level: "juniorSchool",
    subject: "generalKnowledge",
    class: "p1",
    topic: "Community & Services",
    text: "Who helps take care of sick people? Select all that apply.",
    options: [
      "doctor 👩‍⚕️",
      "nurse 👨‍⚕️",
      "pharmacist 💊",
      "chef 👨‍🍳",
      "driver 🚗"
    ],
    correct: ["doctor 👩‍⚕️", "nurse 👨‍⚕️", "pharmacist 💊"],
    type: "multiChoice",
    feedback: {
      correct: "These people help us stay healthy!",
      incorrect: "Think about healthcare workers."
    }
  },
  {
    _id: "js-p1-gk-community-003",
    level: "juniorSchool",
    subject: "generalKnowledge",
    class: "p1",
    topic: "Community & Services",
    text: "Where do we borrow books?",
    options: [
      "library 📚",
      "market 🛒",
      "park 🛝"
    ],
    correct: "library 📚",
    type: "choice",
    feedback: {
      correct: "Libraries have books.",
      incorrect: "Look for books."
    }
  },
  {
    _id: "js-p1-gk-transport-001",
    level: "juniorSchool",
    subject: "generalKnowledge",
    class: "p1",
    topic: "Transport",
    text: "Which vehicles fly? Select all that apply.",
    options: [
      "airplane ✈️",
      "helicopter 🚁",
      "rocket 🚀",
      "car 🚗",
      "boat ⛵"
    ],
    correct: ["airplane ✈️", "helicopter 🚁", "rocket 🚀"],
    type: "multiChoice",
    feedback: {
      correct: "These fly in the sky!",
      incorrect: "Think what goes up."
    }
  },
  {
    _id: "js-p1-gk-transport-002",
    level: "juniorSchool",
    subject: "generalKnowledge",
    class: "p1",
    topic: "Transport",
    text: "Which vehicles go on water? Select all that apply.",
    options: [
      "boat ⛵",
      "ship 🚢",
      "canoe 🛶",
      "bicycle 🚲",
      "train 🚂"
    ],
    correct: ["boat ⛵", "ship 🚢", "canoe 🛶"],
    type: "multiChoice",
    feedback: {
      correct: "These float on water!",
      incorrect: "Think water transport."
    }
  },
  {
    _id: "js-p1-gk-transport-003",
    level: "juniorSchool",
    subject: "generalKnowledge",
    class: "p1",
    topic: "Transport",
    text: "What do we do at a red traffic light?",
    options: [
      "stop 🛑",
      "go 🟢",
      "run 🏃"
    ],
    correct: "stop 🛑",
    type: "choice",
    feedback: {
      correct: "Red means stop!",
      incorrect: "Red light = stop always."
    }
  },
  {
    _id: "js-p1-gk-food-001",
    level: "juniorSchool",
    subject: "generalKnowledge",
    class: "p1",
    topic: "Food & Nutrition",
    text: "Which are fruits? Select all that apply.",
    options: [
      "apple 🍎",
      "banana 🍌",
      "orange 🍊",
      "carrot 🥕",
      "potato 🥔"
    ],
    correct: ["apple 🍎", "banana 🍌", "orange 🍊"],
    type: "multiChoice",
    feedback: {
      correct: "These are all fruits!",
      incorrect: "Think sweet, juicy foods."
    }
  },
  {
    _id: "js-p1-gk-food-002",
    level: "juniorSchool",
    subject: "generalKnowledge",
    class: "p1",
    topic: "Food & Nutrition",
    text: "Which foods are vegetables? Select all that apply.",
    options: [
      "carrot 🥕",
      "broccoli 🥦",
      "spinach 🥬",
      "cake 🍰",
      "ice cream 🍦"
    ],
    correct: ["carrot 🥕", "broccoli 🥦", "spinach 🥬"],
    type: "multiChoice",
    feedback: {
      correct: "These are healthy vegetables!",
      incorrect: "Think healthy greens."
    }
  },
  {
    _id: "js-p1-gk-food-003",
    level: "juniorSchool",
    subject: "generalKnowledge",
    class: "p1",
    topic: "Food & Nutrition",
    text: "Which drinks are healthy? Select all that apply.",
    options: [
      "water 💧",
      "milk 🥛",
      "fruit juice 🧃",
      "soda 🥤",
      "coffee ☕"
    ],
    correct: ["water 💧", "milk 🥛", "fruit juice 🧃"],
    type: "multiChoice",
    feedback: {
      correct: "These are healthy drinks!",
      incorrect: "Think what's good for you."
    }
  },
  {
    _id: "js-p1-gk-environment-001",
    level: "juniorSchool",
    subject: "generalKnowledge",
    class: "p1",
    topic: "Environment",
    text: "Which helps plants grow? Select all that apply.",
    options: [
      "water 💧",
      "sunlight ☀️",
      "soil 🌱",
      "rocks 🪨",
      "toys 🧸"
    ],
    correct: ["water 💧", "sunlight ☀️", "soil 🌱"],
    type: "multiChoice",
    feedback: {
      correct: "Plants need these to grow!",
      incorrect: "Think what plants use."
    }
  },
  {
    _id: "js-p1-gk-environment-002",
    level: "juniorSchool",
    subject: "generalKnowledge",
    class: "p1",
    topic: "Environment",
    text: "What should we do with trash?",
    options: [
      "put in bin 🗑️",
      "throw on ground 😠",
      "hide it 🙈"
    ],
    correct: "put in bin 🗑️",
    type: "choice",
    feedback: {
      correct: "Yes! Keep our world clean!",
      incorrect: "Think about cleanliness."
    }
  },
  {
    _id: "js-p1-gk-environment-003",
    level: "juniorSchool",
    subject: "generalKnowledge",
    class: "p1",
    topic: "Environment",
    text: "Which are weather types? Select all that apply.",
    options: [
      "sunny ☀️",
      "rainy 🌧️",
      "snowy 🌨️",
      "book 📚",
      "car 🚗"
    ],
    correct: ["sunny ☀️", "rainy 🌧️", "snowy 🌨️"],
    type: "multiChoice",
    feedback: {
      correct: "These are types of weather!",
      incorrect: "Think about the sky."
    }
  },
  {
    _id: "js-p1-gk-safety-001",
    level: "juniorSchool",
    subject: "generalKnowledge",
    class: "p1",
    topic: "Safety",
    text: "What should we do before crossing the road?",
    options: [
      "look both ways 👀",
      "run fast 🏃",
      "close eyes 🙈"
    ],
    correct: "look both ways 👀",
    type: "choice",
    feedback: {
      correct: "Stay safe - always look!",
      incorrect: "Think about being safe."
    }
  },
  {
    _id: "js-p1-gk-safety-002",
    level: "juniorSchool",
    subject: "generalKnowledge",
    class: "p1",
    topic: "Safety",
    text: "Which people help keep us safe? Select all that apply.",
    options: [
      "police 👮",
      "firefighter 🚒",
      "doctor 👩‍⚕️",
      "thief 🦹",
      "bully 😠"
    ],
    correct: ["police 👮", "firefighter 🚒", "doctor 👩‍⚕️"],
    type: "multiChoice",
    feedback: {
      correct: "These people protect us!",
      incorrect: "Think about helpers."
    }
  },
  {
    _id: "js-p1-gk-safety-003",
    level: "juniorSchool",
    subject: "generalKnowledge",
    class: "p1",
    topic: "Safety",
    text: "Which numbers are for emergencies? Select all that apply.",
    options: [
      "911 🚨",
      "999 🚔",
      "112 🚑",
      "123 🎲",
      "456 🎯"
    ],
    correct: ["911 🚨", "999 🚔", "112 🚑"],
    type: "multiChoice",
    feedback: {
      correct: "These are emergency numbers!",
      incorrect: "Think help numbers."
    }
  }
];