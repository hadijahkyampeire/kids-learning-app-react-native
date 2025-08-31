import { type Question } from "../../types";

export const preSchoolQuestionsData: Question[] = [
  {
    _id: "1",
    level: "preSchool",
    subject: "english",
    class: "baby",
    topic: "Alphabet",
    text: "Which letter is for Apple?",
    options: ["B", "A",  "C"],
    correct: "A",
    feedback: { correct: "Great! A is for Apple.", incorrect: "Try again — look for A." }
  },
  {
    _id: "2",
    level: "preSchool",
    subject: "english",
    class: "baby",
    topic: "Alphabet",
    text: "Which letter comes after A?",
    options: [ "D", "C", "B"],
    correct: "B",
    feedback: { correct: "Yes, A is followed by B.", incorrect: "Not quite, think ABC song." }
  },
  {
    _id: "3",
    level: "preSchool",
    subject: "english",
    class: "middle",
    topic: "Make a Word",
    text: "Rearrange to make a word: tac",
    options: ["act", "cat", "tac"],
    correct: "cat",
    feedback: { correct: "Yes! It's cat.", incorrect: "Try again — it’s an animal that meows." }
  },
  {
    _id: "4",
    level: "preSchool",
    subject: "english",
    class: "middle",
    topic: "Rhymes",
    text: "Which word rhymes with 'bat'?",
    options: ["cat", "dog", "sun"],
    correct: "cat",
    feedback: { correct: "Correct! Bat rhymes with cat.", incorrect: "Try again, listen to the ending sound." }
  },
  {
    _id: "5",
    level: "preSchool",
    subject: "english",
    class: "baby",
    topic: "Sight Words",
    text: "Which word is 'dog'?",
    options: ["dog", "cat", "boy"],
    correct: "dog",
    feedback: { correct: "Yes, that’s dog!", incorrect: "Not this one — look for d-o-g." }
  },
  {
    _id: "6",
    level: "preSchool",
    subject: "english",
    class: "baby",
    topic: "Alphabet",
    text: "Which letter is missing? A, B, __, D",
    options: ["C", "E", "F"],
    correct: "C",
    feedback: { correct: "Yes! C comes after B.", incorrect: "Not quite — sing the ABC song." }
  },
  {
    _id: "7",
    level: "preSchool",
    subject: "english",
    class: "middle",
    topic: "Opposites",
    text: "What is the opposite of big?",
    options: ["small", "tall", "long"],
    correct: "small",
    feedback: { correct: "Great! Big is the opposite of small.", incorrect: "Not this one — try again." }
  },
  {
    _id: "8",
    level: "preSchool",
    subject: "english",
    class: "middle",
    topic: "Sounds",
    text: "Which word starts with B?",
    options: ["Ball", "Apple", "Cat"],
    correct: "Ball",
    feedback: { correct: "Correct! Ball starts with B.", incorrect: "Nope — think b-b-ball." }
  },
  {
    _id: "9",
    level: "preSchool",
    subject: "english",
    class: "baby",
    topic: "Sounds",
    text: "Which sound does S make?",
    options: ["sss", "mmm", "aaa"],
    correct: "sss",
    feedback: { correct: "Yes, S makes sss sound.", incorrect: "Not this one — think of snake." }
  },
  {
    _id: "10",
    level: "preSchool",
    subject: "english",
    class: "top",
    topic: "Word Building",
    text: "What word is made from d + o + g?",
    options: ["dog", "dig", "dot"],
    correct: "dog",
    feedback: { correct: "Yes! d-o-g spells dog.", incorrect: "Try again — it barks." }
  },

  // ---------------- MATH ----------------
  {
    _id: "11",
    level: "preSchool",
    subject: "math",
    class: "baby",
    topic: "Counting 0–5",
    text: "How many apples? 🍎🍎🍎",
    options: ["2", "3", "4"],
    correct: "3",
    feedback: { correct: "Yes, 3 apples!", incorrect: "Count again slowly." }
  },
  {
    _id: "12",
    level: "preSchool",
    subject: "math",
    class: "baby",
    topic: "Number 0–5",
    text: "Which number is 5?",
    options: ["3", "5", "8"],
    correct: "5",
    feedback: { correct: "Great! That is 5.", incorrect: "Not this one, look carefully." }
  },
  {
    _id: "13",
    level: "preSchool",
    subject: "math",
    class: "baby",
    topic: "Shapes Basic",
    text: "Which one is a circle?",
    options: ["🔺", "⚫", "⬜"],
    correct: "⚫",
    feedback: { correct: "Yes, round like a ball.", incorrect: "Try again — circle is round." }
  },
  {
    _id: "14",
    level: "preSchool",
    subject: "math",
    class: "baby",
    topic: "Counting 0–5",
    text: "Count the ducks 🦆🦆",
    options: ["1", "2", "3"],
    correct: "2",
    feedback: { correct: "Yes, 2 ducks!", incorrect: "Count again, quack quack!" }
  },
  {
    _id: "15",
    level: "preSchool",
    subject: "generalKnowledge",
    class: "baby",
    topic: "Colors",
    text: "What color is the sky?",
    options: ["Blue", "Red", "Green"],
    correct: "Blue",
    feedback: { correct: "Yes, sky is blue!", incorrect: "Not this one, think daytime sky." }
  },
  {
    _id: "16",
    level: "preSchool",
    subject: "math",
    class: "middle",
    topic: "Comparisons",
    text: "Which is big?",
    options: ["🐘", "🐭"],
    correct: "🐘",
    feedback: { correct: "Yes, elephant is big!", incorrect: "Try again — look for big one." }
  },
  {
    _id: "17",
    level: "preSchool",
    subject: "math",
    class: "baby",
    topic: "Counting 0–5",
    text: "How many stars? ⭐⭐",
    options: ["1", "2", "4"],
    correct: "2",
    feedback: { correct: "Yes, 2 stars!", incorrect: "Count again slowly." }
  },
  {
    _id: "18",
    level: "preSchool",
    subject: "math",
    class: "baby",
    topic: "Shapes Basic",
    text: "Which one is a square?",
    options: ["⬜", "⚫", "🔺"],
    correct: "⬜",
    feedback: { correct: "Yes, square has 4 sides.", incorrect: "Try again — square has corners." }
  },
  {
    _id: "19",
    level: "preSchool",
    subject: "math",
    class: "baby",
    topic: "Counting 0–5",
    text: "How many bananas? 🍌🍌🍌🍌",
    options: ["3", "4", "5"],
    correct: "4",
    feedback: { correct: "Yes, 4 bananas!", incorrect: "Count them again." }
  },
  {
    _id: "20",
    level: "preSchool",
    subject: "math",
    class: "baby",
    topic: "Colors",
    text: "What color is grass?",
    options: ["Yellow", "Green", "Blue"],
    correct: "Green",
    feedback: { correct: "Yes, grass is green!", incorrect: "Not this one, try again." }
  },

  // ---------------- SCIENCE ----------------
  {
    _id: "21",
    level: "preSchool",
    subject: "science",
    class: "baby",
    topic: "Animals",
    text: "Which animal says 'moo'?",
    options: ["Dog", "Cow", "Cat"],
    correct: "Cow",
    feedback: { correct: "Yes, cow says moo!", incorrect: "Not this one, try again." }
  },
  {
    _id: "22",
    level: "preSchool",
    subject: "science",
    class: "baby",
    topic: "Weather",
    text: "What do we see on a rainy day?",
    options: ["Rain", "Sun", "Stars"],
    correct: "Rain",
    feedback: { correct: "Yes, it rains!", incorrect: "No, think of water falling." }
  },
  {
    _id: "23",
    level: "preSchool",
    subject: "science",
    class: "baby",
    topic: "Senses",
    text: "What do we use to see?",
    options: ["Eyes", "Ears", "Nose"],
    correct: "Eyes",
    feedback: { correct: "Yes, we see with eyes!", incorrect: "No, try again." }
  },
  {
    _id: "24",
    level: "preSchool",
    subject: "science",
    class: "middle",
    topic: "Earth & Sky",
    text: "What do we see at night?",
    options: ["Stars", "Sun", "Clouds"],
    correct: "Stars",
    feedback: { correct: "Yes, stars at night.", incorrect: "Not this one, think night sky." }
  },
  {
    _id: "25",
    level: "preSchool",
    subject: "science",
    class: "baby",
    topic: "Animals",
    text: "Which one can fly?",
    options: ["Bird", "Fish", "Dog"],
    correct: "Bird",
    feedback: { correct: "Yes, birds can fly.", incorrect: "No, try again." }
  },
  {
    _id: "26",
    level: "preSchool",
    subject: "science",
    class: "baby",
    topic: "Body Parts",
    text: "What do we use to smell?",
    options: ["Nose", "Eyes", "Hands"],
    correct: "Nose",
    feedback: { correct: "Yes, we smell with nose.", incorrect: "Not this one, try again." }
  },
  {
    _id: "27",
    level: "preSchool",
    subject: "science",
    class: "baby",
    topic: "Weather",
    text: "What shines bright in the day?",
    options: ["Sun", "Moon", "Stars"],
    correct: "Sun",
    feedback: { correct: "Yes, sun shines in the day.", incorrect: "Not this one, try again." }
  },
  {
    _id: "28",
    level: "preSchool",
    subject: "science",
    class: "baby",
    topic: "Animals",
    text: "Which one lives in water?",
    options: ["Fish", "Dog", "Bird"],
    correct: "Fish",
    feedback: { correct: "Yes, fish lives in water.", incorrect: "Not this one, try again." }
  },
  {
    _id: "29",
    level: "preSchool",
    subject: "science",
    class: "baby",
    topic: "Body Parts",
    text: "What do we use to hear?",
    options: ["Ears", "Hands", "Eyes"],
    correct: "Ears",
    feedback: { correct: "Yes, we hear with ears.", incorrect: "Not this one, try again." }
  },
  {
    _id: "30",
    level: "preSchool",
    subject: "science",
    class: "middle",
    topic: "Plants",
    text: "What is green and grows?",
    options: ["Tree", "Rock", "Car"],
    correct: "Tree",
    feedback: { correct: "Yes, tree is green and grows.", incorrect: "Not this one, try again." }
  },

  // ---------------- GENERAL KNOWLEDGE ----------------
  {
    _id: "31",
    level: "preSchool",
    subject: "generalKnowledge",
    class: "baby",
    topic: "Family",
    text: "Who cooks food at home?",
    options: ["Mother", "Dog", "Teacher"],
    correct: "Mother",
    feedback: { correct: "Yes, mother cooks!", incorrect: "Not this one, try again." }
  },
  {
    _id: "32",
    level: "preSchool",
    subject: "generalKnowledge",
    class: "baby",
    topic: "Community Helpers",
    text: "Who teaches in school?",
    options: ["Teacher", "Doctor", "Farmer"],
    correct: "Teacher",
    feedback: { correct: "Yes, teacher teaches.", incorrect: "Not this one, think school." }
  },
  {
    _id: "33",
    level: "preSchool",
    subject: "generalKnowledge",
    class: "baby",
    topic: "Home & Objects",
    text: "What do we use to eat soup?",
    options: ["Spoon", "Fork", "Knife"],
    correct: "Spoon",
    feedback: { correct: "Yes, we use spoon.", incorrect: "Not this one, try again." }
  },
  {
    _id: "34",
    level: "preSchool",
    subject: "generalKnowledge",
    class: "baby",
    topic: "Home & Objects",
    text: "Where do we sleep?",
    options: ["Bed", "Car", "Chair"],
    correct: "Bed",
    feedback: { correct: "Yes, we sleep in bed.", incorrect: "Not this one, try again." }
  },
  {
    _id: "35",
    level: "preSchool",
    subject: "generalKnowledge",
    class: "baby",
    topic: "Community Helpers",
    text: "Who helps sick people?",
    options: ["Doctor", "Farmer", "Driver"],
    correct: "Doctor",
    feedback: { correct: "Yes, doctor helps sick.", incorrect: "Not this one, try again." }
  },
  {
    _id: "36",
    level: "preSchool",
    subject: "generalKnowledge",
    class: "baby",
    topic: "Home & Objects",
    text: "What do we wear on feet?",
    options: ["Shoes", "Hat", "Gloves"],
    correct: "Shoes",
    feedback: { correct: "Yes, shoes on feet.", incorrect: "Not this one, try again." }
  },
  {
    _id: "37",
    level: "preSchool",
    subject: "generalKnowledge",
    class: "baby",
    topic: "Family",
    text: "Who is your father’s wife?",
    options: ["Mother", "Sister", "Teacher"],
    correct: "Mother",
    feedback: { correct: "Yes, that’s mother.", incorrect: "Not this one, try again." }
  },
  {
    _id: "38",
    level: "preSchool",
    subject: "generalKnowledge",
    class: "baby",
    topic: "Home & Objects",
    text: "What do we drink with?",
    options: ["Cup", "Plate", "Shoe"],
    correct: "Cup",
    feedback: { correct: "Yes, cup for drinking.", incorrect: "Not this one, try again." }
  },
  {
    _id: "39",
    level: "preSchool",
    subject: "generalKnowledge",
    class: "baby",
    topic: "Community Helpers",
    text: "Who grows food in the farm?",
    options: ["Farmer", "Teacher", "Nurse"],
    correct: "Farmer",
    feedback: { correct: "Yes, farmer grows food.", incorrect: "Not this one, try again." }
  },
  {
    _id: "40",
    level: "preSchool",
    subject: "generalKnowledge",
    class: "baby",
    topic: "Home & Objects",
    text: "What do we use to brush teeth?",
    options: ["Toothbrush", "Spoon", "Stick"],
    correct: "Toothbrush",
    feedback: { correct: "Yes, we brush with toothbrush.", incorrect: "Not this one, try again." }
  },

  // ---------------- RELIGION ----------------
  {
    _id: "41",
    level: "preSchool",
    subject: "religion",
    class: "baby",
    topic: "Beliefs",
    text: "Who is our God?",
    options: ["Allah", "Tree", "Sun"],
    correct: "Allah",
    feedback: { correct: "Yes, Allah is our God.", incorrect: "Not this one, try again." }
  },
  {
    _id: "42",
    level: "preSchool",
    subject: "religion",
    class: "baby",
    topic: "Prophets",
    text: "Who is our Prophet?",
    options: ["Muhammad ﷺ", "Moses", "Jesus"],
    correct: "Muhammad ﷺ",
    feedback: { correct: "Yes, Prophet Muhammad ﷺ.", incorrect: "Not this one, try again." }
  },
  {
    _id: "43",
    level: "preSchool",
    subject: "religion",
    class: "baby",
    topic: "Holy Book",
    text: "What is our holy book?",
    options: ["Qur'an", "Bible", "Torah"],
    correct: "Qur'an",
    feedback: { correct: "Yes, the Qur'an.", incorrect: "Not this one, try again." }
  },
  {
    _id: "44",
    level: "preSchool",
    subject: "religion",
    class: "baby",
    topic: "Values",
    text: "Is it good to say Bismillah?",
    options: ["Yes", "No"],
    correct: "Yes",
    feedback: { correct: "Yes, we say Bismillah before things.", incorrect: "Not this one, try again." }
  },
  {
    _id: "45",
    level: "preSchool",
    subject: "religion",
    class: "baby",
    topic: "Values",
    text: "Should we say Alhamdulillah after eating?",
    options: ["Yes", "No"],
    correct: "Yes",
    feedback: { correct: "Yes, we thank Allah with Alhamdulillah.", incorrect: "Not this one, try again." }
  },
  {
    _id: "46",
    level: "preSchool",
    subject: "religion",
    class: "baby",
    topic: "Beliefs",
    text: "Who made the world?",
    options: ["Allah", "Man", "Animals"],
    correct: "Allah",
    feedback: { correct: "Yes, Allah made the world.", incorrect: "Not this one, try again." }
  },
  {
    _id: "47",
    level: "preSchool",
    subject: "religion",
    class: "middle",
    topic: "Worship",
    text: "How many times do Muslims pray in a day?",
    options: ["Five", "One", "Ten"],
    correct: "Five",
    feedback: { correct: "Yes, Muslims pray 5 times.", incorrect: "Not this one, try again." }
  },
  {
    _id: "48",
    level: "preSchool",
    subject: "religion",
    class: "baby",
    topic: "Values",
    text: "Is being kind good?",
    options: ["Yes", "No"],
    correct: "Yes",
    feedback: { correct: "Yes, Islam teaches kindness.", incorrect: "Not this one, try again." }
  },
  {
    _id: "49",
    level: "preSchool",
    subject: "religion",
    class: "baby",
    topic: "Beliefs",
    text: "Who do we ask when we need help?",
    options: ["Allah", "Dog", "Toy"],
    correct: "Allah",
    feedback: { correct: "Yes, we ask Allah for help.", incorrect: "Not this one, try again." }
  },
  {
    _id: "50",
    level: "preSchool",
    subject: "religion",
    class: "middle",
    topic: "Festivals",
    text: "In which month do Muslims fast?",
    options: ["Ramadan", "January", "Friday"],
    correct: "Ramadan",
    feedback: { correct: "Yes, we fast in Ramadan.", incorrect: "Not this one, try again." }
  },

  // =================================================================
  // ================== NEW QUESTIONS (51–100) =======================
  // =================================================================

  // ENGLISH — baby
  {
    _id: "51",
    level: "preSchool",
    subject: "english",
    class: "baby",
    topic: "Alphabet",
    text: "Which letter is for Ball?",
    options: ["B", "D", "P"],
    correct: "B",
    feedback: { correct: "Yes! B is for Ball.", incorrect: "Look for the letter B." }
  },
  {
    _id: "52",
    level: "preSchool",
    subject: "english",
    class: "baby",
    topic: "Sounds",
    text: "Which sound starts the word 'moon'?",
    options: ["m", "s", "b"],
    correct: "m",
    feedback: { correct: "Great! m-m-moon starts with m.", incorrect: "Say the word slowly." }
  },
  {
    _id: "53",
    level: "preSchool",
    subject: "english",
    class: "baby",
    topic: "Sight Words",
    text: "Find the word 'the'.",
    options: ["the", "and", "but"],
    correct: "the",
    feedback: { correct: "Nice! You found 'the'.", incorrect: "Look for t-h-e." }
  },
  {
    _id: "54",
    level: "preSchool",
    subject: "english",
    class: "baby",
    topic: "Rhymes",
    text: "Which word rhymes with 'pen'?",
    options: ["hen", "cup", "book"],
    correct: "hen",
    feedback: { correct: "Yes! Pen and hen rhyme.", incorrect: "Listen to the ending sound." }
  },
  {
    _id: "55",
    level: "preSchool",
    subject: "english",
    class: "baby",
    topic: "Opposites",
    text: "What is the opposite of 'up'?",
    options: ["down", "left", "near"],
    correct: "down",
    feedback: { correct: "Correct! Up and down are opposites.", incorrect: "Think about directions." }
  },
  {
    _id: "56",
    level: "preSchool",
    subject: "english",
    class: "baby",
    topic: "Make a Word",
    text: "Make a word: a + t = ?",
    options: ["at", "ta", "aa"],
    correct: "at",
    feedback: { correct: "Yes! a + t = at.", incorrect: "Put a first, then t." }
  },

  // ENGLISH — middle
  {
    _id: "57",
    level: "preSchool",
    subject: "english",
    class: "middle",
    topic: "Syllables",
    text: "How many parts do you hear in 'sunset'?",
    options: ["1", "2", "3"],
    correct: "2",
    feedback: { correct: "Yes! sun-set has 2 parts.", incorrect: "Clap the beats: sun | set." }
  },
  {
    _id: "58",
    level: "preSchool",
    subject: "english",
    class: "middle",
    topic: "Sounds",
    text: "Which word starts with 't'?",
    options: ["top", "sun", "map"],
    correct: "top",
    feedback: { correct: "Right! t-t-top starts with t.", incorrect: "Say the first sound aloud." }
  },
  {
    _id: "59",
    level: "preSchool",
    subject: "english",
    class: "middle",
    topic: "Sight Words",
    text: "Find the word 'and'.",
    options: ["the", "and", "can"],
    correct: "and",
    feedback: { correct: "Great! That says 'and'.", incorrect: "Look for a-n-d." }
  },
  {
    _id: "60",
    level: "preSchool",
    subject: "english",
    class: "middle",
    topic: "Rhymes",
    text: "Which word rhymes with 'tree'?",
    options: ["bee", "book", "cat"],
    correct: "bee",
    feedback: { correct: "Yes! tree and bee rhyme.", incorrect: "Listen to the end: -ee." }
  },
  {
    _id: "61",
    level: "preSchool",
    subject: "english",
    class: "middle",
    topic: "Opposites",
    text: "What is the opposite of 'open'?",
    options: ["close", "big", "up"],
    correct: "close",
    feedback: { correct: "Correct! Open and close.", incorrect: "Think about doors." }
  },
  {
    _id: "62",
    level: "preSchool",
    subject: "english",
    class: "middle",
    topic: "Make a Word",
    text: "Make a word: p + e + n = ?",
    options: ["pen", "nep", "pe"],
    correct: "pen",
    feedback: { correct: "Yes! p-e-n spells pen.", incorrect: "Put letters in the right order." }
  },

  // ENGLISH — top
  {
    _id: "63",
    level: "preSchool",
    subject: "english",
    class: "top",
    topic: "Comprehension",
    text: "Ali sees a cat. It is black. What color is the cat?",
    options: ["black", "white", "brown"],
    correct: "black",
    feedback: { correct: "Good reading!", incorrect: "Read the sentence again." }
  },
  {
    _id: "64",
    level: "preSchool",
    subject: "english",
    class: "top",
    topic: "Sentences",
    text: "Choose the full sentence.",
    options: ["went to park", "We play.", "ball"],
    correct: "We play.",
    feedback: { correct: "Nice sentence!", incorrect: "Needs a subject and a verb." }
  },
  {
    _id: "65",
    level: "preSchool",
    subject: "english",
    class: "top",
    topic: "Sight Words",
    text: "Find the word 'you'.",
    options: ["your", "you", "yes"],
    correct: "you",
    feedback: { correct: "Great! That says 'you'.", incorrect: "Look for y-o-u." }
  },
  {
    _id: "66",
    level: "preSchool",
    subject: "english",
    class: "top",
    topic: "Word Building",
    text: "Make the word: s + u + n = ?",
    options: ["sun", "nus", "uns"],
    correct: "sun",
    feedback: { correct: "Yes! s-u-n spells sun.", incorrect: "Put letters in order." }
  },
  {
    _id: "67",
    level: "preSchool",
    subject: "english",
    class: "top",
    topic: "Rhymes",
    text: "Which word rhymes with 'cake'?",
    options: ["lake", "cup", "dog"],
    correct: "lake",
    feedback: { correct: "Good rhyme!", incorrect: "Listen to the -ake sound." }
  },
  {
    _id: "68",
    level: "preSchool",
    subject: "english",
    class: "top",
    topic: "Fill in the Blank",
    text: "__ am happy.",
    options: ["I", "Me", "We"],
    correct: "I",
    feedback: { correct: "Yes! 'I am happy.'", incorrect: "Use 'I' with am." }
  },

  // MATH — baby
  {
    _id: "69",
    level: "preSchool",
    subject: "math",
    class: "baby",
    topic: "Counting 0–5",
    text: "How many balls? ⚽️⚽️⚽️⚽️",
    options: ["3", "4", "5"],
    correct: "4",
    feedback: { correct: "Yes! Four balls.", incorrect: "Count carefully." }
  },
  {
    _id: "70",
    level: "preSchool",
    subject: "math",
    class: "baby",
    topic: "Number 0–5",
    text: "Which is the number 2?",
    options: ["2", "5", "0"],
    correct: "2",
    feedback: { correct: "Right! That is 2.", incorrect: "Look for the shape of '2'." }
  },
  {
    _id: "71",
    level: "preSchool",
    subject: "math",
    class: "baby",
    topic: "Shapes Basic",
    text: "Which one is a triangle?",
    options: ["🔺", "⚫", "⬜"],
    correct: "🔺",
    feedback: { correct: "Yes! Triangle has 3 sides.", incorrect: "Look for three corners." }
  },
  {
    _id: "72",
    level: "preSchool",
    subject: "math",
    class: "baby",
    topic: "Colors",
    text: "What color is a banana?",
    options: ["Yellow", "Blue", "Red"],
    correct: "Yellow",
    feedback: { correct: "Correct! Bananas are yellow.", incorrect: "Think of ripe bananas." }
  },
  {
    _id: "73",
    level: "preSchool",
    subject: "math",
    class: "baby",
    topic: "Comparisons",
    text: "Which is small?",
    options: ["🐘", "🐭"],
    correct: "🐭",
    feedback: { correct: "Yes! The mouse is small.", incorrect: "Choose the smaller one." }
  },
  {
    _id: "74",
    level: "preSchool",
    subject: "math",
    class: "baby",
    topic: "Patterns AB",
    text: "What comes next? 🔵🔴🔵🔴 __",
    options: ["🔵", "🔴", "🟢"],
    correct: "🔵",
    feedback: { correct: "AB pattern repeats.", incorrect: "Blue, red, blue, red, ...?" }
  },

  // MATH — middle
  {
    _id: "75",
    level: "preSchool",
    subject: "math",
    class: "middle",
    topic: "Counting 0–10",
    text: "How many stars? ⭐⭐⭐⭐⭐",
    options: ["5", "6", "7"],
    correct: "5",
    feedback: { correct: "Yes! Five stars.", incorrect: "Count each star." }
  },
  {
    _id: "76",
    level: "preSchool",
    subject: "math",
    class: "middle",
    topic: "Number 0–10",
    text: "Which number is 9?",
    options: ["6", "9", "10"],
    correct: "9",
    feedback: { correct: "Right! That is 9.", incorrect: "Look carefully at the digits." }
  },
  {
    _id: "77",
    level: "preSchool",
    subject: "math",
    class: "middle",
    topic: "Shapes 2D",
    text: "A shape with 4 equal sides is a…",
    options: ["square", "circle", "triangle"],
    correct: "square",
    feedback: { correct: "Yes! A square.", incorrect: "Circle has no sides; triangle has 3." }
  },
  {
    _id: "78",
    level: "preSchool",
    subject: "math",
    class: "middle",
    topic: "Comparisons",
    text: "Which number is greater?",
    options: ["7", "5", "3"],
    correct: "7",
    feedback: { correct: "Correct! 7 is greater.", incorrect: "Pick the biggest number." }
  },
  {
    _id: "79",
    level: "preSchool",
    subject: "math",
    class: "middle",
    topic: "Position",
    text: "Which word means 'below'?",
    options: ["under", "over", "behind"],
    correct: "under",
    feedback: { correct: "Yes! Under means below.", incorrect: "Try again—under is the opposite of over." }
  },
  {
    _id: "80",
    level: "preSchool",
    subject: "math",
    class: "middle",
    topic: "Patterns AAB",
    text: "What comes next? 🐱🐱🐶🐱🐱🐶 __",
    options: ["🐱", "🐶", "🐭"],
    correct: "🐱",
    feedback: { correct: "Pattern is AAB repeating.", incorrect: "Two cats, one dog, repeat." }
  },

  // MATH — top
  {
    _id: "81",
    level: "preSchool",
    subject: "math",
    class: "top",
    topic: "Counting 0–20",
    text: "What number comes after 19?",
    options: ["18", "20", "21"],
    correct: "20",
    feedback: { correct: "Yes! After 19 is 20.", incorrect: "Count forward: 18, 19, 20..." }
  },
  {
    _id: "82",
    level: "preSchool",
    subject: "math",
    class: "top",
    topic: "Add within 5",
    text: "2 + 3 = ?",
    options: ["4", "5", "6"],
    correct: "5",
    feedback: { correct: "Great adding!", incorrect: "Use your fingers to help." }
  },
  {
    _id: "83",
    level: "preSchool",
    subject: "math",
    class: "top",
    topic: "Sub within 5",
    text: "5 − 2 = ?",
    options: ["3", "2", "4"],
    correct: "3",
    feedback: { correct: "Yes! 3 left.", incorrect: "Count back from 5." }
  },
  {
    _id: "84",
    level: "preSchool",
    subject: "math",
    class: "top",
    topic: "Shapes & Position",
    text: "Which shape is round?",
    options: ["circle", "square", "triangle"],
    correct: "circle",
    feedback: { correct: "Right! Circles are round.", incorrect: "Try again." }
  },
  {
    _id: "85",
    level: "preSchool",
    subject: "math",
    class: "top",
    topic: "Measurement",
    text: "Which is heavier?",
    options: ["rock", "feather", "leaf"],
    correct: "rock",
    feedback: { correct: "Yes! Rocks are heavy.", incorrect: "Think about weight." }
  },
  {
    _id: "86",
    level: "preSchool",
    subject: "math",
    class: "top",
    topic: "Patterns & Sorting",
    text: "Which does NOT belong? 🐶 🐱 🐟 🚗",
    options: ["🚗", "🐶", "🐱"],
    correct: "🚗",
    feedback: { correct: "Correct! 🚗 is not an animal.", incorrect: "Pick the odd one out." }
  },

  // SCIENCE — baby
  {
    _id: "87",
    level: "preSchool",
    subject: "science",
    class: "baby",
    topic: "Senses",
    text: "We taste with our…",
    options: ["tongue", "eyes", "ears"],
    correct: "tongue",
    feedback: { correct: "Yes! Tongue tastes.", incorrect: "Try again." }
  },
  {
    _id: "88",
    level: "preSchool",
    subject: "science",
    class: "baby",
    topic: "Animals",
    text: "Which animal says 'meow'?",
    options: ["cat", "cow", "duck"],
    correct: "cat",
    feedback: { correct: "Yes! Cats say meow.", incorrect: "Listen to the sounds." }
  },
  {
    _id: "89",
    level: "preSchool",
    subject: "science",
    class: "baby",
    topic: "Weather",
    text: "What do we use in the rain?",
    options: ["umbrella", "sunglasses", "fan"],
    correct: "umbrella",
    feedback: { correct: "Good choice!", incorrect: "Keeps us dry." }
  },
  {
    _id: "90",
    level: "preSchool",
    subject: "science",
    class: "baby",
    topic: "Body Parts",
    text: "We see with our…",
    options: ["eyes", "nose", "hands"],
    correct: "eyes",
    feedback: { correct: "Yes! Eyes see.", incorrect: "Try again." }
  },

  // SCIENCE — middle
  {
    _id: "91",
    level: "preSchool",
    subject: "science",
    class: "middle",
    topic: "Animals & Homes",
    text: "A bee lives in a…",
    options: ["hive", "nest", "burrow"],
    correct: "hive",
    feedback: { correct: "Yes! Bees live in hives.", incorrect: "Try again." }
  },
  {
    _id: "92",
    level: "preSchool",
    subject: "science",
    class: "middle",
    topic: "Weather & Clothing",
    text: "On a cold day, wear a…",
    options: ["coat", "shorts", "vest"],
    correct: "coat",
    feedback: { correct: "Good choice!", incorrect: "Pick warm clothing." }
  },
  {
    _id: "93",
    level: "preSchool",
    subject: "science",
    class: "middle",
    topic: "Body Care",
    text: "We brush our teeth…",
    options: ["daily", "once a month", "never"],
    correct: "daily",
    feedback: { correct: "Yes! Every day.", incorrect: "Healthy teeth need brushing." }
  },
  {
    _id: "94",
    level: "preSchool",
    subject: "science",
    class: "middle",
    topic: "Plants & Growth",
    text: "Plants need ______ to grow.",
    options: ["sunlight", "candies", "toys"],
    correct: "sunlight",
    feedback: { correct: "Correct!", incorrect: "Plants need sun, water, and soil." }
  },

  // SCIENCE — top
  {
    _id: "95",
    level: "preSchool",
    subject: "science",
    class: "top",
    topic: "Habitats",
    text: "Fish live in…",
    options: ["water", "trees", "caves"],
    correct: "water",
    feedback: { correct: "Yes! Fish live in water.", incorrect: "Try again." }
  },
  {
    _id: "96",
    level: "preSchool",
    subject: "science",
    class: "top",
    topic: "Health & Hygiene",
    text: "We wash hands before…",
    options: ["eating", "playing in mud", "sleeping only"],
    correct: "eating",
    feedback: { correct: "Good habit!", incorrect: "Keeps germs away." }
  },
  {
    _id: "97",
    level: "preSchool",
    subject: "science",
    class: "top",
    topic: "Weather & Seasons",
    text: "What falls from clouds?",
    options: ["rain", "sand", "leaves"],
    correct: "rain",
    feedback: { correct: "Yes! Rain falls from clouds.", incorrect: "Try again." }
  },
  {
    _id: "98",
    level: "preSchool",
    subject: "science",
    class: "top",
    topic: "Environment",
    text: "Throw trash in a…",
    options: ["bin", "river", "road"],
    correct: "bin",
    feedback: { correct: "Correct! Use a bin.", incorrect: "Keep the environment clean." }
  },

  // GENERAL KNOWLEDGE — baby/top
  {
    _id: "99",
    level: "preSchool",
    subject: "generalKnowledge",
    class: "baby",
    topic: "Family",
    text: "Who is your mother's mother?",
    options: ["grandmother", "aunt", "sister"],
    correct: "grandmother",
    feedback: { correct: "Yes! That's grandmother.", incorrect: "Try again." }
  },
  {
    _id: "100",
    level: "preSchool",
    subject: "generalKnowledge",
    class: "baby",
    topic: "Food & Nutrition",
    text: "Which is a healthy snack?",
    options: ["fruit", "candy", "soda"],
    correct: "fruit",
    feedback: { correct: "Great choice!", incorrect: "Pick foods that help you grow." }
  },
  {
    _id: "101",
    level: "preSchool",
    subject: "english",
    class: "baby",
    topic: "Sounds",
    text: "Which letter starts 🐟 fish?",
    options: ["F", "T", "R"],
    correct: "F",
    feedback: { correct: "Yes! f-f-fish starts with F.", incorrect: "Say 'fish' slowly: fff..." }
  },
  {
    _id: "102",
    level: "preSchool",
    subject: "english",
    class: "baby",
    topic: "Alphabet",
    text: "Find the letter for 🐒 monkey.",
    options: ["M", "S", "B"],
    correct: "M",
    feedback: { correct: "Great! M for monkey.", incorrect: "Look for the letter M." }
  },
  {
    _id: "103",
    level: "preSchool",
    subject: "math",
    class: "baby",
    topic: "Counting 0–5",
    text: "How many cupcakes? 🧁🧁",
    options: ["1", "2", "3"],
    correct: "2",
    feedback: { correct: "Yes—two cupcakes!", incorrect: "Count each 🧁." }
  },
  {
    _id: "104",
    level: "preSchool",
    subject: "math",
    class: "baby",
    topic: "Shapes Basic",
    text: "Tap the triangle.",
    options: ["🔺", "⚫", "⬜"],
    correct: "🔺",
    feedback: { correct: "Triangle has 3 sides!", incorrect: "Find the one with 3 corners." }
  },
  {
    _id: "105",
    level: "preSchool",
    subject: "science",
    class: "baby",
    topic: "Animals",
    text: "Who says 'quack'? 🐶 🦆 🐱",
    options: ["Duck", "Dog", "Cat"],
    correct: "Duck",
    feedback: { correct: "Yes! Ducks say quack.", incorrect: "Listen again—quack, quack!" }
  },

  // ===================== MIDDLE (5) =====================
  {
    _id: "106",
    level: "preSchool",
    subject: "english",
    class: "middle",
    topic: "Syllables",
    text: "Clap the parts in 🐰 'rabbit'. How many?",
    options: ["1", "2", "3"],
    correct: "2",
    feedback: { correct: "Right—rab | bit = 2.", incorrect: "Clap the beats as you say it." }
  },
  {
    _id: "107",
    level: "preSchool",
    subject: "english",
    class: "middle",
    topic: "Make a Word",
    text: "Make a word: 🐕 d + o + g = ?",
    options: ["dog", "gdo", "odg"],
    correct: "dog",
    feedback: { correct: "Yes! d-o-g spells dog.", incorrect: "Put the letters in order." }
  },
  {
    _id: "108",
    level: "preSchool",
    subject: "math",
    class: "middle",
    topic: "Counting 0–10",
    text: "How many stars? ⭐⭐⭐⭐⭐",
    options: ["5", "6", "7"],
    correct: "5",
    feedback: { correct: "Five stars—well counted!", incorrect: "Try pointing at each star." }
  },
  {
    _id: "109",
    level: "preSchool",
    subject: "math",
    class: "middle",
    topic: "Position",
    text: "The ball is ___ the box. (📦\n⚽)",
    options: ["under", "over", "behind"],
    correct: "under",
    feedback: { correct: "Yes—under the box.", incorrect: "Under means below." }
  },
  {
    _id: "110",
    level: "preSchool",
    subject: "science",
    class: "middle",
    topic: "Weather & Clothing",
    text: "It’s raining ☔. What should we wear?",
    options: ["Rain boots", "Sunglasses", "Sandals"],
    correct: "Rain boots",
    feedback: { correct: "Perfect for wet days!", incorrect: "Choose what keeps feet dry." }
  },

  {
    _id: "111",
    level: "preSchool",
    subject: "english",
    class: "top",
    topic: "Comprehension",
    text: "A frog 🐸 jumps in a pond 💧. Where does it jump?",
    options: ["pond", "tree", "house"],
    correct: "pond",
    feedback: { correct: "Good reading!", incorrect: "Check the picture words again." }
  },
  {
    _id: "112",
    level: "preSchool",
    subject: "english",
    class: "top",
    topic: "Fill in the Blank",
    text: "We ___ a ball. 👧👦⚽",
    options: ["have", "am", "has"],
    correct: "have",
    feedback: { correct: "Yes—'We have'.", incorrect: "Use 'have' with 'We'." }
  },
  {
    _id: "113",
    level: "preSchool",
    subject: "math",
    class: "top",
    topic: "Add within 5",
    text: "🧸🧸 + 🧸 = ?",
    options: ["2", "3", "4"],
    correct: "3",
    feedback: { correct: "Three toys—nice adding!", incorrect: "Count all the 🧸." }
  },
  {
    _id: "114",
    level: "preSchool",
    subject: "math",
    class: "top",
    topic: "Patterns & Sorting",
    text: "What comes next? 🟦🟨🟦🟨 __",
    options: ["🟦", "🟨", "🟥"],
    correct: "🟦",
    feedback: { correct: "AB pattern repeats.", incorrect: "Blue, yellow, blue, yellow, ...?" }
  },
  // ---- Preschool • Middle • General Knowledge --------------------------------
{
  _id: "115",
  level: "preSchool",
  subject: "generalKnowledge",
  class: "middle",
  topic: "Weather & Clothes",
  text: "What do you wear when it’s raining? ☔️",
  options: ["🧥 Raincoat", "🕶️ Sunglasses", "🩱 Swimsuit"],
  correct: "🧥 Raincoat",
  feedback: { correct: "Yes—raincoats keep us dry!", incorrect: "We wear a raincoat in the rain." }
},
{
  _id: "116",
  level: "preSchool",
  subject: "generalKnowledge",
  class: "middle",
  topic: "Transport",
  text: "Which one flies in the sky? ✈️🚗⛵",
  options: ["✈️ Airplane", "🚗 Car", "⛵ Boat"],
  correct: "✈️ Airplane",
  feedback: { correct: "Correct—planes fly!", incorrect: "Look up! Airplanes fly in the sky." }
},
{
  _id: "117",
  level: "preSchool",
  subject: "generalKnowledge",
  class: "middle",
  topic: "Animals & Homes",
  text: "Where does the fish live? 🐟",
  options: ["💧 Water", "🌳 Tree", "🏜️ Desert"],
  correct: "💧 Water",
  feedback: { correct: "Yes—fishes live in water.", incorrect: "Fish live in water." }
},
{
  _id: "118",
  level: "preSchool",
  subject: "generalKnowledge",
  class: "middle",
  topic: "Community Helpers",
  text: "Who works at a hospital? 🏥",
  options: ["👩‍⚕️ Nurse", "👨‍🏫 Teacher", "👨‍🍳 Chef"],
  correct: "👩‍⚕️ Nurse",
  feedback: { correct: "Right—nurses help in hospitals.", incorrect: "A nurse works at a hospital." }
},
{
  _id: "119",
  level: "preSchool",
  subject: "generalKnowledge",
  class: "middle",
  topic: "Safety",
  text: "Before crossing the road, we… 🚦",
  options: ["👀 Look both ways", "🏃‍♂️ Run fast", "🙈 Close eyes"],
  correct: "👀 Look both ways",
  feedback: { correct: "Great! That keeps us safe.", incorrect: "We look both ways before crossing." }
},
{
  _id: "120",
  level: "preSchool",
  subject: "generalKnowledge",
  class: "middle",
  topic: "Food & Health",
  text: "Which is a fruit? 🍎🥕🍞",
  options: ["🍎 Apple", "🥕 Carrot", "🍞 Bread"],
  correct: "🍎 Apple",
  feedback: { correct: "Yes—an apple is a fruit.", incorrect: "Apple is the fruit here." }
},
{
  _id: "121",
  level: "preSchool",
  subject: "generalKnowledge",
  class: "middle",
  topic: "Day & Night",
  text: "What do we see at night? 🌙⭐️",
  options: ["🌙⭐️ Moon & Stars", "☀️ Sun", "🌈 Rainbow"],
  correct: "🌙⭐️ Moon & Stars",
  feedback: { correct: "Correct—night shows moon and stars.", incorrect: "At night we see the moon and stars." }
},
{
  _id: "122",
  level: "preSchool",
  subject: "generalKnowledge",
  class: "middle",
  topic: "Feelings",
  text: "Which face shows happy? 🙂",
  options: ["😊", "😢", "😠"],
  correct: "😊",
  feedback: { correct: "Yay! That’s a happy face.", incorrect: "The smiling face means happy." }
},

// ---- Preschool • Top • General Knowledge -----------------------------------
{
  _id: "123",
  level: "preSchool",
  subject: "generalKnowledge",
  class: "top",
  topic: "Environment",
  text: "Which sign means ‘recycle’? ♻️",
  options: ["♻️", "🛑", "🚫"],
  correct: "♻️",
  feedback: { correct: "Yes—this is the recycle sign.", incorrect: "The green arrows (♻️) mean recycle." }
},
{
  _id: "124",
  level: "preSchool",
  subject: "generalKnowledge",
  class: "top",
  topic: "Everyday Objects",
  text: "Which do we use to tell time? ⏰",
  options: ["⏰ Clock", "🧊 Ice", "🧺 Basket"],
  correct: "⏰ Clock",
  feedback: { correct: "Right—a clock tells time.", incorrect: "We tell time with a clock." }
},
{
  _id: "125",
  level: "preSchool",
  subject: "generalKnowledge",
  class: "top",
  topic: "Light Sources",
  text: "Which gives us light? 💡",
  options: ["🕯️ Candle", "🧸 Teddy", "🍎 Apple"],
  correct: "🕯️ Candle",
  feedback: { correct: "Yes—a candle gives light.", incorrect: "The candle gives light." }
},
{
  _id: "126",
  level: "preSchool",
  subject: "generalKnowledge",
  class: "top",
  topic: "Animals",
  text: "Which animal lays eggs? 🥚",
  options: ["🐔 Chicken", "🐶 Dog", "🐱 Cat"],
  correct: "🐔 Chicken",
  feedback: { correct: "Correct—chickens lay eggs.", incorrect: "A chicken lays eggs." }
},
{
  _id: "127",
  level: "preSchool",
  subject: "generalKnowledge",
  class: "top",
  topic: "Cleanliness",
  text: "Where should trash go? 🗑️",
  options: ["🗑️ Bin", "🌳 Tree", "🛏️ Bed"],
  correct: "🗑️ Bin",
  feedback: { correct: "Yes—trash goes in the bin.", incorrect: "Put trash into the bin." }
},
{
  _id: "128",
  level: "preSchool",
  subject: "generalKnowledge",
  class: "top",
  topic: "Food & Health",
  text: "Which is a healthy drink? 🥤",
  options: ["🥛 Milk", "🥤 Soda", "🍭 Candy"],
  correct: "🥛 Milk",
  feedback: { correct: "Good choice—milk is healthy.", incorrect: "Milk is the healthy drink." }
},
{
  _id: "129",
  level: "preSchool",
  subject: "generalKnowledge",
  class: "top",
  topic: "Shapes",
  text: "Which is round? ⚽️",
  options: ["⚽️ Ball", "📚 Book", "🔺 Triangle"],
  correct: "⚽️ Ball",
  feedback: { correct: "Yes—the ball is round.", incorrect: "The ball is round." }
},
{
  _id: "130",
  level: "preSchool",
  subject: "generalKnowledge",
  class: "top",
  topic: "Transport",
  text: "Which one travels on water? 🌊",
  options: ["⛵ Boat", "🚲 Bicycle", "🚂 Train"],
  correct: "⛵ Boat",
  feedback: { correct: "Right—boats travel on water.", incorrect: "Boats move on water." }
},

// ---- Preschool • Top • Science ---------------------------------------------
{
  _id: "131",
  level: "preSchool",
  subject: "science",
  class: "top",
  topic: "Body & Senses",
  text: "We use our 👂 to ____.",
  options: ["hear", "see", "smell"],
  correct: "hear",
  feedback: { correct: "Yes—ears help us hear.", incorrect: "Ears are for hearing." }
},
{
  _id: "132",
  level: "preSchool",
  subject: "science",
  class: "top",
  topic: "Plants",
  text: "Which part is this? 🌸",
  options: ["Flower", "Root", "Leaf"],
  correct: "Flower",
  feedback: { correct: "Right—that’s the flower.", incorrect: "It’s the flower part." }
},
{
  _id: "133",
  level: "preSchool",
  subject: "science",
  class: "top",
  topic: "Animals",
  text: "Which animal can live in water and on land? 🌊🌿",
  options: ["🐸 Frog", "🐟 Fish", "🦅 Eagle"],
  correct: "🐸 Frog",
  feedback: { correct: "Yes—frogs live in both.", incorrect: "A frog lives in water and on land." }
},
{
  _id: "134",
  level: "preSchool",
  subject: "science",
  class: "top",
  topic: "Sun & Sky",
  text: "What do we see in the day sky? ☀️",
  options: ["☀️ Sun", "🌙 Moon", "⭐️ Stars"],
  correct: "☀️ Sun",
  feedback: { correct: "Correct—the sun shines by day.", incorrect: "We see the sun in the day." }
},
{
  _id: "135",
  level: "preSchool",
  subject: "science",
  class: "top",
  topic: "Materials",
  text: "Which is made of wood? 🪵",
  options: ["🪑 Chair", "🥛 Milk", "🧼 Soap"],
  correct: "🪑 Chair",
  feedback: { correct: "Yes—many chairs are wood.", incorrect: "The chair is made of wood." }
},
{
  _id: "136",
  level: "preSchool",
  subject: "science",
  class: "top",
  topic: "Health & Hygiene",
  text: "We brush our teeth with a ____.",
  options: ["🪥 Toothbrush", "🧹 Broom", "🖊️ Pen"],
  correct: "🪥 Toothbrush",
  feedback: { correct: "Right—use a toothbrush.", incorrect: "We use a toothbrush." }
},
{
  _id: "137",
  level: "preSchool",
  subject: "science",
  class: "top",
  topic: "States of Matter",
  text: "Ice is a ____ form of water. ❄️",
  options: ["solid", "liquid", "gas"],
  correct: "solid",
  feedback: { correct: "Yes—ice is solid water.", incorrect: "Ice is water in solid form." }
},
{
  _id: "138",
  level: "preSchool",
  subject: "science",
  class: "top",
  topic: "Animal Babies",
  text: "A baby cat is called a ____.",
  options: ["kitten", "puppy", "calf"],
  correct: "kitten",
  feedback: { correct: "Yes—baby cats are kittens.", incorrect: "The baby cat is a kitten." }
},
  {
    _id: "139",
    level: "preSchool",
    subject: "science",
    class: "top",
    topic: "Animals & Young",
    text: "A baby cat is a ___.",
    options: ["kitten", "puppy", "calf"],
    correct: "kitten",
    feedback: { correct: "Yes—kitten!", incorrect: "Puppy is a baby dog; calf is a baby cow." }
  }
];
