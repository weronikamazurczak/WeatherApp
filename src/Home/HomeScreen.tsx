import React from "react";
import { View, Image, ScrollView, Text } from "@gluestack-ui/themed";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./HomeStyle";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export default function HomeScreen() {
  return (
    <View style={styles.appContainerStyle}>
      <Image
        blurRadius={50}
        style={styles.background}
        source={require("../../Images/wave_background.png")}
        alt="cloudy"
      />
      <ScrollView style={styles.scrollViewContainerStyle}>
        <Text style={styles.localizationTextStyle}>Location</Text>
        <Text style={styles.dateTextStyle}>Tuesday 12 December</Text>

        <Image
          style={styles.weatherDependentImageStyle}
          source={require("../../Images/cloudy.png")}
          alt="cloudy"
        />
        <Text style={styles.temperatureTextStyle}> 1°C </Text>
        <Text style={styles.weatherDescriptionStyle}>Partly cloudy</Text>

        <View style={styles.otherStats}>
          <View style={styles.weatherStats}>
            <Feather name="wind" size={24} color="white" />
            <Text style={styles.weatherStatsText}> 5 m/s</Text>
          </View>
          <View style={styles.weatherStats}>
            <Ionicons name="water-outline" size={24} color="white" />
            <Text style={styles.weatherStatsText}>83%</Text>
          </View>
          <View style={styles.weatherStats}>
            <Feather name="sunrise" size={24} color="white" />
            <Text style={styles.weatherStatsText}>7:35 AM</Text>
          </View>
        </View>

        <View style={styles.forecastForNextDays}>
          <View style={styles.dailyForecastCalendar}>
            <AntDesign name="calendar" size={24} color="white" />
            <Text style={styles.weatherStatsText}>Daily Forecast</Text>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.forecastForNextDaysScrollView}>
              <Image
                style={styles.weatherImageStyle}
                source={require("../../Images/2682816_cloud_cloudy_forecast_precipitation_snow_icon.png")}
                alt="snow"
              />
              <Text style={styles.weatherStatsText}>Monday</Text>
              <Text style={styles.weatherStatsText}>-5°C</Text>
            </View>
            <View style={styles.forecastForNextDaysScrollView}>
              <Image
                style={styles.weatherImageStyle}
                source={require("../../Images/2682835_cloud_cloudy_forecast_precipitation_rain_icon.png")}
                alt="snow"
              />
              <Text style={styles.weatherStatsText}>Tuesday </Text>
              <Text style={styles.weatherStatsText}>-5°C</Text>
            </View>
            <View style={styles.forecastForNextDaysScrollView}>
              <Image
                style={styles.weatherImageStyle}
                source={require("../../Images/2682848_day_forecast_sun_sunny_weather_icon.png")}
                alt="snow"
              />
              <Text style={styles.weatherStatsText}>Wednesday </Text>
              <Text style={styles.weatherStatsText}>-10°C</Text>
            </View>
            <View style={styles.forecastForNextDaysScrollView}>
              <Image
                style={styles.weatherImageStyle}
                source={require("../../Images/2682816_cloud_cloudy_forecast_precipitation_snow_icon.png")}
                alt="snow"
              />
              <Text style={styles.weatherStatsText}>Thursday </Text>
              <Text style={styles.weatherStatsText}>-4°C</Text>
            </View>
            <View style={styles.forecastForNextDaysScrollView}>
              <Image
                style={styles.weatherImageStyle}
                source={require("../../Images/2682823_forecast_snow_snowflake_weather_icon.png")}
                alt="snow"
              />
              <Text style={styles.weatherStatsText}>Friday </Text>
              <Text style={styles.weatherStatsText}>-2°C</Text>
            </View>
            <View style={styles.forecastForNextDaysScrollView}>
              <Image
                style={styles.weatherImageStyle}
                source={require("../../Images/2682815_cloud_day_forecast_precipitation_snow_icon.png")}
                alt="snow"
              />
              <Text style={styles.weatherStatsText}>Saturday </Text>
              <Text style={styles.weatherStatsText}>0°C</Text>
            </View>

            <View style={styles.forecastForNextDaysScrollView}>
              <Image
                style={styles.weatherImageStyle}
                source={require("../../Images/2682850_cloud_clouds_cloudy_forecast_weather_icon.png")}
                alt="snow"
              />
              <Text style={styles.weatherStatsText}>Sunday </Text>
              <Text style={styles.weatherStatsText}>2°C</Text>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
}
