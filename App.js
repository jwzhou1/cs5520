import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";

export default function App() {
  const appName = "My awesome app";
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header name="My awesome app" version={2} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
