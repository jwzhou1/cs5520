import { Button, Modal, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

export default function Input({ inputHandler, modalVisible, dismissModal }) {
  const [text, setText] = useState("");
  // callback handler
  function changeTextHandler(changedText) {
    console.log("user is typing ", changedText);

    setText(changedText);
  }

  function confirmHandler() {
    inputHandler(text);
  }
  function cancelHandler() {
    // hide the modal
    dismissModal();
  }
  return (
    <Modal visible={modalVisible}>
      <View style={styles.container}>
        <TextInput
          placeholder="Type something"
          style={styles.input}
          value={text}
          onChangeText={changeTextHandler}
        />
        <Button title="Cancel" onPress={cancelHandler} />

        <Button title="Confirm" onPress={confirmHandler} />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 2,
    borderBottomColor: "purple",
    width: "50%",
  },
  container: {
    flex: 1,
    backgroundColor: "#ccc",
    alignItems: "center",
    justifyContent: "center",
  },
});
