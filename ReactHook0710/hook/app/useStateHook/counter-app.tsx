import { useState } from "react";
import { Button, Text, View } from "react-native";

import { NavigationProp } from "@react-navigation/native";

const CounterApp = () => {
  const [count, setCount] = useState(0);
  return (
    <View style={{ flexDirection: "column", gap: 10, padding: 20 }}>
      <Text>Count: {count}</Text>
      <Button title="Increase" onPress={() => setCount(count + 1)} />
      <Button title="Reset" onPress={() => setCount(0)} />
    </View>
  );
};

export default CounterApp;
