import { NavigationProp } from "@react-navigation/native";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface ShopItemProps {
  name: string;
  address: string;
  time: string;
  status: number;
  navigation: NavigationProp<any>;
}

const ShopItem = ({
  name,
  address,
  time,
  status,
  navigation,
}: ShopItemProps) => {
  const namePage = status == 1 ? "Drinks" : "Shops";
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(namePage)}
      style={[styles.container, { marginTop: 10 }]}
    >
      <Image
        style={{ width: 370, height: 114 }}
        source={require("@/assets/images/home-1.png")}
      />
      <View style={styles.info}>
        <View style={styles.title}>
          {status == 1 ? (
            <View style={styles.status}>
              <Image
                style={{ width: 18, height: 18 }}
                source={require("@/assets/images/check.png")}
              />
              <Text style={{ fontSize: 14, color: "#1DD75B" }}>
                Accepting Orders
              </Text>
            </View>
          ) : (
            <View style={styles.status}>
              <Image
                style={{ width: 18, height: 18 }}
                source={require("@/assets/images/lock.png")}
              />
              <Text style={{ fontSize: 14, color: "red" }}>
                Tempory Unavailable
              </Text>
            </View>
          )}

          <View style={styles.time}>
            <Image
              style={{ width: 18, height: 18 }}
              source={require("@/assets/images/clock.png")}
            />
            <Text style={{ color: "red" }}>{time}</Text>
          </View>
          <Image
            style={{ width: 14, height: 18 }}
            source={require("@/assets/images/location.png")}
          />
        </View>
        <View style={styles.name}>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>{name}</Text>
          <Text style={{ fontSize: 14, fontWeight: "bold", opacity: 0.5 }}>
            {address}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    width: "90%",
    marginLeft: 20,
  },
  info: {
    flexDirection: "column",
    gap: 10,
  },
  title: {
    flexDirection: "row",
    gap: 25,
    justifyContent: "space-around",
    alignItems: "center",
  },
  name: {
    flexDirection: "column",
    gap: 5,
  },
  status: {
    flexDirection: "row",
    gap: 10,
    backgroundColor: "#F1F1F1",
    padding: 5,
    borderRadius: 10,
  },
  time: {
    flexDirection: "row",
    gap: 10,
    backgroundColor: "#F1F1F1",
    padding: 5,
    borderRadius: 10,
  },
});
export default ShopItem;
