import VerificationModal from "@/components/VerificationModal";
import { images } from "@/constants/images";
import { useSignUp, useSSO } from "@clerk/expo";
import { Ionicons } from "@expo/vector-icons";
import * as Linking from "expo-linking";
import { useRouter } from "expo-router";
import * as WebBrowser from "expo-web-browser";
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

WebBrowser.maybeCompleteAuthSession();

export default function SignUp() {
  const router = useRouter();
  const { signUp, fetchStatus } = useSignUp();
  const { startSSOFlow } = useSSO();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [error, setError] = useState("");
  const [socialLoading, setSocialLoading] = useState(false);

  const isLoading = fetchStatus === "fetching";

  async function handleSignUp() {
    setError("");

    if (!email.trim()) return;

    const pwRule = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
    if (!pwRule.test(password)) {
      setError("Password must be 8+ characters with a letter and a number.");
      return;
    }

    try {
      const { error: createError } = await signUp.password({
        emailAddress: email,
        password,
      });

      if (createError) {
        setError(createError.message);
        return;
      }

      const { error: sendError } = await signUp.verifications.sendEmailCode();
      if (sendError) {
        setError(sendError.message);
        return;
      }

      setModalVisible(true);
    } catch (err: any) {
      setError(err.errors?.[0]?.message || "Sign up failed. Please try again.");
    }
  }

  async function handleVerify(code: string) {
    const { error: verifyError } =
      await signUp.verifications.verifyEmailCode({ code });

    if (verifyError) {
      throw new Error(verifyError.message);
    }

    if (signUp.status === "complete") {
      const { error: finalizeError } = await signUp.finalize();
      if (finalizeError) throw new Error(finalizeError.message);
      router.replace("/");
    } else {
      throw new Error("Verification incomplete. Please try again.");
    }
  }

  async function handleResend() {
    try {
      await signUp.verifications.sendEmailCode();
    } catch (err: any) {
      console.error("Resend error:", err);
    }
  }

  async function handleSocialAuth(
    strategy: "oauth_google" | "oauth_apple" | "oauth_facebook"
  ) {
    setError("");
    setSocialLoading(true);
    try {
      const { createdSessionId, setActive } = await startSSOFlow({
        strategy,
        redirectUrl: Linking.createURL("/"),
      });
      if (createdSessionId && setActive) {
        await setActive({ session: createdSessionId });
        router.replace("/");
      }
    } catch (err: any) {
      const msg =
        err?.errors?.[0]?.longMessage ||
        err?.errors?.[0]?.message ||
        err?.message ||
        "Social sign-in failed. Please try again.";
      setError(msg);
    } finally {
      setSocialLoading(false);
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
          <Text className="h1 color-ink mt-4">Create your account</Text>
          <Text className="body-md color-muted mt-1">
            Start your language journey today ✨
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

          {/* Password input */}
          <View style={[styles.inputWrapper, { marginTop: 12 }]}>
            <Text className="body-sm color-muted mb-1">Password</Text>
            <View style={styles.passwordRow}>
              <TextInput
                style={[styles.input, { flex: 1, borderWidth: 0 }]}
                value={password}
                onChangeText={setPassword}
                placeholder="••••••••"
                placeholderTextColor="#9ca3af"
                secureTextEntry={!showPassword}
              />
              <TouchableOpacity
                onPress={() => setShowPassword((v) => !v)}
                style={styles.eyeBtn}
                activeOpacity={0.7}
              >
                <Ionicons
                  name={showPassword ? "eye-off-outline" : "eye-outline"}
                  size={20}
                  color="#6b7280"
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* Error message */}
          {error ? (
            <Text style={{ color: "#dc2626" }} className="body-sm mt-2">
              {error}
            </Text>
          ) : null}

          {/* Sign Up button */}
          <TouchableOpacity
            className="btn btn-primary mt-6"
            onPress={handleSignUp}
            activeOpacity={0.85}
            disabled={isLoading}
          >
            <Text className="body-lg font-poppins-semibold text-white">
              {isLoading ? "Creating account..." : "Sign Up"}
            </Text>
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
            onPress={() => handleSocialAuth("oauth_google")}
            disabled={socialLoading}
          />
          <SocialButton
            icon={<Ionicons name="logo-facebook" size={22} color="#1877F2" />}
            label="Continue with Facebook"
            onPress={() => handleSocialAuth("oauth_facebook")}
            disabled={socialLoading}
          />
          <SocialButton
            icon={<Ionicons name="logo-apple" size={22} color="#000000" />}
            label="Continue with Apple"
            onPress={() => handleSocialAuth("oauth_apple")}
            disabled={socialLoading}
          />

          {/* Footer */}
          <TouchableOpacity
            className="mt-8 mb-4 items-center"
            onPress={() => router.replace("/(auth)/sign-in")}
            activeOpacity={0.7}
          >
            <Text className="body-md color-muted">
              Already have an account?{" "}
              <Text className="font-poppins-semibold color-lingua-purple">
                Log in
              </Text>
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>

      <VerificationModal
        visible={modalVisible}
        email={email}
        onClose={() => setModalVisible(false)}
        onVerify={handleVerify}
        onResend={handleResend}
      />
    </SafeAreaView>
  );
}

function SocialButton({
  icon,
  label,
  onPress,
  disabled,
}: {
  icon: React.ReactNode;
  label: string;
  onPress: () => void;
  disabled?: boolean;
}) {
  return (
    <TouchableOpacity
      style={[styles.socialBtn, disabled && { opacity: 0.5 }]}
      activeOpacity={0.8}
      onPress={onPress}
      disabled={disabled}
    >
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
  passwordRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  eyeBtn: {
    padding: 4,
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
