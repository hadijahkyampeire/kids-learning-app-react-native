import { type Question } from "../../../../types";

export const topClassScienceQuestions: Question[] = [
  // Living Things (6 questions)
  {
    _id: "tp-sci-lt-1",
    level: "preSchool",
    subject: "science",
    class: "top",
    topic: "Living Things",
    text: "Which of these are living things? Select all that apply 🌱",
    options: ["Tree 🌳", "Bird 🐦", "Rock 🪨", "Cat 🐱", "Chair 🪑"],
    correct: ["Tree 🌳", "Bird 🐦", "Cat 🐱"],
    type: "multiChoice",
    feedback: { correct: "Yes! These are all living things - they grow and need food! 🌱", incorrect: "Living things grow, need food and water to survive 🤔" }
  },
  {
    _id: "tp-sci-lt-2",
    level: "preSchool",
    subject: "science",
    class: "top",
    topic: "Living Things",
    text: "What do plants need to grow? 🌿",
    options: ["Toys and Games 🎮🎲", "Water and Sunlight 💧☀️", "TV and Books 📺📚"],
    correct: "Water and Sunlight 💧☀️",
    type: "choice",
    feedback: { correct: "Correct! Plants need water and sunlight to grow 🌱", incorrect: "Think about what helps plants stay healthy and grow 🤔" }
  },
  {
    _id: "tp-sci-lt-3",
    level: "preSchool",
    subject: "science",
    class: "top",
    topic: "Living Things",
    text: "Which animal lays eggs? 🥚",
    options: ["Cat 🐱", "Chicken 🐔", "Dog 🐕"],
    correct: "Chicken 🐔",
    type: "choice",
    feedback: { correct: "Yes! Chickens lay eggs 🥚", incorrect: "Think about which animal gives us eggs for breakfast 🍳" }
  },
  {
    _id: "tp-sci-lt-4",
    level: "preSchool",
    subject: "science",
    class: "top",
    topic: "Living Things",
    text: "What do baby animals need to grow? 🐣",
    options: ["Books 📚", "Food and Care 🥛❤️", "Toys 🎲"],
    correct: "Food and Care 🥛❤️",
    type: "choice",
    feedback: { correct: "Right! Baby animals need food and care to grow healthy 🐣", incorrect: "Think about what helps babies stay healthy 🤔" }
  },
  {
    _id: "tp-sci-lt-5",
    level: "preSchool",
    subject: "science",
    class: "top",
    topic: "Living Things",
    text: "Which animal lives in water? 🌊",
    options: ["Bird 🐦", "Dog 🐕", "Fish 🐠"],
    correct: "Fish 🐠",
    type: "choice",
    feedback: { correct: "Yes! Fish live in water and can swim 🐠", incorrect: "Think about which animal has fins and swims 🌊" }
  },
  {
    _id: "tp-sci-lt-6",
    level: "preSchool",
    subject: "science",
    class: "top",
    topic: "Living Things",
    text: "What do plants give us? 🌳",
    options: ["Books 📚", "Oxygen 💨", "Toys 🎲"],
    correct: "Oxygen 💨",
    type: "choice",
    feedback: { correct: "Yes! Plants give us oxygen to breathe 🌳", incorrect: "Think about what plants produce that helps us breathe 💨" }
  },

  // Weather and Seasons (6 questions)
  {
    _id: "tp-sci-ws-1",
    level: "preSchool",
    subject: "science",
    class: "top",
    topic: "Weather and Seasons",
    text: "What are the signs of autumn? Select all that apply �",
    options: ["Leaves turn brown �", "Leaves fall down �🍁", "Weather gets cooler 🌧️", "Days get shorter 🌆", "Birds fly south 🕋", "Flowers bloom 🌸"],
    correct: ["Leaves turn brown 🍂", "Leaves fall down 🍁", "Weather gets cooler 🌧️", "Days get shorter 🌆", "Birds fly south 🕋"],
    type: "multiChoice",
    feedback: { correct: "Yes! Leaves turn colorful and fall in autumn 🍂", incorrect: "Think about when you see colorful falling leaves 🍁" }
  },
  {
    _id: "tp-sci-ws-2",
    level: "preSchool",
    subject: "science",
    class: "top",
    topic: "Weather and Seasons",
    text: "What can we see or hear during a storm? Select all that apply ⛈️",
    options: ["Lightning ⚡", "Thunder 🗣", "Rain �️", "Dark clouds ☁️", "Strong wind 💨", "Rainbow 🌈"],
    correct: ["Lightning ⚡", "Thunder 🗣", "Rain 🌧️", "Dark clouds ☁️", "Strong wind 💨"],
    type: "multiChoice",
    feedback: { correct: "Yes! We see lightning during storms ⚡", incorrect: "Think about the bright flashes during storms ⛈️" }
  },
  {
    _id: "tp-sci-ws-3",
    level: "preSchool",
    subject: "science",
    class: "top",
    topic: "Weather and Seasons",
    text: "When do we see snow? ❄️",
    options: ["Winter ⛄", "Summer ☀️", "Spring 🌸"],
    correct: "Winter ⛄",
    type: "choice",
    feedback: { correct: "Right! Snow falls in winter ❄️", incorrect: "Think about the coldest season ⛄" }
  },
  {
    _id: "tp-sci-ws-4",
    level: "preSchool",
    subject: "science",
    class: "top",
    topic: "Weather and Seasons",
    text: "What makes a rainbow appear? 🌈",
    options: ["Snow ❄️", "Sun and Rain ☀️💧", "Wind 💨"],
    correct: "Sun and Rain ☀️💧",
    type: "choice",
    feedback: { correct: "Yes! Rainbows appear when sun shines through rain 🌈", incorrect: "Think about when you usually see rainbows 🤔" }
  },
  {
    _id: "tp-sci-ws-5",
    level: "preSchool",
    subject: "science",
    class: "top",
    topic: "Weather and Seasons",
    text: "What season do flowers bloom? 🌺",
    options: ["Spring 🌸", "Winter ⛄", "Autumn 🍁"],
    correct: "Spring 🌸",
    type: "choice",
    feedback: { correct: "Yes! Flowers bloom in spring 🌸", incorrect: "Think about when gardens become colorful with flowers 🌺" }
  },
  {
    _id: "tp-sci-ws-6",
    level: "preSchool",
    subject: "science",
    class: "top",
    topic: "Weather and Seasons",
    text: "What makes the wind blow? 💨",
    options: ["Moving Air 💨", "Rain ☔", "Sun ☀️"],
    correct: "Moving Air 💨",
    type: "choice",
    feedback: { correct: "Yes! Wind is moving air 💨", incorrect: "Think about what you feel when the wind blows 🌬️" }
  },

  // Earth and Space (6 questions)
  {
    _id: "tp-sci-es-1",
    level: "preSchool",
    subject: "science",
    class: "top",
    topic: "Earth and Space",
    text: "What gives us light during the day? ☀️",
    options: ["Sun ☀️", "Moon 🌙", "Stars ⭐"],
    correct: "Sun ☀️",
    type: "choice",
    feedback: { correct: "Yes! The Sun gives us light during the day ☀️", incorrect: "Think about what makes the day bright 🌞" }
  },
  {
    _id: "tp-sci-es-2",
    level: "preSchool",
    subject: "science",
    class: "top",
    topic: "Earth and Space",
    text: "What can we see in the night sky? Select all that apply 🌃",
    options: ["Stars ⭐", "Moon 🌙", "Planets 🪐", "Sun ☀️", "Rainbow 🌈"],
    correct: ["Stars ⭐", "Moon 🌙", "Planets 🪐"],
    type: "multiChoice",
    feedback: { correct: "Yes! We can see all of these in the night sky! 🌃", incorrect: "Think about what shines in the dark sky 🌙" }
  },
  {
    _id: "tp-sci-es-3",
    level: "preSchool",
    subject: "science",
    class: "top",
    topic: "Earth and Space",
    text: "What is Earth made of? 🌍",
    options: ["Land and Water 🏔️🌊", "Clouds ☁️", "Stars ⭐"],
    correct: "Land and Water 🏔️🌊",
    type: "choice",
    feedback: { correct: "Right! Earth has land and water 🌍", incorrect: "Think about what you see on a globe 🤔" }
  },
  {
    _id: "tp-sci-es-4",
    level: "preSchool",
    subject: "science",
    class: "top",
    topic: "Earth and Space",
    text: "Where do astronauts go? 🧑‍🚀",
    options: ["Space 🚀", "Ocean 🌊", "Desert 🏜️"],
    correct: "Space 🚀",
    type: "choice",
    feedback: { correct: "Yes! Astronauts explore space 🚀", incorrect: "Think about where rockets go 🧑‍🚀" }
  },
  {
    _id: "tp-sci-es-5",
    level: "preSchool",
    subject: "science",
    class: "top",
    topic: "Earth and Space",
    text: "What causes day and night? 🌞🌙",
    options: ["Earth spinning 🌍", "Rain ☔", "Wind 💨"],
    correct: "Earth spinning 🌍",
    type: "choice",
    feedback: { correct: "Yes! Earth spinning gives us day and night 🌍", incorrect: "Think about why we have light and dark times 🤔" }
  },
  {
    _id: "tp-sci-es-6",
    level: "preSchool",
    subject: "science",
    class: "top",
    topic: "Earth and Space",
    text: "What is the biggest planet? 🪐",
    options: ["Jupiter 🪐", "Mars 🔴", "Earth 🌍"],
    correct: "Jupiter 🪐",
    type: "choice",
    feedback: { correct: "Yes! Jupiter is the biggest planet 🪐", incorrect: "Think about which planet is known for being huge 🤔" }
  },

  // Matter and Energy (6 questions)
  {
    _id: "tp-sci-me-1",
    level: "preSchool",
    subject: "science",
    class: "top",
    topic: "Matter and Energy",
    text: "What happens to ice when it gets warm? 🧊",
    options: ["Jumps 🦘", "Grows 📏", "Melts 💧"],
    correct: "Melts 💧",
    type: "choice",
    feedback: { correct: "Yes! Ice melts into water when warm 💧", incorrect: "Think about what happens to ice cream in the sun 🤔" }
  },
  {
    _id: "tp-sci-me-2",
    level: "preSchool",
    subject: "science",
    class: "top",
    topic: "Matter and Energy",
    text: "What gives us heat and light? 💡",
    options: ["Sun ☀️", "Moon 🌙", "Stars ⭐"],
    correct: "Sun ☀️",
    type: "choice",
    feedback: { correct: "Yes! The Sun gives us heat and light ☀️", incorrect: "Think about what makes us warm during the day 🌞" }
  },
  {
    _id: "tp-sci-me-3",
    level: "preSchool",
    subject: "science",
    class: "top",
    topic: "Matter and Energy",
    text: "What do we need to make a fire? 🔥",
    options: ["Wood and Heat 🪵🔥", "Water 💧", "Ice 🧊"],
    correct: "Wood and Heat 🪵🔥",
    type: "choice",
    feedback: { correct: "Yes! Fire needs fuel like wood and heat 🔥", incorrect: "Think about what campers use to make fire 🏕️" }
  },
  {
    _id: "tp-sci-me-4",
    level: "preSchool",
    subject: "science",
    class: "top",
    topic: "Matter and Energy",
    text: "What makes things float? 🛟",
    options: ["Air inside 💭", "Color 🎨", "Sound 🔊"],
    correct: "Air inside 💭",
    type: "choice",
    feedback: { correct: "Yes! Air inside helps things float 🛟", incorrect: "Think about what's inside a beach ball that helps it float 🏖️" }
  },
  {
    _id: "tp-sci-me-5",
    level: "preSchool",
    subject: "science",
    class: "top",
    topic: "Matter and Energy",
    text: "What happens to water when it's very cold? ❄️",
    options: ["Freezes 🧊", "Boils 🫧", "Disappears 💨"],
    correct: "Freezes 🧊",
    type: "choice",
    feedback: { correct: "Yes! Water freezes when very cold ❄️", incorrect: "Think about how ice cubes are made 🧊" }
  },
  {
    _id: "tp-sci-me-6",
    level: "preSchool",
    subject: "science",
    class: "top",
    topic: "Matter and Energy",
    text: "What makes a balloon get bigger? 🎈",
    options: ["Air 💨", "Water 💧", "Sand 🏖️"],
    correct: "Air 💨",
    feedback: { correct: "Yes! Air makes balloons get bigger 🎈", incorrect: "Think about what we blow into balloons 💨" }
  }
];