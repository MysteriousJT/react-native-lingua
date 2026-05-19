import { Lesson } from "@/types/learning";

export const lessons: Lesson[] = [
  // ─── Spanish Unit 1 ───────────────────────────────────────────────────────

  {
    id: "es-1-1",
    unitId: "es-unit-1",
    title: "Hello & Goodbye",
    description: "Learn how to greet people and say goodbye in Spanish.",
    xpReward: 10,
    estimatedMinutes: 5,
    goals: [
      {
        description: "Greet someone in Spanish",
        vocabulary: [
          { word: "Hola", translation: "Hello", pronunciation: "OH-lah" },
          { word: "Adiós", translation: "Goodbye", pronunciation: "ah-DYOHS" },
          { word: "Buenos días", translation: "Good morning", pronunciation: "BWEH-nohs DEE-ahs" },
          { word: "Buenas noches", translation: "Good night", pronunciation: "BWEH-nahs NOH-chehs" },
        ],
        phrases: [
          { text: "¡Hola! ¿Cómo estás?", translation: "Hello! How are you?", pronunciation: "OH-lah, KOH-moh ehs-TAHS" },
          { text: "¡Adiós! Hasta luego.", translation: "Goodbye! See you later.", pronunciation: "ah-DYOHS, AHS-tah LWEH-goh" },
        ],
      },
    ],
    activities: [
      {
        type: "multiple_choice",
        question: "What does 'Hola' mean?",
        options: ["Goodbye", "Hello", "Good night", "Thank you"],
        correctIndex: 1,
      },
      {
        type: "multiple_choice",
        question: "How do you say 'Good morning' in Spanish?",
        options: ["Buenas noches", "Buenas tardes", "Buenos días", "Hola"],
        correctIndex: 2,
        explanation: "'Buenos días' literally means 'good days'.",
      },
      {
        type: "translation",
        prompt: "Translate to Spanish: 'Goodbye'",
        acceptedAnswers: ["adiós", "Adiós"],
        hint: "It starts with 'A'",
      },
      {
        type: "match_pairs",
        pairs: [
          { left: "Hola", right: "Hello" },
          { left: "Adiós", right: "Goodbye" },
          { left: "Buenos días", right: "Good morning" },
          { left: "Buenas noches", right: "Good night" },
        ],
      },
      {
        type: "listening",
        text: "Hola, ¿cómo estás?",
        translation: "Hello, how are you?",
        options: ["Hello, what is your name?", "Hello, how are you?", "Good morning, how are you?", "Goodbye, see you later!"],
        correctIndex: 1,
      },
    ],
    aiTeacherPrompt: {
      language: "es",
      topic: "Spanish greetings and farewells",
      systemPrompt:
        "You are a friendly Spanish teacher. Teach the student basic Spanish greetings: Hola, Adiós, Buenos días, Buenas tardes, and Buenas noches. Use simple English explanations, provide pronunciation tips, and gently correct mistakes. Keep responses short and encouraging.",
      introMessage:
        "¡Hola! I'm your Spanish teacher. Today we're learning how to say hello and goodbye. Ready? Let's start!",
    },
  },

  {
    id: "es-1-2",
    unitId: "es-unit-1",
    title: "How Are You?",
    description: "Ask and answer how someone is doing in Spanish.",
    xpReward: 10,
    estimatedMinutes: 5,
    goals: [
      {
        description: "Ask and answer 'How are you?' in Spanish",
        vocabulary: [
          { word: "bien", translation: "well / good", pronunciation: "BYEHN" },
          { word: "mal", translation: "bad", pronunciation: "MAHL" },
          { word: "más o menos", translation: "so-so", pronunciation: "MAHS oh MEH-nohs" },
          { word: "gracias", translation: "thank you", pronunciation: "GRAH-syahs" },
        ],
        phrases: [
          { text: "¿Cómo estás?", translation: "How are you?", pronunciation: "KOH-moh ehs-TAHS" },
          { text: "Estoy bien, gracias.", translation: "I am well, thank you.", pronunciation: "ehs-TOY BYEHN, GRAH-syahs" },
        ],
      },
    ],
    activities: [
      {
        type: "multiple_choice",
        question: "What does '¿Cómo estás?' mean?",
        options: ["What is your name?", "Where are you from?", "How are you?", "How old are you?"],
        correctIndex: 2,
      },
      {
        type: "translation",
        prompt: "Translate: 'I am well, thank you.'",
        acceptedAnswers: ["Estoy bien, gracias.", "estoy bien, gracias"],
        hint: "Use 'Estoy' for 'I am'",
      },
      {
        type: "multiple_choice",
        question: "How do you say 'so-so' in Spanish?",
        options: ["bien", "mal", "más o menos", "mucho"],
        correctIndex: 2,
      },
      {
        type: "match_pairs",
        pairs: [
          { left: "bien", right: "good / well" },
          { left: "mal", right: "bad" },
          { left: "gracias", right: "thank you" },
          { left: "más o menos", right: "so-so" },
        ],
      },
    ],
    aiTeacherPrompt: {
      language: "es",
      topic: "Asking and answering how someone is doing in Spanish",
      systemPrompt:
        "You are a warm and encouraging Spanish teacher. Teach the student how to ask '¿Cómo estás?' and reply with 'Estoy bien', 'Estoy mal', or 'Más o menos'. Introduce 'gracias'. Keep it conversational, correct gently, and use real-life scenarios.",
      introMessage:
        "¡Hola de nuevo! Today we practice a key conversation: 'How are you?' in Spanish. This will help you chat with native speakers right away!",
    },
  },

  // ─── Spanish Unit 2 ───────────────────────────────────────────────────────

  {
    id: "es-2-1",
    unitId: "es-unit-2",
    title: "Family Members",
    description: "Learn words for family members in Spanish.",
    xpReward: 15,
    estimatedMinutes: 6,
    goals: [
      {
        description: "Name immediate family members in Spanish",
        vocabulary: [
          { word: "la madre", translation: "mother", pronunciation: "lah MAH-dreh" },
          { word: "el padre", translation: "father", pronunciation: "ehl PAH-dreh" },
          { word: "el hermano", translation: "brother", pronunciation: "ehl ehr-MAH-noh" },
          { word: "la hermana", translation: "sister", pronunciation: "lah ehr-MAH-nah" },
          { word: "el hijo", translation: "son", pronunciation: "ehl EE-hoh" },
          { word: "la hija", translation: "daughter", pronunciation: "lah EE-hah" },
        ],
      },
    ],
    activities: [
      {
        type: "multiple_choice",
        question: "What does 'la madre' mean?",
        options: ["father", "sister", "mother", "daughter"],
        correctIndex: 2,
      },
      {
        type: "multiple_choice",
        question: "How do you say 'brother' in Spanish?",
        options: ["la hermana", "el hermano", "el hijo", "el padre"],
        correctIndex: 1,
        explanation: "In Spanish, 'el' is the masculine article and 'la' is the feminine article.",
      },
      {
        type: "match_pairs",
        pairs: [
          { left: "la madre", right: "mother" },
          { left: "el padre", right: "father" },
          { left: "el hermano", right: "brother" },
          { left: "la hermana", right: "sister" },
        ],
      },
      {
        type: "translation",
        prompt: "Translate: 'my father'",
        acceptedAnswers: ["mi padre", "el padre"],
        hint: "Use 'mi' for 'my'",
      },
    ],
    aiTeacherPrompt: {
      language: "es",
      topic: "Spanish family vocabulary",
      systemPrompt:
        "You are a friendly Spanish teacher. Teach the student family vocabulary: madre, padre, hermano, hermana, hijo, hija. Explain masculine vs. feminine articles (el/la). Use simple sentences like 'Mi madre se llama Ana.' Correct pronunciation kindly.",
      introMessage:
        "¡Hola! Today we talk about family — la familia. Let me teach you the words for your loved ones in Spanish!",
    },
  },

  {
    id: "es-2-2",
    unitId: "es-unit-2",
    title: "My Family",
    description: "Describe your family using simple Spanish sentences.",
    xpReward: 15,
    estimatedMinutes: 7,
    goals: [
      {
        description: "Use 'tengo' to describe your family",
        phrases: [
          { text: "Tengo un hermano.", translation: "I have a brother.", pronunciation: "TEHN-goh oon ehr-MAH-noh" },
          { text: "No tengo hermanas.", translation: "I have no sisters.", pronunciation: "noh TEHN-goh ehr-MAH-nahs" },
          { text: "Mi familia es pequeña.", translation: "My family is small.", pronunciation: "mee fah-MEE-lyah ehs peh-KEH-nyah" },
        ],
      },
    ],
    activities: [
      {
        type: "multiple_choice",
        question: "What does 'Tengo un hermano' mean?",
        options: ["I want a brother", "I have a brother", "My brother is tall", "I have a sister"],
        correctIndex: 1,
      },
      {
        type: "translation",
        prompt: "Translate: 'I have a sister.'",
        acceptedAnswers: ["Tengo una hermana.", "tengo una hermana"],
      },
      {
        type: "listening",
        text: "Mi familia es pequeña.",
        translation: "My family is small.",
        options: ["My family is big.", "My family is happy.", "My family is small.", "I have a small family."],
        correctIndex: 2,
      },
      {
        type: "translation",
        prompt: "Translate: 'My family is big.'",
        acceptedAnswers: ["Mi familia es grande.", "mi familia es grande"],
        hint: "The opposite of 'pequeña' is 'grande'",
      },
    ],
    aiTeacherPrompt: {
      language: "es",
      topic: "Describing your family in Spanish",
      systemPrompt:
        "You are a patient Spanish tutor. Help the student form sentences about their family using 'tengo' (I have), 'mi familia' (my family), and adjectives like 'grande' and 'pequeña'. Guide them through building their first complete sentences.",
      introMessage:
        "¡Vamos! Now that you know family words, let's put them into sentences. Tell me about your family in Spanish!",
    },
  },

  // ─── French Unit 1 ────────────────────────────────────────────────────────

  {
    id: "fr-1-1",
    unitId: "fr-unit-1",
    title: "Bonjour!",
    description: "Learn essential French greetings for any time of day.",
    xpReward: 10,
    estimatedMinutes: 5,
    goals: [
      {
        description: "Greet people in French at different times of day",
        vocabulary: [
          { word: "Bonjour", translation: "Hello / Good morning", pronunciation: "bohn-ZHOOR" },
          { word: "Bonsoir", translation: "Good evening", pronunciation: "bohn-SWAHR" },
          { word: "Bonne nuit", translation: "Good night", pronunciation: "buhn NWEE" },
          { word: "Au revoir", translation: "Goodbye", pronunciation: "oh ruh-VWAHR" },
          { word: "Salut", translation: "Hi / Bye (informal)", pronunciation: "sah-LEW" },
        ],
      },
    ],
    activities: [
      {
        type: "multiple_choice",
        question: "What does 'Bonjour' mean?",
        options: ["Good night", "Goodbye", "Hello / Good morning", "Good evening"],
        correctIndex: 2,
      },
      {
        type: "multiple_choice",
        question: "How do you say 'Goodbye' formally in French?",
        options: ["Salut", "Bonsoir", "Bonne nuit", "Au revoir"],
        correctIndex: 3,
        explanation: "'Salut' also means goodbye but only informally.",
      },
      {
        type: "match_pairs",
        pairs: [
          { left: "Bonjour", right: "Hello" },
          { left: "Bonsoir", right: "Good evening" },
          { left: "Au revoir", right: "Goodbye" },
          { left: "Bonne nuit", right: "Good night" },
        ],
      },
      {
        type: "translation",
        prompt: "Translate to French: 'Good evening'",
        acceptedAnswers: ["Bonsoir", "bonsoir"],
      },
    ],
    aiTeacherPrompt: {
      language: "fr",
      topic: "French greetings",
      systemPrompt:
        "You are a cheerful French teacher. Teach the student French greetings: Bonjour, Bonsoir, Bonne nuit, Au revoir, and Salut. Explain when to use formal vs. informal greetings. Provide pronunciation tips and keep the mood light and encouraging.",
      introMessage:
        "Bonjour! Welcome to French! I'm so excited to teach you. Let's start with the most important thing — how to say hello!",
    },
  },

  {
    id: "fr-1-2",
    unitId: "fr-unit-1",
    title: "Please & Thank You",
    description: "Use polite expressions in everyday French conversations.",
    xpReward: 10,
    estimatedMinutes: 5,
    goals: [
      {
        description: "Use courtesy phrases confidently in French",
        vocabulary: [
          { word: "Merci", translation: "Thank you", pronunciation: "mehr-SEE" },
          { word: "S'il vous plaît", translation: "Please (formal)", pronunciation: "seel voo PLEH" },
          { word: "S'il te plaît", translation: "Please (informal)", pronunciation: "seel tuh PLEH" },
          { word: "De rien", translation: "You're welcome", pronunciation: "duh RYEH" },
          { word: "Excusez-moi", translation: "Excuse me", pronunciation: "ehk-SKEW-zay MWAH" },
        ],
      },
    ],
    activities: [
      {
        type: "multiple_choice",
        question: "What does 'Merci' mean?",
        options: ["Please", "Excuse me", "Thank you", "You're welcome"],
        correctIndex: 2,
      },
      {
        type: "multiple_choice",
        question: "How do you say 'You're welcome' in French?",
        options: ["Merci", "De rien", "S'il vous plaît", "Excusez-moi"],
        correctIndex: 1,
      },
      {
        type: "translation",
        prompt: "Translate: 'Please' (formal)",
        acceptedAnswers: ["S'il vous plaît", "s'il vous plaît"],
      },
      {
        type: "match_pairs",
        pairs: [
          { left: "Merci", right: "Thank you" },
          { left: "De rien", right: "You're welcome" },
          { left: "Excusez-moi", right: "Excuse me" },
          { left: "S'il vous plaît", right: "Please (formal)" },
        ],
      },
    ],
    aiTeacherPrompt: {
      language: "fr",
      topic: "French courtesy phrases",
      systemPrompt:
        "You are a polite and encouraging French teacher. Teach the student essential courtesy phrases: Merci, S'il vous plaît, De rien, and Excusez-moi. Explain the difference between formal (vous) and informal (tu) forms. Role-play short polite exchanges.",
      introMessage:
        "Bonjour encore! Today we learn something very important — how to be polite in French. The French love good manners, so this lesson will take you far!",
    },
  },

  // ─── French Unit 2 ────────────────────────────────────────────────────────

  {
    id: "fr-2-1",
    unitId: "fr-unit-2",
    title: "Numbers 1–10",
    description: "Count from one to ten in French.",
    xpReward: 10,
    estimatedMinutes: 5,
    goals: [
      {
        description: "Count from 1 to 10 in French",
        vocabulary: [
          { word: "un", translation: "one", pronunciation: "UH" },
          { word: "deux", translation: "two", pronunciation: "DUH" },
          { word: "trois", translation: "three", pronunciation: "TWAH" },
          { word: "quatre", translation: "four", pronunciation: "KAH-truh" },
          { word: "cinq", translation: "five", pronunciation: "SANK" },
          { word: "six", translation: "six", pronunciation: "SEES" },
          { word: "sept", translation: "seven", pronunciation: "SEHT" },
          { word: "huit", translation: "eight", pronunciation: "WEET" },
          { word: "neuf", translation: "nine", pronunciation: "NUF" },
          { word: "dix", translation: "ten", pronunciation: "DEES" },
        ],
      },
    ],
    activities: [
      {
        type: "multiple_choice",
        question: "What is 'cinq' in English?",
        options: ["four", "six", "five", "seven"],
        correctIndex: 2,
      },
      {
        type: "multiple_choice",
        question: "How do you say 'three' in French?",
        options: ["deux", "quatre", "un", "trois"],
        correctIndex: 3,
      },
      {
        type: "match_pairs",
        pairs: [
          { left: "un", right: "1" },
          { left: "cinq", right: "5" },
          { left: "huit", right: "8" },
          { left: "dix", right: "10" },
        ],
      },
      {
        type: "translation",
        prompt: "Translate: 'seven'",
        acceptedAnswers: ["sept"],
      },
    ],
    aiTeacherPrompt: {
      language: "fr",
      topic: "French numbers 1 to 10",
      systemPrompt:
        "You are an enthusiastic French teacher. Teach the student French numbers from 1 to 10. Use counting games, ask the student to count objects, and help them memorize tricky pronunciations like 'deux', 'six', and 'dix'. Keep it fun and fast-paced.",
      introMessage:
        "Bonjour! Today — les chiffres! Numbers! Once you know these, you can count anything in French. Let's go!",
    },
  },

  // ─── Japanese Unit 1 ──────────────────────────────────────────────────────

  {
    id: "ja-1-1",
    unitId: "ja-unit-1",
    title: "First Greetings",
    description: "Learn the most essential Japanese greetings.",
    xpReward: 10,
    estimatedMinutes: 5,
    goals: [
      {
        description: "Greet people in Japanese",
        vocabulary: [
          { word: "こんにちは", translation: "Hello", pronunciation: "kon-ni-chi-wa" },
          { word: "おはようございます", translation: "Good morning", pronunciation: "o-ha-yo go-za-i-mas" },
          { word: "こんばんは", translation: "Good evening", pronunciation: "kon-ban-wa" },
          { word: "さようなら", translation: "Goodbye", pronunciation: "sa-yo-na-ra" },
          { word: "ありがとう", translation: "Thank you", pronunciation: "a-ri-ga-to" },
        ],
      },
    ],
    activities: [
      {
        type: "multiple_choice",
        question: "What does 'こんにちは' mean?",
        options: ["Good morning", "Goodbye", "Hello", "Good evening"],
        correctIndex: 2,
      },
      {
        type: "multiple_choice",
        question: "How do you say 'Thank you' in Japanese?",
        options: ["さようなら", "こんばんは", "おはようございます", "ありがとう"],
        correctIndex: 3,
      },
      {
        type: "match_pairs",
        pairs: [
          { left: "こんにちは", right: "Hello" },
          { left: "おはようございます", right: "Good morning" },
          { left: "さようなら", right: "Goodbye" },
          { left: "ありがとう", right: "Thank you" },
        ],
      },
      {
        type: "translation",
        prompt: "Translate to Japanese: 'Good evening'",
        acceptedAnswers: ["こんばんは"],
        hint: "It sounds like 'kon-ban-wa'",
      },
    ],
    aiTeacherPrompt: {
      language: "ja",
      topic: "Japanese greetings",
      systemPrompt:
        "You are a patient and encouraging Japanese teacher. Teach essential greetings in Japanese: こんにちは, おはようございます, こんばんは, さようなら, and ありがとう. Provide romanized pronunciation (romaji) alongside Japanese script. Explain the cultural importance of bowing when greeting.",
      introMessage:
        "こんにちは! That means hello in Japanese! Today we start your Japanese journey with the most important phrases. Let's begin!",
    },
  },

  {
    id: "ja-1-2",
    unitId: "ja-unit-1",
    title: "Hiragana: あいうえお",
    description: "Learn the first five hiragana characters.",
    xpReward: 15,
    estimatedMinutes: 7,
    goals: [
      {
        description: "Read and write the first five hiragana characters",
        vocabulary: [
          { word: "あ", translation: "a", pronunciation: "ah" },
          { word: "い", translation: "i", pronunciation: "ee" },
          { word: "う", translation: "u", pronunciation: "oo" },
          { word: "え", translation: "e", pronunciation: "eh" },
          { word: "お", translation: "o", pronunciation: "oh" },
        ],
      },
    ],
    activities: [
      {
        type: "multiple_choice",
        question: "Which hiragana makes the 'ah' sound?",
        options: ["い", "お", "あ", "え"],
        correctIndex: 2,
      },
      {
        type: "multiple_choice",
        question: "How is 'い' pronounced?",
        options: ["ah", "ee", "oo", "oh"],
        correctIndex: 1,
      },
      {
        type: "match_pairs",
        pairs: [
          { left: "あ", right: "a (ah)" },
          { left: "い", right: "i (ee)" },
          { left: "う", right: "u (oo)" },
          { left: "え", right: "e (eh)" },
        ],
      },
      {
        type: "multiple_choice",
        question: "Which hiragana is 'o'?",
        options: ["う", "え", "あ", "お"],
        correctIndex: 3,
      },
    ],
    aiTeacherPrompt: {
      language: "ja",
      topic: "Hiragana vowels: あいうえお",
      systemPrompt:
        "You are a clear and methodical Japanese teacher. Teach the five hiragana vowels: あ (a), い (i), う (u), え (e), お (o). Show the character, give its sound, and provide a simple word that uses it. Use memory tricks to help the student remember each character's shape.",
      introMessage:
        "Welcome back! Today is a big day — we start reading Japanese! These five characters are the building blocks of hiragana. Let's master them!",
    },
  },

  // ─── Portuguese Unit 1 ────────────────────────────────────────────────────

  {
    id: "pt-1-1",
    unitId: "pt-unit-1",
    title: "Olá! Greetings",
    description: "Start speaking Brazilian Portuguese with basic greetings.",
    xpReward: 10,
    estimatedMinutes: 5,
    goals: [
      {
        description: "Greet people and introduce yourself in Portuguese",
        vocabulary: [
          { word: "Olá", translation: "Hello", pronunciation: "oh-LAH" },
          { word: "Oi", translation: "Hi (informal)", pronunciation: "OY" },
          { word: "Bom dia", translation: "Good morning", pronunciation: "boh DEE-ah" },
          { word: "Boa tarde", translation: "Good afternoon", pronunciation: "BOH-ah TAR-jee" },
          { word: "Boa noite", translation: "Good night", pronunciation: "BOH-ah NOY-chee" },
          { word: "Tchau", translation: "Bye", pronunciation: "CHOW" },
        ],
      },
    ],
    activities: [
      {
        type: "multiple_choice",
        question: "What does 'Bom dia' mean?",
        options: ["Good night", "Good afternoon", "Good morning", "Goodbye"],
        correctIndex: 2,
      },
      {
        type: "multiple_choice",
        question: "How do you say 'Bye' in Brazilian Portuguese?",
        options: ["Olá", "Oi", "Boa noite", "Tchau"],
        correctIndex: 3,
      },
      {
        type: "match_pairs",
        pairs: [
          { left: "Olá", right: "Hello" },
          { left: "Bom dia", right: "Good morning" },
          { left: "Boa tarde", right: "Good afternoon" },
          { left: "Tchau", right: "Bye" },
        ],
      },
      {
        type: "translation",
        prompt: "Translate: 'Good night' in Portuguese",
        acceptedAnswers: ["Boa noite", "boa noite"],
        hint: "It starts with 'Boa'",
      },
    ],
    aiTeacherPrompt: {
      language: "pt",
      topic: "Brazilian Portuguese greetings",
      systemPrompt:
        "You are a warm and enthusiastic Brazilian Portuguese teacher. Teach greetings: Olá, Oi, Bom dia, Boa tarde, Boa noite, and Tchau. Highlight the informal, friendly nature of Brazilian Portuguese. Share fun cultural facts about Brazil to keep the student engaged.",
      introMessage:
        "Olá! Bem-vindo — that means welcome! Brazilian Portuguese is a beautiful, warm language. Let's kick things off with how to say hello!",
    },
  },
];

export function getLessonById(id: string): Lesson | undefined {
  return lessons.find((l) => l.id === id);
}

export function getLessonsByUnit(unitId: string): Lesson[] {
  return lessons.filter((l) => l.unitId === unitId);
}
