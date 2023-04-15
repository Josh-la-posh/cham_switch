import {View, Text, StyleSheet } from 'react-native';
import CompanySetupLayout from '../../components/CompanySetupLayout';

const LeaveType = () => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  return (
      <View>
          <CompanySetupLayout title='Leave Types'>

          </CompanySetupLayout>
      </View>
  )
}

export default LeaveType

const styles = StyleSheet.create({
    list: {
        flexDirection: 'column'
    },
})