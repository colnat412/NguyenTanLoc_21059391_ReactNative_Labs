import { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface ShopItemProps {
  name: string;
  price: number;
}

const DrinkItem = ({ name, price }: ShopItemProps) => {
  const [count, setCount] = useState(0);

  const handlePlusCount = () => {
    const newCount = count + 1;
    setCount(newCount);
  };

  const handleMinusCount = () => {
    if (count > 0) {
      const newCount = count - 1;
      setCount(newCount);
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", gap: 10 }}>
        <Image
          style={{ width: 60, height: 60 }}
          source={require(`@/assets/images/cafe.png`)}
        />
        <View style={styles.info}>
          <Text style={{ fontSize: 16 }}>{name}</Text>
          <View style={styles.price}>
            <Image
              style={{ width: 12, height: 12 }}
              source={require(`@/assets/images/price.png`)}
            />
            <Text style={{ fontSize: 12 }}>${price}</Text>
          </View>
        </View>
      </View>
      <View style={styles.btn}>
        <TouchableOpacity onPress={handleMinusCount}>
          <Image
            style={{ width: 20, height: 20 }}
            source={require("@/assets/images/minus.png")}
          />
        </TouchableOpacity>
        <Text>{count}</Text>
        <TouchableOpacity onPress={handlePlusCount}>
          <Image
            style={{ width: 20, height: 20 }}
            source={require("@/assets/images/plus.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 16,
    padding: 5,
    borderWidth: 0.2,
    backgroundColor: "#fff",
  },
  info: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
  price: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  btn: {
    flexDirection: "row",
    gap: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default DrinkItem;
