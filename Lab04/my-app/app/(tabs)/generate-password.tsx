import { StyleSheet, Text, View } from "react-native";

const GeneratePassword = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>PASSWORD</Text>
        <Text style={styles.title}>GENERATOR</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3B3B98",
    alignItems: "center",
    paddingTop: 50,
  },
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default GeneratePassword;
