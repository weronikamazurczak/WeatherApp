import React from "react";
import { View, Image, ScrollView, Text } from "@gluestack-ui/themed";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./HomeStyle";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";

interface RouteParams {
  weatherData?: any;
  weatherForNextDays?: any;
}

export default function HomeScreen() {
  const route = useRoute();
  const routeParams = route.params as RouteParams;

  const sunriseDate = new Date(routeParams.weatherData.sys.sunrise * 1000);
  const sunriseTime = new Intl.DateTimeFormat("pl-PL", {
    hour: "numeric",
    minute: "numeric",
  }).format(sunriseDate);

  const date = new Date();
  const weatherForNextDays = Object.values(routeParams.weatherForNextDays.list);

  return (
    <View style={styles.appContainerStyle}>
      <Image
        blurRadius={50}
        style={styles.background}
        source={require("../../Images/wave_background.png")}
        alt="cloudy"
      />
      <ScrollView style={styles.scrollViewContainerStyle}>
        <Text style={styles.localizationTextStyle}>
          {routeParams.weatherData.name}
        </Text>
        <Text style={styles.dateTextStyle}>
          {date.getDate() + "." + date.getMonth() + "." + date.getFullYear()}
        </Text>

        <Image
          style={styles.weatherDependentImageStyle}
          source={`https://openweathermap.org/img/wn/${routeParams.weatherData.weather[0].icon}@2x.png`}
          alt="cloudy"
        />
        <Text style={styles.temperatureTextStyle}>
          {" "}
          {Math.round(routeParams.weatherData.main.feels_like)}°C{" "}
        </Text>
        <Text style={styles.weatherDescriptionStyle}>
          {routeParams.weatherData.weather[0].description}
        </Text>

        <View style={styles.otherStats}>
          <View style={styles.weatherStats}>
            <Feather name="wind" size={24} color="white" />
            <Text style={styles.weatherStatsText}>
              {routeParams.weatherData.wind.speed} m/s
            </Text>
          </View>
          <View style={styles.weatherStats}>
            <Ionicons name="water-outline" size={24} color="white" />
            <Text style={styles.weatherStatsText}>
              {routeParams.weatherData.main.pressure} hPa
            </Text>
          </View>
          <View style={styles.weatherStats}>
            <Feather name="sunrise" size={24} color="white" />
            <Text style={styles.weatherStatsText}>{sunriseTime}</Text>
          </View>
        </View>

        <View style={styles.forecastForNextDays}>
          <View style={styles.dailyForecastCalendar}>
            <AntDesign name="calendar" size={24} color="white" />
            <Text style={styles.weatherStatsText}>Daily Forecast</Text>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {weatherForNextDays.map((singleForecastWeatherData: any, index) => {
              console.log(singleForecastWeatherData);
              return (
                <View style={styles.forecastForNextDaysScrollView} key={index}>
                  <Image
                    style={styles.weatherImageStyle}
                    source={`https://openweathermap.org/img/wn/${singleForecastWeatherData.weather[0].icon}@2x.png`}
                    alt="snow"
                  />
                  <Text style={styles.weatherStatsText}>
                    {" "}
                    {singleForecastWeatherData.dt_txt}{" "}
                  </Text>
                  <Text style={styles.weatherStatsText}>
                    {" "}
                    {singleForecastWeatherData.main.feels_like}
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
