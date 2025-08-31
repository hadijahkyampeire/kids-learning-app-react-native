export const TOPICS_PRESCHOOL_BY_CLASS_SUBJECT = {
  baby: {
    english: [
      "Alphabet Recognition",    // Basic letter recognition and sounds
      "Basic Vocabulary",       // Simple words and their meanings
      "Simple Greetings"       // Basic communication and politeness
    ],
    math: [
      "Numbers & Counting (0-5)", // Number recognition and counting to 5
      "Shapes & Patterns",        // Basic shapes and simple patterns
      "Basic Comparisons"         // Size, quantity, and position comparisons
    ],
    science: [
      "Body Parts",             // Parts of the body and their functions
      "Colors & Nature",        // Colors in our environment
      "Animals & Their Sounds"  // Common animals and their sounds
    ],
    art: [
      "Basic Colors",           // Primary and common colors
      "Basic Shapes",          // Simple shapes in art
      "Art Tools"             // Introduction to drawing and coloring tools
    ],
    generalKnowledge: [
      "Daily Life & Family",    // Family, routines, and daily activities
      "Food & Weather",         // Basic food types and weather concepts
      "Colors & Shapes"         // Colors and shapes in our environment
    ],
    religion: [
      "Basic Values",           // Fundamental moral values
      "Prayer & Worship",       // Basic religious practices
      "Good Behavior"          // Positive conduct and manners
    ]
  },
  middle: {
    english: [
      "Reading Skills",         // Combines Syllables and Sounds
      "Word Patterns",          // Combines Rhymes and Word Formation
      "Vocabulary Building",    // Combines Sight Words and Make a Word
      "Language Use"           // Combines Opposites and basic sentences
    ],
    math: [
      "Numbers (0-10)",        // Number recognition and counting
      "Shapes & Space",        // Combines 2D shapes and Position
      "Patterns & Sorting",    // Combines Patterns AAB and basic sorting
      "Size & Measurement"     // Combines Comparisons and basic measurement
    ],
    science: [
      "Living Things",         // Combines Animals & Homes and Plants & Growth
      "Earth & Weather",       // Combines Weather & Clothing and Earth & Sky
      "Health & Body",         // Combines Body Care and basic hygiene
      "Environment"           // Combines Water and environmental awareness
    ],
    art: [
      "Colors & Mixing",       // Understanding and mixing colors
      "Drawing Skills",        // Basic drawing techniques
      "Art Materials",         // Using different art tools
      "Creative Projects"      // Simple art projects and expression
    ],
    generalKnowledge: [
      "Home & Family Life",    // Extended family concepts
      "Community & Helpers",   // Expanded community knowledge
      "Safety & Health",       // Combined safety and health topics
      "Transport & Technology" // Modern world awareness
    ],
    religion: [
      "Faith Basics",          // Core religious concepts
      "Worship & Practice",    // Prayer and worship practices
      "Religious Stories",     // Stories from holy books
      "Values & Character"     // Moral teachings
    ]
  },
  top: {
    english: [
      "Reading Comprehension", // Understanding text
      "Sentence Building",     // Complete sentence formation
      "Advanced Vocabulary",   // Expanded word knowledge
      "Grammar Basics",        // Basic grammar concepts
      "Creative Expression"    // Writing and speaking
    ],
    math: [
      "Numbers & Operations (0-20)", // Advanced counting and basic operations
      "Advanced Patterns",           // Complex pattern recognition
      "Measurement & Data",          // Basic measurement concepts
      "Problem Solving",             // Simple word problems
      "Geometry Basics"              // Advanced shapes and spatial concepts
    ],
    science: [
      "Life Science",               // Plants, animals, and habitats
      "Earth & Space",              // Weather, seasons, and sky
      "Health & Human Body",        // Advanced body systems and health
      "Environmental Science",      // Nature and conservation
      "Scientific Thinking"         // Basic scientific process
    ],
    generalKnowledge: [
      "Society & Culture",         // Extended community and cultural awareness
      "Health & Safety",           // Advanced safety and health concepts
      "World Around Us",           // Geography and environment
      "Technology & Tools",        // Modern technology awareness
      "Life Skills"               // Advanced daily living skills
    ],
    religion: [
      "Advanced Beliefs",         // Deeper understanding of faith
      "Religious Practices",      // Detailed worship and practices
      "Sacred Stories",           // Advanced religious stories
      "Moral Values",            // Complex moral concepts
      "Community & Faith"        // Religious community participation
    ]
  }
} as const;
