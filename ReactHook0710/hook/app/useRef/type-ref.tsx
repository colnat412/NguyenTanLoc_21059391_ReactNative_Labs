import { useRef } from "react";
import { Button, TextInput, View } from "react-native";

const MyComponentRef = () => {
  const inputRef = useRef<TextInput>(null);
  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  return (
    <View>
      <TextInput ref={inputRef} placeholder="Type here"></TextInput>
      <Button title="Focus Input" onPress={focusInput}></Button>
    </View>
  );
};

export default MyComponentRef;
