import { config } from "@gluestack-ui/config";
import { GluestackUIProvider, Text } from "@gluestack-ui/themed";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SplashScreen from "../SplashScreen/SplashScreen";
import HomeScreen from "../Home/HomeScreen";
import SearchScreen from "../SearchView/SearchScreen";
import MapScreen from "../Map/MapScreen";
import SettingScreen from "../Setting/SettingScreen";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Settings" component={SettingScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="SplashScreen"
        >
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="TabNavigationScreens" component={TabNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </GluestackUIProvider>
  );
}
