import type { Question } from "../../../../types";

/**
 * Notes:
 * - Every item now includes a `type` field: 'choice' | 'multiChoice' | 'fill-in' | 'text' | 'multiText'
 * - `choice` & `multiChoice` include `options`. `multiChoice.correct` is an array.
 * - `fill-in` has an exact `correct` string (use digits/standard spelling).
 * - `text` accepts free text via an `accepted` list of key phrases (case-insensitive match recommended).
 * - `multiText` lets learners list several answers; includes `minAnswer` and an `accepted` pool.
 */

export const p5GeneralKnowledge: Question[] = [
  // ========== World Geography & Landmarks (8) ==========
  {
    _id: "lp-p5-gk-wg-1",
    level: "lowerPrimary",
    subject: "generalKnowledge",
    class: "p5",
    topic: "World Geography & Landmarks",
    type: "choice",
    text: "Which is the largest continent in the world? 🌏",
    options: ["Asia", "Africa", "North America"],
    correct: "Asia",
    feedback: {
      correct: "Yes! Asia is the largest by land area and population.",
      incorrect: "Think of the continent with China, India, and Russia—Asia."
    }
  },
  {
    _id: "lp-p5-gk-wg-2",
    level: "lowerPrimary",
    subject: "generalKnowledge",
    class: "p5",
    topic: "World Geography & Landmarks",
    type: "choice",
    text: "Which famous landmark is in Paris, France? 🗼",
    options: ["Eiffel Tower", "Big Ben", "Statue of Liberty"],
    correct: "Eiffel Tower",
    feedback: {
      correct: "Correct—Eiffel Tower is in Paris.",
      incorrect: "Big Ben is in London; Statue of Liberty is in New York."
    }
  },
  {
    _id: "lp-p5-gk-wg-3",
    level: "lowerPrimary",
    subject: "generalKnowledge",
    class: "p5",
    topic: "World Geography & Landmarks",
    type: "fill-in",
    text: "What is the capital city of Kenya? 🇰🇪",
    correct: "Nairobi",
    feedback: { correct: "Nice! Nairobi is correct.", incorrect: "Kenya’s capital is Nairobi." }
  },
  {
    _id: "lp-p5-gk-wg-4",
    level: "lowerPrimary",
    subject: "generalKnowledge",
    class: "p5",
    topic: "World Geography & Landmarks",
    type: "choice",
    text: "Which is the longest river in Africa? 🌍",
    options: ["Nile River", "Congo River", "Zambezi River"],
    correct: "Nile River",
    feedback: {
      correct: "Yes—the Nile is longest.",
      incorrect: "It flows through countries like Uganda, Sudan, and Egypt."
    }
  },
  {
    _id: "lp-p5-gk-wg-5",
    level: "lowerPrimary",
    subject: "generalKnowledge",
    class: "p5",
    topic: "World Geography & Landmarks",
    type: "choice",
    text: "Which ocean is the largest? 🌊",
    options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean"],
    correct: "Pacific Ocean",
    feedback: {
      correct: "Correct—the Pacific is the largest.",
      incorrect: "The Pacific covers more area than all land combined!"
    }
  },
  {
    _id: "lp-p5-gk-wg-6",
    level: "lowerPrimary",
    subject: "generalKnowledge",
    class: "p5",
    topic: "World Geography & Landmarks",
    type: "fill-in",
    text: "Name the highest mountain in the world. 🏔️",
    correct: "Mount Everest",
    feedback: { correct: "Yes—Mount Everest.", incorrect: "It’s Mount Everest." }
  },
  {
    _id: "lp-p5-gk-wg-7",
    level: "lowerPrimary",
    subject: "generalKnowledge",
    class: "p5",
    topic: "World Geography & Landmarks",
    type: "text",
    text: "Which country is called the 'Land of the Rising Sun'? 🇯🇵",
    accepted: ["japan"],
    feedback: { correct: "Right—Japan.", incorrect: "It’s Japan." }
  },
  {
    _id: "lp-p5-gk-wg-8",
    level: "lowerPrimary",
    subject: "generalKnowledge",
    class: "p5",
    topic: "World Geography & Landmarks",
    type: "multiChoice",
    text: "Select all that are African landmarks.",
    options: ["Victoria Falls", "Table Mountain", "Grand Canyon", "Great Wall"],
    correct: ["Victoria Falls", "Table Mountain"],
    feedback: {
      correct: "Great—both are in Africa!",
      incorrect: "Victoria Falls and Table Mountain are in Africa."
    }
  },

  // ========== Famous People & History (8) ==========
  {
    _id: "lp-p5-gk-fh-1",
    level: "lowerPrimary",
    subject: "generalKnowledge",
    class: "p5",
    topic: "Famous People & History",
    type: "choice",
    text: "Who was the first President of Uganda? 🇺🇬",
    options: ["Milton Obote", "Idi Amin", "Yoweri Museveni"],
    correct: "Milton Obote",
    feedback: { correct: "Yes—Milton Obote.", incorrect: "It was Milton Obote." }
  },
  {
    _id: "lp-p5-gk-fh-2",
    level: "lowerPrimary",
    subject: "generalKnowledge",
    class: "p5",
    topic: "Famous People & History",
    type: "choice",
    text: "Who invented the telephone? ☎️",
    options: ["Alexander Graham Bell", "Thomas Edison", "Albert Einstein"],
    correct: "Alexander Graham Bell",
    feedback: { correct: "Correct—Bell.", incorrect: "The telephone was invented by Bell." }
  },
  {
    _id: "lp-p5-gk-fh-3",
    level: "lowerPrimary",
    subject: "generalKnowledge",
    class: "p5",
    topic: "Famous People & History",
    type: "text",
    text: "Nelson Mandela was the first Black president of which country? 🇿🇦",
    accepted: ["south africa", "republic of south africa"],
    feedback: { correct: "Yes—South Africa.", incorrect: "South Africa." }
  },
  {
    _id: "lp-p5-gk-fh-4",
    level: "lowerPrimary",
    subject: "generalKnowledge",
    class: "p5",
    topic: "Famous People & History",
    type: "choice",
    text: "Which scientist is linked with gravity after an apple story? 🍎",
    options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei"],
    correct: "Isaac Newton",
    feedback: { correct: "Newton it is!", incorrect: "It’s Isaac Newton." }
  },
  {
    _id: "lp-p5-gk-fh-5",
    level: "lowerPrimary",
    subject: "generalKnowledge",
    class: "p5",
    topic: "Famous People & History",
    type: "fill-in",
    text: "Who painted the Mona Lisa? 🎨",
    correct: "Leonardo da Vinci",
    feedback: { correct: "Nice!", incorrect: "Leonardo da Vinci." }
  },
  {
    _id: "lp-p5-gk-fh-6",
    level: "lowerPrimary",
    subject: "generalKnowledge",
    class: "p5",
    topic: "Famous People & History",
    type: "choice",
    text: "Who first walked on the Moon? 🌙",
    options: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin"],
    correct: "Neil Armstrong",
    feedback: { correct: "Correct—Armstrong.", incorrect: "Neil Armstrong did in 1969." }
  },
  {
    _id: "lp-p5-gk-fh-7",
    level: "lowerPrimary",
    subject: "generalKnowledge",
    class: "p5",
    topic: "Famous People & History",
    type: "text",
    text: "Name the author of 'Things Fall Apart'. 📚",
    accepted: ["chinua achebe", "achebe"],
    feedback: { correct: "Yes—Chinua Achebe.", incorrect: "Chinua Achebe." }
  },
  {
    _id: "lp-p5-gk-fh-8",
    level: "lowerPrimary",
    subject: "generalKnowledge",
    class: "p5",
    topic: "Famous People & History",
    type: "multiChoice",
    text: "Select the inventors/scientists.",
    options: ["Charles Babbage", "Cristiano Ronaldo", "Marie Curie", "Beyoncé"],
    correct: ["Charles Babbage", "Marie Curie"],
    feedback: {
      correct: "Great pick!",
      incorrect: "Babbage and Curie are the scientists."
    }
  },

  // ========== Science & Technology (8) ==========
  {
    _id: "lp-p5-gk-st-1",
    level: "lowerPrimary",
    subject: "generalKnowledge",
    class: "p5",
    topic: "Science & Technology",
    type: "choice",
    text: "What is the most abundant gas in Earth’s atmosphere? 💨",
    options: ["Nitrogen", "Oxygen", "Carbon Dioxide"],
    correct: "Nitrogen",
    feedback: {
      correct: "Yes—about 78%.",
      incorrect: "It’s nitrogen (~78%)."
    }
  },
  {
    _id: "lp-p5-gk-st-2",
    level: "lowerPrimary",
    subject: "generalKnowledge",
    class: "p5",
    topic: "Science & Technology",
    type: "choice",
    text: "Which planet is closest to the Sun? ☀️",
    options: ["Mercury", "Venus", "Mars"],
    correct: "Mercury",
    feedback: { correct: "Correct—Mercury.", incorrect: "Mercury is the closest." }
  },
  {
    _id: "lp-p5-gk-st-3",
    level: "lowerPrimary",
    subject: "generalKnowledge",
    class: "p5",
    topic: "Science & Technology",
    type: "text",
    text: "Name one thing plants need to make food. 🌱",
    accepted: ["sunlight", "carbon dioxide", "water", "chlorophyll"],
    feedback: { correct: "Yes, that’s needed.", incorrect: "Examples: sunlight, water, carbon dioxide." }
  },
  {
    _id: "lp-p5-gk-st-4",
    level: "lowerPrimary",
    subject: "generalKnowledge",
    class: "p5",
    topic: "Science & Technology",
    type: "choice",
    text: "Which device measures temperature? 🌡️",
    options: ["Thermometer", "Barometer", "Speedometer"],
    correct: "Thermometer",
    feedback: { correct: "Right!", incorrect: "A thermometer measures temperature." }
  },
  {
    _id: "lp-p5-gk-st-5",
    level: "lowerPrimary",
    subject: "generalKnowledge",
    class: "p5",
    topic: "Science & Technology",
    type: "fill-in",
    text: "What is the hardest natural substance? 💎",
    correct: "Diamond",
    feedback: { correct: "Correct—diamond.", incorrect: "It’s diamond." }
  },
  {
    _id: "lp-p5-gk-st-6",
    level: "lowerPrimary",
    subject: "generalKnowledge",
    class: "p5",
    topic: "Science & Technology",
    type: "choice",
    text: "The largest organ of the human body is the ____.",
    options: ["Skin", "Liver", "Brain"],
    correct: "Skin",
    feedback: { correct: "Yes—the skin.", incorrect: "The skin is largest." }
  },
  {
    _id: "lp-p5-gk-st-7",
    level: "lowerPrimary",
    subject: "generalKnowledge",
    class: "p5",
    topic: "Science & Technology",
    type: "choice",
    text: "What does the heart do? ❤️",
    options: ["Pumps blood", "Thinks", "Digests food"],
    correct: "Pumps blood",
    feedback: { correct: "Exactly.", incorrect: "Its main job is pumping blood." }
  },
  {
    _id: "lp-p5-gk-st-8",
    level: "lowerPrimary",
    subject: "generalKnowledge",
    class: "p5",
    topic: "Science & Technology",
    type: "multiChoice",
    text: "Select the renewable energy sources:",
    options: ["Wind", "Coal", "Solar", "Oil"],
    correct: ["Wind", "Solar"],
    feedback: { correct: "Nice selection!", incorrect: "Wind and solar are renewable." }
  },

  // ========== Culture & Society (8) ==========
  {
    _id: "lp-p5-gk-cs-1",
    level: "lowerPrimary",
    subject: "generalKnowledge",
    class: "p5",
    topic: "Culture & Society",
    type: "choice",
    text: "What is the main official language of Uganda? 🗣️",
    options: ["English", "Swahili", "French"],
    correct: "English",
    feedback: { correct: "Yes—English.", incorrect: "It’s English (official language)." }
  },
  {
    _id: "lp-p5-gk-cs-2",
    level: "lowerPrimary",
    subject: "generalKnowledge",
    class: "p5",
    topic: "Culture & Society",
    type: "choice",
    text: "Uganda’s popular national sport is ____.",
    options: ["Football", "Cricket", "Rugby"],
    correct: "Football",
    feedback: { correct: "Right—football.", incorrect: "Football (soccer) is most popular." }
  },
  {
    _id: "lp-p5-gk-cs-3",
    level: "lowerPrimary",
    subject: "generalKnowledge",
    class: "p5",
    topic: "Culture & Society",
    type: "multiChoice",
    text: "Which colours are on Uganda’s flag? 🇺🇬",
    options: [
      "Black",
      "Yellow",
      "Red",
      "Green"
    ],
    correct: ["Black", "Yellow", "Red"],
    feedback: { correct: "Perfect!", incorrect: "It’s Black, Yellow, and Red stripes." }
  },
  {
    _id: "lp-p5-gk-cs-4",
    level: "lowerPrimary",
    subject: "generalKnowledge",
    class: "p5",
    topic: "Culture & Society",
    type: "choice",
    text: "Which is a traditional Ugandan food? 🍲",
    options: ["Matoke", "Sushi", "Tacos"],
    correct: "Matoke",
    feedback: { correct: "Yes—Matoke.", incorrect: "Matoke (plantain) is traditional." }
  },
  {
    _id: "lp-p5-gk-cs-5",
    level: "lowerPrimary",
    subject: "generalKnowledge",
    class: "p5",
    topic: "Culture & Society",
    type: "fill-in",
    text: "Which bird appears on Uganda’s flag? 🐦",
    correct: "Crested Crane",
    feedback: { correct: "Correct—the Crested Crane.", incorrect: "It’s the Crested Crane." }
  },
  {
    _id: "lp-p5-gk-cs-6",
    level: "lowerPrimary",
    subject: "generalKnowledge",
    class: "p5",
    topic: "Culture & Society",
    type: "text",
    text: "Where is the East African Community (EAC) headquarters located? 🏛️",
    accepted: ["arusha", "arusha, tanzania", "tanzania"],
    feedback: { correct: "Yes—Arusha, Tanzania.", incorrect: "Arusha, Tanzania." }
  },
  {
    _id: "lp-p5-gk-cs-7",
    level: "lowerPrimary",
    subject: "generalKnowledge",
    class: "p5",
    topic: "Culture & Society",
    type: "choice",
    text: "Which is the largest lake in Uganda?",
    options: ["Lake Victoria", "Lake Albert", "Lake Kyoga"],
    correct: "Lake Victoria",
    feedback: { correct: "Right—Lake Victoria.", incorrect: "It’s Lake Victoria." }
  },
  {
    _id: "lp-p5-gk-cs-8",
    level: "lowerPrimary",
    subject: "generalKnowledge",
    class: "p5",
    topic: "Culture & Society",
    type: "text",
    text: "State Uganda’s motto. 📜",
    accepted: ["for god and my country"],
    feedback: { correct: "Yes! For God and My Country.", incorrect: "It is: For God and My Country." }
  },

  // ========== Current Affairs & Environment (8) ==========
  {
    _id: "lp-p5-gk-ce-1",
    level: "lowerPrimary",
    subject: "generalKnowledge",
    class: "p5",
    topic: "Current Affairs & Environment",
    type: "choice",
    text: "What mainly causes global warming? 🌡️",
    options: ["Greenhouse gases", "Rain", "Wind"],
    correct: "Greenhouse gases",
    feedback: { correct: "Yes—GHGs trap heat.", incorrect: "Greenhouse gases trap heat in the atmosphere." }
  },
  {
    _id: "lp-p5-gk-ce-2",
    level: "lowerPrimary",
    subject: "generalKnowledge",
    class: "p5",
    topic: "Current Affairs & Environment",
    type: "fill-in",
    text: "What is recycling? ♻️ (one short phrase)",
    correct: "Reusing materials",
    feedback: { correct: "Good!", incorrect: "Recycling means reusing materials to make new things." }
  },
  {
    _id: "lp-p5-gk-ce-3",
    level: "lowerPrimary",
    subject: "generalKnowledge",
    class: "p5",
    topic: "Current Affairs & Environment",
    type: "choice",
    text: "Deforestation means ____.",
    options: ["Cutting down forests", "Planting trees", "Protecting wildlife"],
    correct: "Cutting down forests",
    feedback: { correct: "Correct.", incorrect: "It means cutting down forests." }
  },
  {
    _id: "lp-p5-gk-ce-4",
    level: "lowerPrimary",
    subject: "generalKnowledge",
    class: "p5",
    topic: "Current Affairs & Environment",
    type: "multiChoice",
    text: "Select renewable energy sources:",
    options: ["Solar", "Wind", "Coal", "Oil"],
    correct: ["Solar", "Wind"],
    feedback: { correct: "Nice!", incorrect: "Solar and wind are renewable." }
  },
  {
    _id: "lp-p5-gk-ce-5",
    level: "lowerPrimary",
    subject: "generalKnowledge",
    class: "p5",
    topic: "Current Affairs & Environment",
    type: "text",
    text: "Name one way trees help the environment. 🌿",
    accepted: ["absorb carbon dioxide", "give oxygen", "prevent soil erosion", "provide habitat", "cool the air", "provide shade"],
    feedback: { correct: "Yes—that helps!", incorrect: "Examples: absorb CO₂, give oxygen, prevent erosion." }
  },
  {
    _id: "lp-p5-gk-ce-6",
    level: "lowerPrimary",
    subject: "generalKnowledge",
    class: "p5",
    topic: "Current Affairs & Environment",
    type: "choice",
    text: "Which causes air pollution?",
    options: ["Factory smoke", "Trees", "Clean water"],
    correct: "Factory smoke",
    feedback: { correct: "Correct.", incorrect: "Factory smoke releases harmful gases." }
  },
  {
    _id: "lp-p5-gk-ce-7",
    level: "lowerPrimary",
    subject: "generalKnowledge",
    class: "p5",
    topic: "Current Affairs & Environment",
    type: "multiText",
    text: "List two ways to save water at home. 💧",
    minAnswer: 2,
    accepted: [
      "turn off taps",
      "fix leaks",
      "collect rainwater",
      "use a bucket not hose",
      "shorter showers",
      "reuse water for plants"
    ],
    feedback: { correct: "Great water-saving ideas!", incorrect: "Ideas: turn off taps, fix leaks, collect rainwater, reuse water." }
  },
  {
    _id: "lp-p5-gk-ce-8",
    level: "lowerPrimary",
    subject: "generalKnowledge",
    class: "p5",
    topic: "Current Affairs & Environment",
    type: "choice",
    text: "Endangered animals are those that are ____.",
    options: ["At risk of extinction", "Very common", "Always pets"],
    correct: "At risk of extinction",
    feedback: { correct: "Yes—that’s endangered.", incorrect: "They are at risk of disappearing forever." }
  },

  // ========== Health & Safety (8) ==========
  {
    _id: "lp-p5-gk-hs-1",
    level: "lowerPrimary",
    subject: "generalKnowledge",
    class: "p5",
    topic: "Health & Safety",
    type: "choice",
    text: "What should you do before eating? 🧼",
    options: ["Wash hands", "Touch face", "Play outside"],
    correct: "Wash hands",
    feedback: { correct: "Yes—wash hands.", incorrect: "Washing hands prevents illness." }
  },
  {
    _id: "lp-p5-gk-hs-2",
    level: "lowerPrimary",
    subject: "generalKnowledge",
    class: "p5",
    topic: "Health & Safety",
    type: "choice",
    text: "What helps keep teeth healthy? 🦷",
    options: ["Brushing teeth", "Eating candy", "Drinking soda"],
    correct: "Brushing teeth",
    feedback: { correct: "Correct.", incorrect: "Brush twice a day." }
  },
  {
    _id: "lp-p5-gk-hs-3",
    level: "lowerPrimary",
    subject: "generalKnowledge",
    class: "p5",
    topic: "Health & Safety",
    type: "multiChoice",
    text: "Safe road crossing includes:",
    options: ["Look both ways", "Run across quickly", "Use a zebra crossing", "Don’t watch traffic"],
    correct: ["Look both ways", "Use a zebra crossing"],
    feedback: { correct: "Good road sense!", incorrect: "Look both ways and use crossings." }
  },
  {
    _id: "lp-p5-gk-hs-4",
    level: "lowerPrimary",
    subject: "generalKnowledge",
    class: "p5",
    topic: "Health & Safety",
    type: "fill-in",
    text: "What number do you dial for emergencies (UG)? 🚑",
    correct: "999",
    feedback: { correct: "Correct—999.", incorrect: "Dial 999 in an emergency." }
  },
  {
    _id: "lp-p5-gk-hs-5",
    level: "lowerPrimary",
    subject: "generalKnowledge",
    class: "p5",
    topic: "Health & Safety",
    type: "text",
    text: "Name one benefit of regular exercise. 🏃‍♀️",
    accepted: ["keeps you fit", "strong muscles", "healthy heart", "lose weight", "feel better", "more energy"],
    feedback: { correct: "Yes—that’s a benefit.", incorrect: "Benefits include fitness, stronger heart and muscles." }
  },
  {
    _id: "lp-p5-gk-hs-6",
    level: "lowerPrimary",
    subject: "generalKnowledge",
    class: "p5",
    topic: "Health & Safety",
    type: "choice",
    text: "What should you wear when cycling? 🚴",
    options: ["Helmet", "Nothing", "Flip-flops only"],
    correct: "Helmet",
    feedback: { correct: "Safety first!", incorrect: "Wear a helmet to protect your head." }
  },
  {
    _id: "lp-p5-gk-hs-7",
    level: "lowerPrimary",
    subject: "generalKnowledge",
    class: "p5",
    topic: "Health & Safety",
    type: "multiText",
    text: "List three food groups for a balanced meal. 🍽️",
    minAnswer: 3,
    accepted: [
      "carbohydrates", "proteins", "vitamins", "minerals", "fats", "dairy", "fruits", "vegetables", "grains"
    ],
    feedback: { correct: "Balanced and healthy!", incorrect: "Examples: carbohydrates, proteins, fruits/vegetables, dairy." }
  },
  {
    _id: "lp-p5-gk-hs-8",
    level: "lowerPrimary",
    subject: "generalKnowledge",
    class: "p5",
    topic: "Health & Safety",
    type: "fill-in",
    text: "What drink keeps your body hydrated best? 💦",
    correct: "Water",
    feedback: { correct: "Yes—water.", incorrect: "Water is best for hydration." }
  }
];
