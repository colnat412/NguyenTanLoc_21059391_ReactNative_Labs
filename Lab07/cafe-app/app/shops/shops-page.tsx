import ShopItem from "@/components/shop-item";
import { NavigationProp } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface Shop {
  id: string;
  name: string;
  address: string;
  time: string;
  status: number;
}
interface Navigation {
  navigation: NavigationProp<any>;
}

const ShopsPage = ({ navigation }: Navigation) => {
  const [data, setData] = useState<Shop[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://66651c7fd122c2868e3fcdef.mockapi.io/Shops"
        );
        const data = await res.json();
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <ShopItem
            name={item.name}
            address={item.address}
            time={item.time}
            status={item.status}
            navigation={navigation}
          />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 50,
  },
});

export default ShopsPage;
