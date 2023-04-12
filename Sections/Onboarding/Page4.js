import { View, Text, Image, StyleSheet } from "react-native";
import PrimaryButton from "../../components/UI/PrimaryButton";

const Page4 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require("../../assets/images/img_4.png")} />
      </View>
      <Text style={styles.text}>File a complaint</Text>
      <View style={styles.btnContainer}>
        <PrimaryButton onPress={() => {navigation.navigate('On Boarding 1')}} btnStyle={styles.btnStyle}>
          <Text>Done</Text>
        </PrimaryButton>
      </View>
    </View>
  );
};

export default Page4;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 98,
    alignItems: "center",
  },
  imageContainer: {
    height: 369,

  },
  text: {
      fontSize: 40,
      textAlign: 'center',
      fontWeight: 400,
      marginBottom: 135,
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
