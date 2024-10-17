import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import HomePage from "./app/home";
import DisplayPage from "./app/display";
import AddPage from "./app/add";
import User from "./app/headers/user";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{ title: "", header: () => null }}
        ></Stack.Screen>
        <Stack.Screen
          name="Display"
          component={DisplayPage}
          options={({
            navigation,
            route,
          }: {
            navigation: any;
            route: { params: { userName: string } };
          }) => ({
            title: "",
            headerStyle: {
              maxHeight: 500,
            },
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image
                  style={{ width: 30, height: 30 }}
                  source={require("../todolist/assets/go-back.png")}
                ></Image>
              </TouchableOpacity>
            ),
            headerRight: () => <User username={route.params?.userName}></User>,
          })}
        ></Stack.Screen>
        <Stack.Screen
          name="Add"
          component={AddPage}
          options={({
            navigation,
            route,
          }: {
            navigation: any;
            route: { params: { userName: string } };
          }) => ({
            title: "",
            headerStyle: {
              height: 500,
            },
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image
                  style={{ width: 30, height: 30 }}
                  source={require("../todolist/assets/go-back.png")}
                ></Image>
              </TouchableOpacity>
            ),
            headerLeft: () => <User username={route.params?.userName}></User>,
          })}
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
