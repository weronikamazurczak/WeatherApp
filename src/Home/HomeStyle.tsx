import { StyleSheet } from "react-native";
import React from "react";

const styles = StyleSheet.create({
  appContainerStyle: {
    height: "100%",
    width: "100%",
    alignItems: "center",
  },
  background: {
    position: "absolute",
    height: "100%",
    width: "100%",
  },
  scrollViewContainerStyle: {
    flex: 1,
    width: "100%",
    height: "100%",
    marginTop: "10%",
    borderRadius: 50,
  },
  localizationTextStyle: {
    textAlign: "center",
    justifyContent: "center",
    fontSize: 40,
    marginTop: "5%",
    paddingTop: "5%",
    color: "white",
  },
  dateTextStyle: {
    textAlign: "center",
    justifyContent: "center",
    fontSize: 20,
    marginTop: "3%",
    color: "white",
  },
  weatherDependentImageStyle: {
    justifyContent: "center",
    alignSelf: "center",
    width: 183,
    height: 162,
    marginTop: "15%",
  },
  temperatureTextStyle: {
    color: "white",
    fontSize: 80,
    marginTop: "7%",
    paddingTop: "20%",
    textAlign: "center",
    justifyContent: "center",
  },
  weatherDescriptionStyle: {
    textAlign: "center",
    justifyContent: "center",
    fontSize: 20,
    marginTop: "1%",
    color: "white",
  },
  otherStats: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: "10%",
    marginVertical: "3%"
  },
  weatherStats: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  weatherStatsText:{
    color: "white",
  },
  forecastForNextDays:{
    marginBottom: 10,
    marginVertical: 20,
  },
  dailyForecastCalendar:{
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: "4%",
  },
  forecastForNextDaysScrollView:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: 96,
    borderRadius: 48,
    paddingVertical: 12,
    marginRight: 16,
    marginLeft: 16,
    marginVertical: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.15)'
  },
  weatherImageStyle:{
    justifyContent: "center",
    alignSelf: "center",
    width: 64,
    height: 64,
    marginTop: "15%",
  }
});

export default styles;
