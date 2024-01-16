import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import { useState } from 'react';
import { TextInput } from 'react-native-web';
import Input from './components/Input';

export default function App() {
  const appName = "My First App";
  const [text, setText] = useState("");

  function changeTextHandler(changedText) {
    console.log("User typed something", changedText);
    setText(changedText);
  }
  return (
    <View style={styles.container}>
      <Text>Open up App.js to say hi {appName}</Text>
      <StatusBar style="auto" />
      <Header name = {appName} verison = {2}/>
     <input/>
      <Text>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
