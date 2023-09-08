import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.redBg, styles.boxShadow]}>
        <Text>Box 1</Text>
      </View>
      <View style={[styles.box, styles.greenBg, styles.androidShadow]}>
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
    width: 250,
    height: 250,
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
  boxShadow: {
    shadowColor: "blue",
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.6,
    shadowRadius: 4,
  },
  androidShadow: {
    elevation: 10,
    shadowColor: "blue",
  },
});
