import { Text, View, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  return (
    <View className="flex-1 justify-center items-center gap-4">
      <Text className="h2 text-center color-lingua-purple">Lingua</Text>
      <TouchableOpacity
        className="btn btn-primary"
        onPress={() => router.push("/onboarding")}
        activeOpacity={0.85}
      >
        <Text className="body-md font-poppins-semibold text-white">
          View Onboarding
        </Text>
      </TouchableOpacity>
    </View>
  );
}
