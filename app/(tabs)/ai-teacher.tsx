import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AITeacherScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f9fafb" }} edges={["top"]}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontFamily: "Poppins-SemiBold", fontSize: 18, color: "#001132" }}>
          AI Teacher
        </Text>
      </View>
    </SafeAreaView>
  );
}
