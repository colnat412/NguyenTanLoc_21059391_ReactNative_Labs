import { useState } from "react";
import { Button, Text, View } from "react-native";

const randomDiceRoll = () => Math.floor(Math.random() * 6) + 1;

const DiceRoll = () => {
  const [diceRolls, setDiceRolls] = useState<number[]>([]);
  return (
    <View>
      <Button
        title="Roll dice!"
        onPress={() => {
          setDiceRolls([...diceRolls, randomDiceRoll()]);
        }}
      />
      {diceRolls.map((diceRoll, index) => (
        <Text style={{ fontSize: 24 }} key={index}>
          {diceRoll}
        </Text>
      ))}
    </View>
  );
};

export default DiceRoll;
