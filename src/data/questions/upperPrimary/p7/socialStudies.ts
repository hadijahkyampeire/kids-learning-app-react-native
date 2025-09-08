import type { Question } from "../../../../types";

export const p7SocialStudies: Question[] = [
  // ——— Africa Map ———
  {
    _id: "up-p7-ss-am-001",
    level: "upperPrimary",
    subject: "socialStudies",
    class: "p7",
    topic: "Africa Map",
    type: "fill-in",
    text: "Mount Kilimanjaro is found in ________.",
    correct: "/^tanzania$/i",
    feedback: { correct: "Yes—Tanzania.", incorrect: "Answer: Tanzania." }
  },
  {
    _id: "up-p7-ss-am-002",
    level: "upperPrimary",
    subject: "socialStudies",
    class: "p7",
    topic: "Africa Map",
    type: "fill-in",
    text: "Madagascar lies in the ________ Ocean.",
    correct: "/^indian$/i",
    feedback: { correct: "Correct—Indian Ocean.", incorrect: "It's the Indian Ocean." }
  },
  {
    _id: "up-p7-ss-am-003",
    level: "upperPrimary",
    subject: "socialStudies",
    class: "p7",
    topic: "Africa Map",
    type: "multiText",
    text: "Complete: Lake Victoria is bordered by ________, ________ and ________.",
    correct: ["/^uganda$/i", "/^kenya$/i", "/^tanzania$/i"],
    feedback: { correct: "Uganda, Kenya and Tanzania.", incorrect: "Borders: Uganda, Kenya, Tanzania." }
  },
  {
    _id: "up-p7-ss-am-004",
    level: "upperPrimary",
    subject: "socialStudies",
    class: "p7",
    topic: "Africa Map",
    type: "choice",
    text: "The Nile River is the world’s ____ river.",
    options: ["longest", "widest", "deepest"],
    correct: "longest",
    feedback: { correct: "Correct!", incorrect: "It's the longest." }
  },
  {
    _id: "up-p7-ss-am-005",
    level: "upperPrimary",
    subject: "socialStudies",
    class: "p7",
    topic: "Africa Map",
    type: "fill-in",
    text: "Cape of Good Hope is at the ________ tip of Africa.",
    correct: "/^southern$/i",
    feedback: { correct: "Right—southern tip.", incorrect: "Southern tip." }
  },

  // ——— Continents & Oceans ———
  {
    _id: "up-p7-ss-co-001",
    level: "upperPrimary",
    subject: "socialStudies",
    class: "p7",
    topic: "Continents & Oceans",
    type: "fill-in",
    text: "Earth has ________ continents.",
    correct: "/^7|seven$/i",
    feedback: { correct: "Seven.", incorrect: "Answer: 7 (seven)." }
  },
  {
    _id: "up-p7-ss-co-002",
    level: "upperPrimary",
    subject: "socialStudies",
    class: "p7",
    topic: "Continents & Oceans",
    type: "choice",
    text: "The largest ocean is the ____.",
    options: ["Pacific", "Atlantic", "Indian"],
    correct: "Pacific",
    feedback: { correct: "Correct—Pacific.", incorrect: "It's the Pacific Ocean." }
  },
  {
    _id: "up-p7-ss-co-003",
    level: "upperPrimary",
    subject: "socialStudies",
    class: "p7",
    topic: "Continents & Oceans",
    type: "fill-in",
    text: "Africa lies to the south of ________.",
    correct: "/^europe$/i",
    feedback: { correct: "Yes—Europe.", incorrect: "Europe is north of Africa." }
  },
  {
    _id: "up-p7-ss-co-004",
    level: "upperPrimary",
    subject: "socialStudies",
    class: "p7",
    topic: "Continents & Oceans",
    type: "text",
    text: "Name the continent that is not suitable for human settlement and say why.",
    correct: "/(?=.*antarctica)(?=.*(ice|very cold|harsh|uninhabitable|no permanent residents))/i",
    feedback: { correct: "Antarctica—too icy/cold for settlement.", incorrect: "Write: Antarctica + reason (ice/very cold/harsh)." }
  },

  // ——— Europeans in Africa ———
  {
    _id: "up-p7-ss-e-001",
    level: "upperPrimary",
    subject: "socialStudies",
    class: "p7",
    topic: "Europeans",
    type: "text",
    text: "Give ONE reason Europeans were interested in finding the source of River Nile.",
    correct: "/(explor|curios|mystery|control|strateg|trade)/i",
    feedback: { correct: "Good—exploration/curiosity/strategy.", incorrect: "E.g., exploration curiosity or strategic control." }
  },
  {
    _id: "up-p7-ss-e-002",
    level: "upperPrimary",
    subject: "socialStudies",
    class: "p7",
    topic: "Europeans",
    type: "fill-in",
    text: "European control of African countries was called ________ rule.",
    correct: "/^colonial$/i",
    feedback: { correct: "Colonial rule.", incorrect: "Answer: colonial." }
  },
  {
    _id: "up-p7-ss-e-003",
    level: "upperPrimary",
    subject: "socialStudies",
    class: "p7",
    topic: "Europeans",
    type: "multiChoice",
    text: "Select the cash crops widely promoted under colonial rule.",
    options: ["coffee", "cotton", "coal", "cocoa"],
    correct: ["coffee", "cotton", "cocoa"],
    feedback: { correct: "Correct—coffee, cotton, cocoa.", incorrect: "Coal is a mineral, not a cash crop." }
  },

  // ——— Arabs & Indian Ocean Trade ———
  {
    _id: "up-p7-ss-at-001",
    level: "upperPrimary",
    subject: "socialStudies",
    class: "p7",
    topic: "Arabs & Trade",
    type: "multiText",
    text: "Complete: Traders used the ________ winds to sail dhows, linking East Africa with the ________ Peninsula.",
    correct: ["/^monsoon$/i", "/^arabian$/i"],
    feedback: { correct: "Monsoon winds; Arabian Peninsula.", incorrect: "Use: monsoon; Arabian." }
  },
  {
    _id: "up-p7-ss-at-002",
    level: "upperPrimary",
    subject: "socialStudies",
    class: "p7",
    topic: "Arabs & Trade",
    type: "fill-in",
    text: "A coastal trading town on the Swahili coast was ________ (e.g., Kilwa).",
    correct: "/^(kilwa|malindi|mombasa|zanzibar)$/i",
    feedback: { correct: "Nice example.", incorrect: "Examples: Kilwa, Malindi, Mombasa, Zanzibar." }
  },
  {
    _id: "up-p7-ss-at-003",
    level: "upperPrimary",
    subject: "socialStudies",
    class: "p7",
    topic: "Arabs & Trade",
    type: "choice",
    text: "Swahili culture blends African and ____ influences.",
    options: ["Arab", "Arctic", "Pacific"],
    correct: "Arab",
    feedback: { correct: "Correct.", incorrect: "African + Arab influences." }
  },

  // ——— AU & Pan-Africanism ———
  {
    _id: "up-p7-ss-ap-001",
    level: "upperPrimary",
    subject: "socialStudies",
    class: "p7",
    topic: "AU & Pan-Africanism",
    type: "fill-in",
    text: "AU stands for African ________.",
    correct: "/^union$/i",
    feedback: { correct: "African Union.", incorrect: "Answer: Union." }
  },
  {
    _id: "up-p7-ss-ap-002",
    level: "upperPrimary",
    subject: "socialStudies",
    class: "p7",
    topic: "AU & Pan-Africanism",
    type: "fill-in",
    text: "The AU headquarters are in ________ ________ (city & country).",
    correct: ["/^addis$/i", "/^ababa$/i"],
    feedback: { correct: "Addis Ababa (Ethiopia).", incorrect: "City is Addis Ababa (Ethiopia)." }
  },
  {
    _id: "up-p7-ss-ap-003",
    level: "upperPrimary",
    subject: "socialStudies",
    class: "p7",
    topic: "AU & Pan-Africanism",
    type: "text",
    text: "State ONE aim of Pan-Africanism.",
    correct: "/(unity|solidarity|cooperat|freedom|independence|development|peace)/i",
    feedback: { correct: "Valid aim.", incorrect: "Mention unity/solidarity, freedom/independence, peace or development." }
  },

  // ——— Civics, Environment & History (from screenshots) ———
  {
    _id: "up-p7-ss-ce-001",
    level: "upperPrimary",
    subject: "socialStudies",
    class: "p7",
    topic: "Civics & Environment",
    type: "fill-in",
    text: "Name the EAC country that borders Kenya to the North-East: ________.",
    correct: "/^somalia$/i",
    feedback: { correct: "Somalia.", incorrect: "Answer: Somalia." }
  },
  {
    _id: "up-p7-ss-ce-002",
    level: "upperPrimary",
    subject: "socialStudies",
    class: "p7",
    topic: "History",
    type: "text",
    text: "Why is Olduvai Gorge regarded as the origin of mankind?",
    correct: "/(early\\s*(man|human)|hominid).*(fossils|remains)|fossils.*(early\\s*(man|human|hominid))/i",
    feedback: { correct: "Because early human (hominid) fossils were found there.", incorrect: "Mention discovery of early human/hominid fossils." }
  },
  {
    _id: "up-p7-ss-ce-003",
    level: "upperPrimary",
    subject: "socialStudies",
    class: "p7",
    topic: "Environment",
    type: "text",
    text: "Give ONE way a P.7 pupil can control soil erosion on the school compound.",
    correct: "/(plant(ing)?\\s*(grass|trees|shrubs)|mulch|terrace|contour|drainage|cover\\s*bare\\s*soil)/i",
    feedback: { correct: "Good erosion-control method.", incorrect: "e.g., plant grass/trees, mulching, terracing, proper drainage." }
  },
  {
    _id: "up-p7-ss-ce-004",
    level: "upperPrimary",
    subject: "socialStudies",
    class: "p7",
    topic: "Civics",
    type: "fill-in",
    text: "Which ministry approves by-laws set by local authorities in Uganda? Ministry of ________ Government.",
    correct: "/^local$/i",
    feedback: { correct: "Ministry of Local Government.", incorrect: "It's the Ministry of Local Government." }
  },
  {
    _id: "up-p7-ss-ce-005",
    level: "upperPrimary",
    subject: "socialStudies",
    class: "p7",
    topic: "Civics",
    type: "text",
    text: "How does a school create jobs in the area where it is located?",
    correct: "/(employ|hire|jobs|employment)/i",
    feedback: { correct: "Yes—through employment.", incorrect: "Mention employing/hiring staff (teachers, workers)." }
  },
  {
    _id: "up-p7-ss-ce-006",
    level: "upperPrimary",
    subject: "socialStudies",
    class: "p7",
    topic: "Environment",
    type: "text",
    text: "How does overstocking among pastoral tribes affect the environment?",
    correct: "/(overgraz|soil\\s*erosion|land\\s*degrad|destroy(s|ing)?\\s*vegetation)/i",
    feedback: { correct: "Right—overgrazing/land degradation.", incorrect: "State overgrazing/vegetation loss/erosion." }
  },
  {
    _id: "up-p7-ss-ce-007",
    level: "upperPrimary",
    subject: "socialStudies",
    class: "p7",
    topic: "Time Zones",
    type: "fill-in",
    text: "It is 10:00 a.m. at GMT. What time is it at 30°E?",
    correct: "/^(12:?00(\\s?(pm)?|\\s?noon)?)$/i",
    feedback: { correct: "+2 hours → 12:00 noon.", incorrect: "Every 15° = 1 hr; 30°E → +2 = 12:00 noon." }
  },
  {
    _id: "up-p7-ss-ce-008",
    level: "upperPrimary",
    subject: "socialStudies",
    class: "p7",
    topic: "History (Buganda)",
    type: "text",
    text: "Why was Kabaka Mwanga unable to sign the 1900 Buganda Agreement?",
    correct: "/(deposed|exil|not\\s*kabaka|regent)/i",
    feedback: { correct: "He had been deposed/exiled; regents signed.", incorrect: "Say he was deposed/exiled (regents signed for Chwa)." }
  },
  {
    _id: "up-p7-ss-ce-009",
    level: "upperPrimary",
    subject: "socialStudies",
    class: "p7",
    topic: "Wildlife",
    type: "fill-in",
    text: "The animal known as the king of the savannah is the ________.",
    correct: "/^lion$/i",
    feedback: { correct: "Lion.", incorrect: "Answer: lion." }
  },
  {
    _id: "up-p7-ss-ce-010",
    level: "upperPrimary",
    subject: "socialStudies",
    class: "p7",
    topic: "Civics",
    type: "text",
    text: "Give ONE way children show respect to their parents.",
    correct: "/(obey|greet|help|listen|respect)/i",
    feedback: { correct: "Nice example.", incorrect: "E.g., obeying, greeting, helping, listening." }
  },
  {
    _id: "up-p7-ss-ce-011",
    level: "upperPrimary",
    subject: "socialStudies",
    class: "p7",
    topic: "Culture & Economy",
    type: "text",
    text: "In which way can culture promote economic development in Uganda?",
    correct: "/(tourism|cultural\\s*tourism|sell(ing)?\\s*crafts|perform(ing)?\\s*arts)/i",
    feedback: { correct: "Valid—through tourism/crafts/arts.", incorrect: "Mention tourism or sale of cultural products." }
  },
  {
    _id: "up-p7-ss-ce-012",
    level: "upperPrimary",
    subject: "socialStudies",
    class: "p7",
    topic: "Arid Regions",
    type: "text",
    text: "How do people in desert areas reduce dangers caused by strong winds?",
    correct: "/(windbreak|shelterbelt|plant\\s*trees|build\\s*barriers)/i",
    feedback: { correct: "Windbreaks/trees/barriers.", incorrect: "Answer should mention windbreaks/trees/barriers." }
  }
];
