import { Image, StyleSheet, View, Text } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { LinearGradient } from "expo-linear-gradient";

export default function Screen1b() {
  return (
    <LinearGradient
      start={{ x: 0.5, y: 0.75 }}
      end={{ x: 0.5, y: 1 }}
      colors={["#C7F4F7", "#D1F4F6", "#E5F4F5", "#37D6F8", "#00CCF9"]}
      style={styles.container}
    >
      <Image source={require("@/assets/images/lock.png")}></Image>
      <Text style={{ fontSize: 25, fontWeight: "bold" }}>FORGET PASSWORD</Text>
      <View
        style={{
          flexDirection: "column",
          gap: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={styles.title}>
          Provide your account’s email for which you
        </Text>
        <Text style={styles.title}>want to reset your password</Text>
      </View>

      <View style={styles.columnButton}>
        <ThemedView
          style={{
            backgroundColor: "rgba(196, 196, 196, 1)",
            alignItems: "center",
            paddingHorizontal: 16,
            flexDirection: "row",
            width: "80%",
          }}
        >
          <Image source={require("@/assets/images/mail-box.png")}></Image>
          <ThemedText style={styles.buttonText}>Email</ThemedText>
        </ThemedView>
        <ThemedView
          style={{
            width: "80%",
            alignContent: "center",
            paddingHorizontal: 16,
            padding: 8,
            backgroundColor: "rgba(227, 192, 0, 1)",
          }}
        >
          <ThemedText style={styles.buttonText}>SIGN UP</ThemedText>
        </ThemedView>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    justifyContent: "center",
    alignItems: "center",
    gap: 100,
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
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "rgba(227, 192, 0, 1)",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  columnButton: {
    flexDirection: "column",
    gap: 30,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    width: "100%",
  },
});
