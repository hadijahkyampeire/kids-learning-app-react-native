import { type Question } from "../../../../types";

export const babyClassArtQuestions: Question[] = [
  // Basic Colors
  {
    _id: "bb-art-1",
    level: "preSchool",
    subject: "art",
    class: "baby",
    topic: "Basic Colors",
    text: "Which one is red? 🔴",
    options: ["Red circle", "Blue circle", "Yellow circle"],
    correct: "Red circle",
    type: "choice",
    feedback: { correct: "Yes! That's red.", incorrect: "Red is like an apple or stop light." }
  },
  {
    _id: "bb-art-mc-1",
    level: "preSchool",
    subject: "art",
    class: "baby",
    topic: "Basic Colors",
    text: "Which things are red? 🎨",
    options: ["Apple", "Strawberry", "Banana", "Fire truck", "Grass", "Cherry"],
    correct: ["Apple", "Strawberry", "Fire truck", "Cherry"],
    type: "multiChoice",
    feedback: { correct: "Yes! All these things are red!", incorrect: "Think about things that are the color of a stop light." }
  },
  {
    _id: "bb-art-mc-2",
    level: "preSchool",
    subject: "art",
    class: "baby",
    topic: "Color Groups",
    text: "Which are warm colors? 🌞",
    options: ["Red", "Blue", "Yellow", "Green", "Orange", "Purple"],
    correct: ["Red", "Yellow", "Orange"],
    type: "multiChoice",
    feedback: { correct: "Great! These are warm colors like the sun!", incorrect: "Warm colors remind us of the sun and fire." }
  },
  {
    _id: "bb-art-2",
    level: "preSchool",
    subject: "art",
    class: "baby",
    topic: "Basic Colors",
    text: "Which one is blue? 🔵",
    options: ["Blue circle", "Red circle", "Green circle"],
    correct: "Blue circle",
    feedback: { correct: "Yes! That's blue.", incorrect: "Blue is like the sky." }
  },
  {
    _id: "bb-art-3",
    level: "preSchool",
    subject: "art",
    class: "baby",
    topic: "Basic Colors",
    text: "Which one is yellow? ⭐",
    options: ["Yellow star", "Blue star", "Red star"],
    correct: "Yellow star",
    feedback: { correct: "Yes! That's yellow.", incorrect: "Yellow is like the sun." }
  },
  {
    _id: "bb-art-4",
    level: "preSchool",
    subject: "art",
    class: "baby",
    topic: "Basic Colors",
    text: "Which one is green? 🟢",
    options: ["Green circle", "Red circle", "Blue circle"],
    correct: "Green circle",
    feedback: { correct: "Yes! That's green.", incorrect: "Green is like grass." }
  },
  {
    _id: "bb-art-5",
    level: "preSchool",
    subject: "art",
    class: "baby",
    topic: "Basic Colors",
    text: "Which one is orange? 🟧",
    options: ["Orange square", "Yellow square", "Red square"],
    correct: "Orange square",
    feedback: { correct: "Yes! That's orange.", incorrect: "Orange is like a carrot." }
  },
  {
    _id: "bb-art-6",
    level: "preSchool",
    subject: "art",
    class: "baby",
    topic: "Basic Colors",
    text: "Which one is purple? 🟣",
    options: ["Purple circle", "Blue circle", "Pink circle"],
    correct: "Purple circle",
    feedback: { correct: "Yes! That's purple.", incorrect: "Purple is like grapes." }
  },
  {
    _id: "bb-art-7",
    level: "preSchool",
    subject: "art",
    class: "baby",
    topic: "Basic Colors",
    text: "Which one is brown? 🟫",
    options: ["Brown square", "Black square", "Orange square"],
    correct: "Brown square",
    feedback: { correct: "Yes! That's brown.", incorrect: "Brown is like chocolate." }
  },
  {
    _id: "bb-art-8",
    level: "preSchool",
    subject: "art",
    class: "baby",
    topic: "Basic Colors",
    text: "Which one is black? ⚫",
    options: ["Black circle", "Brown circle", "Blue circle"],
    correct: "Black circle",
    feedback: { correct: "Yes! That's black.", incorrect: "Black is like the night sky." }
  },

  // Basic Shapes
  {
    _id: "bb-art-9",
    level: "preSchool",
    subject: "art",
    class: "baby",
    topic: "Basic Shapes",
    text: "Which one is a circle? ⭕",
    options: ["Circle", "Square", "Triangle"],
    correct: "Circle",
    type: "choice",
    feedback: { correct: "Yes! That's a circle.", incorrect: "A circle is round like a ball." }
  },
  {
    _id: "bb-art-mc-3",
    level: "preSchool",
    subject: "art",
    class: "baby",
    topic: "Basic Shapes",
    text: "Which shapes can roll? 🎳",
    options: ["Circle", "Square", "Ball", "Cube", "Cylinder", "Triangle"],
    correct: ["Circle", "Ball", "Cylinder"],
    type: "multiChoice",
    feedback: { correct: "Yes! These shapes can all roll!", incorrect: "Think about shapes with no corners that can roll." }
  },
  {
    _id: "bb-art-mc-4",
    level: "preSchool",
    subject: "art",
    class: "baby",
    topic: "Basic Shapes",
    text: "What shapes do you see in a house? 🏠",
    options: ["Square", "Rectangle", "Circle", "Triangle", "Star", "Heart"],
    correct: ["Square", "Rectangle", "Triangle"],
    type: "multiChoice",
    feedback: { correct: "Great! Houses have these shapes!", incorrect: "Look at the walls, windows, and roof of a house." }
  },
  {
    _id: "bb-art-10",
    level: "preSchool",
    subject: "art",
    class: "baby",
    topic: "Basic Shapes",
    text: "Which one is a square? ⬜",
    options: ["Square", "Circle", "Triangle"],
    correct: "Square",
    feedback: { correct: "Yes! That's a square.", incorrect: "A square has four equal sides." }
  },
  {
    _id: "bb-art-11",
    level: "preSchool",
    subject: "art",
    class: "baby",
    topic: "Basic Shapes",
    text: "Which one is a triangle? 🔺",
    options: ["Triangle", "Circle", "Square"],
    correct: "Triangle",
    feedback: { correct: "Yes! That's a triangle.", incorrect: "A triangle has three sides." }
  },
  {
    _id: "bb-art-12",
    level: "preSchool",
    subject: "art",
    class: "baby",
    topic: "Basic Shapes",
    text: "Which one is a rectangle? 📱",
    options: ["Rectangle", "Circle", "Triangle"],
    correct: "Rectangle",
    feedback: { correct: "Yes! That's a rectangle.", incorrect: "A rectangle is like a door." }
  },
  {
    _id: "bb-art-13",
    level: "preSchool",
    subject: "art",
    class: "baby",
    topic: "Basic Shapes",
    text: "Which shape is like a ball? ⚽",
    options: ["Circle", "Square", "Triangle"],
    correct: "Circle",
    feedback: { correct: "Yes! A ball is round like a circle.", incorrect: "Think about how a ball rolls." }
  },
  {
    _id: "bb-art-14",
    level: "preSchool",
    subject: "art",
    class: "baby",
    topic: "Basic Shapes",
    text: "Which shape is like a box? 📦",
    options: ["Square", "Circle", "Triangle"],
    correct: "Square",
    feedback: { correct: "Yes! A box is like a square.", incorrect: "Think about the sides of a box." }
  },
  {
    _id: "bb-art-15",
    level: "preSchool",
    subject: "art",
    class: "baby",
    topic: "Basic Shapes",
    text: "Which shape is like a pizza slice? 🍕",
    options: ["Triangle", "Circle", "Square"],
    correct: "Triangle",
    feedback: { correct: "Yes! A pizza slice is like a triangle.", incorrect: "Think about the shape of pizza when cut." }
  },
  {
    _id: "bb-art-16",
    level: "preSchool",
    subject: "art",
    class: "baby",
    topic: "Basic Shapes",
    text: "Which shape is like a door? 🚪",
    options: ["Rectangle", "Circle", "Triangle"],
    correct: "Rectangle",
    feedback: { correct: "Yes! A door is like a rectangle.", incorrect: "Think about the shape of a door." }
  },

  // Art Tools
  {
    _id: "bb-art-17",
    level: "preSchool",
    subject: "art",
    class: "baby",
    topic: "Art Tools",
    text: "What do we use to color? 🖍️",
    options: ["Crayons", "Scissors", "Glue"],
    correct: "Crayons",
    type: "choice",
    feedback: { correct: "Yes! We use crayons to color.", incorrect: "Think about what makes colorful marks." }
  },
  {
    _id: "bb-art-mc-5",
    level: "preSchool",
    subject: "art",
    class: "baby",
    topic: "Art Tools",
    text: "Which tools can make colors? 🎨",
    options: ["Crayons", "Paint", "Markers", "Scissors", "Glue", "Eraser"],
    correct: ["Crayons", "Paint", "Markers"],
    type: "multiChoice",
    feedback: { correct: "Yes! These all make beautiful colors!", incorrect: "Think about what tools leave colorful marks on paper." }
  },
  {
    _id: "bb-art-mc-6",
    level: "preSchool",
    subject: "art",
    class: "baby",
    topic: "Art Tools",
    text: "What do we need for painting? 🖌️",
    options: ["Paint", "Brush", "Water", "Paper", "Scissors", "Glue"],
    correct: ["Paint", "Brush", "Water", "Paper"],
    type: "multiChoice",
    feedback: { correct: "Perfect! We need all these to paint!", incorrect: "Think about everything you use when painting a picture." }
  },
  {
    _id: "bb-art-18",
    level: "preSchool",
    subject: "art",
    class: "baby",
    topic: "Art Tools",
    text: "What do we use to cut paper? ✂️",
    options: ["Scissors", "Pencil", "Glue"],
    correct: "Scissors",
    feedback: { correct: "Yes! We use scissors to cut.", incorrect: "Think about what splits paper." }
  },
  {
    _id: "bb-art-19",
    level: "preSchool",
    subject: "art",
    class: "baby",
    topic: "Art Tools",
    text: "What do we use to stick things? 📎",
    options: ["Glue", "Scissors", "Crayons"],
    correct: "Glue",
    feedback: { correct: "Yes! We use glue to stick things.", incorrect: "Think about what makes things stick together." }
  },
  {
    _id: "bb-art-20",
    level: "preSchool",
    subject: "art",
    class: "baby",
    topic: "Art Tools",
    text: "What do we draw with? ✏️",
    options: ["Pencil", "Scissors", "Glue"],
    correct: "Pencil",
    feedback: { correct: "Yes! We use pencils to draw.", incorrect: "Think about what makes lines on paper." }
  },
  {
    _id: "bb-art-21",
    level: "preSchool",
    subject: "art",
    class: "baby",
    topic: "Art Tools",
    text: "What do we paint with? 🖌️",
    options: ["Brush", "Pencil", "Scissors"],
    correct: "Brush",
    feedback: { correct: "Yes! We use brushes to paint.", incorrect: "Think about what spreads paint." }
  },
  {
    _id: "bb-art-22",
    level: "preSchool",
    subject: "art",
    class: "baby",
    topic: "Art Tools",
    text: "What do we use to erase? ❌",
    options: ["Eraser", "Pencil", "Crayon"],
    correct: "Eraser",
    feedback: { correct: "Yes! We use erasers to remove marks.", incorrect: "Think about what removes pencil marks." }
  },
  {
    _id: "bb-art-23",
    level: "preSchool",
    subject: "art",
    class: "baby",
    topic: "Art Tools",
    text: "What do we draw on? 📄",
    options: ["Paper", "Scissors", "Glue"],
    correct: "Paper",
    feedback: { correct: "Yes! We draw on paper.", incorrect: "Think about what we put our art on." }
  },
  {
    _id: "bb-art-24",
    level: "preSchool",
    subject: "art",
    class: "baby",
    topic: "Art Tools",
    text: "What makes colorful dots? 🎨",
    options: ["Markers", "Scissors", "Paper"],
    correct: "Markers",
    feedback: { correct: "Yes! Markers make colorful dots.", incorrect: "Think about what makes bright marks." }
  }
];