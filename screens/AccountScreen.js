import { View, Text } from 'react-native'
import React from 'react'

const AcountScreen = ({navigation}) => {
  return (
    <View>
      <Header navigation={navigation}/>
      <Text>AcountScreen</Text>
    </View>
  )
}

export default AcountScreen