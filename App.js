import { StatusBar } from "expo-status-bar";
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Page1 from "./Sections/Onboarding/Page1";
import Login_And_Signup from "./Sections/LoginAndSignup/Login_And_Signup";
import ConfirmEmail from "./Sections/LoginAndSignup/Signup/ConfirmEmail";
import Verified from "./Sections/LoginAndSignup/Signup/Verified";
import Onboarding from "./Sections/Onboarding/Onboarding";
import RecoverPassword from "./Sections/LoginAndSignup/PasswordRecovery.js/RecoverPassword";
import PasswordReset from "./Sections/LoginAndSignup/PasswordRecovery.js/PasswordRecovery";
import RecoverPasswordViaReset from "./Sections/LoginAndSignup/PasswordRecovery.js/RecoverPaswordViaReset";
import ResetSuccess from "./Sections/LoginAndSignup/PasswordRecovery.js/ResetSuccess";
import { COLORS } from "./constants";
import CompanySetupPage from "./Sections/CompanySetup/CompanySetupPage";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator>
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
            <Stack.Screen
              name="Login and Signup"
              options={{ headerShown: false }}
              component={Login_And_Signup}
            ></Stack.Screen>
            <Stack.Screen
              name="Confirm Email"
              options={{ headerShown: false }}
              component={ConfirmEmail}
            ></Stack.Screen>
            <Stack.Screen
              name="Verified"
              options={{ headerShown: false }}
              component={Verified}
            ></Stack.Screen>
            <Stack.Screen
              name="Recover Password"
              options={{ headerShown: false }}
              component={RecoverPassword}
            ></Stack.Screen>
            <Stack.Screen
              name="Reset Password"
              options={{ headerShown: false }}
              component={PasswordReset}
            ></Stack.Screen>
            <Stack.Screen
              name="Reset Password Via Reset"
              options={{ headerShown: false }}
              component={RecoverPasswordViaReset}
            ></Stack.Screen>
            <Stack.Screen
              name="Password Reset Successful"
              options={{ headerShown: false }}
              component={ResetSuccess}
            ></Stack.Screen>
            <Stack.Screen
              name="Company Setup"
              options={{ title: 'Set up your Company', headerTintColor: 'transparent', headerTitleStyle: {color: 'white', fontSize: '25%'},  headerStyle: {backgroundColor: COLORS.colorPrimaryDark} }}
              component={CompanySetupPage}
            ></Stack.Screen>
             {/* <Stack.Screen
              name="Leave Type"
              options={{ headerShown: false }}
              component={LeaveType}
            ></Stack.Screen> */}
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </>
  );
}
