import { View, Image } from "react-native";
import OnboardingLayout from "./OnboardingLayout";

const Page4 = () => {
  return (
    <View>
      <OnboardingLayout text="File a complaint">
        <Image source={require("../assets/images/img_4.png")} />
      </OnboardingLayout>
    </View>
  );
};

export default Page4;
