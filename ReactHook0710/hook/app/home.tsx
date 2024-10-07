import { NavigationProp } from "@react-navigation/native";
import { Button, Text, View } from "react-native";

const Home = ({ navigation }: { navigation: NavigationProp<any> }) => {
  return (
    <View style={{ flexDirection: "column", gap: 10 }}>
      <Text style={{ fontWeight: "bold", fontSize: 20 }}>useState</Text>
      <Button
        title="CounterApp"
        onPress={() => {
          navigation.navigate("CounterApp");
        }}
      ></Button>

      <Button
        title="DiceRoll"
        onPress={() => {
          navigation.navigate("DiceRoll");
        }}
      ></Button>
      <Text style={{ fontWeight: "bold", fontSize: 20 }}>useEffect</Text>
      <Button
        title="App1"
        onPress={() => {
          navigation.navigate("App1");
        }}
      ></Button>

      <Button
        title="MyComponent"
        onPress={() => {
          navigation.navigate("MyComponent");
        }}
      ></Button>
      <Button
        title="EventListeningComponent"
        onPress={() => {
          navigation.navigate("EventListeningComponent");
        }}
      ></Button>

      <Text style={{ fontWeight: "bold", fontSize: 20 }}>useRef</Text>
      <Button
        title="TypeRef"
        onPress={() => {
          navigation.navigate("TypeRef");
        }}
      ></Button>

      <Button
        title="TimerComponent"
        onPress={() => {
          navigation.navigate("TimerComponent");
        }}
      ></Button>
    </View>
  );
};

export default Home;
