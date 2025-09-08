import type { Question } from "../../../../types";

export const p7Religion: Question[] = [
  // ——— Hajj ———
  {
    _id: "up-p7-re-h-001",
    level: "upperPrimary",
    subject: "religion",
    class: "p7",
    topic: "Hajj",
    type: "choice",
    text: "Circling the Kaaba seven times is ____.",
    options: ["Tawaf", "Sa'i", "Takbir"],
    correct: "Tawaf",
    feedback: { correct: "Correct!", incorrect: "It's called Tawaf." }
  },
  {
    _id: "up-p7-re-h-002",
    level: "upperPrimary",
    subject: "religion",
    class: "p7",
    topic: "Hajj",
    type: "choice",
    text: "Walking between Safa and Marwah is ____.",
    options: ["Sa'i", "Tawaf", "Ruku"],
    correct: "Sa'i",
    feedback: { correct: "Correct!", incorrect: "That rite is Sa'i." }
  },
  {
    _id: "up-p7-re-h-003",
    level: "upperPrimary",
    subject: "religion",
    class: "p7",
    topic: "Hajj",
    type: "choice",
    text: "The day of standing at ____ is the most important part.",
    options: ["Arafat", "Mina", "Muzdalifah"],
    correct: "Arafat",
    feedback: { correct: "Correct!", incorrect: "Standing at Arafat is essential." }
  },
  {
    _id: "up-p7-re-h-004",
    level: "upperPrimary",
    subject: "religion",
    class: "p7",
    topic: "Hajj",
    type: "fill-in",
    text: "Ihram refers to special ____ worn during Hajj.",
    correct: "/^clothing$|^garments?$|^dress$/i",
    feedback: { correct: "Correct!", incorrect: "Answer: clothing/garments." }
  },
  {
    _id: "up-p7-re-h-005",
    level: "upperPrimary",
    subject: "religion",
    class: "p7",
    topic: "Hajj",
    type: "fill-in",
    text: "Hajj takes place in the month of ____.",
    correct: "/^dhul?\\s*hij+ah?$/i",
    feedback: { correct: "Correct!", incorrect: "Answer: Dhul Hijjah." }
  },
  {
    _id: "up-p7-re-h-006",
    level: "upperPrimary",
    subject: "religion",
    class: "p7",
    topic: "Hajj",
    type: "fill-in",
    text: "Stoning the pillars in Mina is called ____ al-Jamarat.",
    correct: "/^ramy$/i",
    feedback: { correct: "Correct!", incorrect: "Answer: Ramy (al-Jamarat)." }
  },
  {
    _id: "up-p7-re-h-007",
    level: "upperPrimary",
    subject: "religion",
    class: "p7",
    topic: "Hajj",
    type: "fill-in",
    text: "After Hajj, Muslims may perform animal ____.",
    correct: "/^sacrifice$|^udhiy(y?)ah$/i",
    feedback: { correct: "Correct!", incorrect: "Answer: sacrifice (udhiyah/qurbani)." }
  },

  // ——— Fasting ———
  {
    _id: "up-p7-re-f-001",
    level: "upperPrimary",
    subject: "religion",
    class: "p7",
    topic: "Fasting",
    type: "choice",
    text: "The meal to break the fast at sunset is ____.",
    options: ["Iftar", "Suhoor", "Zakat"],
    correct: "Iftar",
    feedback: { correct: "Correct!", incorrect: "Breaking fast is Iftar." }
  },
  {
    _id: "up-p7-re-f-002",
    level: "upperPrimary",
    subject: "religion",
    class: "p7",
    topic: "Fasting",
    type: "choice",
    text: "The pre-dawn meal is ____.",
    options: ["Suhoor", "Iftar", "Eid"],
    correct: "Suhoor",
    feedback: { correct: "Correct!", incorrect: "Pre-dawn meal is Suhoor." }
  },
  {
    _id: "up-p7-re-f-003",
    level: "upperPrimary",
    subject: "religion",
    class: "p7",
    topic: "Fasting",
    type: "fill-in",
    text: "Ramadan fast is from dawn to ____.",
    correct: "/^sunset$|^maghrib$/i",
    feedback: { correct: "Correct!", incorrect: "Answer: sunset (Maghrib time)." }
  },
  {
    _id: "up-p7-re-f-004",
    level: "upperPrimary",
    subject: "religion",
    class: "p7",
    topic: "Fasting",
    type: "text",
    text: "Fasting teaches ____.",
    correct: "/^self\\s*[- ]?control$|^patience$|^discipline$/i",
    feedback: { correct: "Yes.", incorrect: "Examples: self-control, patience, discipline." }
  },
  {
    _id: "up-p7-re-f-005",
    level: "upperPrimary",
    subject: "religion",
    class: "p7",
    topic: "Fasting",
    type: "fill-in",
    text: "If you are ill, you may ____ the fast.",
    correct: "/^postpone$|^make\\s*it\\s*up\\s*later$|^delay$/i",
    feedback: { correct: "Correct!", incorrect: "You may postpone and make it up later." }
  },
  {
    _id: "up-p7-re-f-006",
    level: "upperPrimary",
    subject: "religion",
    class: "p7",
    topic: "Fasting",
    type: "choice",
    text: "At the end of Ramadan, Muslims celebrate ____.",
    options: ["Eid al-Fitr", "Eid al-Adha", "Arafat"],
    correct: "Eid al-Fitr",
    feedback: { correct: "Correct!", incorrect: "End of Ramadan is Eid al-Fitr." }
  },
  {
    _id: "up-p7-re-f-007",
    level: "upperPrimary",
    subject: "religion",
    class: "p7",
    topic: "Fasting",
    type: "fill-in",
    text: "Giving to the poor during Ramadan is called ____ al-Fitr.",
    correct: "/^zakat$|^sadaqat?\\s*al\\s*fitr$/i",
    feedback: { correct: "Correct!", incorrect: "Answer: Zakat (Sadaqat) al-Fitr." }
  },

  // ——— Seerah ———
  {
    _id: "up-p7-re-s-001",
    level: "upperPrimary",
    subject: "religion",
    class: "p7",
    topic: "Seerah",
    type: "fill-in",
    text: "The Prophet ﷺ migrated from Makkah to ____.",
    correct: "/^madinah$|^al\\s*madinah$/i",
    feedback: { correct: "Correct!", incorrect: "Answer: Madinah." }
  },
  {
    _id: "up-p7-re-s-002",
    level: "upperPrimary",
    subject: "religion",
    class: "p7",
    topic: "Seerah",
    type: "fill-in",
    text: "The first revelation came in cave ____.",
    correct: "/^hira'?$/i",
    feedback: { correct: "Correct!", incorrect: "Answer: Hira." }
  },
  {
    _id: "up-p7-re-s-003",
    level: "upperPrimary",
    subject: "religion",
    class: "p7",
    topic: "Seerah",
    type: "fill-in",
    text: "The night journey is called ____ al-Isrāʾ wal-Miʿrāj.",
    correct: "/^laylat$/i",
    feedback: { correct: "Correct!", incorrect: "Answer: Laylat al-Isrāʾ wal-Miʿrāj." }
  },
  {
    _id: "up-p7-re-s-004",
    level: "upperPrimary",
    subject: "religion",
    class: "p7",
    topic: "Seerah",
    type: "fill-in",
    text: "The Prophet’s tribe was ____.",
    correct: "/^quraysh$/i",
    feedback: { correct: "Correct!", incorrect: "Answer: Quraysh." }
  },
  {
    _id: "up-p7-re-s-005",
    level: "upperPrimary",
    subject: "religion",
    class: "p7",
    topic: "Seerah",
    type: "fill-in",
    text: "The first wife of the Prophet ﷺ was ____.",
    correct: "/^khad[iī]jah$/i",
    feedback: { correct: "Correct!", incorrect: "Answer: Khadijah." }
  },
  {
    _id: "up-p7-re-s-006",
    level: "upperPrimary",
    subject: "religion",
    class: "p7",
    topic: "Seerah",
    type: "fill-in",
    text: "The city formerly called Yathrib is ____.",
    correct: "/^madinah$/i",
    feedback: { correct: "Correct!", incorrect: "Answer: Madinah." }
  },
  {
    _id: "up-p7-re-s-007",
    level: "upperPrimary",
    subject: "religion",
    class: "p7",
    topic: "Seerah",
    type: "choice",
    text: "The treaty that enabled peace with Quraysh was at ____.",
    options: ["Hudaybiyyah", "Badr", "Uhud"],
    correct: "Hudaybiyyah",
    feedback: { correct: "Correct!", incorrect: "Treaty of Hudaybiyyah." }
  },

  // ——— Values ———
  {
    _id: "up-p7-re-v-001",
    level: "upperPrimary",
    subject: "religion",
    class: "p7",
    topic: "Values",
    type: "choice",
    text: "Which value is encouraged in Islam?",
    options: ["honesty", "cheating", "greed"],
    correct: "honesty",
    feedback: { correct: "Correct!", incorrect: "Honesty is encouraged." }
  },
  {
    _id: "up-p7-re-v-002",
    level: "upperPrimary",
    subject: "religion",
    class: "p7",
    topic: "Values",
    type: "choice",
    text: "Helping neighbors shows ____.",
    options: ["kindness", "jealousy", "anger"],
    correct: "kindness",
    feedback: { correct: "Correct!", incorrect: "Helping shows kindness." }
  },
  {
    _id: "up-p7-re-v-003",
    level: "upperPrimary",
    subject: "religion",
    class: "p7",
    topic: "Values",
    type: "fill-in",
    text: "Keeping promises is part of ____.",
    correct: "/^trustworth(y|iness)$/i",
    feedback: { correct: "Correct!", incorrect: "Answer: trustworthiness." }
  },
  {
    _id: "up-p7-re-v-004",
    level: "upperPrimary",
    subject: "religion",
    class: "p7",
    topic: "Values",
    type: "fill-in",
    text: "Giving charity shows ____ for others.",
    correct: "/^care$|^compassion$|^concern$/i",
    feedback: { correct: "Correct!", incorrect: "Examples: care, compassion." }
  },
  {
    _id: "up-p7-re-v-005",
    level: "upperPrimary",
    subject: "religion",
    class: "p7",
    topic: "Values",
    type: "fill-in",
    text: "Speaking truth avoids ____.",
    correct: "/^lying$|^falsehood$/i",
    feedback: { correct: "Correct!", incorrect: "Answer: lying/falsehood." }
  },
  {
    _id: "up-p7-re-v-006",
    level: "upperPrimary",
    subject: "religion",
    class: "p7",
    topic: "Values",
    type: "fill-in",
    text: "Being patient shows good ____.",
    correct: "/^character$|^manners$/i",
    feedback: { correct: "Correct!", incorrect: "Answer: character/manners." }
  },
  {
    _id: "up-p7-re-v-007",
    level: "upperPrimary",
    subject: "religion",
    class: "p7",
    topic: "Values",
    type: "fill-in",
    text: "Respecting parents is a sign of ____.",
    correct: "/^good\\s*manners$|^obedience$|^respect$/i",
    feedback: { correct: "Correct!", incorrect: "Answer: good manners/obedience." }
  },

  // ——— Mixed: multiChoice / multiText ———
  {
    _id: "up-p7-re-mc-001",
    level: "upperPrimary",
    subject: "religion",
    class: "p7",
    topic: "Hajj",
    type: "multiChoice",
    text: "Select all actions NOT allowed while in ihram:",
    options: ["cutting hair", "hunting", "wearing perfume", "praying", "drinking water"],
    correct: ["cutting hair", "hunting", "wearing perfume"],
    feedback: { correct: "Well done.", incorrect: "Forbidden: cutting hair, hunting, wearing perfume." }
  },
  {
    _id: "up-p7-re-mc-002",
    level: "upperPrimary",
    subject: "religion",
    class: "p7",
    topic: "Hajj",
    type: "multiChoice",
    text: "Select all that are Hajj sites:",
    options: ["Arafat", "Mina", "Muzdalifah", "Taif"],
    correct: ["Arafat", "Mina", "Muzdalifah"],
    feedback: { correct: "Correct!", incorrect: "Hajj sites include Arafat, Mina, and Muzdalifah." }
  },
  {
    _id: "up-p7-re-mc-003",
    level: "upperPrimary",
    subject: "religion",
    class: "p7",
    topic: "Fasting",
    type: "multiChoice",
    text: "Who is exempt from fasting (choose all that apply)?",
    options: ["the sick", "travelers", "children", "healthy adults"],
    correct: ["the sick", "travelers", "children"],
    feedback: { correct: "Nice!", incorrect: "Exemptions include the sick, travelers, and children." }
  },
  {
    _id: "up-p7-re-mt-001",
    level: "upperPrimary",
    subject: "religion",
    class: "p7",
    topic: "Seerah",
    type: "multiText",
    text: "Complete the migration: The Prophet ﷺ moved from ____ to ____.",
    // Order matters: [from, to]
    correct: ["/^makk?ah$/i", "/^madinah$/i"],
    feedback: { correct: "Correct!", incorrect: "From Makkah to Madinah." }
  },
  {
    _id: "up-p7-re-mt-002",
    level: "upperPrimary",
    subject: "religion",
    class: "p7",
    topic: "Hajj",
    type: "multiText",
    text: "Name the two hills used for Sa'i: ____ and ____.",
    // Order can be Safa then Marwah (standard); keep it in that order
    correct: ["/^safa$/i", "/^marwah$/i"],
    feedback: { correct: "Great!", incorrect: "They are Safa and Marwah." }
  }
];
