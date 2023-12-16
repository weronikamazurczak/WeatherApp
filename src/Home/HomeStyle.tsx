import { StyleSheet } from "react-native";
import React from "react";

const styles = StyleSheet.create({
  firstPlanBackground: {
    height: "100%",
    alignItems: "center",
  },
  secondPlanBackground: {
    position: "absolute",
    width: "80%",
    height: "100%",
    marginTop: "10%",
    borderRadius: 50,
  },
  localizationTextStyle: {
    textAlign: "center",
    justifyContent: "center",
    color: "white",
    fontSize: 40,
    marginTop: "10%",
    paddingTop: "10%",
  },
  dateTextStyle: {
    textAlign: "center",
    justifyContent: "center",
    color: "white",
    fontSize: 20,
    marginTop: "3%",
  },
  temperatureTextStyle: {
    textAlign: "center",
    justifyContent: "center",
    color: "white",
    fontSize: 50,
    marginTop: "3%",
    padding: "10%",
  },
});

export default styles;
