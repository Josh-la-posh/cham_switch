import LeaveType from "../../Sections/CompanySetup/LeaveType";
import WorkingDays from "../../Sections/CompanySetup/WorkingDays";

const SettingsPageSreen = (Stack) => {
  return (
    <>
      <Stack.Screen
        name="Settings for Working Days"
        options={{ headerShown: false }}
        component={WorkingDays}
      />
      <Stack.Screen name="Settings for Leave Type" component={LeaveType} />
    </>
  );
};

export default SettingsPageSreen;
