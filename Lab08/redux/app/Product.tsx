import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";

import { data } from "../data";
import { useNavigation } from "@react-navigation/native";

interface ProductItemProps {
  name: string;
  price: number;
  image_url?: any;
}

const ProductItem = ({ name, price }: ProductItemProps) => {
  const navigation = useNavigation<any>();
  const handleNavigation = () => {
    navigation.navigate("ProductDetails");
  };
  return (
    <TouchableOpacity
      onPress={handleNavigation}
      style={{
        backgroundColor: "#f5d3b6",
        flexDirection: "column",
        borderRadius: 6,
        gap: 10,
        padding: 20,
        margin: 10,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        style={{ width: 127, height: 119 }}
        source={require("../assets/bike-hp.png")}
      />
      <Text style={{ fontWeight: "bold" }}>{name}</Text>
      <Text style={{ fontWeight: "bold" }}>$ {price}</Text>
    </TouchableOpacity>
  );
};

const Product = () => {
  return (
    <View style={{ marginTop: 40, gap: 20 }}>
      <View style={{ marginLeft: 26 }}>
        <Text style={{ fontWeight: "bold", fontSize: 16, color: "red" }}>
          The world’s Best Bike
        </Text>
      </View>
      <View
        style={{
          gap: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={{ flexDirection: "row", gap: 30 }}>
          <TouchableOpacity
            style={{
              borderWidth: 0.5,
              width: 90,
              padding: 3,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 6,
            }}
          >
            <Text style={{ color: "red" }}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderWidth: 0.5,
              width: 90,
              padding: 3,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 6,
            }}
          >
            <Text>Roadbike</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderWidth: 0.5,
              width: 90,
              padding: 3,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 6,
            }}
          >
            <Text>Mountain</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <ProductItem name={item.name} price={item.price} />
          )}
          numColumns={2}
        />
      </View>
    </View>
  );
};

export default Product;
