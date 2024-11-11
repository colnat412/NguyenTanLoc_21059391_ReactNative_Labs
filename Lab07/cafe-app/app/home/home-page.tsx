import { NavigationProp } from "@react-navigation/native";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface HomePageProps {
  navigation: NavigationProp<any>;
}

const HomePage = ({ navigation }: HomePageProps) => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          textAlign: "center",
          paddingTop: 40,
        }}
      >
        Welcome to Cafe world
      </Text>
      <View style={styles.image}>
        <Image
          style={{ width: 200, height: 60 }}
          source={require("@/assets/images/home-1.png")}
        />
        <Image
          style={{ width: 200, height: 60 }}
          source={require("@/assets/images/home-2.png")}
        />
        <Image
          style={{ width: 200, height: 60 }}
          source={require("@/assets/images/home-1.png")}
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Shops")}
      >
        <Text style={{ fontSize: 16, color: "white" }}>GET STARTED</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 128,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    flexDirection: "column",
    gap: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#00BDD6",
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    width: 312,
    height: 50,
  },
});

export default HomePage;
