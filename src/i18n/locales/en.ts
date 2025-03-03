export default {
  // Welcome screen
  welcome: {
    title: 'Deep Personality Insight',
    subtitle: 'Discover your authentic self through thoughtful reflection',
    about: 'About This Experience',
    description: 'This personality assessment invites you to engage in meaningful self-reflection through 10 thought-provoking questions. Unlike typical personality quizzes, these questions are designed to help you explore your authentic self and gain deeper insights into your natural tendencies, strengths, and potential growth areas.',
    discover: 'What You\'ll Discover:',
    discoverItems: [
      'Your personality archetype and dominant traits',
      'Core strengths and potential growth areas',
      'Career paths that align with your natural tendencies',
      'Skills that complement your personality type'
    ],
    note: 'For the most meaningful results, find a quiet moment to reflect honestly on each question. There are no right or wrong answers—only insights into your authentic self.',
    startButton: 'Begin Self-Discovery'
  },
  
  // Test screen
  test: {
    title: 'Deep Personality Insight',
    subtitle: 'Take your time to reflect on each question',
    progress: 'Question {{current}} of {{total}}',
    complete: '{{percent}}% Complete',
    previous: 'Previous',
    next: 'Next',
    seeResults: 'See Results'
  },
  
  // Results screen
  results: {
    title: 'Your Personality Insights',
    subtitle: 'Based on your thoughtful reflections',
    personalityType: 'Personality Type',
    strengths: 'Your Strengths',
    challenges: 'Your Challenges',
    careers: 'Career Suggestions',
    skills: 'Matching Skills',
    uniqueValue: 'Your Unique Value',
    uniqueValueText: 'Your {{trait}} personality gives you a unique perspective that\'s valuable in both personal and professional contexts. Embrace your natural tendencies while working on your challenges.',
    traitComposition: 'Your Trait Composition',
    dominantTrait: 'Your dominant trait is',
    traitContribution: 'but you also show elements of other traits that contribute to your unique personality profile.',
    restartButton: 'Take the Test Again'
  },
  
  // Language
  language: {
    en: 'English',
    th: 'ไทย'
  },
  
  // Personality traits
  traits: {
    introvert: 'introvert',
    extrovert: 'extrovert',
    analytical: 'analytical',
    creative: 'creative',
    practical: 'practical',
    idealistic: 'idealistic'
  },
  
  // Questions and options
  questions: [
    {
      text: "When faced with a significant life decision, what aspect do you find yourself dwelling on the most?",
      options: [
        "The potential for personal growth and self-discovery through solitary reflection",
        "How the decision will affect your relationships and social connections",
        "The logical implications and statistical likelihood of various outcomes",
        "The opportunity to express yourself and explore unconventional possibilities"
      ]
    },
    {
      text: "Reflect on a time when you felt most fulfilled. What elements were present in that experience?",
      options: [
        "Solving a complex problem through careful analysis and structured thinking",
        "Creating something unique that expressed your personal vision",
        "Achieving tangible results that had real-world utility",
        "Contributing to something meaningful that aligned with your core values"
      ]
    },
    {
      text: "When you find yourself in conflict with someone whose perspective differs fundamentally from yours, how do you typically respond internally?",
      options: [
        "You process the interaction privately later, analyzing what was said and left unsaid",
        "You seek to discuss it immediately, believing dialogue will lead to understanding",
        "You focus on finding a workable compromise that addresses the practical concerns",
        "You try to envision innovative solutions that might bridge seemingly incompatible viewpoints"
      ]
    },
    {
      text: "Consider your relationship with uncertainty. Which statement resonates most deeply with your authentic self?",
      options: [
        "I seek to reduce uncertainty through research, analysis, and establishing clear parameters",
        "I see uncertainty as an open canvas for possibility and potential transformation",
        "I focus on what can be controlled and take concrete steps to create stability",
        "I navigate uncertainty by connecting with others and gathering diverse perspectives"
      ]
    },
    {
      text: "When you're at your best, what internal state are you experiencing?",
      options: [
        "Deep concentration and clarity of thought in a space of minimal distraction",
        "Energetic exchange of ideas and emotions with others in a dynamic environment",
        "Methodical progress through complex information with precision and accuracy",
        "Flow state where imagination and intuition guide your creative process"
      ]
    },
    {
      text: "Reflect on how you evaluate the quality of your life choices. Which criterion matters most to you?",
      options: [
        "Whether the choice was based on sound reasoning and objective criteria",
        "Whether the choice aligned with your deeper values and contributed to something greater",
        "Whether the choice led to tangible improvements and efficient outcomes",
        "Whether the choice allowed for authentic self-expression and originality"
      ]
    },
    {
      text: "When confronting your limitations, which approach do you naturally gravitate toward?",
      options: [
        "Developing systematic strategies to overcome the limitation through careful analysis",
        "Creating alternative pathways that transform the limitation into a unique advantage",
        "Focusing on practical workarounds and incremental improvements",
        "Seeking meaning in the struggle and connecting it to broader human experiences"
      ]
    },
    {
      text: "Consider what draws you to certain people as close friends or partners. What quality do you find most essential?",
      options: [
        "Intellectual depth and the ability to engage in rigorous, logical discourse",
        "Shared values and a mutual commitment to personal growth and authenticity",
        "Reliability and a grounded approach to life's challenges",
        "Warmth, expressiveness, and enthusiasm for shared experiences"
      ]
    },
    {
      text: "When you encounter information that challenges your existing beliefs, what is your instinctive internal response?",
      options: [
        "You methodically evaluate the evidence and reassess your position based on logical analysis",
        "You explore how this new perspective might open creative possibilities you hadn't considered",
        "You consider the practical implications and whether adopting this view would be useful",
        "You reflect on how this information aligns with your core values and identity"
      ]
    },
    {
      text: "In moments of genuine self-reflection, what do you believe is your most authentic contribution to the world?",
      options: [
        "Bringing clarity, precision, and rational insight to complex situations",
        "Inspiring others through vision, authenticity, and meaningful connection",
        "Creating tangible solutions and reliable systems that solve real problems",
        "Introducing novel ideas and perspectives that challenge conventional thinking"
      ]
    }
  ],
  
  // Personality results
  personalityResults: {
    introvert: {
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
  }
};