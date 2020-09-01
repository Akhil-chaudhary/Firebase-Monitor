import {
  createAppContainer
} from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import { StatusBar } from 'expo-status-bar';
import React from "react";
import {
  StyleSheet,
  Text
} from "react-native";
import Splash from "./src/screens/Splash";
import Home from "./src/screens/HomeScreen";
import * as firebase from "firebase";
import HomeScreen from "./src/screens/HomeScreen";
import FormScreen from "./src/screens/FormScreen";

const Appstack = createStackNavigator(
  {
    Config:FormScreen,
    Database:HomeScreen,
  },
  {
    headerMode: "none",
  }
);
const navigator = createStackNavigator(
  {
    // Splash: Splash,
    App:Appstack,
  },
  {
    initialRouteName: "App",
    headerMode: "none",
  }
);

export default createAppContainer(navigator);

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#1C8ADB",
    borderRadius: 40,
    height: 50,
    marginHorizontal: "10%",
    alignItems: "center",
    justifyContent: "center"
  }
});
