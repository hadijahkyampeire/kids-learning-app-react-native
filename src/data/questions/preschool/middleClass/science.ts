import { type Question } from "../../../../types";

export const middleClassScienceQuestions: Question[] = [
  // Living Things Topic
  {
    _id: "md-sci-lt-1",
    level: "preSchool",
    subject: "science",
    class: "middle",
    topic: "Living Things",
    text: "Which of these is a living thing? 🐕 vs 🪨 vs 🪑",
    options: ["Dog 🐕", "Rock 🪨", "Chair 🪑"],
    correct: "Dog 🐕",
    type: "choice",
    feedback: { correct: "Yes! Dogs 🐕 are living things that grow and move.", incorrect: "Living things eat, grow, and move. Dogs 🐕 are living!" }
  },
  {
    _id: "md-sci-mc-1",
    level: "preSchool",
    subject: "science",
    class: "middle",
    topic: "Living Things",
    text: "Which are living things? 🌱",
    options: ["Tree 🌳", "Rock 🪨", "Bird 🐦", "Chair 🪑", "Fish 🐠", "Book 📚"],
    correct: ["Tree 🌳", "Bird 🐦", "Fish 🐠"],
    type: "multiChoice",
    feedback: { correct: "Yes! These are all living things that grow!", incorrect: "Living things can grow, eat, and move." }
  },
  {
    _id: "md-sci-mc-2",
    level: "preSchool",
    subject: "science",
    class: "middle",
    topic: "Living Things",
    text: "What do plants need to grow? 🌱",
    options: ["Water 💧", "Sunlight ☀️", "Air 💨", "Toys 🎮", "Books 📚", "Shoes 👟"],
    correct: ["Water 💧", "Sunlight ☀️", "Air 💨"],
    type: "multiChoice",
    feedback: { correct: "Great! Plants need all of these to grow!", incorrect: "Think about what helps plants stay healthy." }
  },
  {
    _id: "md-sci-lt-2",
    level: "preSchool",
    subject: "science",
    class: "middle",
    topic: "Living Things",
    text: "What do plants 🌱 need to grow?",
    options: ["Water 💧", "Toys 🎮", "Books 📚"],
    correct: "Water 💧",
    type: "choice",
    feedback: { correct: "Yes! Plants 🌱 need water 💧 to grow.", incorrect: "Think about what helps plants 🌱 stay alive." }
  },
  {
    _id: "md-sci-lt-3",
    level: "preSchool",
    subject: "science",
    class: "middle",
    topic: "Living Things",
    text: "Which animal gives us milk? 🥛",
    options: ["Cow 🐄", "Lion 🦁", "Snake 🐍"],
    correct: "Cow 🐄",
    type: "choice",
    feedback: { correct: "Yes! Cows 🐄 give us milk 🥛.", incorrect: "Think about where milk 🥛 comes from." }
  },
  {
    _id: "md-sci-lt-4",
    level: "preSchool",
    subject: "science",
    class: "middle",
    topic: "Living Things",
    text: "What do birds use to fly? 🦅",
    options: ["Wings ✨", "Legs 🦿", "Tail 🪶"],
    correct: "Wings ✨",
    type: "choice",
    feedback: { correct: "Yes! Birds 🦅 use wings to fly ✨", incorrect: "Think about what helps birds 🦅 move through the air." }
  },
  {
    _id: "md-sci-lt-5",
    level: "preSchool",
    subject: "science",
    class: "middle",
    topic: "Living Things",
    text: "Where do fish live? 🐠",
    options: ["Water 🌊", "Trees 🌳", "Ground �"],
    correct: "Water 🌊",
    type: "choice",
    feedback: { correct: "Yes! Fish 🐠 live in water 🌊.", incorrect: "Think about where fish 🐠 can swim." }
  },
  {
    _id: "md-sci-lt-6",
    level: "preSchool",
    subject: "science",
    class: "middle",
    topic: "Living Things",
    text: "What do we need to breathe? 🫁",
    options: ["Air 💨", "Food 🍎", "Water 💧"],
    correct: "Air 💨",
    type: "choice",
    feedback: { correct: "Yes! We need air 💨 to breathe.", incorrect: "Think about what goes in and out of your lungs 🫁." }
  },

  // Weather & Seasons Topic
  {
    _id: "md-sci-ws-1",
    level: "preSchool",
    subject: "science",
    class: "middle",
    topic: "Weather & Seasons",
    text: "What falls from clouds ☁️ when it rains?",
    options: ["Water 💧", "Sand 🏖️", "Leaves 🍁"],
    correct: "Water 💧",
    type: "choice",
    feedback: { correct: "Yes! Rain 🌧️ is water 💧 falling from clouds ☁️.", incorrect: "Think about what gets you wet in the rain 🌧️." }
  },
  {
    _id: "md-sci-mc-3",
    level: "preSchool",
    subject: "science",
    class: "middle",
    topic: "Weather & Seasons",
    text: "What do we see in winter? ❄️",
    options: ["Snow ❄️", "Ice ⛸️", "Cold wind 🌬️", "Beach 🏖️", "Flowers 🌸", "Leaves 🍁"],
    correct: ["Snow ❄️", "Ice ⛸️", "Cold wind 🌬️"],
    type: "multiChoice",
    feedback: { correct: "Yes! These are all winter things!", incorrect: "Think about cold winter weather." }
  },
  {
    _id: "md-sci-mc-4",
    level: "preSchool",
    subject: "science",
    class: "middle",
    topic: "Weather & Seasons",
    text: "What can we see in the night sky? 🌙",
    options: ["Moon 🌙", "Stars ⭐", "Clouds ☁️", "Sun ☀️", "Rainbow 🌈", "Birds 🐦"],
    correct: ["Moon 🌙", "Stars ⭐", "Clouds ☁️"],
    type: "multiChoice",
    feedback: { correct: "Perfect! We can see all of these at night!", incorrect: "Think about what's in the sky when it's dark." }
  },
  {
    _id: "md-sci-ws-2",
    level: "preSchool",
    subject: "science",
    class: "middle",
    topic: "Weather & Seasons",
    text: "What gives us light during the day? ☀️",
    options: ["Sun ☀️", "Moon 🌙", "Stars ⭐"],
    correct: "Sun ☀️",
    type: "choice",
    feedback: { correct: "Yes! The sun ☀️ gives us light in daytime.", incorrect: "Think about what makes the day bright ☀️." }
  },
  {
    _id: "md-sci-ws-3",
    level: "preSchool",
    subject: "science",
    class: "middle",
    topic: "Weather & Seasons",
    text: "What do we see in the sky at night? 🌙",
    options: ["Stars ⭐", "Sun ☀️", "Rainbow 🌈"],
    correct: "Stars ⭐",
    type: "choice",
    feedback: { correct: "Yes! We see stars ⭐ at night.", incorrect: "Think about what twinkles in the night sky 🌃." }
  },
  {
    _id: "md-sci-ws-4",
    level: "preSchool",
    subject: "science",
    class: "middle",
    topic: "Weather & Seasons",
    text: "What makes clouds ☁️ move in the sky?",
    options: ["Wind 💨", "Rain 🌧️", "Sun ☀️"],
    correct: "Wind 💨",
    type: "choice",
    feedback: { correct: "Yes! Wind 💨 moves clouds ☁️ across the sky.", incorrect: "Think about what you feel blowing on a windy day 💨." }
  },
  {
    _id: "md-sci-ws-5",
    level: "preSchool",
    subject: "science",
    class: "middle",
    topic: "Weather & Seasons",
    text: "When do leaves fall from trees? 🍂",
    options: ["Autumn 🍁", "Summer ☀️", "Spring 🌸"],
    correct: "Autumn 🍁",
    type: "choice",
    feedback: { correct: "Yes! Leaves fall in autumn 🍁.", incorrect: "Think about when trees lose their leaves 🍂." }
  },
  {
    _id: "md-sci-ws-6",
    level: "preSchool",
    subject: "science",
    class: "middle",
    topic: "Weather & Seasons",
    text: "What color is the sky on a sunny day? ☀️",
    options: ["Blue 🔵", "Black ⚫", "Green 🟢"],
    correct: "Blue 🔵",
    type: "choice",
    feedback: { correct: "Yes! The sky is blue 🔵 on sunny days ☀️.", incorrect: "Look up at the sky on a clear day 🔵." }
  },

  // Human Body Topic
  {
    _id: "md-sci-hb-1",
    level: "preSchool",
    subject: "science",
    class: "middle",
    topic: "Human Body",
    text: "What do we use to see? 👀",
    options: ["Eyes 👀", "Nose 👃", "Ears 👂"],
    correct: "Eyes 👀",
    type: "choice",
    feedback: { correct: "Yes! We use our eyes 👀 to see.", incorrect: "Think about which part helps you look at things 👀." }
  },
  {
    _id: "md-sci-mc-5",
    level: "preSchool",
    subject: "science",
    class: "middle",
    topic: "Human Body",
    text: "Which body parts help us move? 🏃‍♂️",
    options: ["Legs 🦿", "Arms 💪", "Feet 🦶", "Hands 🤚", "Eyes 👀", "Ears 👂"],
    correct: ["Legs 🦿", "Arms 💪", "Feet 🦶", "Hands 🤚"],
    type: "multiChoice",
    feedback: { correct: "Yes! All these parts help us move!", incorrect: "Think about parts that help you walk and grab things." }
  },
  {
    _id: "md-sci-mc-6",
    level: "preSchool",
    subject: "science",
    class: "middle",
    topic: "Human Body",
    text: "Which senses help us learn about food? 🍎",
    options: ["Taste 👅", "Smell 👃", "Touch 🤚", "Hearing 👂", "Sight 👀", "Walking 🚶"],
    correct: ["Taste �", "Smell 👃", "Touch 🤚", "Sight �👀"],
    type: "multiChoice",
    feedback: { correct: "Perfect! We use all these senses with food!", incorrect: "Think about how we experience food." }
  },
  {
    _id: "md-sci-hb-2",
    level: "preSchool",
    subject: "science",
    class: "middle",
    topic: "Human Body",
    text: "What do we use to hear? 🔊",
    options: ["Ears 👂", "Eyes 👀", "Mouth 👄"],
    correct: "Ears 👂",
    type: "choice",
    feedback: { correct: "Yes! We use our ears 👂 to hear sounds 🔊.", incorrect: "Think about which part helps you listen 👂." }
  },
  {
    _id: "md-sci-hb-3",
    level: "preSchool",
    subject: "science",
    class: "middle",
    topic: "Human Body",
    text: "What do we use to smell? 🌸",
    options: ["Nose 👃", "Mouth 👄", "Hand 🤚"],
    correct: "Nose 👃",
    type: "choice",
    feedback: { correct: "Yes! We use our nose 👃 to smell.", incorrect: "Think about which part helps you sniff things 👃." }
  },
  {
    _id: "md-sci-hb-4",
    level: "preSchool",
    subject: "science",
    class: "middle",
    topic: "Human Body",
    text: "What helps us walk? 🚶",
    options: ["Legs 🦿", "Arms 💪", "Head 🤕"],
    correct: "Legs 🦿",
    feedback: { correct: "Yes! We use our legs 🦿 to walk 🚶.", incorrect: "Think about which parts move when you walk 🚶." }
  },
  {
    _id: "md-sci-hb-5",
    level: "preSchool",
    subject: "science",
    class: "middle",
    topic: "Human Body",
    text: "What do we use to taste food? 🍎",
    options: ["Tongue 👅", "Teeth 🦷", "Lips 👄"],
    correct: "Tongue 👅",
    feedback: { correct: "Yes! We taste with our tongue 👅.", incorrect: "Think about what helps you taste sweet or sour 👅." }
  },
  {
    _id: "md-sci-hb-6",
    level: "preSchool",
    subject: "science",
    class: "middle",
    topic: "Human Body",
    text: "What pumps blood in our body? ❤️",
    options: ["Heart ❤️", "Brain 🧠", "Stomach 🤰"],
    correct: "Heart ❤️",
    feedback: { correct: "Yes! Our heart ❤️ pumps blood.", incorrect: "Think about what beats in your chest ❤️." }
  },

  // Materials & Objects Topic (6 questions)
  {
    _id: "md-sci-mo-1",
    level: "preSchool",
    subject: "science",
    class: "middle",
    topic: "Materials & Objects",
    text: "What happens to ice ❄️ when it gets warm?",
    options: ["Melts 💧", "Grows 📈", "Jumps 🦘"],
    correct: "Melts 💧",
    feedback: { correct: "Yes! Ice ❄️ melts into water 💧 when warm.", incorrect: "Think about what happens to ice cream 🍦 in the sun ☀️." }
  },
  {
    _id: "md-sci-mo-2",
    level: "preSchool",
    subject: "science",
    class: "middle",
    topic: "Materials & Objects",
    text: "Which object floats on water? 🌊",
    options: ["Wood 🪵", "Stone 🪨", "Coin 🪙"],
    correct: "Wood 🪵",
    feedback: { correct: "Yes! Wood 🪵 usually floats on water 🌊.", incorrect: "Think about what stays on top of water 🌊." }
  },
  {
    _id: "md-sci-mo-3",
    level: "preSchool",
    subject: "science",
    class: "middle",
    topic: "Materials & Objects",
    text: "What do magnets 🧲 attract?",
    options: ["Metal ⚙️", "Paper 📄", "Plastic 🥤"],
    correct: "Metal ⚙️",
    feedback: { correct: "Yes! Magnets 🧲 attract metal ⚙️.", incorrect: "Think about what sticks to magnets 🧲." }
  },
  {
    _id: "md-sci-mo-4",
    level: "preSchool",
    subject: "science",
    class: "middle",
    topic: "Materials & Objects",
    text: "Which gives us light at home? 🏠",
    options: ["Bulb 💡", "Chair 🪑", "Book 📚"],
    correct: "Bulb 💡",
    feedback: { correct: "Yes! Light bulbs 💡 give us light.", incorrect: "Think about what we turn on when it's dark 🌙." }
  },
  {
    _id: "md-sci-mo-5",
    level: "preSchool",
    subject: "science",
    class: "middle",
    topic: "Materials & Objects",
    text: "What can you see through? 👀",
    options: ["Glass 🪟", "Wood 🪵", "Stone 🪨"],
    correct: "Glass 🪟",
    feedback: { correct: "Yes! Glass 🪟 is clear and we can see through it.", incorrect: "Think about windows 🪟." }
  },
  {
    _id: "md-sci-mo-6",
    level: "preSchool",
    subject: "science",
    class: "middle",
    topic: "Materials & Objects",
    text: "What makes shadows? 👤",
    options: ["Light 💡", "Water 💧", "Wind 💨"],
    correct: "Light 💡",
    feedback: { correct: "Yes! Light 💡 creates shadows 👤.", incorrect: "Think about what you need to make shadows 👤." }
  }
];