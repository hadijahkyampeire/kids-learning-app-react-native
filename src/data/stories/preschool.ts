import { type Story } from "../../types";

export const STORY_TOPICS_PRESCHOOL = [
  "Adventure",
  "Home & Family",
  "Friendship",
  "School",
  "Kindness",
  "Animals & Nature",
  "Bravery",
  "Faith",
  "Imagination",
  "Helping"
] as const;

const BG_LOCAL = require("../../assets/images/defaultImage.webp");
const WHEREISTHEBABY = require("../../assets/images/where-is-the-baby.jpg")

const GEN = BG_LOCAL;

type StoryPage = { image?: string; text: string };

// Extend base Story with pages for the book experience
export type StoryBook = Story & {
  class: "baby" | "middle" | "top";
  topic: typeof STORY_TOPICS_PRESCHOOL[number];
  pages: StoryPage[]; 
};

const base: Omit<StoryBook, "_id">[] = [
 {
    level: "preSchool",
    class: "baby",
    topic: "Home & Family",
    title: "Baby’s Day Out",
    coverImage: GEN,
    summary:
      "Baby Zuri goes to Sunflower Park with Mama and Papa. She sees ducks, plays on swings, and sleeps at home.",
    pages: [
      {
        text:
`Once upon a time, in a town called Sunflower Park, there lived a baby named Zuri. She lived with Mama and Papa.
On Saturday morning, Mama said, “Let’s go to the park.” Papa packed a blanket and snacks.
Zuri smiled and clapped. They locked the door and walked to the big green park.`
      },
      {
        text:
`They reached the park and saw a bright pond. Ducks swam in a line. Zuri waved at them.
Mama gave Zuri tiny crumbs. Quack, quack! The ducks ate, and Zuri laughed.
Soon the ducks swam away. Zuri saw the swings. Mama gave a slow, gentle push.`
      },
      {
        image: GEN,
        text:
`The sky turned orange. Zuri yawned and rubbed her eyes.
“Time to go home,” Papa said. They walked back, hand in hand.
At home, Zuri drank warm milk, lay on the soft blanket, and fell asleep.`
      }
    ],
    questions: [
      { q: "Where did Zuri go?", options: ["Sunflower Park", "The beach", "The market", "The forest"], correct: "Sunflower Park",
        feedback: { correct: "Yes—Sunflower Park!", incorrect: "She went to Sunflower Park." } },
      { q: "What animals did Zuri see?", options: ["Ducks", "Cats", "Cows", "Lions"], correct: "Ducks",
        feedback: { correct: "Right—ducks.", incorrect: "She saw ducks at the pond." } },
      { q: "How did the day end?", options: ["Zuri went home and slept","They flew a plane","It started to snow","They went to school"], correct: "Zuri went home and slept",
        feedback: { correct: "Exactly.", incorrect: "They went home and Zuri slept." } }
    ]
  },

  // 2) The Lion and the Mouse — MIDDLE • Helping
  {
    level: "preSchool",
    class: "middle",
    topic: "Helping",
    title: "The Lion and the Mouse",
    coverImage: GEN,
    summary:
      "Kind lion Lumo frees tiny mouse Mosi. Later, Mosi returns the help and cuts a net.",
    pages: [
      {
        text:
`Long time ago, on a wide savanna near Acacia Hill, there lived a lion named Lumo. A small mouse named Mosi lived under a tree.
One day, Mosi ran across Lumo’s paw. Lumo caught Mosi with one big paw.
“Please let me go,” said Mosi. Lumo was kind. He opened his paw.`
      },
      {
        text:
`Another day, Lumo fell into a hunter’s net. The ropes were tight. Lumo roared for help.
Mosi heard the roar and ran to the net. He started to chew the ropes.
Snip, snip, snip! The ropes broke. The net fell down. Lumo was free.`
      },
      {
        image: GEN,
        text:
`“Thank you, Mosi,” said Lumo. They smiled at each other.
They became friends on the savanna.
Lesson: small friends can help in big ways.`
      }
    ],
    questions: [
      { q: "Where did Lumo and Mosi live?", options: ["On a savanna near Acacia Hill","In a city","Under the sea","On a snowy mountain"], correct: "On a savanna near Acacia Hill",
        feedback: { correct: "Yes—on the savanna.", incorrect: "They lived on the savanna near Acacia Hill." } },
      { q: "Who cut the net?", options: ["Mosi the mouse","A hunter","Another lion","A bird"], correct: "Mosi the mouse",
        feedback: { correct: "Right!", incorrect: "Mosi chewed the ropes and helped Lumo." } },
      { q: "What is the lesson?", options: ["Small friends can help","Never sleep","Mice can fly","Nets are toys"], correct: "Small friends can help",
        feedback: { correct: "Exactly.", incorrect: "The lesson is: small friends can help." } }
    ]
  },

  // 3) Max and Molly Learn Their Manners — MIDDLE • School
  {
    level: "preSchool",
    class: "middle",
    topic: "School",
    title: "Max and Molly Learn Their Manners",
    coverImage: GEN,
    summary:
      "At Rainbow Nursery, Max and Molly use 'please' and 'thank you' and help clean up.",
    pages: [
      {
        text:
`It was morning at Rainbow Nursery on Hill Street. Max and Molly were in Blue Class. Teacher Nuru smiled at the door.
They both wanted the blue scissors. They stopped and looked at each other.
Max said, “Please, may I use it first?” Molly nodded and waited.`
      },
      {
        text:
`Max cut a star and gave the scissors to Molly. Molly said, “Thank you.” She cut a heart.
The crayon box fell. Crayons rolled on the floor.
Max and Molly picked them up together. They worked as a team.`
      },
      {
        image: GEN,
        text:
`Teacher Nuru said, “Good manners. Good helpers.”
Max and Molly felt proud and happy.
They learned: share, say kind words, and help clean up.`
      }
    ],
    questions: [
      { q: "Where do Max and Molly study?", options: ["Rainbow Nursery","Boat School","Cave School","Forest Camp"], correct: "Rainbow Nursery",
        feedback: { correct: "Yes—Rainbow Nursery.", incorrect: "They study at Rainbow Nursery." } },
      { q: "What kind words did they use?", options: ["Please and Thank you","Go away","Be quiet","Run now"], correct: "Please and Thank you",
        feedback: { correct: "Right.", incorrect: "They used “Please” and “Thank you.”" } },
      { q: "What did they do when crayons fell?", options: ["They cleaned up","They kicked them","They ran away","They ignored them"], correct: "They cleaned up",
        feedback: { correct: "Exactly.", incorrect: "They picked up the crayons together." } }
    ]
  },

  // 4) The Little Bird — BABY • Animals & Nature
  {
    level: "preSchool",
    class: "baby",
    topic: "Animals & Nature",
    title: "The Little Bird",
    coverImage: GEN,
    summary:
      "Pip practices a small jump today and will fly farther tomorrow.",
    pages: [
      {
        text:
`Once upon a sunny day, behind a red-roof house on River Lane, lived a little bird named Pip. Pip lived with Mama Lala.
Pip wanted to fly like the big birds. Mama said, “We will practice.”
Pip nodded and took a small breath.`
      },
      {
        text:
`Pip stood on the nest edge. Pip jumped to a low branch. Flap, flap.
Pip rested and climbed back. Pip tried again.
Flap, flap—back to the nest. Pip smiled.`
      },
      {
        image: GEN,
        text:
`Mama sang a happy song. She touched Pip’s wing.
“Good job,” Mama said. “Tomorrow, a longer jump.”
Pip looked at the bright sky and felt brave.`
      }
    ],
    questions: [
      { q: "Where does Pip live?", options: ["In a mango tree","In a box","In a cave","In a shoe"], correct: "In a mango tree",
        feedback: { correct: "Yes—Pip lives in a mango tree.", incorrect: "Pip lives in a mango tree." } },
      { q: "What did Pip do first?", options: ["A small jump","A long race","A big swim","Drive a car"], correct: "A small jump",
        feedback: { correct: "Right.", incorrect: "Pip tried a small jump first." } },
      { q: "Who helped Pip?", options: ["Mama Lala","A cat","A dog","A fish"], correct: "Mama Lala",
        feedback: { correct: "Exactly.", incorrect: "Mama Lala helped Pip." } }
    ]
  },

  // 5) Where Is the Baby? — BABY • Home & Family
  {
    level: "preSchool",
    class: "baby",
    topic: "Home & Family",
    title: "Where Is the Baby?",
    coverImage: WHEREISTHEBABY,
    summary:
      "Peekaboo at home on Jasmine Road turns into bedtime for baby Timo.",
    pages: [
      {
        text:
`Once upon a playful evening, in a brick house on Jasmine Road, lived a baby named Timo. He lived with Mama and Papa.
After supper, they played peekaboo in the living room.
Mama asked, “Where is the baby?” Papa started to look.`
      },
      {
        text:
`Papa looked under the blanket. No baby there.
They checked behind the curtain. Not there.
The toy basket moved a little. Rustle, rustle.`
      },
      {
        image: WHEREISTHEBABY,
        text:
`Papa opened the lid. “Peekaboo!” Timo laughed and clapped.
Soon Timo yawned. It was bedtime.
Mama tucked Timo in. “Good night, baby.”`
      }
    ],
    questions: [
      { q: "Where does Timo live?", options: ["On Jasmine Road","In a tent","On a boat","In a cave"], correct: "On Jasmine Road",
        feedback: { correct: "Yes—Jasmine Road.", incorrect: "He lives on Jasmine Road." } },
      { q: "Where was Timo hiding?", options: ["In the toy basket","On the roof","At the shop","In the garden"], correct: "In the toy basket",
        feedback: { correct: "Right!", incorrect: "He was in the toy basket." } },
      { q: "What happened at the end?", options: ["Timo went to sleep","They went to the beach","They built a kite","They cooked soup"], correct: "Timo went to sleep",
        feedback: { correct: "Exactly.", incorrect: "It was bedtime; Timo slept." } }
    ]
  },

  // 6) Mariam Goes to School — TOP • School
  {
    level: "preSchool",
    class: "top",
    topic: "School",
    title: "Mariam Goes to School",
    coverImage: GEN,
    summary:
      "Maria Mariam meets her teacher, sings the hello song, and visits the reading corner.",
    pages: [
      {
        text:
`Once upon a bright morning, near Lake Road, lived a girl named Maria Mariam. She lived with her parents, brother, and sister.
Today was her first school day. She zipped her bag and checked her pencils.
Papa held her hand. They walked to school.`
      },
      {
        text:
      `At the gate, Teacher Sara smiled. “Welcome,” she said. The class sang a hello song. They sat on a round carpet.
      Mariam felt calm and brave.`
      },
      {
        image: GEN,
        text:
`Mariam visited the reading corner. She chose a cat book. A new friend sat with her. They turned pages slowly.
The bell rang. “I will come again tomorrow,” Mariam said.`
      }
    ],
    questions: [
      { q: "Where does Mariam live?", options: ["Near Lake Road","On a ship","In a cave","On a far farm"], correct: "Near Lake Road",
        feedback: { correct: "Yes—near Lake Road.", incorrect: "She lives near Lake Road." } },
      { q: "Who welcomed her at the gate?", options: ["Teacher Sara","A pilot","A chef","A mail carrier"], correct: "Teacher Sara",
        feedback: { correct: "Right.", incorrect: "Her teacher smiled at the gate." } },
      { q: "Which corner did she visit?", options: ["The reading corner","The kitchen","The bus garage","The science lab"], correct: "The reading corner",
        feedback: { correct: "Exactly.", incorrect: "She went to the reading corner." } }
    ]
  },
  {
    level: "preSchool",
    class: "baby",
    topic: "Bravery",
    title: "Benny the Brave Bunny",
    coverImage: "https://kids-app-images.s3.us-east-1.amazonaws.com/brave-bunny.jpg",
    summary:
      "Benny fears the dark until Luna the owl shows him the night sky. He learns the dark can be calm and beautiful.",
    pages: [
      {
        image: "https://kids-app-images.s3.us-east-1.amazonaws.com/brave-bunny.jpg",
        text: "Once upon a time, there was a little bunny named Benny who was afraid of the dark.",
      },
      {
        text: "Luna the owl said, “Come see the stars with me.” Benny felt a tiny spark of courage.",
      },
      {
        image: GEN,
        text: "He looked up at the bright stars and smiled. The night felt friendly at last.",
      },
    ],
    questions: [
      {
        q: "What kind of animal was Benny?",
        options: ["Bunny", "Cat", "Dog", "Duck"],
        correct: "Bunny",
        feedback: { correct: "Yes—Benny is a bunny!", incorrect: "Check again—Benny is a bunny." }
      },
      {
        q: "Who invited Benny to see the stars?",
        options: ["Luna the owl", "Milo the monkey", "Aisha", "Ahmed"],
        correct: "Luna the owl",
        feedback: { correct: "Right—his friend Luna invited him.", incorrect: "It was Luna the owl." }
      },
      {
        q: "What did Benny see in the sky?",
        options: ["Stars", "Rainbows", "Clouds", "Birds"],
        correct: "Stars",
        feedback: { correct: "Yes—shiny stars in the night sky!", incorrect: "Look up—he saw the stars." }
      }
    ]
  },

  {
    level: "preSchool",
    class: "middle",
    topic: "Adventure",
    title: "Milo’s Missing Hat",
    coverImage: "https://kids-app-images.s3.us-east-1.amazonaws.com/milo-monkey.jpg",
    summary:
      "Milo’s red hat blows away. He searches trees, the riverbank, and a grove—then finds it on a giraffe’s head.",
    pages: [
      {
        image: "https://kids-app-images.s3.us-east-1.amazonaws.com/milo-monkey.jpg",
        text: "Long time ago, a cheeky monkey named Milo had a bright red hat that blew away in a big gust of wind.",
      },
      {
        image: GEN,
        text: "He searched the tall trees, the riverbank, and the banana grove. No hat!",
      },
      {
        image: GEN,
        text: "He looked up and laughed—a friendly giraffe was wearing it! The giraffe bowed and returned the hat.",
      },
    ],
    questions: [
      {
        q: "What color was Milo’s hat?",
        options: ["Red", "Blue", "Green", "Purple"],
        correct: "Red",
        feedback: { correct: "Correct—Milo loves his red hat.", incorrect: "Not quite—it was red." }
      },
      {
        q: "Where did Milo find his hat?",
        options: ["On a friendly giraffe’s head", "In the river", "Under a rock", "In his bag"],
        correct: "On a friendly giraffe’s head",
        feedback: { correct: "Yes—a giraffe was wearing it!", incorrect: "Try again—look at who was wearing it." }
      },
      {
        q: "Where did Milo look for his hat?",
        options: [
          "In the trees, by the river, and in the banana grove",
          "Only at home",
          "Only in the city",
          "He didn’t look at all"
        ],
        correct: "In the trees, by the river, and in the banana grove",
        feedback: { correct: "Right—he searched in three places.", incorrect: "He searched in those three places." }
      }
    ]
  },

  {
    level: "preSchool",
    class: "top",
    topic: "Imagination",
    title: "Sally and the Magic Seeds",
    coverImage: "https://kids-app-images.s3.us-east-1.amazonaws.com/sally-seeds.webp",
    summary:
      "Sally plants three shiny seeds. They grow into candy trees, and she generously shares the sweets.",
    pages: [
      {
        image: "https://kids-app-images.s3.us-east-1.amazonaws.com/sally-seeds.webp",
        text: "Once upon a time, Sally found three shiny seeds and planted them with care.",
      },
      {
        image: GEN,
        text: "Sprouts appeared, then tall trees. She watered them each day.",
      },
      {
        image: GEN,
        text: "One morning, candy hung from the branches! Sally shared with all her friends.",
      },
    ],
    questions: [
      {
        q: "How many seeds did Sally plant?",
        options: ["Three", "One", "Two", "Four"],
        correct: "Three",
        feedback: { correct: "Yes—she planted three seeds.", incorrect: "Count again—she planted three." }
      },
      {
        q: "What grew from the seeds?",
        options: ["Candy trees", "Apple trees", "Pumpkin vines", "Flowers"],
        correct: "Candy trees",
        feedback: { correct: "Sweet! Candy trees grew.", incorrect: "Not quite—candy trees appeared!" }
      },
      {
        q: "Did Sally share the candy?",
        options: ["Yes", "No"],
        correct: "Yes",
        feedback: { correct: "That’s kind—she shared with friends.", incorrect: "She did share the candy." }
      }
    ]
  },

  {
    level: "preSchool",
    class: "baby",
    topic: "Animals & Nature",
    title: "Tommy the Tiny Turtle",
    coverImage: "https://kids-app-images.s3.us-east-1.amazonaws.com/tommy-turtle.jpeg",
    summary:
      "Tiny Tommy joins a race. He moves slowly and steadily until he finishes, cheered by everyone.",
    pages: [
      {
        image: "https://kids-app-images.s3.us-east-1.amazonaws.com/tommy-turtle.jpeg",
        text: "Far, far away in a quiet pond, there was a tiny turtle named Tommy who wished to join a big race.",
      },
      {
        image: GEN,
        text: "The others sped ahead, but Tommy kept going: step… step… step…",
      },
      {
        image: GEN,
        text: "He crossed the finish line. The pond animals cheered, “Hooray for Tommy!”",
      },
    ],
    questions: [
      {
        q: "What animal was Tommy?",
        options: ["Turtle", "Fish", "Rabbit", "Duck"],
        correct: "Turtle",
        feedback: { correct: "Yes—Tommy is a turtle.", incorrect: "Look again—Tommy is a turtle." }
      },
      {
        q: "Where did Tommy live?",
        options: ["Pond", "Sea", "Forest", "Desert"],
        correct: "Pond",
        feedback: { correct: "Right—he lived in a pond.", incorrect: "He lived in the pond." }
      },
      {
        q: "Why did everyone cheer for Tommy?",
        options: ["He never gave up", "He was the fastest", "He flew", "He took a shortcut"],
        correct: "He never gave up",
        feedback: { correct: "Yes—slow and steady!", incorrect: "They cheered because he didn’t give up." }
      }
    ]
  },

  {
    level: "preSchool",
    class: "middle",
    topic: "School",
    title: "Tommy’s First Day at School",
    coverImage: "https://kids-app-images.s3.us-east-1.amazonaws.com/tommy-school.jpg",
    summary:
      "Tommy wears a new uniform, meets friends, sings, and draws. He’s excited to return the next day.",
    pages: [
      {
        image: "https://kids-app-images.s3.us-east-1.amazonaws.com/tommy-school.jpg",
        text: "Once upon a bright morning, Tommy wore his new uniform and packed his schoolbag.",
      },
      {
        image: GEN,
        text: "His teacher welcomed him kindly. He met new friends and played friendly games.",
      },
      {
        image: GEN,
        text: "He learned a song and drew a colorful picture. School felt fun and safe.",
      },
    ],
    questions: [
      {
        q: "What was Tommy wearing on his first day?",
        options: ["A new uniform", "A party costume", "Pajamas", "A raincoat"],
        correct: "A new uniform",
        feedback: { correct: "Yes—he wore a new uniform.", incorrect: "He wore a new uniform." }
      },
      {
        q: "Who took Tommy to school?",
        options: ["His mom", "His dad", "His friend", "His teacher"],
        correct: "His mom",
        feedback: { correct: "Right—his mom walked with him.", incorrect: "His mom took him to school." }
      },
      {
        q: "What did Tommy do at school?",
        options: ["Learned a song and drew a picture", "Slept all day", "Went swimming", "Drove a car"],
        correct: "Learned a song and drew a picture",
        feedback: { correct: "Yes—he sang and drew!", incorrect: "He learned a song and drew." }
      }
    ]
  },

  {
    level: "preSchool",
    class: "top",
    topic: "Adventure",
    title: "Mariam & Alesha’s Forest Walk",
    coverImage: "https://kids-app-images.s3.us-east-1.amazonaws.com/namutebi-alesha.webp",
    summary:
      "Two sisters explore a forest stream, spot bright birds, and gently free a trapped deer before heading back to camp.",
    pages: [
      {
        image: "https://kids-app-images.s3.us-east-1.amazonaws.com/namutebi-alesha.webp",
        text: "Far, far away near a forest camp, two sisters named Mariam and Alesha set out to explore.",
      },
      {
        image: GEN,
        text: "They followed a singing stream and watched bright birds hop from branch to branch.",
      },
      {
        image: GEN,
        text: "A deer was stuck in thorny bushes. They slowly freed it, and it ran safely away.",
      },
    ],
    questions: [
      {
        q: "Who went camping?",
        options: [
          "Mariam and Alesha with their parents",
          "Only Mariam",
          "Only Alesha",
          "Two friends from school"
        ],
        correct: "Mariam and Alesha with their parents",
        feedback: { correct: "Yes—both sisters went with parents.", incorrect: "They went with their parents." }
      },
      {
        q: "What animal did they help?",
        options: ["A deer", "A cat", "A bird", "A turtle"],
        correct: "A deer",
        feedback: { correct: "Right—They helped a deer.", incorrect: "It was a deer." }
      },
      {
        q: "Where did they go exploring?",
        options: ["The forest", "The city", "The beach", "A cave"],
        correct: "The forest",
        feedback: { correct: "Yes—near the river in the forest.", incorrect: "They explored the forest." }
      }
    ]
  },

  {
    level: "preSchool",
    class: "top",
    topic: "Faith",
    title: "The Ant and Prophet Sulaiman",
    coverImage: "https://kids-app-images.s3.us-east-1.amazonaws.com/sulaiman-ant-story.jpg",
    summary:
      "Prophet Sulaiman understands an ant’s warning and guides his army to walk gently, thanking Allah for the blessing.",
    pages: [
      {
        image: "https://kids-app-images.s3.us-east-1.amazonaws.com/sulaiman-ant-story.jpg",
        text: "Long time ago, a wise Prophet named Sulaiman (A.S) could understand animals by Allah’s gift.",
      },
      {
        image: GEN,
        text: "He heard a tiny ant say, “Hide in your homes; the army is coming!”",
      },
      {
        image: GEN,
        text: "He smiled, thanked Allah, and told the soldiers to walk softly so no ants would be harmed.",
      },
    ],
    questions: [
      {
        q: "Who could understand the language of animals?",
        options: ["Prophet Sulaiman (A.S)", "Prophet Yunus (A.S)", "Prophet Musa (A.S)", "Prophet Ibrahim (A.S)"],
        correct: "Prophet Sulaiman (A.S)",
        feedback: { correct: "Yes—Allah gave him that ability.", incorrect: "It was Prophet Sulaiman (A.S)." }
      },
      {
        q: "What did the ant tell the other ants to do?",
        options: ["Hide in your homes", "Come out to play", "Fly away", "Collect mangoes"],
        correct: "Hide in your homes",
        feedback: { correct: "Right—the ants needed safety.", incorrect: "The ant said, “Hide in your homes.”" }
      }
    ]
  },

  {
    level: "preSchool",
    class: "baby",
    topic: "Faith",
    title: "The Boy Who Remembered Bismillah",
    coverImage: "https://kids-app-images.s3.us-east-1.amazonaws.com/bismillahi-story.jpg",
    summary:
      "Ali remembers to say “Bismillah” before eating, and his little sister follows his good example.",
    pages: [
      {
        image: "https://kids-app-images.s3.us-east-1.amazonaws.com/bismillahi-story.jpg",
        text: "Once upon a time, a hungry boy named Ali reached for his food and paused to say, “Bismillah.”",
      },
      {
        image: GEN,
        text: "He smiled and began to eat. His little sister watched and said it too.",
      },
      {
        image: GEN,
        text: "They both felt happy for remembering Allah before their meal.",
      },
    ],
    questions: [
      {
        q: "What did Ali say before eating?",
        options: ["Bismillah", "Alhamdulillah", "Subhanallah", "Allahu Akbar"],
        correct: "Bismillah",
        feedback: { correct: "Yes—he remembered to say Bismillah.", incorrect: "He said “Bismillah.”" }
      },
      {
        q: "Who taught Ali to say Bismillah?",
        options: ["His mother", "His teacher", "His friend", "His sister"],
        correct: "His mother",
        feedback: { correct: "Right—his mother taught him.", incorrect: "His mother taught him." }
      }
    ]
  },

  {
    level: "preSchool",
    class: "baby",
    topic: "School",
    title: "Gulu Gulu Goes to School",
    coverImage: "https://kids-app-images.s3.us-east-1.amazonaws.com/gulu+gulu.png",
    summary:
      "A playful goat follows Mariam to class, listens to songs, eats grass at lunch, and becomes everyone’s friend.",
    pages: [
      {
        image: "https://kids-app-images.s3.us-east-1.amazonaws.com/gulu+gulu.png",
        text: "Once upon a time, a playful goat named Gulu Gulu followed Mariam all the way to school.",
      },
      {
        image: GEN,
        text: "The teacher smiled and let him stay. Gulu Gulu listened to songs and tried to read.",
      },
      {
        image: GEN,
        text: "At lunch he munched on grass outside. The children laughed and gave him a hug.",
      },
    ],
    questions: [
      {
        q: "Who went to school with Mariam?",
        options: ["Gulu Gulu (the goat)", "Her cat", "Her baby brother", "Her bird"],
        correct: "Gulu Gulu (the goat)",
        feedback: { correct: "Yes—Gulu Gulu is a goat!", incorrect: "It was Gulu Gulu the goat." }
      },
      {
        q: "What did Gulu Gulu eat at lunch?",
        options: ["Grass", "Bananas", "Rice", "Cookies"],
        correct: "Grass",
        feedback: { correct: "Right—he munched on grass.", incorrect: "He ate grass." }
      },
      {
        q: "What did Gulu Gulu do in class?",
        options: ["Listened to songs", "Slept under the desk", "Ran around the field", "Cooked lunch"],
        correct: "Listened to songs",
        feedback: { correct: "Yes—he listened and tried to read.", incorrect: "He listened to songs." }
      }
    ]
  },

  {
    level: "preSchool",
    class: "baby",
    topic: "Kindness",
    title: "Aisha and the Lost Kitten",
    coverImage: "https://kids-app-images.s3.us-east-1.amazonaws.com/lostKitten.jpeg",
    summary:
      "Aisha feeds a lost kitten and returns it to its owner, who thanks her with a small treat.",
    pages: [
      {
        image: "https://kids-app-images.s3.us-east-1.amazonaws.com/lostKitten.jpeg",
        text: "Once upon a time, a kind girl named Aisha heard a tiny kitten crying near her home.",
      },
      {
        image: GEN,
        text: "She gave the kitten some milk. Purr… purr… It followed her happily.",
      },
      {
        image: GEN,
        text: "The owner came looking. Aisha returned the kitten and received a sweet thank-you treat.",
      },
    ],
    questions: [
      {
        q: "What did Aisha give the kitten to drink?",
        options: ["Milk", "Juice", "Water", "Tea"],
        correct: "Milk",
        feedback: { correct: "Yes—she gave it milk.", incorrect: "She gave the kitten milk." }
      },
      {
        q: "What did the owner give Aisha?",
        options: ["A sweet treat", "A book", "A hat", "A toy car"],
        correct: "A sweet treat",
        feedback: { correct: "Right—the owner thanked her with a treat.", incorrect: "The owner gave her a sweet treat." }
      },
      {
        q: "What did the kitten do after Aisha helped it?",
        options: ["It followed Aisha", "It ran far away", "It went to sleep", "It climbed a tree"],
        correct: "It followed Aisha",
        feedback: { correct: "Yes—it followed her everywhere.", incorrect: "It followed Aisha." }
      }
    ]
  },
  {
    level: "preSchool",
    class: "baby",
    topic: "Adventure",
    title: "River Boat Ride",
    coverImage: GEN,
    summary:
      "Two friends make a tiny leaf boat and follow it along a stream, learning to explore safely and together.",
    pages: [
      { image: GEN, text: "Once upon a time, two small friends made a leaf boat and placed it on a gentle stream." },
      { image: GEN, text: "They walked along the bank, laughing as the little boat danced around tiny stones." },
      { image: GEN, text: "At a bend, the boat stopped in a puddle. They cheered and took a photo to remember their brave boat." },
    ],
    questions: [
      {
        q: "What did the children make?",
        options: ["A leaf boat", "A kite", "A sandcastle"],
        correct: "A leaf boat",
        feedback: { correct: "Yes! A tiny leaf boat.", incorrect: "Look again—they made a leaf boat." }
      },
      {
        q: "Where did they put the boat?",
        options: ["On a stream", "In a basket", "On the playground"],
        correct: "On a stream",
        feedback: { correct: "Right—on the stream!", incorrect: "They floated it on a stream." }
      }
    ]
  },
  {
    level: "preSchool",
    class: "baby",
    topic: "Adventure",
    title: "Forest Cave Surprise",
    coverImage: GEN,
    summary:
      "A walk becomes an adventure when the children find a little cave and discover shining stones.",
    pages: [
      { image: GEN, text: "Long time ago, two children walked into a sunny forest with a small basket of snacks." },
      { image: GEN, text: "They found a tiny cave and peeped inside—sparkly stones glittered like stars!" },
      { image: GEN, text: "They picked one small stone each and promised to keep the forest clean and safe." },
    ],
    questions: [
      {
        q: "What did they find in the cave?",
        options: ["Shiny stones", "A boat", "A drum"],
        correct: "Shiny stones",
        feedback: { correct: "Yes—sparkly stones!", incorrect: "They saw shiny stones." }
      },
      {
        q: "What did they promise?",
        options: ["To keep the forest clean", "To build a house", "To bring a ladder"],
        correct: "To keep the forest clean",
        feedback: { correct: "Right—care for nature!", incorrect: "They promised to keep it clean." }
      }
    ]
  },

  // ========== BABY • HOME & FAMILY ==========
  {
    level: "preSchool",
    class: "baby",
    topic: "Home & Family",
    title: "Grandpa’s Drum",
    coverImage: GEN,
    summary:
      "Grandpa shows an old drum and teaches a simple rhythm the whole family enjoys after dinner.",
    pages: [
      { image: GEN, text: "Once upon a time, Grandpa brought out an old drum after dinner." },
      { image: GEN, text: "He taught a simple beat—dum, dum, ta! Everyone clapped along." },
      { image: GEN, text: "They laughed, sang, and shared mango slices before bedtime." },
    ],
    questions: [
      {
        q: "What did Grandpa bring?",
        options: ["A drum", "A kite", "A ball"],
        correct: "A drum",
        feedback: { correct: "Yes—a drum!", incorrect: "He brought a drum." }
      },
      {
        q: "How did the family join?",
        options: ["Clapped along", "Went to play football", "Danced outside in the rain"],
        correct: "Clapped along",
        feedback: { correct: "Right—they clapped!", incorrect: "They clapped to the beat." }
      }
    ]
  },

  // ========== BABY • FRIENDSHIP ==========
  {
    level: "preSchool",
    class: "baby",
    topic: "Friendship",
    title: "The Balloon Share",
    coverImage: GEN,
    summary:
      "Two balloons and three friends teach a sweet lesson: sharing brings smiles for everyone.",
    pages: [
      { image: GEN, text: "Once upon a time, Sami had two balloons and three friends in the yard." },
      { image: GEN, text: "He gave one balloon away and tied the other to a stick for everyone to touch." },
      { image: GEN, text: "They took turns bouncing it up—giggles filled the sunny yard." },
    ],
    questions: [
      {
        q: "How many balloons did Sami have?",
        options: ["Two", "One", "Three"],
        correct: "Two",
        feedback: { correct: "Yes—two balloons.", incorrect: "He had two." }
      },
      {
        q: "What did they do with the last balloon?",
        options: ["Shared it", "Popped it", "Hid it"],
        correct: "Shared it",
        feedback: { correct: "Right—sharing is caring!", incorrect: "They shared it." }
      }
    ]
  },

  // ========== BABY • SCHOOL ==========
  {
    level: "preSchool",
    class: "baby",
    topic: "School",
    title: "Circle Time Song",
    coverImage: GEN,
    summary:
      "At school, children sit in a circle, sing together, and learn to wait for their turn.",
    pages: [
      { image: GEN, text: "Once upon a time, the class sat in a circle on a bright rug." },
      { image: GEN, text: "They sang a hello song and passed a drum for a tiny solo beat." },
      { image: GEN, text: "Everyone waited for a turn, and the room felt kind and warm." },
    ],
    questions: [
      {
        q: "Where did the children sit?",
        options: ["In a circle", "In a line", "On benches"],
        correct: "In a circle",
        feedback: { correct: "Yes—in a circle.", incorrect: "They sat in a circle." }
      },
      {
        q: "What did they pass around?",
        options: ["A drum", "A kite", "A book"],
        correct: "A drum",
        feedback: { correct: "Right—a drum.", incorrect: "They passed a drum." }
      }
    ]
  },

  // ========== BABY • KINDNESS ==========
  {
    level: "preSchool",
    class: "baby",
    topic: "Kindness",
    title: "The Broken Crayon",
    coverImage: GEN,
    summary:
      "A crayon snaps in half, but two children learn that sharing pieces makes more art for everyone.",
    pages: [
      { image: GEN, text: "Once upon a time, a red crayon broke in two during art time." },
      { image: GEN, text: "Mina gave one half to Musa. They colored together—red apples for both!" },
      { image: GEN, text: "They learned that sharing turns little problems into smiles." },
    ],
    questions: [
      {
        q: "What broke?",
        options: ["A red crayon", "A pencil", "A ruler"],
        correct: "A red crayon",
        feedback: { correct: "Yes—the crayon!", incorrect: "The crayon broke." }
      },
      {
        q: "How did they fix the problem?",
        options: ["Shared the halves", "Threw it away", "Stopped drawing"],
        correct: "Shared the halves",
        feedback: { correct: "Right—sharing solved it!", incorrect: "They shared it." }
      }
    ]
  },

  // ========== BABY • ANIMALS & NATURE ==========
  {
    level: "preSchool",
    class: "baby",
    topic: "Animals & Nature",
    title: "Butterfly Garden",
    coverImage: GEN,
    summary:
      "Children visit a small garden and watch a butterfly rest on a flower before flying away.",
    pages: [
      { image: GEN, text: "Once upon a time, the class visited a tiny garden full of bright flowers." },
      { image: GEN, text: "A butterfly landed on a yellow petal and slowly opened its wings." },
      { image: GEN, text: "They whispered goodbye as it flew up into the sun." },
    ],
    questions: [
      {
        q: "What landed on the flower?",
        options: ["A butterfly", "A bird", "A kite"],
        correct: "A butterfly",
        feedback: { correct: "Yes—a butterfly!", incorrect: "It was a butterfly." }
      },
      {
        q: "What color was the petal?",
        options: ["Yellow", "Blue", "Black"],
        correct: "Yellow",
        feedback: { correct: "Right—yellow.", incorrect: "The petal was yellow." }
      }
    ]
  },

  // ========== BABY • BRAVERY ==========
  {
    level: "preSchool",
    class: "baby",
    topic: "Bravery",
    title: "Night Lantern Walk",
    coverImage: GEN,
    summary:
      "A short walk with a lantern shows the children that night can be calm and beautiful.",
    pages: [
      { image: GEN, text: "Once upon a time, the children held a small lantern and stepped into the yard." },
      { image: GEN, text: "They saw moonlight on leaves and heard soft crickets sing." },
      { image: GEN, text: "They smiled—the night was gentle, and they were brave." },
    ],
    questions: [
      {
        q: "What did they carry?",
        options: ["A lantern", "A drum", "A book"],
        correct: "A lantern",
        feedback: { correct: "Yes—a lantern.", incorrect: "They carried a lantern." }
      },
      {
        q: "What did they hear?",
        options: ["Crickets", "Cars", "Thunder"],
        correct: "Crickets",
        feedback: { correct: "Right—crickets chirping.", incorrect: "They heard crickets." }
      }
    ]
  },

  // ========== BABY • FAITH ==========
  {
    level: "preSchool",
    class: "baby",
    topic: "Faith",
    title: "Little Dua Before Sleep",
    coverImage: GEN,
    summary:
      "A child remembers to say a short dua before sleeping and feels peaceful and safe.",
    pages: [
      { image: GEN, text: "Once upon a time, a little child lay in bed and whispered a small dua." },
      { image: GEN, text: "They thanked Allah for the day and for their family." },
      { image: GEN, text: "Soon, their eyes closed gently, and the room felt peaceful." },
    ],
    questions: [
      {
        q: "When did the child say the dua?",
        options: ["Before sleep", "At the market", "At the river"],
        correct: "Before sleep",
        feedback: { correct: "Yes—before sleep.", incorrect: "It was before sleep." }
      },
      {
        q: "What did the child feel?",
        options: ["Peaceful", "Angry", "Hungry"],
        correct: "Peaceful",
        feedback: { correct: "Right—peaceful.", incorrect: "They felt peaceful." }
      }
    ]
  },

  // ========== BABY • IMAGINATION ==========
  {
    level: "preSchool",
    class: "baby",
    topic: "Imagination",
    title: "Box Rocket to the Moon",
    coverImage: GEN,
    summary:
      "A cardboard box becomes a rocket, and the children count down to a pretend moon trip.",
    pages: [
      { image: GEN, text: "Once upon a time, a big box turned into a shining rocket ship." },
      { image: GEN, text: "The children put on paper helmets and counted: 3…2…1…!" },
      { image: GEN, text: "They landed on a fluffy rug-moon and bounced with joy." },
    ],
    questions: [
      {
        q: "What did the box become?",
        options: ["A rocket", "A boat", "A bus"],
        correct: "A rocket",
        feedback: { correct: "Yes—a rocket!", incorrect: "It became a rocket." }
      },
      {
        q: "Where did they land?",
        options: ["On the rug-moon", "In the kitchen", "In the garden pond"],
        correct: "On the rug-moon",
        feedback: { correct: "Right—the rug-moon!", incorrect: "They landed on the rug-moon." }
      }
    ]
  },

  // ========== BABY • HELPING ==========
  {
    level: "preSchool",
    class: "baby",
    topic: "Helping",
    title: "Clean-Up Parade",
    coverImage: GEN,
    summary:
      "A song turns tidy-up time into a parade where everyone helps put toys away.",
    pages: [
      { image: GEN, text: "Once upon a time, toys covered the floor like tiny hills." },
      { image: GEN, text: "The children sang a clean-up song and formed a line to the basket." },
      { image: GEN, text: "Clap, clap—done! The room looked bright again." },
    ],
    questions: [
      {
        q: "What did the children do?",
        options: ["Cleaned up", "Drew on walls", "Went to sleep"],
        correct: "Cleaned up",
        feedback: { correct: "Yes—cleaned together!", incorrect: "They cleaned up." }
      },
      {
        q: "Where did the toys go?",
        options: ["In the basket", "Under the bed", "In the sink"],
        correct: "In the basket",
        feedback: { correct: "Right—in the basket.", incorrect: "Into the basket." }
      }
    ]
  },

  // ---------------------------------------------------------
  // MIDDLE CLASS
  // ---------------------------------------------------------

  // ========== MIDDLE • ADVENTURE ==========
  {
    level: "preSchool",
    class: "middle",
    topic: "Adventure",
    title: "Market Maze",
    coverImage: GEN,
    summary:
      "Two cousins follow a fruit-scent trail around the market to find a sweet surprise.",
    pages: [
      { image: GEN, text: "Once upon a time, cousins Ayo and Nuru visited the busy market." },
      { image: GEN, text: "They followed a sweet mango smell—left, right, around a basket maze!" },
      { image: GEN, text: "At last: free mango slices! They thanked the seller with big smiles." },
    ],
    questions: [
      {
        q: "What smell did they follow?",
        options: ["Mango", "Popcorn", "Bananas"],
        correct: "Mango",
        feedback: { correct: "Yes—mango!", incorrect: "They followed a mango smell." }
      },
      {
        q: "Where were they?",
        options: ["At the market", "At the beach", "At the farm"],
        correct: "At the market",
        feedback: { correct: "Right—the market.", incorrect: "They were at the market." }
      }
    ]
  },

  // ========== MIDDLE • HOME & FAMILY ==========
  {
    level: "preSchool",
    class: "middle",
    topic: "Home & Family",
    title: "Baking Day",
    coverImage: GEN,
    summary:
      "Flour on noses and warm buns in a tray—family baking turns into sweet sharing.",
    pages: [
      { image: GEN, text: "Once upon a time, the kitchen smelled of flour and butter." },
      { image: GEN, text: "They mixed, stirred, and put buns into the oven." },
      { image: GEN, text: "Ding! Warm buns were shared with neighbors at the gate." },
    ],
    questions: [
      {
        q: "What did they bake?",
        options: ["Buns", "Pies", "Pizza"],
        correct: "Buns",
        feedback: { correct: "Yes—buns.", incorrect: "They baked buns." }
      },
      {
        q: "Who got a share?",
        options: ["Neighbors", "No one", "Only the cat"],
        correct: "Neighbors",
        feedback: { correct: "Right—neighbors too!", incorrect: "They shared with neighbors." }
      }
    ]
  },

  // ========== MIDDLE • FRIENDSHIP ==========
  {
    level: "preSchool",
    class: "middle",
    topic: "Friendship",
    title: "The New Neighbor",
    coverImage: GEN,
    summary:
      "A shy new neighbor joins sidewalk games after being welcomed with chalk and smiles.",
    pages: [
      { image: GEN, text: "Once upon a time, a new child watched from the gate, quiet and shy." },
      { image: GEN, text: "Zahra handed them a chalk and drew a big sun on the ground." },
      { image: GEN, text: "Soon they were laughing and hopping over chalk stars." },
    ],
    questions: [
      {
        q: "Who did Zahra meet?",
        options: ["A new neighbor", "A doctor", "A vendor"],
        correct: "A new neighbor",
        feedback: { correct: "Yes—a new neighbor.", incorrect: "It was a new neighbor." }
      },
      {
        q: "What did Zahra give them?",
        options: ["Chalk", "A kite", "A drumstick"],
        correct: "Chalk",
        feedback: { correct: "Right—chalk to draw.", incorrect: "She gave them chalk." }
      }
    ]
  },

  // ========== MIDDLE • SCHOOL ==========
  {
    level: "preSchool",
    class: "middle",
    topic: "School",
    title: "Art Day",
    coverImage: GEN,
    summary:
      "Paper, paint, and a long drying line turn a classroom into a cheerful gallery.",
    pages: [
      { image: GEN, text: "Once upon a time, the teacher rolled out a long paper tablecloth." },
      { image: GEN, text: "The children dabbed colors—flowers, clouds, and bright shapes." },
      { image: GEN, text: "They clipped the art to a string and clapped for their gallery!" },
    ],
    questions: [
      {
        q: "What did the teacher roll out?",
        options: ["A long paper", "A carpet", "A blanket"],
        correct: "A long paper",
        feedback: { correct: "Yes—long paper.", incorrect: "A long paper roll." }
      },
      {
        q: "Where did they hang the art?",
        options: ["On a string", "On the door", "On a tree"],
        correct: "On a string",
        feedback: { correct: "Right—on a string.", incorrect: "They clipped it on a string." }
      }
    ]
  },

  // ========== MIDDLE • KINDNESS ==========
  {
    level: "preSchool",
    class: "middle",
    topic: "Kindness",
    title: "Bench Umbrella",
    coverImage: GEN,
    summary:
      "Rain falls, but a big umbrella makes space for two more children to stay dry together.",
    pages: [
      { image: GEN, text: "Once upon a time, rain tapped on the bench at the bus stop." },
      { image: GEN, text: "Mira opened her big umbrella and waved two children over." },
      { image: GEN, text: "They huddled close and shared a warm laugh under the drops." },
    ],
    questions: [
      {
        q: "What did Mira open?",
        options: ["An umbrella", "A book", "A box"],
        correct: "An umbrella",
        feedback: { correct: "Yes—an umbrella.", incorrect: "She opened an umbrella." }
      },
      {
        q: "How many children did she help?",
        options: ["Two", "One", "Four"],
        correct: "Two",
        feedback: { correct: "Right—two children.", incorrect: "She helped two." }
      }
    ]
  },

  // ========== MIDDLE • ANIMALS & NATURE ==========
  {
    level: "preSchool",
    class: "middle",
    topic: "Animals & Nature",
    title: "Puppy at the Gate",
    coverImage: GEN,
    summary:
      "A thirsty puppy at the gate gets a small bowl of water and a gentle pat.",
    pages: [
      { image: GEN, text: "Once upon a time, a small puppy waited by the gate, panting softly." },
      { image: GEN, text: "Rashid brought a little bowl of water and set it down carefully." },
      { image: GEN, text: "Slurp slurp—the puppy wagged its tail and licked Rashid’s shoe." },
    ],
    questions: [
      {
        q: "Who came to the gate?",
        options: ["A puppy", "A goat", "A duck"],
        correct: "A puppy",
        feedback: { correct: "Yes—a puppy.", incorrect: "It was a puppy." }
      },
      {
        q: "What did Rashid give it?",
        options: ["Water", "A balloon", "A hat"],
        correct: "Water",
        feedback: { correct: "Right—water.", incorrect: "He gave water." }
      }
    ]
  },

  // ========== MIDDLE • BRAVERY ==========
  {
    level: "preSchool",
    class: "middle",
    topic: "Bravery",
    title: "First Big Slide",
    coverImage: GEN,
    summary:
      "A child climbs the tall slide, breathes deeply, and whooshes down with joy.",
    pages: [
      { image: GEN, text: "Once upon a time, the tall slide looked very high." },
      { image: GEN, text: "Talia climbed slowly—step, step—and took a deep breath." },
      { image: GEN, text: "Whoosh! She slid down and ran back up with a big grin." },
    ],
    questions: [
      {
        q: "What did Talia climb?",
        options: ["A slide", "A tree", "A wall"],
        correct: "A slide",
        feedback: { correct: "Yes—the slide.", incorrect: "She climbed a slide." }
      },
      {
        q: "How did she feel after?",
        options: ["Happy", "Angry", "Sleepy"],
        correct: "Happy",
        feedback: { correct: "Right—happy!", incorrect: "She felt happy." }
      }
    ]
  },

  // ========== MIDDLE • FAITH ==========
  {
    level: "preSchool",
    class: "middle",
    topic: "Faith",
    title: "Eid Morning",
    coverImage: GEN,
    summary:
      "New clothes, sweet dates, and hugs—Eid morning glows with prayer and smiles.",
    pages: [
      { image: GEN, text: "Once upon a time, the sun rose bright on Eid morning." },
      { image: GEN, text: "They ate dates, put on new clothes, and went to pray." },
      { image: GEN, text: "Hugs, smiles, and candy made the day special." },
    ],
    questions: [
      {
        q: "What did they eat first?",
        options: ["Dates", "Cake", "Rice"],
        correct: "Dates",
        feedback: { correct: "Yes—dates.", incorrect: "They ate dates first." }
      },
      {
        q: "How did people greet each other?",
        options: ["With hugs and smiles", "By hiding", "By whispering"],
        correct: "With hugs and smiles",
        feedback: { correct: "Right—hugs and smiles.", incorrect: "They greeted with hugs and smiles." }
      }
    ]
  },

  // ========== MIDDLE • IMAGINATION ==========
  {
    level: "preSchool",
    class: "middle",
    topic: "Imagination",
    title: "Pirate Playground",
    coverImage: GEN,
    summary:
      "A slide becomes a ship and a sandbox turns into an island during a lively pretend game.",
    pages: [
      { image: GEN, text: "Once upon a time, the slide became a pirate ship." },
      { image: GEN, text: "They sailed to the sandbox island and dug for treasure." },
      { image: GEN, text: "Gold? No—bottle caps! They laughed and shared the shiny finds." },
    ],
    questions: [
      {
        q: "What did the slide become?",
        options: ["A ship", "A train", "A rocket"],
        correct: "A ship",
        feedback: { correct: "Yes—a ship!", incorrect: "It became a ship." }
      },
      {
        q: "What did they dig in?",
        options: ["The sandbox", "The classroom", "The river"],
        correct: "The sandbox",
        feedback: { correct: "Right—the sandbox.", incorrect: "They dug in the sandbox." }
      }
    ]
  },

  // ========== MIDDLE • HELPING (2 stories) ==========
  {
    level: "preSchool",
    class: "middle",
    topic: "Helping",
    title: "The Little Red Hen",
    coverImage: "https://kids-app-images.s3.us-east-1.amazonaws.com/little-red-hen.jpg",
    summary:
      "A hen finds wheat and asks friends to help. No one helps, so she does it all and teaches them a lesson about helping.",
    pages: [
      { image: "https://kids-app-images.s3.us-east-1.amazonaws.com/little-red-hen.jpg", text: "Once upon a time, a little red hen found grains of wheat. “Who will help me plant them?” she asked." },
      { image: GEN, text: "No one helped. She planted, watered, and harvested the wheat herself." },
      { image: GEN, text: "She baked warm bread. When everyone wanted to eat, she kept it as a lesson to help next time." },
    ],
    questions: [
      {
        q: "What did the hen find?",
        options: ["Grains of wheat", "A golden egg", "A kite"],
        correct: "Grains of wheat",
        feedback: { correct: "Yes—wheat!", incorrect: "Grains of wheat." }
      },
      {
        q: "What did she bake?",
        options: ["Bread", "Cake", "Porridge"],
        correct: "Bread",
        feedback: { correct: "Right—bread.", incorrect: "She baked bread." }
      }
    ]
  },
  {
    level: "preSchool",
    class: "middle",
    topic: "Helping",
    title: "Helping the Ducklings",
    coverImage: GEN,
    summary:
      "Children guide tiny ducklings away from a road and back toward the pond with gentle hands.",
    pages: [
      { image: GEN, text: "Once upon a time, tiny ducklings waddled toward a busy road." },
      { image: GEN, text: "The children formed a soft wall with their hands and guided them away." },
      { image: GEN, text: "Quack, quack! Back to the pond they went, safe and happy." },
    ],
    questions: [
      {
        q: "Who needed help?",
        options: ["Ducklings", "Cats", "Horses"],
        correct: "Ducklings",
        feedback: { correct: "Yes—ducklings!", incorrect: "Ducklings needed help." }
      },
      {
        q: "Where did the ducklings go back to?",
        options: ["The pond", "The tree", "The hill"],
        correct: "The pond",
        feedback: { correct: "Right—the pond.", incorrect: "They went to the pond." }
      }
    ]
  },

  // ---------------------------------------------------------
  // TOP CLASS
  // ---------------------------------------------------------

  // ========== TOP • ADVENTURE ==========
  {
    level: "preSchool",
    class: "top",
    topic: "Adventure",
    title: "Forest Walk Treasure",
    coverImage: "https://kids-app-images.s3.us-east-1.amazonaws.com/namutebi-alesha.webp",
    summary:
      "Two sisters follow a stream, help a deer, and discover a hidden grove on their family camping trip.",
    pages: [
      { image: "https://kids-app-images.s3.us-east-1.amazonaws.com/namutebi-alesha.webp", text: "Once upon a time, two sisters went camping with their parents." },
      { image: GEN, text: "They followed a stream, saw bright birds, and found wild berries." },
      { image: GEN, text: "They freed a deer from bushes and found a quiet, hidden grove." },
    ],
    questions: [
      {
        q: "Who went camping?",
        options: ["Two sisters and parents", "A cat", "The teacher"],
        correct: "Two sisters and parents",
        feedback: { correct: "Yes—family camping.", incorrect: "Two sisters with parents." }
      },
      {
        q: "Which animal needed help?",
        options: ["A deer", "A dog", "A cow"],
        correct: "A deer",
        feedback: { correct: "Right—a deer.", incorrect: "They helped a deer." }
      }
    ]
  },

  // ========== TOP • HOME & FAMILY ==========
  {
    level: "preSchool",
    class: "top",
    topic: "Home & Family",
    title: "Fixing the Fence",
    coverImage: GEN,
    summary:
      "A loose garden fence is fixed together—measure, hammer, paint, and share lemonade.",
    pages: [
      { image: GEN, text: "Once upon a time, the garden fence wobbled in the wind." },
      { image: GEN, text: "The family measured, hammered, and painted the wood." },
      { image: GEN, text: "The fence stood strong, and they shared lemonade on the steps." },
    ],
    questions: [
      {
        q: "What was wrong with the fence?",
        options: ["It wobbled", "It was invisible", "It was missing"],
        correct: "It wobbled",
        feedback: { correct: "Yes—it wobbled.", incorrect: "It was wobbly." }
      },
      {
        q: "What did they do last?",
        options: ["Painted", "Built a boat", "Ate cake"],
        correct: "Painted",
        feedback: { correct: "Right—painted.", incorrect: "They painted the fence." }
      }
    ]
  },

  // ========== TOP • FRIENDSHIP ==========
  {
    level: "preSchool",
    class: "top",
    topic: "Friendship",
    title: "The Lost Marble",
    coverImage: GEN,
    summary:
      "A glass marble rolls away; friends search together and celebrate when it's found under a chair.",
    pages: [
      { image: GEN, text: "Once upon a time, Aisha’s glass marble rolled across the floor." },
      { image: GEN, text: "Her friends looked under the sofa, the mat, and a box." },
      { image: GEN, text: "Found! It sparkled under a chair, and they all cheered." },
    ],
    questions: [
      {
        q: "What did Aisha lose?",
        options: ["A marble", "A spoon", "A book"],
        correct: "A marble",
        feedback: { correct: "Yes—a marble.", incorrect: "She lost a marble." }
      },
      {
        q: "Where was it?",
        options: ["Under a chair", "In the garden", "On the roof"],
        correct: "Under a chair",
        feedback: { correct: "Right—under a chair.", incorrect: "It was under a chair." }
      }
    ]
  },

  // ========== TOP • SCHOOL ==========
  {
    level: "preSchool",
    class: "top",
    topic: "School",
    title: "Library Mystery",
    coverImage: GEN,
    summary:
      "A missing storybook is found on the display stand—right where the class showcased favorites.",
    pages: [
      { image: GEN, text: "Once upon a time, the class could not find a favorite storybook." },
      { image: GEN, text: "They searched the shelves and under the reading carpet." },
      { image: GEN, text: "Mystery solved—it stood on the display stand with the best books." },
    ],
    questions: [
      {
        q: "What was missing?",
        options: ["A storybook", "A pencil", "A football"],
        correct: "A storybook",
        feedback: { correct: "Yes—a storybook.", incorrect: "A book was missing." }
      },
      {
        q: "Where was it found?",
        options: ["On the display stand", "In a lunchbox", "In a tree"],
        correct: "On the display stand",
        feedback: { correct: "Right—display stand.", incorrect: "It was on the display stand." }
      }
    ]
  },

  // ========== TOP • KINDNESS ==========
  {
    level: "preSchool",
    class: "top",
    topic: "Kindness",
    title: "Water for the Team",
    coverImage: GEN,
    summary:
      "At football practice, two children share water cups and remind everyone to rest in the shade.",
    pages: [
      { image: GEN, text: "Once upon a time, the sun shone hot on football practice." },
      { image: GEN, text: "Zed and Laila shared water cups and waved friends to the shade." },
      { image: GEN, text: "They learned that caring for others keeps the team strong." },
    ],
    questions: [
      {
        q: "What did they share?",
        options: ["Water", "Stickers", "Hats"],
        correct: "Water",
        feedback: { correct: "Yes—water.", incorrect: "They shared water." }
      },
      {
        q: "Where did they tell friends to rest?",
        options: ["In the shade", "On the road", "On the roof"],
        correct: "In the shade",
        feedback: { correct: "Right—in the shade.", incorrect: "They rested in the shade." }
      }
    ]
  },

  // ========== TOP • ANIMALS & NATURE (2 stories) ==========
  {
    level: "preSchool",
    class: "top",
    topic: "Animals & Nature",
    title: "Saving the Little Bird",
    coverImage: GEN,
    summary:
      "A small bird with a stuck string is gently freed near a fence and quickly flies away.",
    pages: [
      { image: GEN, text: "Once upon a time, a tiny bird tugged at a string near the fence." },
      { image: GEN, text: "The children held still and slowly untied the knot." },
      { image: GEN, text: "Flutter—free at last! The bird zipped back to the trees." },
    ],
    questions: [
      {
        q: "What was stuck?",
        options: ["A string", "A drum", "A ball"],
        correct: "A string",
        feedback: { correct: "Yes—a string.", incorrect: "A string was stuck." }
      },
      {
        q: "Where did the bird go?",
        options: ["To the trees", "To the pond", "To the house roof"],
        correct: "To the trees",
        feedback: { correct: "Right—the trees.", incorrect: "Back to the trees." }
      }
    ]
  },
  {
    level: "preSchool",
    class: "top",
    topic: "Animals & Nature",
    title: "Cloud Shapes",
    coverImage: GEN,
    summary:
      "Children lie on the grass and spot clouds that look like animals and boats.",
    pages: [
      { image: GEN, text: "Once upon a time, the class lay on soft grass to watch clouds." },
      { image: GEN, text: "“That one looks like a camel!” “I see a boat!” they cried." },
      { image: GEN, text: "They drew their favorite cloud shapes in their notebooks." },
    ],
    questions: [
      {
        q: "Where did they watch the sky?",
        options: ["On the grass", "On a bus", "In a cave"],
        correct: "On the grass",
        feedback: { correct: "Yes—on the grass.", incorrect: "They lay on the grass." }
      },
      {
        q: "What did they see in the clouds?",
        options: ["Animals and boats", "Cars", "Trains"],
        correct: "Animals and boats",
        feedback: { correct: "Right—fun cloud shapes!", incorrect: "Animals and boats." }
      }
    ]
  },

  // ========== TOP • BRAVERY ==========
  {
    level: "preSchool",
    class: "top",
    topic: "Bravery",
    title: "Stormy Night Watch",
    coverImage: GEN,
    summary:
      "A loud storm shakes the windows, but holding hands and counting helps the children feel brave.",
    pages: [
      { image: GEN, text: "Once upon a time, thunder rumbled and the window rattled." },
      { image: GEN, text: "They held hands and counted between the flashes and booms." },
      { image: GEN, text: "Soon the storm drifted away, and they felt proud and brave." },
    ],
    questions: [
      {
        q: "What made noise?",
        options: ["Thunder", "A drum", "A truck"],
        correct: "Thunder",
        feedback: { correct: "Yes—thunder.", incorrect: "It was thunder." }
      },
      {
        q: "What helped them feel brave?",
        options: ["Counting together", "Hiding alone", "Shouting"],
        correct: "Counting together",
        feedback: { correct: "Right—counting together.", incorrect: "They counted together." }
      }
    ]
  },

  // ========== TOP • FAITH ==========
  {
    level: "preSchool",
    class: "top",
    topic: "Faith",
    title: "The Fasting Challenge",
    coverImage: GEN,
    summary:
      "On a short practice fast, a child keeps busy with reading and drawing until sunset.",
    pages: [
      { image: GEN, text: "Once upon a time, Sami tried a short practice fast." },
      { image: GEN, text: "He read a small book and drew a date palm tree." },
      { image: GEN, text: "At sunset, he broke the fast with dates and water, smiling proudly." },
    ],
    questions: [
      {
        q: "What did Sami draw?",
        options: ["A date palm", "A car", "A river map"],
        correct: "A date palm",
        feedback: { correct: "Yes—a date palm.", incorrect: "He drew a date palm." }
      },
      {
        q: "What did he eat at sunset?",
        options: ["Dates", "Ice cream", "Cake"],
        correct: "Dates",
        feedback: { correct: "Right—dates.", incorrect: "He ate dates." }
      }
    ]
  },

  // ========== TOP • IMAGINATION ==========
  {
    level: "preSchool",
    class: "top",
    topic: "Imagination",
    title: "Robot Parade",
    coverImage: GEN,
    summary:
      "Cardboard boxes become robot suits and the hallway turns into a friendly parade.",
    pages: [
      { image: GEN, text: "Once upon a time, boxes turned into shiny robot suits." },
      { image: GEN, text: "The children beeped and booped down the hallway." },
      { image: GEN, text: "They waved to classrooms and bowed at the door." },
    ],
    questions: [
      {
        q: "What did the boxes become?",
        options: ["Robot suits", "Boats", "Beds"],
        correct: "Robot suits",
        feedback: { correct: "Yes—robots!", incorrect: "Robot suits." }
      },
      {
        q: "Where did they parade?",
        options: ["Down the hallway", "Through the forest", "On the roof"],
        correct: "Down the hallway",
        feedback: { correct: "Right—the hallway.", incorrect: "They paraded down the hallway." }
      }
    ]
  },

  // ========== TOP • HELPING ==========
  {
    level: "preSchool",
    class: "top",
    topic: "Helping",
    title: "Soup for the Old Man",
    coverImage: GEN,
    summary:
      "A pot of warm soup and soft bread are taken to a neighbor who needs a kind visit.",
    pages: [
      { image: GEN, text: "Once upon a time, the family cooked soup on a cool evening." },
      { image: GEN, text: "They carried a pot and bread to an old man who lived alone." },
      { image: GEN, text: "He smiled and told a short story as they shared supper." },
    ],
    questions: [
      {
        q: "What did they bring?",
        options: ["Soup and bread", "Juice and ice", "Sweets only"],
        correct: "Soup and bread",
        feedback: { correct: "Yes—soup and bread.", incorrect: "They brought soup and bread." }
      },
      {
        q: "How did the neighbor feel?",
        options: ["Happy", "Angry", "Scared"],
        correct: "Happy",
        feedback: { correct: "Right—happy.", incorrect: "He felt happy." }
      }
    ]
  },
];

export const preSchoolStoriesData: StoryBook[] = base.map((s, i) => ({
  ...s,
  _id: `PS${i + 1}`,
}));
