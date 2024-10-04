import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Screen1e = () => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 25, fontWeight: "bold" }}>REGISTER</Text>
      <View style={{ flexDirection: "column", gap: 20 }}>
        <View style={styles.input}>
          <Text style={styles.text}>Name</Text>
        </View>
        <View style={styles.input}>
          <Text style={styles.text}>Phone</Text>
        </View>
        <View style={styles.input}>
          <Text style={styles.text}>Email</Text>
        </View>
        <View style={styles.input}>
          <Text style={styles.text}>Password</Text>
        </View>
        <View style={styles.input}>
          <Text style={styles.text}>Birthday</Text>
        </View>
        <View style={{ flexDirection: "row", gap: 10, paddingLeft: 16 }}>
          <View style={styles.circle}></View>
          <Text style={{ fontSize: 18 }}>Male</Text>
          <View style={styles.circle}></View>
          <Text style={{ fontSize: 18 }}>Female</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.btn}>
        <Text style={{ color: "white" }}>REGISTER</Text>
      </TouchableOpacity>
      <Text>When you agree to terms and conditions</Text>
    </View>
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
  input: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 300,
    height: 40,
    paddingHorizontal: 20,
    backgroundColor: "rgba(196, 196, 196, 0.3)",
  },
  text: {
    fontSize: 18,
  },
  circle: {
    width: 23,
    height: 23,
    borderWidth: 1,
    borderRadius: 100,
    color: "black",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  btn: {
    width: 310,
    height: 45,
    backgroundColor: "#E53935",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Screen1e;
