import VerificationModal from "@/components/VerificationModal";
import { images } from "@/constants/images";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
    Image,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignIn() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSignIn() {
    if (!email.trim()) return;
    setIsLoading(true);
    try {
      // Clerk integration not installed in this repo; keep existing modal flow.
      // If Clerk is added, call signIn.create({ identifier: email, strategy: 'email_link' }) here.
      setModalVisible(true);
    } catch (err) {
      console.error("Sign-in error:", err);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {/* Back button */}
          <TouchableOpacity
            onPress={() => router.back()}
            style={styles.backBtn}
            activeOpacity={0.7}
          >
            <Ionicons name="chevron-back" size={24} color="#001132" />
          </TouchableOpacity>

          {/* Heading */}
          <Text className="h1 color-ink mt-4">Welcome back</Text>
          <Text className="body-md color-muted mt-1">
            Sign in to continue your journey ✨
          </Text>

          {/* Mascot */}
          <View className="items-center my-4">
            <Image
              source={images.mascotAuth}
              style={styles.mascot}
              resizeMode="contain"
            />
          </View>

          {/* Email input */}
          <View style={styles.inputWrapper}>
            <Text className="body-sm color-muted mb-1">Email</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="alex@gmail.com"
              placeholderTextColor="#9ca3af"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>

          {/* Sign In button */}
          <TouchableOpacity
            className="btn btn-primary mt-6"
            onPress={handleSignIn}
            activeOpacity={0.85}
            disabled={isLoading}
          >
            <Text className="body-lg font-poppins-semibold text-white">{isLoading ? "Sending..." : "Sign In"}</Text>
          </TouchableOpacity>

          {/* Divider */}
          <View style={styles.divider}>
            <View style={styles.dividerLine} />
            <Text className="body-sm color-muted mx-3">or continue with</Text>
            <View style={styles.dividerLine} />
          </View>

          {/* Social buttons */}
          <SocialButton
            icon={<Ionicons name="logo-google" size={22} color="#EA4335" />}
            label="Continue with Google"
          />
          <SocialButton
            icon={<Ionicons name="logo-facebook" size={22} color="#1877F2" />}
            label="Continue with Facebook"
          />
          <SocialButton
            icon={<Ionicons name="logo-apple" size={22} color="#000000" />}
            label="Continue with Apple"
          />

          {/* Footer */}
          <TouchableOpacity
            className="mt-8 mb-4 items-center"
            onPress={() => router.replace("/(auth)/sign-up")}
            activeOpacity={0.7}
          >
            <Text className="body-md color-muted">
              {"Don't have an account? "}
              <Text className="font-poppins-semibold color-lingua-purple">Sign Up</Text>
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>

      <VerificationModal
        visible={modalVisible}
        email={email}
        onClose={() => setModalVisible(false)}
      />
    </SafeAreaView>
  );
}

function SocialButton({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <TouchableOpacity style={styles.socialBtn} activeOpacity={0.8}>
      <View style={styles.socialIcon}>{icon}</View>
      <Text className="body-md font-poppins-medium color-ink flex-1 text-center">
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  backBtn: {
    marginTop: 4,
    width: 36,
    height: 36,
    justifyContent: "center",
  },
  mascot: {
    width: 160,
    height: 160,
  },
  inputWrapper: {
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: "#e5e7eb",
    backgroundColor: "#ffffff",
    paddingHorizontal: 14,
    paddingTop: 10,
    paddingBottom: 10,
  },
  input: {
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    color: "#001132",
    paddingVertical: 0,
  },
  divider: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#e5e7eb",
  },
  socialBtn: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: "#e5e7eb",
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginBottom: 12,
    backgroundColor: "#ffffff",
  },
  socialIcon: {
    width: 28,
    alignItems: "center",
  },
});
