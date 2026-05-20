import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { getLessonById } from "@/data/lessons";
import { images } from "@/constants/images";

export default function AudioLessonScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const lesson = getLessonById(id);
  const [micActive, setMicActive] = useState(true);
  const [subtitlesActive, setSubtitlesActive] = useState(false);

  if (!lesson) {
    return (
      <SafeAreaView style={styles.safe} edges={["top"]}>
        <View style={styles.errorWrap}>
          <Text style={styles.errorText}>Lesson not found</Text>
          <TouchableOpacity onPress={() => router.back()}>
            <Text style={styles.errorBack}>Go back</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  const firstPhrase = lesson.goals[0]?.phrases?.[0];
  const bubbleText = firstPhrase?.text ?? lesson.aiTeacherPrompt.introMessage.split(".")[0] + ".";
  const bubbleTranslation = firstPhrase?.translation ?? "Let's begin!";

  return (
    <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.circleBtn} onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={22} color="#001132" />
        </TouchableOpacity>

        <View style={styles.headerCenter}>
          <Text style={styles.headerTitle}>AI Teacher</Text>
          <View style={styles.onlineRow}>
            <View style={styles.onlineDot} />
            <Text style={styles.onlineText}>Online</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.iconBtn}>
          <Ionicons name="notifications-outline" size={22} color="#001132" />
        </TouchableOpacity>
      </View>

      {/* Scene */}
      <View style={styles.scene}>
        <Image
          source={images.mascotWelcome}
          style={styles.mascot}
          contentFit="contain"
        />


      </View>

      {/* Speech bubble */}
      <View style={styles.bubble}>
        <Text style={styles.bubblePhraseText} numberOfLines={2}>
          {bubbleText}
        </Text>
        <View style={styles.bubbleBottomRow}>
          <Text style={styles.bubbleTranslationText} numberOfLines={1}>
            {bubbleTranslation}
          </Text>
          <TouchableOpacity style={styles.speakerBtn}>
            <Ionicons name="volume-high" size={16} color="#6c4ef5" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Controls */}
      <View style={styles.controlsCard}>
        {/* Camera (off) */}
        <View style={styles.controlItem}>
          <View style={[styles.controlBtn]}>
            <Ionicons name="videocam-off" size={22} color="#6b7280" />
          </View>
          <Text style={styles.controlLabel}>Camera</Text>
        </View>

        {/* Mic */}
        <View style={styles.controlItem}>
          <TouchableOpacity
            style={[styles.controlBtn, micActive && styles.controlBtnActive]}
            onPress={() => setMicActive(!micActive)}
          >
            <Ionicons name="mic" size={22} color={micActive ? "#fff" : "#6b7280"} />
          </TouchableOpacity>
          <Text style={styles.controlLabel}>Mic</Text>
        </View>

        {/* Subtitles */}
        <View style={styles.controlItem}>
          <TouchableOpacity
            style={[styles.controlBtn, subtitlesActive && styles.controlBtnActive]}
            onPress={() => setSubtitlesActive(!subtitlesActive)}
          >
            <Text
              style={[
                styles.subtitlesIcon,
                subtitlesActive && styles.subtitlesIconActive,
              ]}
            >
              Aa
            </Text>
          </TouchableOpacity>
          <Text style={styles.controlLabel}>Subtitles</Text>
        </View>

        {/* End Call */}
        <View style={styles.controlItem}>
          <TouchableOpacity
            style={[styles.controlBtn, styles.controlBtnDanger]}
            onPress={() => router.back()}
          >
            <Ionicons name="call" size={22} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.controlLabel}>End Call</Text>
        </View>
      </View>

      {/* Feedback */}
      <View style={styles.feedbackRow}>
        <View style={styles.feedbackItem}>
          <Text style={styles.feedbackLabel}>Speaking</Text>
          <Text style={[styles.feedbackValue, { color: "#21c16b" }]}>Excellent</Text>
        </View>
        <View style={styles.feedbackDivider} />
        <View style={styles.feedbackItem}>
          <Text style={styles.feedbackLabel}>Pronunciation</Text>
          <Text style={[styles.feedbackValue, { color: "#4d88ff" }]}>Great</Text>
        </View>
        <View style={styles.feedbackDivider} />
        <View style={styles.feedbackItem}>
          <Text style={styles.feedbackLabel}>Grammar</Text>
          <Text style={[styles.feedbackValue, { color: "#ff8a00" }]}>Good</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  errorWrap: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
  },
  errorText: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 16,
    color: "#001132",
  },
  errorBack: {
    fontFamily: "Poppins-Medium",
    fontSize: 14,
    color: "#6c4ef5",
  },

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
  headerCenter: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 8,
  },
  headerTitle: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 17,
    color: "#001132",
  },
  onlineRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginTop: 1,
  },
  onlineDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: "#21c16b",
  },
  onlineText: {
    fontFamily: "Poppins-Medium",
    fontSize: 12,
    color: "#21c16b",
  },
  iconBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#f4f4f8",
    alignItems: "center",
    justifyContent: "center",
  },

  // ── Scene
  scene: {
    flex: 1,
    position: "relative",
    backgroundColor: "#fafafa",
    overflow: "hidden",
  },
  mascot: {
    position: "absolute",
    bottom: -20,
    left: 0,
    right: 0,
    height: "100%",
  },
  bubble: {
    marginHorizontal: 16,
    marginVertical: 10,
    backgroundColor: "#ffffff",
    borderRadius: 20,
    paddingHorizontal: 18,
    paddingVertical: 14,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    borderWidth: 1,
    borderColor: "#f0f0f5",
  },
  bubblePhraseText: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 15,
    color: "#001132",
    marginBottom: 4,
  },
  bubbleBottomRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  bubbleTranslationText: {
    fontFamily: "Poppins-Regular",
    fontSize: 13,
    color: "#6b7280",
    flex: 1,
    marginRight: 8,
  },
  speakerBtn: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#f0edff",
    alignItems: "center",
    justifyContent: "center",
  },

  // ── Controls
  controlsCard: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#ffffff",
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 16,
    borderTopWidth: 1,
    borderTopColor: "#f0f0f5",
    marginBottom: 2,
  },
  controlItem: {
    alignItems: "center",
    gap: 6,
  },
  controlBtn: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: "#f4f4f8",
    alignItems: "center",
    justifyContent: "center",
  },
  controlBtnActive: {
    backgroundColor: "#6c4ef5",
  },
  controlBtnDanger: {
    backgroundColor: "#ff4757",
  },
  controlLabel: {
    fontFamily: "Poppins-Regular",
    fontSize: 12,
    color: "#6b7280",
  },
  subtitlesIcon: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 15,
    color: "#6b7280",
  },
  subtitlesIconActive: {
    color: "#ffffff",
  },

  // ── Feedback
  feedbackRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    paddingHorizontal: 20,
    paddingTop: 14,
    paddingBottom: 20,
    borderTopWidth: 1,
    borderTopColor: "#f0f0f5",
  },
  feedbackItem: {
    flex: 1,
    alignItems: "center",
    gap: 3,
  },
  feedbackLabel: {
    fontFamily: "Poppins-Regular",
    fontSize: 12,
    color: "#9ca3af",
  },
  feedbackValue: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 13,
  },
  feedbackDivider: {
    width: 1,
    height: 30,
    backgroundColor: "#e8eaed",
  },
});
