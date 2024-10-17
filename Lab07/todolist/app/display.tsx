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

import { Item } from "./list/item-list";
import { NavigationProp, RouteProp } from "@react-navigation/native";
import { useEffect, useState } from "react";

type DisplayPageProps = {
  navigation: NavigationProp<any>;
  route: RouteProp<{ params: { userName: string } }, "params">;
};

const DisplayPage = ({ navigation, route }: DisplayPageProps) => {
  const userName = route.params?.userName;
  const [search, setSearch] = useState<string>("");
  const [data, setData] = useState<{ title: string }[]>([]);
  const [filteredData, setFilteredData] = useState<{ title: string }[]>([]);

  const handleSearch = (text: string) => {
    setSearch(text);
    if (text) {
      const newData = data.filter((item) =>
        item.title.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredData(newData);
    } else {
      setFilteredData(data);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://66651c7fd122c2868e3fcdef.mockapi.io/Jobs"
        );
        const data = await res.json();
        setData(data);
        setFilteredData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [data]);
  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <Image
          style={{ width: 20, height: 20 }}
          source={require("../assets/icon-search.png")}
        ></Image>
        <TextInput
          value={search}
          onChangeText={handleSearch}
          placeholder="Search"
        ></TextInput>
      </View>

      <SafeAreaView style={styles.item}>
        <FlatList
          data={filteredData}
          renderItem={({ item }) => <Item title={item.title} />}
        />
      </SafeAreaView>

      <TouchableOpacity
        onPress={() => navigation.navigate("Add", { userName: userName })}
        style={styles.btnAdd}
      >
        <Image
          style={{ width: 32, height: 32 }}
          source={require("../assets/icon-add.png")}
        ></Image>
      </TouchableOpacity>
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
    paddingTop: 20,
    backgroundColor: "#fff",
  },
  user: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
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
    borderRadius: 6,
    paddingLeft: 10,
    alignItems: "center",
  },
  item: {
    flex: 1,
    flexDirection: "column",
    gap: 100,
  },
  btnAdd: {
    justifyContent: "center",
    alignItems: "center",
    width: 69,
    height: 69,
    borderRadius: 35,
    backgroundColor: "#00BDD6",
    marginBottom: 100,
  },
});

export default DisplayPage;
