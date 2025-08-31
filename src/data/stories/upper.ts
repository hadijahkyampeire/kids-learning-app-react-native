// data/stories.upper.ts
import { type Story } from "../../types";

const GEN = "https://kids-app-images.s3.us-east-1.amazonaws.com/general-image.webp";

export const STORY_TOPICS_UPPER = [
  "Adventure",
  "Friendship",
  "Home & Family",
  "Faith & Values",
  "Nature & Environment",
  "Tales (Fables)"
] as const;

type StoryPage = { image?: string; text: string };

export type StoryBook = Story & {
  class: "p6" | "p7";
  topic: (typeof STORY_TOPICS_UPPER)[number];
  pages: StoryPage[];
};

// ---------------- BASE (without _id) ----------------
const base: Omit<StoryBook, "_id">[] = [
  // ===== P6 =====
  {
    level: "upperPrimary",
    class: "p6",
    topic: "Adventure",
    title: "The Compass and the Storm",
    coverImage: GEN,
    summary:
      "A school hike turns tricky when rain clouds roll in. Aisha and Jamal use a simple compass, clear heads, and a map to lead their group back to the ranger hut.",
    pages: [
      { image: GEN, text: "Once upon a time, Aisha and Jamal joined a class hike across low green hills." },
      { text: "Dark clouds gathered and the wind turned sharp. The teacher asked everyone to stay calm and close." },
      { image: GEN, text: "At a fork, the trail markers were washed pale. Jamal pulled out a compass; Aisha unfolded the map." },
      { text: "They matched the river bend on the map to the real stream below and checked the bearing to the ranger hut." },
      { image: GEN, text: "Step by steady step, the class moved along the ridge, counting turns until the hut roof came into view." },
      { text: "Rain eased. Warm tea and dry blankets waited inside. They had used simple tools—and clear thinking—to get home." }
    ],
    questions: [
      {
        q: "Which tools helped Aisha and Jamal most?",
        options: ["A compass and a map", "A kite and a whistle", "A camera and a rope", "A ruler and chalk"],
        correct: "A compass and a map",
        feedback: { correct: "Exactly—navigation tools guided them.", incorrect: "Check again: they used a compass and a map." }
      },
      {
        q: "What did they compare the map with?",
        options: ["The river bend they could see", "A cloud shape", "A passing bus", "Footprints"],
        correct: "The river bend they could see",
        feedback: { correct: "Right—the real river matched the map.", incorrect: "They used the visible river bend to match the map." }
      },
      {
        q: "How did the group move in the storm?",
        options: ["Calm and close together", "Running in all directions", "Silent and alone", "Loud and scattered"],
        correct: "Calm and close together",
        feedback: { correct: "Yes—staying calm and close kept them safe.", incorrect: "They stayed calm and close." }
      }
    ]
  },
  {
    level: "upperPrimary",
    class: "p6",
    topic: "Nature & Environment",
    title: "Saving the School Stream",
    coverImage: GEN,
    summary:
      "Litter clogs a small stream behind school. Pupils plan a clean-up, build a simple leaf filter, and place signboards to keep the water clear.",
    pages: [
      { image: GEN, text: "Long time ago, a narrow stream gurgled behind the school fence, clear and bright." },
      { text: "One term it turned muddy and slow. Bottles and wrappers clung to grass along the bank." },
      { image: GEN, text: "The class made a plan: gloves, sacks, and a safe line along the shallow edge." },
      { text: "After cleaning, they tied a simple stick-and-mesh leaf filter where water entered the bend." },
      { image: GEN, text: "They painted small signboards: “Keep Our Stream Clean” and “Bins Are Near the Gate.”" },
      { text: "A week later, the stream ran clear again. Kingfishers returned to dart and flash above the water." }
    ],
    questions: [
      {
        q: "What problem did the stream face?",
        options: ["Litter and muddy water", "No rain for years", "Frozen water", "Too many boats"],
        correct: "Litter and muddy water",
        feedback: { correct: "Yes—trash slowed and dirtied the stream.", incorrect: "It was litter and muddy water." }
      },
      {
        q: "What simple device did they add?",
        options: ["A leaf filter of sticks and mesh", "A huge dam", "A fountain", "A fish tank"],
        correct: "A leaf filter of sticks and mesh",
        feedback: { correct: "Right—a small filter helped stop debris.", incorrect: "They used a small stick-and-mesh filter." }
      },
      {
        q: "How did they remind others to help?",
        options: ["They painted signboards", "They shouted at people", "They hid the stream", "They closed the gate forever"],
        correct: "They painted signboards",
        feedback: { correct: "Yes—clear signs guide good habits.", incorrect: "They made and placed signboards." }
      }
    ]
  },
  {
    level: "upperPrimary",
    class: "p6",
    topic: "Faith & Values",
    title: "The Date Seller’s Promise",
    coverImage: GEN,
    summary:
      "A young seller returns extra money after a busy market day. His honesty builds trust and brings lasting customers.",
    pages: [
      { image: GEN, text: "Once upon a time, Yusuf helped his mother sell fresh dates in the morning market." },
      { text: "Crowds came quickly, coins clinked, and notes changed hands. Near sunset, Yusuf spotted an extra note in the box." },
      { image: GEN, text: "He searched for the woman who had paid. He found her near the spice stall and gave the money back." },
      { text: "She raised her hands in thanks. “May Allah reward your trust,” she said, smiling." },
      { image: GEN, text: "Word spread. People said, “The date boy is honest. Buy from him.”" },
      { text: "Yusuf kept his promise: fair scale, fair price, and a clean heart." }
    ],
    questions: [
      {
        q: "What did Yusuf notice near sunset?",
        options: ["An extra note in the box", "A broken scale", "A lost ring", "A closed gate"],
        correct: "An extra note in the box",
        feedback: { correct: "Yes—he found extra money.", incorrect: "He saw an extra note by mistake." }
      },
      {
        q: "What did he do with the extra money?",
        options: ["Returned it to the woman", "Kept it", "Hid it", "Bought sweets"],
        correct: "Returned it to the woman",
        feedback: { correct: "Right—he chose honesty.", incorrect: "He returned the money." }
      },
      {
        q: "What was the result of his honesty?",
        options: ["People trusted his stall", "He closed the stall", "He lost customers", "He left the market"],
        correct: "People trusted his stall",
        feedback: { correct: "Exactly—trust brings customers.", incorrect: "People trusted and supported him." }
      }
    ]
  },
  {
    level: "upperPrimary",
    class: "p6",
    topic: "Tales (Fables)",
    title: "The Clever Hare and the Hyena",
    coverImage: GEN,
    summary:
      "A hungry hyena bullies forest animals at the waterhole. A small hare uses wit and a moonlit trick to end the bullying.",
    pages: [
      { image: GEN, text: "Far, far away, a hyena guarded the waterhole and growled at every creature that came to drink." },
      { text: "A small hare watched and planned. “Strength is loud,” thought the hare, “but a good idea is louder.”" },
      { image: GEN, text: "At night, the hare told the hyena, “A stronger hyena lives in the pool. He mocks you.”" },
      { text: "The hyena peered into the water. The moon shivered in the ripples; a fierce face stared back—his own reflection." },
      { image: GEN, text: "He leaped and snapped at the ‘other’ hyena, swallowing muddy water and shame." },
      { text: "From then on, he stopped guarding the waterhole. Small creatures learned that wit can soften cruelty." }
    ],
    questions: [
      {
        q: "What did the hare use to trick the hyena?",
        options: ["The moon’s reflection", "A big net", "A trapdoor", "A sleeping spell"],
        correct: "The moon’s reflection",
        feedback: { correct: "Yes—his own reflection fooled him.", incorrect: "It was the moonlit reflection." }
      },
      {
        q: "What changed at the waterhole?",
        options: ["All animals could drink freely", "The pool dried up", "No one came back", "The hare left forever"],
        correct: "All animals could drink freely",
        feedback: { correct: "Right—bullying ended.", incorrect: "The waterhole became free for all." }
      },
      {
        q: "What lesson fits this tale?",
        options: ["Wit can beat brute force", "Never share water", "Always shout", "Hide from problems"],
        correct: "Wit can beat brute force",
        feedback: { correct: "Exactly—the hare’s mind won.", incorrect: "The hare used wit, not strength." }
      }
    ]
  },

  // ===== P7 =====
  {
    level: "upperPrimary",
    class: "p7",
    topic: "Adventure",
    title: "Across the Old Footbridge",
    coverImage: GEN,
    summary:
      "A class expedition reaches a swaying bridge. Mariam reviews safety steps, organizes an orderly crossing, and logs the route like a young field leader.",
    pages: [
      { image: GEN, text: "Once upon a time, a class expedition reached a narrow footbridge over a fast, brown river." },
      { text: "The planks were old but sound. Ropes on each side creaked in the wind." },
      { image: GEN, text: "Mariam read the safety list: light bags, single file, hands on the rope, eyes on the far bank." },
      { text: "She went first, slow and steady, counting ten steps at a time. Others followed with calm breaths." },
      { image: GEN, text: "On the other side, they checked everyone’s names and sketched the bridge in their field notes." },
      { text: "Leadership, they learned, is not noise. It is clear steps, steady pace, and care for the whole group." }
    ],
    questions: [
      {
        q: "How did the class cross the bridge?",
        options: ["Single file, holding the rope", "Running together", "Two by two, jumping", "Crawling on hands and knees"],
        correct: "Single file, holding the rope",
        feedback: { correct: "Yes—calm and orderly.", incorrect: "They crossed single file with hands on the rope." }
      },
      {
        q: "What did they do after crossing?",
        options: ["Check names and make field notes", "Swim back", "Go home at once", "Throw ropes away"],
        correct: "Check names and make field notes",
        feedback: { correct: "Right—good field practice.", incorrect: "They checked names and wrote notes." }
      },
      {
        q: "What does the story suggest about leadership?",
        options: ["It is clear and steady", "It is loud and angry", "It is about being first always", "It needs expensive gear"],
        correct: "It is clear and steady",
        feedback: { correct: "Exactly—steady guidance matters.", incorrect: "Leadership here was clear and steady." }
      }
    ]
  },
  {
    level: "upperPrimary",
    class: "p7",
    topic: "Home & Family",
    title: "Grandfather’s Map of Africa",
    coverImage: GEN,
    summary:
      "A faded map and a box of stamps turn into a geography lesson. Fatima traces rivers, coasts, and capitals while listening to her grandfather’s stories.",
    pages: [
      { image: GEN, text: "Long time ago, Fatima found a faded map rolled inside Grandfather’s wooden chest." },
      { text: "Blue lines curled across it—rivers and coasts. Small stars marked capital cities." },
      { image: GEN, text: "Grandfather opened a box of old stamps: wildlife, flags, and famous mountains." },
      { text: "They matched stamps to countries and traced routes between lakes and seas." },
      { image: GEN, text: "By evening, the map lay bright with tiny paper flags and neat pencil notes." },
      { text: "Places felt closer now—not far names, but paths and stories carried in a careful hand." }
    ],
    questions: [
      {
        q: "What did the blue lines on the map show?",
        options: ["Rivers and coasts", "Railway tracks", "Highways only", "Tall buildings"],
        correct: "Rivers and coasts",
        feedback: { correct: "Yes—water features on maps.", incorrect: "They showed rivers and coasts." }
      },
      {
        q: "How did Fatima learn more about places?",
        options: ["By matching stamps to countries", "By guessing randomly", "By closing the map", "By tearing it"],
        correct: "By matching stamps to countries",
        feedback: { correct: "Right—matching built knowledge.", incorrect: "She matched stamps to countries." }
      },
      {
        q: "What did they add to the map by evening?",
        options: ["Paper flags and notes", "Coffee stains", "Tears and rips", "Paint"],
        correct: "Paper flags and notes",
        feedback: { correct: "Exactly—labels and notes help memory.", incorrect: "They added small flags and neat notes." }
      }
    ]
  },
  {
    level: "upperPrimary",
    class: "p7",
    topic: "Faith & Values",
    title: "The Night of the Lost Wallet",
    coverImage: GEN,
    summary:
      "On the way home from evening prayers, Kareem finds a wallet. He returns it to its owner and learns why trust is a priceless gift.",
    pages: [
      { image: GEN, text: "Once upon a time, after evening prayers, Kareem and his father walked past quiet shops." },
      { text: "Under a bench, Kareem saw a wallet. He picked it up and checked for a name." },
      { image: GEN, text: "A shopkeeper recognized the owner and called him. The man arrived worried and breathless." },
      { text: "Kareem gave him the wallet with both hands. “Thank you,” the man said softly. “My travel papers are inside.”" },
      { image: GEN, text: "Kareem’s father smiled. “Trust is amanah,” he said. “We return what is not ours.”" },
      { text: "Kareem felt taller, knowing that an honest act can carry someone safely through a hard night." }
    ],
    questions: [
      {
        q: "Where did Kareem find the wallet?",
        options: ["Under a bench", "In a bus", "In the river", "On a roof"],
        correct: "Under a bench",
        feedback: { correct: "Yes—he saw it under a bench.", incorrect: "It was under a bench." }
      },
      {
        q: "What important things were inside?",
        options: ["Travel papers", "Shells", "Stamps only", "Snacks"],
        correct: "Travel papers",
        feedback: { correct: "Right—documents are valuable.", incorrect: "It held travel papers." }
      },
      {
        q: "What value did his father mention?",
        options: ["Amanah (trust)", "Speed", "Silence", "Luck"],
        correct: "Amanah (trust)",
        feedback: { correct: "Exactly—keep and return what belongs to others.", incorrect: "He taught about amanah—trust." }
      }
    ]
  },
  {
    level: "upperPrimary",
    class: "p7",
    topic: "Tales (Fables)",
    title: "The Chameleon and the Elephant",
    coverImage: GEN,
    summary:
      "An impatient elephant mocks a slow chameleon. A careful climb and a timely lesson reveal that patience reaches places strength cannot.",
    pages: [
      { image: GEN, text: "Far, far away, an elephant stamped the forest floor. “Hurry! Hurry!” he trumpeted at everyone." },
      { text: "A chameleon blinked slowly. “I will meet you atop the hill,” he said, “but I will not rush.”" },
      { image: GEN, text: "The elephant charged up the wide path and slipped on loose gravel near the ridge." },
      { text: "The chameleon climbed a narrow, steady route, clinging to bark and fern." },
      { image: GEN, text: "At sunset, the chameleon reached the summit. The elephant arrived, dusty and cross." },
      { text: "“Patience,” said the chameleon, “is not delay. It is the sure path.” The elephant lowered his head and listened." }
    ],
    questions: [
      {
        q: "How did the chameleon climb?",
        options: ["Slowly and steadily", "By flying", "By sliding fast", "By sleeping all day"],
        correct: "Slowly and steadily",
        feedback: { correct: "Yes—careful and steady wins here.", incorrect: "He climbed slowly and steadily." }
      },
      {
        q: "What happened to the elephant?",
        options: ["He slipped on gravel", "He flew away", "He swam across a river", "He found a car"],
        correct: "He slipped on gravel",
        feedback: { correct: "Right—speed led to a slip.", incorrect: "He slipped near the ridge." }
      },
      {
        q: "What is the lesson?",
        options: ["Patience reaches safely", "Speed solves all", "Noise wins", "Never climb hills"],
        correct: "Patience reaches safely",
        feedback: { correct: "Exactly—steady patience is powerful.", incorrect: "Patience brings safe success." }
      }
    ]
  }
];

// ---------------- FINAL (with _id) ----------------
export const upperPrimaryStoriesData: StoryBook[] = base.map((s, i) => ({
  ...s,
  _id: `UP${i + 1}`,
}));
