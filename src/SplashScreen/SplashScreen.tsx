import React, { useState } from "react";
import { useEffect } from "react";
import styles from "./SplashScreenStyle";
import { View, Text } from "@gluestack-ui/themed";
import { ApiObject } from "../api.config";
import * as Location from 'expo-location';

export default function SplashScreen({ navigation }: any) {

  useEffect(() => { 
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      if(location)
      await getWeatherData({ navigation }, {...location}); // to jest kopia obiektu
    })()
  },[]);
  return (
    <View style={styles.mainSplashScreenView}>
      <Text style={styles.weatherText}>Weather</Text>
    </View>
  );
}

async function getWeatherData({ navigation }: any, location:any) {
  const link = `https://api.openweathermap.org/data/2.5/weather?lat=${location.coords.latitude}&lon=${location.coords.longitude}&appid=${ApiObject.key}&units=metric`;
  const response = await fetch(link);
  const data = await response.json();
  setTimeout(() => {
    navigation.navigate("TabNavigationScreens",{weatherData: data});
  }, 5000);
}