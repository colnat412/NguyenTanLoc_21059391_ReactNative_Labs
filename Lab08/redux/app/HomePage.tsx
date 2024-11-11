import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const HomePage = () => {
  const navigation = useNavigation<any>();
  return (
    <View style={styles.container}>
      <View style={styles.text}>
        <Text style={{ fontWeight: "bold", fontSize: 13 }}>
          A premium online store for sporter and their stylish choice
        </Text>
        <Text style={{ fontWeight: "bold", fontSize: 13 }}>
          sporter and their stylish choice
        </Text>
      </View>
      <View
        style={{ backgroundColor: "#E941411A", padding: 30, borderRadius: 30 }}
      >
        <View style={{}}>
          <Image
            style={{ width: 250, height: 240 }}
            source={require("../assets/bike-hp.png")}
          />
        </View>
      </View>
      <View style={styles.text}>
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>POWER BIKE</Text>
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>SHOP</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("Product");
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    gap: 20,
  },
  text: {
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "red",
    padding: 20,
    width: 340,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
  },
});

export default HomePage;
