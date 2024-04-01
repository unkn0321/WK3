import { View, Text } from 'react-native'
import React from 'react'

const SettingsScreen = ({navigation}) => {
  return (
    <View>
      <Header navigation={navigation}/>
      <Text>SettingsScreen</Text>
    </View>
  )
}

export default SettingsScreen