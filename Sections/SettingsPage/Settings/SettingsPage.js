import { View, Text } from 'react-native'

const SettingsPage = () => {
  const holidays = [
    {
      id: 1,
      name: "Working Days",
    },
    {
      id: 2,
      name: "Leave Types",
    },
    {
      id: 3,
      name: "My Profile",
    },
    {
      id: 4,
      name: "Change Password",
    },
    {
      id: 5,
      name: "Share the App",
    },
    {
      id: 6,
      name: "Logout",
    },
  ];

  return (
    <View>
      {holidays.length ? (
        holidays.map((holiday) => {
          return (
            <View style={{ width: "100%", borderBottomWidth: 2, borderBottomColor: "lightgray", padding: 20}}>
              <View style={{display: "flex", alignItems: "flex-start"}}>
                <Text style={{ fontSize: 25, fontWeight: 600, marginBottom: 10}}>{holiday.name}</Text>
              </View>
            </View>
          );
        })
        ) : (
        <View>
          <Text style={styles.noEmployee}>
            You have no employee on the list.
          </Text>
        </View>
      )}
    </View>
  )
}

export default SettingsPage
