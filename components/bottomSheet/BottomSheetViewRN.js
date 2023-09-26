import React, { useRef, useMemo } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";

const BottomSheetViewRN = () => {
  const sheetRef = useRef(null);
  const snapPoints = useMemo(() => ["50%"], []);

  return (
    <View style={styles.container}>
      <Button title="Close" onPress={() => handleClosePress()} />
      <BottomSheet
        ref={sheetRef}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
      >
        <BottomSheetView>
          <Text>Awesome io 🔥</Text>
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 200,
  },
});

export default BottomSheetViewRN;
