import LeaveType from '../../Sections/CompanySetup/LeaveType';

const SettingsPageSreen = (Stack) => {
  return (
    <>
      <Stack.Screen
        name="Settings for Leave Type"
        options={{ headerShown: false }}
        component={LeaveType}
      />
    </>
  );
};

export default SettingsPageSreen
