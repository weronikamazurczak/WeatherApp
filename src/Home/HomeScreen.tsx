import React from "react";
import { Image, ScrollView, Text } from "@gluestack-ui/themed";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./HomeStyle";

export default function HomeScreen() {
  return (
    <LinearGradient
      colors={["#00B4DB", "#0083B0"]}
      style={styles.firstPlanBackground}
    >
      <LinearGradient
        colors={["#6dd5ed", "#2193b0"]}
        style={styles.secondPlanBackground}
      >
        <ScrollView>
          <Text style={styles.localizationTextStyle}>Location</Text>
          <Text style={styles.dateTextStyle}>Tuesday 12 December</Text>
          <Text style={styles.temperatureTextStyle}> 1°C </Text>
        </ScrollView>
      </LinearGradient>
    </LinearGradient>
  );
}
