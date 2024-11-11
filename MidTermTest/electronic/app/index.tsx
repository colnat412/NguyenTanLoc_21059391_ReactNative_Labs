import { createStackNavigator } from "@react-navigation/stack";
import DisplayPage from "./display";
import LoginPage from "./login";
import DisplayHeaderRight from "./header/display-header-right";

const Stack = createStackNavigator();

const App = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginPage}
        options={{ title: "" }}
      ></Stack.Screen>
      <Stack.Screen
        name="Display"
        component={DisplayPage}
        options={{
          title: "Electronics",
          headerRight: () => <DisplayHeaderRight />,
        }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default App;
