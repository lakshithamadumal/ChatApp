import {
  View,
  StatusBar,
  Text,
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "../../global.css";
import { AlertNotificationRoot } from "react-native-alert-notification";
import { useTheme } from "../theme/ThemeProvider";
import { FloatingLabelInput } from "react-native-floating-label-input";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStack } from "../../App";

type SignupProps = NativeStackNavigationProp<RootStack, "SignUpScreen">;

export default function SignUpScreen() {
  const navigation = useNavigation<SignupProps>();

  const { applied } = useTheme();
  const logo =
    applied === "dark"
      ? require("../../assets/logoLight.png")
      : require("../../assets/logoDark.png");

  return (
    <AlertNotificationRoot>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1 justify-center items-center dark:bg-slate-950"
      >
        <SafeAreaView className="justify-center items-center p-5">
          <StatusBar hidden={true} />
          <Image source={logo} className="h-40 w-36" />
          <View className="w-full justify-start items-start">
            <Text className="font-bold text-slate-500 dark:text-slate-100 text-center">
              Create your account and start the conversation TODAY
            </Text>
          </View>

          <View className="self-stretch">
            <View className="w-full my-3">
              <FloatingLabelInput label={"Enter First Name"} maxLength={200} />
            </View>

            <View className="w-full my-3">
              <FloatingLabelInput label={"Enter Last Name"} maxLength={200} />
            </View>
          </View>
        </SafeAreaView>
        <View className="absolute bottom-5 w-full p-5">
          <Pressable className="bg-green-600 h-14 justify-center items-center rounded-full">
            <Text
              className="text-slate-100 dark:text-slate-100 font-bold text-2xl"
              onPress={() => {
                navigation.replace("ContactScreen");
              }}
            >
              Continue
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </AlertNotificationRoot>
  );
}
