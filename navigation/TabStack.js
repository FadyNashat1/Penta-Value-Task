import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import HomePageScreen from '../pages/HomePage/index';
import colors from '../constant/colors';
import FavouriteContactsScreen from '../pages/FavouriteContactsScreen/index';
import ProfileScreen from '../pages/Profile';
const Tab = createBottomTabNavigator();
const Product = createStackNavigator();
const Cart = createStackNavigator();

const HomeStack = () => {
  return (
    <Product.Navigator initialRouteName={'Home'} headerMode="none">
      <Product.Screen
        options={{unmountOnBlur: true, headerShown: false}}
        name="Home"
        component={HomePageScreen}
      />
      {/* <Product.Screen
        options={{unmountOnBlur: true, headerShown: false}}
        name="Favourite"
        component={FavouriteContactsScreen}
      /> */}
    </Product.Navigator>
  );
};

const SearchStack = () => {
  return (
    <Cart.Navigator headerMode="none">
      <Cart.Screen
        options={{unmountOnBlur: true}}
        name="Favourite"
        component={FavouriteContactsScreen}
      />
    </Cart.Navigator>
  );
};
const ProfileStack = () => {
  return (
    <Cart.Navigator headerMode="none">
      <Cart.Screen
        options={{unmountOnBlur: true}}
        name="Profile"
        component={ProfileScreen}
      />
    </Cart.Navigator>
  );
};
const TabStack = () => {
  return (
    <Tab.Navigator
      headerMode="none"
      tabBarOptions={{
        showLabel: true,
        style: {
          backgroundColor: colors.primary,
          borderTopColor: 'transparent',
        },
      }}>
      <Tab.Screen
        headerMode="none"
        name="Home"
        component={HomeStack}
        options={{
          unmountOnBlur: true,
          tabBarLabel: '',
          tabBarActiveTintColor: colors.primary,
          tabBarIcon: ({focused}) => {
            return (
              <Image
                resizeMode={'contain'}
                source={
                  focused
                    ? require('../assets/home-icon-outline.png')
                    : require('../assets/HomeIcon.png')
                }
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchStack}
        options={{
          headerShown: false,
          unmountOnBlur: true,
          tabBarActiveTintColor: colors.primary,
          tabBarLabel: '',
          tabBarIcon: ({focused}) => {
            return (
              <Image
                resizeMode={'contain'}
                source={
                  focused
                    ? require('../assets/search-icon-outline.png')
                    : require('../assets/SearchIcon.png')
                }
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          headerShown: false,
          unmountOnBlur: true,
          tabBarActiveTintColor: colors.primary,
          tabBarLabel: '',
          tabBarIcon: ({focused}) => {
            return (
              <Image
                resizeMode={'contain'}
                source={
                  focused
                    ? require('../assets/profile-icon-outline.png')
                    : require('../assets/AccountIcon.png')
                }
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabStack;
