import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function GoalDetails({ route }) {
  console.log(route.params);
  return (
    <View>
      <Text>
        You are viewing details of {route.params.data.text} with id{" "}
        {route.params.data.id}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});