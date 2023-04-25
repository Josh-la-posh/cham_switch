import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnboardingScreen from "./Navigations/OnboardingScreen";
import LoginAndSignupScreen from "./Navigations/LoginAndSignupScreen";
import CompanySetupScreen from "./Navigations/CompanySetupScreen";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator>
            {OnboardingScreen(Stack)}
            {LoginAndSignupScreen(Stack)}
            {CompanySetupScreen(Stack)}
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </>
  );
}
