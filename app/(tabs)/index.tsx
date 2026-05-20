import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { useUser } from "@clerk/expo";
import { Ionicons } from "@expo/vector-icons";
import { useLanguageStore } from "@/store/useLanguageStore";
import { useProgressStore } from "@/store/useProgressStore";
import { images } from "@/constants/images";
import { languages } from "@/data/languages";
import { units } from "@/data/units";
import { lessons } from "@/data/lessons";

const GREETINGS: Record<string, string> = {
  es: "Hola",
  fr: "Bonjour",
  ja: "こんにちは",
  pt: "Olá",
};

export default function HomeScreen() {
  const { user } = useUser();
  const { selectedLanguage } = useLanguageStore();
  const { xp, dailyGoalXP, streak, completedLessonIds } = useProgressStore();

  const firstName = user?.firstName ?? "there";
  const langCode = selectedLanguage ?? "es";
  const languageInfo = languages.find((l) => l.code === langCode) ?? languages[0];
  const greeting = GREETINGS[langCode] ?? "Hello";

  const languageUnits = units
    .filter((u) => u.languageCode === languageInfo.code)
    .sort((a, b) => a.order - b.order);
  const currentUnit = languageUnits[0];
  const currentUnitLessons = currentUnit
    ? lessons.filter((l) => l.unitId === currentUnit.id)
    : [];
  const nextLesson =
    currentUnitLessons.find((l) => !completedLessonIds.includes(l.id)) ??
    currentUnitLessons[0];

  const progress = Math.min(xp / dailyGoalXP, 1);

  const todaysPlan = [
    {
      id: "lesson",
      iconName: "book" as const,
      iconBg: "#4d88ff",
      title: "Lesson",
      subtitle: nextLesson?.title ?? "Greetings & Basics",
      completed: !!nextLesson && completedLessonIds.includes(nextLesson.id),
    },
    {
      id: "ai-conversation",
      iconName: "headset" as const,
      iconBg: "#6c4ef5",
      title: "AI Conversation",
      subtitle: "Talk about your day",
      completed: false,
    },
    {
      id: "new-words",
      iconName: "chatbubble-ellipses" as const,
      iconBg: "#21c16b",
      title: "New words",
      subtitle: "10 words",
      completed: false,
    },
  ];

  return (
    <SafeAreaView style={styles.safeArea} edges={["top"]}>
      <ScrollView
        className="flex-1"
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* ── Header ── */}
        <View className="flex-row items-center justify-between px-5 pt-2 pb-3">
          <View className="flex-row items-center gap-2">
            <Image
              source={{ uri: languageInfo.flag }}
              style={styles.flagImage}
              contentFit="cover"
            />
            <Text className="font-poppins-semibold text-base text-ink">
              {greeting}, {firstName}! 👋
            </Text>
          </View>
          <View className="flex-row items-center gap-3">
            <View className="flex-row items-center gap-1">
              <Image
                source={images.streakFire}
                style={styles.streakIcon}
                contentFit="contain"
              />
              <Text className="font-poppins-semibold text-sm text-streak">{streak}</Text>
            </View>
            <TouchableOpacity>
              <Ionicons name="notifications-outline" size={24} color="#001132" />
            </TouchableOpacity>
          </View>
        </View>

        {/* ── Daily Goal Card ── */}
        <View className="bg-[#FFF5E6] mx-5 mb-4 rounded-2xl">
          <View className="flex-row items-center p-4">
            <View className="flex-1">
              <Text className="body-sm text-muted mb-1">Daily goal</Text>
              <Text className="font-poppins-bold text-[22px] text-ink">
                {xp} / {dailyGoalXP} XP
              </Text>
              <View className="h-2 rounded bg-divider overflow-hidden mt-3">
                <View
                  className="h-2 rounded bg-streak"
                  style={{ width: `${progress * 100}%` as any }}
                />
              </View>
            </View>
            <Image
              source={images.treasure}
              style={styles.treasureImage}
              contentFit="contain"
            />
          </View>
        </View>

        {/* ── Continue Learning Card ── */}
        <View className="bg-lingua-purple mx-5 mb-5 rounded-2xl overflow-hidden">
          <View className="flex-row items-center p-5">
            <View className="flex-1">
              <Text className="body-sm text-white/75 mb-1">Continue learning</Text>
              <Text className="h2 text-white mb-1">{languageInfo.name}</Text>
              <Text className="body-sm text-white/80 mb-4">
                A1 · Unit {currentUnit?.order ?? 1}
              </Text>
              <TouchableOpacity className="bg-white rounded-xl px-5 py-2.5 self-start">
                <Text className="font-poppins-semibold text-sm text-lingua-purple">Continue</Text>
              </TouchableOpacity>
            </View>
            <Image
              source={images.palace}
              style={styles.palaceImage}
              contentFit="contain"
            />
          </View>
        </View>

        {/* ── Today's Plan ── */}
        <View className="mx-5 mb-4">
          <View className="flex-row items-center justify-between mb-3">
            <Text className="h4 text-ink">Today's plan</Text>
            <TouchableOpacity>
              <Text className="font-poppins-semibold text-sm text-lingua-purple">View all</Text>
            </TouchableOpacity>
          </View>

          <View className="rounded-2xl overflow-hidden bg-canvas">
            {todaysPlan.map((item, index) => (
              <View
                key={item.id}
                className={`flex-row items-center px-4 py-[14px] bg-canvas${
                  index < todaysPlan.length - 1 ? " border-b border-divider" : ""
                }`}
              >
                <View
                  className="w-[42px] h-[42px] rounded-xl items-center justify-center mr-3"
                  style={{ backgroundColor: item.iconBg }}
                >
                  <Ionicons name={item.iconName} size={20} color="#ffffff" />
                </View>
                <View className="flex-1">
                  <Text className="font-poppins-semibold text-sm text-ink mb-0.5">
                    {item.title}
                  </Text>
                  <Text className="body-sm text-muted">{item.subtitle}</Text>
                </View>
                {item.completed ? (
                  <View className="w-6 h-6 rounded-full bg-success items-center justify-center">
                    <Ionicons name="checkmark" size={14} color="#ffffff" />
                  </View>
                ) : (
                  <View className="w-6 h-6 rounded-full border-2 border-divider" />
                )}
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f6f7fb",
  },
  scrollContent: {
    paddingBottom: 32,
  },
  flagImage: {
    width: 36,
    height: 26,
    borderRadius: 4,
  },
  streakIcon: {
    width: 20,
    height: 20,
  },
  treasureImage: {
    width: 76,
    height: 76,
    marginLeft: 12,
  },
  palaceImage: {
    width: 100,
    height: 115,
    marginLeft: 8,
  },
});
