import { useLayoutEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function AboutScreen({ navigation, route }) {
  const { name } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: name,
    });
  }, [navigation, name]);

  return (
    <View style={styles.container}>
      <Text>About {name}</Text>
      <Button
        title="Update the name"
        onPress={() => navigation.setParams({ name: "John" })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
});
