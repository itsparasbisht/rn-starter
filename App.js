import { Button, StatusBar, StyleSheet, Text, View } from "react-native";
import BottomSheetViewRN from "./components/bottomSheet/BottomSheetViewRN";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <StatusBar />
      <View>
        <Button title="open bottom sheet" />
        <BottomSheetViewRN />
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
  },
});
