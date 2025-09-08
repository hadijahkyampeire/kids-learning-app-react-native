import type { Question } from "src/types";

export const topClassReligionQuestions: Question[] = [
  // Basic Islamic Knowledge
  {
    _id: "tp-rel-ik-1",
    level: "preSchool",
    subject: "religion",
    class: "top",
    topic: "Islamic Knowledge",
    text: "Who is our Creator? 🌟",
    options: ["Allah ☪️", "Angels 👼", "Humans 👥"],
    correct: "Allah ☪️",
    type: "choice",
    feedback: { correct: "Yes! Allah is our Creator and the Creator of everything ☪️", incorrect: "Remember Allah created everything in the universe 🌟" }
  },
  {
    _id: "tp-rel-ik-2",
    level: "preSchool",
    subject: "religion",
    class: "top",
    topic: "Islamic Knowledge",
    text: "What is our holy book called? 📗",
    options: ["Magazine 📰", "Story book 📘", "Quran 📗"],
    correct: "Quran 📗",
    type: "choice",
    feedback: { correct: "Yes! The Quran is Allah'\''s words and our holy book 📗", incorrect: "Think about the book Muslims read to learn Allah'\''s words 💭" }
  },
  {
    _id: "tp-rel-ik-3",
    level: "preSchool",
    subject: "religion",
    class: "top",
    topic: "Islamic Knowledge",
    text: "What are important aspects of our faith? Select all that apply 🌟",
    options: ["Prayer 🤲", "Kindness 💝", "Fasting 🌙", "Fighting 👊", "Being mean 😠"],
    correct: ["Prayer 🤲", "Kindness 💝", "Fasting 🌙"],
    type: "multiChoice",
    feedback: { correct: "Yes! These are important parts of our faith ☪️", incorrect: "Think about what Islam teaches us to do 💭" }
  },
  {
    _id: "tp-rel-ik-4",
    level: "preSchool",
    subject: "religion",
    class: "top",
    topic: "Islamic Knowledge",
    text: "Who was the last Prophet? 🌟",
    options: ["Muhammad ﷺ 🕌", "Ibrahim (AS) 🕊️", "Musa (AS) 📜"],
    correct: "Muhammad ﷺ 🕌",
    type: "choice",
    feedback: { correct: "Yes! Prophet Muhammad ﷺ was the final messenger of Allah 💚", incorrect: "Remember who brought us the Quran 💭" }
  },

  // Good Values
  {
    _id: "tp-rel-gv-1",
    level: "preSchool",
    subject: "religion",
    class: "top",
    topic: "Good Values",
    text: "What are good ways to treat animals? Select all that apply 🐾",
    options: ["Feed them 🍲", "Be gentle 💗", "Give water 💧", "Hit them 😠", "Ignore them 🙈"],
    correct: ["Feed them 🍲", "Be gentle 💗", "Give water 💧"],
    type: "multiChoice",
    feedback: { correct: "Yes! These are all kind ways to treat animals 💝", incorrect: "Think about how to be gentle and caring 🤗" }
  },
  {
    _id: "tp-rel-gv-2",
    level: "preSchool",
    subject: "religion",
    class: "top",
    topic: "Good Values",
    text: "What should we do with our toys? 🧸",
    options: ["Break them 💔", "Share them 🤝", "Keep all 😤"],
    correct: "Share them 🤝",
    type: "choice",
    feedback: { correct: "Yes! Sharing shows generosity 💝", incorrect: "Think about being generous with others 💭" }
  },
  {
    _id: "tp-rel-gv-3",
    level: "preSchool",
    subject: "religion",
    class: "top",
    topic: "Good Values",
    text: "How should we speak to others? 🗣️",
    options: ["Kindly 💝", "Loudly 📢", "Rudely 😠"],
    correct: "Kindly 💝",
    type: "choice",
    feedback: { correct: "Yes! Speaking kindly shows respect 🙏", incorrect: "Think about using nice words 💭" }
  },

  // Prayer and Worship
  {
    _id: "tp-rel-pw-1",
    level: "preSchool",
    subject: "religion",
    class: "top",
    topic: "Prayer and Worship",
    text: "What do we do before praying? 🤲",
    options: ["Wudu 💧", "Sleep 😴", "Play 🎮"],
    correct: "Wudu 💧",
    type: "choice",
    feedback: { correct: "Yes! We must make wudu (ablution) before praying 🤲", incorrect: "Think about how we clean ourselves before prayer 🤲" }
  },
  {
    _id: "tp-rel-pw-2",
    level: "preSchool",
    subject: "religion",
    class: "top",
    topic: "Prayer and Worship",
    text: "What blessings can we thank Allah for? Select all that apply 🌟",
    options: ["Family 👪", "Food 🍽", "Health 💚", "Friends 👥", "Toys 🎮"],
    correct: ["Family 👪", "Food 🍽", "Health 💚", "Friends 👥", "Toys 🎮"],
    type: "multiChoice",
    feedback: { correct: "Yes! We can thank Allah for all these blessings 🙏", incorrect: "Think about all the good things in your life 💭" }
  },
  {
    _id: "tp-rel-pw-3",
    level: "preSchool",
    subject: "religion",
    class: "top",
    topic: "Prayer and Worship",
    text: "How should we act in a place of worship? 🏛️",
    options: ["Quietly 🤫", "Loudly 📢", "Running 🏃"],
    correct: "Quietly 🤫",
    type: "choice",
    feedback: { correct: "Yes! We should be respectful in holy places 🙏", incorrect: "Think about showing respect 💭" }
  },

  // Islamic Stories
  {
    _id: "tp-rel-is-1",
    level: "preSchool",
    subject: "religion",
    class: "top",
    topic: "Islamic Stories",
    text: "Which Prophet built a big boat? 🚢",
    options: ["Nuh (AS) 🚢", "Ibrahim (AS) 🕌", "Musa (AS) 📜"],
    correct: "Nuh (AS) 🚢",
    type: "choice",
    feedback: { correct: "Yes! Prophet Nuh (AS) built an ark by Allah'\''s command 🚢", incorrect: "Think about the flood story in the Quran 💭" }
  },
  {
    _id: "tp-rel-is-2",
    level: "preSchool",
    subject: "religion",
    class: "top",
    topic: "Islamic Stories",
    text: "Who was the boy who fought a giant? 💪",
    options: ["David 👑", "Noah 🌈", "Joseph 🌟"],
    correct: "David 👑",
    type: "choice",
    feedback: { correct: "Yes! David defeated Goliath 💪", incorrect: "Think about bravery with God'\''s help 💭" }
  },
  {
    _id: "tp-rel-is-3",
    level: "preSchool",
    subject: "religion",
    class: "top",
    topic: "Islamic Stories",
    text: "Who led people through the sea? 🌊",
    options: ["Musa (AS) 📜", "Nuh (AS) 🚢", "Dawood (AS) 👑"],
    correct: "Musa (AS) 📜",
    type: "choice",
    feedback: { correct: "Yes! Prophet Musa (AS) led people through the Red Sea 🌊", incorrect: "Think about the Exodus story 💭" }
  },

  // Islamic Manners
  {
    _id: "tp-rel-im-1",
    level: "preSchool",
    subject: "religion",
    class: "top",
    topic: "Islamic Manners",
    text: "What do we say before eating? 🍽️",
    options: ["Bismillah ☪️", "Nothing 🤫", "Thank you 🙏"],
    correct: "Bismillah ☪️",
    type: "choice",
    feedback: { correct: "Yes! We say '\''Bismillah'\'' before eating to get Allah'\''s blessings 🤲", incorrect: "Remember the dua before meals 💭" }
  },
  {
    _id: "tp-rel-im-2",
    level: "preSchool",
    subject: "religion",
    class: "top",
    topic: "Islamic Manners",
    text: "Which hand should we eat with? 🍽️",
    options: ["Any hand 🤝", "Right hand 🤚", "Left hand 👈"],
    correct: "Right hand 🤚",
    type: "choice",
    feedback: { correct: "Yes! Muslims eat with the right hand as taught by Prophet Muhammad ﷺ 🍽️", incorrect: "Remember the Sunnah way of eating 🍽️" }
  },
  {
    _id: "tp-rel-im-3",
    level: "preSchool",
    subject: "religion",
    class: "top",
    topic: "Islamic Manners",
    text: "What are good Islamic manners? Select all that apply 🤝",
    options: ["Say Salam 👋", "Say please 🙏", "Say thank you 💝", "Be rude 😠", "Ignore others 🙈"],
    correct: ["Say Salam 👋", "Say please 🙏", "Say thank you 💝"],
    type: "multiChoice",
    feedback: { correct: "Yes! These are all good Islamic manners 💝", incorrect: "Think about being polite and kind 🤗" }
  }
];
