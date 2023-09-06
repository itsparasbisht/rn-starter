import { useState } from "react";
import { View, Button, Modal, Text } from "react-native";

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <Button title="Press" onPress={() => setIsModalVisible(true)} />
      <Modal
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)} // to trigger close on gestures/back
        animationType="slide"
        presentationStyle="pageSheet" // only affects ios
      >
        <View style={{ flex: 1, backgroundColor: "lightblue", padding: 60 }}>
          <Text>Hi from Modal!</Text>
          <Button title="Close" onPress={() => setIsModalVisible(false)} />
        </View>
      </Modal>
    </View>
  );
}
