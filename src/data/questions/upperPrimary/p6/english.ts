import type { Question } from "../../../../types";

export const p6English: Question[] = [
  // Grammar — choice
  {
    _id: "up-p6-en-g-001",
    level: "upperPrimary",
    subject: "english",
    class: "p6",
    topic: "Grammar",
    type: "choice",
    text: "Choose the correct pronoun: Ahmed lost ___ book.",
    options: ["his", "he", "him"],
    correct: "his",
    feedback: { correct: "Yes—'his' shows possession.", incorrect: "Use a possessive pronoun." }
  },
  {
    _id: "up-p6-en-g-002",
    level: "upperPrimary",
    subject: "english",
    class: "p6",
    topic: "Grammar",
    type: "choice",
    text: "Pick the adjective: The 🐶 dog is very noisy.",
    options: ["dog", "very", "noisy"],
    correct: "noisy",
    feedback: { correct: "Correct—'noisy' describes the dog.", incorrect: "Adjectives describe nouns." }
  },
  {
    _id: "up-p6-en-g-003",
    level: "upperPrimary",
    subject: "english",
    class: "p6",
    topic: "Grammar",
    type: "choice",
    text: "Choose the correct article: Ali saw ___ elephant.",
    options: ["a", "an", "the"],
    correct: "an",
    feedback: { correct: "Right—vowel sound → 'an'.", incorrect: "Before vowel sounds, use 'an'." }
  },
  {
    _id: "up-p6-en-g-004",
    level: "upperPrimary",
    subject: "english",
    class: "p6",
    topic: "Grammar",
    type: "choice",
    text: "Select the preposition: The ball is under the 🪑 chair.",
    options: ["under", "ball", "chair"],
    correct: "under",
    feedback: { correct: "Yes—'under' shows position.", incorrect: "Prepositions show position/relationship." }
  },
  {
    _id: "up-p6-en-g-005",
    level: "upperPrimary",
    subject: "english",
    class: "p6",
    topic: "Grammar",
    type: "choice",
    text: "Which sentence is correct?",
    options: ["He don't like tea.", "He doesn't like tea.", "He not like tea."],
    correct: "He doesn't like tea.",
    feedback: { correct: "Correct—do/does + not.", incorrect: "Check subject–verb agreement." }
  },
  {
    _id: "up-p6-en-g-006",
    level: "upperPrimary",
    subject: "english",
    class: "p6",
    topic: "Grammar",
    type: "choice",
    text: "Choose the conjunction: We stayed inside ___ it rained. 🌧️",
    options: ["because", "but", "and"],
    correct: "because",
    feedback: { correct: "Yes—gives a reason.", incorrect: "We use 'because' for reasons." }
  },
  {
    _id: "up-p6-en-g-007",
    level: "upperPrimary",
    subject: "english",
    class: "p6",
    topic: "Grammar",
    type: "choice",
    text: "Pick the correct form: The children ___ happy.",
    options: ["is", "are", "was"],
    correct: "are",
    feedback: { correct: "Right—children (plural) → 'are'.", incorrect: "Use plural verb with plural subject." }
  },

  // Punctuation — choice
  {
    _id: "up-p6-en-p-001",
    level: "upperPrimary",
    subject: "english",
    class: "p6",
    topic: "Punctuation",
    type: "choice",
    text: "Choose the correct punctuation: \"Where are you ___\" asked Mariam.",
    options: ["?", "!", "."],
    correct: "?",
    feedback: { correct: "Yes—it's a question.", incorrect: "Use a question mark for direct questions." }
  },
  {
    _id: "up-p6-en-p-002",
    level: "upperPrimary",
    subject: "english",
    class: "p6",
    topic: "Punctuation",
    type: "choice",
    text: "Pick the sentence with correct commas.",
    options: [
      "We need pens rulers and erasers.",
      "We need pens, rulers, and erasers.",
      "We need, pens, rulers and, erasers."
    ],
    correct: "We need pens, rulers, and erasers.",
    feedback: { correct: "Correct—commas in a list.", incorrect: "Separate list items with commas." }
  },
  {
    _id: "up-p6-en-p-003",
    level: "upperPrimary",
    subject: "english",
    class: "p6",
    topic: "Punctuation",
    type: "choice",
    text: "Choose the correct apostrophe use.",
    options: ["Its raining today.", "It's raining today.", "Its' raining today."],
    correct: "It's raining today.",
    feedback: { correct: "Right—'It's' = it is.", incorrect: "Use apostrophe for contractions." }
  },
  {
    _id: "up-p6-en-p-004",
    level: "upperPrimary",
    subject: "english",
    class: "p6",
    topic: "Punctuation",
    type: "choice",
    text: "End mark: Stop talking, please ___",
    options: ["!", ".", "?"],
    correct: "!",
    feedback: { correct: "Yes—shows strong feeling.", incorrect: "Use '!' for emphasis/commands sometimes." }
  },
  {
    _id: "up-p6-en-p-005",
    level: "upperPrimary",
    subject: "english",
    class: "p6",
    topic: "Punctuation",
    type: "choice",
    text: "Quotation marks: Musa said, ___I will help.___",
    options: ["'I will help.'", "\"I will help.\"", "I will help."],
    correct: "\"I will help.\"",
    feedback: { correct: "Correct—quotes for exact words.", incorrect: "Use quotation marks for reported exact speech." }
  },
  {
    _id: "up-p6-en-p-006",
    level: "upperPrimary",
    subject: "english",
    class: "p6",
    topic: "Punctuation",
    type: "choice",
    text: "Capitalization: choose the correct sentence.",
    options: ["we live in kampala.", "We live in Kampala.", "We live in kampala."],
    correct: "We live in Kampala.",
    feedback: { correct: "Yes—capitalize first word and proper nouns.", incorrect: "Start with capitals; proper nouns too." }
  },
  {
    _id: "up-p6-en-p-007",
    level: "upperPrimary",
    subject: "english",
    class: "p6",
    topic: "Punctuation",
    type: "choice",
    text: "Comma usage: After school, we played ___",
    options: ["football.", ", football.", "football,"],
    correct: "football.",
    feedback: { correct: "Right—no extra comma needed.", incorrect: "Don't add unnecessary commas." }
  },

  // Agreement — choice
  {
    _id: "up-p6-en-a-001",
    level: "upperPrimary",
    subject: "english",
    class: "p6",
    topic: "Agreement",
    type: "choice",
    text: "Choose the correct verb: The team ___ winning. 🏆",
    options: ["is", "are", "were"],
    correct: "is",
    feedback: { correct: "Yes—team is singular here.", incorrect: "Collective noun takes singular verb (often)." }
  },
  {
    _id: "up-p6-en-a-002",
    level: "upperPrimary",
    subject: "english",
    class: "p6",
    topic: "Agreement",
    type: "choice",
    text: "Pick the correct form: These books ___ new.",
    options: ["is", "are", "was"],
    correct: "are",
    feedback: { correct: "Correct—'books' plural.", incorrect: "Plural noun → plural verb." }
  },
  {
    _id: "up-p6-en-a-003",
    level: "upperPrimary",
    subject: "english",
    class: "p6",
    topic: "Agreement",
    type: "choice",
    text: "Which is correct?",
    options: ["My friend like mangoes.", "My friends likes mangoes.", "My friend likes mangoes."],
    correct: "My friend likes mangoes.",
    feedback: { correct: "Right.", incorrect: "Check singular/plural carefully." }
  },
  {
    _id: "up-p6-en-a-004",
    level: "upperPrimary",
    subject: "english",
    class: "p6",
    topic: "Agreement",
    type: "choice",
    text: "Choose the correct verb: Neither Ali nor his brothers ___ coming.",
    options: ["is", "are", "am"],
    correct: "are",
    feedback: { correct: "Yes—verb agrees with the nearer subject.", incorrect: "Look at the subject closest to the verb." }
  },
  {
    _id: "up-p6-en-a-005",
    level: "upperPrimary",
    subject: "english",
    class: "p6",
    topic: "Agreement",
    type: "choice",
    text: "Pick the correct verb: Mathematics ___ interesting.",
    options: ["are", "is", "were"],
    correct: "is",
    feedback: { correct: "Correct—treated as singular.", incorrect: "Certain subjects look plural but are singular." }
  },
  {
    _id: "up-p6-en-a-006",
    level: "upperPrimary",
    subject: "english",
    class: "p6",
    topic: "Agreement",
    type: "choice",
    text: "Fill in: A pair of shoes ___ on the mat. 👟",
    options: ["is", "are", "were"],
    correct: "is",
    feedback: { correct: "Yes—'pair' is singular.", incorrect: "The head noun is 'pair' (singular)." }
  },
  {
    _id: "up-p6-en-a-007",
    level: "upperPrimary",
    subject: "english",
    class: "p6",
    topic: "Agreement",
    type: "choice",
    text: "Choose: Ten kilometers ___ a long walk.",
    options: ["is", "are", "were"],
    correct: "is",
    feedback: { correct: "Correct—treated as a single measurement.", incorrect: "Quantities of distance/time → singular." }
  },

  // One-word substitution — text
  {
    _id: "up-p6-en-v-008",
    level: "upperPrimary",
    subject: "english",
    class: "p6",
    topic: "Vocabulary",
    type: "text",
    text: "Give one word: Your sister’s daughter is too young to marry.",
    accepted: ["niece"],
    feedback: { correct: "Yes—your sister’s daughter is your niece.", incorrect: "The correct word is ‘niece’." }
  },
  {
    _id: "up-p6-en-v-009",
    level: "upperPrimary",
    subject: "english",
    class: "p6",
    topic: "Vocabulary",
    type: "text",
    text: "Give one word: The place where foods and drinks are served.",
    accepted: ["restaurant"],
    feedback: { correct: "Correct—‘restaurant’.", incorrect: "Answer: ‘restaurant’." }
  },
  {
    _id: "up-p6-en-v-010",
    level: "upperPrimary",
    subject: "english",
    class: "p6",
    topic: "Vocabulary",
    type: "text",
    text: "Give one word: A place where foreign currencies are sold.",
    accepted: ["forex bureau", "bureau de change"],
    feedback: {
      correct: "Well done—‘forex bureau’ (or ‘bureau de change’).",
      incorrect: "Acceptable answers: ‘forex bureau’ or ‘bureau de change’."
    }
  },
  {
    _id: "up-p6-en-v-011",
    level: "upperPrimary",
    subject: "english",
    class: "p6",
    topic: "Vocabulary",
    type: "text",
    text: "Give one word: A set of three children born at the same time.",
    accepted: ["triplets"],
    feedback: { correct: "Yes—‘triplets’.", incorrect: "The word is ‘triplets’." }
  },
  {
    _id: "up-p6-en-v-012",
    level: "upperPrimary",
    subject: "english",
    class: "p6",
    topic: "Vocabulary",
    type: "text",
    text: "Give one word: The place where animals are slaughtered.",
    accepted: ["slaughterhouse", "abattoir"],
    feedback: {
      correct: "Correct—‘slaughterhouse’ (also ‘abattoir’).",
      incorrect: "Answer: ‘slaughterhouse’ (or ‘abattoir’)."
    }
  },

  // Verb forms (brackets) — text
  {
    _id: "up-p6-en-g-008",
    level: "upperPrimary",
    subject: "english",
    class: "p6",
    topic: "Grammar",
    type: "text",
    text: "Has the secretary (write) down all the main points?",
    accepted: ["written"],
    feedback: { correct: "Yes—present perfect takes ‘written’.", incorrect: "Use the past participle: ‘written’." }
  },
  {
    _id: "up-p6-en-g-009",
    level: "upperPrimary",
    subject: "english",
    class: "p6",
    topic: "Grammar",
    type: "text",
    text: "I have (conclude) that science has greatly helped to change the world.",
    accepted: ["concluded"],
    feedback: { correct: "Correct—‘have concluded’.", incorrect: "Write the past participle: ‘concluded’." }
  },
  {
    _id: "up-p6-en-g-010",
    level: "upperPrimary",
    subject: "english",
    class: "p6",
    topic: "Grammar",
    type: "text",
    text: "Has the headteacher (speak) to you about sanitation?",
    accepted: ["spoken"],
    feedback: { correct: "Yes—‘has spoken’.", incorrect: "Use the past participle: ‘spoken’." }
  },
  {
    _id: "up-p6-en-g-011",
    level: "upperPrimary",
    subject: "english",
    class: "p6",
    topic: "Grammar",
    type: "text",
    text: "We (listen) to our teacher now.",
    accepted: ["are listening"],
    feedback: { correct: "Right—present continuous: ‘are listening’.", incorrect: "Use present continuous: ‘are listening’." }
  },
  {
    _id: "up-p6-en-g-012",
    level: "upperPrimary",
    subject: "english",
    class: "p6",
    topic: "Grammar",
    type: "text",
    text: "Have your hens (lay) many eggs?",
    accepted: ["laid"],
    feedback: { correct: "Yes—‘have … laid’.", incorrect: "Use the past participle of lay: ‘laid’." }
  },

  // Join/rewrite — choice (fixed to avoid many variants)
  {
    _id: "up-p6-en-w-008",
    level: "upperPrimary",
    subject: "english",
    class: "p6",
    topic: "Writing",
    type: "choice",
    text: "Join using ‘neither … nor’: My father did not visit me. My mother did not visit me.",
    options: [
      "Neither my father nor my mother visited me.",
      "Neither my father or my mother visited me.",
      "My father neither visited me nor mother."
    ],
    correct: "Neither my father nor my mother visited me.",
    feedback: { correct: "Well joined with ‘neither … nor’.", incorrect: "Use ‘neither … nor’ with parallel subjects." }
  },
  {
    _id: "up-p6-en-w-009",
    level: "upperPrimary",
    subject: "english",
    class: "p6",
    topic: "Writing",
    type: "choice",
    text: "Join using ‘since’: Opoka fell off the bicycle. He did not support himself anywhere.",
    options: [
      "Opoka did not support himself anywhere since he fell off the bicycle.",
      "Since Opoka did not support himself anywhere, he fell off the bicycle.",
      "Opoka fell off bicycle since nowhere support."
    ],
    correct: "Opoka did not support himself anywhere since he fell off the bicycle.",
    feedback: { correct: "Good—cause introduced by ‘since’.", incorrect: "Link cause with ‘since he fell …’." }
  },
  {
    _id: "up-p6-en-w-010",
    level: "upperPrimary",
    subject: "english",
    class: "p6",
    topic: "Writing",
    type: "choice",
    text: "Join using ‘… than …’: Green vegetables are cheap. Beef is expensive.",
    options: [
      "Beef is more expensive than green vegetables.",
      "Beef is expensive than green vegetables.",
      "Green vegetables are than beef cheaper."
    ],
    correct: "Beef is more expensive than green vegetables.",
    feedback: { correct: "Correct comparative form.", incorrect: "Use ‘more … than …’ for longer adjectives." }
  },
  {
    _id: "up-p6-en-w-011",
    level: "upperPrimary",
    subject: "english",
    class: "p6",
    topic: "Writing",
    type: "choice",
    text: "Join using ‘too … to …’: Our teacher is very kind. He cannot refuse to help you.",
    options: [
      "Our teacher is too kind to refuse to help you.",
      "Our teacher is very kind to refuse to help you.",
      "Our teacher is too kind so he refuses to help you."
    ],
    correct: "Our teacher is too kind to refuse to help you.",
    feedback: { correct: "Yes—‘too … to …’ shows impossibility.", incorrect: "Use ‘too + adjective + to + verb’." }
  }
];
