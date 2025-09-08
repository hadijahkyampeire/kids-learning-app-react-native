import type { Question } from "../../../../types";

export const religionP6: Question[] = [
  // -------------------------
  // PILLARS
  // -------------------------
  {
    _id: "up-p6-re-p-001",
    level: "upperPrimary",
    subject: "religion",
    class: "p6",
    topic: "Pillars",
    type: "text",
    text: "How many pillars of Islam are there?",
    accepted: ["5", "five"],
    feedback: { correct: "Correct—there are five pillars.", incorrect: "There are 5 pillars of Islam." }
  },
  {
    _id: "up-p6-re-p-002",
    level: "upperPrimary",
    subject: "religion",
    class: "p6",
    topic: "Pillars",
    type: "choice",
    text: "Zakat is mainly about ____.",
    options: ["giving charity", "fasting", "pilgrimage"],
    correct: "giving charity",
    feedback: { correct: "Correct!", incorrect: "Zakat is the pillar of giving charity." }
  },
  {
    _id: "up-p6-re-p-003",
    level: "upperPrimary",
    subject: "religion",
    class: "p6",
    topic: "Pillars",
    type: "choice",
    text: "Shahada is the declaration of ____.",
    options: ["faith", "wealth", "speed"],
    correct: "faith",
    feedback: { correct: "Correct!", incorrect: "Shahada is the declaration of faith." }
  },
  {
    _id: "up-p6-re-p-004",
    level: "upperPrimary",
    subject: "religion",
    class: "p6",
    topic: "Pillars",
    type: "text",
    text: "Sawm means ____ in Ramadan.",
    accepted: ["fasting"],
    feedback: { correct: "Yes—Sawm means fasting.", incorrect: "Sawm means fasting." }
  },
  {
    _id: "up-p6-re-p-005",
    level: "upperPrimary",
    subject: "religion",
    class: "p6",
    topic: "Pillars",
    type: "text",
    text: "Hajj is the pilgrimage to ____.",
    accepted: ["makkah", "mecca"],
    feedback: { correct: "Correct—Hajj is to Makkah.", incorrect: "The answer is Makkah (Mecca)." }
  },
  {
    _id: "up-p6-re-p-006",
    level: "upperPrimary",
    subject: "religion",
    class: "p6",
    topic: "Pillars",
    type: "text",
    text: "Salah is performed ____ times a day.",
    accepted: ["5", "five"],
    feedback: { correct: "Correct—five daily prayers.", incorrect: "Muslims pray 5 times a day." }
  },
  {
    _id: "up-p6-re-p-007",
    level: "upperPrimary",
    subject: "religion",
    class: "p6",
    topic: "Pillars",
    type: "text",
    text: "Zakat helps the ____.",
    accepted: ["needy", "poor"],
    feedback: { correct: "Yes—Zakat supports the needy.", incorrect: "It helps the needy (poor)." }
  },

  // -------------------------
  // WORSHIP
  // -------------------------
  {
    _id: "up-p6-re-w-001",
    level: "upperPrimary",
    subject: "religion",
    class: "p6",
    topic: "Worship",
    type: "text",
    text: "Muslims pray in a ____.",
    accepted: ["mosque", "masjid"],
    feedback: { correct: "Correct!", incorrect: "They pray in a mosque (masjid)." }
  },
  {
    _id: "up-p6-re-w-002",
    level: "upperPrimary",
    subject: "religion",
    class: "p6",
    topic: "Worship",
    type: "text",
    text: "The Friday congregational prayer is ____.",
    accepted: ["jumu'ah", "jummah", "jumuah", "jummuah"],
    feedback: { correct: "Good!", incorrect: "It is called Jumu'ah." }
  },
  {
    _id: "up-p6-re-w-003",
    level: "upperPrimary",
    subject: "religion",
    class: "p6",
    topic: "Worship",
    type: "text",
    text: "Before prayer, Muslims perform ____ (washing).",
    accepted: ["wudu", "wudhu", "ablution"],
    feedback: { correct: "Correct—this is wudu.", incorrect: "It is called wudu (ablution)." }
  },
  {
    _id: "up-p6-re-w-004",
    level: "upperPrimary",
    subject: "religion",
    class: "p6",
    topic: "Worship",
    type: "text",
    text: "Fajr prayer is performed at ____.",
    accepted: ["dawn", "before sunrise", "early morning"],
    feedback: { correct: "Yes—at dawn.", incorrect: "Fajr is prayed at dawn (before sunrise)." }
  },
  {
    _id: "up-p6-re-w-005",
    level: "upperPrimary",
    subject: "religion",
    class: "p6",
    topic: "Worship",
    type: "text",
    text: "Facing the Kaaba during prayer is called the ____.",
    accepted: ["qibla", "qiblah"],
    feedback: { correct: "Correct—this is the qibla.", incorrect: "It is called the qibla." }
  },
  {
    _id: "up-p6-re-w-006",
    level: "upperPrimary",
    subject: "religion",
    class: "p6",
    topic: "Worship",
    type: "choice",
    text: "Saying “Allahu Akbar” marks the start of prayer with ____.",
    options: ["takbir", "tashahhud", "tasbih"],
    correct: "takbir",
    feedback: { correct: "Correct!", incorrect: "The opening is the takbir." }
  },
  {
    _id: "up-p6-re-w-007",
    level: "upperPrimary",
    subject: "religion",
    class: "p6",
    topic: "Worship",
    type: "choice",
    text: "Extra prayers in Ramadan nights are ____.",
    options: ["Taraweeh", "Eid", "Janazah"],
    correct: "Taraweeh",
    feedback: { correct: "Correct!", incorrect: "They are called Taraweeh." }
  },

  // -------------------------
  // PROPHETS  (IDs fixed as re-pr-*)
  // -------------------------
  {
    _id: "up-p6-re-pr-001",
    level: "upperPrimary",
    subject: "religion",
    class: "p6",
    topic: "Prophets",
    type: "text",
    text: "Prophet Nuh built a(n) ____.",
    accepted: ["ark"],
    feedback: { correct: "Yes—he built an ark.", incorrect: "He built an ark." }
  },
  {
    _id: "up-p6-re-pr-002",
    level: "upperPrimary",
    subject: "religion",
    class: "p6",
    topic: "Prophets",
    type: "choice",
    text: "Prophet Musa parted the ____.",
    options: ["sea", "river", "lake"],
    correct: "sea",
    feedback: { correct: "Correct!", incorrect: "He parted the sea." }
  },
  {
    _id: "up-p6-re-pr-003",
    level: "upperPrimary",
    subject: "religion",
    class: "p6",
    topic: "Prophets",
    type: "text",
    text: "Prophet Ibrahim is called Khalilullah (friend of ____).",
    accepted: ["allah", "god"],
    feedback: { correct: "Correct!", incorrect: "Friend of Allah." }
  },
  {
    _id: "up-p6-re-pr-004",
    level: "upperPrimary",
    subject: "religion",
    class: "p6",
    topic: "Prophets",
    type: "text",
    text: "Prophet Isa performed many ____.",
    accepted: ["miracles"],
    feedback: { correct: "Yes—miracles.", incorrect: "He performed many miracles." }
  },
  {
    _id: "up-p6-re-pr-005",
    level: "upperPrimary",
    subject: "religion",
    class: "p6",
    topic: "Prophets",
    type: "text",
    text: "Prophet Yusuf interpreted ____.",
    accepted: ["dreams"],
    feedback: { correct: "Correct—dreams.", incorrect: "He interpreted dreams." }
  },
  {
    _id: "up-p6-re-pr-006",
    level: "upperPrimary",
    subject: "religion",
    class: "p6",
    topic: "Prophets",
    type: "text",
    text: "Prophet Muhammad ﷺ received the Qur'an via Angel ____.",
    accepted: ["jibril", "gabriel"],
    feedback: { correct: "Correct—Angel Jibril.", incorrect: "It was Angel Jibril (Gabriel)." }
  },
  {
    _id: "up-p6-re-pr-007",
    level: "upperPrimary",
    subject: "religion",
    class: "p6",
    topic: "Prophets",
    type: "text",
    text: "The first Prophet was ____.",
    accepted: ["adam"],
    feedback: { correct: "Yes—Prophet Adam.", incorrect: "It was Prophet Adam." }
  },

  // -------------------------
  // QUR'AN
  // -------------------------
  {
    _id: "up-p6-re-q-001",
    level: "upperPrimary",
    subject: "religion",
    class: "p6",
    topic: "Qur'an",
    type: "text",
    text: "How many surahs are in the Qur’an?",
    accepted: ["114", "one hundred fourteen"],
    feedback: { correct: "Correct—114 surahs.", incorrect: "There are 114 surahs." }
  },
  {
    _id: "up-p6-re-q-002",
    level: "upperPrimary",
    subject: "religion",
    class: "p6",
    topic: "Qur'an",
    type: "text",
    text: "The Qur’an was revealed to Prophet ____.",
    accepted: ["muhammad", "prophet muhammad", "muhammad (saw)"],
    feedback: { correct: "Correct!", incorrect: "It was revealed to Prophet Muhammad ﷺ." }
  },
  {
    _id: "up-p6-re-q-003",
    level: "upperPrimary",
    subject: "religion",
    class: "p6",
    topic: "Qur'an",
    type: "text",
    text: "A chapter of the Qur’an is called a ____.",
    accepted: ["surah"],
    feedback: { correct: "Yes—surah.", incorrect: "It is called a surah." }
  },
  {
    _id: "up-p6-re-q-004",
    level: "upperPrimary",
    subject: "religion",
    class: "p6",
    topic: "Qur'an",
    type: "text",
    text: "A verse of the Qur’an is called an ____.",
    accepted: ["ayah"],
    feedback: { correct: "Correct—ayah.", incorrect: "It is called an ayah." }
  },
  {
    _id: "up-p6-re-q-005",
    level: "upperPrimary",
    subject: "religion",
    class: "p6",
    topic: "Qur'an",
    type: "text",
    text: "The first revelation came in cave ____.",
    accepted: ["hira"],
    feedback: { correct: "Yes—Cave Hira.", incorrect: "It was Cave Hira." }
  },
  {
    _id: "up-p6-re-q-006",
    level: "upperPrimary",
    subject: "religion",
    class: "p6",
    topic: "Qur'an",
    type: "text",
    text: "Muslims recite the Qur’an in the ____ language.",
    accepted: ["arabic"],
    feedback: { correct: "Correct—Arabic.", incorrect: "It is recited in Arabic." }
  },
  {
    _id: "up-p6-re-q-007",
    level: "upperPrimary",
    subject: "religion",
    class: "p6",
    topic: "Qur'an",
    type: "text",
    text: "Respecting the Qur’an includes keeping it ____.",
    accepted: ["clean"],
    feedback: { correct: "Yes—keep it clean.", incorrect: "It should be kept clean." }
  }
];
