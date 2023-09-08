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
    width: 100,
    height: 100,
    padding: 10,
  },
  redBg: {
    backgroundColor: "red",
  },
  greenBg: {
    backgroundColor: "green",
  },
});
