import { Image, View } from "react-native";
import SuccessPage from "../../../components/SuccessPage";

const Verified = ({ navigation }) => {
  return (
    <View>
      <SuccessPage
        text="Account Verified"
        btnText="Continue"
        onPress={() => {
          navigation.navigate("On Boarding 1");
        }}
      >
        <Image source={require("../../../assets/images/img_6.png")} />
      </SuccessPage>
    </View>
  );
};

export default Verified;
