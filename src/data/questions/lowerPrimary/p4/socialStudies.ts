import type { Question } from "../../../../types";

export const p4SocialStudiesV2: Question[] = [
  // Home & Family Roles
  {
    _id: "lp-p4-ss2-home-1",
    level: "lowerPrimary",
    subject: "socialStudies",
    class: "p4",
    topic: "Home & Family Roles",
    type: "text",
    text: "Name one early morning duty done at home.",
    accepted: ["sweeping","fetching water","preparing breakfast","milking","cleaning","washing utensils","lighting fire"],
    feedback: { correct: "Yes—that’s a common home duty.", incorrect: "Examples: sweeping, fetching water, preparing breakfast." }
  },
  {
    _id: "lp-p4-ss2-home-2",
    level: "lowerPrimary",
    subject: "socialStudies",
    class: "p4",
    topic: "Home & Family Roles",
    type: "multiText",
    minAnswers: 2,
    text: "Write any two duties a responsible child should do at home.",
    acceptedSet: ["sweep","wash utensils","fetch water","help cook","clean compound","look after baby","collect firewood"],
    feedback: { correct: "Great—those show responsibility.", incorrect: "Examples: sweep, wash utensils, fetch water, look after baby." }
  },

  // Farming & Tools
  {
    _id: "lp-p4-ss2-farm-1",
    level: "lowerPrimary",
    subject: "socialStudies",
    class: "p4",
    topic: "Farming & Tools",
    type: "text",
    text: "Name one tool commonly used on a small farm.",
    accepted: ["hoe","panga","slasher","rake"],
    feedback: { correct: "Yes—that’s a farm tool.", incorrect: "Examples: hoe, panga, slasher, rake." }
  },
  {
    _id: "lp-p4-ss2-farm-2",
    level: "lowerPrimary",
    subject: "socialStudies",
    class: "p4",
    topic: "Farming & Tools",
    type: "text",
    text: "Why do farmers sharpen tools like hoes and pangas?",
    accepted: ["to work better","to cut well","to dig easily","to make them effective","to make work easy","for efficiency"],
    feedback: { correct: "Right—sharp tools make work easier and faster.", incorrect: "They sharpen them to make work easier and faster." }
  },

  // Water & Sanitation
  {
    _id: "lp-p4-ss2-water-1",
    level: "lowerPrimary",
    subject: "socialStudies",
    class: "p4",
    topic: "Water & Sanitation",
    type: "text",
    text: "From which place do many homes fetch water in rural areas?",
    accepted: ["river","well","spring","borehole","stream"],
    feedback: { correct: "Yes—those are common water sources.", incorrect: "Examples: river, spring, borehole, well." }
  },
  {
    _id: "lp-p4-ss2-water-2",
    level: "lowerPrimary",
    subject: "socialStudies",
    class: "p4",
    topic: "Water & Sanitation",
    type: "text",
    text: "Give one safe way of making water clean for drinking.",
    accepted: ["boiling","boil","filtering","filter","chlorination","use water guard"],
    feedback: { correct: "Correct—that makes water safer.", incorrect: "Examples: boil, filter, or chlorinate the water." }
  },

  // Community & School
  {
    _id: "lp-p4-ss2-comm-1",
    level: "lowerPrimary",
    subject: "socialStudies",
    class: "p4",
    topic: "Community & School",
    type: "text",
    text: "Which ministry do all schools in Uganda belong to?",
    accepted: ["ministry of education and sports","education and sports","moes"],
    feedback: { correct: "Yes—Ministry of Education and Sports.", incorrect: "They belong to the Ministry of Education and Sports." }
  },
  {
    _id: "lp-p4-ss2-comm-2",
    level: "lowerPrimary",
    subject: "socialStudies",
    class: "p4",
    topic: "Community & School",
    type: "text",
    text: "Write one good behavior learners should show at school.",
    accepted: ["respect teachers","obey rules","keep time","be honest","keep school clean","help others","listen in class"],
    feedback: { correct: "Great—good school behavior.", incorrect: "Examples: respect teachers, obey rules, keep school clean." }
  },

  // Maps & Direction
  {
    _id: "lp-p4-ss2-map-1",
    level: "lowerPrimary",
    subject: "socialStudies",
    class: "p4",
    topic: "Maps & Direction",
    type: "text",
    text: "In which direction does the sun rise?",
    accepted: ["east","the east"],
    feedback: { correct: "Correct—East.", incorrect: "It rises in the East." }
  },
  {
    _id: "lp-p4-ss2-map-2",
    level: "lowerPrimary",
    subject: "socialStudies",
    class: "p4",
    topic: "Maps & Direction",
    type: "text",
    text: "Name the line of latitude at 0° that crosses Uganda.",
    accepted: ["equator","the equator"],
    feedback: { correct: "Yes—the Equator.", incorrect: "It is the Equator." }
  },

  // Culture & Values
  {
    _id: "lp-p4-ss2-cult-1",
    level: "lowerPrimary",
    subject: "socialStudies",
    class: "p4",
    topic: "Culture & Values",
    type: "text",
    text: "Give one reason why learners should not dodge lessons.",
    accepted: ["it is bad","you miss learning","you fail exams","disrespectful","you will not learn","wastes time"],
    feedback: { correct: "Exactly—dodging lessons stops learning.", incorrect: "Because you miss learning and it is bad behavior." }
  },
  {
    _id: "lp-p4-ss2-cult-2",
    level: "lowerPrimary",
    subject: "socialStudies",
    class: "p4",
    topic: "Culture & Values",
    type: "text",
    text: "Write one value shown by obeying teachers.",
    accepted: ["respect","discipline","obedience","good manners"],
    feedback: { correct: "Yes—respect and discipline.", incorrect: "It shows values like respect and discipline." }
  },

  // Trade & Money (from shopping-list vibe)
  {
    _id: "lp-p4-ss2-trade-1",
    level: "lowerPrimary",
    subject: "socialStudies",
    class: "p4",
    topic: "Trade & Money",
    type: "text",
    text: "What do we call a written record of items to buy and their prices?",
    accepted: ["shopping list","a shopping list","list"],
    feedback: { correct: "Yes—a shopping list.", incorrect: "It is called a shopping list." }
  },
  {
    _id: "lp-p4-ss2-trade-2",
    level: "lowerPrimary",
    subject: "socialStudies",
    class: "p4",
    topic: "Trade & Money",
    type: "text",
    text: "Give one advantage of preparing a shopping list before buying.",
    accepted: ["saves money","avoids forgetting","avoids overspending","plans spending","saves time"],
    feedback: { correct: "Right—shopping lists help plan and save.", incorrect: "It helps you plan, save money and avoid forgetting items." }
  }
];
