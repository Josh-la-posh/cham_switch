import OfficialHolidays from '../../Sections/SettingsPage/Holidays/OfficialHolidays';
import OfficialHolidaysSuccessful from '../../Sections/SettingsPage/Holidays/OfficialHolidaysSuccessful';
import PushBroadcast from '../../Sections/SettingsPage/PushBroadcast';
import PushBroadcastSuccessful from '../../Sections/SettingsPage/PushBroadcastSuccessful';
import SettingsPage from '../../Sections/SettingsPage/Settings/SettingsPage';

const SettingsSreen = (Stack) => {
  return (
    <>
      <Stack.Screen
        name="Push Broadcast"
        options={{ headerShown: false }}
        component={PushBroadcast}
      />
      <Stack.Screen
        name="Sent Successfully"
        options={{ headerShown: false }}
        component={PushBroadcastSuccessful}
      />
      <Stack.Screen
        name="Official Holidays Home"
        options={{
          title: "Official Holidays",
          headerTintColor: "transparent",
          headerTitleStyle: { color: "black", fontSize: "25%" },
          headerStyle: 
            { backgroundColor: "white" },
        }}
        component={OfficialHolidays}
      />
      <Stack.Screen
        name="Official Holidays Successful"
        options={{ headerShown: false }}
        component={OfficialHolidaysSuccessful}
      />
       <Stack.Screen
        name="Settings Page"
        options={{ 
          title: "Settings",
          headerTintColor: "transparent",
          headerTitleStyle: { color: "black", fontSize: "25%" },
          headerStyle: 
            { backgroundColor: "white" },
         }}
        component={SettingsPage}
      />
    </>
  );
};

export default SettingsSreen
