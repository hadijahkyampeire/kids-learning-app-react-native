import { type Question } from "../../../../types";

export const topClassReligionQuestions: Question[] = [
  // Basic Islamic Knowledge (6 questions)
  {
    _id: "tp-rel-ik-1",
    level: "preSchool",
    subject: "religion",
    class: "top",
    topic: "Islamic Knowledge",
    text: "Who is our Creator? 🌟",
    options: ["Allah ☪️", "Angels �", "Humans �"],
    correct: "Allah ☪️",
    feedback: { correct: "Yes! Allah is our Creator and the Creator of everything ☪️", incorrect: "Remember Allah created everything in the universe 🌟" }
  },
  {
    _id: "tp-rel-ik-2",
    level: "preSchool",
    subject: "religion",
    class: "top",
    topic: "Islamic Knowledge",
    text: "What is our holy book called? �",
    options: ["Quran 📗", "Magazine �", "Story book �"],
    correct: "Quran 📗",
    feedback: { correct: "Yes! The Quran is Allah's words and our holy book �", incorrect: "Think about the book Muslims read to learn Allah's words 💭" }
  },
  {
    _id: "tp-rel-ik-3",
    level: "preSchool",
    subject: "religion",
    class: "top",
    topic: "Islamic Knowledge",
    text: "Who was the last Prophet? 🌟",
    options: ["Muhammad ﷺ �", "Ibrahim (AS) �️", "Musa (AS) �"],
    correct: "Muhammad ﷺ �",
    feedback: { correct: "Yes! Prophet Muhammad ﷺ was the final messenger of Allah 💚", incorrect: "Remember who brought us the Quran 💭" }
  },
  {
    _id: "tp-rel-gv-4",
    level: "preSchool",
    subject: "religion",
    class: "top",
    topic: "Good Values",
    text: "How should we treat animals? 🐾",
    options: ["With kindness 💗", "Roughly 😠", "Ignore them 🙈"],
    correct: "With kindness 💗",
    feedback: { correct: "Yes! Being kind to animals shows compassion 💝", incorrect: "Think about gentle treatment 🤗" }
  },
  {
    _id: "tp-rel-gv-5",
    level: "preSchool",
    subject: "religion",
    class: "top",
    topic: "Good Values",
    text: "What should we do with our toys? 🧸",
    options: ["Share them 🤝", "Keep all 😤", "Break them 💔"],
    correct: "Share them 🤝",
    feedback: { correct: "Yes! Sharing shows generosity 💝", incorrect: "Think about being generous with others 💭" }
  },
  {
    _id: "tp-rel-gv-6",
    level: "preSchool",
    subject: "religion",
    class: "top",
    topic: "Good Values",
    text: "How should we speak to others? 🗣️",
    options: ["Kindly 💝", "Loudly 📢", "Rudely 😠"],
    correct: "Kindly 💝",
    feedback: { correct: "Yes! Speaking kindly shows respect 🙏", incorrect: "Think about using nice words 💭" }
  },

  // Islamic Practices (6 questions)
  {
    _id: "tp-rel-ip-1",
    level: "preSchool",
    subject: "religion",
    class: "top",
    topic: "Islamic Practices",
    text: "What do we do before praying? 🤲",
    options: ["Wudu 💧", "Sleep 😴", "Play �"],
    correct: "Wudu 💧",
    feedback: { correct: "Yes! We must make wudu (ablution) before praying �", incorrect: "Think about how we clean ourselves before prayer 🤲" }
  },
  {
    _id: "tp-rel-ip-2",
    level: "preSchool",
    subject: "religion",
    class: "top",
    topic: "Islamic Practices",
    text: "What do we say before eating? 🍽️",
    options: ["Bismillah ☪️", "Nothing 🤫", "Thank you 🙏"],
    correct: "Bismillah ☪️",
    feedback: { correct: "Yes! We say 'Bismillah' before eating to get Allah's blessings 🤲", incorrect: "Remember the dua before meals 💭" }
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
    feedback: { correct: "Yes! We should be respectful in holy places 🙏", incorrect: "Think about showing respect 💭" }
  },
  {
    _id: "tp-rel-pw-4",
    level: "preSchool",
    subject: "religion",
    class: "top",
    topic: "Prayer and Worship",
    text: "What can we thank God for? 🌟",
    options: ["Everything 💝", "Nothing ❌", "Only toys 🎮"],
    correct: "Everything 💝",
    feedback: { correct: "Yes! We can thank God for all blessings 🙏", incorrect: "Think about all good things in life 💭" }
  },
  {
    _id: "tp-rel-pw-5",
    level: "preSchool",
    subject: "religion",
    class: "top",
    topic: "Prayer and Worship",
    text: "Who should we pray for? 🙏",
    options: ["Everyone 💝", "Only me 👤", "Nobody ❌"],
    correct: "Everyone 💝",
    feedback: { correct: "Yes! We can pray for all people 🌟", incorrect: "Think about caring for others 💭" }
  },
  {
    _id: "tp-rel-pw-6",
    level: "preSchool",
    subject: "religion",
    class: "top",
    topic: "Prayer and Worship",
    text: "What makes a good prayer? 🙏",
    options: ["Love and faith 💝", "Many words 📝", "Being loud 📢"],
    correct: "Love and faith 💝",
    feedback: { correct: "Yes! Prayers come from our heart 💝", incorrect: "Think about sincere prayers 💭" }
  },

  // Islamic Stories (6 questions)
  {
    _id: "tp-rel-is-1",
    level: "preSchool",
    subject: "religion",
    class: "top",
    topic: "Islamic Stories",
    text: "Which Prophet built a big boat? 🚢",
    options: ["Nuh (AS) �", "Ibrahim (AS) �️", "Musa (AS) 📜"],
    correct: "Nuh (AS) �",
    feedback: { correct: "Yes! Prophet Nuh (AS) built an ark by Allah's command 🚢", incorrect: "Think about the flood story in the Quran 💭" }
  },
  {
    _id: "tp-rel-rs-2",
    level: "preSchool",
    subject: "religion",
    class: "top",
    topic: "Religious Stories",
    text: "Who was the boy who fought a giant? 💪",
    options: ["David 👑", "Noah 🌈", "Joseph 🌟"],
    correct: "David 👑",
    feedback: { correct: "Yes! David defeated Goliath 💪", incorrect: "Think about bravery with God's help 💭" }
  },
  {
    _id: "tp-rel-rs-3",
    level: "preSchool",
    subject: "religion",
    class: "top",
    topic: "Religious Stories",
    text: "Who led people through the sea? 🌊",
    options: ["Moses 📜", "Noah 🌈", "David 👑"],
    correct: "Moses 📜",
    feedback: { correct: "Yes! Moses led people through the Red Sea 🌊", incorrect: "Think about the Exodus story 💭" }
  },
  {
    _id: "tp-rel-rs-4",
    level: "preSchool",
    subject: "religion",
    class: "top",
    topic: "Religious Stories",
    text: "Who had a coat of many colors? 🌈",
    options: ["Joseph 🌟", "David 👑", "Noah 🚢"],
    correct: "Joseph 🌟",
    feedback: { correct: "Yes! Joseph had a special colorful coat 🌈", incorrect: "Think about the brother with the special coat 💭" }
  },
  {
    _id: "tp-rel-rs-5",
    level: "preSchool",
    subject: "religion",
    class: "top",
    topic: "Religious Stories",
    text: "Who was in the lions' den? 🦁",
    options: ["Daniel 🙏", "Moses 📜", "David 👑"],
    correct: "Daniel 🙏",
    feedback: { correct: "Yes! Daniel was protected from lions 🦁", incorrect: "Think about faith in danger 💭" }
  },
  {
    _id: "tp-rel-rs-6",
    level: "preSchool",
    subject: "religion",
    class: "top",
    topic: "Religious Stories",
    text: "Who found baby Moses? 👶",
    options: ["Princess 👸", "Queen 👑", "Shepherd 🐑"],
    correct: "Princess 👸",
    feedback: { correct: "Yes! A princess found Moses in the river 👶", incorrect: "Think about who saved baby Moses 💭" }
  },

  // Islamic Manners (6 questions)
  {
    _id: "tp-rel-im-1",
    level: "preSchool",
    subject: "religion",
    class: "top",
    topic: "Islamic Manners",
    text: "Which hand should we eat with? 🍽️",
    options: ["Right hand �", "Left hand �", "Any hand 🤝"],
    correct: "Right hand �",
    feedback: { correct: "Yes! Muslims eat with the right hand as taught by Prophet Muhammad ﷺ �", incorrect: "Remember the Sunnah way of eating 🍽️" }
  },
  {
    _id: "tp-rel-bg-2",
    level: "preSchool",
    subject: "religion",
    class: "top",
    topic: "Being Good",
    text: "What should we do with food? 🍎",
    options: ["Be grateful 🙏", "Waste it 🗑️", "Throw it 👎"],
    correct: "Be grateful 🙏",
    feedback: { correct: "Yes! We should be thankful for food 💝", incorrect: "Think about appreciating blessings 💭" }
  },
  {
    _id: "tp-rel-bg-3",
    level: "preSchool",
    subject: "religion",
    class: "top",
    topic: "Being Good",
    text: "How should we treat nature? 🌳",
    options: ["Care for it 💚", "Destroy it 💔", "Ignore it 🙈"],
    correct: "Care for it 💚",
    feedback: { correct: "Yes! We should care for God's creation 🌱", incorrect: "Think about protecting nature 💭" }
  },
  {
    _id: "tp-rel-bg-4",
    level: "preSchool",
    subject: "religion",
    class: "top",
    topic: "Being Good",
    text: "What makes God happy? 😊",
    options: ["Good deeds 💝", "Being mean 😠", "Being selfish 😤"],
    correct: "Good deeds 💝",
    feedback: { correct: "Yes! Doing good makes God happy 🌟", incorrect: "Think about pleasing actions 💭" }
  },
  {
    _id: "tp-rel-bg-5",
    level: "preSchool",
    subject: "religion",
    class: "top",
    topic: "Being Good",
    text: "How should we treat friends? 👥",
    options: ["With love 💝", "Be mean 😠", "Ignore them 🙈"],
    correct: "With love 💝",
    feedback: { correct: "Yes! Treating friends with love is good 🤗", incorrect: "Think about friendship 💭" }
  },
  {
    _id: "tp-rel-bg-6",
    level: "preSchool",
    subject: "religion",
    class: "top",
    topic: "Being Good",
    text: "What should we do when we're blessed? 🌟",
    options: ["Share blessings 🤝", "Keep all 😤", "Brag about it 😏"],
    correct: "Share blessings 🤝",
    feedback: { correct: "Yes! Sharing our blessings is good 💝", incorrect: "Think about being generous 💭" }
  }
];