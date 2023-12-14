import React from "react";
import { useEffect } from "react";
import styles from "./SplashScreenStyle";
import { View, Text } from "@gluestack-ui/themed";



export default function SplashScreen({ navigation }: any) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("TabNavigationScreens");
    }, 5000);
  });

  return (
    <View style={styles.mainSplashScreenView}>
      <Text style={styles.weatherText}>Weather</Text>


    </View>
  );
}
