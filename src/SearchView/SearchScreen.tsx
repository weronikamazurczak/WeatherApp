import {
  View,
  Image,
  ScrollView,
  Text,
  Input,
  InputField,
} from "@gluestack-ui/themed";
import React from "react";
import styles from "./SearchViewStyle";

export default function SearchScreen() {
  return (
    <View style={styles.mainSearchScreenView}>
      <Image
        blurRadius={50}
        style={styles.background}
        source={require("../../Images/wave_background.png")}
        alt="cloudy"
      />
      <View style={styles.searchInputView}>
        <Input
          style={styles.searchInput}
          variant="outline"
          size="lg"
          isDisabled={false}
          isInvalid={false}
          isReadOnly={false}
        >
          <InputField style={styles.searchInputText} placeholder="Search city" />
        </Input>
      </View>
    </View>
  );
}
