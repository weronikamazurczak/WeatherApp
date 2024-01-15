import React, { useState } from "react";
import { useEffect } from "react";
import styles from "./SplashScreenStyle";
import { View, Text } from "@gluestack-ui/themed";
import { ApiObject } from "../api.config";
import * as Location from "expo-location";

export default function SplashScreen({ navigation }: any) {
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      if (location) await getWeatherData({ navigation }, { ...location }); // to jest kopia obiektu
    })();
  }, []);
  return (
    <View style={styles.mainSplashScreenView}>
      <Text style={styles.weatherText}>Weather</Text>
    </View>
  );
}

async function getWeatherData({ navigation }: any, location: any) {
  const link = `https://api.openweathermap.org/data/2.5/weather?lat=${location.coords.latitude}&lon=${location.coords.longitude}&appid=${ApiObject.key}&units=metric`;
  const response = await fetch(link);
  const weatherDataMain = await response.json();
  await getForecastForNextDays({ ...location }, navigation, weatherDataMain);
}

async function getForecastForNextDays(
  location: any,
  navigation: any,
  weatherDataMain: any
) {
  const link = `https://api.openweathermap.org/data/2.5/forecast?lat=${location.coords.latitude}&lon=${location.coords.longitude}&appid=${ApiObject.key}&units=metric`;
  const response = await fetch(link);
  const weatherDataForNextDays = await response.json();
  console.log("to jest przed");
  if (weatherDataForNextDays) {
    console.log("to jest wenwatrz");
    setDelayBeforeMovingNextScreen(
      navigation,
      weatherDataMain,
      weatherDataForNextDays
    );
  }
}

function setDelayBeforeMovingNextScreen(
  navigation: any,
  weatherDataMain: any,
  weatherDataForNextDays: any
) {
  setTimeout(() => {
    navigation.navigate("TabNavigationScreens", {
      weatherData: weatherDataMain,
      weatherForNextDays: weatherDataForNextDays,
    });
  }, 5000);
}
