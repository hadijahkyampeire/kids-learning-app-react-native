import type { Question } from "../../../../types";

export const p7Science: Question[] = [
  // -------- EYE --------
  {
    _id: "up-p7-sc-eye-001",
    level: "upperPrimary",
    subject: "science",
    class: "p7",
    topic: "Eye",
    type: "fill-in",
    text: "Name the transparent front part of the eye that helps to refract light: ________.",
    correct: "cornea",
    feedback: { correct: "Yes—cornea.", incorrect: "It is the cornea." }
  },
  {
    _id: "up-p7-sc-eye-002",
    level: "upperPrimary",
    subject: "science",
    class: "p7",
    topic: "Eye",
    type: "multiText",
    text: "Complete: In bright light, the pupil becomes ________; in dim light, it becomes ________.",
    correct: ["smaller", "larger"],
    feedback: { correct: "Constricts, then dilates.", incorrect: "Bright → smaller; dim → larger." }
  },
  {
    _id: "up-p7-sc-eye-003",
    level: "upperPrimary",
    subject: "science",
    class: "p7",
    topic: "Eye",
    type: "choice",
    text: "Part that focuses light onto the retina:",
    options: ["lens", "iris", "pupil"],
    correct: "lens",
    feedback: { correct: "Correct.", incorrect: "The lens changes shape to focus." }
  },
  {
    _id: "up-p7-sc-eye-004",
    level: "upperPrimary",
    subject: "science",
    class: "p7",
    topic: "Eye",
    type: "multiChoice",
    text: "Which TWO parts bend (refract) light as it enters the eye?",
    options: ["cornea", "lens", "retina", "optic nerve"],
    correct: ["cornea", "lens"],
    feedback: { correct: "Yes—cornea and lens.", incorrect: "Only the cornea and lens refract light." }
  },
  {
    _id: "up-p7-sc-eye-005",
    level: "upperPrimary",
    subject: "science",
    class: "p7",
    topic: "Eye",
    type: "text",
    text: "Explain briefly how the iris helps us see comfortably in bright and dim light.",
    // must mention pupil control AND smaller in bright / larger in dim (any order)
    correct: "/(?=.*\\bpupil\\b)(?=.*(control|adjust))(?:.*\\b(small|constrict|narrow)\\b.*\\b(bright)\\b|.*\\b(bright)\\b.*\\b(small|constrict|narrow)\\b)(?:.*\\b(large|dilate|widen)\\b.*\\b(dim|dark)\\b|.*\\b(dim|dark)\\b.*\\b(large|dilate|widen)\\b)/i",
    feedback: { correct: "Good—iris adjusts the pupil: smaller in bright light, larger in dim.", incorrect: "Mention iris controlling the pupil: smaller in bright, larger in dim." }
  },

  // -------- EAR --------
  {
    _id: "up-p7-sc-ear-001",
    level: "upperPrimary",
    subject: "science",
    class: "p7",
    topic: "Ear",
    type: "choice",
    text: "Part that vibrates first when sound reaches the ear:",
    options: ["eardrum", "cochlea", "pinna"],
    correct: "eardrum",
    feedback: { correct: "Correct.", incorrect: "Also called the tympanic membrane." }
  },
  {
    _id: "up-p7-sc-ear-002",
    level: "upperPrimary",
    subject: "science",
    class: "p7",
    topic: "Ear",
    type: "fill-in",
    text: "The coiled structure that converts vibrations into nerve impulses is the ________.",
    correct: "cochlea",
    feedback: { correct: "Right—cochlea.", incorrect: "Answer: cochlea." }
  },
  {
    _id: "up-p7-sc-ear-003",
    level: "upperPrimary",
    subject: "science",
    class: "p7",
    topic: "Ear",
    type: "multiChoice",
    text: "Select ALL bones that make up the ossicles.",
    options: ["malleus", "incus", "stapes", "ulna"],
    correct: ["malleus", "incus", "stapes"],
    feedback: { correct: "Great—malleus, incus, stapes.", incorrect: "The ossicles are malleus, incus and stapes." }
  },
  {
    _id: "up-p7-sc-ear-004",
    level: "upperPrimary",
    subject: "science",
    class: "p7",
    topic: "Ear",
    type: "multiText",
    text: "Complete: The ________ canal collects sound, and the ________ tube equalizes air pressure.",
    correct: ["ear", "Eustachian"],
    feedback: { correct: "Ear canal; Eustachian tube.", incorrect: "Write 'ear' canal and 'Eustachian' tube." }
  },
  {
    _id: "up-p7-sc-ear-005",
    level: "upperPrimary",
    subject: "science",
    class: "p7",
    topic: "Ear",
    type: "multiChoice",
    text: "Which actions protect ears from damage by loud sounds?",
    options: ["Use ear plugs", "Stand close to speakers", "Lower volume", "Take listening breaks"],
    correct: ["Use ear plugs", "Lower volume", "Take listening breaks"],
    feedback: { correct: "Yes—protective listening habits.", incorrect: "Avoid standing close to loud speakers." }
  },

  // -------- HEART & CIRCULATION --------
  {
    _id: "up-p7-sc-heart-001",
    level: "upperPrimary",
    subject: "science",
    class: "p7",
    topic: "Heart",
    type: "fill-in",
    text: "Blood leaves the left ventricle through the ________.",
    correct: "aorta",
    feedback: { correct: "Yes—the aorta.", incorrect: "It’s the aorta." }
  },
  {
    _id: "up-p7-sc-heart-002",
    level: "upperPrimary",
    subject: "science",
    class: "p7",
    topic: "Heart",
    type: "multiText",
    text: "Complete: ________ carry blood away from the heart, while ________ return blood to the heart.",
    correct: ["arteries", "veins"],
    feedback: { correct: "Arteries away; veins return.", incorrect: "Arteries go away; veins return." }
  },
  {
    _id: "up-p7-sc-heart-003",
    level: "upperPrimary",
    subject: "science",
    class: "p7",
    topic: "Heart",
    type: "multiChoice",
    text: "Which statements about capillaries are TRUE?",
    options: [
      "They have very thin walls.",
      "Gas exchange happens here.",
      "They pump blood.",
      "They connect arteries to veins."
    ],
    correct: ["They have very thin walls.", "Gas exchange happens here.", "They connect arteries to veins."],
    feedback: { correct: "Correct—thin walls, exchange site, connectors.", incorrect: "Capillaries don’t pump blood." }
  },
  {
    _id: "up-p7-sc-heart-004",
    level: "upperPrimary",
    subject: "science",
    class: "p7",
    topic: "Heart",
    type: "choice",
    text: "Which chamber pumps oxygenated blood to the body?",
    options: ["left ventricle", "right atrium", "right ventricle"],
    correct: "left ventricle",
    feedback: { correct: "Correct.", incorrect: "Left ventricle → aorta." }
  },
  {
    _id: "up-p7-sc-heart-005",
    level: "upperPrimary",
    subject: "science",
    class: "p7",
    topic: "Heart",
    type: "fill-in",
    text: "During exercise the pulse rate increases mainly because muscles need more ________.",
    correct: "/^(oxygen|energy|oxygen and energy)$/i",
    feedback: { correct: "Right—more oxygen/energy needed.", incorrect: "Key idea: increased oxygen (energy) demand." }
  },

  // -------- BLOOD & VESSELS --------
  {
    _id: "up-p7-sc-blood-001",
    level: "upperPrimary",
    subject: "science",
    class: "p7",
    topic: "Blood & Vessels",
    type: "fill-in",
    text: "Cells that help blood to clot are called ________.",
    correct: "platelets",
    feedback: { correct: "Yes—platelets.", incorrect: "Answer: platelets." }
  },
  {
    _id: "up-p7-sc-blood-002",
    level: "upperPrimary",
    subject: "science",
    class: "p7",
    topic: "Blood & Vessels",
    type: "multiChoice",
    text: "Select ALL functions of blood.",
    options: ["Transport oxygen", "Defend against disease", "Store urine", "Carry nutrients"],
    correct: ["Transport oxygen", "Defend against disease", "Carry nutrients"],
    feedback: { correct: "Good—transport, defense, nutrients.", incorrect: "Blood doesn’t store urine." }
  },
  {
    _id: "up-p7-sc-blood-003",
    level: "upperPrimary",
    subject: "science",
    class: "p7",
    topic: "Blood & Vessels",
    type: "multiText",
    text: "Complete: The largest artery is the ________; the largest vein is the ________.",
    correct: ["aorta", "vena cava"],
    feedback: { correct: "Aorta and vena cava.", incorrect: "Aorta (out), vena cava (in)." }
  },

  // -------- NERVOUS SYSTEM --------
  {
    _id: "up-p7-sc-nerv-001",
    level: "upperPrimary",
    subject: "science",
    class: "p7",
    topic: "Nervous System",
    type: "choice",
    text: "The basic unit of the nervous system is the ____.",
    options: ["neuron", "alveolus", "nephron"],
    correct: "neuron",
    feedback: { correct: "Correct.", incorrect: "Neuron = nerve cell." }
  },
  {
    _id: "up-p7-sc-nerv-002",
    level: "upperPrimary",
    subject: "science",
    class: "p7",
    topic: "Nervous System",
    type: "fill-in",
    text: "The part of the brain that coordinates balance and movement is the ________.",
    correct: "cerebellum",
    feedback: { correct: "Yes—cerebellum.", incorrect: "It’s the cerebellum." }
  },
  {
    _id: "up-p7-sc-nerv-003",
    level: "upperPrimary",
    subject: "science",
    class: "p7",
    topic: "Nervous System",
    type: "text",
    text: "Define a reflex action and give ONE example.",
    // must include "automatic" or "involuntary" AND one valid example word
    correct: "/(?=.*\\b(automatic|involuntary)\\b)(?=.*\\b(blink|blinking|withdraw|withdrawing|knee\\s*jerk|sneeze)\\b).*/i",
    feedback: { correct: "Good—automatic response with a valid example.", incorrect: "Include 'automatic/involuntary' AND an example (blink, withdraw hand, knee jerk, sneeze)." }
  },

  // -------- ELECTRICITY / MAGNETS --------
  {
    _id: "up-p7-sc-elec-001",
    level: "upperPrimary",
    subject: "science",
    class: "p7",
    topic: "Electricity",
    type: "fill-in",
    text: "A generator produces ________ current (AC or DC).",
    correct: "/^(ac|alternating current)$/i",
    feedback: { correct: "AC is correct.", incorrect: "Generators produce AC (alternating current)." }
  },
  {
    _id: "up-p7-sc-elec-002",
    level: "upperPrimary",
    subject: "science",
    class: "p7",
    topic: "Electricity",
    type: "multiText",
    text: "Name TWO causes of a short circuit in a classroom: ________ and ________.",
    correct: ["/(bare|exposed) wires?/i", "/(overload|too many appliances|loose connections|wet surfaces|water)/i"],
    feedback: { correct: "Any two valid causes accepted.", incorrect: "Think bare wires, overloading, loose connections, or water on circuits." }
  },
  {
    _id: "up-p7-sc-mag-001",
    level: "upperPrimary",
    subject: "science",
    class: "p7",
    topic: "Magnets",
    type: "choice",
    text: "A natural magnet commonly found in nature is:",
    options: ["lodestone", "aluminium", "brass"],
    correct: "lodestone",
    feedback: { correct: "Yes—lodestone.", incorrect: "Natural magnets are lodestones." }
  },
  {
    _id: "up-p7-sc-mag-002",
    level: "upperPrimary",
    subject: "science",
    class: "p7",
    topic: "Magnets",
    type: "multiText",
    text: "In stroking method magnetisation, rub from the ________ pole to the ________ pole in one direction.",
    correct: ["south", "north"],
    feedback: { correct: "S → N (or N → S) in one direction.", incorrect: "Use opposite poles in one direction." }
  },

  // -------- HEALTH / ENVIRONMENT --------
  {
    _id: "up-p7-sc-health-001",
    level: "upperPrimary",
    subject: "science",
    class: "p7",
    topic: "Health & Hygiene",
    type: "fill-in",
    text: "The vitamin that helps the body absorb calcium for strong bones is Vitamin ________.",
    correct: "/^d$/i",
    feedback: { correct: "Vitamin D.", incorrect: "Answer: Vitamin D." }
  },
  {
    _id: "up-p7-sc-health-002",
    level: "upperPrimary",
    subject: "science",
    class: "p7",
    topic: "Health & Hygiene",
    type: "multiText",
    text: "Give TWO reasons for washing hands after eating or using the toilet: ________ and ________.",
    correct: ["/remove (germs|bacteria|pathogens)/i", "/prevent (diarrh(o|)ea|disease|infection|illness)/i"],
    feedback: { correct: "Accepts germ removal + disease prevention ideas.", incorrect: "Include removing germs and preventing disease." }
  },
  {
    _id: "up-p7-sc-env-001",
    level: "upperPrimary",
    subject: "science",
    class: "p7",
    topic: "Environment",
    type: "multiChoice",
    text: "Which practices reduce soil erosion on a sloping school compound?",
    options: ["contour ploughing", "mulching", "overgrazing", "terracing"],
    correct: ["contour ploughing", "mulching", "terracing"],
    feedback: { correct: "Those reduce erosion.", incorrect: "Overgrazing increases erosion." }
  },
  {
    _id: "up-p7-sc-env-002",
    level: "upperPrimary",
    subject: "science",
    class: "p7",
    topic: "Environment",
    type: "fill-in",
    text: "During photosynthesis, plants release the gas ________ which animals use for breathing.",
    correct: "/^oxygen$/i",
    feedback: { correct: "Oxygen.", incorrect: "Plants release oxygen." }
  }
];
