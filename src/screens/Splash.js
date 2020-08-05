import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
} from "react-native";
export default class Splash extends Component {
  
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate("App"); 
      }, 2000);
  }


  render() {
    return (
        <View style={styles.wrapper}>
          <View style={styles.titleWrapper}>
            <Image
              style={{ width: 250, height: 250 }}
              source={require("../../assets/logo.png")}
            />

            <Text style={styles.title}>My Firebase</Text>
          </View>

          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Image
              style={{ width: 80, height: 80 }}
              source={require("../../assets/load.gif")}
            />
          </View>
        </View>
    );
  }
}
const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#272727",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    textAlign: "center",
    color: "white",
    fontSize: 35,
    fontWeight: "500"
  },
  titleWrapper: {
    justifyContent: "center",
    flex: 1
  }
});
