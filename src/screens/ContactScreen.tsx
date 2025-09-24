import {
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  View,
  Image,
  Text,
  Pressable,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "../../global.css";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useState } from "react";
import { CountryItem, CountryPicker } from "react-native-country-codes-picker";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStack } from "../../App";

type ContactProps = NativeStackScreenProps<RootStack, "AvatarScreen">;

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
          <View>
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
            {/* <CountryPicker
              show={show}
              lang="en"
              pickerButtonOnPress={(item) => {
                setCountryCode(item);
                setShow(false);
              }}
              style={{
                modal: { height: 400 },
              }}
            /> */}

            <View className="mt-2 flex flex-row justify-center">
              <TextInput
                inputMode="tel"
                className="h-16 font-bold text-lg border-y-2 border-y-green-600 w-[18%]"
                placeholder="+94"
              />
              <TextInput
                inputMode="tel"
                className="h-16 font-bold text-lg border-y-2 border-y-green-600 w-[80%] ml-2"
                placeholder="7********"
              />
            </View>
          </View>
          <View className="mt-15 w-full">
            <Pressable className="justify-center items-center h-14 w-full bg-green-600 rounded-full">
              <Text className="text-2xl font-bold text-slate-50">Continue</Text>
            </Pressable>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
