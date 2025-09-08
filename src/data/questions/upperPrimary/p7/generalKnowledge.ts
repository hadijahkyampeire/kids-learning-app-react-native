import type { Question } from "../../../../types";

export const p7GeneralKnowledge: Question[] = [
  // ——— Geography ———
  {
    _id: "up-p7-gk-g-001",
    level: "upperPrimary",
    subject: "generalKnowledge",
    class: "p7",
    topic: "Geography",
    type: "fill-in",
    text: "0° latitude is the ____.",
    correct: "/^equator$/i",
    feedback: { correct: "Correct!", incorrect: "Answer: Equator." }
  },
  {
    _id: "up-p7-gk-g-002",
    level: "upperPrimary",
    subject: "generalKnowledge",
    class: "p7",
    topic: "Geography",
    type: "fill-in",
    text: "0° longitude is the ____.",
    correct: "/^prime\\s*meridian$/i",
    feedback: { correct: "Correct!", incorrect: "Answer: Prime Meridian." }
  },
  {
    _id: "up-p7-gk-g-003",
    level: "upperPrimary",
    subject: "generalKnowledge",
    class: "p7",
    topic: "Geography",
    type: "fill-in",
    text: "A landlocked country has no ____.",
    correct: "/^coast(line)?$/i",
    feedback: { correct: "Correct!", incorrect: "Answer: coastline." }
  },
  {
    _id: "up-p7-gk-g-004",
    level: "upperPrimary",
    subject: "generalKnowledge",
    class: "p7",
    topic: "Geography",
    type: "fill-in",
    text: "A desert is an area with very little ____.",
    correct: "/^rain(fall)?$/i",
    feedback: { correct: "Correct!", incorrect: "Answer: rain (rainfall)." }
  },
  {
    _id: "up-p7-gk-g-005",
    level: "upperPrimary",
    subject: "generalKnowledge",
    class: "p7",
    topic: "Geography",
    type: "fill-in",
    text: "Mountains are formed by movements of the Earth's ____.",
    correct: "/^crust$/i",
    feedback: { correct: "Correct!", incorrect: "Answer: crust." }
  },
  {
    _id: "up-p7-gk-g-006",
    level: "upperPrimary",
    subject: "generalKnowledge",
    class: "p7",
    topic: "Geography",
    type: "choice",
    text: "Largest ocean is the ____.",
    options: ["Pacific", "Atlantic", "Indian"],
    correct: "Pacific",
    feedback: { correct: "Correct!", incorrect: "Largest is the Pacific Ocean." }
  },
  {
    _id: "up-p7-gk-g-007",
    level: "upperPrimary",
    subject: "generalKnowledge",
    class: "p7",
    topic: "Geography",
    type: "fill-in",
    text: "A compass points to magnetic ____.",
    correct: "/^north$/i",
    feedback: { correct: "Correct!", incorrect: "Answer: north." }
  },

  // ——— Politics ———
  {
    _id: "up-p7-gk-p-001",
    level: "upperPrimary",
    subject: "generalKnowledge",
    class: "p7",
    topic: "Politics",
    type: "fill-in",
    text: "Democracy means people ____ leaders.",
    correct: "/^vote\\s*to\\s*choose$|^vote$/i",
    feedback: { correct: "Correct!", incorrect: "Answer: vote (to choose)." }
  },
  {
    _id: "up-p7-gk-p-002",
    level: "upperPrimary",
    subject: "generalKnowledge",
    class: "p7",
    topic: "Politics",
    type: "fill-in",
    text: "A constitution is a set of ____.",
    correct: "/^national\\s*laws$|^laws$/i",
    feedback: { correct: "Correct!", incorrect: "Answer: (national) laws." }
  },
  {
    _id: "up-p7-gk-p-003",
    level: "upperPrimary",
    subject: "generalKnowledge",
    class: "p7",
    topic: "Politics",
    type: "fill-in",
    text: "Parliament mainly ____ laws.",
    correct: "/^makes?$|^make$/i",
    feedback: { correct: "Correct!", incorrect: "Answer: makes (make)." }
  },
  {
    _id: "up-p7-gk-p-004",
    level: "upperPrimary",
    subject: "generalKnowledge",
    class: "p7",
    topic: "Politics",
    type: "fill-in",
    text: "Local leaders manage ____ services.",
    correct: "/^community$/i",
    feedback: { correct: "Correct!", incorrect: "Answer: community services." }
  },
  {
    _id: "up-p7-gk-p-005",
    level: "upperPrimary",
    subject: "generalKnowledge",
    class: "p7",
    topic: "Politics",
    type: "fill-in",
    text: "Citizens have rights and ____.",
    correct: "/^duties$/i",
    feedback: { correct: "Correct!", incorrect: "Answer: duties." }
  },
  {
    _id: "up-p7-gk-p-006",
    level: "upperPrimary",
    subject: "generalKnowledge",
    class: "p7",
    topic: "Politics",
    type: "fill-in",
    text: "Elections are held to ____ leaders.",
    correct: "/^choose$|^elect$/i",
    feedback: { correct: "Correct!", incorrect: "Answer: choose/elect." }
  },
  {
    _id: "up-p7-gk-p-007",
    level: "upperPrimary",
    subject: "generalKnowledge",
    class: "p7",
    topic: "Politics",
    type: "fill-in",
    text: "Rule of law means everyone ____ the law.",
    correct: "/^follows?$|^obeys?$/i",
    feedback: { correct: "Correct!", incorrect: "Answer: follows/obeys." }
  },

  // ——— Environment ———
  {
    _id: "up-p7-gk-e-001",
    level: "upperPrimary",
    subject: "generalKnowledge",
    class: "p7",
    topic: "Environment",
    type: "fill-in",
    text: "Planting trees is called ____.",
    correct: "/^afforestation$/i",
    feedback: { correct: "Correct!", incorrect: "Answer: afforestation." }
  },
  {
    _id: "up-p7-gk-e-002",
    level: "upperPrimary",
    subject: "generalKnowledge",
    class: "p7",
    topic: "Environment",
    type: "fill-in",
    text: "Reusing bottles reduces ____.",
    correct: "/^waste$/i",
    feedback: { correct: "Correct!", incorrect: "Answer: waste." }
  },
  {
    _id: "up-p7-gk-e-003",
    level: "upperPrimary",
    subject: "generalKnowledge",
    class: "p7",
    topic: "Environment",
    type: "fill-in",
    text: "Turning off the tap 🚰 saves ____.",
    correct: "/^water$/i",
    feedback: { correct: "Correct!", incorrect: "Answer: water." }
  },
  {
    _id: "up-p7-gk-e-004",
    level: "upperPrimary",
    subject: "generalKnowledge",
    class: "p7",
    topic: "Environment",
    type: "fill-in",
    text: "Plastic in rivers harms ____ life.",
    correct: "/^aquatic$|^marine$/i",
    feedback: { correct: "Correct!", incorrect: "Answer: aquatic (marine) life." }
  },
  {
    _id: "up-p7-gk-e-005",
    level: "upperPrimary",
    subject: "generalKnowledge",
    class: "p7",
    topic: "Environment",
    type: "fill-in",
    text: "Composting turns food scraps into ____.",
    correct: "/^fertili[sz]er$|^manure$/i",
    feedback: { correct: "Correct!", incorrect: "Answer: fertilizer/manure." }
  },
  {
    _id: "up-p7-gk-e-006",
    level: "upperPrimary",
    subject: "generalKnowledge",
    class: "p7",
    topic: "Environment",
    type: "fill-in",
    text: "Using solar panels captures ____ energy.",
    correct: "/^solar$/i",
    feedback: { correct: "Correct!", incorrect: "Answer: solar energy." }
  },
  {
    _id: "up-p7-gk-e-007",
    level: "upperPrimary",
    subject: "generalKnowledge",
    class: "p7",
    topic: "Environment",
    type: "fill-in",
    text: "Keeping cities clean needs proper ____.",
    correct: "/^waste\\s*disposal$|^sanitation$/i",
    feedback: { correct: "Correct!", incorrect: "Answer: waste disposal/sanitation." }
  },

  // ——— World Organisations ———
  {
    _id: "up-p7-gk-wo-001",
    level: "upperPrimary",
    subject: "generalKnowledge",
    class: "p7",
    topic: "World Orgs",
    type: "fill-in",
    text: "WHO focuses on ____.",
    correct: "/^global\\s*health$|^health$/i",
    feedback: { correct: "Correct!", incorrect: "Answer: (global) health." }
  },
  {
    _id: "up-p7-gk-wo-002",
    level: "upperPrimary",
    subject: "generalKnowledge",
    class: "p7",
    topic: "World Orgs",
    type: "fill-in",
    text: "UNICEF supports ____.",
    correct: "/^children$/i",
    feedback: { correct: "Correct!", incorrect: "Answer: children." }
  },
  {
    _id: "up-p7-gk-wo-003",
    level: "upperPrimary",
    subject: "generalKnowledge",
    class: "p7",
    topic: "World Orgs",
    type: "fill-in",
    text: "UN HQ city is ____.",
    correct: "/^new\\s*york$/i",
    feedback: { correct: "Correct!", incorrect: "Answer: New York." }
  },
  {
    _id: "up-p7-gk-wo-004",
    level: "upperPrimary",
    subject: "generalKnowledge",
    class: "p7",
    topic: "World Orgs",
    type: "fill-in",
    text: "FAO works on ____.",
    correct: "/^food(\\s*&\\s*|\\s*and\\s*)agriculture$|^food$|^agriculture$/i",
    feedback: { correct: "Correct!", incorrect: "Answer: food & agriculture." }
  },
  {
    _id: "up-p7-gk-wo-005",
    level: "upperPrimary",
    subject: "generalKnowledge",
    class: "p7",
    topic: "World Orgs",
    type: "fill-in",
    text: "UNESCO supports ____.",
    correct: "/^education(\\s*&\\s*|\\s*and\\s*)culture$|^education$|^culture$/i",
    feedback: { correct: "Correct!", incorrect: "Answer: education & culture." }
  },
  {
    _id: "up-p7-gk-wo-006",
    level: "upperPrimary",
    subject: "generalKnowledge",
    class: "p7",
    topic: "World Orgs",
    type: "fill-in",
    text: "Red Cross helps during ____.",
    correct: "/^emergencies$|^disasters$/i",
    feedback: { correct: "Correct!", incorrect: "Answer: emergencies/disasters." }
  },
  {
    _id: "up-p7-gk-wo-007",
    level: "upperPrimary",
    subject: "generalKnowledge",
    class: "p7",
    topic: "World Orgs",
    type: "fill-in",
    text: "WFP mainly provides ____ aid.",
    correct: "/^food$/i",
    feedback: { correct: "Correct!", incorrect: "Answer: food aid." }
  }
];
