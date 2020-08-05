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

const Appstack = createStackNavigator(
  {
    Home:HomeScreen,
  },
  {
    headerMode: "none"
  }
);
const navigator = createStackNavigator(
  {
    Splash: Splash,
    App:Appstack,
  },
  {
    initialRouteName: "Splash",
    headerMode: "none"
  }
);
var firebaseConfig = {
  apiKey: "AIzaSyAIl-EpAdZmjnEJAmWyUR2VaeTsD2mup_w",
  authDomain: "portfolio-1cfc2.firebaseapp.com",
  databaseURL: "https://portfolio-1cfc2.firebaseio.com",
  projectId: "portfolio-1cfc2",
  storageBucket: "portfolio-1cfc2.appspot.com",
  messagingSenderId: "345848544510",
  appId: "1:345848544510:web:de617f893f95e18bceb9af"
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

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
