import {
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  View,
  Image,
  Text,
  Pressable,
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
        <View>
          <Text className="text-slate-600 font-bold">
            We Use Your Contacts to find the Friends.
          </Text>
        </View>
        <View className="mt-5 w-full">
          <Pressable className="bg-red-100 w-full justify-center items-center h-16">
            <Text className="font-bold text-lg">Select Country</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
