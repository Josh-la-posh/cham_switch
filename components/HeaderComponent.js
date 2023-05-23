import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SIZES } from "../constants";

function Header({ title, style }) {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <View style={styles.backIcon}>
        <Pressable
          style={styles.icon}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Image source={require("../assets/icons/arrow_left.png")} />
        </Pressable>
      </View>
      <View style={styles.headerContent}>
        <Text style={style}>{title}</Text>
      </View>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  header: {
    width: SIZES.width,
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "-12%",
    marginBottom: "5%",
    position: "relative",
  },
  backIcon: {
    position: "absolute",
    left: 10,
  },
  headerContent: {},
});
