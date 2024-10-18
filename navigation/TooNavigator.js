import React, { useContext } from 'react';
import { Platform, Text, View, Image } from 'react-native';
import { Context } from '../context/ContextProvider';

import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import Colors from '../constants/Colors';

import AuthScreen from '../screens/Auth/AuthScreen';
import AuthStartScreen from '../screens/Auth/AuthStartScreen';
import AuthSucess from '../screens/Auth/AuthSuccess';
import RecoveryScreen from '../screens/Recovery/RecoveryScreen';
import ValidateCodeScreen from '../screens/Recovery/ValidateCodeScreen';
import ChangePasswordScreen from '../screens/Recovery/ChangePasswordScreen';
import HeaderButtom from '../components/UI/HeaderButton';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

const Stack = createStackNavigator();

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Colors.bg,
    shadowColor: 'transparent',
  },
  headerTitleStyle: {},
  headerBackTitleStyle: {},
  headerTintColor: Colors.white,
  headerTitleAlign: 'center',
};

const Tab =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator()
    : createBottomTabNavigator();

export const RecoveryNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ ...defaultNavOptions }}>
      <Stack.Screen
        name="RecoveryCode"
        component={RecoveryScreen}
        options={({ navigation }) => ({
          headerTitle: '',
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButtom}>
              <Item
                iconName={
                  Platform.OS === 'android'
                    ? 'ios-arrow-back'
                    : 'ios-arrow-back'
                }
                onPress={() => {
                  navigation.goBack();
                }}
                title="Back arrow"
              />
            </HeaderButtons>
          ),
        })}
      />
      <Stack.Screen
        name="ValidateCode"
        component={ValidateCodeScreen}
        options={({ navigation }) => ({
          headerTitle: '',
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButtom}>
              <Item
                iconName={
                  Platform.OS === 'android'
                    ? 'ios-arrow-back'
                    : 'ios-arrow-back'
                }
                onPress={() => {
                  navigation.goBack();
                }}
                title="Back arrow"
              />
            </HeaderButtons>
          ),
        })}
      />
      <Stack.Screen
        name="ChangePassword"
        component={ChangePasswordScreen}
        options={({ navigation }) => ({
          headerTitle: '',
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButtom}>
              <Item
                iconName={
                  Platform.OS === 'android'
                    ? 'ios-arrow-back'
                    : 'ios-arrow-back'
                }
                onPress={() => {
                  navigation.goBack();
                }}
                title="Back arrow"
              />
            </HeaderButtons>
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AuthStart" component={AuthScreen} initialParams={{'registerMode': true}} />
      <Stack.Screen name="Auth" component={AuthScreen} />
      <Stack.Screen name="Success" component={AuthSucess} />
      <Stack.Screen name="Recovery" component={RecoveryNavigator} />
    </Stack.Navigator>
  );
};
