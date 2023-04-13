import { View, Image } from "react-native";
import OnboardingLayout from "./OnboardingLayout";

const Page2 = () => {
  return (
    <View>
      <OnboardingLayout text="Request and track your leave.">
        <Image source={require("../assets/images/img_2.png")} />
      </OnboardingLayout>
    </View>
  );
};

export default Page2;
