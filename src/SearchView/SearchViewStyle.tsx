import { StyleSheet } from "react-native";
import React from "react";

const styles = StyleSheet.create({
  mainSearchScreenView: {
    height: "100%",
    width: "100%",
    alignItems: "center",
  },
  background: {
    position: "absolute",
    height: "100%",
    width: "100%",
  },
  searchInputView: {
    flex: 1,
    marginTop: "12%",
    height: "100%",
    width: "80%",

  },
  searchInput: {
    textAlign: "center",
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    borderRadius: 48,
  },
  searchInputText: {
    alignItems: "center",
    textAlign: "center",
    color: "white",
  },
});

export default styles;
