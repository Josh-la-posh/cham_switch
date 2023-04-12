import { StatusBar } from 'expo-status-bar';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Page1 from './Sections/Onboarding/page1';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Screen name='On Boarding 1' options={{headerShown: false}} component={Page1}></Stack.Screen>
        </NavigationContainer>
      </PaperProvider>
    </>
  );
}