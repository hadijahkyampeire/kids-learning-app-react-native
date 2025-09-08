import { Question } from "../../../../types";

export const p5EnglishQuestions: Question[] = [
  // ========== Vocabulary & Idioms ==========
  {
    _id: "lp-p5-eng-vo-1",
    level: "lowerPrimary",
    subject: "english",
    class: "p5",
    topic: "Vocabulary & Idioms",
    type: "choice",
    text: "Choose the best meaning of the idiom: “hit the road”.",
    options: ["start a journey", "fight someone", "build a road"],
    correct: "start a journey",
    feedback: { correct: "Yes—'hit the road' means to begin a journey.", incorrect: "It means to begin a journey or leave." }
  },
  {
    _id: "lp-p5-eng-vo-2",
    level: "lowerPrimary",
    subject: "english",
    class: "p5",
    topic: "Vocabulary & Idioms",
    type: "choice",
    text: "Pick the word that is CLOSEST in meaning to 'assist'.",
    options: ["help", "hide", "argue"],
    correct: "help",
    feedback: { correct: "Correct—assist means help.", incorrect: "Try a synonym of 'assist'." }
  },
  {
    _id: "lp-p5-eng-vo-3",
    level: "lowerPrimary",
    subject: "english",
    class: "p5",
    topic: "Vocabulary & Idioms",
    type: "choice",
    text: "Which pair are ANTONYMS?",
    options: ["ancient — modern", "silent — quiet", "polite — kind"],
    correct: "ancient — modern",
    feedback: { correct: "Right—opposites.", incorrect: "Antonyms are words with opposite meanings." }
  },
  {
    _id: "lp-p5-eng-vo-4",
    level: "lowerPrimary",
    subject: "english",
    class: "p5",
    topic: "Vocabulary & Idioms",
    type: "text",
    text: "Write one sentence correctly using the word 'although'.",
    accepted: [], // teacher-marked free response
    feedback: { correct: "Nice—your usage of 'although' shows contrast.", incorrect: "Use 'although' to contrast two ideas, e.g., 'Although it rained, we played.'" }
  },

  // ========== Spelling Rules ==========
  {
    _id: "lp-p5-eng-sp-1",
    level: "lowerPrimary",
    subject: "english",
    class: "p5",
    topic: "Spelling Rules",
    type: "choice",
    text: "Choose the correct spelling.",
    options: ["necessary", "neccesary", "neccesery"],
    correct: "necessary",
    feedback: { correct: "Well done!", incorrect: "Watch the double 's' and single 'c' in 'necessary'." }
  },
  {
    _id: "lp-p5-eng-sp-2",
    level: "lowerPrimary",
    subject: "english",
    class: "p5",
    topic: "Spelling Rules",
    type: "choice",
    text: "Which is the correct plural?",
    options: ["potatoes", "potatos", "potatoeses"],
    correct: "potatoes",
    feedback: { correct: "Yes—words ending in -to add -es.", incorrect: "Nouns ending in 'o' after a consonant usually add 'es'." }
  },
  {
    _id: "lp-p5-eng-sp-3",
    level: "lowerPrimary",
    subject: "english",
    class: "p5",
    topic: "Spelling Rules",
    type: "choice",
    text: "Pick the correctly hyphenated compound word.",
    options: ["well-known", "wellknown", "well–known"],
    correct: "well-known",
    feedback: { correct: "Correct—use a standard hyphen.", incorrect: "Use a simple hyphen: 'well-known'." }
  },
  {
    _id: "lp-p5-eng-sp-4",
    level: "lowerPrimary",
    subject: "english",
    class: "p5",
    topic: "Spelling Rules",
    type: "text",
    text: "Rewrite with correct spelling: 'recieve, definate'.",
    accepted: ["receive, definite", "receive,definite", "receive and definite"],
    patterns: ["^\\s*receive\\s*,\\s*definite\\s*$","^\\s*receive\\s+and\\s+definite\\s*$"],
    feedback: { correct: "Great—'receive', 'definite'.", incorrect: "Correct forms: receive, definite." }
  },

  // ========== Parts of Speech ==========
  {
    _id: "lp-p5-eng-pos-1",
    level: "lowerPrimary",
    subject: "english",
    class: "p5",
    topic: "Parts of Speech",
    type: "choice",
    text: "Select the sentence with a correctly used ADVERB.",
    options: ["She sang beautifully.", "She sang beautiful.", "She beautiful sang."],
    correct: "She sang beautifully.",
    feedback: { correct: "Yes—adverb modifies 'sang'.", incorrect: "Adverbs often end in -ly and modify verbs." }
  },
  {
    _id: "lp-p5-eng-pos-2",
    level: "lowerPrimary",
    subject: "english",
    class: "p5",
    topic: "Parts of Speech",
    type: "choice",
    text: "Which word is a PREPOSITION in: 'The dog slept under the table'?",
    options: ["under", "slept", "dog"],
    correct: "under",
    feedback: { correct: "Good—'under' shows position.", incorrect: "Prepositions show relationship/place." }
  },
  {
    _id: "lp-p5-eng-pos-3",
    level: "lowerPrimary",
    subject: "english",
    class: "p5",
    topic: "Parts of Speech",
    type: "choice",
    text: "Choose the sentence with a RELATIVE PRONOUN.",
    options: ["The boy who won is here.", "The boy won here.", "The boy ran fast."],
    correct: "The boy who won is here.",
    feedback: { correct: "Right—'who' relates the clause.", incorrect: "Look for 'who/which/that' joining clauses." }
  },
  {
    _id: "lp-p5-eng-pos-4",
    level: "lowerPrimary",
    subject: "english",
    class: "p5",
    topic: "Parts of Speech",
    type: "text",
    text: "Write a sentence that correctly uses the conjunction 'because'.",
    accepted: [],
    feedback: { correct: "Nice—'because' explains a reason.", incorrect: "Use 'because' to show cause, e.g., 'He stayed inside because it rained.'" }
  },

  // ========== Tenses (All) ==========
  {
    _id: "lp-p5-eng-te-1",
    level: "lowerPrimary",
    subject: "english",
    class: "p5",
    topic: "Tenses (All)",
    type: "choice",
    text: "Choose the sentence in the PAST PERFECT tense.",
    options: ["She had finished before we arrived.", "She finishes before we arrive.", "She will finish before we arrive."],
    correct: "She had finished before we arrived.",
    feedback: { correct: "Yes—'had + past participle' is past perfect.", incorrect: "Past perfect uses 'had' + past participle." }
  },
  {
    _id: "lp-p5-eng-te-2",
    level: "lowerPrimary",
    subject: "english",
    class: "p5",
    topic: "Tenses (All)",
    type: "choice",
    text: "Pick the sentence in FUTURE CONTINUOUS tense.",
    options: ["We will be studying at 8pm.", "We studied at 8pm.", "We are studying at 8pm."],
    correct: "We will be studying at 8pm.",
    feedback: { correct: "Correct—'will be + -ing'.", incorrect: "Future continuous: 'will be' + verb-ing." }
  },
  {
    _id: "lp-p5-eng-te-3",
    level: "lowerPrimary",
    subject: "english",
    class: "p5",
    topic: "Tenses (All)",
    type: "choice",
    text: "Choose the correct verb: 'He ____ to the shop every Saturday.'",
    options: ["goes", "go", "going"],
    correct: "goes",
    feedback: { correct: "Yes—3rd person singular takes 'goes'.", incorrect: "Present simple with 'he/she/it' → add -s." }
  },
  {
    _id: "lp-p5-eng-te-4",
    level: "lowerPrimary",
    subject: "english",
    class: "p5",
    topic: "Tenses (All)",
    type: "text",
    text: "Rewrite in the PAST TENSE: 'The children play in the field.'",
    accepted: ["The children played in the field.", "Children played in the field."],
    feedback: { correct: "Good—'played' shows past.", incorrect: "Use 'played' for past simple." }
  },

  // ========== Paragraph Writing ==========
  {
    _id: "lp-p5-eng-pw-1",
    level: "lowerPrimary",
    subject: "english",
    class: "p5",
    topic: "Paragraph Writing",
    type: "multiText",
    minAnswers: 3,
    text: "Write three sentences that form a short paragraph about keeping the classroom clean (beginning, middle, ending).",
    acceptedSet: [],
    feedback: { correct: "Well structured!", incorrect: "Include a topic sentence, one detail, and a closing sentence." }
  },
  {
    _id: "lp-p5-eng-pw-2",
    level: "lowerPrimary",
    subject: "english",
    class: "p5",
    topic: "Paragraph Writing",
    type: "text",
    text: "Write a suitable TITLE for a paragraph about 'a visit to the market'.",
    accepted: [],
    feedback: { correct: "Nice title!", incorrect: "A good title is short and tells the main idea." }
  },
  {
    _id: "lp-p5-eng-pw-3",
    level: "lowerPrimary",
    subject: "english",
    class: "p5",
    topic: "Paragraph Writing",
    type: "text",
    text: "Write ONE concluding sentence for a paragraph about road safety.",
    accepted: [],
    feedback: { correct: "Clear conclusion!", incorrect: "A conclusion sums up the main point (e.g., 'Therefore, we must follow traffic rules to stay safe.')." }
  },
  {
    _id: "lp-p5-eng-pw-4",
    level: "lowerPrimary",
    subject: "english",
    class: "p5",
    topic: "Paragraph Writing",
    type: "multiText",
    minAnswers: 2,
    text: "List any two linking words you can use to join sentences smoothly.",
    acceptedSet: ["however","therefore","meanwhile","because","although","then","finally","also","moreover","besides"],
    feedback: { correct: "Good cohesive devices!", incorrect: "Examples: however, therefore, meanwhile, because, although." }
  },

  // ========== Direct & Reported Speech ==========
  {
    _id: "lp-p5-eng-dr-1",
    level: "lowerPrimary",
    subject: "english",
    class: "p5",
    topic: "Direct & Reported Speech",
    type: "choice",
    text: "Which sentence uses QUOTATION MARKS correctly?",
    options: ["\"Stop,\" said the guard.", "\"Stop\" said the guard.", "\"Stop\", said the guard"],
    correct: "\"Stop,\" said the guard.",
    feedback: { correct: "Yes—comma inside the closing quotes.", incorrect: "Punctuation goes inside the closing quotation mark." }
  },
  {
    _id: "lp-p5-eng-dr-2",
    level: "lowerPrimary",
    subject: "english",
    class: "p5",
    topic: "Direct & Reported Speech",
    type: "text",
    text: "Change to REPORTED SPEECH: Ruth said, \"I am studying.\"",
    accepted: ["Ruth said that she was studying.", "Ruth said she was studying."],
    feedback: { correct: "Good—present becomes past in reported speech.", incorrect: "Use 'said (that) she was studying'." }
  },
  {
    _id: "lp-p5-eng-dr-3",
    level: "lowerPrimary",
    subject: "english",
    class: "p5",
    topic: "Direct & Reported Speech",
    type: "text",
    text: "Rewrite using the word GIVEN (use 'asked'): The teacher said to Tom, \"Close the door.\"",
    accepted: ["The teacher asked Tom to close the door."],
    feedback: { correct: "Great—use 'asked ... to + verb'.", incorrect: "Use an infinitive after 'asked' → 'asked Tom to close…'." }
  },
  {
    _id: "lp-p5-eng-dr-4",
    level: "lowerPrimary",
    subject: "english",
    class: "p5",
    topic: "Direct & Reported Speech",
    type: "choice",
    text: "Select the correctly punctuated dialogue.",
    options: ["“Where are you?” she asked.", "“Where are you”? she asked.", "“Where are you, she asked?”"],
    correct: "“Where are you?” she asked.",
    feedback: { correct: "Correct punctuation.", incorrect: "Question mark inside the quotes; tag outside." }
  },

  // ========== Punctuation Advanced ==========
  {
    _id: "lp-p5-eng-pu-1a",
    level: "lowerPrimary",
    subject: "english",
    class: "p5",
    topic: "Punctuation Advanced",
    type: "text",
    text: "Insert a COMMA where needed: 'After washing our hands we entered the lab.'",
    accepted: ["After washing our hands, we entered the lab."],
    feedback: { correct: "Yes—introductory phrase takes a comma.", incorrect: "Add a comma after the introductory phrase." }
  },
  {
    _id: "lp-p5-eng-pu-2a",
    level: "lowerPrimary",
    subject: "english",
    class: "p5",
    topic: "Punctuation Advanced",
    type: "choice",
    text: "Choose the sentence with a COLON used correctly.",
    options: ["Bring these items: soap, a towel, and water.", "Bring: these items soap, a towel, and water.", "Bring these: items soap, a towel, and water."],
    correct: "Bring these items: soap, a towel, and water.",
    feedback: { correct: "Exactly!", incorrect: "Use a colon after a complete clause to introduce a list." }
  },
  {
    _id: "lp-p5-eng-pu-3a",
    level: "lowerPrimary",
    subject: "english",
    class: "p5",
    topic: "Punctuation Advanced",
    type: "choice",
    text: "Select the sentence with the APOSTROPHE used for POSSESSION.",
    options: ["Sarah's book is new.", "Sarahs book is new.", "Sarahs' book is new."],
    correct: "Sarah's book is new.",
    feedback: { correct: "Right—apostrophe + s shows possession.", incorrect: "Use apostrophe before s for singular possession." }
  },
  {
    _id: "lp-p5-eng-pu-4a",
    level: "lowerPrimary",
    subject: "english",
    class: "p5",
    topic: "Punctuation Advanced",
    type: "text",
    text: "Add quotation marks correctly: ___ Please sit down, said the nurse. ___",
    accepted: ["“Please sit down,” said the nurse."],
    feedback: { correct: "Perfect.", incorrect: "Put quotes around the exact words spoken; comma before the tag." }
  },

  // ========== Prefixes & Suffixes ==========
  {
    _id: "lp-p5-eng-ps-1",
    level: "lowerPrimary",
    subject: "english",
    class: "p5",
    topic: "Prefixes & Suffixes",
    type: "choice",
    text: "Add a PREFIX to make the opposite of 'possible'.",
    options: ["impossible", "unpossible", "dispossible"],
    correct: "impossible",
    feedback: { correct: "Yes—'im-' fits before 'p' words.", incorrect: "Use 'im-' before words beginning with 'p' or 'm'." }
  },
  {
    _id: "lp-p5-eng-ps-2",
    level: "lowerPrimary",
    subject: "english",
    class: "p5",
    topic: "Prefixes & Suffixes",
    type: "choice",
    text: "Choose the correct SUFFIX to make a noun: 'teach ___'.",
    options: ["-er", "-ful", "-ly"],
    correct: "-er",
    feedback: { correct: "Teacher is the noun form.", incorrect: "Add '-er' to form the agent noun." }
  },
  {
    _id: "lp-p5-eng-ps-3",
    level: "lowerPrimary",
    subject: "english",
    class: "p5",
    topic: "Prefixes & Suffixes",
    type: "text",
    text: "Form a new word with a PREFIX meaning 'not' from 'honest'.",
    accepted: ["dishonest"],
    feedback: { correct: "Yes—'dishonest'.", incorrect: "Use 'dis-' with 'honest'." }
  },
  {
    _id: "lp-p5-eng-ps-4",
    level: "lowerPrimary",
    subject: "english",
    class: "p5",
    topic: "Prefixes & Suffixes",
    type: "text",
    text: "Add a SUFFIX to 'hope' to make an adjective that means 'full of hope'.",
    accepted: ["hopeful"],
    feedback: { correct: "Correct—'hopeful'.", incorrect: "Add '-ful' to form an adjective." }
  },

  // ========== Comprehension (Longer) ==========
  {
    _id: "lp-p5-eng-rc-1a",
    level: "lowerPrimary",
    subject: "english",
    class: "p5",
    topic: "Comprehension (Longer)",
    type: "choice",
    text: "Read a short passage (teacher-provided). Which sentence best shows the MAIN IDEA?",
    options: ["A general statement covering the whole passage", "A small detail", "An example only"],
    correct: "A general statement covering the whole passage",
    feedback: { correct: "Yes—main idea is the overall point.", incorrect: "Main idea is not a tiny detail or just an example." }
  },
  {
    _id: "lp-p5-eng-rc-2a",
    level: "lowerPrimary",
    subject: "english",
    class: "p5",
    topic: "Comprehension (Longer)",
    type: "text",
    text: "From the passage, write ONE reason why the family visited the market.",
    accepted: [],
    feedback: { correct: "Reason correctly lifted from the text.", incorrect: "Find a stated reason from the passage." }
  },
  {
    _id: "lp-p5-eng-rc-3a",
    level: "lowerPrimary",
    subject: "english",
    class: "p5",
    topic: "Comprehension (Longer)",
    type: "choice",
    text: "Which word from the passage is CLOSEST in meaning to 'purchase'?",
    options: ["buy", "carry", "borrow"],
    correct: "buy",
    feedback: { correct: "Correct—purchase = buy.", incorrect: "Look for a synonym in context." }
  },
  {
    _id: "lp-p5-eng-rc-4a",
    level: "lowerPrimary",
    subject: "english",
    class: "p5",
    topic: "Comprehension (Longer)",
    type: "text",
    text: "Write one sentence from the passage that shows TIME ORDER (sequence).",
    accepted: [],
    feedback: { correct: "Good—signals like 'first/then/finally'.", incorrect: "Find a line showing order (e.g., first, then, after that)." }
  },

  // ========== Functional & Sentence Transformation ==========
  {
    _id: "lp-p5-eng-fn-1",
    level: "lowerPrimary",
    subject: "english",
    class: "p5",
    topic: "Paragraph Writing",
    type: "multiText",
    minAnswers: 2,
    text: "Rewrite each sentence using the word in brackets WITHOUT changing the meaning: (i) The shop is cheap. It is clean. (although) (ii) 'Open the window,' the nurse said to me. (told)",
    acceptedSet: [
      "Although the shop is cheap, it is clean.",
      "The nurse told me to open the window."
    ],
    feedback: { correct: "Great transformations!", incorrect: "Use 'although' for contrast and 'told + object + to + verb' for commands." }
  },
  {
    _id: "lp-p5-eng-fn-2",
    level: "lowerPrimary",
    subject: "english",
    class: "p5",
    topic: "Direct & Reported Speech",
    type: "text",
    text: "Change to REPORTED SPEECH: \"We have finished our homework,\" the boys said.",
    accepted: ["The boys said that they had finished their homework.", "The boys said they had finished their homework."],
    feedback: { correct: "Yes—present perfect becomes past perfect.", incorrect: "Use 'had finished' in reported speech." }
  },
  {
    _id: "lp-p5-eng-fn-3",
    level: "lowerPrimary",
    subject: "english",
    class: "p5",
    topic: "Vocabulary & Idioms",
    type: "choice",
    text: "Choose the best conjunction: 'He was tired, ____ he continued working.'",
    options: ["yet", "so", "because"],
    correct: "yet",
    feedback: { correct: "Correct—'yet' shows contrast.", incorrect: "We need a contrast linker here." }
  },
  {
    _id: "lp-p5-eng-fn-4",
    level: "lowerPrimary",
    subject: "english",
    class: "p5",
    topic: "Functional writing",
    type: "multiText",
    minAnswers: 3,
    text: "Write three items (with units) you would include on a simple shopping list for porridge.",
    acceptedSet: ["2 kg maize flour","1 kg sugar","1 tin milk","salt 0.5 kg","matches 1 box","1 bar soap"], // flexible; teacher can accept similar
    feedback: { correct: "Practical list!", incorrect: "Include item + quantity/units (e.g., '2 kg maize flour')." }
  }
];

