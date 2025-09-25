import { StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as ImagePicker from "expo-image-picker";

export default function AvatarScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white items-center">
      <StatusBar hidden={true} />
    </SafeAreaView>
  );
}
