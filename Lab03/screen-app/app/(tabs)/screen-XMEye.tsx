import { Image, Text, View } from "react-native";

const ScreenXMEye = () => {
  return (
    <View style={{ marginTop: 10, padding: 30 }}>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Image
          source={require("@/assets/images/eye.png")}
          style={{ width: 140, height: 140 }}
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          gap: 20,
          borderBottomWidth: 1,
          borderBottomColor: "#C4C4C4",
          paddingVertical: 20,
          paddingHorizontal: 10,
        }}
      >
        {/* <Image source={require("@/assets/images/user-2.png")}></Image> */}
        <Text style={{ textAlign: "left", fontSize: 20, color: "#C4C4C4" }}>
          Please input user name
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          gap: 20,
          borderBottomWidth: 1,
          borderBottomColor: "#C4C4C4",
          paddingVertical: 20,
          paddingHorizontal: 10,
        }}
      >
        {/* <Image source={require("@/assets/images/user-2.png")}></Image> */}
        <Text style={{ textAlign: "left", fontSize: 20, color: "#C4C4C4" }}>
          Please input password
        </Text>
      </View>

      <View
        style={{
          borderRadius: 5,
          backgroundColor: "#386FFC",
          justifyContent: "center",
          alignItems: "center",
          padding: 10,
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
          LOGIN
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginVertical: 10,
        }}
      >
        <Text style={{ textAlign: "center", color: "black", fontSize: 16 }}>
          Register
        </Text>
        <Text style={{ textAlign: "center", color: "black", fontSize: 16 }}>
          Forgot Password
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 10,
          paddingHorizontal: 10,
        }}
      >
        <View
          style={{ width: 150, height: 1, backgroundColor: "black" }}
        ></View>
        <Text>Other Login Methods</Text>
        <View
          style={{ width: 150, height: 1, backgroundColor: "black" }}
        ></View>
      </View>

      <View
        style={{
          marginTop: 20,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 10,
          paddingHorizontal: 10,
        }}
      >
        <Image source={require("@/assets/images/share.png")}></Image>
        <Image source={require("@/assets/images/wifi.png")}></Image>
        <Image source={require("@/assets/images/fb.png")}></Image>
      </View>
    </View>
  );
};

export default ScreenXMEye;
