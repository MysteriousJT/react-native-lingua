import { useRouter } from "expo-router";
import { useEffect, useRef, useState } from "react";
import {
    KeyboardAvoidingView,
    Modal,
    Platform,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
} from "react-native";

type Props = {
  visible: boolean;
  email: string;
  onClose: () => void;
};

export default function VerificationModal({ visible, email, onClose }: Props) {
  const router = useRouter();
  const [code, setCode] = useState("");
  const inputRef = useRef<TextInput>(null);

  useEffect(() => {
    if (visible) {
      setCode("");
      setTimeout(() => inputRef.current?.focus(), 200);
    }
  }, [visible]);

  function handleCodeChange(text: string) {
    const digits = text.replace(/[^0-9]/g, "").slice(0, 6);
    setCode(digits);
    if (digits.length === 6) {
      setTimeout(() => {
        onClose();
        router.replace("/");
      }, 300);
    }
  }

  const digits = code.split("");

  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.backdrop} />
      </TouchableWithoutFeedback>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "position" : "height"}
        style={styles.avoidingView}
      >
        <View style={styles.sheet}>
          <View style={styles.handle} />

          <Text className="h2 color-ink text-center mt-2">Check your email</Text>
          <Text className="body-md color-muted text-center mt-2 mb-6">
            {"We sent a 6-digit code to\n"}
            <Text className="font-poppins-semibold color-ink">{email}</Text>
          </Text>

          {/* Digit boxes */}
          <TouchableWithoutFeedback onPress={() => inputRef.current?.focus()}>
            <View style={styles.digitRow}>
              {Array.from({ length: 6 }).map((_, i) => (
                <View
                  key={i}
                  style={[
                    styles.digitBox,
                    digits[i] ? styles.digitBoxFilled : null,
                    i === digits.length ? styles.digitBoxActive : null,
                  ]}
                >
                  <Text style={styles.digitText}>{digits[i] ?? ""}</Text>
                </View>
              ))}
            </View>
          </TouchableWithoutFeedback>

          {/* Hidden input */}
          <TextInput
            ref={inputRef}
            value={code}
            onChangeText={handleCodeChange}
            keyboardType="number-pad"
            maxLength={6}
            style={styles.hiddenInput}
            caretHidden
          />

          <TouchableOpacity onPress={onClose} className="mt-6 items-center">
            <Text className="body-md color-muted">
              Didn&apos;t get it? 
              <Text className="font-poppins-semibold color-lingua-purple">Resend code</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  avoidingView: {
    flex: 1,
    justifyContent: "flex-end",
  },
  sheet: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingHorizontal: 24,
    paddingBottom: 48,
    paddingTop: 12,
    alignItems: "center",
  },
  handle: {
    width: 40,
    height: 4,
    borderRadius: 2,
    backgroundColor: "#e5e7eb",
    marginBottom: 16,
  },
  digitRow: {
    flexDirection: "row",
    gap: 10,
  },
  digitBox: {
    width: 46,
    height: 56,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: "#e5e7eb",
    backgroundColor: "#f6f7fb",
    alignItems: "center",
    justifyContent: "center",
  },
  digitBoxFilled: {
    borderColor: "#6c4ef5",
    backgroundColor: "#fff",
  },
  digitBoxActive: {
    borderColor: "#6c4ef5",
    borderWidth: 2,
  },
  digitText: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 22,
    color: "#001132",
  },
  hiddenInput: {
    position: "absolute",
    opacity: 0,
    width: 1,
    height: 1,
  },
});
