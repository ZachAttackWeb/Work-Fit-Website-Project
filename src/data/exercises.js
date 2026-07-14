// Exercise Database for Work-Fit
// Each exercise has: id, name, type (stretch/warm-up/preventative), bodyParts, department, description, imageUrl, videoUrl

export const exercises = [
  {
    id: 1,
    name: "Neck Rotations",
    type: "warm-up",
    bodyParts: ["neck", "shoulders"],
    departments: ["Trim", "Chassis", "Door/IP Line", "Body", "Final", "Material"],
    description: "Slowly rotate your head in circles to warm up the neck muscles. Do 10 circles each direction.",
    imageUrl: "https://via.placeholder.com/400x300?text=Neck+Rotations",
    videoUrl: "https://www.youtube.com/embed/placeholder"
  },
  {
    id: 2,
    name: "Shoulder Rolls",
    type: "warm-up",
    bodyParts: ["shoulders"],
    departments: ["Trim", "Chassis", "Door/IP Line", "Body", "Final", "Material"],
    description: "Roll your shoulders backwards and forwards to activate shoulder muscles. 10 reps each direction.",
    imageUrl: "https://via.placeholder.com/400x300?text=Shoulder+Rolls",
    videoUrl: "https://www.youtube.com/embed/placeholder"
  },
  {
    id: 3,
    name: "Neck Stretch",
    type: "stretch",
    bodyParts: ["neck"],
    departments: ["Trim", "Chassis", "Door/IP Line", "Body", "Final", "Material"],
    description: "Gently tilt your head to each side, holding for 15-20 seconds. Feel the stretch on the opposite side.",
    imageUrl: "https://via.placeholder.com/400x300?text=Neck+Stretch",
    videoUrl: "https://www.youtube.com/embed/placeholder"
  },
  {
    id: 4,
    name: "Wrist Circles",
    type: "warm-up",
    bodyParts: ["wrist", "forearm"],
    departments: ["Trim", "Chassis", "Door/IP Line", "Body", "Final", "Material"],
    description: "Make circular motions with your wrists to warm up. 10 circles each direction, both hands.",
    imageUrl: "https://via.placeholder.com/400x300?text=Wrist+Circles",
    videoUrl: "https://www.youtube.com/embed/placeholder"
  },
  {
    id: 5,
    name: "Lower Back Stretch",
    type: "stretch",
    bodyParts: ["back", "lower back"],
    departments: ["Trim", "Chassis", "Door/IP Line", "Body", "Final", "Material"],
    description: "Bend forward gently and reach toward your toes. Hold for 20-30 seconds to stretch the lower back.",
    imageUrl: "https://via.placeholder.com/400x300?text=Lower+Back+Stretch",
    videoUrl: "https://www.youtube.com/embed/placeholder"
  },
  {
    id: 6,
    name: "Hip Circles",
    type: "warm-up",
    bodyParts: ["hips", "lower back"],
    departments: ["Trim", "Chassis", "Door/IP Line", "Body", "Final", "Material"],
    description: "Make large circles with your hips to warm up the hip joints. 10 circles each direction.",
    imageUrl: "https://via.placeholder.com/400x300?text=Hip+Circles",
    videoUrl: "https://www.youtube.com/embed/placeholder"
  },
  {
    id: 7,
    name: "Arm Crosses",
    type: "warm-up",
    bodyParts: ["shoulders", "chest", "back"],
    departments: ["Trim", "Chassis", "Door/IP Line", "Body", "Final", "Material"],
    description: "Alternately cross your arms across your body in a controlled motion. 15 reps to warm up.",
    imageUrl: "https://via.placeholder.com/400x300?text=Arm+Crosses",
    videoUrl: "https://www.youtube.com/embed/placeholder"
  },
  {
    id: 8,
    name: "Quadriceps Stretch",
    type: "stretch",
    bodyParts: ["legs", "quads"],
    departments: ["Trim", "Chassis", "Door/IP Line", "Body", "Final", "Material"],
    description: "Pull your foot toward your buttocks while standing. Hold for 20-30 seconds each leg.",
    imageUrl: "https://via.placeholder.com/400x300?text=Quad+Stretch",
    videoUrl: "https://www.youtube.com/embed/placeholder"
  },
  {
    id: 9,
    name: "Repetitive Strain Injury Prevention",
    type: "preventative",
    bodyParts: ["wrist", "forearm", "elbow"],
    departments: ["Trim", "Chassis", "Door/IP Line", "Body", "Final"],
    description: "Perform gentle stretching and strengthening exercises 2-3 times daily to prevent RSI injuries.",
    imageUrl: "https://via.placeholder.com/400x300?text=RSI+Prevention",
    videoUrl: "https://www.youtube.com/embed/placeholder"
  },
  {
    id: 10,
    name: "Posture Correction",
    type: "preventative",
    bodyParts: ["back", "neck", "shoulders"],
    departments: ["Trim", "Chassis", "Door/IP Line", "Body", "Final", "Material"],
    description: "Maintain proper posture throughout the day to prevent back and neck pain. Shoulders back, spine straight.",
    imageUrl: "https://via.placeholder.com/400x300?text=Posture+Correction",
    videoUrl: "https://www.youtube.com/embed/placeholder"
  },
];

// Available filters
export const bodyParts = [
  "neck",
  "shoulders",
  "wrist",
  "forearm",
  "elbow",
  "back",
  "lower back",
  "chest",
  "hips",
  "legs",
  "quads"
];

export const exerciseTypes = ["stretch", "warm-up", "preventative"];

export const departments = [
  "Trim",
  "Chassis",
  "Door/IP Line",
  "Body",
  "Final",
  "Material"
];
