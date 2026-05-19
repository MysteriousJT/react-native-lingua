import { images } from "@/constants/images";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Onboarding() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <View className="flex-1 px-6">
        {/* Logo row */}
        <View className="flex-row items-center justify-center gap-2 mt-4 pr-8">
          <Image
            source={images.mascotLogo}
            className="w-9 h-9"
            style={{ transform: [{ translateX: 8 }] }}
            resizeMode="contain"
          />
          <Text className="h3 color-ink">lingua</Text>
        </View>

        {/* Headline */}
        <View className="mt-5">
          <Text className="h1 color-ink">Your AI language</Text>
          <View className="flex-row" style={{ marginTop: -6 }}>
            <Text className="h1 color-lingua-purple">teacher</Text>
            <Text className="h1 color-ink">.</Text>
          </View>
        </View>

        {/* Subtitle */}
        <Text className="body-md color-muted mt-2">
          Real conversations, personalized lessons, anytime, anywhere.
        </Text>

        {/* Mascot with speech bubbles */}
        <View className="flex-1 items-center relative justify-start pt-2.5">
          <View
            className="absolute bg-white rounded-2xl px-3.5 py-2 border border-gray-200 z-10"
            style={[styles.bubbleShadow, { left: 8, top: "22%" }]}
          >
            <Text className="body-md font-poppins-semibold color-ink">Hello!</Text>
          </View>

          <View
            className="absolute bg-white rounded-2xl px-3.5 py-2 border border-gray-200 z-10"
            style={[styles.bubbleShadow, { right: 8, top: "16%", transform: [{ rotate: "4deg" }] }]}
          >
            <Text className="body-md font-poppins-semibold color-ink">¡Hola!</Text>
          </View>

          <View
            className="absolute bg-white rounded-2xl px-3.5 py-2 border border-gray-200 z-10"
            style={[styles.bubbleShadow, { right: 12, top: "56%", transform: [{ rotate: "-3deg" }] }]}
          >
            <Text className="body-md font-poppins-semibold text-[#e53935]">
              你好!
            </Text>
          </View>

          <Image
            source={images.mascotWelcome}
            className="w-[500px] h-[500px]"
            style={{ transform: [{ translateX: 4 }] }}
            resizeMode="contain"
          />
        </View>

        {/* Get Started button */}
        <TouchableOpacity
          className="btn btn-primary flex-row items-center mb-4"
          onPress={() => router.push("/")}
          activeOpacity={0.85}
        >
          <View className="w-5" />
          <Text className="body-lg font-poppins-semibold text-white flex-1 text-center">
            Get Started
          </Text>
          <Ionicons name="chevron-forward" size={20} color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  bubbleShadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },
});
