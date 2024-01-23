import { StatusBar } from "expo-status-bar";
import { StyleSheet, TextInput, View, Text, Button } from "react-native";
import Header from "./components/Header";
import { useState } from "react";
import Input from "./components/Input";

export default function App() {
  const appName = "My awesome app";
  const [text, setText] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  function receiveInput(data) {
    console.log("recieve input ", data);
    setText(data);
    setIsModalVisible(false);
    //use this to update the text showing in the
    //Text component
  }
  function dismissModal() {
    setIsModalVisible(false);
  }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header name={appName} version={2} />
      <Button title="Add a goal" onPress={() => setIsModalVisible(true)} />
      <Input
        inputHandler={receiveInput}
        modalVisible={isModalVisible}
        dismissModal={dismissModal}
      />
      <Text>{text}</Text>
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
