import { type Question } from "../../types";

const juniorSchoolData = [
    {
    "level": "juniorSchool",
    "category": "math",
    "text": "5 + 4 = ?",
    "options": [
      "8",
      "9",
      "10"
    ],
    "correct": "9",
    "feedback": {
      "correct": "Great job!",
      "incorrect": "Add again carefully."
    }
  },
  {
    "level": "juniorSchool",
    "category": "math",
    "text": "What is half of 10?",
    "options": [
      "4",
      "5",
      "6"
    ],
    "correct": "5",
    "feedback": {
      "correct": "Right!",
      "incorrect": "Think of equal sharing."
    }
  },
  {
    "level": "juniorSchool",
    "category": "math",
    "text": "Which is bigger: 35 or 53?",
    "options": [
      "35",
      "53",
      "They are equal"
    ],
    "correct": "53",
    "feedback": {
      "correct": "Yes, 53 is larger.",
      "incorrect": "Compare the tens first."
    }
  },
  {
    "level": "juniorSchool",
    "category": "math",
    "text": "What is 7 × 6?",
    "options": [
      "42",
      "36",
      "48"
    ],
    "correct": "42",
    "feedback": {
      "correct": "Well done!",
      "incorrect": "Try using multiplication tables."
    }
  },
  {
    "level": "upperPrimary",
    "category": "math",
    "text": "If you divide 56 by 7, what do you get?",
    "options": [
      "7",
      "8",
      "6"
    ],
    "correct": "8",
    "feedback": {
      "correct": "Correct!",
      "incorrect": "Think of 7 times what equals 56."
    }
  },
  {
    "level": "upperPrimary",
    "category": "math",
    "text": "What is the perimeter of a rectangle with length 8 cm and width 3 cm?",
    "options": [
      "22 cm",
      "24 cm",
      "20 cm"
    ],
    "correct": "22 cm",
    "feedback": {
      "correct": "Yes, perimeter = 2 × (8+3).",
      "incorrect": "Add all sides and try again."
    }
  },
    {
    "level": "juniorSchool",
    "category": "english",
    "text": "Choose the correct plural of 'child'.",
    "options": [
      "childs",
      "children",
      "childes"
    ],
    "correct": "children",
    "feedback": {
      "correct": "Great!",
      "incorrect": "Think of irregular plurals."
    }
  },
  {
    "level": "juniorSchool",
    "category": "english",
    "text": "Which sentence is correct?",
    "options": [
      "She run fast.",
      "She runs fast.",
      "She running fast."
    ],
    "correct": "She runs fast.",
    "feedback": {
      "correct": "Yes!",
      "incorrect": "Check subject-verb agreement."
    }
  },
  {
    "level": "juniorSchool",
    "category": "english",
    "text": "What is the opposite of 'hot'?",
    "options": [
      "warm",
      "cold",
      "cool"
    ],
    "correct": "cold",
    "feedback": {
      "correct": "Right!",
      "incorrect": "Think of the temperature."
    }
  },
  {
    "level": "juniorSchool",
    "category": "english",
    "text": "Choose the correct word: The sun ___ in the east.",
    "options": [
      "rise",
      "rises",
      "rose"
    ],
    "correct": "rises",
    "feedback": {
      "correct": "Correct!",
      "incorrect": "Think about present tense."
    }
  },

  {
    "level": "juniorSchool",
    "category": "science",
    "text": "How many legs does an insect have?",
    "options": [
      "4",
      "6",
      "8"
    ],
    "correct": "6",
    "feedback": {
      "correct": "Correct!",
      "incorrect": "Look closely at insects."
    }
  },
  {
    "level": "juniorSchool",
    "category": "science",
    "text": "What gas do humans breathe in?",
    "options": [
      "Oxygen",
      "Carbon dioxide",
      "Nitrogen"
    ],
    "correct": "Oxygen",
    "feedback": {
      "correct": "Right!",
      "incorrect": "We need it to live."
    }
  },
  {
    "level": "juniorSchool",
    "category": "science",
    "text": "What is the closest planet to the Sun?",
    "options": [
      "Venus",
      "Mercury",
      "Mars"
    ],
    "correct": "Mercury",
    "feedback": {
      "correct": "Yes!",
      "incorrect": "Think smallest and fastest planet."
    }
  },
  {
    "level": "juniorSchool",
    "category": "science",
    "text": "Which part of the plant makes food?",
    "options": [
      "Roots",
      "Leaves",
      "Stem"
    ],
    "correct": "Leaves",
    "feedback": {
      "correct": "Correct!",
      "incorrect": "They use sunlight for this."
    }
  },

  {
    "level": "juniorSchool",
    "category": "generalKnowledge",
    "text": "What is the capital of France?",
    "options": [
      "London",
      "Paris",
      "Berlin"
    ],
    "correct": "Paris",
    "feedback": {
      "correct": "Correct!",
      "incorrect": "It's known as the City of Light."
    }
  },
  {
    "level": "juniorSchool",
    "category": "generalKnowledge",
    "text": "Which direction does the sun rise from?",
    "options": [
      "North",
      "East",
      "West"
    ],
    "correct": "East",
    "feedback": {
      "correct": "Right!",
      "incorrect": "Think about morning sunlight."
    }
  },
  {
    "level": "juniorSchool",
    "category": "generalKnowledge",
    "text": "Which is the largest ocean in the world?",
    "options": [
      "Atlantic",
      "Pacific",
      "Indian"
    ],
    "correct": "Pacific",
    "feedback": {
      "correct": "Yes!",
      "incorrect": "Think of the ocean between Asia and America."
    }
  },
  {
    "level": "juniorSchool",
    "category": "generalKnowledge",
    "text": "Who is known as the Father of Computers?",
    "options": [
      "Charles Babbage",
      "Albert Einstein",
      "Isaac Newton"
    ],
    "correct": "Charles Babbage",
    "feedback": {
      "correct": "Correct!",
      "incorrect": "He invented the first mechanical computer."
    }
  },
    {
    "level": "juniorSchool",
    "category": "math",
    "text": "Which is the smallest number: 15, 9, 21?",
    "options": [
      "9",
      "15",
      "21"
    ],
    "correct": "9",
    "feedback": {
      "correct": "Yes!",
      "incorrect": "Look for the smallest value."
    }
  },
  {
    "level": "juniorSchool",
    "category": "math",
    "text": "What is 10 - 7?",
    "options": [
      "2",
      "3",
      "4"
    ],
    "correct": "3",
    "feedback": {
      "correct": "Right!",
      "incorrect": "Count backward from 10."
    }
  },
  {
    "level": "juniorSchool",
    "category": "math",
    "text": "Solve: 8 × 8",
    "options": [
      "64",
      "56",
      "72"
    ],
    "correct": "64",
    "feedback": {
      "correct": "Perfect!",
      "incorrect": "Check your multiplication table."
    }
  },
  {
    "level": "juniorSchool",
    "category": "math",
    "text": "Which is an even number: 37, 42, 55?",
    "options": [
      "37",
      "42",
      "55"
    ],
    "correct": "42",
    "feedback": {
      "correct": "Yes, it ends in 2.",
      "incorrect": "Even numbers end in 0, 2, 4, 6, 8."
    }
  },
   {
    "level": "juniorSchool",
    "category": "english",
    "text": "Find the rhyming word: 'cat' rhymes with?",
    "options": [
      "bat",
      "cup",
      "pen"
    ],
    "correct": "bat",
    "feedback": {
      "correct": "Good rhyme!",
      "incorrect": "Say them out loud."
    }
  },
  {
    "level": "juniorSchool",
    "category": "english",
    "text": "Which word is a pronoun?",
    "options": [
      "she",
      "house",
      "jump"
    ],
    "correct": "she",
    "feedback": {
      "correct": "Yes!",
      "incorrect": "A pronoun replaces a noun."
    }
  },
  {
    "level": "juniorSchool",
    "category": "english",
    "text": "What is the past tense of 'run'?",
    "options": [
      "ran",
      "running",
      "runned"
    ],
    "correct": "ran",
    "feedback": {
      "correct": "Right!",
      "incorrect": "Think irregular verbs."
    }
  },
  {
    "level": "juniorSchool",
    "category": "english",
    "text": "Which sentence is correct?",
    "options": [
      "Ali and me are friends.",
      "Ali and I are friends.",
      "Me and Ali are friends."
    ],
    "correct": "Ali and I are friends.",
    "feedback": {
      "correct": "Yes!",
      "incorrect": "Check grammar rules for 'I' and 'me'."
    }
  },
    {
    "level": "juniorSchool",
    "category": "science",
    "text": "Which planet is known as the Red Planet?",
    "options": [
      "Mars",
      "Venus",
      "Earth"
    ],
    "correct": "Mars",
    "feedback": {
      "correct": "Yes!",
      "incorrect": "It looks red from space."
    }
  },
  {
    "level": "juniorSchool",
    "category": "science",
    "text": "What do bees make?",
    "options": [
      "Milk",
      "Honey",
      "Jam"
    ],
    "correct": "Honey",
    "feedback": {
      "correct": "Right!",
      "incorrect": "It’s sweet and golden."
    }
  },
  {
    "level": "juniorSchool",
    "category": "science",
    "text": "Which part of the body helps you breathe?",
    "options": [
      "Lungs",
      "Stomach",
      "Brain"
    ],
    "correct": "Lungs",
    "feedback": {
      "correct": "Correct!",
      "incorrect": "They are in your chest."
    }
  },
  {
    "level": "juniorSchool",
    "category": "science",
    "text": "What is the largest animal on Earth?",
    "options": [
      "Elephant",
      "Blue Whale",
      "Shark"
    ],
    "correct": "Blue Whale",
    "feedback": {
      "correct": "Yes!",
      "incorrect": "It lives in the ocean."
    }
  },
    {
    "level": "juniorSchool",
    "category": "generalKnowledge",
    "text": "How many continents are there in the world?",
    "options": [
      "6",
      "7",
      "8"
    ],
    "correct": "7",
    "feedback": {
      "correct": "Yes!",
      "incorrect": "Count them again."
    }
  },
  {
    "level": "juniorSchool",
    "category": "generalKnowledge",
    "text": "What is the currency of the USA?",
    "options": [
      "Dollar",
      "Euro",
      "Pound"
    ],
    "correct": "Dollar",
    "feedback": {
      "correct": "Right!",
      "incorrect": "It’s green paper money."
    }
  },
  {
    "level": "juniorSchool",
    "category": "generalKnowledge",
    "text": "Who wrote 'The Jungle Book'?",
    "options": [
      "Rudyard Kipling",
      "Mark Twain",
      "Roald Dahl"
    ],
    "correct": "Rudyard Kipling",
    "feedback": {
      "correct": "Correct!",
      "incorrect": "He was an English writer."
    }
  },
  {
    "level": "juniorSchool",
    "category": "generalKnowledge",
    "text": "Which sport is played at Wimbledon?",
    "options": [
      "Tennis",
      "Football",
      "Cricket"
    ],
    "correct": "Tennis",
    "feedback": {
      "correct": "Yes!",
      "incorrect": "It’s played with rackets."
    }
  },
    {
    "level": "juniorSchool",
    "category": "religion",
    "text": "What is the first pillar of Islam?",
    "options": ["Shahada", "Salah", "Zakat"],
    "correct": "Shahada",
    "feedback": { "correct": "Correct! Shahada is the declaration of faith.", "incorrect": "Think about believing in Allah and His Messenger." }
  },
  {
    "level": "juniorSchool",
    "category": "religion",
    "text": "How many times a day do Muslims pray?",
    "options": ["3", "5", "7"],
    "correct": "5",
    "feedback": { "correct": "Yes! We pray five times a day.", "incorrect": "It's more than 3 and less than 7." }
  },
  {
    "level": "juniorSchool",
    "category": "religion",
    "text": "Which city do Muslims visit for Hajj?",
    "options": ["Makkah", "Medina", "Jerusalem"],
    "correct": "Makkah",
    "feedback": { "correct": "Yes! Hajj takes place in Makkah.", "incorrect": "It's in Saudi Arabia." }
  },
  {
    "level": "juniorSchool",
    "category": "religion",
    "text": "Who built the Kaaba?",
    "options": ["Prophet Ibrahim and Ismail", "Prophet Muhammad", "Prophet Nuh"],
    "correct": "Prophet Ibrahim and Ismail",
    "feedback": { "correct": "Correct! They built it by Allah’s command.", "incorrect": "Think of father and son Prophets." }
  },
  {
    "level": "juniorSchool",
    "category": "religion",
    "text": "What is the Muslim greeting?",
    "options": ["As-salamu alaykum", "Good morning", "Hello"],
    "correct": "As-salamu alaykum",
    "feedback": { "correct": "Correct! It means 'Peace be upon you.'", "incorrect": "It starts with 'As-sa...'" }
  },
  {
    "level": "juniorSchool",
    "category": "religion",
    "text": "Which Prophet built an ark to survive the flood?",
    "options": ["Prophet Nuh", "Prophet Musa", "Prophet Isa"],
    "correct": "Prophet Nuh",
    "feedback": { "correct": "Yes! Prophet Nuh built an ark.", "incorrect": "Think about the great flood story." }
  },
  {
    "level": "juniorSchool",
    "category": "religion",
    "text": "Which Prophet was given the Torah?",
    "options": ["Prophet Musa", "Prophet Isa", "Prophet Yusuf"],
    "correct": "Prophet Musa",
    "feedback": { "correct": "Correct! Musa (A.S) was given the Torah.", "incorrect": "He also parted the sea." }
  },
  {
    "level": "juniorSchool",
    "category": "religion",
    "text": "What do Muslims say after sneezing?",
    "options": ["Alhamdulillah", "Bismillah", "SubhanAllah"],
    "correct": "Alhamdulillah",
    "feedback": { "correct": "Yes! We thank Allah by saying Alhamdulillah.", "incorrect": "It means 'All praise is for Allah'." }
  },
  {
    "level": "lowerPrimary",
    "category": "religion",
    "text": "How many chapters are in the Qur'an?",
    "options": ["114", "100", "120"],
    "correct": "114",
    "feedback": { "correct": "Yes! There are 114 surahs.", "incorrect": "It's a three-digit number over 100." }
  },
    {
    "level": "juniorSchool",
    "category": "religion",
    "text": "What is the holy book of Islam called?",
    "options": ["Qur'an", "Bible", "Torah"],
    "correct": "Qur'an",
    "feedback": { "correct": "Correct! The Qur'an is the holy book for Muslims.", "incorrect": "It’s not the Bible or Torah." }
  },
  {
    "level": "juniorSchool",
    "category": "history",
    "text": "Who built the Kaaba according to Islamic teachings?",
    "options": ["Prophet Ibrahim and Ismail", "Prophet Adam", "Prophet Muhammad"],
    "correct": "Prophet Ibrahim and Ismail",
    "feedback": { "correct": "Right! They are known to have built the Kaaba.", "incorrect": "Think of the father and son team." }
  },
  {
    "level": "juniorSchool",
    "category": "generalKnowledge",
    "text": "Which of these is a mode of transport?",
    "options": ["Car", "House", "Tree"],
    "correct": "Car",
    "feedback": { "correct": "Yes! A car is used for transport.", "incorrect": "Think about vehicles." }
  },
  {
    "level": "juniorSchool",
    "category": "science",
    "text": "Which is the part of the body you use to hear?",
    "options": ["Eye", "Ear", "Nose"],
    "correct": "Ear",
    "feedback": { "correct": "Yes! You hear with your ears.", "incorrect": "Think about what helps you hear sounds." }
  },
  {
    "level": "juniorSchool",
    "category": "english",
    "text": "Which word is a noun?",
    "options": ["Run", "School", "Quick"],
    "correct": "School",
    "feedback": { "correct": "Yes! A school is a place (noun).", "incorrect": "Remember, nouns are people, places, or things." }
  },
  {
    "level": "juniorSchool",
    "category": "english",
    "text": "Which word rhymes with 'pen'?",
    "options": ["Hen", "Dog", "Book"],
    "correct": "Hen",
    "feedback": { "correct": "Correct! Pen and Hen rhyme.", "incorrect": "Think of similar ending sounds." }
  },
  {
    "level": "juniorSchool",
    "category": "math",
    "text": "What is 10 minus 4?",
    "options": ["5", "6", "7"],
    "correct": "6",
    "feedback": { "correct": "Yes! 10 - 4 = 6.", "incorrect": "Try subtracting carefully." }
  },
  {
    "level": "juniorSchool",
    "category": "math",
    "text": "Which number comes next: 5, 6, 7, __?",
    "options": ["8", "9", "6"],
    "correct": "8",
    "feedback": { "correct": "Right! The sequence progresses by one.", "incorrect": "Look at the pattern carefully." }
  },
  {
    "level": "juniorSchool",
    "category": "environment",
    "text": "What do plants need to grow?",
    "options": ["Water", "Candy", "Toys"],
    "correct": "Water",
    "feedback": { "correct": "Right! Plants need water (and sunlight).", "incorrect": "Think about growth essentials." }
  },
  {
    "level": "juniorSchool",
    "category": "generalKnowledge",
    "text": "Which places children usually go to learn?",
    "options": ["School", "Market", "Beach"],
    "correct": "School",
    "feedback": { "correct": "Correct! School is for learning.", "incorrect": "Think of places of study." }
  },
  {
    "level": "juniorSchool",
    "category": "history",
    "text": "Who was the first human created?",
    "options": ["Prophet Adam", "Prophet Musa", "Prophet Isa"],
    "correct": "Prophet Adam",
    "feedback": { "correct": "Yes! Prophet Adam was the first man.", "incorrect": "Think of early Islamic stories." }
  },
  {
    "level": "juniorSchool",
    "category": "religion",
    "text": "How many times do Muslims pray each day?",
    "options": ["3", "5", "7"],
    "correct": "5",
    "feedback": { "correct": "Yes! Muslim children learn about 5 daily prayers.", "incorrect": "It’s one of the Five Pillars." }
  },
    {
    "level": "juniorSchool",
    "category": "math",
    "text": "What is 24 ÷ 4?",
    "options": ["6", "8", "5"],
    "correct": "6",
    "feedback": { "correct": "Yes! 24 ÷ 4 = 6.", "incorrect": "Try dividing step by step." }
  },
  {
    "level": "juniorSchool",
    "category": "math",
    "text": "Which number is smaller: 19 or 23?",
    "options": ["19", "23", "Both same"],
    "correct": "19",
    "feedback": { "correct": "Yes! 19 is smaller.", "incorrect": "Compare the digits carefully." }
  },
  {
    "level": "juniorSchool",
    "category": "english",
    "text": "Choose the correct plural of 'book'.",
    "options": ["Books", "Bookes", "Bookies"],
    "correct": "Books",
    "feedback": { "correct": "Yes! Books is correct.", "incorrect": "Plural of book just adds 's'." }
  },
  {
    "level": "juniorSchool",
    "category": "english",
    "text": "Which word is an action?",
    "options": ["Run", "Chair", "Green"],
    "correct": "Run",
    "feedback": { "correct": "Right! 'Run' is a verb.", "incorrect": "Actions are verbs." }
  },
  {
    "level": "juniorSchool",
    "category": "science",
    "text": "Which animal lays eggs?",
    "options": ["Chicken", "Cow", "Dog"],
    "correct": "Chicken",
    "feedback": { "correct": "Yes! Chickens lay eggs.", "incorrect": "Think about birds." }
  },
  {
    "level": "juniorSchool",
    "category": "science",
    "text": "What do we need to breathe?",
    "options": ["Oxygen", "Water", "Food"],
    "correct": "Oxygen",
    "feedback": { "correct": "Yes! Oxygen is essential for life.", "incorrect": "We breathe air, not food or water." }
  },
  {
    "level": "juniorSchool",
    "category": "story",
    "text": "Why did Hamid return the extra money?",
    "options": ["He was rich", "He was honest", "He didn’t need it"],
    "correct": "He was honest",
    "feedback": { "correct": "Yes! Honesty is important.", "incorrect": "He wanted to do the right thing." }
  },
  {
    "level": "juniorSchool",
    "category": "story",
    "text": "What did Fatima’s family do on Laylat al-Qadr?",
    "options": ["Prayed all night", "Went shopping", "Played games"],
    "correct": "Prayed all night",
    "feedback": { "correct": "Right! They spent the night worshipping.", "incorrect": "It was a special night for prayer." }
  },
  {
    "level": "juniorSchool",
    "category": "generalKnowledge",
    "text": "Which ocean is the largest?",
    "options": ["Atlantic", "Pacific", "Indian"],
    "correct": "Pacific",
    "feedback": { "correct": "Yes! Pacific Ocean is the largest.", "incorrect": "It’s bigger than the Atlantic and Indian oceans." }
  },
  {
    "level": "juniorSchool",
    "category": "generalKnowledge",
    "text": "Which continent is known as the 'Land Down Under'?",
    "options": ["Africa", "Australia", "Asia"],
    "correct": "Australia",
    "feedback": { "correct": "Right! Australia is called Land Down Under.", "incorrect": "Think about the southern hemisphere." }
  },
  {
    "level": "juniorSchool",
    "category": "history",
    "text": "Who was the first Prophet?",
    "options": ["Prophet Adam", "Prophet Musa", "Prophet Isa"],
    "correct": "Prophet Adam",
    "feedback": { "correct": "Yes! Adam (A.S) was the first human and Prophet.", "incorrect": "Think about the first man." }
  },
  {
    "level": "juniorSchool",
    "category": "history",
    "text": "Who built the Kaaba?",
    "options": ["Prophet Ibrahim and Ismail", "Prophet Muhammad", "Prophet Nuh"],
    "correct": "Prophet Ibrahim and Ismail",
    "feedback": { "correct": "Right! They built the Kaaba.", "incorrect": "It was a father and son team." }
  },
  {
    "level": "juniorSchool",
    "category": "environment",
    "text": "Which is harmful to the environment?",
    "options": ["Planting trees", "Littering", "Saving water"],
    "correct": "Littering",
    "feedback": { "correct": "Yes! Littering harms nature.", "incorrect": "Think about pollution." }
  },
  {
    "level": "juniorSchool",
    "category": "environment",
    "text": "Which energy comes from the Sun?",
    "options": ["Solar", "Coal", "Gas"],
    "correct": "Solar",
    "feedback": { "correct": "Right! Solar energy comes from the Sun.", "incorrect": "It’s renewable energy." }
  },
  {
    "level": "juniorSchool",
    "category": "religion",
    "text": "What do Muslims say before starting a meal?",
    "options": ["Bismillah", "Alhamdulillah", "SubhanAllah"],
    "correct": "Bismillah",
    "feedback": { "correct": "Yes! We begin meals with Bismillah.", "incorrect": "It’s the phrase to remember Allah before eating." }
  },
  {
    "level": "juniorSchool",
    "category": "religion",
    "text": "What is the Qur'an?",
    "options": ["A storybook", "The holy book of Islam", "A diary"],
    "correct": "The holy book of Islam",
    "feedback": { "correct": "Correct! It is Allah’s message to humanity.", "incorrect": "It is not a storybook or diary." }
  }
]

export const juniorSchoolQuestionsData = juniorSchoolData
      .map((q, i) => ({
            ...q,
            _id: `${i + 1}`,
            level: 'juniorSchool' as Question['level'],
            category: q.category as Question['category'],
          }))