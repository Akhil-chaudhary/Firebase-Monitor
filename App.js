import {
  createAppContainer
} from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import HistoryScreen from "./src/screens/HistoryScreen";
import FormScreen from "./src/screens/FormScreen";

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

