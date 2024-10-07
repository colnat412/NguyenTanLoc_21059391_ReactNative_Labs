import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { NavigationProp } from "@react-navigation/native";

type HomePageProps = {
  navigation: NavigationProp<any>;
};

const HomePage = ({ navigation }: HomePageProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.frame}></View>
      <View style={styles.title}>
        <Text style={styles.titleText}>MANAGE YOUR</Text>
        <Text style={styles.titleText}>TASK</Text>
      </View>
      <View style={styles.input}>
        <Image
          style={{ width: 20, height: 20 }}
          source={require("../assets/iconName.png")}
        ></Image>
        <TextInput placeholder="Enter your name"></TextInput>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Display")}
        style={styles.button}
      >
        <Text style={{ fontSize: 16, color: "white" }}>GET STARTED</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    gap: 50,
    marginBottom: 50,
  },
  title: {
    flexDirection: "column",
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    fontSize: 24,
    color: "#8353E2",
    fontWeight: "bold",
  },
  input: {
    flexDirection: "row",
    gap: 10,
    width: 334,
    height: 43,
    borderWidth: 1,
    borderRadius: 12,
    paddingLeft: 10,
    alignItems: "center",
  },
  frame: {
    width: 271,
    height: 271,
    backgroundColor: "#dfdfdf",
  },
  button: {
    width: 190,
    height: 44,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00BDD6",
    borderRadius: 12,
  },
});

export default HomePage;
