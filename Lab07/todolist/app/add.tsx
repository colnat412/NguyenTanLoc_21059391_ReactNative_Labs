import {
  Alert,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { NavigationProp, RouteProp } from "@react-navigation/native";
import { useState } from "react";

type AddPageProps = {
  navigation: NavigationProp<any>;
  route: RouteProp<{ params: { userName: string } }, "params">;
};

const AddPage = ({ navigation, route }: AddPageProps) => {
  const userName = route.params?.userName;
  const [job, setJob] = useState<string>("");

  const createJob = async () => {
    try {
      const res = await fetch(
        "https://66651c7fd122c2868e3fcdef.mockapi.io/Jobs",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title: job }),
        }
      );
      if (res.ok) {
        navigation.navigate("Display");
      } else Alert.alert("Error", "Failed to add job");
    } catch (error) {
      Alert.alert("Error", "An error occurred");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: "bold", fontSize: 32 }}>ADD YOUR JOB</Text>
      <View style={styles.input}>
        <Image
          style={{ width: 20, height: 20 }}
          source={require("../assets/iyj.png")}
        ></Image>
        <TextInput
          value={job}
          onChangeText={setJob}
          placeholder="Input your job"
        ></TextInput>
      </View>
      <TouchableOpacity onPress={() => createJob()} style={styles.button}>
        <Text style={{ color: "white" }}>FINISH</Text>
        <Image
          style={{
            width: 20,
            height: 20,
            transform: [{ scaleX: -1 }],
            tintColor: "white",
          }}
          source={require("../assets/go-back.png")}
        ></Image>
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
    paddingTop: 50,
    flexDirection: "column",
    gap: 50,
    backgroundColor: "#fff",
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
    flexDirection: "row",
    gap: 10,
  },
});

export default AddPage;
