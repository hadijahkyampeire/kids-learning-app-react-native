import { type Question } from "../../../../types";

export const topClassEnglishQuestions: Question[] = [
  // Reading Comprehension (6 questions)
  {
    _id: "tp-eng-rc-1",
    level: "preSchool",
    subject: "english",
    class: "top",
    topic: "Reading Comprehension",
    text: "Sally saw a beautiful butterfly 🦋 in the garden 🌺. The butterfly was orange and black. What color was NOT on the butterfly?",
    options: ["Blue 🔵", "Orange 🟧", "Black ⬛"],
    correct: "Blue 🔵",
    feedback: { correct: "Yes! The story only mentioned orange and black colors 🦋.", incorrect: "Listen carefully to the colors mentioned in the story 🎨." }
  },
  {
    _id: "tp-eng-rc-2",
    level: "preSchool",
    subject: "english",
    class: "top",
    topic: "Reading Comprehension",
    text: "Tom has three pets: a dog 🐕, a cat 🐱, and a fish 🐠. Which pet can swim?",
    options: ["Fish 🐠", "Dog 🐕", "Cat 🐱"],
    correct: "Fish 🐠",
    feedback: { correct: "Yes! Fish live and swim in water 🌊.", incorrect: "Think about which animal lives in water 💭." }
  },
  {
    _id: "tp-eng-rc-3",
    level: "preSchool",
    subject: "english",
    class: "top",
    topic: "Reading Comprehension",
    text: "The sun ☀️ was shining and birds 🐦 were singing. What time of day was it?",
    options: ["Day ☀️", "Night 🌙", "Evening 🌅"],
    correct: "Day ☀️",
    feedback: { correct: "Yes! The sun shines during the day ☀️.", incorrect: "Think about when we see the sun ⭐." }
  },
  {
    _id: "tp-eng-rc-4",
    level: "preSchool",
    subject: "english",
    class: "top",
    topic: "Reading Comprehension",
    text: "Mary picked three apples 🍎 and gave one to her friend. How many apples does she have now?",
    options: ["Two 2️⃣", "Three 3️⃣", "One 1️⃣"],
    correct: "Two 2️⃣",
    feedback: { correct: "Yes! Three minus one equals two 🍎🍎.", incorrect: "Count how many apples are left after sharing 🤔." }
  },
  {
    _id: "tp-eng-rc-5",
    level: "preSchool",
    subject: "english",
    class: "top",
    topic: "Reading Comprehension",
    text: "The rain ☔ was falling and thunder ⛈️ was loud. How was the weather?",
    options: ["Stormy ⛈️", "Sunny ☀️", "Snowy ❄️"],
    correct: "Stormy ⛈️",
    feedback: { correct: "Yes! Rain and thunder mean stormy weather ⛈️.", incorrect: "Think about what rain and thunder mean 🤔." }
  },
  {
    _id: "tp-eng-rc-6",
    level: "preSchool",
    subject: "english",
    class: "top",
    topic: "Reading Comprehension",
    text: "Ben planted a seed 🌱 and watered it every day 💧. What will happen to the seed?",
    options: ["It will grow 🌿", "It will sleep 😴", "It will swim 🏊"],
    correct: "It will grow 🌿",
    feedback: { correct: "Yes! Seeds grow into plants when watered 🌱.", incorrect: "Think about what happens to plants with water and care 💭." }
  },

  // Vocabulary Building (6 questions)
  {
    _id: "tp-eng-vb-1",
    level: "preSchool",
    subject: "english",
    class: "top",
    topic: "Vocabulary Building",
    text: "Which word means the opposite of 'happy'? 😊",
    options: ["Sad 😢", "Laugh 😄", "Jump 🦘"],
    correct: "Sad 😢",
    feedback: { correct: "Yes! Sad 😢 is the opposite of happy 😊.", incorrect: "Think about how you feel when you're not happy 🤔." }
  },
  {
    _id: "tp-eng-vb-2",
    level: "preSchool",
    subject: "english",
    class: "top",
    topic: "Vocabulary Building",
    text: "Which word means the same as 'big'? 📏",
    options: ["Large 🐘", "Small 🐜", "Tiny 🔍"],
    correct: "Large 🐘",
    feedback: { correct: "Yes! Large and big mean the same thing 🐘.", incorrect: "Think about words that describe something huge 💭." }
  },
  {
    _id: "tp-eng-vb-3",
    level: "preSchool",
    subject: "english",
    class: "top",
    topic: "Vocabulary Building",
    text: "What do we call someone who teaches in school? 📚",
    options: ["Teacher 👩‍🏫", "Doctor 👨‍⚕️", "Chef 👨‍🍳"],
    correct: "Teacher 👩‍🏫",
    feedback: { correct: "Yes! A teacher helps us learn 👩‍🏫.", incorrect: "Think about who helps you learn at school 💡." }
  },
  {
    _id: "tp-eng-vb-4",
    level: "preSchool",
    subject: "english",
    class: "top",
    topic: "Vocabulary Building",
    text: "Which word describes very cold weather? ❄️",
    options: ["Freezing 🥶", "Hot 🥵", "Warm 😌"],
    correct: "Freezing 🥶",
    feedback: { correct: "Yes! Freezing means very cold ❄️.", incorrect: "Think about how you feel in very cold weather 🥶." }
  },
  {
    _id: "tp-eng-vb-5",
    level: "preSchool",
    subject: "english",
    class: "top",
    topic: "Vocabulary Building",
    text: "What do we call a place where we buy food? 🛒",
    options: ["Store 🏪", "Park 🎨", "Beach 🏖️"],
    correct: "Store 🏪",
    feedback: { correct: "Yes! We buy food at a store 🏪.", incorrect: "Think about where your family buys groceries 🛒." }
  },
  {
    _id: "tp-eng-vb-6",
    level: "preSchool",
    subject: "english",
    class: "top",
    topic: "Vocabulary Building",
    text: "Which word means to look at words in a book? 📖",
    options: ["Read 📚", "Sleep 😴", "Dance 💃"],
    correct: "Read 📚",
    feedback: { correct: "Yes! Reading is looking at words in a book 📚.", incorrect: "Think about what you do with books 💭." }
  },

  // Grammar & Sentences (6 questions)
  {
    _id: "tp-eng-gs-1",
    level: "preSchool",
    subject: "english",
    class: "top",
    topic: "Grammar & Sentences",
    text: "Which is the correct way to start a sentence? 📝",
    options: ["Capital letter 'A'", "Small letter 'a'", "Number '1'"],
    correct: "Capital letter 'A'",
    feedback: { correct: "Yes! Sentences start with capital letters 📝.", incorrect: "Remember the big letter rule 💡." }
  },
  {
    _id: "tp-eng-gs-2",
    level: "preSchool",
    subject: "english",
    class: "top",
    topic: "Grammar & Sentences",
    text: "What comes at the end of a question? ❓",
    options: ["Question mark ❓", "Period .", "Happy face 😊"],
    correct: "Question mark ❓",
    feedback: { correct: "Yes! Questions end with a question mark ❓.", incorrect: "Think about what we use when asking something 💭." }
  },
  {
    _id: "tp-eng-gs-3",
    level: "preSchool",
    subject: "english",
    class: "top",
    topic: "Grammar & Sentences",
    text: "Which is the correct word: 'The birds ___ flying'?",
    options: ["are ✅", "is ❌", "am 🤔"],
    correct: "are ✅",
    feedback: { correct: "Yes! We say 'birds are flying' ✅.", incorrect: "Think about multiple birds 🐦🐦." }
  },
  {
    _id: "tp-eng-gs-4",
    level: "preSchool",
    subject: "english",
    class: "top",
    topic: "Grammar & Sentences",
    text: "Which word shows something happening now? 🕐",
    options: ["Running 🏃", "Ran 👣", "Will run 🔜"],
    correct: "Running 🏃",
    feedback: { correct: "Yes! 'Running' shows it's happening now 🏃.", incorrect: "Think about what's happening right now ⌛." }
  },
  {
    _id: "tp-eng-gs-5",
    level: "preSchool",
    subject: "english",
    class: "top",
    topic: "Grammar & Sentences",
    text: "Which word shows more than one? 👥",
    options: ["Cats 🐱🐱", "Cat 🐱", "Kitten 😺"],
    correct: "Cats 🐱🐱",
    feedback: { correct: "Yes! 'Cats' means more than one cat 🐱🐱.", incorrect: "Think about multiple animals 💭." }
  },
  {
    _id: "tp-eng-gs-6",
    level: "preSchool",
    subject: "english",
    class: "top",
    topic: "Grammar & Sentences",
    text: "What do we use to separate words in a sentence? ✍️",
    options: ["Spaces ⬜", "Lines ➖", "Stars ⭐"],
    correct: "Spaces ⬜",
    feedback: { correct: "Yes! We use spaces between words ⬜.", incorrect: "Think about what separates written words 📝." }
  },

  // Listening Skills (6 questions)
  {
    _id: "tp-eng-ls-1",
    level: "preSchool",
    subject: "english",
    class: "top",
    topic: "Listening Skills",
    text: "What sound does a cat make? 🐱",
    options: ["Meow 😺", "Woof 🐕", "Quack 🦆"],
    correct: "Meow 😺",
    feedback: { correct: "Yes! Cats say 'meow' 😺.", incorrect: "Listen to a cat's sound 🐱." }
  },
  {
    _id: "tp-eng-ls-2",
    level: "preSchool",
    subject: "english",
    class: "top",
    topic: "Listening Skills",
    text: "Which word rhymes with 'cat'? 🎵",
    options: ["Hat 🎩", "Dog 🐕", "Fish 🐠"],
    correct: "Hat 🎩",
    feedback: { correct: "Yes! 'Cat' and 'hat' rhyme 🎵.", incorrect: "Listen to the ending sound of 'cat' 👂." }
  },
  {
    _id: "tp-eng-ls-3",
    level: "preSchool",
    subject: "english",
    class: "top",
    topic: "Listening Skills",
    text: "Which word starts with the same sound as 'ball'? ⚽",
    options: ["Book 📚", "Car 🚗", "Door 🚪"],
    correct: "Book 📚",
    feedback: { correct: "Yes! 'Ball' and 'book' start with 'b' 📚.", incorrect: "Listen to the first sound of 'ball' 🎯." }
  },
  {
    _id: "tp-eng-ls-4",
    level: "preSchool",
    subject: "english",
    class: "top",
    topic: "Listening Skills",
    text: "How many syllables are in 'butterfly'? 🦋",
    options: ["Three 3️⃣", "One 1️⃣", "Two 2️⃣"],
    correct: "Three 3️⃣",
    feedback: { correct: "Yes! But-ter-fly has three beats 🦋.", incorrect: "Clap the parts of 'butterfly' 👏." }
  },
  {
    _id: "tp-eng-ls-5",
    level: "preSchool",
    subject: "english",
    class: "top",
    topic: "Listening Skills",
    text: "Which word ends with the same sound as 'red'? 🔴",
    options: ["Bed 🛏️", "Blue 🔵", "Green 🟢"],
    correct: "Bed 🛏️",
    feedback: { correct: "Yes! 'Red' and 'bed' end with 'd' 🎯.", incorrect: "Listen to the ending sound of 'red' 👂." }
  },
  {
    _id: "tp-eng-ls-6",
    level: "preSchool",
    subject: "english",
    class: "top",
    topic: "Listening Skills",
    text: "Which sound is the loudest? 🔊",
    options: ["Thunder ⛈️", "Whisper 🤫", "Butterfly wings 🦋"],
    correct: "Thunder ⛈️",
    feedback: { correct: "Yes! Thunder makes the loudest sound ⛈️.", incorrect: "Think about which sound you can hear from far away 👂." }
  }
];