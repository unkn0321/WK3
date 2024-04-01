import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';

function Wishlist() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1,backgroundColor: '#fff' }}>
      <Header navigation={navigation} />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Wishlist</Text>
      </View>
    </View>
  );
}

export default Wishlist;