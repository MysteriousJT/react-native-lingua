import { useAuth, useUser } from "@clerk/expo";
import { Redirect, router } from "expo-router";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const { isSignedIn, isLoaded, signOut } = useAuth();
  const { user } = useUser();

  if (!isLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#6c4ef5" />
      </View>
    );
  }

  if (!isSignedIn) {
    return <Redirect href="/onboarding" />;
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", paddingHorizontal: 24 }}>
        <Text className="h1 color-ink text-center">Welcome!</Text>
        <Text className="body-md color-muted mt-2 text-center">
          {user?.primaryEmailAddress?.emailAddress}
        </Text>
        <Text className="body-sm color-muted mt-6 text-center">
          Home screen coming soon.
        </Text>
        <TouchableOpacity
          className="btn btn-primary mt-8"
          onPress={() => router.push("/language-select")}
          activeOpacity={0.85}
        >
          <Text className="body-lg font-poppins-semibold text-white">Choose a Language</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="btn btn-secondary mt-4"
          onPress={() => signOut()}
          activeOpacity={0.85}
        >
          <Text className="body-lg font-poppins-semibold" style={{ color: "#6c4ef5" }}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
