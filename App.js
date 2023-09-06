import { View, Image, Pressable } from "react-native";
const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <Pressable
        onPress={() => console.log("press")}
        onPressIn={() => console.log("press in")}
        onLongPress={() => console.log("long press")}
      >
        <Image source={logoImg} style={{ width: 300, height: 300 }} />
      </Pressable>
    </View>
  );
}
