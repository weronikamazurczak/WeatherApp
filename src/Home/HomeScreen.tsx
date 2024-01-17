import React from "react";
import { View, Image, ScrollView, Text, Button } from "@gluestack-ui/themed";
import styles from "./HomeStyle";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import { Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

interface RouteParams {
  weatherData?: any;
  weatherForNextDays?: any;
}

export default function HomeScreen({ navigation }: any) {
  const route = useRoute();
  const routeParams = route.params as RouteParams;

  const sunriseDate = new Date(routeParams.weatherData.sys.sunrise * 1000);
  const sunriseTime = new Intl.DateTimeFormat("pl-PL", {
    hour: "numeric",
    minute: "numeric",
  }).format(sunriseDate);

  const sunsetDate = new Date(routeParams.weatherData.sys.sunset * 1000);
  const sunsetTime = new Intl.DateTimeFormat("pl-PL", {
    hour: "numeric",
    minute: "numeric",
  }).format(sunsetDate);

  const date = new Date();
  const weatherForNextDays = Object.values(routeParams.weatherForNextDays.list);

  console.log(
    "tu weather data sie wysweitla HALOOOOOO",
    routeParams.weatherData
  );

  return (
    <View style={styles.appContainerStyle}>
      {/* <Image
        blurRadius={50}
        style={styles.background}
        source={require("../../Images/wave_background.png")}
        alt="cloudy"
      /> */}
      <ScrollView style={styles.scrollViewContainerStyle}>
        <Text style={styles.localizationTextStyle}>
          {routeParams.weatherData.name}
        </Text>
        <Text style={styles.dateTextStyle}>
          {date.toLocaleString("en-US", {
            month: "long",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
          })}
        </Text>

        <Image
          style={styles.weatherDependentImageStyle}
          source={`https://openweathermap.org/img/wn/${routeParams.weatherData.weather[0].icon}@2x.png`}
          alt="cloudy"
        />
        <Text style={styles.weatherDescriptionStyle}>
          {routeParams.weatherData.weather[0].description}
        </Text>
        <Text style={styles.temperatureTextStyle}>
          {" "}
          {Math.round(routeParams.weatherData.main.feels_like)}°C{" "}
        </Text>

        <View style={styles.otherStats}>
          <View style={styles.weatherStats}>
            <Feather name="sunrise" size={24} color="white" />
            <Text style={styles.weatherStatsText}>{sunriseTime}</Text>
          </View>
          <View style={styles.weatherStats}>
            <Feather name="sunset" size={24} color="white" />
            <Text style={styles.weatherStatsText}>{sunsetTime}</Text>
          </View>
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
                  {routeParams.weatherData.wind.speed} m/s
                </Text>
              </View>
            </View>
            <View style={styles.box}>
              <Text style={styles.weatherStatsText}>Pressure</Text>
              <View style={styles.iconContainer}>
                <MaterialIcons name="waves" size={24} color="white" />
                <Text style={styles.weatherStatsText}>
                  {routeParams.weatherData.main.pressure} hPa
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
                  {routeParams.weatherData.main.humidity} %
                </Text>
              </View>
            </View>
            <View style={styles.box}>
              <Text style={styles.weatherStatsText}>Visibility</Text>
              <View style={styles.iconContainer}>
                <MaterialIcons name="visibility" size={24} color="white" />
                <Text style={styles.weatherStatsText}>
                  {routeParams.weatherData.visibility} m
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.forecastForNextDays}>
          <View style={styles.dailyForecastCalendar}>
            <AntDesign name="clockcircleo" size={24} color="white" />
            <Text style={styles.weatherStatsText}> Hourly Forecast</Text>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {weatherForNextDays.map((singleForecastWeatherData: any, index) => {
              console.log(singleForecastWeatherData);
              return (
                <View style={styles.forecastForNextDaysScrollView} key={index}>
                  <Text style={styles.weatherForecastStatsText}>
                    {" "}
                    {Math.round(
                      singleForecastWeatherData.main.feels_like
                    )}°C{" "}
                  </Text>
                  <Image
                    style={styles.weatherImageStyle}
                    source={`https://openweathermap.org/img/wn/${singleForecastWeatherData.weather[0].icon}@2x.png`}
                    alt="snow"
                  />
                  <Text style={styles.weatherForecastTimeStatsText}>
                    {" "}
                    {new Date(
                      singleForecastWeatherData.dt_txt
                    ).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}{" "}
                  </Text>
                </View>
              );
            })}
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
}
