import React, { useState } from "react";
import { useEffect } from "react";
import styles from "./SplashScreenStyle";
import { View, Text } from "@gluestack-ui/themed";
import { ApiObject } from "./WeatherApiCredentials";

export default function SplashScreen({ navigation }: any) {

  useEffect(() => { 
    (async () => {
      await getWeatherData({ navigation }); 
    })()
  },[]);
  return (
    <View style={styles.mainSplashScreenView}>
      <Text style={styles.weatherText}>Weather</Text>
    </View>
  );
}

async function getWeatherData({ navigation }: any) {
  const link = `https://api.openweathermap.org/data/2.5/weather?lat=50.88599804710416&lon=20.655638450157436&appid=${ApiObject.key}`;
  const response = await fetch(link);
  console.log(await response.json());
  setTimeout(() => {
    navigation.navigate("TabNavigationScreens");
  }, 5000);
}


