import React from "react";
import { View, ScrollView } from "@gluestack-ui/themed";
import styles from "./HomeStyle";

export default function HomeScreen() {
  return (
    <View style = {styles.mainHomeScreenView}>
      <ScrollView style={styles.homeScreenScrollView}></ScrollView>
    </View>
  );
}
