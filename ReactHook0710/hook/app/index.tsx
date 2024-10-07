import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./home";
import CounterApp from "./useStateHook/counter-app";
import DiceRoll from "./useStateHook/diceRoll";
import App1 from "./useEffectHook/app";
import MyComponent from "./useEffectHook/myComponent";
import EventListeningComponent from "./useEffectHook/eventListeningComponent";
import MyComponentRef from "./useRef/type-ref";
import TimerComponent from "./useRef/timer-component";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CounterApp" component={CounterApp} />
        <Stack.Screen name="DiceRoll" component={DiceRoll} />
        <Stack.Screen name="App1" component={App1} />
        <Stack.Screen name="MyComponent" component={MyComponent} />
        <Stack.Screen name="TypeRef" component={MyComponentRef} />
        <Stack.Screen name="TimerComponent" component={TimerComponent} />
        <Stack.Screen
          name="EventListeningComponent"
          component={EventListeningComponent}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
