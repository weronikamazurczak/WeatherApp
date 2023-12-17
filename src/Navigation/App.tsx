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
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#0A4478",
        tabBarInactiveTintColor: "black",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="search-plus" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="map" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-settings" size={24} color={color} />
          ),
        }}
      />
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
