import { NavigationProp, RouteProp } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
interface CartItem {
  name: string;
  price: number;
}

interface CartPageProps {
  navigation: NavigationProp<any>;
  route: RouteProp<{ params: { cartItems: CartItem[] } }, "params">;
}

const CartPage = ({ navigation, route }: CartPageProps) => {
  const { cartItems } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.delivery}>
        <View style={styles.info}>
          <Text style={{ fontSize: 16, fontWeight: "bold", color: "white" }}>
            CAFE DELIVERY
          </Text>
          <Text style={{ fontSize: 16, fontWeight: "bold", color: "white" }}>
            Order #18
          </Text>
        </View>
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
          $5
        </Text>
      </View>
      <View style={styles.cafe}>
        <View style={styles.info}>
          <Text style={{ fontSize: 16, fontWeight: "bold", color: "white" }}>
            CAFE
          </Text>
          <Text style={{ fontSize: 16, fontWeight: "bold", color: "white" }}>
            Order #18
          </Text>
        </View>
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
          $25
        </Text>
      </View>
      {cartItems.length > 0 ? (
        cartItems.map((item, index) => (
          <View key={index}>
            <Text>{item.name}</Text>
            <Text>${item.price}</Text>
          </View>
        ))
      ) : (
        <Text style={{ fontSize: 16 }}>Giỏ hàng trống</Text>
      )}
      <TouchableOpacity
        onPress={() => navigation.navigate("Carts")}
        style={styles.button}
      >
        <Text style={{ fontSize: 16, color: "white" }}>PAY NOW</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  delivery: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    width: 347,
    height: 100,
    backgroundColor: "#00BDD6",
    borderRadius: 6,
    paddingRight: 20,
  },
  cafe: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    width: 347,
    height: 100,
    backgroundColor: "#8353E2",
    borderRadius: 6,
    paddingRight: 20,
  },
  info: {
    flexDirection: "column",
    gap: 16,
    padding: 20,
  },
  button: {
    backgroundColor: "#EFB034",
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    width: 350,
    height: 44,
  },
});

export default CartPage;
