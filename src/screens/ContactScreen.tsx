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
import CountryPicker, {
  Country,
  CountryCode,
} from "react-native-country-picker-modal";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStack } from "../../App";
import { useNavigation } from "@react-navigation/native";

type ContactProps = NativeStackNavigationProp<RootStack, "ContactScreen">;

export default function ContactScreen() {
  const navigation = useNavigation<ContactProps>();

  const [countryCode, setCountryCode] = useState<CountryCode>("LK");
  const [country, setCountry] = useState<Country | null>(null);
  const [show, setShow] = useState(false);

  return (
    <SafeAreaView className="flex-1 bg-white items-center">
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
            <View className="border-b-2 mb-3 border-b-green-600 justify-center items-center flex-row h-14 my-3">
              <CountryPicker
                countryCode={countryCode}
                withFilter
                withFlag
                withCountryNameButton
                withCallingCode
                visible={show}
                onClose={() => setShow(false)}
                onSelect={(c) => {
                  setCountryCode(c.cca2);
                  setCountry(c);
                  setShow(false);
                }}
              />
            </View>

            <View className="mt-2 flex flex-row justify-center">
              <TextInput
                inputMode="tel"
                className="h-16 font-bold text-lg border-y-2 border-y-green-600 w-[18%]"
                placeholder="+94"
                value={country ? `+${country.callingCode}` : ""}
              />
              <TextInput
                inputMode="tel"
                className="h-16 font-bold text-lg border-y-2 border-y-green-600 w-[80%] ml-2"
                placeholder="*********"
              />
            </View>
          </View>
          <View className="mt-12 w-full">
            <Pressable className="justify-center items-center h-14 w-full bg-green-600 rounded-full">
              <Text
                className="text-2xl font-bold text-slate-50"
                onPress={() => {
                  navigation.replace("AvatarScreen");
                }}
              >
                Continue
              </Text>
            </Pressable>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
