import { View, Text } from 'react-native'
import React from 'react'
import { useEffect } from 'react';

export default function SplashScreen({navigation}:any) {
  useEffect(() => {
    setTimeout(() => {
        navigation.navigate("TabNavigationScreens");
    }, 5000);
});

  return (
    <View>
      <Text>Weather</Text>
    </View>
  )
}
