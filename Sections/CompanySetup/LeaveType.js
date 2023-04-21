import {View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { TextInput } from 'react-native-paper';
import CompanySetupLayout from '../../components/CompanySetupLayout';

const LeaveType = () => {
    const leaveType = ['Sick Leave', 'Casual Leave', 'Annual Leave'];
  return (
      <ScrollView>
          <CompanySetupLayout title='Leave Types'>
              {leaveType.map((leave, index) => {
                  return (
                      <View>
                          <Text style={styles.leaveText}>{leave} <TextInput keyboardType='numeric' style={styles.inputField} /> days pey year</Text>
                      </View>
                  )
              })}
              <Pressable>
                  <Text style={styles.addBtn}>Add another Leave type</Text>
              </Pressable>
          </CompanySetupLayout>
      </ScrollView>
  )
}

export default LeaveType

const styles = StyleSheet.create({
    leaveText: {
        fontSize: 20,
        fontWeight: 700,
        color: '#8B8686',
        marginBottom: 49
    },
    inputField: {
        backgroundColor: 'transparent',
        // height: 50,
        // borderBottomColor: '#000',
        borderBottomWidth: 1,
        borderColor: 'none',
        padding: 0,
        margin: 0
    },
    addBtn: {
        color: '#1B4760',
        fontSize: 20,
        fontWeight: 600,
        textAlign: 'center',
        marginTop: -11
    }
})