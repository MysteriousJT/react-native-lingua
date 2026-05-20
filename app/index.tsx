import { useLanguageStore } from "@/store/useLanguageStore";
import { useAuth } from "@clerk/expo";
import { Redirect } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";

export default function Index() {
  const { isSignedIn, isLoaded } = useAuth();
  const selectedLanguage = useLanguageStore((state) => state.selectedLanguage);

  const [hasHydrated, setHasHydrated] = useState(
    () => useLanguageStore.persist.hasHydrated()
  );

  useEffect(() => {
    if (hasHydrated) return;
    const unsubscribe = useLanguageStore.persist.onFinishHydration(() => {
      setHasHydrated(true);
    });
    return unsubscribe;
  }, [hasHydrated]);

  if (!isLoaded || !hasHydrated) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#6c4ef5" />
      </View>
    );
  }

  if (!isSignedIn) return <Redirect href="/onboarding" />;
  if (!selectedLanguage) return <Redirect href="/language-select" />;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return <Redirect href={"/(tabs)" as any} />;
}
