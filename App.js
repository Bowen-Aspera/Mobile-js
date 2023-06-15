import { StyleSheet, useState } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/login';
import Registration from './screens/authentication/registration';
import Profile from './screens/profile';

const Stack = createStackNavigator(); 

export default function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName = "Login">
      <Stack.Screen name= "Login" component ={Login}/>
      <Stack.Screen name= "Register" component = {Registration}/>
      <Stack.Screen name= "Profile" component= {Profile}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});**/
