import { type Question } from "../../../../types";

/** IDs: js-p1-en-<topicCode>-<nnn>
 * topicCode: phon | vocab | gram | sent | comp
 */

const phon: Question[] = [
  {
    _id: "js-p1-en-phon-001",
    level: "juniorSchool",
    subject: "english",
    class: "p1",
    topic: "Phonics & Sounds",
    text: "Which sound does S make?",
    options: ["sss 🐍", "mmm 😋", "aaa 😮"],
    correct: "sss 🐍",
    feedback: { correct: "Yes—S says sss like a snake!", incorrect: "Try again—think snake 🐍." }
  },
  {
    _id: "js-p1-en-phon-002",
    level: "juniorSchool",
    subject: "english",
    class: "p1",
    topic: "Phonics & Sounds",
    text: "Which letter starts 🐟 fish?",
    options: ["F", "T", "R"],
    correct: "F",
    feedback: { correct: "f-f-fish starts with F!", incorrect: "Say it slowly: fff-ish." }
  },
  {
    _id: "js-p1-en-phon-003",
    level: "juniorSchool",
    subject: "english",
    class: "p1",
    topic: "Phonics & Sounds",
    text: "Tap the letter that makes b-b- sound.",
    options: ["b", "m", "s"],
    correct: "b",
    feedback: { correct: "Yes—/b/ like ball 🏀.", incorrect: "Try again—bounce your lips: b-b-b." }
  },
  {
    _id: "js-p1-en-phon-004",
    level: "juniorSchool",
    subject: "english",
    class: "p1",
    topic: "Phonics & Sounds",
    text: "Which word starts with T?",
    options: ["tree 🌳", "cat 🐱", "egg 🥚"],
    correct: "tree 🌳",
    feedback: { correct: "Right—t-t-tree!", incorrect: "Listen for the first sound: t." }
  },
  {
    _id: "js-p1-en-phon-005",
    level: "juniorSchool",
    subject: "english",
    class: "p1",
    topic: "Phonics & Sounds",
    text: "Which sound does M make?",
    options: ["mmm 😋", "sss 🐍", "zzz 🐝"],
    correct: "mmm 😋",
    feedback: { correct: "Great—mmm like yummy food!", incorrect: "Press your lips, say mmm." }
  },
  {
    _id: "js-p1-en-phon-006",
    level: "juniorSchool",
    subject: "english",
    class: "p1",
    topic: "Phonics & Sounds",
    text: "Pick the letter for 🐒 monkey.",
    options: ["M", "L", "D"],
    correct: "M",
    feedback: { correct: "Yes—M for monkey!", incorrect: "Look for M." }
  },
  {
    _id: "js-p1-en-phon-007",
    level: "juniorSchool",
    subject: "english",
    class: "p1",
    topic: "Phonics & Sounds",
    text: "Which sound starts sun?",
    options: ["s", "g", "p"],
    correct: "s",
    feedback: { correct: "s-s-sun starts with s!", incorrect: "Try the first sound: s." }
  },
  {
    _id: "js-p1-en-phon-008",
    level: "juniorSchool",
    subject: "english",
    class: "p1",
    topic: "Phonics & Sounds",
    text: "Find the letter for 🐶 dog.",
    options: ["d", "b", "p"],
    correct: "d",
    feedback: { correct: "Yes—d for dog!", incorrect: "d-d-dog begins with d." }
  }
];

