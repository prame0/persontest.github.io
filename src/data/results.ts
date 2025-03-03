import { PersonalityResult } from '../types';

const personalityResults: Record<string, PersonalityResult> = {
  introvert: {
    trait: 'introvert',
    title: 'The Thoughtful Observer',
    personalityName: 'INTP - The Architect',
    description: 'You draw energy from solitude and deep thinking. You prefer meaningful one-on-one conversations over large social gatherings and value your personal space. Your rich inner world allows you to process information deeply and make careful decisions.',
    strengths: [
      'Deep focus and concentration',
      'Thoughtful analysis',
      'Meaningful relationships',
      'Independent thinking',
      'Careful observation'
    ],
    challenges: [
      'May find networking draining',
      'Can be perceived as reserved or aloof',
      'Might need to assert opinions more in group settings'
    ],
    careerSuggestions: [
      'Writer or Editor',
      'Researcher',
      'Software Developer',
      'Accountant',
      'Artist or Designer'
    ],
    matchingSkills: [
      'Deep research',
      'Critical thinking',
      'Content creation',
      'Problem analysis',
      'Independent project management',
      'Strategic planning'
    ]
  },
  extrovert: {
    trait: 'extrovert',
    title: 'The Energetic Connector',
    personalityName: 'ENFJ - The Protagonist',
    description: 'You thrive in social environments and gain energy from interacting with others. You enjoy a wide network of relationships and are often seen as friendly and approachable. Your ability to connect with people helps you build bridges and create opportunities.',
    strengths: [
      'Natural networking abilities',
      'Verbal communication skills',
      'Adaptability in social situations',
      'Team building and collaboration',
      'Enthusiasm and energy'
    ],
    challenges: [
      'May find solitude challenging',
      'Could sometimes speak before thinking',
      'Might need to develop deeper listening skills'
    ],
    careerSuggestions: [
      'Sales Representative',
      'Public Relations Specialist',
      'Teacher or Trainer',
      'Event Planner',
      'Human Resources Professional'
    ],
    matchingSkills: [
      'Public speaking',
      'Negotiation',
      'Team leadership',
      'Client relationship management',
      'Conflict resolution',
      'Community building'
    ]
  },
  analytical: {
    trait: 'analytical',
    title: 'The Logical Thinker',
    personalityName: 'INTJ - The Strategist',
    description: 'You approach life with a systematic and logical mindset. You value facts, data, and clear reasoning in decision-making. Your ability to analyze complex information helps you solve problems efficiently and make rational choices.',
    strengths: [
      'Critical thinking',
      'Problem-solving abilities',
      'Attention to detail',
      'Logical decision-making',
      'Objectivity'
    ],
    challenges: [
      'May overlook emotional factors',
      'Could be perceived as overly critical',
      'Might struggle with ambiguity'
    ],
    careerSuggestions: [
      'Data Analyst',
      'Engineer',
      'Financial Analyst',
      'Scientist',
      'Systems Architect'
    ],
    matchingSkills: [
      'Data analysis',
      'Logical reasoning',
      'Systems thinking',
      'Statistical analysis',
      'Process optimization',
      'Technical problem-solving'
    ]
  },
  creative: {
    trait: 'creative',
    title: 'The Innovative Visionary',
    personalityName: 'ENFP - The Campaigner',
    description: 'You see the world through a lens of possibilities and innovation. You enjoy thinking outside the box and finding unique solutions to problems. Your imagination and originality bring fresh perspectives to any situation.',
    strengths: [
      'Innovative thinking',
      'Adaptability to change',
      'Artistic expression',
      'Seeing connections between disparate ideas',
      'Future-oriented perspective'
    ],
    challenges: [
      'May struggle with routine tasks',
      'Could be seen as impractical at times',
      'Might need help with implementation details'
    ],
    careerSuggestions: [
      'Graphic Designer',
      'Marketing Creative',
      'Product Developer',
      'Entrepreneur',
      'User Experience Designer'
    ],
    matchingSkills: [
      'Creative problem-solving',
      'Design thinking',
      'Storytelling',
      'Conceptual development',
      'Artistic direction',
      'Innovation management'
    ]
  },
  practical: {
    trait: 'practical',
    title: 'The Efficient Realist',
    personalityName: 'ISTJ - The Logistician',
    description: 'You have a grounded approach to life and value efficiency and practicality. You focus on what works in the real world and prefer tangible results over theoretical concepts. Your pragmatic nature helps you accomplish tasks effectively.',
    strengths: [
      'Efficiency and productivity',
      'Practical problem-solving',
      'Reliability and dependability',
      'Resource management',
      'Implementation skills'
    ],
    challenges: [
      'May be resistant to untested ideas',
      'Could miss long-term opportunities',
      'Might need to develop more flexibility'
    ],
    careerSuggestions: [
      'Project Manager',
      'Operations Manager',
      'Tradesperson',
      'Healthcare Professional',
      'Technical Support Specialist'
    ],
    matchingSkills: [
      'Project execution',
      'Resource allocation',
      'Time management',
      'Quality control',
      'Operational efficiency',
      'Tactical planning'
    ]
  },
  idealistic: {
    trait: 'idealistic',
    title: 'The Principled Visionary',
    personalityName: 'INFJ - The Advocate',
    description: 'You are guided by strong values and a desire to make the world better. You see potential for improvement everywhere and are motivated by meaningful causes. Your idealism inspires others and drives positive change.',
    strengths: [
      'Strong moral compass',
      'Inspiring leadership',
      'Long-term vision',
      'Empathy and understanding',
      'Commitment to growth'
    ],
    challenges: [
      'May be disappointed by reality at times',
      'Could struggle with practical limitations',
      'Might need to balance ideals with pragmatism'
    ],
    careerSuggestions: [
      'Non-profit Director',
      'Counselor or Therapist',
      'Environmental Scientist',
      'Social Worker',
      'Human Rights Advocate'
    ],
    matchingSkills: [
      'Ethical decision-making',
      'Vision development',
      'Empathetic communication',
      'Social impact assessment',
      'Values-based leadership',
      'Community advocacy'
    ]
  }
};

export default personalityResults;