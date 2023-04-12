import { View, Text, Image, StyleSheet } from "react-native";
import PrimaryButton from "../../components/UI/PrimaryButton";

const Page3 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require("../../assets/images/img_3.png")} />
      </View>
      <Text style={styles.text}>Communicate{"\n"} with{"\n"} Management</Text>
      <View style={styles.btnContainer}>
        <PrimaryButton onPress={() => {navigation.navigate('On Boarding 4')}} btnStyle={styles.btnStyle}>
          <Text>Next</Text>
        </PrimaryButton>
      </View>
      <Text>Skip</Text>
    </View>
  );
};

export default Page3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 123,
    alignItems: "center",
  },
  imageContainer: {
    height: 360,

  },
  text: {
      fontSize: 40,
      textAlign: 'center',
      fontWeight: 400,
      marginBottom: 50,
      marginTop: 48
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