const vocab: Question[] = [
  {
    _id: "js-p1-en-vocab-001",
    level: "juniorSchool",
    subject: "english",
    class: "p1",
    topic: "Vocabulary & Rhymes",
    text: "Which word rhymes with 🐱 cat?",
    options: ["bat", "cup", "pen"],
    correct: "bat",
    feedback: { correct: "Cat-bat rhyme! 😺🦇", incorrect: "Listen to the -at sound." }
  },
  {
    _id: "js-p1-en-vocab-002",
    level: "juniorSchool",
    subject: "english",
    class: "p1",
    topic: "Vocabulary & Rhymes",
    text: "Opposite of hot 🔥 is…",
    options: ["cold 🧊", "warm", "wet"],
    correct: "cold 🧊",
    feedback: { correct: "Yes—hot vs cold!", incorrect: "Think temperature." }
  },
  {
    _id: "js-p1-en-vocab-003",
    level: "juniorSchool",
    subject: "english",
    class: "p1",
    topic: "Vocabulary & Rhymes",
    text: "Which rhymes with tree 🌳?",
    options: ["bee 🐝", "book 📘", "dog 🐶"],
    correct: "bee 🐝",
    feedback: { correct: "tree—bee rhyme with -ee.", incorrect: "Listen for the same ending." }
  },
  {
    _id: "js-p1-en-vocab-004",
    level: "juniorSchool",
    subject: "english",
    class: "p1",
    topic: "Vocabulary & Rhymes",
    text: "Choose the opposite of big 🐘.",
    options: ["small 🐭", "tall 📏", "long ➖"],
    correct: "small 🐭",
    feedback: { correct: "Big vs small!", incorrect: "Opposite means very different." }
  },
  {
    _id: "js-p1-en-vocab-005",
    level: "juniorSchool",
    subject: "english",
    class: "p1",
    topic: "Vocabulary & Rhymes",
    text: "Which rhymes with pen 🖊️?",
    options: ["hen 🐔", "cup ☕", "cap 🧢"],
    correct: "hen 🐔",
    feedback: { correct: "pen—hen rhyme.", incorrect: "Listen: pen, hen." }
  },
  {
    _id: "js-p1-en-vocab-006",
    level: "juniorSchool",
    subject: "english",
    class: "p1",
    topic: "Vocabulary & Rhymes",
    text: "Opposite of day ☀️ is…",
    options: ["night 🌙", "rain ☔", "snow ❄️"],
    correct: "night 🌙",
    feedback: { correct: "Day—night!", incorrect: "Think of the sky at night." }
  },
  {
    _id: "js-p1-en-vocab-007",
    level: "juniorSchool",
    subject: "english",
    class: "p1",
    topic: "Vocabulary & Rhymes",
    text: "Which rhymes with cake 🍰?",
    options: ["lake 🏞️", "cup ☕", "dog 🐶"],
    correct: "lake 🏞️",
    feedback: { correct: "cake—lake rhyme.", incorrect: "Listen to -ake." }
  },
  {
    _id: "js-p1-en-vocab-008",
    level: "juniorSchool",
    subject: "english",
    class: "p1",
    topic: "Vocabulary & Rhymes",
    text: "Opposite of up ⬆️ is…",
    options: ["down ⬇️", "left ⬅️", "near 📍"],
    correct: "down ⬇️",
    feedback: { correct: "Up—down!", incorrect: "Think directions." }
  }
];

