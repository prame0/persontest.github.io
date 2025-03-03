export interface Question {
  id: number;
  text: string;
  options: Option[];
}

export interface Option {
  id: string;
  text: string;
  value: PersonalityTrait;
  score: number;
}

export type PersonalityTrait = 'introvert' | 'extrovert' | 'analytical' | 'creative' | 'practical' | 'idealistic';

export interface PersonalityResult {
  trait: PersonalityTrait;
  title: string;
  description: string;
  strengths: string[];
  challenges: string[];
  careerSuggestions: string[];
  personalityName: string;
  matchingSkills: string[];
}

export interface TestResults {
  scores: Record<PersonalityTrait, number>;
  dominantTrait: PersonalityTrait;
  result: PersonalityResult;
}