import { StyleSheet, Text, View, FlatList, StatusBar } from "react-native";
import pokemonList from "./data.json";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar />
      <FlatList
        data={pokemonList}
        renderItem={({ item }) => {
          return (
            <View key={item.id} style={styles.cardBox}>
              <Text style={styles.cardText}>{item.type}</Text>
              <Text style={styles.cardText}>{item.name}</Text>
            </View>
          );
        }}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={<View style={{ height: 10 }} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 10,
  },
  cardBox: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 8,
    borderWidth: 2,
  },
  cardText: {
    fontSize: 22,
    fontWeight: "bold",
  },
});
