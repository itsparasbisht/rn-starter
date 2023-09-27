import React, { useRef, useMemo } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";

const BottomSheetViewRN = () => {
  const sheetRef = useRef(null);
  const snapPoints = useMemo(() => ["50%", "70%"], []);

  return (
    <View style={styles.container}>
      <Button
        title="open bottom sheet"
        onPress={() => sheetRef.current?.snapToIndex(0)}
      />
      <BottomSheet
        ref={sheetRef}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
      >
        <BottomSheetView style={styles.bottomSheetView}>
          <Text style={styles.bottomSheetText}>🔥</Text>
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomSheetView: {
    flex: 1,
    alignItems: "center",
    paddingTop: 100,
  },
  bottomSheetText: {
    fontSize: 100,
  },
});

export default BottomSheetViewRN;
