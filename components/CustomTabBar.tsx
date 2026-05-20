import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { useEffect } from "react";
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const TAB_WIDTH = SCREEN_WIDTH / 5;
const TAB_CONTENT_HEIGHT = 64;
const CIRCLE_SIZE = 52;
const ACTIVE_COLOR = "#6c4ef5";
const INACTIVE_COLOR = "#9ca3af";

type TabConfig = {
  label: string;
  activeIcon: keyof typeof Ionicons.glyphMap;
  inactiveIcon: keyof typeof Ionicons.glyphMap;
};

const TAB_CONFIG: Record<string, TabConfig> = {
  index: { label: "Home", activeIcon: "home", inactiveIcon: "home-outline" },
  learn: { label: "Learn", activeIcon: "book", inactiveIcon: "book-outline" },
  "ai-teacher": { label: "AI Teacher", activeIcon: "school", inactiveIcon: "school-outline" },
  chat: { label: "Chat", activeIcon: "chatbubbles", inactiveIcon: "chatbubbles-outline" },
  profile: { label: "Profile", activeIcon: "person", inactiveIcon: "person-outline" },
};

export function CustomTabBar({ state, navigation }: BottomTabBarProps) {
  const insets = useSafeAreaInsets();
  const translateX = useSharedValue(state.index * TAB_WIDTH);

  useEffect(() => {
    translateX.value = withTiming(state.index * TAB_WIDTH, {
      duration: 200,
      easing: Easing.out(Easing.quad),
    });
  }, [state.index]);

  const animatedCircleStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  return (
    <View style={[styles.container, { paddingBottom: insets.bottom }]}>
      <Animated.View
        style={[styles.circleWrapper, animatedCircleStyle]}
        pointerEvents="none"
      >
        <View style={styles.circle} />
      </Animated.View>

      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        const tab = TAB_CONFIG[route.name];

        if (!tab) return null;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            style={styles.tab}
            activeOpacity={0.7}
          >
            <Ionicons
              name={isFocused ? tab.activeIcon : tab.inactiveIcon}
              size={22}
              color={isFocused ? "#ffffff" : INACTIVE_COLOR}
            />
            {!isFocused && <Text style={styles.label}>{tab.label}</Text>}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 8,
  },
  circleWrapper: {
    position: "absolute",
    top: 0,
    height: TAB_CONTENT_HEIGHT,
    width: TAB_WIDTH,
    alignItems: "center",
    justifyContent: "center",
  },
  circle: {
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    backgroundColor: ACTIVE_COLOR,
  },
  tab: {
    flex: 1,
    height: TAB_CONTENT_HEIGHT,
    alignItems: "center",
    justifyContent: "center",
    gap: 3,
  },
  label: {
    fontSize: 10,
    fontFamily: "Poppins-Regular",
    color: INACTIVE_COLOR,
  },
});
