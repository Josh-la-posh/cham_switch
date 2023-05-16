import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnboardingScreen from "./Navigations/StackNavigation/OnboardingScreen";
import LoginAndSignupScreen from "./Navigations/StackNavigation/LoginAndSignupScreen";
import CompanySetupScreen from "./Navigations/StackNavigation/CompanySetupScreen";
import HomeScreen from "./Navigations/StackNavigation/HomeScreen";
import EmployeeScreen from "./Navigations/StackNavigation/EmployeeSecreen";
import SettingsSreen from "./Navigations/StackNavigation/SettingsSreen";
import SettingsPageSreen from "./Navigations/StackNavigation/SettingsPageSreen";


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
            {HomeScreen(Stack)}
            {EmployeeScreen(Stack)}
            {SettingsSreen(Stack)}
            {SettingsPageSreen(Stack)}
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </>
  );
}
