import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AvatarScreen() {
  return (
    <SafeAreaView className="flex-1 bg-red-100 items-center">
      <View>
        <Text>Avatar Screen</Text>
      </View>
    </SafeAreaView>
  );
}
