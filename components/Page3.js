import { View, Image } from "react-native";
import OnboardingLayout from "./OnboardingLayout";

const Page3 = () => {
  return (
    <View>
      <OnboardingLayout text="Communicate with Management">
        <Image source={require("../assets/images/img_3.png")} />
      </OnboardingLayout>
    </View>
  );
};

export default Page3;
