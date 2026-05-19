import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { languages } from "@/data/languages";
import { images } from "@/constants/images";

export default function LanguageSelect() {
  const [search, setSearch] = useState("");
  const [selectedCode, setSelectedCode] = useState<string | null>(null);

  const filtered = languages.filter(
    (lang) =>
      lang.name.toLowerCase().includes(search.toLowerCase()) ||
      lang.nativeName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      {/* Header */}
      <View className="flex-row items-center px-4 pt-1 pb-2">
        <TouchableOpacity onPress={() => router.back()} className="p-1">
          <Ionicons name="chevron-back" size={24} color="#001132" />
        </TouchableOpacity>
        <Text className="h3 flex-1 text-center">Choose a language</Text>
        {/* spacer to balance the back button */}
        <View style={{ width: 32 }} />
      </View>

      {/* Search bar */}
      <View className="px-4 mt-2 mb-4">
        <View
          className="flex-row items-center rounded-2xl px-4 py-3"
          style={{ backgroundColor: "#f6f7fb" }}
        >
          <Ionicons name="search-outline" size={18} color="#6b7280" />
          <TextInput
            className="flex-1 ml-2 body-md"
            placeholder="Search languages"
            placeholderTextColor="#6b7280"
            value={search}
            onChangeText={setSearch}
          />
        </View>
      </View>

      {/* Language list */}
      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 8 }}
      >
        <Text className="h4 px-4 mb-3">Popular</Text>

        {filtered.map((lang) => {
          const isSelected = selectedCode === lang.code;
          return (
            <TouchableOpacity
              key={lang.code}
              onPress={() => setSelectedCode(lang.code)}
              activeOpacity={0.75}
              className="flex-row items-center mx-4 mb-2 px-4 rounded-2xl"
              style={{
                paddingVertical: 14,
                borderWidth: isSelected ? 2 : 1,
                borderColor: isSelected ? "#6c4ef5" : "#e5e7eb",
                backgroundColor: isSelected ? "#f0ecff" : "#ffffff",
              }}
            >
              <Image
                source={{ uri: lang.flag }}
                style={{ width: 42, height: 42, borderRadius: 21 }}
              />
              <View className="flex-1 ml-3">
                <Text className="h4">{lang.name}</Text>
                <Text className="body-sm" style={{ color: "#6b7280" }}>
                  {lang.learnerCount}
                </Text>
              </View>
              {isSelected ? (
                <View
                  className="w-6 h-6 rounded-full items-center justify-center"
                  style={{ backgroundColor: "#6c4ef5" }}
                >
                  <Ionicons name="checkmark" size={14} color="#ffffff" />
                </View>
              ) : (
                <Ionicons name="chevron-forward" size={20} color="#6b7280" />
              )}
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      {/* Confirm button */}
      <View className="px-4 pt-3 pb-2">
        <TouchableOpacity
          className="btn btn-primary"
          disabled={!selectedCode}
          style={{ opacity: selectedCode ? 1 : 0.4 }}
          onPress={() => router.back()}
          activeOpacity={0.85}
        >
          <Text className="body-lg font-poppins-semibold text-white">
            Start Learning
          </Text>
        </TouchableOpacity>
      </View>

      {/* Earth illustration */}
      <Image
        source={images.earth}
        style={{ width: "100%", height: 110, resizeMode: "cover" }}
      />
    </SafeAreaView>
  );
}
