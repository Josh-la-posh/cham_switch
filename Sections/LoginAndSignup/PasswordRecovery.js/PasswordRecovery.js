import { View } from "react-native";
import AcountConfirmationPage from "../../../components/AcountConfirmationPage";

const PasswordReset = () => {
  return (
    <View>
      <AcountConfirmationPage
        header="Password Reset"
        text="Click on the button below to confirm email."
        note="If you did not request a password, you can ifnore this email."
        btnText='Reset your password'
      />
    </View>
  );
};

export default PasswordReset;
