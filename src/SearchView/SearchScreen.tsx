import { View, Text, Image } from "@gluestack-ui/themed";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import React, { useState } from "react";
import styles from "./SearchViewStyle";
import { ApiObject } from "../api.config";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

interface RetrievedData {
  weather?: any;
  name?: string;
  wind?: any;
}

export default function SearchScreen() {
  const [weatherDataMain, setWeatherDataMain] = useState<RetrievedData | any>();
  return (
    <View style={styles.appContainerStyle}>
      <View style={styles.mainComponentStyle}>
        <GooglePlacesAutocomplete
          placeholder="Search"
          onPress={(data, details = null) => {
            (async () => {
              setWeatherDataMain(await getSearchedWeatherData(data));
              console.log(weatherDataMain);
            })();
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
          }}
          query={{
            key: `${ApiObject.searchKey}`,
            language: "pl",
          }}
        />
        {weatherDataMain ? (
          <>
            <View>
              <Text style={styles.localizationTextStyle}>
                {weatherDataMain.name}
              </Text>
              <Text style={styles.dateTextStyle}>{weatherDataMain.date}</Text>
              <Image
                style={styles.weatherDependentImageStyle}
                source={`https://openweathermap.org/img/wn/${weatherDataMain.weather[0].icon}@2x.png`}
                alt="cloudy"
              />
              <Text style={styles.weatherDescriptionStyle}>
                {weatherDataMain.weather[0].description}
              </Text>
              <Text style={styles.temperatureTextStyle}>
                {" "}
                {Math.round(weatherDataMain.main.feels_like)}°C{" "}
              </Text>
            </View>
            <View style={styles.weatherInfoGrid}>
              <View style={styles.row}>
                <View style={styles.box}>
                  <Text style={styles.weatherInfoStatsText}>Wind Speed</Text>
                  <View style={styles.iconContainer}>
                    <MaterialCommunityIcons
                      name="weather-windy-variant"
                      size={24}
                      color="white"
                    />
                    <Text style={styles.weatherStatsText}>
                      {weatherDataMain.wind.speed} m/s
                    </Text>
                  </View>
                </View>
                <View style={styles.box}>
                  <Text style={styles.weatherStatsText}>Pressure</Text>
                  <View style={styles.iconContainer}>
                    <MaterialIcons name="waves" size={24} color="white" />
                    <Text style={styles.weatherStatsText}>
                      {weatherDataMain.main.pressure} hPa
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.row}>
                <View style={styles.box}>
                  <Text style={styles.weatherStatsText}>Humidity</Text>
                  <View style={styles.iconContainer}>
                    <Ionicons name="water-outline" size={24} color="white" />
                    <Text style={styles.weatherStatsText}>
                      {weatherDataMain.main.humidity} %
                    </Text>
                  </View>
                </View>
                <View style={styles.box}>
                  <Text style={styles.weatherStatsText}>Visibility</Text>
                  <View style={styles.iconContainer}>
                    <MaterialIcons name="visibility" size={24} color="white" />
                    <Text style={styles.weatherStatsText}>
                      {weatherDataMain.visibility}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </>
        ) : (
          <></>
        )}
      </View>
    </View>
  );
}

async function getSearchedWeatherData(details: any) {
  const link = `https://api.openweathermap.org/data/2.5/weather?q=${details.description}&appid=${ApiObject.key}&units=metric`;
  const response = await fetch(link);
  const weatherDataMain = await response.json();
  if (weatherDataMain) {
    console.log(weatherDataMain);
  }
  return weatherDataMain;
}
