import {
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  View,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "../../global.css";

export default function ContactScreen() {
  return (
    <SafeAreaView className="flex-1 bg-red-100 items-center">
      <StatusBar hidden={true} />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 100}
      >
        <View className="p-5 items-center">
          <Image
            source={require("../../assets/logoDark.png")}
            className="h-40 w-36"
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
