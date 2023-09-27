import { StatusBar, StyleSheet, View } from "react-native";
import BottomSheetViewRN from "./components/bottomSheet/BottomSheetViewRN";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <StatusBar />
      <View style={styles.bottomSheetContainer}>
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
  bottomSheetContainer: {
    flex: 1,
    backgroundColor: "grey",
  },
});
