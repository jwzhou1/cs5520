import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Button,
  SafeAreaView,
  ScrollView,
} from "react-native";
import Header from "./components/Header";
import { useState } from "react";
import Input from "./components/Input";

export default function App() {
  const appName = "My awesome app";
  // const [text, setText] = useState("");
  const [goals, setGoals] = useState([]); 
  const [isModalVisible, setIsModalVisible] = useState(false);
  function receiveInput(data) {
    console.log("recieve input ", data);
    const newGoal = ({text: data, id: Math.random()});
  setGoals((currentGoals) => { return [...currentGoals, newGoal];});
  
    // setText(data);
    setIsModalVisible(false);
    //use this to update the text showing in the
    //Text component
  }
  function dismissModal() {
    setIsModalVisible(false);
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topView}>
        <StatusBar style="auto" />

        <Header name={appName} version={2} />
        <Button title="Add a goal" onPress={() => setIsModalVisible(true)} />
        <Input
          inputHandler={receiveInput}
          modalVisible={isModalVisible}
          dismissModal={dismissModal}
        />
      </View>
      
      <View style={styles.bottomView}>
      <ScrollView contentContainerStyle = {styles.scrollViewContent}>
        {goals.map((goalItem) => {return(
          <View key={goalItem.id} style={styles.textContainer}>
            <Text style={styles.text}>{goalItem.text}</Text>
          </View>
        );
        })}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    // alignItems: "center",
    justifyContent: "center",
  },
  topView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  textContainer: { borderRadius: 10, backgroundColor:"purple", marginTop: 5,  },
  scrollViewContent: { alignItems: "center" },
  bottomView: { flex: 4, backgroundColor: "lightpink", },
  text: { textAlign: "center", fontSize: 80, backgroundColor: "purple", color: "white",marginTop: 5, padding:5},
});
