import { useAuth } from "@clerk/expo";
import { router, Stack } from "expo-router";
import { useEffect } from "react";

export default function AuthLayout() {
  const { isSignedIn, isLoaded } = useAuth();

  // Redirect signed-in users away from auth screens without using <Redirect>,
  // which triggers GO_BACK when there is no prior screen in the stack.
  useEffect(() => {
    if (isLoaded && isSignedIn) {
      router.replace("/");
    }
  }, [isLoaded, isSignedIn]);

  if (!isLoaded) return null;

  return <Stack screenOptions={{ headerShown: false }} />;
}
