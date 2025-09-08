import { type Question } from "../../../../types";

export const topClassGeneralKnowledgeQuestions: Question[] = [
  // World Around Us (6 questions)
  {
    _id: "tp-gk-wu-1",
    level: "preSchool",
    subject: "generalKnowledge",
    class: "top",
    topic: "World Around Us",
    text: "Which vehicles fly in the sky? Select all that apply ✈️",
    options: ["Airplane ✈️", "Helicopter 🚁", "Rocket 🚀", "Car 🚗", "Boat 🚢"],
    correct: ["Airplane ✈️", "Helicopter 🚁", "Rocket 🚀"],
    type: "multiChoice",
    feedback: { correct: "Yes! These vehicles can all fly in the sky! ✈️", incorrect: "Think about what you see up in the clouds 🤔" }
  },
  {
    _id: "tp-gk-wu-2",
    level: "preSchool",
    subject: "generalKnowledge",
    class: "top",
    topic: "World Around Us",
    text: "Who helps sick people get better? 🏥",
    options: ["Teacher 👩‍🏫", "Doctor 👨‍⚕️", "Chef 👨‍🍳"],
    correct: "Doctor 👨‍⚕️",
    type: "choice",
    feedback: { correct: "Yes! Doctors help sick people feel better 🏥", incorrect: "Think about who you see when you're not feeling well 🤒" }
  },
  {
    _id: "tp-gk-wu-3",
    level: "preSchool",
    subject: "generalKnowledge",
    class: "top",
    topic: "World Around Us",
    text: "Where do we mail letters? 📬",
    options: ["Park 🌳", "Library 📚", "Post Office 📮"],
    correct: "Post Office 📮",
    type: "choice",
    feedback: { correct: "Right! We mail letters at the post office 📬", incorrect: "Think about where the mail carrier works 📮" }
  },
  {
    _id: "tp-gk-wu-4",
    level: "preSchool",
    subject: "generalKnowledge",
    class: "top",
    topic: "World Around Us",
    text: "What do firefighters use to put out fires? 🚒",
    options: ["Paper 📔", "Water 💧", "Sand 🏖️"],
    correct: "Water 💧",
    type: "choice",
    feedback: { correct: "Yes! Firefighters use water to put out fires 🚒", incorrect: "Think about what stops fire from burning 💭" }
  },
  {
    _id: "tp-gk-wu-5",
    level: "preSchool",
    subject: "generalKnowledge",
    class: "top",
    topic: "World Around Us",
    text: "Where do we borrow books? 📚",
    options: ["Library 📚", "Restaurant 🍽️", "Beach 🏖️"],
    correct: "Library 📚",
    feedback: { correct: "Yes! We borrow books from the library 📚", incorrect: "Think about where there are lots of books to read 🤔" }
  },
  {
    _id: "tp-gk-wu-6",
    level: "preSchool",
    subject: "generalKnowledge",
    class: "top",
    topic: "World Around Us",
    text: "Who delivers our mail? 📬",
    options: ["Mail Carrier 📮", "Teacher 👩‍🏫", "Chef 👨‍🍳"],
    correct: "Mail Carrier 📮",
    type: "choice",
    feedback: { correct: "Yes! Mail carriers deliver our letters and packages 📬", incorrect: "Think about who brings letters to your home 📮" }
  },

  // Health and Safety (6 questions)
  {
    _id: "tp-gk-hs-1",
    level: "preSchool",
    subject: "generalKnowledge",
    class: "top",
    topic: "Health and Safety",
    text: "What should you do before eating? 🍽️",
    options: ["Wash hands 🧼", "Jump 🦘", "Sleep 😴"],
    correct: "Wash hands 🧼",
    feedback: { correct: "Yes! Always wash your hands before eating 🧼", incorrect: "Think about staying clean before meals 💭" }
  },
  {
    _id: "tp-gk-hs-2",
    level: "preSchool",
    subject: "generalKnowledge",
    class: "top",
    topic: "Health and Safety",
    text: "What helps keep your teeth healthy? 🦷",
    options: ["Brushing 🪥", "Dancing 💃", "Sleeping 😴"],
    correct: "Brushing 🪥",
    type: "choice",
    feedback: { correct: "Yes! Brushing keeps teeth clean and healthy 🦷", incorrect: "Think about what you do to clean your teeth 🪥" }
  },
  {
    _id: "tp-gk-hs-3",
    level: "preSchool",
    subject: "generalKnowledge",
    class: "top",
    topic: "Health and Safety",
    text: "What should you wear when riding a bike? 🚲",
    options: ["Crown 👑", "Hat 🎩", "Helmet ⛑️"],
    correct: "Helmet ⛑️",
    type: "choice",
    feedback: { correct: "Yes! Always wear a helmet when riding a bike ⛑️", incorrect: "Think about what protects your head 🤔" }
  },
  {
    _id: "tp-gk-hs-4",
    level: "preSchool",
    subject: "generalKnowledge",
    class: "top",
    topic: "Health and Safety",
    text: "What should you do when crossing the street? 🚦",
    options: ["Close eyes 😌", "Look both ways 👀", "Run fast 🏃"],
    correct: "Look both ways 👀",
    type: "choice",
    feedback: { correct: "Yes! Always look both ways before crossing 🚦", incorrect: "Think about being safe near roads 🛣️" }
  },
  {
    _id: "tp-gk-hs-5",
    level: "preSchool",
    subject: "generalKnowledge",
    class: "top",
    topic: "Health and Safety",
    text: "Which foods are healthy? Select all that apply 🍎",
    options: ["Apple 🍎", "Banana 🍌", "Carrot 🥕", "Candy 🍬", "Cake 🍰"],
    correct: ["Apple 🍎", "Banana 🍌", "Carrot 🥕"],
    type: "multiChoice",
    feedback: { correct: "Yes! These are all healthy foods that make you strong! 💪", incorrect: "Think about foods that help your body grow healthy 🤔" }
  },
  {
    _id: "tp-gk-hs-6",
    level: "preSchool",
    subject: "generalKnowledge",
    class: "top",
    topic: "Health and Safety",
    text: "What keeps us dry in the rain? ☔",
    options: ["Scarf 🧣", "Umbrella ☔", "Sunglasses 😎"],
    correct: "Umbrella ☔",
    type: "choice",
    feedback: { correct: "Yes! An umbrella keeps us dry in the rain ☔", incorrect: "Think about what we hold over our heads when it rains 🌧️" }
  },

  // Culture and Celebrations (6 questions)
  {
    _id: "tp-gk-cc-1",
    level: "preSchool",
    subject: "generalKnowledge",
    class: "top",
    topic: "Culture and Celebrations",
    text: "What do we light on birthday cakes? 🎂",
    options: ["Stars ⭐", "Candles 🕯️", "Lamps 💡"],
    correct: "Candles 🕯️",
    type: "choice",
    feedback: { correct: "Yes! We light candles on birthday cakes 🎂", incorrect: "Think about what you blow out on your birthday 🎈" }
  },
  {
    _id: "tp-gk-cc-2",
    level: "preSchool",
    subject: "generalKnowledge",
    class: "top",
    topic: "Culture and Celebrations",
    text: "What do we say when someone gives us something? 🎁",
    options: ["Thank you 🙏", "Goodbye 👋", "Hello 👋"],
    correct: "Thank you 🙏",
    type: "choice",
    feedback: { correct: "Yes! We say 'thank you' to be polite 🙏", incorrect: "Think about being grateful 💭" }
  },
  {
    _id: "tp-gk-cc-3",
    level: "preSchool",
    subject: "generalKnowledge",
    class: "top",
    topic: "Culture and Celebrations",
    text: "What do we decorate during Christmas? 🎄",
    options: ["Christmas Tree 🎄", "Beach Ball ⚽", "Book 📚"],
    correct: "Christmas Tree 🎄",
    type: "choice",
    feedback: { correct: "Yes! We decorate Christmas trees with lights and ornaments 🎄", incorrect: "Think about holiday decorations 🎅" }
  },
  {
    _id: "tp-gk-cc-4",
    level: "preSchool",
    subject: "generalKnowledge",
    class: "top",
    topic: "Culture and Celebrations",
    text: "What do we wear to stay warm in winter? ❄️",
    options: ["Coat 🧥", "Swimsuit 🩱", "Sandals 👡"],
    correct: "Coat 🧥",
    type: "choice",
    feedback: { correct: "Yes! We wear warm coats in winter 🧥", incorrect: "Think about clothes for cold weather ❄️" }
  },
  {
    _id: "tp-gk-cc-5",
    level: "preSchool",
    subject: "generalKnowledge",
    class: "top",
    topic: "Culture and Celebrations",
    text: "Which things can make music? Select all that apply 🎵",
    options: ["Guitar 🎸", "Drums 🥁", "Piano �", "Chairs 🪑", "Books 📚"],
    correct: ["Guitar 🎸", "Drums 🥁", "Piano �"],
    type: "multiChoice",
    feedback: { correct: "Yes! These are all musical instruments! 🎵", incorrect: "Think about things that make musical sounds 🎼" }
  },
  {
    _id: "tp-gk-cc-6",
    level: "preSchool",
    subject: "generalKnowledge",
    class: "top",
    topic: "Culture and Celebrations",
    text: "What do we paint with? 🎨",
    options: ["Brush 🖌️", "Fork 🍴", "Shoe 👟"],
    correct: "Brush 🖌️",
    type: "choice",
    feedback: { correct: "Yes! We use brushes to paint pictures 🎨", incorrect: "Think about art tools 🖌️" }
  },

  // Environment and Nature (6 questions)
  {
    _id: "tp-gk-en-1",
    level: "preSchool",
    subject: "generalKnowledge",
    class: "top",
    topic: "Environment and Nature",
    text: "Where do fish live? 🐠",
    options: ["Trees 🌳", "Sky ☁️", "Water 🌊"],
    correct: "Water 🌊",
    type: "choice",
    feedback: { correct: "Yes! Fish live in water 🐠", incorrect: "Think about where fish swim 🌊" }
  },
  {
    _id: "tp-gk-en-2",
    level: "preSchool",
    subject: "generalKnowledge",
    class: "top",
    topic: "Environment and Nature",
    text: "What helps plants grow? 🌱",
    options: ["Water and Sun 💧☀️", "TV 📺", "Books 📚"],
    correct: "Water and Sun 💧☀️",
    type: "choice",
    feedback: { correct: "Yes! Plants need water and sunlight to grow 🌱", incorrect: "Think about what gardens need 🌺" }
  },
  {
    _id: "tp-gk-en-3",
    level: "preSchool",
    subject: "generalKnowledge",
    class: "top",
    topic: "Environment and Nature",
    text: "Where do birds make their homes? 🐦",
    options: ["Books 📚", "Nests 🪹", "Cars 🚗"],
    correct: "Nests 🪹",
    type: "choice",
    feedback: { correct: "Yes! Birds build nests for their homes 🐦", incorrect: "Think about where birds lay eggs 🥚" }
  },
  {
    _id: "tp-gk-en-4",
    level: "preSchool",
    subject: "generalKnowledge",
    class: "top",
    topic: "Environment and Nature",
    text: "What makes a garden grow? 🌺",
    options: ["Care and Water 🌱💧", "TV 📺", "Toys 🎲"],
    correct: "Care and Water 🌱💧",
    type: "choice",
    feedback: { correct: "Yes! Gardens need care and water to grow 🌺", incorrect: "Think about what helps flowers bloom 🌸" }
  },
  {
    _id: "tp-gk-en-5",
    level: "preSchool",
    subject: "generalKnowledge",
    class: "top",
    topic: "Environment and Nature",
    text: "Where do bees collect honey? 🐝",
    options: ["Cars 🚗", "Books 📚", "Flowers 🌸"],
    correct: "Flowers 🌸",
    type: "choice",
    feedback: { correct: "Yes! Bees collect honey from flowers 🐝", incorrect: "Think about where bees buzz around 🌺" }
  },
  {
    _id: "tp-gk-en-6",
    level: "preSchool",
    subject: "generalKnowledge",
    class: "top",
    topic: "Environment and Nature",
    text: "What should we do with trash? 🗑️",
    options: ["Recycle ♻️", "Throw on ground 👎", "Hide it 🙈"],
    correct: "Recycle ♻️",
    type: "choice",
    feedback: { correct: "Yes! We should recycle to help our planet ♻️", incorrect: "Think about keeping Earth clean 🌍" }
  }
];