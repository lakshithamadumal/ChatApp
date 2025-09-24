import { KeyboardAvoidingView, Platform, StatusBar } from "react-native";
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
        
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
