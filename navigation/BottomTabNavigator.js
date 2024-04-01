import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Image } from 'react-native';
import Home from '../screens/HomeScreen';
import Wishlist from '../screens/WishlistScreen';
import Mybooks from '../screens/MybooksScreen';
import BookDescriptionScreen from '../screens/BookDescriptionScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = require('../assets/icon_home.png');
          } else if (route.name === 'Wishlist') {
            iconName = require('../assets/icon_nav_bookmark.png');
          } else if (route.name === 'Mybooks') {
            iconName = require('../assets/icon_mybook.png');
          }

          return <Image source={iconName} style={{ width: size, height: size, tintColor: color }} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#6200EE',
        inactiveTintColor: '#666666',
        style: { width: 360, height: 56, top: 702 },
      }}
    >
      <Tab.Screen name="Home" component={Home}  options={{ headerShown: false }}/>
      <Tab.Screen name="Wishlist" component={Wishlist} options={{ headerShown: false }}/>
      <Tab.Screen name="Mybooks" component={Mybooks} options={{ headerShown: false }}/>
    </Tab.Navigator>
  );
};

const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="BookDescription" component={BookDescriptionScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
