import { Image, Text, TouchableOpacity, View } from "react-native";

const ProductDetails = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", margin: 10, gap: 30 }}>
      <View
        style={{ backgroundColor: "#f5d3b6", padding: 40, borderRadius: 19 }}
      >
        <Image
          style={{ width: 297, height: 276 }}
          source={require("../assets/bike-hp.png")}
        />
      </View>
      <View style={{ gap: 10 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Pina Mountain</Text>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <Text style={{ fontSize: 18, opacity: 0.5 }}>15% OFF I 350$</Text>
          <Text style={{ fontSize: 18, textDecorationLine: "line-through" }}>
            449$
          </Text>
        </View>
        <View style={{ gap: 15 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>Description</Text>
          <Text style={{ fontSize: 18, opacity: 0.5 }}>
            It is a very important form of writing as we write almost everything
            in paragraphs, be it an answer, essay, story, emails, etc.
          </Text>
        </View>
      </View>
      <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
        <Image
          style={{ width: 30, height: 30 }}
          source={require("../assets/heart.png")}
        />
        <TouchableOpacity
          style={{
            backgroundColor: "red",
            padding: 20,
            width: 340,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 30,
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>
            Add to cart
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductDetails;
