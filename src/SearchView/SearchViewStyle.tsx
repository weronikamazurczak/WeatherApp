import { StyleSheet } from "react-native";
import React from "react";

const styles = StyleSheet.create({
  appContainerStyle: {
    height: "100%",
    width: "100%",
    backgroundColor: "#1F9BF4",
  },
  mainComponentStyle: {
    position: "absolute",
    marginTop: "30%",
    marginLeft: "10%",
    width: "80%",
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
  weatherStatsText: {
    color: "white",
  },
});

export default styles;
