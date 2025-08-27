import { type Question } from "../../types";

const preschoolQuestions = [
  {
    "level": "preSchool",
    "category": "english",
    "description": "Alphabet recognition",
    "text": "Which letter is for Apple?",
    "options": ["A", "B", "C"],
    "correct": "A",
    "feedback": { "correct": "Great! A is for Apple.", "incorrect": "Try again — look for A." }
  },
  {
    "level": "preSchool",
    "category": "english",
    "description": "Alphabet recognition",
    "text": "Which letter comes after A?",
    "options": ["B", "D", "C"],
    "correct": "B",
    "feedback": { "correct": "Yes, A is followed by B.", "incorrect": "Not quite, think ABC song." }
  },
  {
    "level": "preSchool",
    "category": "english",
    "description": "Word recognition",
    "text": "Rearrange to make a word: tac",
    "options": ["cat", "tac", "act"],
    "correct": "cat",
    "feedback": { "correct": "Yes! It's cat.", "incorrect": "Try again — it’s an animal that meows." }
  },
  {
    "level": "preSchool",
    "category": "english",
    "description": "Rhyming words",
    "text": "Which word rhymes with 'bat'?",
    "options": ["cat", "dog", "sun"],
    "correct": "cat",
    "feedback": { "correct": "Correct! Bat rhymes with cat.", "incorrect": "Try again, listen to the ending sound." }
  },
  {
    "level": "preSchool",
    "category": "english",
    "description": "Sight words",
    "text": "Which word is 'dog'?",
    "options": ["dog", "cat", "boy"],
    "correct": "dog",
    "feedback": { "correct": "Yes, that’s dog!", "incorrect": "Not this one — look for d-o-g." }
  },
  {
    "level": "preSchool",
    "category": "english",
    "description": "Alphabet recognition",
    "text": "Which letter is missing? A, B, __, D",
    "options": ["C", "E", "F"],
    "correct": "C",
    "feedback": { "correct": "Yes! C comes after B.", "incorrect": "Not quite — sing the ABC song." }
  },
  {
    "level": "preSchool",
    "category": "english",
    "description": "Opposites",
    "text": "What is the opposite of big?",
    "options": ["small", "tall", "long"],
    "correct": "small",
    "feedback": { "correct": "Great! Big is the opposite of small.", "incorrect": "Not this one — try again." }
  },
  {
    "level": "preSchool",
    "category": "english",
    "description": "Phonics",
    "text": "Which word starts with B?",
    "options": ["Ball", "Apple", "Cat"],
    "correct": "Ball",
    "feedback": { "correct": "Correct! Ball starts with B.", "incorrect": "Nope — think b-b-ball." }
  },
  {
    "level": "preSchool",
    "category": "english",
    "description": "Letters and sounds",
    "text": "Which sound does S make?",
    "options": ["sss", "mmm", "aaa"],
    "correct": "sss",
    "feedback": { "correct": "Yes, S makes sss sound.", "incorrect": "Not this one — think of snake." }
  },
  {
    "level": "preSchool",
    "category": "english",
    "description": "Simple word building",
    "text": "What word is made from d + o + g?",
    "options": ["dog", "dig", "dot"],
    "correct": "dog",
    "feedback": { "correct": "Yes! d-o-g spells dog.", "incorrect": "Try again — it barks." }
  },
   {
    "level": "preSchool",
    "category": "math",
    "description": "Counting",
    "text": "How many apples? 🍎🍎🍎",
    "options": ["2", "3", "4"],
    "correct": "3",
    "feedback": { "correct": "Yes, 3 apples!", "incorrect": "Count again slowly." }
  },
  {
    "level": "preSchool",
    "category": "math",
    "description": "Number recognition",
    "text": "Which number is 5?",
    "options": ["3", "5", "8"],
    "correct": "5",
    "feedback": { "correct": "Great! That is 5.", "incorrect": "Not this one, look carefully." }
  },
  {
    "level": "preSchool",
    "category": "math",
    "description": "Shapes",
    "text": "Which one is a circle?",
    "options": ["🔺", "⚫", "⬜"],
    "correct": "⚫",
    "feedback": { "correct": "Yes, round like a ball.", "incorrect": "Try again — circle is round." }
  },
  {
    "level": "preSchool",
    "category": "math",
    "description": "Counting",
    "text": "Count the ducks 🦆🦆",
    "options": ["1", "2", "3"],
    "correct": "2",
    "feedback": { "correct": "Yes, 2 ducks!", "incorrect": "Count again, quack quack!" }
  },
  {
    "level": "preSchool",
    "category": "math",
    "description": "Colors",
    "text": "What color is the sky?",
    "options": ["Blue", "Red", "Green"],
    "correct": "Blue",
    "feedback": { "correct": "Yes, sky is blue!", "incorrect": "Not this one, think daytime sky." }
  },
  {
    "level": "preSchool",
    "category": "math",
    "description": "Comparisons",
    "text": "Which is big?",
    "options": ["🐘", "🐭"],
    "correct": "🐘",
    "feedback": { "correct": "Yes, elephant is big!", "incorrect": "Try again — look for big one." }
  },
  {
    "level": "preSchool",
    "category": "math",
    "description": "Counting",
    "text": "How many stars? ⭐⭐",
    "options": ["1", "2", "4"],
    "correct": "2",
    "feedback": { "correct": "Yes, 2 stars!", "incorrect": "Count again slowly." }
  },
  {
    "level": "preSchool",
    "category": "math",
    "description": "Shapes",
    "text": "Which one is a square?",
    "options": ["⬜", "⚫", "🔺"],
    "correct": "⬜",
    "feedback": { "correct": "Yes, square has 4 sides.", "incorrect": "Try again — square has corners." }
  },
  {
    "level": "preSchool",
    "category": "math",
    "description": "Counting",
    "text": "How many bananas? 🍌🍌🍌🍌",
    "options": ["3", "4", "5"],
    "correct": "4",
    "feedback": { "correct": "Yes, 4 bananas!", "incorrect": "Count them again." }
  },
  {
    "level": "preSchool",
    "category": "math",
    "description": "Colors",
    "text": "What color is grass?",
    "options": ["Yellow", "Green", "Blue"],
    "correct": "Green",
    "feedback": { "correct": "Yes, grass is green!", "incorrect": "Not this one, try again." }
  },
  {
    "level": "preSchool",
    "category": "science",
    "description": "Animals",
    "text": "Which animal says 'moo'?",
    "options": ["Dog", "Cow", "Cat"],
    "correct": "Cow",
    "feedback": { "correct": "Yes, cow says moo!", "incorrect": "Not this one, try again." }
  },
  {
    "level": "preSchool",
    "category": "science",
    "description": "Weather",
    "text": "What do we see on a rainy day?",
    "options": ["Rain", "Sun", "Stars"],
    "correct": "Rain",
    "feedback": { "correct": "Yes, it rains!", "incorrect": "No, think of water falling." }
  },
  {
    "level": "preSchool",
    "category": "science",
    "description": "Senses",
    "text": "What do we use to see?",
    "options": ["Eyes", "Ears", "Nose"],
    "correct": "Eyes",
    "feedback": { "correct": "Yes, we see with eyes!", "incorrect": "No, try again." }
  },
  {
    "level": "preSchool",
    "category": "science",
    "description": "Day and Night",
    "text": "What do we see at night?",
    "options": ["Stars", "Sun", "Clouds"],
    "correct": "Stars",
    "feedback": { "correct": "Yes, stars at night.", "incorrect": "Not this one, think night sky." }
  },
  {
    "level": "preSchool",
    "category": "science",
    "description": "Animals",
    "text": "Which one can fly?",
    "options": ["Bird", "Fish", "Dog"],
    "correct": "Bird",
    "feedback": { "correct": "Yes, birds can fly.", "incorrect": "No, try again." }
  },
  {
    "level": "preSchool",
    "category": "science",
    "description": "Body",
    "text": "What do we use to smell?",
    "options": ["Nose", "Eyes", "Hands"],
    "correct": "Nose",
    "feedback": { "correct": "Yes, we smell with nose.", "incorrect": "Not this one, try again." }
  },
  {
    "level": "preSchool",
    "category": "science",
    "description": "Weather",
    "text": "What shines bright in the day?",
    "options": ["Sun", "Moon", "Stars"],
    "correct": "Sun",
    "feedback": { "correct": "Yes, sun shines in the day.", "incorrect": "Not this one, try again." }
  },
  {
    "level": "preSchool",
    "category": "science",
    "description": "Animals",
    "text": "Which one lives in water?",
    "options": ["Fish", "Dog", "Bird"],
    "correct": "Fish",
    "feedback": { "correct": "Yes, fish lives in water.", "incorrect": "Not this one, try again." }
  },
  {
    "level": "preSchool",
    "category": "science",
    "description": "Body",
    "text": "What do we use to hear?",
    "options": ["Ears", "Hands", "Eyes"],
    "correct": "Ears",
    "feedback": { "correct": "Yes, we hear with ears.", "incorrect": "Not this one, try again." }
  },
  {
    "level": "preSchool",
    "category": "science",
    "description": "Plants",
    "text": "What is green and grows?",
    "options": ["Tree", "Rock", "Car"],
    "correct": "Tree",
    "feedback": { "correct": "Yes, tree is green and grows.", "incorrect": "Not this one, try again." }
  },
  {    
    "level": "preSchool",
    "category": "generalKnowledge",
    "description": "Family",
    "text": "Who cooks food at home?",
    "options": ["Mother", "Dog", "Teacher"],
    "correct": "Mother",
    "feedback": { "correct": "Yes, mother cooks!", "incorrect": "Not this one, try again." }
  },
  {    
    "level": "preSchool",
    "category": "generalKnowledge",
    "description": "Community Helpers",
    "text": "Who teaches in school?",
    "options": ["Teacher", "Doctor", "Farmer"],
    "correct": "Teacher",
    "feedback": { "correct": "Yes, teacher teaches.", "incorrect": "Not this one, think school." }
  },
  {    
    "level": "preSchool",
    "category": "generalKnowledge",
    "description": "Daily Life",
    "text": "What do we use to eat soup?",
    "options": ["Spoon", "Fork", "Knife"],
    "correct": "Spoon",
    "feedback": { "correct": "Yes, we use spoon.", "incorrect": "Not this one, try again." }
  },
  {    
    "level": "preSchool",
    "category": "generalKnowledge",
    "description": "Objects",
    "text": "Where do we sleep?",
    "options": ["Bed", "Car", "Chair"],
    "correct": "Bed",
    "feedback": { "correct": "Yes, we sleep in bed.", "incorrect": "Not this one, try again." }
  },
  {    
    "level": "preSchool",
    "category": "generalKnowledge",
    "description": "Community Helpers",
    "text": "Who helps sick people?",
    "options": ["Doctor", "Farmer", "Driver"],
    "correct": "Doctor",
    "feedback": { "correct": "Yes, doctor helps sick.", "incorrect": "Not this one, try again." }
  },
  {    
    "level": "preSchool",
    "category": "generalKnowledge",
    "description": "Objects",
    "text": "What do we wear on feet?",
    "options": ["Shoes", "Hat", "Gloves"],
    "correct": "Shoes",
    "feedback": { "correct": "Yes, shoes on feet.", "incorrect": "Not this one, try again." }
  },
  {    
    "level": "preSchool",
    "category": "generalKnowledge",
    "description": "Family",
    "text": "Who is your father’s wife?",
    "options": ["Mother", "Sister", "Teacher"],
    "correct": "Mother",
    "feedback": { "correct": "Yes, that’s mother.", "incorrect": "Not this one, try again." }
  },
  {    
    "level": "preSchool",
    "category": "generalKnowledge",
    "description": "Objects",
    "text": "What do we drink with?",
    "options": ["Cup", "Plate", "Shoe"],
    "correct": "Cup",
    "feedback": { "correct": "Yes, cup for drinking.", "incorrect": "Not this one, try again." }
  },
  {    
    "level": "preSchool",
    "category": "generalKnowledge",
    "description": "Community Helpers",
    "text": "Who grows food in the farm?",
    "options": ["Farmer", "Teacher", "Nurse"],
    "correct": "Farmer",
    "feedback": { "correct": "Yes, farmer grows food.", "incorrect": "Not this one, try again." }
  },
  {    
    "level": "preSchool",
    "category": "generalKnowledge",
    "description": "Objects",
    "text": "What do we use to brush teeth?",
    "options": ["Toothbrush", "Spoon", "Stick"],
    "correct": "Toothbrush",
    "feedback": { "correct": "Yes, we brush with toothbrush.", "incorrect": "Not this one, try again." }
  },
  {
    "level": "preSchool",
    "category": "religion",
    "description": "Faith basics",
    "text": "Who is our God?",
    "options": ["Allah", "Tree", "Sun"],
    "correct": "Allah",
    "feedback": { "correct": "Yes, Allah is our God.", "incorrect": "Not this one, try again." }
  },
  {
    "level": "preSchool",
    "category": "religion",
    "description": "Prophet",
    "text": "Who is our Prophet?",
    "options": ["Muhammad ﷺ", "Moses", "Jesus"],
    "correct": "Muhammad ﷺ",
    "feedback": { "correct": "Yes, Prophet Muhammad ﷺ.", "incorrect": "Not this one, try again." }
  },
  {
    "level": "preSchool",
    "category": "religion",
    "description": "Holy book",
    "text": "What is our holy book?",
    "options": ["Qur'an", "Bible", "Torah"],
    "correct": "Qur'an",
    "feedback": { "correct": "Yes, the Qur'an.", "incorrect": "Not this one, try again." }
  },
  {
    "level": "preSchool",
    "category": "religion",
    "description": "Values",
    "text": "Is it good to say Bismillah?",
    "options": ["Yes", "No"],
    "correct": "Yes",
    "feedback": { "correct": "Yes, we say Bismillah before things.", "incorrect": "Not this one, try again." }
  },
  {
    "level": "preSchool",
    "category": "religion",
    "description": "Values",
    "text": "Should we say Alhamdulillah after eating?",
    "options": ["Yes", "No"],
    "correct": "Yes",
    "feedback": { "correct": "Yes, we thank Allah with Alhamdulillah.", "incorrect": "Not this one, try again." }
  },
  {
    "level": "preSchool",
    "category": "religion",
    "description": "Faith basics",
    "text": "Who made the world?",
    "options": ["Allah", "Man", "Animals"],
    "correct": "Allah",
    "feedback": { "correct": "Yes, Allah made the world.", "incorrect": "Not this one, try again." }
  },
  {
    "level": "preSchool",
    "category": "religion",
    "description": "Practice",
    "text": "How many times do Muslims pray in a day?",
    "options": ["Five", "One", "Ten"],
    "correct": "Five",
    "feedback": { "correct": "Yes, Muslims pray 5 times.", "incorrect": "Not this one, try again." }
  },
  {
    "level": "preSchool",
    "category": "religion",
    "description": "Values",
    "text": "Is being kind good?",
    "options": ["Yes", "No"],
    "correct": "Yes",
    "feedback": { "correct": "Yes, Islam teaches kindness.", "incorrect": "Not this one, try again." }
  },
  {
    "level": "preSchool",
    "category": "religion",
    "description": "Faith basics",
    "text": "Who do we ask when we need help?",
    "options": ["Allah", "Dog", "Toy"],
    "correct": "Allah",
    "feedback": { "correct": "Yes, we ask Allah for help.", "incorrect": "Not this one, try again." }
  },
  {
    "level": "preSchool",
    "category": "religion",
    "description": "Practice",
    "text": "In which month do Muslims fast?",
    "options": ["Ramadan", "January", "Friday"],
    "correct": "Ramadan",
    "feedback": { "correct": "Yes, we fast in Ramadan.", "incorrect": "Not this one, try again." }
  }
];

export const preSchoolQuestionsData = preschoolQuestions
      .map((q, i) => ({
            ...q,
            _id: `${i + 1}`,
            level: 'preSchool' as Question['level'],
            category: q.category as Question['category'],
          }))