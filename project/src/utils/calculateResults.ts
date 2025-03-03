import { Option, PersonalityTrait, TestResults } from '../types';
import personalityResults from '../data/results';

export const calculateResults = (selectedOptions: Option[]): TestResults => {
  // Initialize scores for each trait
  const scores: Record<PersonalityTrait, number> = {
    introvert: 0,
    extrovert: 0,
    analytical: 0,
    creative: 0,
    practical: 0,
    idealistic: 0
  };
  
  // Calculate scores based on selected options
  selectedOptions.forEach(option => {
    scores[option.value] += option.score;
  });
  
  // Find the dominant trait (highest score)
  let dominantTrait: PersonalityTrait = 'analytical'; // Default
  let highestScore = 0;
  
  (Object.keys(scores) as PersonalityTrait[]).forEach(trait => {
    if (scores[trait] > highestScore) {
      highestScore = scores[trait];
      dominantTrait = trait;
    }
  });
  
  // Get the result for the dominant trait
  const result = personalityResults[dominantTrait];
  
  return {
    scores,
    dominantTrait,
    result
  };
};