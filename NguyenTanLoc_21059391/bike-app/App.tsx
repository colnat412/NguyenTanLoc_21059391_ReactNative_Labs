import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";
import HomePage from "./app/HomePage";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="HomePage">
    //     <Stack.Screen name="HomePage" component={HomePage}></Stack.Screen>
    //   </Stack.Navigator>
    // </NavigationContainer>
    <HomePage />
  );
}
