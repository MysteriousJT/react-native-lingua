import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { getLessonById } from "@/data/lessons";
import { images } from "@/constants/images";
import { useLanguageStore } from "@/store/useLanguageStore";
import { useStreamCall, type AgentStatus, type CallStatus } from "@/hooks/useStreamCall";

// ── Status indicator config ──────────────────────────────────────────────────

const CALL_STATUS_CONFIG: Record<CallStatus, { dotColor: string; label: string }> = {
  idle: { dotColor: "#b0b8c8", label: "Connecting..." },
  connecting: { dotColor: "#ff8a00", label: "Connecting..." },
  joined: { dotColor: "#21c16b", label: "Online" },
  error: { dotColor: "#ff4757", label: "Disconnected" },
  ended: { dotColor: "#b0b8c8", label: "Ended" },
};

const AGENT_STATUS_CONFIG: Record<AgentStatus, { dotColor: string; label: string }> = {
  idle: { dotColor: "#b0b8c8", label: "AI Teacher joining..." },
  connecting: { dotColor: "#ff8a00", label: "AI Teacher joining..." },
  connected: { dotColor: "#21c16b", label: "Online" },
  failed: { dotColor: "#ff4757", label: "AI unavailable" },
};

export default function AudioLessonScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const lesson = getLessonById(id);
  const { selectedLanguage } = useLanguageStore();
  const [subtitlesActive, setSubtitlesActive] = useState(false);

  const { status, agentStatus, isMuted, error, toggleMute, endCall, retryCall } =
    useStreamCall({
      lessonId: id ?? "",
      language: selectedLanguage ?? "es",
    });

  const handleEndCall = async () => {
    await endCall();
    router.back();
  };

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
  const bubbleText =
    firstPhrase?.text ??
    lesson.aiTeacherPrompt.introMessage.split(".")[0] + ".";
  const bubbleTranslation = firstPhrase?.translation ?? "Let's begin!";

  const micActive = !isMuted;
  // When the call is joined, show agent status; otherwise show call status
  const statusCfg =
    status === "joined"
      ? AGENT_STATUS_CONFIG[agentStatus]
      : CALL_STATUS_CONFIG[status];

  return (
    <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
      {/* ── Header ── */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.circleBtn}
          onPress={() => router.back()}
        >
          <Ionicons name="chevron-back" size={22} color="#001132" />
        </TouchableOpacity>

        <View style={styles.headerCenter}>
          <Text style={styles.headerTitle}>AI Teacher</Text>
          <View style={styles.onlineRow}>
            <View
              style={[styles.onlineDot, { backgroundColor: statusCfg.dotColor }]}
            />
            <Text style={[styles.onlineText, { color: statusCfg.dotColor }]}>
              {statusCfg.label}
            </Text>
          </View>
        </View>

        <TouchableOpacity style={styles.iconBtn}>
          <Ionicons name="notifications-outline" size={22} color="#001132" />
        </TouchableOpacity>
      </View>

      {/* ── Scene ── */}
      <View style={styles.scene}>
        <Image
          source={images.mascotWelcome}
          style={styles.mascot}
          contentFit="contain"
        />

        {/* Connecting overlay */}
        {(status === "idle" || status === "connecting") && (
          <View style={styles.overlay}>
            <View style={styles.overlayCard}>
              <ActivityIndicator size="large" color="#6c4ef5" />
              <Text style={styles.overlayTitle}>Connecting to AI Teacher</Text>
              <Text style={styles.overlaySubtitle}>
                Setting up your audio session…
              </Text>
            </View>
          </View>
        )}

        {/* Error overlay */}
        {status === "error" && (
          <View style={styles.overlay}>
            <View style={styles.overlayCard}>
              <Ionicons name="wifi-outline" size={36} color="#ff4757" />
              <Text style={styles.overlayTitle}>Connection Failed</Text>
              <Text style={styles.overlaySubtitle}>
                {error ?? "Could not connect to your lesson."}
              </Text>
              <TouchableOpacity style={styles.retryBtn} onPress={retryCall}>
                <Text style={styles.retryBtnText}>Try Again</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>

      {/* ── Speech bubble ── */}
      <View style={styles.bubble}>
        <Text style={styles.bubblePhraseText} numberOfLines={2}>
          {status === "joined"
            ? bubbleText
            : lesson.aiTeacherPrompt.introMessage.split(".")[0] + "."}
        </Text>
        <View style={styles.bubbleBottomRow}>
          <Text style={styles.bubbleTranslationText} numberOfLines={1}>
            {status === "joined" ? bubbleTranslation : "Preparing your lesson…"}
          </Text>
          <TouchableOpacity style={styles.speakerBtn}>
            <Ionicons name="volume-high" size={16} color="#6c4ef5" />
          </TouchableOpacity>
        </View>
      </View>

      {/* ── Controls ── */}
      <View style={styles.controlsCard}>
        {/* Camera (always off for audio-only) */}
        <View style={styles.controlItem}>
          <View style={styles.controlBtn}>
            <Ionicons name="videocam-off" size={22} color="#6b7280" />
          </View>
          <Text style={styles.controlLabel}>Camera</Text>
        </View>

        {/* Mic */}
        <View style={styles.controlItem}>
          <TouchableOpacity
            style={[styles.controlBtn, micActive && styles.controlBtnActive]}
            onPress={toggleMute}
            disabled={status !== "joined"}
          >
            <Ionicons
              name={micActive ? "mic" : "mic-off"}
              size={22}
              color={micActive ? "#fff" : "#6b7280"}
            />
          </TouchableOpacity>
          <Text style={styles.controlLabel}>{isMuted ? "Muted" : "Mic"}</Text>
        </View>

        {/* Subtitles */}
        <View style={styles.controlItem}>
          <TouchableOpacity
            style={[
              styles.controlBtn,
              subtitlesActive && styles.controlBtnActive,
            ]}
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
            onPress={handleEndCall}
          >
            <Ionicons name="call" size={22} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.controlLabel}>End Call</Text>
        </View>
      </View>

      {/* ── Feedback row ── */}
      <View style={styles.feedbackRow}>
        <View style={styles.feedbackItem}>
          <Text style={styles.feedbackLabel}>Speaking</Text>
          <Text style={[styles.feedbackValue, { color: "#21c16b" }]}>
            {status === "joined" ? "Excellent" : "—"}
          </Text>
        </View>
        <View style={styles.feedbackDivider} />
        <View style={styles.feedbackItem}>
          <Text style={styles.feedbackLabel}>Pronunciation</Text>
          <Text style={[styles.feedbackValue, { color: "#4d88ff" }]}>
            {status === "joined" ? "Great" : "—"}
          </Text>
        </View>
        <View style={styles.feedbackDivider} />
        <View style={styles.feedbackItem}>
          <Text style={styles.feedbackLabel}>Grammar</Text>
          <Text style={[styles.feedbackValue, { color: "#ff8a00" }]}>
            {status === "joined" ? "Good" : "—"}
          </Text>
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
  },
  onlineText: {
    fontFamily: "Poppins-Medium",
    fontSize: 12,
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

  // ── Overlays
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(250,250,250,0.88)",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
  },
  overlayCard: {
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 24,
  },
  overlayTitle: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 16,
    color: "#001132",
    marginTop: 4,
    textAlign: "center",
  },
  overlaySubtitle: {
    fontFamily: "Poppins-Regular",
    fontSize: 13,
    color: "#6b7280",
    textAlign: "center",
  },
  retryBtn: {
    marginTop: 8,
    backgroundColor: "#6c4ef5",
    paddingHorizontal: 28,
    paddingVertical: 10,
    borderRadius: 20,
  },
  retryBtnText: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 14,
    color: "#fff",
  },

  // ── Speech bubble
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
