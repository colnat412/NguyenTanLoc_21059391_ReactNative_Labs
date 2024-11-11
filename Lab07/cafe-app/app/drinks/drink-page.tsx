import {
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import data from "@/data/drinks";
import DrinkItem from "@/components/drink-item";
import { NavigationProp } from "@react-navigation/native";
import { useState } from "react";

interface DrinkPageProps {
  navigation: NavigationProp<any>;
}

const DrinkPage = ({ navigation }: DrinkPageProps) => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={[styles.list]}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <DrinkItem name={item.name} price={item.price} />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </SafeAreaView>
      <TouchableOpacity
        onPress={() => navigation.navigate("Carts")}
        style={styles.button}
      >
        <Text style={{ fontSize: 16, color: "white" }}>GO TO CART</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    gap: 20,
  },
  list: {
    flex: 1,
    flexDirection: "column",
    gap: 20,
    backgroundColor: "#fff",
    marginTop: 0,
  },
  button: {
    backgroundColor: "#EFB034",
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    width: 312,
    height: 50,
    marginLeft: 50,
    marginBottom: 20,
  },
});

export default DrinkPage;
