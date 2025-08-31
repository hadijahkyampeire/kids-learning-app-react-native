// data/stories.junior.ts
import { type Story } from "../../types";

const GEN = "https://kids-app-images.s3.us-east-1.amazonaws.com/general-image.webp";

export const STORY_TOPICS_JUNIOR = [
  "Adventure",
  "Home & Family",
  "Friendship",
  "School",
  "Kindness",
  "Animals & Nature",
  "Bravery",
  "Faith",
  "Environment",
  "Community"
] as const;

type StoryPage = { image?: string; text: string };

export type StoryBook = Story & {
  class: "p1" | "p2" | "p3";
  topic: (typeof STORY_TOPICS_JUNIOR)[number];
  pages: StoryPage[];
};

// ---------------- BASE (without _id) ----------------
const base: Omit<StoryBook, "_id">[] = [
  // ===== P1 =====
  {
    level: "juniorSchool",
    class: "p1",
    topic: "Adventure",
    title: "The Lost Map",
    coverImage: GEN,
    summary:
      "Ayan finds a crumpled map at the playground. With Zara, he follows clues past familiar spots to a tiny treasure box—stickers to share with the class.",
    pages: [
      { image: GEN, text: "Once upon a time, Ayan found a crumpled map near the playground swings. It had arrows and a big X!" },
      { image: GEN, text: "He called his friend Zara. Together they followed the arrows past benches, the slide, and the sand pit." },
      { text: "They checked under the seesaw and behind the tall tree. The map matched each turn perfectly." },
      { image: GEN, text: "Behind a wide bush, they found a tiny wooden box. Inside were bright stickers!" },
      { text: "Back in class, Ayan and Zara shared the stickers with everyone. Adventure complete—and shared!" }
    ],
    questions: [
      {
        q: "What did Ayan find?",
        options: ["A map", "A hat", "A toy car", "A key"],
        correct: "A map",
        feedback: { correct: "Yes—he found a map!", incorrect: "Look again—he found a map." }
      },
      {
        q: "What was in the tiny box?",
        options: ["Stickers", "Coins", "Chalk", "Shells"],
        correct: "Stickers",
        feedback: { correct: "Right—stickers to share.", incorrect: "They found stickers." }
      }
    ]
  },
  {
    level: "juniorSchool",
    class: "p1",
    topic: "Home & Family",
    title: "Grandma’s Soup",
    coverImage: GEN,
    summary:
      "Rainy weather brings the family together. Musa helps Grandma wash and chop vegetables, and the warm soup becomes a cozy family meal.",
    pages: [
      { image: GEN, text: "Long time ago on a rainy day, Musa stood by the window watching raindrops race down the glass." },
      { image: GEN, text: "“Let’s make soup,” Grandma smiled. Musa washed carrots and potatoes while Grandma stirred the pot." },
      { text: "Steam filled the kitchen and the room smelled wonderful. The rain drummed softly on the roof." },
      { image: GEN, text: "They set bowls on the table. Everyone gathered, smiling and hungry." },
      { text: "They ate together and felt warm inside. Musa was proud to help at home." }
    ],
    questions: [
      {
        q: "Who helped cook?",
        options: ["Musa", "The mailman", "The coach", "The neighbor"],
        correct: "Musa",
        feedback: { correct: "Yes—Musa helped Grandma.", incorrect: "Musa helped cook." }
      },
      {
        q: "What did they make?",
        options: ["Soup", "Cake", "Sandwiches", "Ice cream"],
        correct: "Soup",
        feedback: { correct: "Right—warm soup!", incorrect: "They made soup." }
      }
    ]
  },
  {
    level: "juniorSchool",
    class: "p1",
    topic: "Animals & Nature",
    title: "The Mango Tree",
    coverImage: "https://kids-app-images.s3.us-east-1.amazonaws.com/mangoTree.webp",
    summary:
      "Ahmed loves his mango tree. He notices birds enjoying the fruit and chooses to share, picking the rest when they are ripe.",
    pages: [
      { image: "https://kids-app-images.s3.us-east-1.amazonaws.com/mangoTree.webp", text: "Far, far away in a sunny yard, a mango tree grew heavy with sweet yellow fruit." },
      { image: GEN, text: "Ahmed watched little birds peck gently at the mangoes. He smiled and left some for them." },
      { text: "He waited a few days for the other mangoes to ripen fully." },
      { image: GEN, text: "When the time was right, he picked the fruit and shared it with his family." },
      { text: "Sharing with birds and family made Ahmed happy. There was enough for everyone." }
    ],
    questions: [
      {
        q: "Who else enjoyed the mangoes?",
        options: ["Birds", "Robots", "Fish", "Cats"],
        correct: "Birds",
        feedback: { correct: "Yes—the birds too.", incorrect: "The birds enjoyed them." }
      },
      {
        q: "How did Ahmed feel when he shared?",
        options: ["Happy", "Angry", "Sad", "Scared"],
        correct: "Happy",
        feedback: { correct: "Right—sharing felt good.", incorrect: "He felt happy." }
      }
    ]
  },
  {
    level: "juniorSchool",
    class: "p1",
    topic: "Kindness",
    title: "The Playground Promise",
    coverImage: GEN,
    summary:
      "Nadia promises to include new classmates in games. Soon, everyone is laughing and taking turns.",
    pages: [
      { image: GEN, text: "Once upon a time, two new classmates stood by the fence, quiet and shy." },
      { image: GEN, text: "Nadia waved and said, “Come play tag with us!”" },
      { text: "She explained the rules and made sure everyone had a turn." },
      { image: GEN, text: "They laughed together and raced across the playground." },
      { text: "From that day, the playground felt friendly for all." }
    ],
    questions: [
      {
        q: "What did Nadia do?",
        options: ["Invited them to play", "Took their toys", "Ignored them", "Left the playground"],
        correct: "Invited them to play",
        feedback: { correct: "Yes—she included them.", incorrect: "She invited them to play." }
      }
    ]
  },

  // ===== P2 =====
  {
    level: "juniorSchool",
    class: "p2",
    topic: "Environment",
    title: "The Brave Little Fish",
    coverImage: "https://kids-app-images.s3.us-east-1.amazonaws.com/braveFish.jpg",
    summary:
      "Bobo sees a plastic bag in the pond. He pushes it to shore, and a boy tosses it into the bin, keeping the pond safe.",
    pages: [
      { image: "https://kids-app-images.s3.us-east-1.amazonaws.com/braveFish.jpg", text: "Once upon a time, in a blue pond, a little fish named Bobo saw a plastic bag float by." },
      { image: GEN, text: "Bobo worried it could trap his friends. He nudged the bag with his nose, little by little." },
      { text: "At the shore, a boy noticed the bag and understood." },
      { image: GEN, text: "He picked it up and threw it into the bin." },
      { text: "The water felt safe again. Bobo darted happily through the reeds." }
    ],
    questions: [
      {
        q: "What did Bobo see?",
        options: ["A plastic bag", "A boat", "A kite", "A basket"],
        correct: "A plastic bag",
        feedback: { correct: "Yes—trash in the water.", incorrect: "He saw a plastic bag." }
      },
      {
        q: "Where did the boy put the bag?",
        options: ["In the bin", "Back in the water", "On a tree", "In his pocket"],
        correct: "In the bin",
        feedback: { correct: "Right—clean and safe.", incorrect: "He put it in the bin." }
      }
    ]
  },
  {
    level: "juniorSchool",
    class: "p2",
    topic: "Kindness",
    title: "The Honest Shopkeeper",
    coverImage: "https://kids-app-images.s3.us-east-1.amazonaws.com/shop-keeper.jpg",
    summary:
      "Hamid returns extra money a customer gave by mistake. People hear about his honesty and trust his shop.",
    pages: [
      { image: "https://kids-app-images.s3.us-east-1.amazonaws.com/shop-keeper.jpg", text: "Long time ago, in a busy market, a kind shopkeeper named Hamid counted coins carefully." },
      { image: GEN, text: "A customer gave too much by mistake. Hamid returned the extra coins at once." },
      { text: "“Honesty is best,” he said with a smile." },
      { image: GEN, text: "Word spread through the town." },
      { text: "Soon, many people visited his store because they trusted him." }
    ],
    questions: [
      {
        q: "What did Hamid do with the extra money?",
        options: ["Returned it", "Kept it", "Hid it", "Spent it"],
        correct: "Returned it",
        feedback: { correct: "Yes—he was honest.", incorrect: "He returned it." }
      },
      {
        q: "Why did people visit his shop?",
        options: ["They trusted him", "He sold free toys", "It was bigger", "It had a slide"],
        correct: "They trusted him",
        feedback: { correct: "Right—honesty builds trust.", incorrect: "They trusted him." }
      }
    ]
  },
  {
    level: "juniorSchool",
    class: "p2",
    topic: "School",
    title: "The New Student",
    coverImage: GEN,
    summary:
      "Lina is new and quiet. Kareem gives her a tour of the library, art room, and playground, helping her feel at home.",
    pages: [
      { image: GEN, text: "Once upon a time, a new girl named Lina sat quietly at the back of class." },
      { image: GEN, text: "Kareem noticed and asked, “Would you like a tour?”" },
      { text: "They visited the library with tall shelves, the art room with bright colors, and the busy playground." },
      { image: GEN, text: "Lina smiled and thanked Kareem for the friendly help." },
      { text: "By lunchtime, she felt she belonged." }
    ],
    questions: [
      {
        q: "Who helped Lina?",
        options: ["Kareem", "A stranger", "No one", "The bus driver"],
        correct: "Kareem",
        feedback: { correct: "Yes—Kareem was kind.", incorrect: "Kareem helped her." }
      },
      {
        q: "Where did they go first?",
        options: ["The library", "The moon", "The river", "The market"],
        correct: "The library",
        feedback: { correct: "Right—the library!", incorrect: "They visited the library." }
      }
    ]
  },
  {
    level: "juniorSchool",
    class: "p2",
    topic: "Faith",
    title: "The Ramadan Lantern",
    coverImage: GEN,
    summary:
      "Yusra makes a paper lantern with her dad. At sunset, they share dates with neighbors and say, “Ramadan Kareem.”",
    pages: [
      { image: GEN, text: "Once upon a time in Ramadan, Yusra folded colorful paper with her dad." },
      { image: GEN, text: "They cut and glued a bright lantern and hung it near the window." },
      { text: "At sunset, the lantern glowed softly and filled the room with warm light." },
      { image: GEN, text: "They carried a plate of dates to the neighbors." },
      { text: "“Ramadan Kareem!” they said, sharing smiles and sweet dates." }
    ],
    questions: [
      {
        q: "What did they make?",
        options: ["A paper lantern", "A kite", "A drum", "A boat"],
        correct: "A paper lantern",
        feedback: { correct: "Yes—glowing lantern.", incorrect: "They made a lantern." }
      },
      {
        q: "What did they share?",
        options: ["Dates", "Chips", "Cake", "Soup"],
        correct: "Dates",
        feedback: { correct: "Right—sweet dates.", incorrect: "They shared dates." }
      }
    ]
  },

  // ===== P3 =====
  {
    level: "juniorSchool",
    class: "p3",
    topic: "Faith",
    title: "Prophet Yunus and the Big Fish",
    coverImage: "https://kids-app-images.s3.us-east-1.amazonaws.com/prophet-yunus.jpg",
    summary:
      "A storm throws Prophet Yunus (A.S) into the sea where a great fish swallows him. He prays sincerely, and Allah saves him.",
    pages: [
      { image: "https://kids-app-images.s3.us-east-1.amazonaws.com/prophet-yunus.jpg", text: "Long time ago, a great storm rocked the ship of Prophet Yunus (A.S)." },
      { image: GEN, text: "He was cast into the sea, and a huge fish swallowed him by Allah’s will." },
      { text: "Inside the belly of the fish, he prayed, “La ilaha illa Anta, Subhanaka, inni kuntu minaz-zalimeen.”" },
      { image: GEN, text: "Allah forgave him. The fish released him safely upon the shore." },
      { text: "Prophet Yunus (A.S) returned to his people with renewed patience and trust in Allah." }
    ],
    questions: [
      {
        q: "Where was Prophet Yunus?",
        options: ["Inside a big fish", "On a camel", "In a cave", "In a castle"],
        correct: "Inside a big fish",
        feedback: { correct: "Yes—inside the fish.", incorrect: "He was inside a big fish." }
      },
      {
        q: "What did he do inside the fish?",
        options: ["Prayed to Allah", "Slept", "Ate cake", "Built a boat"],
        correct: "Prayed to Allah",
        feedback: { correct: "Right—he prayed sincerely.", incorrect: "He prayed to Allah." }
      }
    ]
  },
  {
    level: "juniorSchool",
    class: "p3",
    topic: "Friendship",
    title: "Team Captain",
    coverImage: GEN,
    summary:
      "Joy becomes Sports Day captain. By listening and sharing turns, she helps her team work together and win the relay.",
    pages: [
      { image: GEN, text: "Once upon a time, Joy hoped to be team captain for Sports Day." },
      { image: GEN, text: "She listened to ideas, gave fair turns, and cheered for everyone." },
      { text: "The team practiced passing the baton smoothly." },
      { image: GEN, text: "On race day, they worked together and won the relay." },
      { text: "Joy learned that good leaders listen and encourage others." }
    ],
    questions: [
      {
        q: "How did Joy lead the team?",
        options: ["By listening and sharing turns", "By shouting", "By quitting", "By ignoring others"],
        correct: "By listening and sharing turns",
        feedback: { correct: "Yes—good teamwork.", incorrect: "She listened and shared turns." }
      }
    ]
  },
  {
    level: "juniorSchool",
    class: "p3",
    topic: "Community",
    title: "Helping Hands Day",
    coverImage: GEN,
    summary:
      "The class cleans the park, paints a bench, and plants flowers. Neighbors thank them for caring about their community.",
    pages: [
      { image: GEN, text: "Long time ago, the teacher announced, “Today is Helping Hands Day!”" },
      { image: GEN, text: "Children picked litter with gloves and put it in bags." },
      { text: "They painted a bench bright and planted flowers near the path." },
      { image: GEN, text: "Neighbors walked by and smiled, grateful for the clean park." },
      { text: "The class felt proud to care for their community." }
    ],
    questions: [
      {
        q: "Where did the class help?",
        options: ["In the park", "In the desert", "At the airport", "On a boat"],
        correct: "In the park",
        feedback: { correct: "Yes—the park.", incorrect: "They helped in the park." }
      }
    ]
  },
  {
    level: "juniorSchool",
    class: "p3",
    topic: "Bravery",
    title: "The River Rescue",
    coverImage: GEN,
    summary:
      "During a picnic, Amin spots a puppy stuck in riverbank mud. He calls adults and fetches a long stick to help pull the puppy to safety.",
    pages: [
      { image: GEN, text: "Once upon a time, the class picnicked by a wide river." },
      { image: GEN, text: "Amin heard a soft whimper—a puppy was stuck in the muddy bank." },
      { text: "He quickly called nearby adults and found a long stick." },
      { image: GEN, text: "Together they reached the puppy and pulled it free." },
      { text: "The puppy wagged its tail happily. Everyone cheered for a brave and smart rescue." }
    ],
    questions: [
      {
        q: "Who did Amin call for help?",
        options: ["Adults", "No one", "The puppy", "A taxi driver"],
        correct: "Adults",
        feedback: { correct: "Yes—he called adults.", incorrect: "He called adults for help." }
      },
      {
        q: "What did they use to reach the puppy?",
        options: ["A long stick", "A balloon", "A kite", "A spoon"],
        correct: "A long stick",
        feedback: { correct: "Right—a long stick.", incorrect: "They used a long stick." }
      }
    ]
  }
];

// ---------------- FINAL (with _id) ----------------
export const juniorSchoolStoriesData: StoryBook[] = base.map((s, i) => ({
  ...s,
  _id: `JS${i + 1}`,
}));
