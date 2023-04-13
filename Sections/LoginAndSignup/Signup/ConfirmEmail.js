import { View } from "react-native";
import AcountConfirmationPage from "../../../components/AcountConfirmationPage";

const ConfirmEmail = ({navigation}) => {
  return (
    <View>
      <AcountConfirmationPage
        header="Confirm your email address to get started."
        text="Click on the button below to confirm email."
        note="If you did not request this email, Kindly ignore"
        btnText="Confirm Email"
        onPress= {() => navigation.navigate('Verified')}
      />
    </View>
  )
};

export default ConfirmEmail;
