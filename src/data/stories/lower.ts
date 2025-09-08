import type { Story } from "../../types";

export const STORY_TOPICS_LOWER_PRIMARY = [
  "Adventure",
  "Home & Family",
  "Friendship",
  "School Life",
  "Kindness",
  "Animals & Nature",
  "Bravery",
  "Faith",
  "Imagination",
  "Helping",
  "Tales (Fables)"
] as const;

const BG_LOCAL = require("../../assets/images/defaultImage.webp");

const GEN = BG_LOCAL;

export type StoryPage = { image?: string; text: string };

export type StoryBookLower = Story & {
  class: "p4" | "p5";
  topic: string; 
  pages: StoryPage[];
};


export const lowerPrimaryStoriesData: StoryBookLower[] = [

  {
    _id: "LP-P4-1",
    level: "lowerPrimary",
    class: "p4",
    topic: "Fable",
    title: "The Rabbit and the Turtle",
    coverImage: "https://kids-app-images.s3.us-east-1.amazonaws.com/rabbit-turtle.jpg",
    summary: "The fast rabbit learns a quiet lesson from a steady turtle.",
    pages: [
      { image: "https://kids-app-images.s3.us-east-1.amazonaws.com/rabbit-turtle.jpg",
        text: "Once upon a time, there was a fast rabbit who laughed at a slow turtle." },
      { text: "They agreed to race from the river to the big tree." },
      { text: "Rabbit ran quickly and stopped to rest, sure he would win." },
      { text: "Turtle walked slowly, step by step, never stopping." },
      { text: "Turtle reached the tree first. Rabbit learned that steady work wins." }
    ],
    questions: [
      { q: "Who won the race?", options: ["The turtle","The rabbit","Both","No one"], correct: "The turtle",
        feedback: { correct: "Yes—the turtle.", incorrect: "The turtle won." } },
      { q: "Why did the rabbit lose?", options: ["He stopped to rest","He was sick","He took the wrong path","He forgot to run"], correct: "He stopped to rest",
        feedback: { correct: "Right—he rested.", incorrect: "He stopped to rest." } },
      { q: "What lesson did the rabbit learn?", options: ["Slow and steady wins","Run only at night","Never race","Talk more"], correct: "Slow and steady wins",
        feedback: { correct: "Yes—steady wins.", incorrect: "Slow and steady wins the race." } }
    ]
  },
  {
    _id: "LP-P4-2",
    level: "lowerPrimary",
    class: "p4",
    topic: "Teamwork",
    title: "Saving the School Garden",
    coverImage: GEN,
    summary: "A class collects rainwater to save thirsty plants.",
    pages: [
      { image: GEN, text: "Once upon a time, a school garden began to dry because the water tank was broken." },
      { text: "Mariam suggested placing buckets and bowls outside to collect rainwater." },
      { text: "Everyone worked together, even the teacher." },
      { text: "After two rainy days, they had enough water for the plants." },
      { text: "The garden grew green again. Their teacher praised their teamwork and ideas." }
    ],
    questions: [
      { q: "Why was the garden drying?", options: ["The tank was broken","Too much snow","No soil","Too many weeds"], correct: "The tank was broken",
        feedback: { correct: "Yes—broken tank.", incorrect: "It was a broken tank." } },
      { q: "How did they collect water?", options: ["Using rain buckets","Buying bottles","Digging a well","A water truck"], correct: "Using rain buckets",
        feedback: { correct: "Right—rain buckets.", incorrect: "They used buckets to collect rain." } },
      { q: "What did the garden become?", options: ["Green again","Dry again","Dusty","Covered in snow"], correct: "Green again",
        feedback: { correct: "Yes—green again.", incorrect: "It became green again." } }
    ]
  },
  {
    _id: "LP-P4-3",
    level: "lowerPrimary",
    class: "p4",
    topic: "Moral",
    title: "The Honest Woodcutter",
    coverImage: "https://kids-app-images.s3.us-east-1.amazonaws.com/honest-wood-cutter.png",
    summary: "Honesty brings more than expected to a poor worker.",
    pages: [
      { image: "https://kids-app-images.s3.us-east-1.amazonaws.com/honest-wood-cutter.png",
        text: "Once upon a time, there was a poor woodcutter who worked near a river." },
      { text: "His axe slipped and fell into the water." },
      { text: "An angel showed him a golden axe and a silver axe. He said, “These are not mine.”" },
      { text: "She gave back his old iron axe and also gifted the others for his honesty." },
      { text: "He went home thankful and promised to always be truthful." }
    ],
    questions: [
      { q: "Where was the woodcutter working?", options: ["Near a river","In a city","On a mountain","In a cave"], correct: "Near a river",
        feedback: { correct: "Yes—by the river.", incorrect: "Near a river." } },
      { q: "What did the angel give him?", options: ["All three axes","Only gold","Only silver","None"], correct: "All three axes",
        feedback: { correct: "Right—all three.", incorrect: "He received all three axes." } },
      { q: "What value did the man show?", options: ["Honesty","Pride","Anger","Trickery"], correct: "Honesty",
        feedback: { correct: "Yes—honesty.", incorrect: "He showed honesty." } }
    ]
  },


  {
    _id: "LP-P5-1",
    level: "lowerPrimary",
    class: "p5",
    topic: "Discovery",
    title: "The Hidden Treasure of the Library",
    coverImage: GEN,
    summary: "Ali finds a map in a dusty book and uncovers old letters.",
    pages: [
      { image: GEN, text: "Once upon a time, a boy named Ali loved reading in the school library." },
      { text: "He found a dusty book with a folded map inside." },
      { text: "The map led to the big oak tree in the schoolyard." },
      { text: "With his teacher’s help, Ali dug up a small wooden box." },
      { text: "Inside were letters from old students—funny and inspiring stories from years ago." }
    ],
    questions: [
      { q: "What did Ali find inside the book?", options: ["A map","Money","A toy","A key"], correct: "A map",
        feedback: { correct: "Yes—a map.", incorrect: "He found a map." } },
      { q: "Where was the box buried?", options: ["Under an oak tree","In the classroom","By the river","Behind a shop"], correct: "Under an oak tree",
        feedback: { correct: "Right—under the tree.", incorrect: "Under the big oak tree." } },
      { q: "What was inside the box?", options: ["Old letters","Gold","Shoes","Seeds"], correct: "Old letters",
        feedback: { correct: "Yes—old letters.", incorrect: "Letters from old students." } }
    ]
  },
  {
    _id: "LP-P5-2",
    level: "lowerPrimary",
    class: "p5",
    topic: "Faith",
    title: "The Night of Power",
    coverImage: "https://kids-app-images.s3.us-east-1.amazonaws.com/night-of-power.jpeg",
    summary: "A family spends a blessed night in prayer and peace.",
    pages: [
      { image: "https://kids-app-images.s3.us-east-1.amazonaws.com/night-of-power.jpeg",
        text: "Once upon a time, during Ramadan, a family prepared for Laylat al-Qadr—the Night of Power." },
      { text: "They prayed, read Qur’an, and made dua together." },
      { text: "The house felt calm and full of light in their hearts." },
      { text: "They learned that worship on this night is better than a thousand months." },
      { text: "In the morning, they felt close to Allah and grateful." }
    ],
    questions: [
      { q: "Which night is so special?", options: ["Laylat al-Qadr","Eid Night","New Year Night","A market night"], correct: "Laylat al-Qadr",
        feedback: { correct: "Yes—Laylat al-Qadr.", incorrect: "Laylat al-Qadr is correct." } },
      { q: "What did the family do?", options: ["Prayed and read Qur’an","Watched TV","Traveled","Slept early"], correct: "Prayed and read Qur’an",
        feedback: { correct: "Right—worshipped.", incorrect: "They prayed and read Qur’an." } },
      { q: "How did they feel?", options: ["Peaceful","Angry","Bored","Afraid"], correct: "Peaceful",
        feedback: { correct: "Yes—peaceful.", incorrect: "They felt peaceful." } }
    ]
  },
  {
    _id: "LP-P5-3",
    level: "lowerPrimary",
    class: "p5",
    topic: "Adventure",
    title: "The Treasure in the Cave",
    coverImage: GEN,
    summary: "Aisha and Omar follow a map to a secret garden.",
    pages: [
      { image: GEN, text: "Once upon a time, Aisha and her cousin Omar explored a small cave near the hill." },
      { text: "Inside, they found coins, a map, and strange symbols on the walls." },
      { text: "The map showed a path to a hidden valley behind the hill." },
      { text: "They walked carefully and reached a garden full of flowers and fruit trees." },
      { text: "They promised to protect the place and keep it clean and safe." }
    ],
    questions: [
      { q: "Who explored the cave?", options: ["Aisha and Omar","Ali and Hamid","Mariam and Alesha","Benny and Luna"], correct: "Aisha and Omar",
        feedback: { correct: "Yes—Aisha and Omar.", incorrect: "It was Aisha and Omar." } },
      { q: "What did they find in the cave?", options: ["Coins and a map","A boat","A tent","A bicycle"], correct: "Coins and a map",
        feedback: { correct: "Right—coins and a map.", incorrect: "They found coins and a map." } },
      { q: "Where did the map lead?", options: ["A hidden garden","A busy market","A library","A school"], correct: "A hidden garden",
        feedback: { correct: "Yes—to a garden.", incorrect: "It led to a hidden garden." } }
    ]
  }
];


