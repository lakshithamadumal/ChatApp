import {
  StatusBar,
  Image,
  StyleSheet,
  Text,
  View,
  Animated,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "../../global.css";
import CircleShape from "../components/CircleShape";
import { useEffect, useRef } from "react";

export default function Splash() {
  const fadeIn = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeIn, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, [fadeIn]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} />

      <CircleShape
        width={250}
        height={250}
        backgroundColor="#0f172a"
        borderRadius={999}
        topValue={-5}
        leftValue={-85}
      />
      <CircleShape
        width={200}
        height={200}
        backgroundColor="#1e293b"
        borderRadius={999}
        topValue={-55}
        leftValue={45}
      />

      <Animated.View style={{ opacity: fadeIn }}>
        <Image
          source={require("../../assets/logo.png")}
          style={{ height: 150, width: 150 }}
        />
      </Animated.View>

      <View style={styles.bottomContainer}>
        <Text style={styles.companyName}>
          POWERD BY: {process.env.EXPO_PUBLIC_APP_OWNER}
        </Text>
        <Text style={styles.appVersion}>
          VERSION {process.env.EXPO_PUBLIC_APP_VERSION}
        </Text>
      </View>
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
    position: "absolute",
    bottom: 20,
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
