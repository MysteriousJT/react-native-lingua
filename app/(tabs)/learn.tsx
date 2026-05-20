import { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useLanguageStore } from "@/store/useLanguageStore";
import { useProgressStore } from "@/store/useProgressStore";
import { units } from "@/data/units";
import { getLessonById } from "@/data/lessons";
import { images } from "@/constants/images";
import { Lesson } from "@/types/learning";

type TabType = "lessons" | "practice";
type LessonStatus = "completed" | "in_progress" | "available";

interface LessonItem {
  lesson: Lesson;
  status: LessonStatus;
}

interface UnitSection {
  unitId: string;
  order: number;
  title: string;
  color: string;
  lessonItems: LessonItem[];
  completedCount: number;
}


export default function LearnScreen() {
  const [activeTab, setActiveTab] = useState<TabType>("lessons");
  const { selectedLanguage } = useLanguageStore();
  const { completedLessonIds } = useProgressStore();

  const langCode = selectedLanguage ?? "es";
  const languageUnits = units
    .filter((u) => u.languageCode === langCode)
    .sort((a, b) => a.order - b.order);

  // Single pass: assign statuses across all units (only one "in_progress" globally)
  let seenInProgress = false;
  const statusMap: Record<string, LessonStatus> = {};
  for (const unit of languageUnits) {
    for (const id of unit.lessonIds) {
      if (completedLessonIds.includes(id)) {
        statusMap[id] = "completed";
      } else if (!seenInProgress) {
        statusMap[id] = "in_progress";
        seenInProgress = true;
      } else {
        statusMap[id] = "available";
      }
    }
  }

  const unitSections: UnitSection[] = languageUnits.map((unit) => {
    const lessonItems: LessonItem[] = unit.lessonIds
      .map((id) => {
        const lesson = getLessonById(id);
        if (!lesson) return null;
        return { lesson, status: statusMap[id] ?? "available" };
      })
      .filter((item): item is LessonItem => item !== null);

    return {
      unitId: unit.id,
      order: unit.order,
      title: unit.title,
      color: unit.color,
      lessonItems,
      completedCount: lessonItems.filter((l) => l.status === "completed").length,
    };
  });

  // Hero uses the current active unit
  const activeSection =
    unitSections.find((s) => s.lessonItems.some((l) => l.status !== "completed")) ??
    unitSections[0];

  const totalLessons = unitSections.reduce((s, u) => s + u.lessonItems.length, 0);
  const totalCompleted = unitSections.reduce((s, u) => s + u.completedCount, 0);

  if (!activeSection) return null;

  return (
    <SafeAreaView style={styles.safe} edges={["top"]}>
      {/* ── Header ── */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.circleBtn} onPress={() => router.push("/")}>
          <Ionicons name="chevron-back" size={22} color="#001132" />
        </TouchableOpacity>

        <View style={styles.headerMid}>
          <Text style={styles.headerTitle}>{activeSection.title}</Text>
          <Text style={styles.headerSub}>
            Unit {activeSection.order} • {totalCompleted} / {totalLessons} lessons
          </Text>
        </View>

        <TouchableOpacity style={styles.circleBtn}>
          <Ionicons name="bookmark" size={20} color="#ff8a00" />
        </TouchableOpacity>
      </View>

      {/* ── Hero Scene ── */}
      <View style={styles.hero}>
        {/* Building — right */}
        <Image
          source={images.palace}
          style={styles.heroBuilding}
          contentFit="contain"
        />
        {/* Mascot — left */}
        <Image
          source={images.mascotWelcome}
          style={styles.heroMascot}
          contentFit="contain"
        />
      </View>

      {/* ── Tabs ── */}
      <View style={styles.tabRow}>
        {(["lessons", "practice"] as TabType[]).map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[styles.tab, activeTab === tab && styles.tabActive]}
            onPress={() => setActiveTab(tab)}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === tab ? styles.tabTextOn : styles.tabTextOff,
              ]}
            >
              {tab === "lessons" ? "Lessons" : "Practice"}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* ── Lesson content ── */}
      {activeTab === "lessons" ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scroll}
        >
          {unitSections.map((section, si) => (
            <View key={section.unitId} style={si > 0 ? styles.sectionGap : undefined}>
              {/* Section header */}
              <View style={styles.sectionHeader}>
                <View
                  style={[styles.sectionAccent, { backgroundColor: section.color }]}
                />
                <View style={styles.sectionMeta}>
                  <Text style={styles.sectionUnitLabel}>Unit {section.order}</Text>
                  <Text style={styles.sectionTitle}>{section.title}</Text>
                </View>
                <Text style={styles.sectionCount}>
                  {section.completedCount}/{section.lessonItems.length}
                </Text>
              </View>

              {/* Lesson cards */}
              <View style={styles.cardList}>
                {section.lessonItems.map(({ lesson, status }, idx) => (
                  <TouchableOpacity
                    key={lesson.id}
                    style={[
                      styles.card,
                      status === "in_progress" && styles.cardInProgress,
                    ]}
                    activeOpacity={0.75}
                    onPress={() => router.push(`/lesson/${lesson.id}`)}
                  >
                    {/* Left */}
                    <View style={styles.cardLeft}>
                      <Text
                        style={[
                          styles.cardLessonNum,
                          status === "in_progress" && styles.cardLessonNumActive,
                        ]}
                      >
                        Lesson {idx + 1}
                      </Text>
                      <Text style={styles.cardTitle}>{lesson.title}</Text>
                      {status === "in_progress" && (
                        <Text style={styles.inProgressText}>In progress</Text>
                      )}
                      <Text style={styles.cardMeta}>
                        {lesson.activities.length} activities · {lesson.xpReward} XP
                      </Text>
                    </View>

                    {/* Right */}
                    {status === "completed" && (
                      <View style={styles.checkBubble}>
                        <Ionicons name="checkmark" size={16} color="#fff" />
                      </View>
                    )}
                    {status === "in_progress" && (
                      <Image
                        source={{
                          uri: `https://picsum.photos/seed/${lesson.id}/64/64`,
                        }}
                        style={styles.thumb}
                        contentFit="cover"
                      />
                    )}
                    {status === "available" && (
                      <View style={styles.lockBubble}>
                        <Ionicons name="lock-closed" size={15} color="#b0b8c8" />
                      </View>
                    )}
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          ))}
        </ScrollView>
      ) : (
        <View style={styles.practiceWrap}>
          <View style={styles.practiceIcon}>
            <Ionicons name="school-outline" size={36} color="#9ca3af" />
          </View>
          <Text style={styles.practiceTitle}>Practice Mode</Text>
          <Text style={styles.practiceBody}>
            Review vocabulary and reinforce what you&apos;ve learned. Coming soon!
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#ffffff" },

  // ── Header
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 6,
    paddingBottom: 12,
  },
  circleBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#f4f4f8",
    alignItems: "center",
    justifyContent: "center",
  },
  headerMid: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 8,
  },
  headerTitle: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 18,
    color: "#001132",
    textAlign: "center",
  },
  headerSub: {
    fontFamily: "Poppins-Regular",
    fontSize: 12,
    color: "#9ca3af",
    marginTop: 2,
    textAlign: "center",
  },

  // ── Hero
  hero: {
    width: "100%",
    height: 220,
    overflow: "hidden",
    backgroundColor: "#ffffff",
  },
  heroBuilding: {
    position: "absolute",
    right: -6,
    bottom: 0,
    width: 215,
    height: 215,
  },
  heroMascot: {
    position: "absolute",
    left: 14,
    bottom: 0,
    width: 148,
    height: 168,
  },

  // ── Tabs (underline style)
  tabRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#efefef",
    paddingHorizontal: 8,
    backgroundColor: "#ffffff",
  },
  tab: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 14,
    borderBottomWidth: 2,
    borderBottomColor: "transparent",
    marginBottom: -1,
  },
  tabActive: {
    borderBottomColor: "#6c4ef5",
  },
  tabText: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 15,
  },
  tabTextOn: { color: "#6c4ef5" },
  tabTextOff: { color: "#b0b8c8" },

  // ── Scroll / sections
  scroll: {
    padding: 16,
    paddingBottom: 40,
  },
  sectionGap: {
    marginTop: 24,
  },

  // Section header row
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    paddingHorizontal: 2,
  },
  sectionAccent: {
    width: 4,
    height: 36,
    borderRadius: 2,
    marginRight: 10,
  },
  sectionMeta: {
    flex: 1,
  },
  sectionUnitLabel: {
    fontFamily: "Poppins-Regular",
    fontSize: 11,
    color: "#9ca3af",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  sectionTitle: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 15,
    color: "#001132",
  },
  sectionCount: {
    fontFamily: "Poppins-Medium",
    fontSize: 13,
    color: "#9ca3af",
  },

  // Card list
  cardList: {
    gap: 10,
  },

  // ── Lesson card
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: "#e8eaed",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
  },
  cardInProgress: {
    backgroundColor: "#f5f3ff",
    borderColor: "#6c4ef5",
    borderWidth: 1.5,
  },
  cardLeft: {
    flex: 1,
    marginRight: 12,
  },
  cardLessonNum: {
    fontFamily: "Poppins-Regular",
    fontSize: 12,
    color: "#9ca3af",
    marginBottom: 3,
  },
  cardLessonNumActive: {
    color: "#6c4ef5",
    fontFamily: "Poppins-Medium",
  },
  cardTitle: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 16,
    color: "#001132",
  },
  inProgressText: {
    fontFamily: "Poppins-Medium",
    fontSize: 13,
    color: "#6c4ef5",
    marginTop: 3,
  },
  cardMeta: {
    fontFamily: "Poppins-Regular",
    fontSize: 12,
    color: "#b0b8c8",
    marginTop: 4,
  },

  // Status indicators
  checkBubble: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#21c16b",
    alignItems: "center",
    justifyContent: "center",
  },
  lockBubble: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#f4f4f8",
    alignItems: "center",
    justifyContent: "center",
  },
  thumb: {
    width: 60,
    height: 60,
    borderRadius: 12,
  },

  // Practice empty
  practiceWrap: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 40,
  },
  practiceIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#f4f4f8",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  practiceTitle: {
    fontFamily: "Poppins-Bold",
    fontSize: 16,
    color: "#001132",
    marginBottom: 8,
    textAlign: "center",
  },
  practiceBody: {
    fontFamily: "Poppins-Regular",
    fontSize: 13,
    color: "#6b7280",
    textAlign: "center",
    lineHeight: 20,
  },
});
