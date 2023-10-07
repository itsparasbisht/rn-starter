import { useEffect, useState } from "react";
import { View, StyleSheet, Text, StatusBar, FlatList } from "react-native";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  async function getPosts(limit = 10) {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
    );
    const data = await response.json();
    setPosts(data);
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        renderItem={({ item }) => {
          return (
            <View style={styles.card}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.body}>{item.body}</Text>
            </View>
          );
        }}
        ItemSeparatorComponent={<View style={{ height: 10 }} />}
        ListEmptyComponent={<Text>No posts yet!</Text>}
        ListHeaderComponent={<Text style={styles.listHeader}>Your Posts</Text>}
        ListFooterComponent={
          <Text style={styles.listFooter}>Nothing else to show</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  card: {
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  body: {
    fontSize: 16,
  },
  listHeader: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 10,
  },
  listFooter: {
    fontSize: 18,
    fontWeight: "bold",
    padding: 10,
  },
});
