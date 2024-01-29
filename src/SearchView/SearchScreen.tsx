import { View } from "@gluestack-ui/themed";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import React from "react";
import styles from "./SearchViewStyle";

export default function SearchScreen() {
  return (
    <View >
      <GooglePlacesAutocomplete
        placeholder="Search"
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
        }}
        query={{
          key: "YOUR API KEY",
          language: "pl",
        }}
      />
    </View>
  );
}
