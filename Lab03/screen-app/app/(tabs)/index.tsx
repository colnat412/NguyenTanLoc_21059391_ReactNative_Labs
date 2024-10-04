import { LinearGradient } from "expo-linear-gradient";
import { Image, StyleSheet, Platform, Button, TextInput } from "react-native";

import { View, Text } from "react-native";

const FirstScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.circle}></View>
      <View style={styles.textStrong}>
        <Text style={{ fontWeight: "bold", fontSize: 25 }}>GROW</Text>
        <Text style={{ fontWeight: "bold", fontSize: 25 }}>YOUR BUSINESS</Text>
      </View>
      <View style={styles.textNormalStyle}>
        <Text style={styles.textNormal}>
          We will help you to grow your business using
        </Text>
        <Text style={styles.textNormal}>online server</Text>
      </View>
      <View style={styles.button}>
        <View style={styles.buttonStyle}>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>LOGIN</Text>
        </View>
        <View style={styles.buttonStyle}>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>SIGN UP</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#00CCF9",
    flex: 1,
    flexDirection: "column",
    gap: 75,
    alignItems: "center",
    justifyContent: "center",
  },
  circle: {
    width: 140,
    height: 140,
    borderWidth: 15,
    borderRadius: 100,
    color: "black",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  textStrong: {
    justifyContent: "center",
    alignItems: "center",
  },
  textNormalStyle: {
    justifyContent: "center",
    alignItems: "center",
  },
  textNormal: {
    fontWeight: "bold",
    fontSize: 15,
  },
  button: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  buttonStyle: {
    borderRadius: 10,
    width: 119,
    height: 48,
    backgroundColor: "#E3C000",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default FirstScreen;