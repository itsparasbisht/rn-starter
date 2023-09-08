import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.redBg]}>
        <Text>Box 1</Text>
      </View>
      <View style={[styles.box, styles.greenBg]}>
        <Text>Box 2</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
    padding: 60,
  },
  box: {
    width: "50%",
    height: "30%",
    paddingHorizontal: 10,
    paddingVertical: 30,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 5,
  },
  redBg: {
    backgroundColor: "red",
  },
  greenBg: {
    backgroundColor: "green",
  },
});
