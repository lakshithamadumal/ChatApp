import {
  StatusBar,
  Image,
  View,
  Text,
  Pressable,
  FlatList,
  TouchableOpacity,
} from "react-native";
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

  const avatars = [
    require("../../assets/avatar/avatar_1.png"),
    require("../../assets/avatar/avatar_2.png"),
    require("../../assets/avatar/avatar_3.png"),
    require("../../assets/avatar/avatar_4.png"),
    require("../../assets/avatar/avatar_5.png"),
  ];

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
            >
              {image ? (
                <Image
                  source={{ uri: image }}
                  className="h-[120] w-[120] rounded-full"
                />
              ) : (
                <View className="items-center">
                  <Text className="font-bold text-xl text-slate-500">+</Text>
                  <Text className="font-bold text-xl text-slate-500">
                    Add Image
                  </Text>
                </View>
              )}
            </Pressable>

            <Text className="text-lg my-2 text-slate-700 font-bold">
              Or Select an Avatar
            </Text>
            <FlatList
              data={avatars}
              keyExtractor={(_, index) => index.toString()}
              horizontal
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => setImage(Image.resolveAssetSource(item).uri)}
                >
                  <Image
                    source={item}
                    className="h-20 w-20 rounded-full mx-2 border-2 border-gray-200"
                  />
                </TouchableOpacity>
              )}
              contentContainerStyle={{ paddingHorizontal: 10 }}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
        <View className="mt-2 w-full px-5">
          <Pressable className="bg-green-500 h-14 items-center justify-center rounded-full">
            <Text className="text-white font-bold text-lg">Create Account</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
