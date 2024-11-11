import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";
import HomePage from "./app/HomePage";
import Product from "./app/Product";
import ProductDetails from "./app/ProductDetails";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="ProductDetails">
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{ title: "", header: () => null }}
        ></Stack.Screen>
        <Stack.Screen
          name="Product"
          component={Product}
          options={{ title: "", header: () => null }}
        ></Stack.Screen>
        <Stack.Screen
          name="ProductDetails"
          component={ProductDetails}
          options={{ title: "", header: () => null }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
