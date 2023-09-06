import { View, Image, Text, ImageBackground, ScrollView } from "react-native";
const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <ScrollView>
        <Image source={logoImg} style={{ width: 300, height: 300 }} />
        <Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique
          aut quaerat distinctio temporibus. Reprehenderit dolorum ad voluptas,
          perspiciatis soluta iusto nemo assumenda facere ullam fugit animi
          provident deserunt ex vitae id dolor expedita ipsa ducimus incidunt
          error. Nobis error eligendi maiores libero dignissimos, dolores
          aliquid ducimus explicabo veritatis fugit odio sit esse blanditiis
          maxime quaerat nisi magnam aspernatur iste numquam enim ad porro
          alias. Adipisci maxime excepturi deserunt id libero nobis beatae
          accusantium dolores velit nostrum obcaecati dolore, error voluptate
          odit soluta accusamus ipsam dolor fugiat rem similique quibusdam
          consectetur eos.
        </Text>
        <Image source={logoImg} style={{ width: 300, height: 300 }} />
      </ScrollView>
    </View>
  );
}
