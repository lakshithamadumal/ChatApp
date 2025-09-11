import { StatusBar, Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "../../global.css";

export default function Splash() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} />
      <Image
        source={require("../../assets/logo.png")}
        style={{ height: 150, width: 150 }}
      />

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
