import { Question, PersonalityTrait } from '../types';

const questions: Question[] = [
  {
    id: 1,
    text: "When faced with a significant life decision, what aspect do you find yourself dwelling on the most?",
    options: [
      { id: "1a", text: "The potential for personal growth and self-discovery through solitary reflection", value: "introvert", score: 2 },
      { id: "1b", text: "How the decision will affect your relationships and social connections", value: "extrovert", score: 2 },
      { id: "1c", text: "The logical implications and statistical likelihood of various outcomes", value: "analytical", score: 2 },
      { id: "1d", text: "The opportunity to express yourself and explore unconventional possibilities", value: "creative", score: 2 }
    ]
  },
  {
    id: 2,
    text: "Reflect on a time when you felt most fulfilled. What elements were present in that experience?",
    options: [
      { id: "2a", text: "Solving a complex problem through careful analysis and structured thinking", value: "analytical", score: 2 },
      { id: "2b", text: "Creating something unique that expressed your personal vision", value: "creative", score: 2 },
      { id: "2c", text: "Achieving tangible results that had real-world utility", value: "practical", score: 2 },
      { id: "2d", text: "Contributing to something meaningful that aligned with your core values", value: "idealistic", score: 2 }
    ]
  },
  {
    id: 3,
    text: "When you find yourself in conflict with someone whose perspective differs fundamentally from yours, how do you typically respond internally?",
    options: [
      { id: "3a", text: "You process the interaction privately later, analyzing what was said and left unsaid", value: "introvert", score: 2 },
      { id: "3b", text: "You seek to discuss it immediately, believing dialogue will lead to understanding", value: "extrovert", score: 2 },
      { id: "3c", text: "You focus on finding a workable compromise that addresses the practical concerns", value: "practical", score: 2 },
      { id: "3d", text: "You try to envision innovative solutions that might bridge seemingly incompatible viewpoints", value: "creative", score: 2 }
    ]
  },
  {
    id: 4,
    text: "Consider your relationship with uncertainty. Which statement resonates most deeply with your authentic self?",
    options: [
      { id: "4a", text: "I seek to reduce uncertainty through research, analysis, and establishing clear parameters", value: "analytical", score: 2 },
      { id: "4b", text: "I see uncertainty as an open canvas for possibility and potential transformation", value: "idealistic", score: 2 },
      { id: "4c", text: "I focus on what can be controlled and take concrete steps to create stability", value: "practical", score: 2 },
      { id: "4d", text: "I navigate uncertainty by connecting with others and gathering diverse perspectives", value: "extrovert", score: 2 }
    ]
  },
  {
    id: 5,
    text: "When you're at your best, what internal state are you experiencing?",
    options: [
      { id: "5a", text: "Deep concentration and clarity of thought in a space of minimal distraction", value: "introvert", score: 2 },
      { id: "5b", text: "Energetic exchange of ideas and emotions with others in a dynamic environment", value: "extrovert", score: 2 },
      { id: "5c", text: "Methodical progress through complex information with precision and accuracy", value: "analytical", score: 2 },
      { id: "5d", text: "Flow state where imagination and intuition guide your creative process", value: "creative", score: 2 }
    ]
  },
  {
    id: 6,
    text: "Reflect on how you evaluate the quality of your life choices. Which criterion matters most to you?",
    options: [
      { id: "6a", text: "Whether the choice was based on sound reasoning and objective criteria", value: "analytical", score: 2 },
      { id: "6b", text: "Whether the choice aligned with your deeper values and contributed to something greater", value: "idealistic", score: 2 },
      { id: "6c", text: "Whether the choice led to tangible improvements and efficient outcomes", value: "practical", score: 2 },
      { id: "6d", text: "Whether the choice allowed for authentic self-expression and originality", value: "creative", score: 2 }
    ]
  },
  {
    id: 7,
    text: "When confronting your limitations, which approach do you naturally gravitate toward?",
    options: [
      { id: "7a", text: "Developing systematic strategies to overcome the limitation through careful analysis", value: "analytical", score: 2 },
      { id: "7b", text: "Creating alternative pathways that transform the limitation into a unique advantage", value: "creative", score: 2 },
      { id: "7c", text: "Focusing on practical workarounds and incremental improvements", value: "practical", score: 2 },
      { id: "7d", text: "Seeking meaning in the struggle and connecting it to broader human experiences", value: "idealistic", score: 2 }
    ]
  },
  {
    id: 8,
    text: "Consider what draws you to certain people as close friends or partners. What quality do you find most essential?",
    options: [
      { id: "8a", text: "Intellectual depth and the ability to engage in rigorous, logical discourse", value: "analytical", score: 2 },
      { id: "8b", text: "Shared values and a mutual commitment to personal growth and authenticity", value: "idealistic", score: 2 },
      { id: "8c", text: "Reliability and a grounded approach to life's challenges", value: "practical", score: 2 },
      { id: "8d", text: "Warmth, expressiveness, and enthusiasm for shared experiences", value: "extrovert", score: 2 }
    ]
  },
  {
    id: 9,
    text: "When you encounter information that challenges your existing beliefs, what is your instinctive internal response?",
    options: [
      { id: "9a", text: "You methodically evaluate the evidence and reassess your position based on logical analysis", value: "analytical", score: 2 },
      { id: "9b", text: "You explore how this new perspective might open creative possibilities you hadn't considered", value: "creative", score: 2 },
      { id: "9c", text: "You consider the practical implications and whether adopting this view would be useful", value: "practical", score: 2 },
      { id: "9d", text: "You reflect on how this information aligns with your core values and identity", value: "idealistic", score: 2 }
    ]
  },
  {
    id: 10,
    text: "In moments of genuine self-reflection, what do you believe is your most authentic contribution to the world?",
    options: [
      { id: "10a", text: "Bringing clarity, precision, and rational insight to complex situations", value: "analytical", score: 2 },
      { id: "10b", text: "Inspiring others through vision, authenticity, and meaningful connection", value: "idealistic", score: 2 },
      { id: "10c", text: "Creating tangible solutions and reliable systems that solve real problems", value: "practical", score: 2 },
      { id: "10d", text: "Introducing novel ideas and perspectives that challenge conventional thinking", value: "creative", score: 2 }
    ]
  }
];

export default questions;