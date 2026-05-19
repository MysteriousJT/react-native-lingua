export type LanguageCode = "es" | "fr" | "ja" | "pt";

export interface Language {
  code: LanguageCode;
  name: string;
  nativeName: string;
  flag: string;
  description: string;
  totalUnits: number;
  learnerCount?: string;
}

export interface VocabularyItem {
  word: string;
  translation: string;
  pronunciation?: string;
  example?: string;
  exampleTranslation?: string;
}

export interface Phrase {
  text: string;
  translation: string;
  pronunciation?: string;
}

export interface MultipleChoiceActivity {
  type: "multiple_choice";
  question: string;
  options: string[];
  correctIndex: number;
  explanation?: string;
}

export interface TranslationActivity {
  type: "translation";
  prompt: string;
  acceptedAnswers: string[];
  hint?: string;
}

export interface ListeningActivity {
  type: "listening";
  text: string;
  translation: string;
  options: string[];
  correctIndex: number;
}

export interface MatchPairsActivity {
  type: "match_pairs";
  pairs: Array<{ left: string; right: string }>;
}

export interface SpeakingActivity {
  type: "speaking";
  prompt: string;
  targetPhrase: string;
  translation: string;
}

export type Activity =
  | MultipleChoiceActivity
  | TranslationActivity
  | ListeningActivity
  | MatchPairsActivity
  | SpeakingActivity;

export interface LessonGoal {
  description: string;
  vocabulary?: VocabularyItem[];
  phrases?: Phrase[];
}

export interface AITeacherPrompt {
  systemPrompt: string;
  introMessage: string;
  language: LanguageCode;
  topic: string;
}

export interface Lesson {
  id: string;
  unitId: string;
  title: string;
  description: string;
  xpReward: number;
  estimatedMinutes: number;
  goals: LessonGoal[];
  activities: Activity[];
  aiTeacherPrompt: AITeacherPrompt;
}

export interface Unit {
  id: string;
  languageCode: LanguageCode;
  title: string;
  description: string;
  color: string;
  order: number;
  lessonIds: string[];
}
