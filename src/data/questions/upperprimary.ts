import { type Question } from "../../types";

const upperPrimaryData = [
    {
    "level": "upperPrimary",
    "category": "english",
    "text": "Identify the adjective: The tall building touched the sky.",
    "options": [
      "tall",
      "building",
      "sky"
    ],
    "correct": "tall",
    "feedback": {
      "correct": "Yes!",
      "incorrect": "An adjective describes a noun."
    }
  },
  {
    "level": "upperPrimary",
    "category": "english",
    "text": "Which sentence uses punctuation correctly?",
    "options": [
      "Where are you, going?",
      "Where are you going?",
      "Where, are you going?"
    ],
    "correct": "Where are you going?",
    "feedback": {
      "correct": "Perfect!",
      "incorrect": "Think about commas and question marks."
    }
  },
    {
    "level": "upperPrimary",
    "category": "science",
    "text": "What force pulls objects toward the Earth?",
    "options": [
      "Gravity",
      "Magnetism",
      "Friction"
    ],
    "correct": "Gravity",
    "feedback": {
      "correct": "Yes!",
      "incorrect": "It keeps us from floating away."
    }
  },
  {
    "level": "upperPrimary",
    "category": "science",
    "text": "What is H2O commonly known as?",
    "options": [
      "Water",
      "Oxygen",
      "Salt"
    ],
    "correct": "Water",
    "feedback": {
      "correct": "Right!",
      "incorrect": "You drink it every day."
    }
  },
    {
    "level": "upperPrimary",
    "category": "generalKnowledge",
    "text": "Which country has the largest population?",
    "options": [
      "India",
      "China",
      "USA"
    ],
    "correct": "China",
    "feedback": {
      "correct": "Right!",
      "incorrect": "It's in Asia and very big."
    }
  },
  {
    "level": "upperPrimary",
    "category": "generalKnowledge",
    "text": "In which continent is Egypt located?",
    "options": [
      "Asia",
      "Africa",
      "Europe"
    ],
    "correct": "Africa",
    "feedback": {
      "correct": "Yes!",
      "incorrect": "Look at a world map."
    }
  },


  {
    "level": "upperPrimary",
    "category": "math",
    "text": "A rectangle is 12 cm long and 5 cm wide. What is its area?",
    "options": [
      "60 cm²",
      "24 cm²",
      "17 cm²"
    ],
    "correct": "60 cm²",
    "feedback": {
      "correct": "Correct!",
      "incorrect": "Multiply length × width."
    }
  },
  {
    "level": "upperPrimary",
    "category": "math",
    "text": "What is 100 divided by 4?",
    "options": [
      "20",
      "25",
      "30"
    ],
    "correct": "25",
    "feedback": {
      "correct": "Right!",
      "incorrect": "Think: 4 × ? = 100."
    }
  },
  {
    "level": "upperPrimary",
    "category": "math",
    "text": "Riddle: I am a number greater than 8 but less than 10. What am I?",
    "options": [
      "8",
      "9",
      "10"
    ],
    "correct": "9",
    "feedback": {
      "correct": "Yes!",
      "incorrect": "It’s between 8 and 10."
    }
  },
  {
    "level": "upperPrimary",
    "category": "math",
    "text": "If you have 4 packs of pencils and each pack has 6 pencils, how many pencils are there in total?",
    "options": [
      "20",
      "24",
      "26"
    ],
    "correct": "24",
    "feedback": {
      "correct": "Correct!",
      "incorrect": "Multiply 4 × 6."
    }
  },
  {
    "level": "upperPrimary",
    "category": "math",
    "text": "A shop sells 3 bananas for $1. How many bananas can you buy for $4?",
    "options": [
      "9",
      "10",
      "12"
    ],
    "correct": "12",
    "feedback": {
      "correct": "Yes!",
      "incorrect": "Multiply 3 × 4."
    }
  },
    {
    "level": "upperPrimary",
    "category": "english",
    "text": "Which word means 'happy'?",
    "options": [
      "sad",
      "joyful",
      "angry"
    ],
    "correct": "joyful",
    "feedback": {
      "correct": "Correct!",
      "incorrect": "Think about feelings."
    }
  },
  {
    "level": "upperPrimary",
    "category": "english",
    "text": "Riddle: I start with 't', end with 't', and have 't' in me. What am I?",
    "options": [
      "teapot",
      "tent",
      "treat"
    ],
    "correct": "teapot",
    "feedback": {
      "correct": "Yes!",
      "incorrect": "Think about the drink container."
    }
  },
  {
    "level": "upperPrimary",
    "category": "english",
    "text": "Which is a synonym for 'fast'?",
    "options": [
      "quick",
      "slow",
      "stop"
    ],
    "correct": "quick",
    "feedback": {
      "correct": "Correct!",
      "incorrect": "Synonyms have similar meanings."
    }
  },
  {
    "level": "upperPrimary",
    "category": "english",
    "text": "Fill in the blank: The cake is ___ the table.",
    "options": [
      "in",
      "on",
      "under"
    ],
    "correct": "on",
    "feedback": {
      "correct": "Yes!",
      "incorrect": "Think about position."
    }
  },
  {
    "level": "upperPrimary",
    "category": "english",
    "text": "Which is a compound word?",
    "options": [
      "sunflower",
      "happy",
      "book"
    ],
    "correct": "sunflower",
    "feedback": {
      "correct": "Yes!",
      "incorrect": "It’s made from two words."
    }
  },
  {
    "level": "upperPrimary",
    "category": "english",
    "text": "Choose the correct spelling:",
    "options": [
      "bautiful",
      "beautiful",
      "beautifull"
    ],
    "correct": "beautiful",
    "feedback": {
      "correct": "Right!",
      "incorrect": "Look closely at each letter."
    }
  },
    {
    "level": "upperPrimary",
    "category": "science",
    "text": "Riddle: I shine at night but I’m not the moon. What am I?",
    "options": [
      "Star",
      "Cloud",
      "Sun"
    ],
    "correct": "Star",
    "feedback": {
      "correct": "Yes!",
      "incorrect": "Look up on a clear night."
    }
  },
  {
    "level": "upperPrimary",
    "category": "science",
    "text": "What is the boiling point of water in Celsius?",
    "options": [
      "100°C",
      "0°C",
      "50°C"
    ],
    "correct": "100°C",
    "feedback": {
      "correct": "Right!",
      "incorrect": "It’s the same temperature you boil tea at."
    }
  },
  {
    "level": "upperPrimary",
    "category": "science",
    "text": "Which gas do plants release during photosynthesis?",
    "options": [
      "Oxygen",
      "Carbon dioxide",
      "Nitrogen"
    ],
    "correct": "Oxygen",
    "feedback": {
      "correct": "Yes!",
      "incorrect": "It’s what we breathe in."
    }
  },
  {
    "level": "upperPrimary",
    "category": "science",
    "text": "What tool is used to look at stars?",
    "options": [
      "Microscope",
      "Telescope",
      "Periscope"
    ],
    "correct": "Telescope",
    "feedback": {
      "correct": "Correct!",
      "incorrect": "It’s very big and points to the sky."
    }
  },
  {
    "level": "upperPrimary",
    "category": "science",
    "text": "Fact question: The Sun is a type of ___?",
    "options": [
      "Planet",
      "Star",
      "Moon"
    ],
    "correct": "Star",
    "feedback": {
      "correct": "Right!",
      "incorrect": "It gives light and heat."
    }
  },
  {
    "level": "upperPrimary",
    "category": "science",
    "text": "Which animal is known to have black and white stripes?",
    "options": [
      "Zebra",
      "Tiger",
      "Panda"
    ],
    "correct": "Zebra",
    "feedback": {
      "correct": "Yes!",
      "incorrect": "It looks like a horse with stripes."
    }
  },

  {
    "level": "upperPrimary",
    "category": "generalKnowledge",
    "text": "Riddle: I have keys but no doors. What am I?",
    "options": [
      "Piano",
      "Map",
      "Book"
    ],
    "correct": "Piano",
    "feedback": {
      "correct": "Yes!",
      "incorrect": "It makes music."
    }
  },
  {
    "level": "upperPrimary",
    "category": "generalKnowledge",
    "text": "What is the largest desert in the world?",
    "options": [
      "Sahara",
      "Arctic",
      "Gobi"
    ],
    "correct": "Sahara",
    "feedback": {
      "correct": "Right!",
      "incorrect": "It’s in Africa."
    }
  },
  {
    "level": "upperPrimary",
    "category": "generalKnowledge",
    "text": "Who painted the Mona Lisa?",
    "options": [
      "Leonardo da Vinci",
      "Pablo Picasso",
      "Vincent van Gogh"
    ],
    "correct": "Leonardo da Vinci",
    "feedback": {
      "correct": "Yes!",
      "incorrect": "He was also a scientist."
    }
  },
  {
    "level": "upperPrimary",
    "category": "generalKnowledge",
    "text": "Which is the smallest country in the world?",
    "options": [
      "Vatican City",
      "Monaco",
      "Malta"
    ],
    "correct": "Vatican City",
    "feedback": {
      "correct": "Correct!",
      "incorrect": "It’s inside Rome."
    }
  },
  {
    "level": "upperPrimary",
    "category": "generalKnowledge",
    "text": "Which ocean is between Africa and Australia?",
    "options": [
      "Indian Ocean",
      "Pacific Ocean",
      "Atlantic Ocean"
    ],
    "correct": "Indian Ocean",
    "feedback": {
      "correct": "Yes!",
      "incorrect": "Think of India’s location."
    }
  },
  {
    "level": "upperPrimary",
    "category": "generalKnowledge",
    "text": "What is the national flower of Japan?",
    "options": [
      "Cherry Blossom",
      "Rose",
      "Lotus"
    ],
    "correct": "Cherry Blossom",
    "feedback": {
      "correct": "Right!",
      "incorrect": "It blooms in spring."
    }
  },
    {
    "level": "upperPrimary",
    "category": "religion",
    "text": "What is Zakat?",
    "options": ["Charity for the poor", "A prayer", "A fast"],
    "correct": "Charity for the poor",
    "feedback": { "correct": "Yes! It is giving a portion of wealth to help the poor.", "incorrect": "It’s one of the five pillars." }
  },
  {
    "level": "upperPrimary",
    "category": "religion",
    "text": "Which Prophet split the moon by Allah's will?",
    "options": ["Prophet Muhammad", "Prophet Isa", "Prophet Musa"],
    "correct": "Prophet Muhammad",
    "feedback": { "correct": "Correct! This was a miracle given to him.", "incorrect": "Think about the last Prophet." }
  },
  {
    "level": "upperPrimary",
    "category": "religion",
    "text": "What is Hajj?",
    "options": ["Pilgrimage to Makkah", "Fasting in Ramadan", "Giving charity"],
    "correct": "Pilgrimage to Makkah",
    "feedback": { "correct": "Yes! It is a journey to Makkah once in a lifetime.", "incorrect": "It happens in Dhul-Hijjah." }
  },
  {
    "level": "upperPrimary",
    "category": "religion",
    "text": "Who was given the Injil (Gospel)?",
    "options": ["Prophet Isa", "Prophet Musa", "Prophet Dawud"],
    "correct": "Prophet Isa",
    "feedback": { "correct": "Correct! Prophet Isa was given the Injil.", "incorrect": "He was known for healing miracles." }
  },
]

export const upperPrimaryQuestionsData = upperPrimaryData
      .map((q, i) => ({
            ...q,
            _id: `${i + 1}`,
            level: 'upperPrimary' as Question['level'],
            category: q.category as Question['category'],
          }))