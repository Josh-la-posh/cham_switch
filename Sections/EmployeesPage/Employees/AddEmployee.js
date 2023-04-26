import {View, Text} from 'react-native';
import AccountPage from '../../../components/AccountPage';
import Input from '../../../components/UI/input';
import PrimaryButton from '../../../components/UI/PrimaryButton';

const AddEmployee = () => {
  return (
    <View>
        <AccountPage title='Add Employee'>
          <View>
            <View>
              <Input />
            </View>
            <View>
              <Input />
            </View>
            <View>
              <Input />
            </View>
            <View>
              <Input />
            </View>
            <View>
              <Input />
            </View>
            <View>
              <Input />
            </View>
          </View>
          <PrimaryButton>Invite Employee</PrimaryButton>
        </AccountPage>
    </View>
  )
}

export default AddEmployee