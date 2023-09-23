import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserLoginScreen from './app/screen/auth/UserLoginScreen';
import { Header } from '@react-navigation/elements'; // Import Header component

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: (props) => <Header {...props} />, // Use the Header component
        }}
      >
        <Stack.Screen
          name="UserLogin"
          component={UserLoginScreen}
          options={{ title: 'Login' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
