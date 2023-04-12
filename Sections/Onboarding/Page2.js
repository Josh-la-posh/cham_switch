import { View, Text, Image, StyleSheet } from "react-native";
import PrimaryButton from "../../components/UI/PrimaryButton";

const Page2 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require("../../assets/images/img_2.png")} />
      </View>
      <Text style={styles.text}>Request and{"\n"} track your leave.</Text>
      <View style={styles.btnContainer}>
        <PrimaryButton onPress={() => {navigation.navigate('On Boarding 3')}} btnStyle={styles.btnStyle}>
          <Text>Next</Text>
        </PrimaryButton>
      </View>
      <Text>Skip</Text>
    </View>
  );
};

export default Page2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: 47,
    paddingTop: 116,
    alignItems: "center",
  },
  imageContainer: {
    height: 369,

  },
  text: {
      fontSize: 40,
      textAlign: 'center',
      fontWeight: 400,
      marginBottom: 85,
      marginTop: 46
  },
  btnContainer: {
    borderRadius: 19,
    marginBottom: 38,
    overflow: "hidden",
  },
  btnStyle: {
    width: 236,
    height: 75,
  },
});
