import { type Story } from "../types";

const stories = [
{
    level: "preSchool",
    title: "The Little Red Hen",
    text: "Once upon a time, a little red hen found some grains of wheat. She asked her friends, the dog, the cat, and the duck, to help plant them. But each one said, 'Not I!' So she planted them herself. When the wheat grew tall, she asked them to help cut it, but again they said, 'Not I!' She cut it herself. Then she asked them to help grind the wheat into flour. Still, they said, 'Not I!' So she did it alone. Finally, she baked a fresh, warm loaf of bread and asked, 'Who will help me eat it?' This time, everyone said, 'I will!' But the Little Red Hen said, 'No, I will eat it myself!' And she did, happily.",
    image: "https://kids-app-images.s3.us-east-1.amazonaws.com/little-red-hen.jpg",
    questions: [
      {
        q: "What color was the hen?",
        options: ["Red", "Blue", "Green", "Yellow"],
        correct: "Red",
        feedback: {
          correct: "Great! She’s the Little RED Hen.",
          incorrect: "Look again—her feathers are red."
        }
      },
      {
        q: "Who refused to help plant the wheat?",
        options: [
          "The dog, the cat, and the duck",
          "Only the dog",
          "Only the cat",
          "Everyone helped"
        ],
        correct: "The dog, the cat, and the duck",
        feedback: {
          correct: "Yes—none of the friends helped at first.",
          incorrect: "Not quite—no one helped the hen at first."
        }
      },
      {
        q: "What did the hen make from the wheat?",
        options: ["Bread", "Cake", "Cookies", "Soup"],
        correct: "Bread",
        feedback: {
          correct: "Yum—she baked a loaf of bread!",
          incorrect: "Try again—the wheat became bread."
        }
      },
      {
        q: "Did the hen share the bread?",
        options: ["No", "Yes"],
        correct: "No",
        feedback: {
          correct: "Right—she ate it herself.",
          incorrect: "She didn’t share this time."
        }
      }
    ]
  },

  {
    level: "preSchool",
    title: "Benny the Brave Bunny",
    text: "Benny was a little bunny who was afraid of the dark. One night, his friend Luna the owl invited him to see the stars. Benny was scared, but he hopped along. When he looked up, the night sky was full of shiny stars! Benny realized that the dark could be beautiful too.",
    image: "https://kids-app-images.s3.us-east-1.amazonaws.com/brave-bunny.jpg",
    questions: [
      {
        q: "What kind of animal was Benny?",
        options: ["Bunny", "Cat", "Dog", "Duck"],
        correct: "Bunny",
        feedback: {
          correct: "Yes—Benny is a bunny!",
          incorrect: "Check again—Benny is a bunny."
        }
      },
      {
        q: "Who invited Benny to see the stars?",
        options: ["Luna the owl", "Milo the monkey", "Aisha", "Ahmed"],
        correct: "Luna the owl",
        feedback: {
          correct: "Right—his friend Luna the owl invited him.",
          incorrect: "It was Luna the owl."
        }
      },
      {
        q: "What did Benny see in the sky?",
        options: ["Stars", "Rainbows", "Clouds", "Birds"],
        correct: "Stars",
        feedback: {
          correct: "Yes—shiny stars in the night sky!",
          incorrect: "Look up—he saw the stars."
        }
      }
    ]
  },

  {
    level: "preSchool",
    title: "Milo’s Missing Hat",
    text: "Milo the monkey loved his red hat. One windy day, the hat blew away! He searched in the trees, by the river, and in the banana grove. At last, he found it on a friendly giraffe’s head! The giraffe laughed and gave it back.",
    image: "https://kids-app-images.s3.us-east-1.amazonaws.com/milo-monkey.jpg",
    questions: [
      {
        q: "What color was Milo’s hat?",
        options: ["Red", "Blue", "Green", "Purple"],
        correct: "Red",
        feedback: {
          correct: "Correct—Milo loves his red hat.",
          incorrect: "Not quite—it was red."
        }
      },
      {
        q: "Where did Milo find his hat?",
        options: [
          "On a friendly giraffe’s head",
          "In the river",
          "Under a rock",
          "In his bag"
        ],
        correct: "On a friendly giraffe’s head",
        feedback: {
          correct: "Yes—a giraffe was wearing it!",
          incorrect: "Try again—look at who was wearing it."
        }
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
        feedback: {
          correct: "Right—he searched in three places.",
          incorrect: "He searched in the trees, by the river, and in the banana grove."
        }
      }
    ]
  },

  {
    level: "preSchool",
    title: "Sally and the Magic Seeds",
    text: "Sally found three shiny seeds in her garden. She planted them and watered them every day. One morning, the seeds grew into candy trees! The branches were full of lollipops, chocolates, and gummies. Sally shared them with all her friends.",
    image: "https://kids-app-images.s3.us-east-1.amazonaws.com/sally-seeds.webp",
    questions: [
      {
        q: "How many seeds did Sally plant?",
        options: ["Three", "One", "Two", "Four"],
        correct: "Three",
        feedback: {
          correct: "Yes—she planted three seeds.",
          incorrect: "Count again—she planted three."
        }
      },
      {
        q: "What grew from the seeds?",
        options: ["Candy trees", "Apple trees", "Pumpkin vines", "Flowers"],
        correct: "Candy trees",
        feedback: {
          correct: "Sweet! Candy trees grew.",
          incorrect: "Not quite—candy trees appeared!"
        }
      },
      {
        q: "Did Sally share the candy?",
        options: ["Yes", "No"],
        correct: "Yes",
        feedback: {
          correct: "That’s kind—she shared with friends.",
          incorrect: "She did share the candy."
        }
      }
    ]
  },

  {
    level: "preSchool",
    title: "Tommy the Tiny Turtle",
    text: "Tommy was the smallest turtle in the pond. He wanted to race the other turtles, but they were much bigger. One day, they let him join the race. Slowly but surely, Tommy reached the finish line. Everyone cheered because he never gave up!",
    image: "https://kids-app-images.s3.us-east-1.amazonaws.com/tommy-turtle.jpeg",
    questions: [
      {
        q: "What animal was Tommy?",
        options: ["Turtle", "Fish", "Rabbit", "Duck"],
        correct: "Turtle",
        feedback: {
          correct: "Yes—Tommy is a turtle.",
          incorrect: "Look again—Tommy is a turtle."
        }
      },
      {
        q: "Where did Tommy live?",
        options: ["Pond", "Sea", "Forest", "Desert"],
        correct: "Pond",
        feedback: {
          correct: "Right—he lived in a pond.",
          incorrect: "He lived in the pond."
        }
      },
      {
        q: "Why did everyone cheer for Tommy?",
        options: [
          "He never gave up",
          "He was the fastest",
          "He flew",
          "He took a shortcut"
        ],
        correct: "He never gave up",
        feedback: {
          correct: "Yes—slow and steady, he kept going!",
          incorrect: "They cheered because he didn’t give up."
        }
      }
    ]
  },

  {
    level: "preSchool",
    title: "Tommy's First Day at School",
    text: "Tommy was excited to go to school for the first time. He wore his new uniform, packed his bag, and walked with his mom to the classroom. His teacher smiled and welcomed him. Tommy met new friends and played games. He learned his first song and drew a picture. At the end of the day, Tommy couldn’t wait to come back tomorrow.",
    image: "https://kids-app-images.s3.us-east-1.amazonaws.com/tommy-school.jpg",
    questions: [
      {
        q: "What was Tommy wearing on his first day?",
        options: ["A new uniform", "A party costume", "Pajamas", "A raincoat"],
        correct: "A new uniform",
        feedback: {
          correct: "Yes—he wore a new uniform.",
          incorrect: "He wore a new uniform."
        }
      },
      {
        q: "Who took Tommy to school?",
        options: ["His mom", "His dad", "His friend", "His teacher"],
        correct: "His mom",
        feedback: {
          correct: "Right—his mom walked with him.",
          incorrect: "His mom took him to school."
        }
      },
      {
        q: "What did Tommy do at school?",
        options: [
          "Learned a song and drew a picture",
          "Slept all day",
          "Went swimming",
          "Drove a car"
        ],
        correct: "Learned a song and drew a picture",
        feedback: {
          correct: "Yes—he sang and drew!",
          incorrect: "He learned a song and drew a picture."
        }
      }
    ]
  },
 {
    level: "lowerPrimary",
    title: "The Honest Woodcutter (Moral Story)",
    text: "Long ago, a poor woodcutter was cutting wood near a river. His axe slipped and fell into the water. He prayed for help. An angel appeared and showed him a golden axe. The woodcutter said, 'This is not mine.' The angel showed him a silver axe, but he refused again. Finally, she gave him his old iron axe. She was pleased with his honesty and gave him all three axes. The woodcutter returned home happy and thankful.",
    image: "https://kids-app-images.s3.us-east-1.amazonaws.com/honest-wood-cutter.png",
    questions: [
      {
        q: "Where was the woodcutter working?",
        options: ["Near a river", "In the city", "On a mountain", "In a cave"],
        correct: "Near a river",
        feedback: {
          correct: "Yes—his axe fell into the river.",
          incorrect: "Check again—he was working near a river."
        }
      },
      {
        q: "What did the angel finally give the woodcutter?",
        options: ["All three axes", "Only the golden axe", "Only the silver axe", "No axe"],
        correct: "All three axes",
        feedback: {
          correct: "Right—honesty was rewarded.",
          incorrect: "She gave him all three axes."
        }
      },
      {
        q: "What lesson do we learn from the story?",
        options: ["Honesty is rewarded", "Speed matters most", "Always keep quiet", "Never work near water"],
        correct: "Honesty is rewarded",
        feedback: {
          correct: "Exactly—being honest brings good.",
          incorrect: "Think about why the angel rewarded him."
        }
      }
    ]
  },

  {
    level: "lowerPrimary",
    title: "The Rabbit and the Turtle (Adapted Fable)",
    text: "Once upon a time, a fast rabbit laughed at a slow turtle. They decided to race. The rabbit ran quickly but stopped to rest. The turtle kept walking slowly and steadily. In the end, the turtle reached the finish line first. The rabbit was surprised and learned not to underestimate others.",
    image: "https://kids-app-images.s3.us-east-1.amazonaws.com/rabbit-turtle.jpg",
    questions: [
      {
        q: "Who won the race?",
        options: ["The turtle", "The rabbit", "They tied", "No one finished"],
        correct: "The turtle",
        feedback: {
          correct: "Yes—the slow but steady turtle won!",
          incorrect: "The turtle won the race."
        }
      },
      {
        q: "Why did the rabbit lose?",
        options: ["He stopped to rest", "He got lost", "He fell asleep at home", "He did not start"],
        correct: "He stopped to rest",
        feedback: {
          correct: "Right—he relaxed and lost the lead.",
          incorrect: "He lost because he stopped to rest."
        }
      },
      {
        q: "What is the moral of the story?",
        options: ["Slow and steady wins the race", "Run as fast as you can", "Never race a turtle", "Sleep more"],
        correct: "Slow and steady wins the race",
        feedback: {
          correct: "Exactly—keep going and don’t boast.",
          incorrect: "Try again—think of the turtle’s steady pace."
        }
      }
    ]
  },

  {
    level: "lowerPrimary",
    title: "Ali's Kind Gift (Muslim Story)",
    text: "Ali saw his friend walking without shoes. He remembered that Prophet Muhammad (peace be upon him) loved helping others. Ali went home, picked his extra pair of shoes, and gave them to his friend. His friend smiled and said thank you. Ali felt happy because he knew Allah rewards generosity.",
    questions: [
      {
        q: "What did Ali give his friend?",
        options: ["Shoes", "A hat", "A toy", "A book"],
        correct: "Shoes",
        feedback: {
          correct: "Yes—he gave him shoes.",
          incorrect: "He gave his friend shoes."
        }
      },
      {
        q: "Why did Ali help?",
        options: [
          "Islam teaches kindness and generosity",
          "He wanted a prize",
          "He was forced to",
          "He wanted to play"
        ],
        correct: "Islam teaches kindness and generosity",
        feedback: {
          correct: "Right—he followed a good teaching.",
          incorrect: "He helped because kindness is taught in Islam."
        }
      },
      {
        q: "What is the moral of this story?",
        options: ["Be generous", "Keep everything", "Never share", "Ignore others"],
        correct: "Be generous",
        feedback: {
          correct: "Exactly—sharing brings reward.",
          incorrect: "The story teaches generosity."
        }
      }
    ]
  },

  {
    level: "lowerPrimary",
    title: "The Ant and the Grasshopper (Adapted Fable)",
    text: "All summer, the ant worked hard collecting food. The grasshopper played and sang. When winter came, the grasshopper was hungry and asked the ant for food. The ant shared but reminded him to work next time. The grasshopper promised to change.",
    questions: [
      {
        q: "What did the ant do in summer?",
        options: ["Worked hard", "Slept", "Played all day", "Traveled far"],
        correct: "Worked hard",
        feedback: {
          correct: "Yes—the ant collected food.",
          incorrect: "The ant worked to gather food."
        }
      },
      {
        q: "What did the grasshopper do?",
        options: ["Played and sang", "Collected food", "Built a home", "Hibernated"],
        correct: "Played and sang",
        feedback: {
          correct: "Right—he didn’t prepare.",
          incorrect: "He spent summer playing and singing."
        }
      },
      {
        q: "What is the moral of the story?",
        options: ["Work and plan ahead", "Play first", "Ask others for food", "Winter is easy"],
        correct: "Work and plan ahead",
        feedback: {
          correct: "Exactly—prepare before hard times.",
          incorrect: "Think about why the ant was ready in winter."
        }
      }
    ]
  },

  {
    level: "lowerPrimary",
    title: "The Rainy Day Adventure",
    text: "It rained all day, and Omar was bored at home. His grandmother told him to look in the old trunk. Inside, he found a colorful kite. When the rain stopped, Omar ran outside to fly it. The wind carried it high into the sky. Omar laughed as the kite danced among the clouds.",
    image: "https://kids-app-images.s3.us-east-1.amazonaws.com/general-image.webp",
    questions: [
      {
        q: "What did Omar find in the trunk?",
        options: ["A kite", "A drum", "A ball", "A book"],
        correct: "A kite",
        feedback: {
          correct: "Yes—he found a colorful kite.",
          incorrect: "He found a kite."
        }
      },
      {
        q: "What happened when Omar flew the kite?",
        options: [
          "It went high into the sky",
          "It fell down quickly",
          "It got stuck inside",
          "It turned into a bird"
        ],
        correct: "It went high into the sky",
        feedback: {
          correct: "Right—the wind carried it high!",
          incorrect: "It flew high into the sky."
        }
      }
    ]
  },

  {
    level: "lowerPrimary",
    title: "The Night of Power",
    text: "Laylat al-Qadr, the Night of Power, is the most special night in Ramadan. It is the night when the Qur'an was first sent down. Worship on this night is better than a thousand months. Fatima’s family prayed, read Qur'an, and made dua all night. They felt peaceful and close to Allah. Fatima learned that this night only comes once a year, and she looked forward to it every Ramadan.",
    image: "https://kids-app-images.s3.us-east-1.amazonaws.com/night-of-power.jpeg",
    questions: [
      {
        q: "What happened on Laylat al-Qadr?",
        options: [
          "The Qur'an began to be revealed",
          "It started snowing",
          "The first mosque was built",
          "A new year began"
        ],
        correct: "The Qur'an began to be revealed",
        feedback: {
          correct: "Yes—that’s why the night is special.",
          incorrect: "It’s the night the Qur’an was first sent down."
        }
      },
      {
        q: "How did Fatima’s family spend the night?",
        options: [
          "They prayed and read Qur'an",
          "They watched TV",
          "They traveled",
          "They slept early"
        ],
        correct: "They prayed and read Qur'an",
        feedback: {
          correct: "Right—they worshipped together.",
          incorrect: "They prayed, read Qur’an, and made dua."
        }
      }
    ]
  },

  {
    level: "juniorSchool",
    title: "Prophet Yunus and the Big Fish",
    text: "Prophet Yunus (A.S) told his people to worship only Allah, but many refused. He left them without Allah's permission and boarded a ship. A storm came, and the sailors decided to throw someone overboard to save the ship. The lot fell on Yunus, and he was swallowed by a big fish. Inside the fish, he prayed: 'La ilaha illa Anta, Subhanaka, inni kuntu minaz-zalimeen.' Allah forgave him, and the fish released him safely.",
    image: "https://kids-app-images.s3.us-east-1.amazonaws.com/prophet-yunus.jpg",
    questions: [
      {
        q: "What happened to Prophet Yunus after he was thrown into the sea?",
        options: ["He was swallowed by a big fish", "He flew away", "He reached the shore immediately", "He disappeared"],
        correct: "He was swallowed by a big fish",
        feedback: {
          correct: "Yes—he was inside a big fish.",
          incorrect: "He was swallowed by a big fish."
        }
      },
      {
        q: "What did Prophet Yunus say inside the fish?",
        options: [
          "La ilaha illa Anta, Subhanaka, inni kuntu minaz-zalimeen",
          "Bismillah",
          "Allahu Akbar",
          "Alhamdulillah"
        ],
        correct: "La ilaha illa Anta, Subhanaka, inni kuntu minaz-zalimeen",
        feedback: {
          correct: "Right—that is the special dua he said.",
          incorrect: "He recited the dua asking Allah’s forgiveness."
        }
      }
    ]
  },

  {
    level: "juniorSchool",
    title: "The Honest Shopkeeper",
    text: "In a small town, there was a Muslim shopkeeper named Hamid. One day, a customer gave him extra money by mistake. Hamid could have kept it, but instead he returned it, saying, 'Islam teaches us to be honest.' The customer was amazed and told everyone about Hamid’s honesty. Soon, many people came to buy from his shop because they trusted him.",
    image: "https://kids-app-images.s3.us-east-1.amazonaws.com/shop-keeper.jpg",
    questions: [
      {
        q: "What did Hamid do when he got extra money by mistake?",
        options: ["He returned it", "He kept it", "He hid it", "He spent it quickly"],
        correct: "He returned it",
        feedback: {
          correct: "Yes—he was honest.",
          incorrect: "He returned the extra money."
        }
      },
      {
        q: "Why did more people start coming to Hamid’s shop?",
        options: [
          "They trusted him for his honesty",
          "It was the only shop",
          "He sold only toys",
          "He gave everything for free"
        ],
        correct: "They trusted him for his honesty",
        feedback: {
          correct: "Right—people trust honest sellers.",
          incorrect: "They came because they trusted his honesty."
        }
      }
    ]
  },

  {
    level: "juniorSchool",
    title: "The Mango Tree",
    text: "Ahmed loved the big mango tree in his backyard. Every year, it gave sweet, juicy mangoes. One day, Ahmed saw birds eating the mangoes before they were ripe. Instead of chasing them away, he decided to share. He left some mangoes for the birds and picked the rest when they were ready. Ahmed felt happy because he helped the birds and still had plenty to enjoy.",
    image: "https://kids-app-images.s3.us-east-1.amazonaws.com/mangoTree.webp",
    questions: [
      {
        q: "Why did Ahmed leave some mangoes on the tree?",
        options: [
          "To share with the birds",
          "Because he didn’t like mangoes",
          "He forgot them",
          "He was afraid"
        ],
        correct: "To share with the birds",
        feedback: {
          correct: "Yes—he shared with the birds.",
          incorrect: "He left them so the birds could eat too."
        }
      },
      {
        q: "Who enjoyed the mangoes besides Ahmed?",
        options: ["The birds", "The cats", "The dogs", "No one"],
        correct: "The birds",
        feedback: {
          correct: "Right—the birds enjoyed them.",
          incorrect: "The birds also enjoyed the mangoes."
        }
      }
    ]
  },

  {
    level: "juniorSchool",
    title: "The Brave Little Fish",
    text: "In a deep blue pond lived a small fish named Bobo. One day, Bobo saw a plastic bag floating in the water. It was dangerous for the other fish. Bobo pushed the bag to the edge of the pond where a boy was playing. The boy picked it up and threw it in the bin. Bobo felt proud for keeping the pond clean.",
    image: "https://kids-app-images.s3.us-east-1.amazonaws.com/braveFish.jpg",
    questions: [
      {
        q: "What did Bobo see in the pond?",
        options: ["A plastic bag", "A kite", "A boat", "A big rock"],
        correct: "A plastic bag",
        feedback: {
          correct: "Yes—trash in the water is dangerous.",
          incorrect: "He saw a plastic bag."
        }
      },
      {
        q: "How did the boy help Bobo?",
        options: [
          "He threw the bag in the bin",
          "He fed the fish",
          "He put more bags in the pond",
          "He swam away"
        ],
        correct: "He threw the bag in the bin",
        feedback: {
          correct: "Right—he removed the trash.",
          incorrect: "He helped by putting the bag in the bin."
        }
      }
    ]
  },
  {
    level: "preSchool",
    title: "Mariam and Alesha's Adventure Story",
    text: "Mariam and her sister Alesha went camping with their parents. One morning, they decided to explore the forest nearby. They followed a small river, saw colorful birds, and found wild berries. Suddenly, they heard a strange sound — it was a deer stuck in bushes. Carefully, they freed it. The deer ran away, and the children felt proud. They returned to camp with a story to tell.",
    image: "https://kids-app-images.s3.us-east-1.amazonaws.com/namutebi-alesha.webp",
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
        feedback: {
          correct: "Yes—both sisters went with their parents.",
          incorrect: "They went with their parents."
        }
      },
      {
        q: "What animal did they help?",
        options: ["A deer", "A cat", "A bird", "A turtle"],
        correct: "A deer",
        feedback: {
          correct: "Right—They helped a deer stuck in bushes.",
          incorrect: "It was a deer."
        }
      },
      {
        q: "Where did they go exploring?",
        options: ["The forest", "The city", "The beach", "A cave"],
        correct: "The forest",
        feedback: {
          correct: "Yes—they explored the forest near the river.",
          incorrect: "They explored the forest."
        }
      }
    ]
  },

  {
    level: "preSchool",
    title: "The Ant and Prophet Sulaiman",
    text: "Prophet Sulaiman (A.S) was a great king and Prophet. Allah gave him the ability to understand animals. One day, he was marching with his army when he heard a tiny ant say, 'Hide in your homes, Sulaiman's army is coming!' Prophet Sulaiman smiled and thanked Allah for this blessing. He told his army to walk gently so they would not hurt the ants.",
    image: "https://kids-app-images.s3.us-east-1.amazonaws.com/sulaiman-ant-story.jpg",
    questions: [
      {
        q: "Who could understand the language of animals?",
        options: [
          "Prophet Sulaiman (A.S)",
          "Prophet Yunus (A.S)",
          "Prophet Musa (A.S)",
          "Prophet Ibrahim (A.S)"
        ],
        correct: "Prophet Sulaiman (A.S)",
        feedback: {
          correct: "Yes—Allah gave him that ability.",
          incorrect: "It was Prophet Sulaiman (A.S)."
        }
      },
      {
        q: "What did the ant tell the other ants to do?",
        options: [
          "Hide in your homes",
          "Come out to play",
          "Fly away",
          "Collect mangoes"
        ],
        correct: "Hide in your homes",
        feedback: {
          correct: "Right—the ants needed to be safe.",
          incorrect: "The ant said, “Hide in your homes.”"
        }
      }
    ]
  },

  {
    level: "preSchool",
    title: "The Boy Who Remembered Bismillah",
    text: "Ali was very hungry and excited for dinner. He quickly reached for his food but then remembered what his mother taught him: 'Always say Bismillah before eating.' Ali smiled, said 'Bismillah,' and started eating. His little sister saw him and also said Bismillah before eating. They both felt happy that they remembered Allah before enjoying their meal.",
    image: "https://kids-app-images.s3.us-east-1.amazonaws.com/bismillahi-story.jpg",
    questions: [
      {
        q: "What did Ali say before eating?",
        options: ["Bismillah", "Alhamdulillah", "Subhanallah", "Allahu Akbar"],
        correct: "Bismillah",
        feedback: {
          correct: "Yes—he remembered to say Bismillah.",
          incorrect: "He said “Bismillah.”"
        }
      },
      {
        q: "Who taught Ali to say Bismillah?",
        options: ["His mother", "His teacher", "His friend", "His sister"],
        correct: "His mother",
        feedback: {
          correct: "Right—his mother taught him.",
          incorrect: "His mother taught him."
        }
      }
    ]
  },

  {
    level: "preSchool",
    title: "Gulu Gulu Goes to School",
    text: "Gulu Gulu was a small, playful goat. One sunny morning, he followed Mariam to school. The teacher was surprised but let him stay. Gulu Gulu listened to the songs and even tried to read. When it was time for lunch, he munched on grass outside. The children laughed and gave him a hug before going home.",
    image: "https://kids-app-images.s3.us-east-1.amazonaws.com/gulu+gulu.png",
    questions: [
      {
        q: "Who went to school with Mariam?",
        options: ["Gulu Gulu (the goat)", "Her cat", "Her baby brother", "Her bird"],
        correct: "Gulu Gulu (the goat)",
        feedback: {
          correct: "Yes—Gulu Gulu is a goat!",
          incorrect: "It was Gulu Gulu the goat."
        }
      },
      {
        q: "What did Gulu Gulu eat at lunch?",
        options: ["Grass", "Bananas", "Rice", "Cookies"],
        correct: "Grass",
        feedback: {
          correct: "Right—he munched on grass outside.",
          incorrect: "He ate grass."
        }
      },
      {
        q: "What did Gulu Gulu do in class?",
        options: [
          "Listened to songs",
          "Slept under the desk",
          "Ran around the field",
          "Cooked lunch"
        ],
        correct: "Listened to songs",
        feedback: {
          correct: "Yes—he listened and even tried to read.",
          incorrect: "He listened to songs in class."
        }
      }
    ]
  },

  {
    level: "preSchool",
    title: "Aisha and the Lost Kitten",
    text: "Aisha found a tiny kitten crying near her house. She picked it up and gave it milk. The kitten purred and followed Aisha everywhere. Later, the owner came looking for it. Aisha smiled and gave the kitten back. The owner thanked her and gave her a sweet treat.",
    image: "https://kids-app-images.s3.us-east-1.amazonaws.com/lostKitten.jpeg",
    questions: [
      {
        q: "What did Aisha give the kitten to drink?",
        options: ["Milk", "Juice", "Water", "Tea"],
        correct: "Milk",
        feedback: {
          correct: "Yes—she gave it milk.",
          incorrect: "She gave the kitten milk."
        }
      },
      {
        q: "What did the owner give Aisha?",
        options: ["A sweet treat", "A book", "A hat", "A toy car"],
        correct: "A sweet treat",
        feedback: {
          correct: "Right—the owner thanked her with a treat.",
          incorrect: "The owner gave her a sweet treat."
        }
      },
      {
        q: "What did the kitten do after Aisha helped it?",
        options: ["It followed Aisha", "It ran far away", "It went to sleep", "It climbed a tree"],
        correct: "It followed Aisha",
        feedback: {
          correct: "Yes—it followed her everywhere.",
          incorrect: "It followed Aisha."
        }
      }
    ]
  },

  {
    level: "upperPrimary",
    title: "The Boy and the Camel (Muslim Story)",
    text: "In a desert village, a boy named Ahmed had a camel he loved. One day, while riding, he saw an old man struggling to carry water. Ahmed remembered the Prophet's saying about helping others. He offered the man his camel for the journey. The man blessed Ahmed and prayed for him. From that day, Ahmed always helped anyone in need, knowing Allah rewards kindness.",
    image: "https://kids-app-images.s3.us-east-1.amazonaws.com/boy-camel.webp",
    questions: [
      {
        q: "What animal did Ahmed own?",
        options: ["A camel", "A horse", "A donkey", "A goat"],
        correct: "A camel",
        feedback: {
          correct: "Yes—Ahmed had a camel.",
          incorrect: "He owned a camel."
        }
      },
      {
        q: "How did Ahmed help the old man?",
        options: [
          "He offered his camel",
          "He gave him money",
          "He called a doctor",
          "He built a house"
        ],
        correct: "He offered his camel",
        feedback: {
          correct: "Right—he shared his camel for the journey.",
          incorrect: "He helped by offering his camel."
        }
      },
      {
        q: "What lesson does the story teach?",
        options: ["Help others with kindness", "Keep everything", "Never share", "Always say no"],
        correct: "Help others with kindness",
        feedback: {
          correct: "Exactly—kindness is rewarded.",
          incorrect: "The story teaches kindness and helping others."
        }
      }
    ]
  },

  {
    level: "upperPrimary",
    title: "Space Adventure (Science Story)",
    text: "Musa loved stars. One night, he imagined flying in a spaceship. He saw planets, moons, and stars close up. He visited Mars and learned it’s called the Red Planet. When he woke up, Musa decided to become an astronaut one day.",
    questions: [
      {
        q: "What planet did Musa visit in his adventure?",
        options: ["Mars", "Earth", "Jupiter", "Venus"],
        correct: "Mars",
        feedback: {
          correct: "Yes—he visited Mars.",
          incorrect: "He visited Mars."
        }
      },
      {
        q: "What is Mars called?",
        options: ["The Red Planet", "The Blue Planet", "The Giant Planet", "The Ringed Planet"],
        correct: "The Red Planet",
        feedback: {
          correct: "Right—Mars is the Red Planet.",
          incorrect: "Mars is called the Red Planet."
        }
      },
      {
        q: "What does Musa want to become?",
        options: ["An astronaut", "A chef", "A singer", "A farmer"],
        correct: "An astronaut",
        feedback: {
          correct: "Yes—he wants to be an astronaut.",
          incorrect: "He wants to become an astronaut."
        }
      }
    ]
  },

  {
    level: "upperPrimary",
    title: "The Treasure in the Cave (Adventure Story)",
    text: "Aisha and her cousin Omar explored an old cave. Inside, they found coins, a map, and strange symbols. They followed the map and discovered a hidden garden full of flowers and fruit trees. They promised to keep it a secret and protect it.",
    questions: [
      {
        q: "Who explored the cave?",
        options: ["Aisha and Omar", "Ali and Hamid", "Mariam and Alesha", "Benny and Luna"],
        correct: "Aisha and Omar",
        feedback: {
          correct: "Yes—Aisha and her cousin Omar.",
          incorrect: "It was Aisha and Omar."
        }
      },
      {
        q: "What did they find inside the cave?",
        options: [
          "Coins, a map, and symbols",
          "A treasure chest of toys",
          "A big river",
          "A dragon"
        ],
        correct: "Coins, a map, and symbols",
        feedback: {
          correct: "Right—they found coins, a map, and symbols.",
          incorrect: "They found coins, a map, and symbols."
        }
      },
      {
        q: "Where did the map lead them?",
        options: [
          "A hidden garden",
          "A library",
          "A castle",
          "A market"
        ],
        correct: "A hidden garden",
        feedback: {
          correct: "Yes—a secret garden with flowers and fruit trees.",
          incorrect: "It led to a hidden garden."
        }
      }
    ]
  },
  {
  "level": "upperPrimary",
  "title": "The Missing Homework (Moral Story)",
  "text": "Fatima forgot to do her homework. When the teacher asked, she thought about lying but decided to tell the truth. The teacher appreciated her honesty and gave her extra time. Fatima learned that telling the truth builds trust.",
  "image": "https://kids-app-images.s3.us-east-1.amazonaws.com/general-image.webp",
  "questions": [
    {
      "q": "What did Fatima forget?",
      "options": ["Her homework", "Her lunch", "Her book", "Her uniform"],
      "correct": "Her homework",
      "feedback": {
        "correct": "Yes—she forgot her homework.",
        "incorrect": "She forgot her homework."
      }
    },
    {
      "q": "What choice did Fatima make?",
      "options": ["She told the truth", "She lied", "She ran away", "She blamed a friend"],
      "correct": "She told the truth",
      "feedback": {
        "correct": "Right—she chose honesty.",
        "incorrect": "She decided to tell the truth."
      }
    },
    {
      "q": "What lesson does the story teach?",
      "options": ["Honesty builds trust", "Always make excuses", "Hide mistakes", "Homework is not important"],
      "correct": "Honesty builds trust",
      "feedback": {
        "correct": "Exactly—honesty helps people trust you.",
        "incorrect": "The lesson is that honesty builds trust."
      }
    }
  ]
},
{
  "level": "upperPrimary",
  "title": "The Night of Power",
  "text": "Laylat al-Qadr, the Night of Power, is the most special night in Ramadan. It is the night when the Qur'an was first sent down. Worship on this night is better than a thousand months. Fatima’s family prayed, read Qur'an, and made dua all night. They felt peaceful and close to Allah.",
  "image": "https://kids-app-images.s3.us-east-1.amazonaws.com/night-of-power.jpeg",
  "questions": [
    {
      "q": "What happened on Laylat al-Qadr?",
      "options": ["The Qur'an began to be revealed", "The first mosque was built", "Eid began", "Ramadan ended"],
      "correct": "The Qur'an began to be revealed",
      "feedback": {
        "correct": "Yes—that is why it is so special.",
        "incorrect": "It is the night the Qur'an began to be revealed."
      }
    },
    {
      "q": "Worship on this night is equal to…",
      "options": ["Better than a thousand months", "One special day", "One week", "One month"],
      "correct": "Better than a thousand months",
      "feedback": {
        "correct": "Right—worship is greatly rewarded.",
        "incorrect": "It is better than a thousand months."
      }
    },
    {
      "q": "How did Fatima’s family spend the night?",
      "options": ["Praying and reading Qur'an", "Watching TV", "Traveling", "Sleeping early"],
      "correct": "Praying and reading Qur'an",
      "feedback": {
        "correct": "Yes—they worshipped together.",
        "incorrect": "They prayed and read the Qur'an."
      }
    }
  ]
},
{
  "level": "upperPrimary",
  "title": "Saving the School Garden",
  "text": "The school garden was dying because the water tank was broken. Mariam suggested collecting rainwater. The class worked together, placing buckets and containers outside. After two rainy days, they had enough water to save the plants. Their teacher praised them for teamwork and creativity.",
  "image": "https://kids-app-images.s3.us-east-1.amazonaws.com/general-image.webp",
  "questions": [
    {
      "q": "Why was the garden dying?",
      "options": ["The water tank was broken", "Too much snow", "No sunlight", "Too many weeds"],
      "correct": "The water tank was broken",
      "feedback": {
        "correct": "Yes—the tank was broken.",
        "incorrect": "It was because the water tank was broken."
      }
    },
    {
      "q": "How did the class get water?",
      "options": ["They collected rainwater", "They bought bottles", "They dug a well", "They waited for a truck"],
      "correct": "They collected rainwater",
      "feedback": {
        "correct": "Right—they used rainwater.",
        "incorrect": "They collected rainwater in containers."
      }
    },
    {
      "q": "What did the teacher praise?",
      "options": ["Teamwork and creativity", "Running fast", "Painting the classroom", "Playing games"],
      "correct": "Teamwork and creativity",
      "feedback": {
        "correct": "Exactly—working together with smart ideas.",
        "incorrect": "She praised their teamwork and creativity."
      }
    }
  ]
},
{
  "level": "upperPrimary",
  "title": "The Hidden Treasure of the Library",
  "text": "Ali loved reading and spent most of his free time in the library. One afternoon, he noticed a dusty old book in the corner. Inside was a map leading to a small wooden box buried under the big oak tree in the schoolyard. With his teacher’s permission, Ali dug it up and found letters from students of many years ago. The letters told funny and inspiring stories from the past.",
  "image": "https://kids-app-images.s3.us-east-1.amazonaws.com/general-image.webp",
  "questions": [
    {
      "q": "What did Ali find inside the old book?",
      "options": ["A map", "Money", "A photo", "A key"],
      "correct": "A map",
      "feedback": {
        "correct": "Yes—there was a map inside.",
        "incorrect": "He found a map inside the book."
      }
    },
    {
      "q": "Where was the wooden box buried?",
      "options": ["Under the big oak tree", "In the classroom", "Behind the library", "Near the river"],
      "correct": "Under the big oak tree",
      "feedback": {
        "correct": "Right—it was under the oak tree.",
        "incorrect": "It was buried under the big oak tree."
      }
    },
    {
      "q": "What was inside the box?",
      "options": ["Letters from old students", "Gold coins", "Toys", "Books of math"],
      "correct": "Letters from old students",
      "feedback": {
        "correct": "Yes—letters with funny and inspiring stories.",
        "incorrect": "The box contained letters from old students."
      }
    }
  ]
}

];

export const storiesData: Story[] = stories.map((s, i) => ({
      ...s,
      _id: `${i + 1}`,
      level: s.level as Story['level'],
    }));