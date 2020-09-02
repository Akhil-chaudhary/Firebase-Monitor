import {
  createAppContainer
} from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import {
  StyleSheet,
} from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import HistoryScreen from "./src/screens/HistoryScreen";
import FormScreen from "./src/screens/FormScreen";

global.history=[];
const navigator = createStackNavigator(
  {
    Config:FormScreen,
    History:HistoryScreen,
    Database:HomeScreen,
  },
  {
    initialRouteName: "Config",
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
