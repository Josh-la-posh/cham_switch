import { View, Text, Image, StyleSheet } from "react-native";
import PrimaryButton from "../../components/UI/PrimaryButton";

const Page1 = ({navigation}) => {

  

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require("../../assets/images/img_1.png")} />
      </View>
      <View style={styles.btnContainer}>
        <PrimaryButton onPress={() => {navigation.navigate('Onboarding')}} btnStyle={styles.btnStyle}>
          <Text>Login</Text>
        </PrimaryButton>
      </View>
      <Text>Forgot password? Reset.</Text>
    </View>
  );
};

export default Page1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 14,
    paddingTop: 198,
    alignItems: "center",
  },
  imageContainer: {
    width: 400,
    height: 400,
  },
  btnContainer: {
    borderRadius: 19,
    marginBottom: 32,
    overflow: "hidden",
  },
  btnStyle: {
    width: 236,
    height: 75,
  },
});