const gram: Question[] = [
  {
    _id: "js-p1-en-gram-001",
    level: "juniorSchool",
    subject: "english",
    class: "p1",
    topic: "Grammar Basics",
    text: "Which is a noun?",
    options: ["School 🏫", "Run 🏃", "Green 🟩"],
    correct: "School 🏫",
    feedback: { correct: "A noun is a person/place/thing.", incorrect: "Look for a place or thing." }
  },
  {
    _id: "js-p1-en-gram-002",
    level: "juniorSchool",
    subject: "english",
    class: "p1",
    topic: "Grammar Basics",
    text: "Pick the verb (action).",
    options: ["Jump 🤸", "Chair 🪑", "Blue 🔵"],
    correct: "Jump 🤸",
    feedback: { correct: "Verbs are actions.", incorrect: "Which one can you DO?" }
  },
  {
    _id: "js-p1-en-gram-003",
    level: "juniorSchool",
    subject: "english",
    class: "p1",
    topic: "Grammar Basics",
    text: "Choose the correct article: __ apple 🍎",
    options: ["an", "a", "the"],
    correct: "an",
    feedback: { correct: "Vowel sound → ‘an’.", incorrect: "Before vowel sounds, use ‘an’." }
  },
  {
    _id: "js-p1-en-gram-004",
    level: "juniorSchool",
    subject: "english",
    class: "p1",
    topic: "Grammar Basics",
    text: "She __ happy.",
    options: ["is", "are", "am"],
    correct: "is",
    feedback: { correct: "She is ✅", incorrect: "Use 'is' with he/she/it." }
  },
  {
    _id: "js-p1-en-gram-005",
    level: "juniorSchool",
    subject: "english",
    class: "p1",
    topic: "Grammar Basics",
    text: "We __ a ball. ⚽",
    options: ["have", "has", "am"],
    correct: "have",
    feedback: { correct: "We have ✅", incorrect: "Use 'have' with I/you/we/they." }
  },
  {
    _id: "js-p1-en-gram-006",
    level: "juniorSchool",
    subject: "english",
    class: "p1",
    topic: "Grammar Basics",
    text: "Pick the pronoun.",
    options: ["she", "book", "green"],
    correct: "she",
    feedback: { correct: "Pronoun replaces a noun.", incorrect: "Think: he, she, it, they…" }
  },
  {
    _id: "js-p1-en-gram-007",
    level: "juniorSchool",
    subject: "english",
    class: "p1",
    topic: "Grammar Basics",
    text: "Choose the correct: They __ happy.",
    options: ["are", "is", "am"],
    correct: "are",
    feedback: { correct: "They are ✅", incorrect: "Use 'are' with you/we/they." }
  },
  {
    _id: "js-p1-en-gram-008",
    level: "juniorSchool",
    subject: "english",
    class: "p1",
    topic: "Grammar Basics",
    text: "Select the adjective.",
    options: ["small 🐭", "run", "school"],
    correct: "small 🐭",
    feedback: { correct: "Adjectives describe nouns.", incorrect: "Which one describes size?" }
  }
];

const sent: Question[] = [
  {
    _id: "js-p1-en-sent-001",
    level: "juniorSchool",
    subject: "english",
    class: "p1",
    topic: "Sentences & Punctuation",
    text: "Choose the full sentence.",
    options: ["We play.", "Went to park", "ball"],
    correct: "We play.",
    feedback: { correct: "Has subject + verb.", incorrect: "Needs a who + action." }
  },
  {
    _id: "js-p1-en-sent-002",
    level: "juniorSchool",
    subject: "english",
    class: "p1",
    topic: "Sentences & Punctuation",
    text: "Pick the correct ending mark for a question.",
    options: [".", "!", "?"],
    correct: "?",
    feedback: { correct: "Questions end with ?.", incorrect: "Try the question mark." }
  },
  {
    _id: "js-p1-en-sent-003",
    level: "juniorSchool",
    subject: "english",
    class: "p1",
    topic: "Sentences & Punctuation",
    text: "Which starts with a capital letter?",
    options: ["ali runs.", "Ali runs.", "ali Runs."],
    correct: "Ali runs.",
    feedback: { correct: "Sentences start with capitals.", incorrect: "Capitalize the first word." }
  },
  {
    _id: "js-p1-en-sent-004",
    level: "juniorSchool",
    subject: "english",
    class: "p1",
    topic: "Sentences & Punctuation",
    text: "Choose the sentence with a period.",
    options: ["We like cats", "We like cats.", "We like cats!"],
    correct: "We like cats.",
    feedback: { correct: "Statements end with a period.", incorrect: "Add a full stop." }
  },
  {
    _id: "js-p1-en-sent-005",
    level: "juniorSchool",
    subject: "english",
    class: "p1",
    topic: "Sentences & Punctuation",
    text: "Pick the sentence.",
    options: ["run fast", "Run fast!", "running fast"],
    correct: "Run fast!",
    feedback: { correct: "It’s a command—ends with !", incorrect: "Needs a capital and punctuation." }
  },
  {
    _id: "js-p1-en-sent-006",
    level: "juniorSchool",
    subject: "english",
    class: "p1",
    topic: "Sentences & Punctuation",
    text: "Choose the polite sentence.",
    options: ["Give me water", "Give me water.", "Please give me water."],
    correct: "Please give me water.",
    feedback: { correct: "Polite + complete.", incorrect: "Try adding 'Please'." }
  },
  {
    _id: "js-p1-en-sent-007",
    level: "juniorSchool",
    subject: "english",
    class: "p1",
    topic: "Sentences & Punctuation",
    text: "Which is a question?",
    options: ["We are friends.", "Are we friends?", "We friends"],
    correct: "Are we friends?",
    feedback: { correct: "Questions ask something.", incorrect: "Look for inversion + ?" }
  },
  {
    _id: "js-p1-en-sent-008",
    level: "juniorSchool",
    subject: "english",
    class: "p1",
    topic: "Sentences & Punctuation",
    text: "Choose the best ending: Wow, fireworks ___",
    options: ["?", ".", "!"],
    correct: "!",
    feedback: { correct: "Exclamations use !", incorrect: "It shows strong feeling." }
  }
];

