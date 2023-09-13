import { View, StyleSheet, Text, SafeAreaView, Platform } from "react-native";
import CustomButton from "./components/customButton/CustomButton";

export default function App() {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.text}>Welcome!</Text>
          <CustomButton title={"Press Me"} onPress={() => alert("Pressed!")} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "plum",
  },
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 20 : 0,
  },
  box: {
    padding: 30,
  },
  text: {
    ...Platform.select({
      ios: {
        color: "purple",
      },
      android: {
        color: "blue",
      },
    }),
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});
