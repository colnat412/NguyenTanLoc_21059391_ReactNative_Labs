import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { NavigationProp } from "@react-navigation/native";

type AddPageProps = {
  navigation: NavigationProp<any>;
};

const AddPage = ({ navigation }: AddPageProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.user}>
        <Image
          style={styles.imgUser}
          source={require("../assets/user.png")}
        ></Image>
        <View style={styles.infoUser}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Hi Twinkle</Text>
          <Text style={{ fontSize: 14, fontWeight: "bold", opacity: 0.5 }}>
            Have agrate day a head
          </Text>
        </View>
      </View>
      <Text style={{ fontWeight: "bold", fontSize: 32 }}>ADD YOUR JOB</Text>
      <View style={styles.input}>
        <Image
          style={{ width: 20, height: 20 }}
          source={require("../assets/iyj.png")}
        ></Image>
        <TextInput placeholder="Input your job"></TextInput>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Add")}
        style={styles.button}
      >
        <Text style={{ color: "white" }}>FINISH</Text>
      </TouchableOpacity>
      <Image
        style={{ width: 190, height: 170 }}
        source={require("../assets/img-todolist.png")}
      ></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    gap: 50,
    marginTop: 50,
  },
  user: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    marginTop: -150,
  },
  imgUser: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#D9CbF6",
  },
  infoUser: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    flexDirection: "row",
    gap: 10,
    width: 334,
    height: 43,
    borderWidth: 0.5,
    borderRadius: 12,
    paddingLeft: 10,
    alignItems: "center",
  },
  item: {
    flex: 1,
    flexDirection: "column",
    gap: 100,
  },
  button: {
    width: 190,
    height: 44,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00BDD6",
    borderRadius: 12,
  },
});

export default AddPage;