const comp: Question[] = [
  {
    _id: "js-p1-en-comp-001",
    level: "juniorSchool",
    subject: "english",
    class: "p1",
    topic: "Comprehension",
    text: "Ali sees a cat. It is black. What color is the cat?",
    options: ["black", "white", "brown"],
    correct: "black",
    feedback: { correct: "Good reading!", incorrect: "Read again: black." }
  },
  {
    _id: "js-p1-en-comp-002",
    level: "juniorSchool",
    subject: "english",
    class: "p1",
    topic: "Comprehension",
    text: "Sara has two 🍎. She eats one. How many left?",
    options: ["1", "2", "3"],
    correct: "1",
    feedback: { correct: "Yes—one left.", incorrect: "Two minus one is one." }
  },
  {
    _id: "js-p1-en-comp-003",
    level: "juniorSchool",
    subject: "english",
    class: "p1",
    topic: "Comprehension",
    text: "The sun is hot ☀️. Is the sun cold?",
    options: ["No", "Yes"],
    correct: "No",
    feedback: { correct: "Right—sun is hot.", incorrect: "Check the sentence." }
  },
  {
    _id: "js-p1-en-comp-004",
    level: "juniorSchool",
    subject: "english",
    class: "p1",
    topic: "Comprehension",
    text: "A frog 🐸 jumps in a pond 💧. Where does it jump?",
    options: ["pond 💧", "tree 🌳", "house 🏠"],
    correct: "pond 💧",
    feedback: { correct: "Nice!", incorrect: "Look at the picture words." }
  },
  {
    _id: "js-p1-en-comp-005",
    level: "juniorSchool",
    subject: "english",
    class: "p1",
    topic: "Comprehension",
    text: "Mama bakes a cake 🎂. What does Mama do?",
    options: ["bakes", "drives", "paints"],
    correct: "bakes",
    feedback: { correct: "Yes—bakes!", incorrect: "Re-read the sentence." }
  },
  {
    _id: "js-p1-en-comp-006",
    level: "juniorSchool",
    subject: "english",
    class: "p1",
    topic: "Comprehension",
    text: "The dog is under the table. Where is the dog?",
    options: ["under", "on", "behind"],
    correct: "under",
    feedback: { correct: "Correct—under.", incorrect: "Position word is ‘under’." }
  },
  {
    _id: "js-p1-en-comp-007",
    level: "juniorSchool",
    subject: "english",
    class: "p1",
    topic: "Comprehension",
    text: "Zara has a red kite 🪁. What color is the kite?",
    options: ["red", "blue", "green"],
    correct: "red",
    feedback: { correct: "You got it.", incorrect: "Color word is ‘red’." }
  },
  {
    _id: "js-p1-en-comp-008",
    level: "juniorSchool",
    subject: "english",
    class: "p1",
    topic: "Comprehension",
    text: "It rains ☔. We use an ____.",
    options: ["umbrella ☂️", "hat 🎩", "book 📘"],
    correct: "umbrella ☂️",
    feedback: { correct: "Yes—umbrella!", incorrect: "What keeps you dry?" }
  }
];

export const englishP1: Question[] = [...phon, ...vocab, ...gram, ...sent, ...comp];
