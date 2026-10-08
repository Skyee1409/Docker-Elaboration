export interface SlideInfo {
  id: number;
  slug: string;
  title: string;
  topic: string;
  category: 'intro' | 'concepts' | 'architecture' | 'hands-on' | 'industry' | 'wrap-up';
  description: string;
  durationMinutes: number;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: {
    letter: string;
    text: string;
  }[];
  correctAnswer: string;
  explanation: string;
}

export interface CommandItem {
  command: string;
  category: 'inspection' | 'lifecycle' | 'build' | 'network';
  purpose: string;
  syntax: string;
  exampleOutput: string[];
  flags?: { flag: string; description: string }[];
}

export interface ArchitectureComponent {
  id: string;
  name: string;
  badge: string;
  shortDesc: string;
  fullDesc: string;
  keyFunctions: string[];
  exampleCommand: string;
  color: string;
}

export interface DockerfileInstruction {
  keyword: string;
  example: string;
  purpose: string;
  bestPractice: string;
  cachingImpact: string;
}

export interface PresenterInfo {
  name: string;
  role: string;
  institution: string;
  department: string;
  date: string;
}
