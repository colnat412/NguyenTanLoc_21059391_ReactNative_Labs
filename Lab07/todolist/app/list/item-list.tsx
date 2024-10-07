import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface ItemProps {
  title: string;
}

export const Item = ({ title }: ItemProps) => (
  <View style={[styles.container, { marginTop: 10 }]}>
    <TouchableOpacity>
      <Image
        style={styles.img}
        source={require("../../assets/icon-check.png")}
      ></Image>
    </TouchableOpacity>
    <Text style={{ fontWeight: "bold" }}>{title}</Text>
    <TouchableOpacity>
      <Image
        style={styles.img}
        source={require("../../assets/icon-edit.png")}
      ></Image>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 335,
    height: 48,
    backgroundColor: "#d8d8d8",
    borderRadius: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  img: {
    width: 24,
    height: 24,
  },
});
