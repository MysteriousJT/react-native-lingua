import { LanguageCode } from "@/types/learning";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface LanguageState {
  selectedLanguage: LanguageCode | null;
  setSelectedLanguage: (language: LanguageCode) => void;
  clearSelectedLanguage: () => void;
}

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      selectedLanguage: null,
      setSelectedLanguage: (language) => set({ selectedLanguage: language }),
      clearSelectedLanguage: () => set({ selectedLanguage: null }),
    }),
    {
      name: "language-store",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
