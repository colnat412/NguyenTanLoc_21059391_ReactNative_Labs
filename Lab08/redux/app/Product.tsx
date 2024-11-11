import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";

import { data } from "../data";

interface ProductItemProps {
  name: string;
  price: number;
  image_url?: any;
}

const ProductItem = ({ name, price }: ProductItemProps) => {
  return (
    <View
      style={{
        backgroundColor: "#f5d3b6",
        flexDirection: "column",
        borderRadius: 6,
        gap: 10,
        padding: 14,
        margin: 10,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        style={{ width: 127, height: 119 }}
        source={require("../assets/bike-hp.png")}
      />
      <Text>{name}</Text>
      <Text>$ {price}</Text>
    </View>
  );
};

const Product = () => {
  return (
    <View
      style={{ justifyContent: "center", alignItems: "center", marginTop: 10 }}
    >
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <ProductItem name={item.name} price={item.price} />
        )}
        numColumns={2}
      />
    </View>
  );
};

export default Product;
