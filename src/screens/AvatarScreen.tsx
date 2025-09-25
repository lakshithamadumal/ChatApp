import { StatusBar, Image, View, Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";

export default function AvatarScreen() {
  const [image, setImage] = useState<string | null>(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar hidden={true} />

      <View className="flex-1 items-center">
        <View>
          <Image
            source={require("../../assets/logoDark.png")}
            className="h-40 w-36"
          />
        </View>
        <View className="items-center">
          <Text className="text-2xl font-bold text-gray-800">
            Choose Your Avatar
          </Text>
          <View className="items-center mt-2 h-72">
            <Pressable
              className="h-[120] w-[120] rounded-full bg-gray-100 justify-center items-center border-2 border-gray-400 border-dashed"
              onPress={pickImage}
            ></Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
