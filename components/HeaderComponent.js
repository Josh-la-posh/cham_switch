import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SIZES } from "../constants";

function Header({ image, imageHeader, title, style, imageStyle }) {
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
          {/* <Image source={require("../assets/icons/arrow_left.png")} /> */}
          <Image source={image} />
        </Pressable>
      </View>
      <View style={styles.headerContent}>
        <View style={styles.headerContentTitle}>
          <Text style={style}>{title}</Text>
        </View>
        <View style={styles.headerContentImage}>
          <Image source={imageHeader} style={imageStyle}/>
        </View>
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
  headerContent: {
    display: "flex",
    flexDirection: "row",
    // width: SIZES.width,
    position: "absolute",
  },
  headerContentTitle: {},
  headerContentImage: {
    position: "absolute",
    left: "-50%",
    height: "100%",
    width: SIZES.width,
    // width: "100%"
  },
  imageStyle: {
    width: "100%",
    height: "100%",
    resizeMode: 'contain'
  }
});
