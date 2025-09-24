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
import AntDesign from "@expo/vector-icons/AntDesign";
import { useState } from "react";
import { CountryItem, CountryPicker } from "react-native-country-codes-picker";

export default function ContactScreen() {
  const [show, setShow] = useState(false);
  const [countryCode, setCountryCode] = useState<CountryItem | null>(null);

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
          <Pressable
            className="w-full justify-center items-center h-16 border-b-4 border-b-green-600"
            onPress={() => setShow(true)}
          >
            <View className="flex-row items-center">
              <Text className="font-bold text-lg">Select Country</Text>
              <AntDesign
                name="caret-down"
                size={20}
                color="black"
                style={{ marginLeft: 8 }}
              />
            </View>
          </Pressable>
          <CountryPicker show={show} lang="en" pickerButtonOnPress={() => {}} 
          style={{
            modal: { height: 400 },
          }}/>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
