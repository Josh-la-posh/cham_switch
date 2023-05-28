<<<<<<< HEAD
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
import CalendarScreen from "./Navigations/StackNavigation/CalendarScreen";
import CalendarScreen from "./Navigations/StackNavigation/CalendarScreen";
=======
import { AuthProvider } from "./src/context/AuthContext";
import AppNav from "./src/Navigations/AppNav";
>>>>>>> origin

export default function App() {
  return (
    <>
      <AuthProvider>
        <AppNav />
      </AuthProvider>
    </>
  );
}
