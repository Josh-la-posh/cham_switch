import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SIZES } from "../constants";

<<<<<<< HEAD:components/HeaderComponent.js
<<<<<<< HEAD
function Header({ image, imageHeader, title, style, imageStyle }) {
=======
function Header({ title, style }) {
>>>>>>> origin
=======
function Header({ image, icon2, imageHeader, title, style, imageStyle }) {
>>>>>>> origin:src/components/HeaderComponent.js
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
<<<<<<< HEAD:components/HeaderComponent.js
<<<<<<< HEAD
          {/* <Image source={require("../assets/icons/arrow_left.png")} /> */}
=======
>>>>>>> origin:src/components/HeaderComponent.js
          <Image source={image} />
        </Pressable>
      </View>
      {imageHeader ? (
        <View style={styles.headerContent}>
          <View style={styles.headerContentTitle}>
            <Text style={style}>{title}</Text>
          </View>
          <View style={styles.headerContentImage}>
            <Image source={imageHeader} style={imageStyle} />
          </View>
        </View>
      ) : (
        <View style={styles.headerContent}>
          <View style={styles.headerContentTitle}>
            <Text style={style}>{title}</Text>
          </View>
        </View>
<<<<<<< HEAD:components/HeaderComponent.js
=======
          <Image source={require("../assets/icons/arrow_left.png")} />
        </Pressable>
      </View>
      <View style={styles.headerContent}>
        <Text style={style}>{title}</Text>
>>>>>>> origin
=======
      )}
      <View style={styles.trash}>
        <Pressable
          style={[styles.icon, styles.icon2]}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Image source={icon2} />
        </Pressable>
>>>>>>> origin:src/components/HeaderComponent.js
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
<<<<<<< HEAD:components/HeaderComponent.js
<<<<<<< HEAD
  headerContent: {
    display: "flex",
    flexDirection: "row",
    // width: SIZES.width,
=======
  trash: {
>>>>>>> origin:src/components/HeaderComponent.js
    position: "absolute",
    right: 20,
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  headerContentTitle: {},
  headerContentImage: {
    height: "90%",
    width: 60,
  },
  imageStyle: {
    width: "100%",
    height: "100%",
<<<<<<< HEAD:components/HeaderComponent.js
    resizeMode: 'contain'
  }
=======
  headerContent: {},
>>>>>>> origin
=======
    resizeMode: "contain",
  },
>>>>>>> origin:src/components/HeaderComponent.js
});
