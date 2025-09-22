import { StatusBar, Image, StyleSheet, Text, View } from "react-native";
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

export default function SplashScreen() {
  const opacity = useSharedValue(0);

  useEffect(() => {
    opacity.value = withTiming(1, { duration: 1000 });
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  return (
    <SafeAreaView style={styles.container}>
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
          source={require("../../assets/logo.png")}
          style={{ height: 150, width: 150 }}
        />
      </Animated.View>

      <Animated.View className="absolute bottom-10" style={animatedStyle}>
        <View style={styles.bottomContainer}>
          <Text style={styles.companyName}>
            POWERD BY: {process.env.EXPO_PUBLIC_APP_OWNER}
          </Text>
          <Text style={styles.appVersion}>
            VERSION {process.env.EXPO_PUBLIC_APP_VERSION}
          </Text>
        </View>
      </Animated.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  bottomContainer: {
    alignItems: "center",
    width: "100%",
  },
  companyName: {
    fontSize: 12,
    color: "#888",
  },
  appVersion: {
    fontSize: 12,
    color: "#888",
  },
});
