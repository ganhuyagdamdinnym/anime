import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, View, Text, Image } from "react-native";
import { styles } from "@/assets/styles/userScreenStyle";
import { LinearGradient } from "expo-linear-gradient";
export default function TabTwoScreen() {
  return (
    <View style={styles.bodyContainer}>
      <Image
        style={{
          width: 400,
          height: 400,
          backgroundColor: "red",
          borderRadius: 1000,
        }}
        source={{ uri: "./assets/images/naruto.png" }}
      />
      <View style={{ width: "100%", height: 100 }}>
        <LinearGradient
          colors={[
            "transparent",
            "#040B1C",
            "#040B1C",
            "#040B1C",
            "#040B1C",
            "#040B1C",
            "#040B1C",
            "#040B1C",
            "#040B1C",
            "#040B1C",
            "#040B1C",
            "#040B1C",
          ]}
          style={{
            height: 100,
            position: "absolute",
            width: "100%",
            top: -20,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={styles.name}>hello world</Text>
        </LinearGradient>
      </View>
    </View>
  );
}
