import { Image, StyleSheet, Text, TextInput, View } from "react-native";

const DisplayPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <Image
          style={{ width: 16, height: 16 }}
          source={require("@/assets/images/dataImg/search.png")}
        ></Image>
        <TextInput placeholder="Search"></TextInput>
      </View>
      <View style={styles.category}>
        <View style={styles.titleCategory}>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>Categories</Text>
          <Text style={{ fontSize: 12, opacity: 0.5 }}>See all</Text>
        </View>
        <View style={styles.frameContainer}>
          <View style={[styles.frame, { backgroundColor: "#e1a0ee" }]}>
            <Image
              source={require("@/assets/images/dataImg/smart.png")}
            ></Image>
          </View>
          <View style={[styles.frame, { backgroundColor: "#7babe9" }]}>
            <Image source={require("@/assets/images/dataImg/ipad.png")}></Image>
          </View>
          <View style={[styles.frame, { backgroundColor: "#f0cbac" }]}>
            <Image
              source={require("@/assets/images/dataImg/macbook.png")}
            ></Image>
          </View>
        </View>
      </View>
      <View style={styles.typeContainer}>
        <View style={styles.type}>
          <Text style={{ color: "white", fontWeight: "bold" }}>Best Sales</Text>
        </View>
        <View style={styles.type}>
          <Text style={{ color: "white", fontWeight: "bold" }}>
            Best Matched
          </Text>
        </View>
        <View style={styles.type}>
          <Text style={{ color: "white", fontWeight: "bold" }}>Popular</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    gap: 40,
  },
  input: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    width: 350,
    height: 40,
    borderWidth: 0.5,
    borderRadius: 10,
    padding: 10,
  },
  category: {
    width: "100%",
    flexDirection: "column",
    gap: 16,
  },
  titleCategory: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    alignItems: "center",
  },
  frameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30,
  },
  frame: {
    width: 100,
    height: 100,
    borderWidth: 0.5,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  typeContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 30,
  },
  type: {
    width: 100,
    height: 30,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1ebee6",
  },
});

export default DisplayPage;
