import { View, StyleSheet } from "react-native";
import React from "react";
import Box from "./components/Box";

export default function App() {
  return (
    <View style={styles.container}>
      <Box style={{ backgroundColor: "lightblue" }}>Box 1</Box>
      <Box style={{ backgroundColor: "lightgreen" }}>Box 2</Box>
      <Box style={{ backgroundColor: "orange" }}>Box 3</Box>
      <Box style={{ backgroundColor: "purple" }}>Box 4</Box>
      <Box style={{ backgroundColor: "plum" }}>Box 5</Box>
      <Box style={{ backgroundColor: "grey" }}>Box 6</Box>
      <Box style={{ backgroundColor: "black" }}>Box 7</Box>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 64,
    borderWidth: 6,
    borderColor: "red",
  },
});
