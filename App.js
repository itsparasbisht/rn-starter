import { useState } from "react";
import { StatusBar, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [name, setName] = useState("");

  return (
    <View style={styles.container}>
      <StatusBar />
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="email@example.com"
        autoCorrect={false}
        autoCapitalize="none"
        // secureTextEntry // when dealing with passwords
        // keyboardType="phone-pad"
      />
      <Text>My name is {name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    borderWidth: 1,
  },
});
