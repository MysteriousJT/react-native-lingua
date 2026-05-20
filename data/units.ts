import { Unit } from "@/types/learning";

export const units: Unit[] = [
  // Spanish
  {
    id: "es-unit-1",
    languageCode: "es",
    title: "Greetings & Basics",
    description: "Say hello, introduce yourself, and use common phrases.",
    color: "#21c16b",
    order: 1,
    lessonIds: ["es-1-1", "es-1-2", "es-1-3", "es-1-4", "es-1-5"],
  },
  {
    id: "es-unit-2",
    languageCode: "es",
    title: "Family & People",
    description: "Talk about family members and describe the people around you.",
    color: "#4d88ff",
    order: 2,
    lessonIds: ["es-2-1", "es-2-2", "es-2-3", "es-2-4"],
  },

  // French
  {
    id: "fr-unit-1",
    languageCode: "fr",
    title: "Bonjour! Basics",
    description: "Start speaking French with essential greetings and courtesy phrases.",
    color: "#6c4ef5",
    order: 1,
    lessonIds: ["fr-1-1", "fr-1-2", "fr-1-3", "fr-1-4"],
  },
  {
    id: "fr-unit-2",
    languageCode: "fr",
    title: "Numbers & Colors",
    description: "Count to 10, name colors, and learn the days of the week.",
    color: "#ff8a00",
    order: 2,
    lessonIds: ["fr-2-1", "fr-2-2", "fr-2-3"],
  },

  // Japanese
  {
    id: "ja-unit-1",
    languageCode: "ja",
    title: "Hiragana & Greetings",
    description: "Learn the hiragana alphabet and essential Japanese greetings.",
    color: "#ff4d4f",
    order: 1,
    lessonIds: ["ja-1-1", "ja-1-2", "ja-1-3", "ja-1-4", "ja-1-5"],
  },

  // Portuguese
  {
    id: "pt-unit-1",
    languageCode: "pt",
    title: "Olá! First Words",
    description: "Greet people and introduce yourself in Brazilian Portuguese.",
    color: "#ffcb00",
    order: 1,
    lessonIds: ["pt-1-1", "pt-1-2", "pt-1-3"],
  },
  {
    id: "pt-unit-2",
    languageCode: "pt",
    title: "Everyday Life",
    description: "Talk about colors, food, and days of the week.",
    color: "#21c16b",
    order: 2,
    lessonIds: ["pt-2-1", "pt-2-2", "pt-2-3"],
  },
];

export function getUnitsByLanguage(languageCode: string): Unit[] {
  return units
    .filter((u) => u.languageCode === languageCode)
    .sort((a, b) => a.order - b.order);
}
