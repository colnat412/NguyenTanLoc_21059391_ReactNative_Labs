import { useEffect, useState } from "react";
import { Button } from "react-native";

const App1 = () => {
  const [count, setCount] = useState(0);
  const countEvery3 = Math.floor(count / 3);
  useEffect(() => {
    console.log(`Count is ${countEvery3}`);
  });
  return (
    <Button
      title={`Increment ${count}`}
      onPress={() => {
        setCount(count + 1);
      }}
    />
  );
};

export default App1;
