import Page1 from "../Sections/Onboarding/Page1";
import Onboarding from "../Sections/Onboarding/Onboarding";

const OnboardingScreen = (Stack) => {
  return (
    <>
      <Stack.Screen
        name="On Boarding 1"
        options={{ headerShown: false }}
        component={Page1}
      ></Stack.Screen>
      <Stack.Screen
        name="Onboarding"
        options={{ headerShown: false }}
        component={Onboarding}
      ></Stack.Screen>
    </>
  );
};

export default OnboardingScreen;
