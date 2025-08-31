import { type Question } from "../../types";

export const upperPrimaryQuestionsData: Question[] = [
  // ====================== P6 ======================

  // --- English (P6) ---
  {
    _id: "1",
    level: "upperPrimary",
    subject: "english",
    class: "p6",
    topic: "Grammar",
    text: "Choose the correct word: Sarah and ___ are going to class.",
    options: ["me", "I", "mine"],
    correct: "I",
    feedback: {
      correct: "Yes—'Sarah and I' is correct.",
      incorrect: "Use 'I' when it’s part of the subject."
    }
  },
  {
    _id: "2",
    level: "upperPrimary",
    subject: "english",
    class: "p6",
    topic: "Punctuation",
    text: "Which sentence is punctuated correctly?",
    options: [
      "We bought mangoes oranges and bananas.",
      "We bought mangoes, oranges and bananas.",
      "We bought mangoes, oranges, and bananas."
    ],
    correct: "We bought mangoes, oranges, and bananas.",
    feedback: {
      correct: "Correct—use commas in a list.",
      incorrect: "Lists usually need commas between items."
    }
  },
  {
    _id: "3",
    level: "upperPrimary",
    subject: "english",
    class: "p6",
    topic: "Comprehension",
    text: "Read: “Amina feeds the chickens every morning.” What does Amina do?",
    options: ["She feeds chickens", "She sells chickens", "She cooks chickens"],
    correct: "She feeds chickens",
    feedback: {
      correct: "Right!",
      incorrect: "Look closely at the sentence meaning."
    }
  },

  // --- Math (P6) ---
  {
    _id: "4",
    level: "upperPrimary",
    subject: "math",
    class: "p6",
    topic: "Fractions",
    text: "Simplify: 6/9",
    options: ["2/3", "3/5", "4/6"],
    correct: "2/3",
    feedback: {
      correct: "Great! Divide top and bottom by 3.",
      incorrect: "Try reducing by the greatest common factor."
    }
  },
  {
    _id: "5",
    level: "upperPrimary",
    subject: "math",
    class: "p6",
    topic: "Decimals",
    text: "Which is greater?",
    options: ["0.7", "0.65", "0.57"],
    correct: "0.7",
    feedback: {
      correct: "Yes—0.70 > 0.65 > 0.57.",
      incorrect: "Compare tenths first, then hundredths."
    }
  },
  {
    _id: "6",
    level: "upperPrimary",
    subject: "math",
    class: "p6",
    topic: "Area & Perimeter",
    text: "Find the perimeter: length 9 cm, width 4 cm (rectangle).",
    options: ["26 cm", "13 cm", "36 cm"],
    correct: "26 cm",
    feedback: {
      correct: "Perimeter = 2 × (9 + 4) = 26.",
      incorrect: "Add all sides or use 2 × (L + W)."
    }
  },

  // --- Science (P6) ---
  {
    _id: "7",
    level: "upperPrimary",
    subject: "science",
    class: "p6",
    topic: "Reproductive System",
    text: "In plants, the joining of pollen and ovule is called ____.",
    options: ["Fertilization", "Transpiration", "Germination"],
    correct: "Fertilization",
    feedback: {
      correct: "Yes!",
      incorrect: "Fertilization happens after pollination."
    }
  },
  {
    _id: "8",
    level: "upperPrimary",
    subject: "science",
    class: "p6",
    topic: "Flower Parts",
    text: "Which is the female part of a flower?",
    options: ["Pistil", "Stamen", "Sepal"],
    correct: "Pistil",
    feedback: {
      correct: "Correct!",
      incorrect: "Stamen is male; pistil (carpel) is female."
    }
  },
  {
    _id: "9",
    level: "upperPrimary",
    subject: "science",
    class: "p6",
    topic: "Insect Body",
    text: "Insects have ____ legs.",
    options: ["4", "6", "8"],
    correct: "6",
    feedback: {
      correct: "Yes—three pairs.",
      incorrect: "Count the pairs: 3 × 2 = 6."
    }
  },

  // --- Social Studies (P6) ---
  {
    _id: "10",
    level: "upperPrimary",
    subject: "socialStudies",
    class: "p6",
    topic: "East Africa",
    text: "Which of these is NOT in East Africa?",
    options: ["Kenya", "Uganda", "Ghana"],
    correct: "Ghana",
    feedback: {
      correct: "Right—Ghana is in West Africa.",
      incorrect: "Kenya and Uganda are in East Africa."
    }
  },
  {
    _id: "11",
    level: "upperPrimary",
    subject: "socialStudies",
    class: "p6",
    topic: "Lakes & Rivers",
    text: "Lake Victoria is shared by Uganda, Kenya, and ____.",
    options: ["Tanzania", "Somalia", "Ethiopia"],
    correct: "Tanzania",
    feedback: {
      correct: "Correct!",
      incorrect: "It borders Tanzania too."
    }
  },
  {
    _id: "12",
    level: "upperPrimary",
    subject: "socialStudies",
    class: "p6",
    topic: "Compass",
    text: "NE (north-east) lies between ____.",
    options: ["North & East", "East & South", "West & North"],
    correct: "North & East",
    feedback: {
      correct: "Yes!",
      incorrect: "Think of the 8-point compass."
    }
  },

  // --- General Knowledge (P6) ---
  {
    _id: "13",
    level: "upperPrimary",
    subject: "generalKnowledge",
    class: "p6",
    topic: "Geography",
    text: "The line around Earth at 0° latitude is the ____.",
    options: ["Equator", "Prime Meridian", "Tropic of Capricorn"],
    correct: "Equator",
    feedback: {
      correct: "Yes!",
      incorrect: "0° latitude is the Equator."
    }
  },
  {
    _id: "14",
    level: "upperPrimary",
    subject: "generalKnowledge",
    class: "p6",
    topic: "Environment",
    text: "Which action saves water?",
    options: [
      "Turning off the tap while brushing",
      "Watering at noon",
      "Leaving leaks unfixed"
    ],
    correct: "Turning off the tap while brushing",
    feedback: {
      correct: "Good habit!",
      incorrect: "Try not to waste water."
    }
  },
  {
    _id: "15",
    level: "upperPrimary",
    subject: "generalKnowledge",
    class: "p6",
    topic: "Politics",
    text: "Democracy means people ____.",
    options: [
      "vote to choose leaders",
      "are chosen by lottery",
      "never change leaders"
    ],
    correct: "vote to choose leaders",
    feedback: {
      correct: "Correct!",
      incorrect: "In democracy, citizens choose leaders."
    }
  },

  // --- Religion (P6) ---
  {
    _id: "16",
    level: "upperPrimary",
    subject: "religion",
    class: "p6",
    topic: "Pillars",
    text: "How many pillars of Islam are there?",
    options: ["3", "4", "5"],
    correct: "5",
    feedback: {
      correct: "Yes—five pillars.",
      incorrect: "Review the five pillars."
    }
  },
  {
    _id: "17",
    level: "upperPrimary",
    subject: "religion",
    class: "p6",
    topic: "Worship",
    text: "Muslims pray in a ____.",
    options: ["Mosque", "Church", "Temple"],
    correct: "Mosque",
    feedback: {
      correct: "Right!",
      incorrect: "A mosque is the Muslim place of worship."
    }
  },
  {
    _id: "18",
    level: "upperPrimary",
    subject: "religion",
    class: "p6",
    topic: "Prophets",
    text: "Which Prophet built an ark?",
    options: [
      "Prophet Nuh (Noah)",
      "Prophet Musa (Moses)",
      "Prophet Isa (Jesus)"
    ],
    correct: "Prophet Nuh (Noah)",
    feedback: {
      correct: "Yes!",
      incorrect: "It was Prophet Nuh (Noah)."
    }
  },

  // ====================== P7 ======================

  // --- English (P7) ---
  {
    _id: "19",
    level: "upperPrimary",
    subject: "english",
    class: "p7",
    topic: "Tenses",
    text: "Choose the correct tense: She ____ to school yesterday.",
    options: ["goes", "went", "go"],
    correct: "went",
    feedback: {
      correct: "Yes—past tense.",
      incorrect: "Use past tense for 'yesterday'."
    }
  },
  {
    _id: "20",
    level: "upperPrimary",
    subject: "english",
    class: "p7",
    topic: "Reported Speech",
    text: "Change to reported speech: He said, “I am hungry.”",
    options: [
      "He said he was hungry.",
      "He says he is hungry.",
      "He said he is hungry."
    ],
    correct: "He said he was hungry.",
    feedback: {
      correct: "Correct—tense shifts back.",
      incorrect: "Reported speech usually shifts present to past."
    }
  },
  {
    _id: "21",
    level: "upperPrimary",
    subject: "english",
    class: "p7",
    topic: "Clauses",
    text: "Identify the conjunction: We went home because it rained.",
    options: ["because", "home", "rained"],
    correct: "because",
    feedback: {
      correct: "Yes!",
      incorrect: "The linking word is 'because'."
    }
  },

  // --- Math (P7) ---
  {
    _id: "22",
    level: "upperPrimary",
    subject: "math",
    class: "p7",
    topic: "Percentages",
    text: "Find 15% of 200.",
    options: ["20", "25", "30"],
    correct: "30",
    feedback: {
      correct: "Right—0.15 × 200 = 30.",
      incorrect: "15% = 15/100; multiply by 200."
    }
  },
  {
    _id: "23",
    level: "upperPrimary",
    subject: "math",
    class: "p7",
    topic: "Ratios",
    text: "Share 50 in the ratio 2:3. The larger share is ____.",
    options: ["20", "25", "30"],
    correct: "30",
    feedback: {
      correct: "Yes—2+3=5 parts; 3/5 × 50 = 30.",
      incorrect: "Find total parts, then take 3/5 of 50."
    }
  },
  {
    _id: "24",
    level: "upperPrimary",
    subject: "math",
    class: "p7",
    topic: "Angles & Triangles",
    text: "A right angle measures ____ degrees.",
    options: ["45", "90", "180"],
    correct: "90",
    feedback: {
      correct: "Correct!",
      incorrect: "Right angle = 90°."
    }
  },

  // --- Science (P7) ---
  {
    _id: "25",
    level: "upperPrimary",
    subject: "science",
    class: "p7",
    topic: "Eye",
    text: "Which part of the eye focuses light onto the retina?",
    options: ["Lens", "Iris", "Pupil"],
    correct: "Lens",
    feedback: {
      correct: "Yes!",
      incorrect: "The lens changes shape to focus light."
    }
  },
  {
    _id: "26",
    level: "upperPrimary",
    subject: "science",
    class: "p7",
    topic: "Heart",
    text: "Which chamber pumps oxygenated blood to the body?",
    options: ["Left ventricle", "Right atrium", "Right ventricle"],
    correct: "Left ventricle",
    feedback: {
      correct: "Correct!",
      incorrect: "Left ventricle sends blood into the aorta."
    }
  },
  {
    _id: "27",
    level: "upperPrimary",
    subject: "science",
    class: "p7",
    topic: "Blood & Vessels",
    text: "Tiny vessels that connect arteries to veins are called ____.",
    options: ["Capillaries", "Venae cavae", "Aortae"],
    correct: "Capillaries",
    feedback: {
      correct: "Right!",
      incorrect: "Capillaries are the smallest blood vessels."
    }
  },

  // --- Social Studies (P7) ---
  {
    _id: "28",
    level: "upperPrimary",
    subject: "socialStudies",
    class: "p7",
    topic: "Africa Map",
    text: "The Nile River is the world’s ____ river.",
    options: ["longest", "widest", "deepest"],
    correct: "longest",
    feedback: {
      correct: "Yes!",
      incorrect: "It’s famous for its length."
    }
  },
  {
    _id: "29",
    level: "upperPrimary",
    subject: "socialStudies",
    class: "p7",
    topic: "Europeans",
    text: "European control of African countries was called ____.",
    options: ["Colonial rule", "Democracy", "Federalism"],
    correct: "Colonial rule",
    feedback: {
      correct: "Correct.",
      incorrect: "It’s known as colonization/colonial rule."
    }
  },
  {
    _id: "30",
    level: "upperPrimary",
    subject: "socialStudies",
    class: "p7",
    topic: "AU & Pan-Africanism",
    text: "The African Union (AU) headquarters is in ____.",
    options: ["Addis Ababa", "Nairobi", "Cairo"],
    correct: "Addis Ababa",
    feedback: {
      correct: "Yes—Ethiopia’s capital.",
      incorrect: "AU HQ is in Addis Ababa."
    }
  },

  // --- General Knowledge (P7) ---
  {
    _id: "31",
    level: "upperPrimary",
    subject: "generalKnowledge",
    class: "p7",
    topic: "Geography",
    text: "The 0° longitude line is called the ____.",
    options: ["Prime Meridian", "Equator", "Tropic of Cancer"],
    correct: "Prime Meridian",
    feedback: {
      correct: "Correct!",
      incorrect: "0° longitude = Prime Meridian (Greenwich)."
    }
  },
  {
    _id: "32",
    level: "upperPrimary",
    subject: "generalKnowledge",
    class: "p7",
    topic: "Environment",
    text: "Planting trees in an area is called ____.",
    options: ["Afforestation", "Desertification", "Erosion"],
    correct: "Afforestation",
    feedback: {
      correct: "Yes!",
      incorrect: "Afforestation = planting trees."
    }
  },
  {
    _id: "33",
    level: "upperPrimary",
    subject: "generalKnowledge",
    class: "p7",
    topic: "World Orgs",
    text: "WHO mainly focuses on ____.",
    options: ["Global health", "Space travel", "International trade rules"],
    correct: "Global health",
    feedback: {
      correct: "Right!",
      incorrect: "WHO = World Health Organization."
    }
  },

  // --- Religion (P7) ---
  {
    _id: "34",
    level: "upperPrimary",
    subject: "religion",
    class: "p7",
    topic: "Hajj",
    text: "Walking between Safa and Marwah is called ____.",
    options: ["Sa'i", "Tawaf", "Ruku"],
    correct: "Sa'i",
    feedback: {
      correct: "Correct!",
      incorrect: "Tawaf is circling the Kaaba."
    }
  },
  {
    _id: "35",
    level: "upperPrimary",
    subject: "religion",
    class: "p7",
    topic: "Fasting",
    text: "The meal eaten to break the fast at sunset is ____.",
    options: ["Iftar", "Suhoor", "Zakat"],
    correct: "Iftar",
    feedback: {
      correct: "Yes!",
      incorrect: "Suhoor is pre-dawn; Zakat is charity."
    }
  },
  {
    _id: "36",
    level: "upperPrimary",
    subject: "religion",
    class: "p7",
    topic: "Seerah",
    text: "The Prophet (ﷺ) migrated from Makkah to ____.",
    options: ["Madinah", "Taif", "Jerusalem"],
    correct: "Madinah",
    feedback: {
      correct: "Right!",
      incorrect: "He migrated to Madinah (Hijrah)."
    }
  },
  {
    _id: "37",
    level: "upperPrimary",
    subject: "english",
    class: "p6",
    topic: "Agreement",
    text: "Choose the correct verb: The team ___ winning the match.",
    options: ["are", "is", "were"],
    correct: "is",
    feedback: { correct: "Yes—'team' is a collective noun (singular).", incorrect: "Use a singular verb with 'team' here." }
  },
  {
    _id: "38",
    level: "upperPrimary",
    subject: "english",
    class: "p6",
    topic: "Agreement",
    text: "Which sentence is correct?",
    options: ["The children plays outside.", "The children play outside.", "The children is outside."],
    correct: "The children play outside.",
    feedback: { correct: "Right!", incorrect: "Plural subject 'children' takes 'play'." }
  },
  {
    _id: "39",
    level: "upperPrimary",
    subject: "english",
    class: "p6",
    topic: "Vocabulary",
    text: "Choose the synonym of 'silent'.",
    options: ["noisy", "quiet", "angry"],
    correct: "quiet",
    feedback: { correct: "Correct!", incorrect: "A synonym is a word with a similar meaning." }
  },
  {
    _id: "40",
    level: "upperPrimary",
    subject: "english",
    class: "p6",
    topic: "Vocabulary",
    text: "Choose the opposite of 'difficult'.",
    options: ["easy", "hard", "tough"],
    correct: "easy",
    feedback: { correct: "Yes!", incorrect: "'Easy' is the antonym of 'difficult'." }
  },
  {
    _id: "41",
    level: "upperPrimary",
    subject: "english",
    class: "p6",
    topic: "Writing",
    text: "Choose the best joining word: We were tired ___ we kept walking.",
    options: ["but", "because", "and"],
    correct: "but",
    feedback: { correct: "Yes—contrast shows 'but' fits best.", incorrect: "'Because' gives a reason, not contrast." }
  },
  {
    _id: "42",
    level: "upperPrimary",
    subject: "english",
    class: "p6",
    topic: "Writing",
    text: "Which is the best topic sentence?",
    options: [
      "I like many things.",
      "Our school library is a great place to read.",
      "Books are good."
    ],
    correct: "Our school library is a great place to read.",
    feedback: { correct: "Good topic sentence—clear and focused.", incorrect: "Pick the clearest, most specific opener." }
  },
  {
    _id: "43",
    level: "upperPrimary",
    subject: "english",
    class: "p6",
    topic: "Grammar",
    text: "Pick the correct pronoun: Musa lost ___ pencil.",
    options: ["he", "him", "his"],
    correct: "his",
    feedback: { correct: "Yes!", incorrect: "'His' shows possession." }
  },
  {
    _id: "44",
    level: "upperPrimary",
    subject: "english",
    class: "p6",
    topic: "Punctuation",
    text: "Choose correct punctuation: “Who took my ruler___” asked Sara.",
    options: ["?", "!", "."],
    correct: "?",
    feedback: { correct: "Right—it's a question.", incorrect: "A direct question needs a question mark." }
  },
  {
    _id: "45",
    level: "upperPrimary",
    subject: "english",
    class: "p6",
    topic: "Comprehension",
    text: "Read: “The rain stopped, and the sun came out.” What happened first?",
    options: ["The sun came out", "The rain stopped", "They happened together"],
    correct: "The rain stopped",
    feedback: { correct: "Correct—then the sun came out.", incorrect: "Check the order of actions." }
  },

  // --- Math (P6) ---
  {
    _id: "46",
    level: "upperPrimary",
    subject: "math",
    class: "p6",
    topic: "Factors & Multiples",
    text: "Which is a common factor of 12 and 18?",
    options: ["2", "5", "7"],
    correct: "2",
    feedback: { correct: "Yes—also 3 and 6 are common factors.", incorrect: "List factors of each number and compare." }
  },
  {
    _id: "47",
    level: "upperPrimary",
    subject: "math",
    class: "p6",
    topic: "Factors & Multiples",
    text: "Which number is a multiple of 9?",
    options: ["27", "32", "35"],
    correct: "27",
    feedback: { correct: "Right—9 × 3 = 27.", incorrect: "Check by dividing by 9." }
  },
  {
    _id: "48",
    level: "upperPrimary",
    subject: "math",
    class: "p6",
    topic: "Angles",
    text: "An angle greater than 90° but less than 180° is ____.",
    options: ["acute", "right", "obtuse"],
    correct: "obtuse",
    feedback: { correct: "Correct!", incorrect: "Acute < 90°, right = 90°." }
  },
  {
    _id: "49",
    level: "upperPrimary",
    subject: "math",
    class: "p6",
    topic: "Angles",
    text: "What is the measure of a straight angle?",
    options: ["90°", "180°", "360°"],
    correct: "180°",
    feedback: { correct: "Yes!", incorrect: "A straight line is 180°." }
  },
  {
    _id: "50",
    level: "upperPrimary",
    subject: "math",
    class: "p6",
    topic: "Graphs",
    text: "A bar graph is best for showing ____.",
    options: ["changes over time", "parts of a whole", "comparisons between categories"],
    correct: "comparisons between categories",
    feedback: { correct: "Exactly!", incorrect: "Line = trends; pie = parts of a whole." }
  },
  {
    _id: "51",
    level: "upperPrimary",
    subject: "math",
    class: "p6",
    topic: "Graphs",
    text: "Which graph shows parts of a whole?",
    options: ["Pie chart", "Line graph", "Bar graph"],
    correct: "Pie chart",
    feedback: { correct: "Yes!", incorrect: "Pie charts show proportions." }
  },
  {
    _id: "52",
    level: "upperPrimary",
    subject: "math",
    class: "p6",
    topic: "Fractions",
    text: "Which fraction is equal to 1/2?",
    options: ["2/4", "3/6", "2/3"],
    correct: "2/4",
    feedback: { correct: "Correct—also 3/6 equals 1/2.", incorrect: "Try simplifying each fraction." }
  },
  {
    _id: "53",
    level: "upperPrimary",
    subject: "math",
    class: "p6",
    topic: "Decimals",
    text: "0.4 + 0.35 = ____",
    options: ["0.75", "0.7", "0.8"],
    correct: "0.75",
    feedback: { correct: "Yes!", incorrect: "Align decimal places before adding." }
  },
  {
    _id: "54",
    level: "upperPrimary",
    subject: "math",
    class: "p6",
    topic: "Area & Perimeter",
    text: "Area of a rectangle 7 cm × 6 cm is ____.",
    options: ["13 cm²", "42 cm²", "26 cm²"],
    correct: "42 cm²",
    feedback: { correct: "Area = length × width.", incorrect: "Multiply 7 by 6." }
  },

  // --- Science (P6) ---
  {
    _id: "55",
    level: "upperPrimary",
    subject: "science",
    class: "p6",
    topic: "Pollination",
    text: "Pollination is the transfer of pollen from anther to ____.",
    options: ["stigma", "sepal", "petal"],
    correct: "stigma",
    feedback: { correct: "Right!", incorrect: "Think of the female receptive surface." }
  },
  {
    _id: "56",
    level: "upperPrimary",
    subject: "science",
    class: "p6",
    topic: "Pollination",
    text: "Which animal is a common pollinator?",
    options: ["Bee", "Lizard", "Frog"],
    correct: "Bee",
    feedback: { correct: "Yes!", incorrect: "Bees and butterflies often pollinate flowers." }
  },
  {
    _id: "57",
    level: "upperPrimary",
    subject: "science",
    class: "p6",
    topic: "Seeds & Fruits",
    text: "Seeds usually form after ____.",
    options: ["germination", "fertilization", "transpiration"],
    correct: "fertilization",
    feedback: { correct: "Correct!", incorrect: "Fertilization comes before seeds form." }
  },
  {
    _id: "58",
    level: "upperPrimary",
    subject: "science",
    class: "p6",
    topic: "Seeds & Fruits",
    text: "The fruit protects the ____.",
    options: ["roots", "leaves", "seeds"],
    correct: "seeds",
    feedback: { correct: "Yes!", incorrect: "Fruits enclose and protect seeds." }
  },
  {
    _id: "59",
    level: "upperPrimary",
    subject: "science",
    class: "p6",
    topic: "Life Cycles",
    text: "A butterfly life cycle includes egg, larva, pupa, and ____.",
    options: ["adult", "seed", "spore"],
    correct: "adult",
    feedback: { correct: "Right!", incorrect: "The last stage is adult butterfly." }
  },
  {
    _id: "60",
    level: "upperPrimary",
    subject: "science",
    class: "p6",
    topic: "Life Cycles",
    text: "In frogs, the young stage that lives in water is the ____.",
    options: ["tadpole", "pupa", "nymph"],
    correct: "tadpole",
    feedback: { correct: "Yes!", incorrect: "Tadpoles breathe with gills." }
  },
  {
    _id: "61",
    level: "upperPrimary",
    subject: "science",
    class: "p6",
    topic: "Reproductive System",
    text: "In flowering plants, the male part is called the ____.",
    options: ["stamen", "pistil", "sepal"],
    correct: "stamen",
    feedback: { correct: "Correct!", incorrect: "Stamen (anther + filament) is male." }
  },
  {
    _id: "62",
    level: "upperPrimary",
    subject: "science",
    class: "p6",
    topic: "Flower Parts",
    text: "Sepals mainly ____ the flower bud.",
    options: ["attract", "protect", "feed"],
    correct: "protect",
    feedback: { correct: "Yes!", incorrect: "Sepals protect before blooming." }
  },
  {
    _id: "63",
    level: "upperPrimary",
    subject: "science",
    class: "p6",
    topic: "Insect Body",
    text: "Which is NOT a main insect body part?",
    options: ["Head", "Thorax", "Tail"],
    correct: "Tail",
    feedback: { correct: "Right—head, thorax, abdomen.", incorrect: "Insects have abdomen, not a 'tail' part." }
  },

  // --- Social Studies (P6) ---
  {
    _id: "64",
    level: "upperPrimary",
    subject: "socialStudies",
    class: "p6",
    topic: "Regions & Districts",
    text: "Uganda’s capital city is in the ____ Region.",
    options: ["Central", "Northern", "Eastern"],
    correct: "Central",
    feedback: { correct: "Yes—Kampala is in Central Region.", incorrect: "Kampala is in Central Uganda." }
  },
  {
    _id: "65",
    level: "upperPrimary",
    subject: "socialStudies",
    class: "p6",
    topic: "Kingdoms",
    text: "The Kyabazinga is associated with the ____ kingdom.",
    options: ["Busoga", "Buganda", "Bunyoro"],
    correct: "Busoga",
    feedback: { correct: "Correct!", incorrect: "Kabaka—Buganda; Omukama—Bunyoro." }
  },
  {
    _id: "66",
    level: "upperPrimary",
    subject: "socialStudies",
    class: "p6",
    topic: "Missionaries",
    text: "A key aim of missionaries was to spread ____.",
    options: ["Christianity", "Hinduism", "Buddhism"],
    correct: "Christianity",
    feedback: { correct: "Yes!", incorrect: "They also started schools and hospitals." }
  },
  {
    _id: "67",
    level: "upperPrimary",
    subject: "socialStudies",
    class: "p6",
    topic: "East Africa",
    text: "Which capital city is in East Africa?",
    options: ["Nairobi", "Accra", "Rabat"],
    correct: "Nairobi",
    feedback: { correct: "Right—Kenya’s capital.", incorrect: "Accra (Ghana), Rabat (Morocco)." }
  },
  {
    _id: "68",
    level: "upperPrimary",
    subject: "socialStudies",
    class: "p6",
    topic: "Lakes & Rivers",
    text: "River Nile flows northwards to which sea?",
    options: ["Mediterranean Sea", "Red Sea", "Arabian Sea"],
    correct: "Mediterranean Sea",
    feedback: { correct: "Correct!", incorrect: "It empties into the Mediterranean." }
  },
  {
    _id: "69",
    level: "upperPrimary",
    subject: "socialStudies",
    class: "p6",
    topic: "Compass",
    text: "If you face south, your right hand points to the ____.",
    options: ["West", "East", "North"],
    correct: "West",
    feedback: { correct: "Yes!", incorrect: "Visualize the compass directions." }
  },

  // --- General Knowledge (P6) ---
  {
    _id: "70",
    level: "upperPrimary",
    subject: "generalKnowledge",
    class: "p6",
    topic: "World Orgs",
    text: "UNICEF mainly supports ____.",
    options: ["children", "wild animals", "space research"],
    correct: "children",
    feedback: { correct: "Right!", incorrect: "UNICEF = United Nations Children’s Fund." }
  },
  {
    _id: "71",
    level: "upperPrimary",
    subject: "generalKnowledge",
    class: "p6",
    topic: "Geography",
    text: "Which is a landlocked country?",
    options: ["Uganda", "Kenya", "Tanzania"],
    correct: "Uganda",
    feedback: { correct: "Yes!", incorrect: "Kenya and Tanzania have coastlines." }
  },
  {
    _id: "72",
    level: "upperPrimary",
    subject: "generalKnowledge",
    class: "p6",
    topic: "Politics",
    text: "A constitution is a set of ____.",
    options: ["national laws", "songs", "buildings"],
    correct: "national laws",
    feedback: { correct: "Correct!", incorrect: "It guides how a country is governed." }
  },
  {
    _id: "73",
    level: "upperPrimary",
    subject: "generalKnowledge",
    class: "p6",
    topic: "Environment",
    text: "Reusing bottles helps reduce ____.",
    options: ["waste", "rain", "wind"],
    correct: "waste",
    feedback: { correct: "Yes!", incorrect: "It reduces trash in the environment." }
  },

  // --- Religion (P6) ---
  {
    _id: "74",
    level: "upperPrimary",
    subject: "religion",
    class: "p6",
    topic: "Qur'an",
    text: "How many surahs are in the Qur’an?",
    options: ["114", "100", "120"],
    correct: "114",
    feedback: { correct: "Yes!", incorrect: "There are 114 chapters (surahs)." }
  },
  {
    _id: "75",
    level: "upperPrimary",
    subject: "religion",
    class: "p6",
    topic: "Pillars",
    text: "Zakat is mainly about ____.",
    options: ["giving charity", "fasting", "pilgrimage"],
    correct: "giving charity",
    feedback: { correct: "Correct!", incorrect: "Zakat is charitable giving." }
  },
  {
    _id: "76",
    level: "upperPrimary",
    subject: "religion",
    class: "p6",
    topic: "Worship",
    text: "The Friday congregational prayer is called ____.",
    options: ["Jumu'ah", "Taraweeh", "Eid"],
    correct: "Jumu'ah",
    feedback: { correct: "Yes!", incorrect: "Jumu'ah is the weekly Friday prayer." }
  },
  {
    _id: "77",
    level: "upperPrimary",
    subject: "religion",
    class: "p6",
    topic: "Prophets",
    text: "Prophet Ibrahim is known as the friend of ____.",
    options: ["Allah", "angels", "Pharaoh"],
    correct: "Allah",
    feedback: { correct: "Right!", incorrect: "He is Khalilullah—friend of Allah." }
  },

  // ====================== P7 ======================

  // --- English (P7) ---
  {
    _id: "78",
    level: "upperPrimary",
    subject: "english",
    class: "p7",
    topic: "Vocabulary",
    text: "Choose a synonym for 'assist'.",
    options: ["help", "hide", "hinder"],
    correct: "help",
    feedback: { correct: "Yes!", incorrect: "'Assist' means to help." }
  },
  {
    _id: "79",
    level: "upperPrimary",
    subject: "english",
    class: "p7",
    topic: "Comprehension",
    text: "Read: “The drought ended after months of little rain.” What ended?",
    options: ["The drought", "The rain", "The months"],
    correct: "The drought",
    feedback: { correct: "Correct.", incorrect: "Focus on the subject of 'ended'." }
  },
  {
    _id: "80",
    level: "upperPrimary",
    subject: "english",
    class: "p7",
    topic: "Punctuation",
    text: "Choose correct punctuation: Please bring pencils, rulers, ____ erasers.",
    options: ["and", "and,", ",and"],
    correct: "and",
    feedback: { correct: "Yes—no comma before the conjunction in a short list.", incorrect: "Keep it simple: 'pencils, rulers, and erasers'." }
  },
  {
    _id: "81",
    level: "upperPrimary",
    subject: "english",
    class: "p7",
    topic: "Tenses",
    text: "Choose the correct future form: We ____ the test tomorrow.",
    options: ["write", "wrote", "will write"],
    correct: "will write",
    feedback: { correct: "Right—future tense.", incorrect: "Use 'will' for future plans." }
  },
  {
    _id: "82",
    level: "upperPrimary",
    subject: "english",
    class: "p7",
    topic: "Reported Speech",
    text: "He said, “I will travel next week.” → He said he ____ travel the next week.",
    options: ["will", "would", "can"],
    correct: "would",
    feedback: { correct: "Correct—will → would in reported speech.", incorrect: "Backshift tense in reported speech." }
  },
  {
    _id: "83",
    level: "upperPrimary",
    subject: "english",
    class: "p7",
    topic: "Clauses",
    text: "Which is a dependent clause?",
    options: ["because it was late", "We went home", "The lights were off"],
    correct: "because it was late",
    feedback: { correct: "Yes—needs a main clause to complete meaning.", incorrect: "A dependent clause cannot stand alone." }
  },

  // --- Math (P7) ---
  {
    _id: "84",
    level: "upperPrimary",
    subject: "math",
    class: "p7",
    topic: "Integers",
    text: "Which is the smallest?",
    options: ["-2", "0", "3"],
    correct: "-2",
    feedback: { correct: "Correct!", incorrect: "Negative numbers are less than zero." }
  },
  {
    _id: "85",
    level: "upperPrimary",
    subject: "math",
    class: "p7",
    topic: "Integers",
    text: "-3 + 7 = ____",
    options: ["10", "4", "-10"],
    correct: "4",
    feedback: { correct: "Yes!", incorrect: "Move 7 units to the right from -3." }
  },
  {
    _id: "86",
    level: "upperPrimary",
    subject: "math",
    class: "p7",
    topic: "Volume",
    text: "Volume of a cuboid: 5 cm × 3 cm × 2 cm = ____ cm³",
    options: ["10", "15", "30"],
    correct: "30",
    feedback: { correct: "Right—multiply l × w × h.", incorrect: "5 × 3 × 2 = 30." }
  },
  {
    _id: "87",
    level: "upperPrimary",
    subject: "math",
    class: "p7",
    topic: "Volume",
    text: "Units for volume are ____.",
    options: ["cm²", "cm³", "cm"],
    correct: "cm³",
    feedback: { correct: "Correct!", incorrect: "Area uses cm²; length uses cm." }
  },
  {
    _id: "88",
    level: "upperPrimary",
    subject: "math",
    class: "p7",
    topic: "Probability",
    text: "A fair coin is tossed. Probability of getting tails is ____.",
    options: ["0", "1/2", "1"],
    correct: "1/2",
    feedback: { correct: "Yes!", incorrect: "Heads and tails are equally likely." }
  },
  {
    _id: "89",
    level: "upperPrimary",
    subject: "math",
    class: "p7",
    topic: "Probability",
    text: "Which event is impossible?",
    options: ["Rolling 7 on a six-sided die", "Rolling an even number", "Rolling a number less than 6"],
    correct: "Rolling 7 on a six-sided die",
    feedback: { correct: "Right!", incorrect: "A standard die has 1–6 only." }
  },

  // --- Science (P7) ---
  {
    _id: "90",
    level: "upperPrimary",
    subject: "science",
    class: "p7",
    topic: "Ear",
    text: "Which part of the ear sends signals to the brain?",
    options: ["Cochlea", "Eardrum", "Ear canal"],
    correct: "Cochlea",
    feedback: { correct: "Yes!", incorrect: "Hair cells in the cochlea create nerve signals." }
  },
  {
    _id: "91",
    level: "upperPrimary",
    subject: "science",
    class: "p7",
    topic: "Circulation",
    text: "Blood returns to the heart through ____.",
    options: ["arteries", "veins", "capillaries"],
    correct: "veins",
    feedback: { correct: "Correct!", incorrect: "Veins carry blood back to the heart." }
  },
  {
    _id: "92",
    level: "upperPrimary",
    subject: "science",
    class: "p7",
    topic: "Nervous System",
    text: "The basic unit of the nervous system is the ____.",
    options: ["neuron", "cell wall", "alveolus"],
    correct: "neuron",
    feedback: { correct: "Right!", incorrect: "Neurons transmit nerve impulses." }
  },

  // --- Social Studies (P7) ---
  {
    _id: "93",
    level: "upperPrimary",
    subject: "socialStudies",
    class: "p7",
    topic: "Continents & Oceans",
    text: "Which ocean lies between Africa and Australia?",
    options: ["Indian", "Pacific", "Atlantic"],
    correct: "Indian",
    feedback: { correct: "Yes!", incorrect: "The Indian Ocean lies between them." }
  },
  {
    _id: "94",
    level: "upperPrimary",
    subject: "socialStudies",
    class: "p7",
    topic: "Arabs & Trade",
    text: "A major trade wind used across the Indian Ocean was the ____ wind.",
    options: ["monsoon", "harmattan", "sirocco"],
    correct: "monsoon",
    feedback: { correct: "Correct!", incorrect: "Monsoon winds aided sailing routes." }
  },
  {
    _id: "95",
    level: "upperPrimary",
    subject: "socialStudies",
    class: "p7",
    topic: "Missionaries",
    text: "Missionaries often introduced ____ writing systems and schools.",
    options: ["new", "no", "secret"],
    correct: "new",
    feedback: { correct: "Yes—new systems and formal education.", incorrect: "They contributed to literacy and schooling." }
  },

  // --- General Knowledge (P7) ---
  {
    _id: "96",
    level: "upperPrimary",
    subject: "generalKnowledge",
    class: "p7",
    topic: "Politics",
    text: "Parliament is mainly responsible for ____.",
    options: ["making laws", "running hospitals", "building roads"],
    correct: "making laws",
    feedback: { correct: "Right!", incorrect: "Parliament is the law-making body." }
  },
  {
    _id: "97",
    level: "upperPrimary",
    subject: "generalKnowledge",
    class: "p7",
    topic: "Geography",
    text: "The Tropic of Capricorn is located in the ____ Hemisphere.",
    options: ["Northern", "Southern", "Both"],
    correct: "Southern",
    feedback: { correct: "Yes!", incorrect: "It’s at about 23.5°S." }
  },
  {
    _id: "98",
    level: "upperPrimary",
    subject: "generalKnowledge",
    class: "p7",
    topic: "World Orgs",
    text: "The UN General Assembly meets in ____.",
    options: ["New York", "Geneva", "Nairobi"],
    correct: "New York",
    feedback: { correct: "Correct!", incorrect: "UN HQ is in New York." }
  },
  {
    _id: "99",
    level: "upperPrimary",
    subject: "generalKnowledge",
    class: "p7",
    topic: "Environment",
    text: "Cutting down forests without replanting causes ____.",
    options: ["deforestation", "irrigation", "condensation"],
    correct: "deforestation",
    feedback: { correct: "Yes!", incorrect: "Deforestation damages ecosystems." }
  },

  // --- Religion (P7) ---
  {
    _id: "100",
    level: "upperPrimary",
    subject: "religion",
    class: "p7",
    topic: "Values",
    text: "Which value is encouraged in Islam?",
    options: ["honesty", "cheating", "greed"],
    correct: "honesty",
    feedback: { correct: "Right!", incorrect: "Islam emphasizes honesty and fairness." }
  },
  {
    _id: "101",
    level: "upperPrimary",
    subject: "religion",
    class: "p7",
    topic: "Hajj",
    text: "Circling the Kaaba seven times is called ____.",
    options: ["Tawaf", "Sa'i", "Takbir"],
    correct: "Tawaf",
    feedback: { correct: "Yes!", incorrect: "Sa'i is walking between Safa and Marwah." }
  },
  {
    _id: "102",
    level: "upperPrimary",
    subject: "religion",
    class: "p7",
    topic: "Seerah",
    text: "The first revelation came in the cave of ____.",
    options: ["Hira", "Thawr", "Arafat"],
    correct: "Hira",
    feedback: { correct: "Correct!", incorrect: "It was in the cave of Hira." }
  }
];
