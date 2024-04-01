import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import BottomTabNavigator from './BottomTabNavigator'; 
import AccountScreen from '../screens/AccountScreen';
import SettingsScreen from '../screens/SettingsScreen';
import { View, Image, Text, StyleSheet } from 'react-native';

const Drawer = createDrawerNavigator();

const CustomDrawerHeader = ({ navigation }) => {
  const user = {
    profileImage: require('../assets/img_avatar.png'),
    name: "May"
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={user.profileImage} style={styles.profileImage} />
        <Text style={styles.userName}>{user.name}</Text>
      </View>
      <View style={styles.borderLine} />
    </View> 
  );
};

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <CustomDrawerHeader />
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator 
      initialRouteName="Home"
      screenOptions={{
        headerShown: false
      }}
      drawerContent={CustomDrawerContent}
    >
      <Drawer.Screen 
        name="Home" 
        component={BottomTabNavigator}
        options={{
          drawerIcon: () => (
            <Image source={require('../assets/icon_home.png')} style={styles.drawerIcon} />
          ),
        }}
      />
      <Drawer.Screen 
        name="Account" 
        component={AccountScreen} 
        options={{
          drawerIcon: () => (
            <Image source={require('../assets/icon_account.png')} style={styles.drawerIcon} />
          ),
        }}
      />
      <Drawer.Screen 
        name="Settings" 
        component={SettingsScreen} 
        options={{
          drawerIcon: () => (
            <Image source={require('../assets/icon_settings.png')} style={styles.drawerIcon} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginTop: 30,
  },
  profileContainer: {
    alignItems: 'start', // Center items horizontally
  },
  profileImage: {
    width: 48,
    height: 48,
  },
  userName: {
    fontSize: 22,
    fontWeight: 'bold',
    Height: 28,
    marginTop: 16,
    marginBottom: 16
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
  },
  borderLine: {
    borderBottomColor: '#EDEDEF', // Change the color as needed
    borderBottomWidth: 1,
    marginVertical: 8, // Adjust spacing
  },
});

export default DrawerNavigator;
