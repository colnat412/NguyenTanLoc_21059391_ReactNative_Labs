import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { LinearGradient } from "expo-linear-gradient";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Screen2a = () => {
  return (
    <LinearGradient colors={["#F8CB00", "#BF9A00"]} style={styles.container}>
      <Text style={styles.mainTitle}>LOGIN</Text>

      <View style={styles.columnButton}>
        <View style={styles.input}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
            }}
          >
            <Image
              source={require("@/assets/images/user.png")}
              style={{ width: 25, height: 25 }}
            ></Image>
            <Text style={styles.textInput}>Name</Text>
          </View>
        </View>

        <View style={styles.input}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
            }}
          >
            <Image
              source={require("@/assets/images/pwd.png")}
              style={{ width: 25, height: 25 }}
            ></Image>
            <Text style={styles.textInput}>Password</Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            width: "65%",
            alignContent: "center",
            paddingHorizontal: 16,
            padding: 8,
            backgroundColor: "black",
          }}
        >
          <Text style={styles.textLogin}>LOGIN</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>CREATE ACCOUNT</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(49, 170, 82, 0.19)",
    paddingVertical: 100,
    marginBottom: 20,
    flexDirection: "column",
    gap: 30,
  },
  divImage: {
    width: 400,
    height: 250,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  circle: {
    borderWidth: 15,
    borderRadius: 100,
    borderColor: "black",
    width: 140,
    height: 140,
  },
  mainTitle: {
    fontSize: 30,
    fontWeight: "bold",
  },
  secondTitle: {
    fontSize: 15,
    textAlign: "center",
    color: "black",
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "rgba(227, 192, 0, 1)",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  textLogin: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  columnButton: {
    flexDirection: "column",
    gap: 30,
    marginTop: 50,
    justifyContent: "flex-start",
    alignItems: "center",
    flex: 1,
    width: "100%",
  },
  input: {
    borderWidth: 1,
    borderColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 400,
    height: 54,
    paddingHorizontal: 20,
    backgroundColor: "rgba(196, 196, 196, 0.3)",
  },
  textInput: {
    fontSize: 18,
  },
});

export default Screen2a;
