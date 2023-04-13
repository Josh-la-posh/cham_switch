import { StatusBar } from "expo-status-bar";
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Page1 from "./Sections/Onboarding/Page1";
import Login_And_Signup from "./Sections/LoginAndSignup/Login_And_Signup";
import ConfirmEmail from "./Sections/LoginAndSignup/Signup/ConfirmEmail";
import Verified from "./Sections/LoginAndSignup/Signup/Verified";
import Onboarding from "./Sections/Onboarding/Onboarding";

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
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </>
  );
}
