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

  {
    id: "es-1-3",
    unitId: "es-unit-1",
    title: "What's Your Name?",
    description: "Introduce yourself and ask someone's name in Spanish.",
    xpReward: 10,
    estimatedMinutes: 5,
    goals: [
      {
        description: "Ask and say your name in Spanish",
        vocabulary: [
          { word: "el nombre", translation: "the name", pronunciation: "ehl NOHM-breh" },
          { word: "me llamo", translation: "my name is", pronunciation: "meh YAH-moh" },
          { word: "¿Cómo te llamas?", translation: "What's your name?", pronunciation: "KOH-moh teh YAH-mahs" },
          { word: "¿Y tú?", translation: "And you?", pronunciation: "ee TOO" },
        ],
        phrases: [
          { text: "Me llamo Ana.", translation: "My name is Ana.", pronunciation: "meh YAH-moh AH-nah" },
          { text: "¿Cómo te llamas tú?", translation: "What is your name?", pronunciation: "KOH-moh teh YAH-mahs TOO" },
        ],
      },
    ],
    activities: [
      {
        type: "multiple_choice",
        question: "How do you say 'My name is...' in Spanish?",
        options: ["Me gusta...", "Me llamo...", "Soy de...", "Tengo..."],
        correctIndex: 1,
      },
      {
        type: "translation",
        prompt: "Translate: 'What is your name?'",
        acceptedAnswers: ["¿Cómo te llamas?", "¿Cómo te llamas tú?"],
        hint: "Start with '¿Cómo'",
      },
      {
        type: "match_pairs",
        pairs: [
          { left: "me llamo", right: "my name is" },
          { left: "el nombre", right: "the name" },
          { left: "¿Y tú?", right: "And you?" },
          { left: "¿Cómo te llamas?", right: "What's your name?" },
        ],
      },
      {
        type: "listening",
        text: "Me llamo Carlos. ¿Y tú?",
        translation: "My name is Carlos. And you?",
        options: [
          "My name is Carlos. Where are you from?",
          "What is your name?",
          "My name is Carlos. And you?",
          "I am Carlos. Nice to meet you.",
        ],
        correctIndex: 2,
      },
    ],
    aiTeacherPrompt: {
      language: "es",
      topic: "Introducing yourself in Spanish",
      systemPrompt:
        "You are a friendly Spanish teacher. Teach the student how to introduce themselves using 'Me llamo...' and ask someone's name with '¿Cómo te llamas?'. Role-play a simple introduction scenario. Correct gently and keep it conversational.",
      introMessage:
        "¡Hola! I'm so glad you're here. Today we learn one of the most important things — how to say your name in Spanish. ¡Vamos!",
    },
  },

  {
    id: "es-1-4",
    unitId: "es-unit-1",
    title: "Nice to Meet You",
    description: "Use polite expressions when meeting new people in Spanish.",
    xpReward: 10,
    estimatedMinutes: 5,
    goals: [
      {
        description: "Greet new people politely in Spanish",
        vocabulary: [
          { word: "mucho gusto", translation: "nice to meet you", pronunciation: "MOO-choh GOOS-toh" },
          { word: "encantado/a", translation: "delighted to meet you", pronunciation: "ehn-kahn-TAH-doh" },
          { word: "igualmente", translation: "likewise", pronunciation: "ee-gwal-MEHN-teh" },
          { word: "bienvenido/a", translation: "welcome", pronunciation: "byehn-veh-NEE-doh" },
        ],
      },
    ],
    activities: [
      {
        type: "multiple_choice",
        question: "What does 'mucho gusto' mean?",
        options: ["Thank you", "Nice to meet you", "Goodbye", "How are you?"],
        correctIndex: 1,
      },
      {
        type: "multiple_choice",
        question: "How do you respond to 'mucho gusto'?",
        options: ["Adiós", "Lo siento", "Igualmente", "Buenos días"],
        correctIndex: 2,
        explanation: "'Igualmente' means 'likewise' — the perfect reply.",
      },
      {
        type: "match_pairs",
        pairs: [
          { left: "mucho gusto", right: "nice to meet you" },
          { left: "encantado", right: "delighted to meet you" },
          { left: "igualmente", right: "likewise" },
          { left: "bienvenido", right: "welcome" },
        ],
      },
      {
        type: "translation",
        prompt: "Translate: 'Welcome!'",
        acceptedAnswers: ["¡Bienvenido!", "¡Bienvenida!", "Bienvenido", "Bienvenida"],
        hint: "Think of 'bien' (good) + 'venido' (come)",
      },
    ],
    aiTeacherPrompt: {
      language: "es",
      topic: "Polite greetings when meeting someone new in Spanish",
      systemPrompt:
        "You are a warm Spanish teacher. Teach courtesy phrases used when meeting people: mucho gusto, encantado/a, igualmente, and bienvenido/a. Role-play a first meeting between two people. Explain the masculine/feminine form of encantado.",
      introMessage:
        "¡Hola! Meeting someone new is exciting. In Spanish, there are beautiful ways to say 'Nice to meet you.' Let me teach you today!",
    },
  },

  {
    id: "es-1-5",
    unitId: "es-unit-1",
    title: "Numbers 1–10",
    description: "Count from one to ten in Spanish.",
    xpReward: 10,
    estimatedMinutes: 5,
    goals: [
      {
        description: "Count from 1 to 10 in Spanish",
        vocabulary: [
          { word: "uno", translation: "one", pronunciation: "OO-noh" },
          { word: "dos", translation: "two", pronunciation: "DOHS" },
          { word: "tres", translation: "three", pronunciation: "TREHS" },
          { word: "cuatro", translation: "four", pronunciation: "KWAH-troh" },
          { word: "cinco", translation: "five", pronunciation: "SEEN-koh" },
          { word: "seis", translation: "six", pronunciation: "SAYSH" },
          { word: "siete", translation: "seven", pronunciation: "SYEH-teh" },
          { word: "ocho", translation: "eight", pronunciation: "OH-choh" },
          { word: "nueve", translation: "nine", pronunciation: "NWEH-veh" },
          { word: "diez", translation: "ten", pronunciation: "DYEHS" },
        ],
      },
    ],
    activities: [
      {
        type: "multiple_choice",
        question: "What is 'cinco' in English?",
        options: ["four", "six", "five", "seven"],
        correctIndex: 2,
      },
      {
        type: "multiple_choice",
        question: "How do you say 'eight' in Spanish?",
        options: ["siete", "nueve", "seis", "ocho"],
        correctIndex: 3,
      },
      {
        type: "match_pairs",
        pairs: [
          { left: "uno", right: "1" },
          { left: "cinco", right: "5" },
          { left: "ocho", right: "8" },
          { left: "diez", right: "10" },
        ],
      },
      {
        type: "translation",
        prompt: "Translate: 'seven'",
        acceptedAnswers: ["siete"],
        hint: "It has two syllables: sie-te",
      },
    ],
    aiTeacherPrompt: {
      language: "es",
      topic: "Spanish numbers 1 to 10",
      systemPrompt:
        "You are an energetic Spanish teacher. Teach numbers 1–10 in Spanish. Use fun counting games, ask the student to count objects, and focus on tricky pronunciations like 'cuatro' and 'nueve'. Keep the pace lively.",
      introMessage:
        "¡Vamos a contar! Let's count! Numbers are everywhere and you'll use them every single day in Spanish. Ready?",
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

  {
    id: "es-2-3",
    unitId: "es-unit-2",
    title: "Describing People",
    description: "Use adjectives to describe people in Spanish.",
    xpReward: 15,
    estimatedMinutes: 6,
    goals: [
      {
        description: "Use basic adjectives to describe people",
        vocabulary: [
          { word: "alto/alta", translation: "tall", pronunciation: "AHL-toh / AHL-tah" },
          { word: "bajo/baja", translation: "short", pronunciation: "BAH-hoh / BAH-hah" },
          { word: "joven", translation: "young", pronunciation: "HOH-vehn" },
          { word: "viejo/vieja", translation: "old", pronunciation: "VYEH-hoh / VYEH-hah" },
          { word: "simpático/a", translation: "friendly / nice", pronunciation: "seem-PAH-tee-koh" },
        ],
        phrases: [
          { text: "Mi madre es alta.", translation: "My mother is tall.", pronunciation: "mee MAH-dreh ehs AHL-tah" },
          { text: "Mi hermano es joven.", translation: "My brother is young.", pronunciation: "mee ehr-MAH-noh ehs HOH-vehn" },
        ],
      },
    ],
    activities: [
      {
        type: "multiple_choice",
        question: "What does 'alto' mean?",
        options: ["short", "old", "tall", "young"],
        correctIndex: 2,
      },
      {
        type: "multiple_choice",
        question: "How do you say 'My sister is young' in Spanish?",
        options: ["Mi hermana es alta.", "Mi hermana es vieja.", "Mi hermana es joven.", "Mi hermana es baja."],
        correctIndex: 2,
      },
      {
        type: "match_pairs",
        pairs: [
          { left: "alto", right: "tall" },
          { left: "bajo", right: "short" },
          { left: "joven", right: "young" },
          { left: "viejo", right: "old" },
        ],
      },
      {
        type: "translation",
        prompt: "Translate: 'My father is tall and friendly.'",
        acceptedAnswers: ["Mi padre es alto y simpático.", "mi padre es alto y simpático"],
        hint: "Use 'y' for 'and'",
      },
    ],
    aiTeacherPrompt: {
      language: "es",
      topic: "Describing people with adjectives in Spanish",
      systemPrompt:
        "You are a patient Spanish teacher. Teach adjectives for describing people: alto/a, bajo/a, joven, viejo/a, simpático/a. Explain gender agreement (alto vs. alta). Help the student form sentences about their own family.",
      introMessage:
        "¡Hola! Now that you know your family vocabulary, let's describe them! Adjectives in Spanish agree with the noun's gender. I'll explain everything!",
    },
  },

  {
    id: "es-2-4",
    unitId: "es-unit-2",
    title: "Colors",
    description: "Name the colors in Spanish and use them in sentences.",
    xpReward: 10,
    estimatedMinutes: 5,
    goals: [
      {
        description: "Name common colors in Spanish",
        vocabulary: [
          { word: "rojo/roja", translation: "red", pronunciation: "ROH-hoh" },
          { word: "azul", translation: "blue", pronunciation: "ah-SOOL" },
          { word: "verde", translation: "green", pronunciation: "VEHR-deh" },
          { word: "amarillo/a", translation: "yellow", pronunciation: "ah-mah-REE-yoh" },
          { word: "blanco/a", translation: "white", pronunciation: "BLAHN-koh" },
          { word: "negro/a", translation: "black", pronunciation: "NEH-groh" },
        ],
      },
    ],
    activities: [
      {
        type: "multiple_choice",
        question: "What does 'azul' mean?",
        options: ["red", "green", "blue", "yellow"],
        correctIndex: 2,
      },
      {
        type: "multiple_choice",
        question: "How do you say 'green' in Spanish?",
        options: ["rojo", "amarillo", "negro", "verde"],
        correctIndex: 3,
      },
      {
        type: "match_pairs",
        pairs: [
          { left: "rojo", right: "red" },
          { left: "azul", right: "blue" },
          { left: "blanco", right: "white" },
          { left: "negro", right: "black" },
        ],
      },
      {
        type: "translation",
        prompt: "Translate: 'yellow'",
        acceptedAnswers: ["amarillo", "amarilla"],
        hint: "It starts with 'a'",
      },
    ],
    aiTeacherPrompt: {
      language: "es",
      topic: "Colors in Spanish",
      systemPrompt:
        "You are a creative Spanish teacher. Teach colors: rojo, azul, verde, amarillo, blanco, negro. Use visual examples like 'El cielo es azul' (the sky is blue). Explain color gender agreement and make it fun with color games.",
      introMessage:
        "¡El mundo es colorido! The world is colorful! Let's learn colors in Spanish today — you'll use them all the time!",
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

  {
    id: "fr-1-3",
    unitId: "fr-unit-1",
    title: "What's Your Name?",
    description: "Introduce yourself and ask someone's name in French.",
    xpReward: 10,
    estimatedMinutes: 5,
    goals: [
      {
        description: "Ask and say your name in French",
        vocabulary: [
          { word: "Je m'appelle", translation: "My name is", pronunciation: "zhuh mah-PEHL" },
          { word: "Comment vous appelez-vous?", translation: "What is your name? (formal)", pronunciation: "koh-MON voo zah-play VOO" },
          { word: "Comment t'appelles-tu?", translation: "What is your name? (informal)", pronunciation: "koh-MON tah-PEHL too" },
          { word: "mon prénom", translation: "my first name", pronunciation: "mohn preh-NOHM" },
        ],
        phrases: [
          { text: "Je m'appelle Marie.", translation: "My name is Marie.", pronunciation: "zhuh mah-PEHL mah-REE" },
        ],
      },
    ],
    activities: [
      {
        type: "multiple_choice",
        question: "How do you say 'My name is...' in French?",
        options: ["Je suis...", "J'aime...", "Je m'appelle...", "Je parle..."],
        correctIndex: 2,
      },
      {
        type: "translation",
        prompt: "Translate: 'What is your name?' (informal)",
        acceptedAnswers: ["Comment t'appelles-tu?", "comment t'appelles-tu"],
        hint: "Use 'tu' for informal",
      },
      {
        type: "match_pairs",
        pairs: [
          { left: "Je m'appelle", right: "My name is" },
          { left: "mon prénom", right: "my first name" },
          { left: "Comment vous appelez-vous?", right: "What is your name? (formal)" },
          { left: "Comment t'appelles-tu?", right: "What is your name? (informal)" },
        ],
      },
      {
        type: "listening",
        text: "Bonjour, je m'appelle Paul.",
        translation: "Hello, my name is Paul.",
        options: [
          "Hello, I am from Paris.",
          "Hello, my name is Paul.",
          "Good morning, my name is Marie.",
          "Hello, how are you Paul?",
        ],
        correctIndex: 1,
      },
    ],
    aiTeacherPrompt: {
      language: "fr",
      topic: "Introducing yourself in French",
      systemPrompt:
        "You are a friendly French teacher. Teach 'Je m'appelle' and both formal and informal ways to ask someone's name. Role-play introductions. Explain when to use 'vous' vs 'tu'. Keep it natural and encouraging.",
      introMessage:
        "Bonjour! Today we learn how to say your name in French — a must for every conversation. Let's practice together!",
    },
  },

  {
    id: "fr-1-4",
    unitId: "fr-unit-1",
    title: "Where Are You From?",
    description: "Say where you are from and ask others in French.",
    xpReward: 10,
    estimatedMinutes: 5,
    goals: [
      {
        description: "Ask and say where you are from in French",
        vocabulary: [
          { word: "Je suis de", translation: "I am from", pronunciation: "zhuh SWEE duh" },
          { word: "D'où venez-vous?", translation: "Where are you from? (formal)", pronunciation: "DOO vuh-NAY voo" },
          { word: "D'où viens-tu?", translation: "Where are you from? (informal)", pronunciation: "DOO vyehn TOO" },
          { word: "la France", translation: "France", pronunciation: "lah FRAHNS" },
          { word: "le pays", translation: "the country", pronunciation: "luh PAY-ee" },
        ],
        phrases: [
          { text: "Je suis de Paris.", translation: "I am from Paris.", pronunciation: "zhuh SWEE duh pah-REE" },
        ],
      },
    ],
    activities: [
      {
        type: "multiple_choice",
        question: "How do you say 'I am from...' in French?",
        options: ["Je vais...", "Je suis de...", "J'habite...", "Je parle de..."],
        correctIndex: 1,
      },
      {
        type: "translation",
        prompt: "Translate: 'Where are you from?' (informal)",
        acceptedAnswers: ["D'où viens-tu?", "d'où viens-tu"],
        hint: "Start with 'D'où'",
      },
      {
        type: "match_pairs",
        pairs: [
          { left: "Je suis de", right: "I am from" },
          { left: "D'où viens-tu?", right: "Where are you from? (informal)" },
          { left: "la France", right: "France" },
          { left: "le pays", right: "the country" },
        ],
      },
      {
        type: "multiple_choice",
        question: "What does 'D'où venez-vous?' mean?",
        options: ["What is your name?", "How old are you?", "Where are you from? (formal)", "What do you do?"],
        correctIndex: 2,
      },
    ],
    aiTeacherPrompt: {
      language: "fr",
      topic: "Asking and saying where you are from in French",
      systemPrompt:
        "You are an encouraging French teacher. Teach 'Je suis de...' and how to ask where someone is from. Practice with country names and cities. Explain the formal/informal distinction. Share fun facts about French-speaking countries.",
      introMessage:
        "Bonjour! France is beautiful, but French is spoken all over the world! Today we learn to talk about where we come from. Exciting!",
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

  {
    id: "fr-2-2",
    unitId: "fr-unit-2",
    title: "Colors",
    description: "Name the colors in French.",
    xpReward: 10,
    estimatedMinutes: 5,
    goals: [
      {
        description: "Name common colors in French",
        vocabulary: [
          { word: "rouge", translation: "red", pronunciation: "ROOZH" },
          { word: "bleu/bleue", translation: "blue", pronunciation: "BLUH" },
          { word: "vert/verte", translation: "green", pronunciation: "VEHR / VEHRT" },
          { word: "jaune", translation: "yellow", pronunciation: "ZHOHN" },
          { word: "blanc/blanche", translation: "white", pronunciation: "BLOHN / BLOHNSH" },
          { word: "noir/noire", translation: "black", pronunciation: "NWAHR" },
        ],
      },
    ],
    activities: [
      {
        type: "multiple_choice",
        question: "What does 'rouge' mean?",
        options: ["blue", "yellow", "red", "green"],
        correctIndex: 2,
      },
      {
        type: "multiple_choice",
        question: "How do you say 'yellow' in French?",
        options: ["vert", "bleu", "jaune", "blanc"],
        correctIndex: 2,
      },
      {
        type: "match_pairs",
        pairs: [
          { left: "rouge", right: "red" },
          { left: "bleu", right: "blue" },
          { left: "vert", right: "green" },
          { left: "noir", right: "black" },
        ],
      },
      {
        type: "translation",
        prompt: "Translate: 'white'",
        acceptedAnswers: ["blanc", "blanche"],
        hint: "Think of 'blank' — a white blank page",
      },
    ],
    aiTeacherPrompt: {
      language: "fr",
      topic: "Colors in French",
      systemPrompt:
        "You are a creative French teacher. Teach colors: rouge, bleu, vert, jaune, blanc, noir. Use examples like 'Le ciel est bleu' (the sky is blue). Explain that colors agree in gender and number with the noun they describe.",
      introMessage:
        "Les couleurs! Colors! French colors are beautiful. Let's paint the world in French today — this is a fun one!",
    },
  },

  {
    id: "fr-2-3",
    unitId: "fr-unit-2",
    title: "Days of the Week",
    description: "Name all seven days of the week in French.",
    xpReward: 10,
    estimatedMinutes: 5,
    goals: [
      {
        description: "Say all seven days of the week in French",
        vocabulary: [
          { word: "lundi", translation: "Monday", pronunciation: "luhn-DEE" },
          { word: "mardi", translation: "Tuesday", pronunciation: "mahr-DEE" },
          { word: "mercredi", translation: "Wednesday", pronunciation: "mehr-kruh-DEE" },
          { word: "jeudi", translation: "Thursday", pronunciation: "zhuh-DEE" },
          { word: "vendredi", translation: "Friday", pronunciation: "vohn-druh-DEE" },
          { word: "samedi", translation: "Saturday", pronunciation: "sahm-DEE" },
          { word: "dimanche", translation: "Sunday", pronunciation: "dee-MAHNSH" },
        ],
      },
    ],
    activities: [
      {
        type: "multiple_choice",
        question: "What day is 'vendredi'?",
        options: ["Wednesday", "Thursday", "Saturday", "Friday"],
        correctIndex: 3,
      },
      {
        type: "multiple_choice",
        question: "How do you say 'Sunday' in French?",
        options: ["samedi", "lundi", "dimanche", "jeudi"],
        correctIndex: 2,
      },
      {
        type: "match_pairs",
        pairs: [
          { left: "lundi", right: "Monday" },
          { left: "mercredi", right: "Wednesday" },
          { left: "samedi", right: "Saturday" },
          { left: "dimanche", right: "Sunday" },
        ],
      },
      {
        type: "translation",
        prompt: "Translate: 'Friday'",
        acceptedAnswers: ["vendredi"],
        hint: "It contains 'vendre' — like 'to sell' in markets",
      },
    ],
    aiTeacherPrompt: {
      language: "fr",
      topic: "Days of the week in French",
      systemPrompt:
        "You are an enthusiastic French teacher. Teach the seven days of the week. Note that in French, days are not capitalized. Ask the student what day it is today ('Quel jour sommes-nous?') and use the days in simple sentences.",
      introMessage:
        "Quel jour est-on? What day is it? After this lesson, you'll know every day of the week in French. Let's go!",
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

  {
    id: "ja-1-3",
    unitId: "ja-unit-1",
    title: "Introducing Yourself",
    description: "Introduce yourself formally and informally in Japanese.",
    xpReward: 10,
    estimatedMinutes: 5,
    goals: [
      {
        description: "Introduce yourself in Japanese",
        vocabulary: [
          { word: "はじめまして", translation: "Nice to meet you (first meeting)", pronunciation: "ha-ji-me-ma-shi-te" },
          { word: "わたしは〜です", translation: "I am ~", pronunciation: "wa-ta-shi-wa ~ de-su" },
          { word: "よろしく おねがいします", translation: "Please treat me well / Nice to meet you", pronunciation: "yo-ro-shi-ku o-ne-ga-i-shi-mas" },
          { word: "〜から きました", translation: "I came from ~", pronunciation: "~ ka-ra ki-ma-shi-ta" },
        ],
        phrases: [
          { text: "はじめまして。わたしはアナです。", translation: "Nice to meet you. I am Ana.", pronunciation: "ha-ji-me-ma-shi-te. wa-ta-shi-wa ANA de-su." },
        ],
      },
    ],
    activities: [
      {
        type: "multiple_choice",
        question: "What does 'はじめまして' mean?",
        options: ["Thank you", "Goodbye", "Nice to meet you (first meeting)", "Good morning"],
        correctIndex: 2,
      },
      {
        type: "translation",
        prompt: "Translate: 'I am ~' (the sentence pattern)",
        acceptedAnswers: ["わたしは〜です", "わたしはです"],
        hint: "わたしは means 'I' + は topic marker",
      },
      {
        type: "match_pairs",
        pairs: [
          { left: "はじめまして", right: "Nice to meet you" },
          { left: "わたしは〜です", right: "I am ~" },
          { left: "よろしく おねがいします", right: "Please treat me well" },
          { left: "〜からきました", right: "I came from ~" },
        ],
      },
      {
        type: "multiple_choice",
        question: "Which phrase do you say at the END of a Japanese self-introduction?",
        options: ["はじめまして", "こんにちは", "よろしく おねがいします", "さようなら"],
        correctIndex: 2,
        explanation: "'よろしく おねがいします' is always said at the end of an introduction as a closing courtesy.",
      },
    ],
    aiTeacherPrompt: {
      language: "ja",
      topic: "Self-introduction in Japanese",
      systemPrompt:
        "You are a knowledgeable Japanese teacher. Teach the student a basic Japanese self-introduction: はじめまして、わたしは〜です、よろしくおねがいします. Provide romaji alongside Japanese. Explain the cultural significance of the full introduction sequence.",
      introMessage:
        "こんにちは! Today we learn one of the most important skills — introducing yourself in Japanese. This phrase pattern will serve you for life!",
    },
  },

  {
    id: "ja-1-4",
    unitId: "ja-unit-1",
    title: "Numbers 1–10",
    description: "Count from one to ten in Japanese.",
    xpReward: 10,
    estimatedMinutes: 6,
    goals: [
      {
        description: "Count from 1 to 10 in Japanese",
        vocabulary: [
          { word: "いち (一)", translation: "one", pronunciation: "i-chi" },
          { word: "に (二)", translation: "two", pronunciation: "ni" },
          { word: "さん (三)", translation: "three", pronunciation: "sa-n" },
          { word: "し / よん (四)", translation: "four", pronunciation: "shi / yo-n" },
          { word: "ご (五)", translation: "five", pronunciation: "go" },
          { word: "ろく (六)", translation: "six", pronunciation: "ro-ku" },
          { word: "しち / なな (七)", translation: "seven", pronunciation: "shi-chi / na-na" },
          { word: "はち (八)", translation: "eight", pronunciation: "ha-chi" },
          { word: "く / きゅう (九)", translation: "nine", pronunciation: "ku / kyu" },
          { word: "じゅう (十)", translation: "ten", pronunciation: "ju" },
        ],
      },
    ],
    activities: [
      {
        type: "multiple_choice",
        question: "What is 'ご (五)' in English?",
        options: ["four", "six", "five", "seven"],
        correctIndex: 2,
      },
      {
        type: "multiple_choice",
        question: "How do you say 'eight' in Japanese?",
        options: ["ろく", "はち", "きゅう", "じゅう"],
        correctIndex: 1,
      },
      {
        type: "match_pairs",
        pairs: [
          { left: "いち", right: "1" },
          { left: "ご", right: "5" },
          { left: "はち", right: "8" },
          { left: "じゅう", right: "10" },
        ],
      },
      {
        type: "translation",
        prompt: "Translate: 'three' in Japanese (hiragana)",
        acceptedAnswers: ["さん"],
        hint: "It sounds like the English word 'sun'",
      },
    ],
    aiTeacherPrompt: {
      language: "ja",
      topic: "Japanese numbers 1 to 10",
      systemPrompt:
        "You are a patient Japanese teacher. Teach numbers 1–10 in Japanese. Provide hiragana and romaji. Point out that some numbers have two readings (4: し/よん, 7: しち/なな, 9: く/きゅう). Use fun counting exercises.",
      introMessage:
        "いち、に、さん! One, two, three! Japanese numbers are actually quite simple. Let's master them today so you can count anything!",
    },
  },

  {
    id: "ja-1-5",
    unitId: "ja-unit-1",
    title: "Asking for Help",
    description: "Learn phrases to ask for help and say you don't understand.",
    xpReward: 15,
    estimatedMinutes: 6,
    goals: [
      {
        description: "Ask for help and clarification in Japanese",
        vocabulary: [
          { word: "すみません", translation: "Excuse me / I'm sorry", pronunciation: "su-mi-ma-se-n" },
          { word: "わかりません", translation: "I don't understand", pronunciation: "wa-ka-ri-ma-se-n" },
          { word: "もう一度 おねがいします", translation: "Once more, please", pronunciation: "mo-u i-chi-do o-ne-ga-i-shi-mas" },
          { word: "ゆっくり おねがいします", translation: "Slowly please", pronunciation: "yu-kku-ri o-ne-ga-i-shi-mas" },
          { word: "英語で なんですか?", translation: "What is it in English?", pronunciation: "e-i-go-de na-n-de-su-ka" },
        ],
      },
    ],
    activities: [
      {
        type: "multiple_choice",
        question: "What does 'すみません' mean?",
        options: ["Thank you", "Goodbye", "Excuse me", "Good morning"],
        correctIndex: 2,
      },
      {
        type: "multiple_choice",
        question: "How do you ask someone to speak more slowly in Japanese?",
        options: ["わかりません", "すみません", "ゆっくり おねがいします", "もう一度 おねがいします"],
        correctIndex: 2,
      },
      {
        type: "match_pairs",
        pairs: [
          { left: "すみません", right: "Excuse me" },
          { left: "わかりません", right: "I don't understand" },
          { left: "もう一度", right: "Once more" },
          { left: "ゆっくり", right: "Slowly" },
        ],
      },
      {
        type: "translation",
        prompt: "Translate: 'I don't understand'",
        acceptedAnswers: ["わかりません"],
        hint: "Pronounced 'wa-ka-ri-ma-sen'",
      },
    ],
    aiTeacherPrompt: {
      language: "ja",
      topic: "Asking for help and clarification in Japanese",
      systemPrompt:
        "You are a supportive Japanese teacher. Teach survival phrases: すみません、わかりません、もう一度おねがいします、ゆっくりおねがいします. Role-play scenarios where the student needs help understanding. Emphasize these are essential phrases for real-life Japanese.",
      introMessage:
        "すみません! These phrases are your safety net in Japan. When you're lost or confused, these words will save you every time. Let's learn them!",
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

  // ─── Portuguese Unit 1 (extended) ────────────────────────────────────────

  {
    id: "pt-1-2",
    unitId: "pt-unit-1",
    title: "Como Vai?",
    description: "Ask and answer how someone is doing in Portuguese.",
    xpReward: 10,
    estimatedMinutes: 5,
    goals: [
      {
        description: "Ask and respond to 'How are you?' in Portuguese",
        vocabulary: [
          { word: "bem", translation: "well / good", pronunciation: "BENG" },
          { word: "mal", translation: "bad", pronunciation: "MAW" },
          { word: "mais ou menos", translation: "so-so", pronunciation: "MY-sh oo MEH-noosh" },
          { word: "obrigado", translation: "thank you (m)", pronunciation: "oh-bree-GAH-doo" },
          { word: "obrigada", translation: "thank you (f)", pronunciation: "oh-bree-GAH-dah" },
        ],
        phrases: [
          { text: "Como vai você?", translation: "How are you?", pronunciation: "KOH-moo VY voh-SAY" },
          { text: "Estou bem, obrigado.", translation: "I am well, thank you.", pronunciation: "ehs-TOH beng, oh-bree-GAH-doo" },
        ],
      },
    ],
    activities: [
      {
        type: "multiple_choice",
        question: "What does 'Como vai?' mean?",
        options: ["What is your name?", "How are you?", "Where are you going?", "What time is it?"],
        correctIndex: 1,
      },
      {
        type: "translation",
        prompt: "Translate: 'I am well, thank you.'",
        acceptedAnswers: ["Estou bem, obrigado.", "Estou bem, obrigada.", "estou bem, obrigado"],
        hint: "Use 'Estou' for 'I am'",
      },
      {
        type: "multiple_choice",
        question: "How do you say 'so-so' in Portuguese?",
        options: ["bem", "mal", "mais ou menos", "muito"],
        correctIndex: 2,
      },
      {
        type: "match_pairs",
        pairs: [
          { left: "bem", right: "well / good" },
          { left: "mal", right: "bad" },
          { left: "obrigado", right: "thank you" },
          { left: "mais ou menos", right: "so-so" },
        ],
      },
    ],
    aiTeacherPrompt: {
      language: "pt",
      topic: "Asking and answering how someone is doing in Portuguese",
      systemPrompt:
        "You are a warm Brazilian Portuguese teacher. Teach the student how to ask 'Como vai?' and respond with 'Estou bem', 'Estou mal', or 'Mais ou menos'. Explain 'obrigado' vs 'obrigada' based on speaker gender. Keep it friendly and conversational.",
      introMessage:
        "Olá de novo! Today we practice a key everyday phrase: 'Como vai?' — How are you? This will help you make friends in Brazil!",
    },
  },

  {
    id: "pt-1-3",
    unitId: "pt-unit-1",
    title: "Numbers 1–10",
    description: "Count from one to ten in Brazilian Portuguese.",
    xpReward: 10,
    estimatedMinutes: 5,
    goals: [
      {
        description: "Count from 1 to 10 in Portuguese",
        vocabulary: [
          { word: "um / uma", translation: "one", pronunciation: "OOM / OO-mah" },
          { word: "dois / duas", translation: "two", pronunciation: "DOYSH / DOO-ahsh" },
          { word: "três", translation: "three", pronunciation: "TRAYSH" },
          { word: "quatro", translation: "four", pronunciation: "KWAH-troo" },
          { word: "cinco", translation: "five", pronunciation: "SEEN-koo" },
          { word: "seis", translation: "six", pronunciation: "SAYSH" },
          { word: "sete", translation: "seven", pronunciation: "SEH-chee" },
          { word: "oito", translation: "eight", pronunciation: "OY-too" },
          { word: "nove", translation: "nine", pronunciation: "NOH-vee" },
          { word: "dez", translation: "ten", pronunciation: "DESH" },
        ],
      },
    ],
    activities: [
      {
        type: "multiple_choice",
        question: "What is 'cinco' in English?",
        options: ["four", "six", "five", "seven"],
        correctIndex: 2,
      },
      {
        type: "multiple_choice",
        question: "How do you say 'eight' in Portuguese?",
        options: ["seis", "nove", "oito", "sete"],
        correctIndex: 2,
      },
      {
        type: "match_pairs",
        pairs: [
          { left: "um", right: "1" },
          { left: "cinco", right: "5" },
          { left: "oito", right: "8" },
          { left: "dez", right: "10" },
        ],
      },
      {
        type: "translation",
        prompt: "Translate: 'seven'",
        acceptedAnswers: ["sete"],
        hint: "It's pronounced 'SEH-chee'",
      },
    ],
    aiTeacherPrompt: {
      language: "pt",
      topic: "Portuguese numbers 1 to 10",
      systemPrompt:
        "You are an enthusiastic Brazilian Portuguese teacher. Teach numbers 1 to 10. Highlight tricky pronunciations like 'três' and 'sete'. Use counting games and ask the student to count familiar objects. Keep it upbeat and fun.",
      introMessage:
        "Oi! Today — os números! Numbers! Once you know these you can count anything in Portuguese. Let's go!",
    },
  },

  // ─── Portuguese Unit 2 ────────────────────────────────────────────────────

  {
    id: "pt-2-1",
    unitId: "pt-unit-2",
    title: "Colors",
    description: "Name the colors around you in Portuguese.",
    xpReward: 10,
    estimatedMinutes: 5,
    goals: [
      {
        description: "Name common colors in Portuguese",
        vocabulary: [
          { word: "vermelho", translation: "red", pronunciation: "vehr-MEH-lyoo" },
          { word: "azul", translation: "blue", pronunciation: "ah-ZOOL" },
          { word: "verde", translation: "green", pronunciation: "VEHR-jee" },
          { word: "amarelo", translation: "yellow", pronunciation: "ah-mah-REH-loo" },
          { word: "branco", translation: "white", pronunciation: "BRAN-koo" },
          { word: "preto", translation: "black", pronunciation: "PREH-too" },
        ],
      },
    ],
    activities: [
      {
        type: "multiple_choice",
        question: "What does 'azul' mean?",
        options: ["red", "green", "blue", "yellow"],
        correctIndex: 2,
      },
      {
        type: "multiple_choice",
        question: "How do you say 'red' in Portuguese?",
        options: ["verde", "amarelo", "branco", "vermelho"],
        correctIndex: 3,
        explanation: "'Vermelho' comes from 'vermilion', a shade of red.",
      },
      {
        type: "match_pairs",
        pairs: [
          { left: "vermelho", right: "red" },
          { left: "azul", right: "blue" },
          { left: "verde", right: "green" },
          { left: "amarelo", right: "yellow" },
        ],
      },
      {
        type: "translation",
        prompt: "Translate: 'white'",
        acceptedAnswers: ["branco"],
        hint: "Think of 'blank' — a blank white page",
      },
    ],
    aiTeacherPrompt: {
      language: "pt",
      topic: "Colors in Portuguese",
      systemPrompt:
        "You are a creative Brazilian Portuguese teacher. Teach colors: vermelho, azul, verde, amarelo, branco, preto. Use visual memory aids and ask the student to describe colorful objects. Explain that colors have gender agreement in sentences.",
      introMessage:
        "Olá! Today we paint the world in Portuguese — as cores! Colors are everywhere, so this is super useful. Let's start!",
    },
  },

  {
    id: "pt-2-2",
    unitId: "pt-unit-2",
    title: "Food & Drinks",
    description: "Order food and drinks in Brazilian Portuguese.",
    xpReward: 15,
    estimatedMinutes: 6,
    goals: [
      {
        description: "Name common foods and drinks in Portuguese",
        vocabulary: [
          { word: "água", translation: "water", pronunciation: "AH-gwah" },
          { word: "café", translation: "coffee", pronunciation: "kah-FEH" },
          { word: "pão", translation: "bread", pronunciation: "POWNG" },
          { word: "arroz", translation: "rice", pronunciation: "ah-HOZH" },
          { word: "frango", translation: "chicken", pronunciation: "FRAN-goo" },
          { word: "suco", translation: "juice", pronunciation: "SOO-koo" },
        ],
        phrases: [
          { text: "Eu quero um café, por favor.", translation: "I want a coffee, please.", pronunciation: "EH-oo KEH-roo oong kah-FEH, poh fah-VOH" },
        ],
      },
    ],
    activities: [
      {
        type: "multiple_choice",
        question: "What does 'água' mean?",
        options: ["coffee", "juice", "water", "milk"],
        correctIndex: 2,
      },
      {
        type: "translation",
        prompt: "Translate: 'I want a coffee, please.'",
        acceptedAnswers: ["Eu quero um café, por favor.", "eu quero um café, por favor"],
        hint: "Use 'Eu quero' for 'I want'",
      },
      {
        type: "match_pairs",
        pairs: [
          { left: "água", right: "water" },
          { left: "pão", right: "bread" },
          { left: "frango", right: "chicken" },
          { left: "suco", right: "juice" },
        ],
      },
      {
        type: "multiple_choice",
        question: "How do you say 'rice' in Portuguese?",
        options: ["frango", "pão", "arroz", "café"],
        correctIndex: 2,
      },
    ],
    aiTeacherPrompt: {
      language: "pt",
      topic: "Food and drinks in Portuguese",
      systemPrompt:
        "You are a fun Brazilian Portuguese teacher. Teach food vocabulary: água, café, pão, arroz, frango, suco. Role-play a café ordering scene. Use 'Eu quero...' (I want) and 'Por favor' (please). Share fun facts about Brazilian food culture.",
      introMessage:
        "Olá! Brazilian food is amazing — and today you'll learn how to talk about it! Let's explore a comida (food) in Portuguese!",
    },
  },

  {
    id: "pt-2-3",
    unitId: "pt-unit-2",
    title: "Days of the Week",
    description: "Name the days of the week in Portuguese.",
    xpReward: 10,
    estimatedMinutes: 5,
    goals: [
      {
        description: "Say all seven days of the week in Portuguese",
        vocabulary: [
          { word: "segunda-feira", translation: "Monday", pronunciation: "seh-GOON-dah FAY-rah" },
          { word: "terça-feira", translation: "Tuesday", pronunciation: "TEHR-sah FAY-rah" },
          { word: "quarta-feira", translation: "Wednesday", pronunciation: "KWAHR-tah FAY-rah" },
          { word: "quinta-feira", translation: "Thursday", pronunciation: "KEEN-tah FAY-rah" },
          { word: "sexta-feira", translation: "Friday", pronunciation: "SEHSH-tah FAY-rah" },
          { word: "sábado", translation: "Saturday", pronunciation: "SAH-bah-doo" },
          { word: "domingo", translation: "Sunday", pronunciation: "doh-MEEN-goo" },
        ],
      },
    ],
    activities: [
      {
        type: "multiple_choice",
        question: "What day is 'sábado'?",
        options: ["Friday", "Sunday", "Saturday", "Monday"],
        correctIndex: 2,
      },
      {
        type: "multiple_choice",
        question: "How do you say 'Monday' in Portuguese?",
        options: ["terça-feira", "segunda-feira", "quarta-feira", "sexta-feira"],
        correctIndex: 1,
        explanation: "The weekdays in Portuguese literally mean 'second fair' through 'sixth fair'.",
      },
      {
        type: "match_pairs",
        pairs: [
          { left: "segunda-feira", right: "Monday" },
          { left: "sexta-feira", right: "Friday" },
          { left: "sábado", right: "Saturday" },
          { left: "domingo", right: "Sunday" },
        ],
      },
      {
        type: "translation",
        prompt: "Translate: 'Wednesday'",
        acceptedAnswers: ["quarta-feira"],
        hint: "It starts with 'quarta' — meaning 'fourth'",
      },
    ],
    aiTeacherPrompt: {
      language: "pt",
      topic: "Days of the week in Portuguese",
      systemPrompt:
        "You are a helpful Brazilian Portuguese teacher. Teach the seven days of the week. Explain the fascinating pattern that Monday–Friday come from the Portuguese word 'feira' (market/fair). Use memory tricks for sábado and domingo. Ask the student what day they're studying.",
      introMessage:
        "Olá! Que dia é hoje? — What day is it today? After this lesson, you'll know all seven days of the week in Portuguese!",
    },
  },
];

export function getLessonById(id: string): Lesson | undefined {
  return lessons.find((l) => l.id === id);
}

export function getLessonsByUnit(unitId: string): Lesson[] {
  return lessons.filter((l) => l.unitId === unitId);
}
