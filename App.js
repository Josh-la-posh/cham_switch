import { StatusBar } from "expo-status-bar";
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Page1 from "./Sections/Onboarding/Page1";
import Page2 from "./Sections/Onboarding/Page2";
import Page3 from "./Sections/Onboarding/Page3";
import Page4 from "./Sections/Onboarding/Page4";
import Login from "./Sections/LoginAndSignup/Login/Login";
import SignUp from "./Sections/LoginAndSignup/Signup/SignUp";
import Login_And_Signup from "./Sections/LoginAndSignup/Login_And_Signup";

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
              name="On Boarding 2"
              options={{ headerShown: false }}
              component={Page2}
            ></Stack.Screen>
            <Stack.Screen
              name="On Boarding 3"
              options={{ headerShown: false }}
              component={Page3}
            ></Stack.Screen>
            <Stack.Screen
              name="On Boarding 4"
              options={{ headerShown: false }}
              component={Page4}
            ></Stack.Screen>
            <Stack.Screen
              name="Login and Signup"
              options={{ headerShown: false }}
              component={Login_And_Signup}
            ></Stack.Screen>
            <Stack.Screen
              name="Login"
              options={{ headerShown: false }}
              component={Login}
            ></Stack.Screen>
            <Stack.Screen
              name="Sign Up"
              options={{ headerShown: false }}
              component={SignUp}
            ></Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </>
  );
}
