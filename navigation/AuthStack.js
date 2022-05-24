import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
import ForgotPasswordScreen from '../pages/ForgetPassword/index';
import SignUpScreen from '../pages/SignUp/index';
import LoginScreen from '../pages/Login/index';
import HomePageScreen from '../pages/HomePage/index';
import AddCryptoCurrency from '../pages/addCryptoCurrency/index';
const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="HomePageScreen">
      <Stack.Screen
        name="HomePageScreen"
        component={HomePageScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AddCryptoCurrency"
        component={AddCryptoCurrency}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ForgetPassword"
        component={ForgotPasswordScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
