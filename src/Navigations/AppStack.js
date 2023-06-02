import React, { useContext } from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CompanySetupScreen from "./StackNavigation/CompanySetupScreen";
import HomeScreen from "./StackNavigation/HomeScreen";
import EmployeeScreen from "./StackNavigation/EmployeeSecreen";
import SettingsSreen from "./StackNavigation/SettingsSreen";
import SettingsPageSreen from "./StackNavigation/SettingsPageSreen";
import CalendarScreen from "./StackNavigation/CalendarScreen";
import { AuthContext } from "../context/AuthContext";

const AppStack = () => {
  const { role } = useContext(AuthContext);
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: { backgroundColor: "#fff" },
      }}
    >
      {role === "hr" && CompanySetupScreen(Stack)}
      {HomeScreen(Stack)}
      {CalendarScreen(Stack)}
      {EmployeeScreen(Stack)}
      {SettingsSreen(Stack)}
      {SettingsPageSreen(Stack)}
    </Stack.Navigator>
  );
};

export default AppStack;
