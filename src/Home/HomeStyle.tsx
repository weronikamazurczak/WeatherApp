import { StyleSheet } from "react-native";
import React from "react";

const styles = StyleSheet.create({
  appContainerStyle: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    backgroundColor: "#1F9BF4",
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
    marginVertical: "3%",
  },
  weatherStats: {
    flexDirection: "row",

    alignItems: "center",
  },
  weatherStatsText: {
    color: "white",
  },
  forecastForNextDays: {
    marginBottom: 10,
    marginVertical: 20,
  },
  dailyForecastCalendar: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: "4%",
  },
  forecastForNextDaysScrollView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: 96,
    borderRadius: 48,
    paddingVertical: 12,
    marginRight: 16,
    marginLeft: 16,
    marginVertical: 4,
    backgroundColor: "rgba(255, 255, 255, 0.15)",
  },
  weatherImageStyle: {
    justifyContent: "center",
    alignSelf: "center",
  },
  weatherForecastStatsText: {
    color: "white",
    marginTop: "10%",
  },
  weatherForecastTimeStatsText: {
    color: "white",
    marginBottom: "10%",
  },
  additionalParametrsStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: 96,
    borderRadius: 48,
    paddingVertical: 12,
    marginRight: 16,
    marginLeft: 16,
    marginVertical: 4,
    backgroundColor: "#93c5fd",
    //backgroundColor: "rgba(255, 255, 255, 0.15)",
  },
  textInfromation: {
    flexDirection: "row",
  },
  weatherInfoGrid: {
    flex: 1,
    paddingHorizontal: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: "3%",
    marginTop: "5%",
  },
  box: {
    justifyContent: "center",
    width: "48%",
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    borderRadius: 48,
    color: "white",
    paddingTop: 10,
    paddingLeft: 40,
  },
  weatherInfoStatsText: {
    color: "white",
  },
  iconContainer: {
    flexDirection: "row",
    paddingTop: "3%",
    paddingBottom: "3%",
    marginBottom: "5%",
  },
});

export default styles;
