import { NavigationProp, RouteProp } from "@react-navigation/native";
import { Image, StyleSheet, Text, View } from "react-native";

interface UserProps {
  username: string;
}

const User = ({ username }: UserProps) => {
  return (
    <View style={styles.user}>
      <Image
        style={styles.imgUser}
        source={require("../../assets/user.png")}
      ></Image>
      <View style={styles.infoUser}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Hi {username} </Text>
        <Text style={{ fontSize: 14, fontWeight: "bold", opacity: 0.5 }}>
          Have agrate day a head
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  user: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    backgroundColor: "#fff",
  },
  imgUser: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#D9CbF6",
  },
  infoUser: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default User;
