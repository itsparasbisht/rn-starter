import { View, StyleSheet, Text, StatusBar } from "react-native";
import Posts from "./components/Posts";

export default function App() {
  return (
    <View style={styles.container}>
      <Posts />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: StatusBar.currentHeight,
    paddingHorizontal: 10,
  },
});
