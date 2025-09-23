import { StatusBar, Image, Text, View } from "react-native";
import Animated from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import "../../global.css";
import CircleShape from "../components/CircleShape";
import { useEffect } from "react";
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStack } from "../../App";
import { useTheme } from "../theme/ThemeProvider";

type props = NativeStackNavigationProp<RootStack, "SplashScreen">;

export default function SplashScreen() {
  const opacity = useSharedValue(0);
  const navigation = useNavigation<props>();

  useEffect(() => {
    opacity.value = withTiming(1, { duration: 3000 });

    const timer = setTimeout(() => {
      navigation.replace("SignUpScreen");
    }, 3000);
    return () => {
      clearInterval(timer);
    };
  }, [navigation, opacity]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  const {applied} = useTheme();
  const logo =
    applied === "dark"
      ? require("../../assets/logoLight.png")
      : require("../../assets/logoDark.png");

  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-slate-50 dark:bg-slate-800">
      <StatusBar hidden={true} />

      <CircleShape
        width={250}
        height={250}
        borderRadius={999}
        className="bg-slate-900"
        topValue={-10}
        leftValue={-80}
      />

      <CircleShape
        width={250}
        height={250}
        borderRadius={999}
        className="bg-slate-900"
        topValue={-70}
        leftValue={50}
      />

      <Animated.View style={animatedStyle}>
        <Image
          source={logo}
          style={{ height: 150, width: 150 }}
        />
      </Animated.View>

      <Animated.View
        className="absolute bottom-10 w-full items-center"
        style={animatedStyle}
      >
        <View className="items-center w-full">
          <Text className="text-xs text-gray-400">
            POWERD BY: {process.env.EXPO_PUBLIC_APP_OWNER}
          </Text>
          <Text className="text-xs text-gray-400">
            VERSION {process.env.EXPO_PUBLIC_APP_VERSION}
          </Text>
        </View>
      </Animated.View>
    </SafeAreaView>
  );
}
