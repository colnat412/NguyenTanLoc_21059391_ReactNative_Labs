import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, NavigationProp } from "@react-navigation/native";
import HomePage from "./home/home-page";
import ShopsPage from "./shops/shops-page";
import { Image, TouchableOpacity } from "react-native";
import DrinkPage from "./drinks/drink-page";
import CartPage from "./carts/cart-page";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{ title: "", header: () => null }}
        />
        <Stack.Screen
          name="Shops"
          component={ShopsPage}
          options={({ navigation }: { navigation: NavigationProp<any> }) => ({
            title: "Shops Near Me",
            headerTitleStyle: { fontSize: 24, fontWeight: "bold" },
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image
                  style={{ width: 44, height: 44 }}
                  source={require("@/assets/images/back.png")}
                />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity>
                <Image
                  style={{ width: 24, height: 24 }}
                  source={require("@/assets/images/search.png")}
                />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="Drinks"
          component={DrinkPage}
          options={({ navigation }: { navigation: NavigationProp<any> }) => ({
            title: "Drinks",
            headerTitleStyle: { fontSize: 24, fontWeight: "bold" },
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image
                  style={{ width: 44, height: 44 }}
                  source={require("@/assets/images/back.png")}
                />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity>
                <Image
                  style={{ width: 24, height: 24 }}
                  source={require("@/assets/images/search.png")}
                />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="Carts"
          component={CartPage}
          options={({ navigation }: { navigation: NavigationProp<any> }) => ({
            title: "Your orders",
            headerTitleStyle: { fontSize: 24, fontWeight: "bold" },
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image
                  style={{ width: 44, height: 44 }}
                  source={require("@/assets/images/back.png")}
                />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity>
                <Image
                  style={{ width: 24, height: 24 }}
                  source={require("@/assets/images/search.png")}
                />
              </TouchableOpacity>
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
