import { type Question } from "../../types";

const lowerPrimaryData = [
   {
    "level": "lowerPrimary",
    "category": "religion",
    "text": "What is Laylat al-Qadr?",
    "options": ["Night of Power", "Night of Eid", "Night of Ramadan Start"],
    "correct": "Night of Power",
    "feedback": { "correct": "Correct! It is a blessed night in Ramadan.", "incorrect": "It’s when the Qur'an was first revealed." }
  },
  {
    "level": "lowerPrimary",
    "category": "religion",
    "text": "Which Prophet was swallowed by a big fish?",
    "options": ["Prophet Yunus", "Prophet Musa", "Prophet Dawud"],
    "correct": "Prophet Yunus",
    "feedback": { "correct": "Yes! Prophet Yunus was in the belly of a fish.", "incorrect": "He prayed inside the fish." }
  },
  {
    "level": "lowerPrimary",
    "category": "religion",
    "text": "Who was the first man Allah created?",
    "options": ["Prophet Adam", "Prophet Ibrahim", "Prophet Muhammad"],
    "correct": "Prophet Adam",
    "feedback": { "correct": "Correct! Prophet Adam was the first human.", "incorrect": "He was created from clay." }
  },

  {
    "level": "lowerPrimary",
    "category": "math",
    "text": "If you have 12 apples and give 5 to your friend, how many apples do you have left?",
    "options": ["5", "7", "8"],
    "correct": "7",
    "feedback": { "correct": "Correct! 12 - 5 = 7.", "incorrect": "Remember to subtract carefully." }
  },
  {
    "level": "lowerPrimary",
    "category": "math",
    "text": "What is 8 × 6?",
    "options": ["42", "48", "56"],
    "correct": "48",
    "feedback": { "correct": "Great job!", "incorrect": "Try counting in sixes." }
  },
  {
    "level": "lowerPrimary",
    "category": "english",
    "text": "Which of these words is spelled correctly?",
    "options": ["beleive", "believe", "believ"],
    "correct": "believe",
    "feedback": { "correct": "Well done!", "incorrect": "Remember: i before e except after c." }
  },
  {
    "level": "lowerPrimary",
    "category": "english",
    "text": "What is the opposite of 'hot'?",
    "options": ["warm", "cold", "cool"],
    "correct": "cold",
    "feedback": { "correct": "Yes!", "incorrect": "Think about the temperature." }
  },
  {
    "level": "lowerPrimary",
    "category": "science",
    "text": "Which planet is known as the Red Planet?",
    "options": ["Mars", "Jupiter", "Venus"],
    "correct": "Mars",
    "feedback": { "correct": "Correct! Mars looks red because of iron in its soil.", "incorrect": "Hint: It is named after the Roman god of war." }
  },
  {
    "level": "lowerPrimary",
    "category": "science",
    "text": "What gas do humans breathe in to live?",
    "options": ["Oxygen", "Carbon Dioxide", "Nitrogen"],
    "correct": "Oxygen",
    "feedback": { "correct": "Exactly!", "incorrect": "We need oxygen to survive." }
  },
  {
    "level": "lowerPrimary",
    "category": "story",
    "text": "In the story of 'The Honest Woodcutter', what did the angel give him for being truthful?",
    "options": ["Only his old axe", "A golden and silver axe", "A new shop"],
    "correct": "A golden and silver axe",
    "feedback": { "correct": "Right! Honesty was rewarded.", "incorrect": "Remember, he got more than just his old axe." }
  },
  {
    "level": "lowerPrimary",
    "category": "story",
    "text": "In 'Little Red Riding Hood', who was pretending to be the grandmother?",
    "options": ["A wolf", "A bear", "A fox"],
    "correct": "A wolf",
    "feedback": { "correct": "Yes!", "incorrect": "Think about the sneaky animal." }
  },
  {
    "level": "lowerPrimary",
    "category": "generalKnowledge",
    "text": "Which country is famous for the Great Wall?",
    "options": ["India", "China", "Japan"],
    "correct": "China",
    "feedback": { "correct": "Correct!", "incorrect": "It’s in East Asia." }
  },
  {
    "level": "lowerPrimary",
    "category": "generalKnowledge",
    "text": "How many days are there in a leap year?",
    "options": ["365", "366", "364"],
    "correct": "366",
    "feedback": { "correct": "Right!", "incorrect": "A leap year has one extra day in February." }
  },
  {
    "level": "lowerPrimary",
    "category": "history",
    "text": "Who was the first President of the United States?",
    "options": ["Abraham Lincoln", "George Washington", "Thomas Jefferson"],
    "correct": "George Washington",
    "feedback": { "correct": "Correct!", "incorrect": "He is known as the father of the nation." }
  },
  {
    "level": "lowerPrimary",
    "category": "history",
    "text": "In which country were the pyramids built?",
    "options": ["Egypt", "Mexico", "India"],
    "correct": "Egypt",
    "feedback": { "correct": "Yes!", "incorrect": "Think about the River Nile." }
  },
  {
    "level": "lowerPrimary",
    "category": "environment",
    "text": "Which of these is renewable energy?",
    "options": ["Solar power", "Coal", "Oil"],
    "correct": "Solar power",
    "feedback": { "correct": "Great choice!", "incorrect": "It comes from the sun and never runs out." }
  },
  {
    "level": "lowerPrimary",
    "category": "environment",
    "text": "What do trees give us that we need to breathe?",
    "options": ["Oxygen", "Smoke", "Dust"],
    "correct": "Oxygen",
    "feedback": { "correct": "Right!", "incorrect": "It’s the same gas we breathe in." }
  },
    {
    "level": "lowerPrimary",
    "category": "religion",
    "text": "In Islam, what is the holy book called?",
    "options": ["Bible", "Torah", "Qur'an"],
    "correct": "Qur'an",
    "feedback": { "correct": "Correct!", "incorrect": "Muslims believe the Qur'an is the word of Allah." }
  },
  {
    "level": "lowerPrimary",
    "category": "religion",
    "text": "How many times do Muslims pray each day?",
    "options": ["3", "5", "7"],
    "correct": "5",
    "feedback": { "correct": "Yes!", "incorrect": "It’s one of the Five Pillars of Islam." }
  },
]

export const lowerPrimaryQuestionsData = lowerPrimaryData
      .map((q, i) => ({
            ...q,
            _id: `${i + 1}`,
            level: 'lowerPrimary' as Question['level'],
            category: q.category as Question['category'],
          }))