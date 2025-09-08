import { type Question } from "../../../../types";

export const topClassArtQuestions: Question[] = [
  // Advanced Colors Topic
  {
    _id: "tp-art-ac-1",
    level: "preSchool",
    subject: "art",
    class: "top",
    topic: "Advanced Colors",
    text: "What happens when you add white to a color? ⚪",
    options: ["Makes it lighter", "Makes it darker", "No change"],
    correct: "Makes it lighter",
    type: "choice",
    feedback: { correct: "Yes! Adding white makes colors lighter!", incorrect: "White lightens other colors." }
  },
  {
    _id: "tp-art-mc-1",
    level: "preSchool",
    subject: "art",
    class: "top",
    topic: "Advanced Colors",
    text: "Which are warm colors? 🌞",
    options: ["Red", "Blue", "Yellow", "Orange", "Purple", "Green"],
    correct: ["Red", "Yellow", "Orange"],
    type: "multiChoice",
    feedback: { correct: "Yes! These colors remind us of the sun!", incorrect: "Warm colors are like fire and sunshine." }
  },
  {
    _id: "tp-art-mc-2",
    level: "preSchool",
    subject: "art",
    class: "top",
    topic: "Advanced Colors",
    text: "Which colors make secondary colors? 🎨",
    options: ["Red + Blue = Purple", "Blue + Yellow = Green", "Red + Yellow = Orange", "Red + Green = Brown", "Blue + Orange = Black"],
    correct: ["Red + Blue = Purple", "Blue + Yellow = Green", "Red + Yellow = Orange"],
    type: "multiChoice",
    feedback: { correct: "Perfect! These mix to make new colors!", incorrect: "Secondary colors are made by mixing two primary colors." }
  },

  // Art Techniques
  {
    _id: "tp-art-at-1",
    level: "preSchool",
    subject: "art",
    class: "top",
    topic: "Art Techniques",
    text: "What do artists use to blend colors? 🖌️",
    options: ["Ruler", "Brush", "Scissors"],
    correct: "Brush",
    type: "choice",
    feedback: { correct: "Yes! Brushes help blend colors smoothly.", incorrect: "Think about what moves paint around." }
  },
  {
    _id: "tp-art-mc-3",
    level: "preSchool",
    subject: "art",
    class: "top",
    topic: "Art Techniques",
    text: "Which tools can make texture in art? 🎨",
    options: ["Sponge", "Fork", "Brush", "Cotton ball", "Pencil", "Paper"],
    correct: ["Sponge", "Fork", "Brush", "Cotton ball"],
    type: "multiChoice",
    feedback: { correct: "Great! These all make interesting textures!", incorrect: "Think about tools that leave different marks." }
  },
  {
    _id: "tp-art-mc-4",
    level: "preSchool",
    subject: "art",
    class: "top",
    topic: "Art Techniques",
    text: "What can we use to make prints? 🖼️",
    options: ["Leaves", "Potatoes", "Hands", "Sponges", "Books", "Shoes"],
    correct: ["Leaves", "Potatoes", "Hands", "Sponges"],
    type: "multiChoice",
    feedback: { correct: "Yes! These all make great prints!", incorrect: "Think about items that can transfer paint." }
  },

  // Art Composition
  {
    _id: "tp-art-cp-1",
    level: "preSchool",
    subject: "art",
    class: "top",
    topic: "Art Composition",
    text: "Where should the main object be in a picture? 🖼️",
    options: [ "Bottom", "Center", "Corner"],
    correct: "Center",
    type: "choice",
    feedback: { correct: "Yes! The center draws attention!", incorrect: "Important things often go in the middle." }
  },
  {
    _id: "tp-art-mc-5",
    level: "preSchool",
    subject: "art",
    class: "top",
    topic: "Art Composition",
    text: "What makes a good background? 🎨",
    options: ["Sky", "Trees", "Mountains", "Buildings", "Cars", "Shoes"],
    correct: ["Sky", "Trees", "Mountains", "Buildings"],
    type: "multiChoice",
    feedback: { correct: "Perfect! These make great backgrounds!", incorrect: "Think about what you see behind main objects." }
  },
  {
    _id: "tp-art-mc-6",
    level: "preSchool",
    subject: "art",
    class: "top",
    topic: "Art Composition",
    text: "Which things show size in art? 📏",
    options: ["Big things close", "Small things far", "Overlapping shapes", "Flying birds", "Running dogs"],
    correct: ["Big things close", "Small things far", "Overlapping shapes"],
    type: "multiChoice",
    feedback: { correct: "Yes! These show depth in pictures!", incorrect: "Think about how things look near and far." }
  },

  // Creative Expression
  {
    _id: "tp-art-ce-1",
    level: "preSchool",
    subject: "art",
    class: "top",
    topic: "Creative Expression",
    text: "What can show feeling in art? 😊",
    options: ["Colors", "Lines", "Shapes"],
    correct: "Colors",
    type: "choice",
    feedback: { correct: "Yes! Colors can show emotions!", incorrect: "Think about how colors make you feel." }
  },
  {
    _id: "tp-art-mc-7",
    level: "preSchool",
    subject: "art",
    class: "top",
    topic: "Creative Expression",
    text: "Which colors show happiness? 😊",
    options: ["Yellow", "Orange", "Pink", "Blue", "Brown", "Black"],
    correct: ["Yellow", "Orange", "Pink"],
    type: "multiChoice",
    feedback: { correct: "Yes! These are cheerful colors!", incorrect: "Think about bright, sunny colors." }
  },
  {
    _id: "tp-art-mc-8",
    level: "preSchool",
    subject: "art",
    class: "top",
    topic: "Creative Expression",
    text: "What can we make art about? 🎨",
    options: ["Feelings", "Stories", "Nature", "Dreams", "Numbers", "Spelling"],
    correct: ["Feelings", "Stories", "Nature", "Dreams"],
    type: "multiChoice",
    feedback: { correct: "Great! Art can show all these things!", incorrect: "Think about what inspires artwork." }
  }
];