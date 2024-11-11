import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import data from "@/data/user";
import { useState } from "react";
import { NavigationProp } from "@react-navigation/native";

interface LoginPageProps {
  navigation: NavigationProp<any>;
}

const LoginPage = ({ navigation }: LoginPageProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // const user = data.find((user) => user.email === email);
    // if (user && user.password === password) {
    //   navigation.navigate("Display");
    // } else {
    //   Alert.alert("Invalid email or password");
    // }
    navigation.navigate("Display");
  };
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image source={require("@/assets/images/dataImg/icon.png")} />
        <Text style={styles.textLogo}>Hello Again!</Text>
        <Text style={styles.textLogo2}>Log into your account</Text>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.input}>
          <Image source={require("@/assets/images/dataImg/Vector.png")}></Image>
          <TextInput
            onChangeText={setEmail}
            placeholder="Enter your email address"
          ></TextInput>
        </View>
        <View
          style={[
            styles.input,
            { flexDirection: "row", justifyContent: "space-between" },
          ]}
        >
          <View style={{ flexDirection: "row", gap: 8 }}>
            <Image source={require("@/assets/images/dataImg/lock.png")}></Image>
            <TextInput
              onChangeText={setPassword}
              placeholder="Enter your password"
              secureTextEntry={true}
            ></TextInput>
          </View>
          <Image source={require("@/assets/images/dataImg/eye.png")}></Image>
        </View>
        <View style={{ marginLeft: 180 }}>
          <Text style={{ color: "#1ebee6" }}>Forgot password?</Text>
        </View>
      </View>
      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
          Continue
        </Text>
      </TouchableOpacity>
      <View style={styles.socialContainer}>
        <Text>or</Text>
        <View style={styles.social}>
          <Image source={require("@/assets/images/dataImg/google.png")}></Image>
          <Image source={require("@/assets/images/dataImg/face.png")}></Image>
          <Image source={require("@/assets/images/dataImg/apple.png")}></Image>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    gap: 40,
  },
  logo: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    gap: 10,
  },
  textLogo: {
    fontWeight: "bold",
    fontSize: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  textLogo2: {
    opacity: 0.5,
    fontSize: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    flexDirection: "column",
    gap: 16,
  },
  input: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    width: 300,
    height: 40,
    borderWidth: 0.5,
    borderRadius: 10,
    padding: 10,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: 300,
    height: 40,
    backgroundColor: "#1ebee6",
    borderRadius: 10,
  },
  socialContainer: {
    flexDirection: "column",
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  social: {
    flexDirection: "row",
    gap: 10,
  },
});

export default LoginPage;
