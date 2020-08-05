import React, { Component } from "react";
import { View, StyleSheet, Text, ScrollView, YellowBox } from "react-native";
import JSONTree from "react-native-json-tree";
import * as firebase from "firebase";
// import { Card } from "react-native-shadow-cards";

const theme = {
  scheme: "Akhil",
  author: "Akhil",
  base00: "#272727", //background
  base01: "#383830",
  base02: "#49483e",
  base03: "#3DB8FF", //overview keys
  base04: "#a59f85",
  base05: "#f8f8f2",
  base06: "#f5f4f1",
  base07: "#f9f8f5",
  base08: "#f92672",
  base09: "#fd971f",
  base0A: "#f4bf75",
  base0B: "#FFFFFF", //child color
  base0C: "#a1efe4",
  base0D: "#FFCA28",
  base0E: "#ae81ff",
  base0F: "#cc6633",
};
export default class HomeScreen extends Component {
  constructor(props) {
    YellowBox.ignoreWarnings(["Setting a timer"]);
    super(props);
    this.state = {
      data: {},
    };
  }

  componentDidMount() {
    this.fetchDataUser();
  }

  fetchDataUser = () => {
    firebase
      .database()
      .ref()
      .on("value", (snapshot) => {
        this.setState({ data: JSON.parse(JSON.stringify(snapshot)) });
      });
  };
  render() {
    return (
      <ScrollView style={styles.container}>
        <View>
          <Text style={styles.title}>Realtime Database</Text>
        </View>
        <ScrollView style={styles.container1} horizontal={true}>
          <View style={styles.subcontainer}>
            <JSONTree
              theme={theme}
              hideRoot={true}
              invertTheme={false}
              data={this.state.data}
            />
          </View>
        </ScrollView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#272727",
    paddingBottom: 100,
    paddingTop:70,
  },
  container1:{
    flex: 1,
    paddingBottom: 150,
  },
  subcontainer: {
    margin: 30,
  },
  title:{
      fontSize:25,
      fontWeight:"bold",
      textAlign:"center",
      color:"#3DB8FF",
  }
});
