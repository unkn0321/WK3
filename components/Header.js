
import React from 'react';
import { View, Pressable, Image, StyleSheet } from 'react-native';
import { DrawerActions } from '@react-navigation/native';

const Header = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
        <Image source={require('../assets/icon_menu.png')} style={styles.icon} />
      </Pressable>
      <Pressable onPress={() => navigation.navigate('Search')}>
        <Image source={require('../assets/icon_search.png')} style={styles.icon} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: 56,
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    top: 20,
    marginBottom: 32
  },
  icon: {
    width: 24,
    height: 24,
    marginHorizontal: 8,
  },
});

export default Header;