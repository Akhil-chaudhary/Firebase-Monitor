import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  YellowBox,
} from "react-native";
import { Header } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class HistoryScreen extends Component {
  constructor(props) {
    YellowBox.ignoreWarnings(["Setting a timer"]);
    super(props);
    this.state = {
      data: {},
    };
  }
  render() {
    const HistoryList = () => {
      var i = 0;
      if (global.history.length > 0) {
        return global.history.map((element) => {
          if (typeof element != "undefined" && element != null) {
            i++;
            // console.log(element);
            return (
              <TouchableOpacity onPress={() => {
                this.props.navigation.navigate("Config", {
                  index: element,
                });
              }}
               key={i} style={styles.subcontainer}>
                <Text style={styles.config}>apiKey: {element.apiKey}</Text>
                <Text style={styles.config}>
                  authDomain: {element.authDomain}
                </Text>
                <Text style={styles.config}>
                  databaseURL: {element.databaseURL}
                </Text>
                <Text style={styles.config}>
                  projectId: {element.projectId}
                </Text>
                <Text style={styles.config}>
                  storageBucket: {element.storageBucket}
                </Text>
                <Text style={styles.config}>
                  messagingSenderId: {element.messagingSenderId}
                </Text>
                <Text style={styles.config}>appId: {element.appId}</Text>
              </TouchableOpacity>
            );
          }
        });
      } else {
        return (
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("Config");
            }}
          >
            <Text
              style={{ color: "#FFCA28", fontSize: 22, textAlign: "center" }}
            >
              No entries so far
            </Text>
            <Text
              style={{
                color: "#FFF",
                fontSize: 17,
                textAlign: "center",
                marginTop: 10,
              }}
            >
              Go to Config page
            </Text>
          </TouchableOpacity>
        );
      }
    };
    return (
      <View style={{ backgroundColor: "#272727", flex: 1 }}>
        <Header
          placement="left"
          leftComponent={{
            icon: "arrow-back",
            color: "#101820FF",
            onPress: () => this.props.navigation.navigate("Config"),
          }}
          centerComponent={{
            text: "History",
            style: {
              color: "#272727",
              fontWeight: "bold",
              fontSize: 22,
              letterSpacing: 1,
            },
          }}
          backgroundColor="#FFCA28"
        />
        <ScrollView style={styles.container}>
          <HistoryList />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#272727",
    paddingBottom: 50,
    paddingTop: 20,
  },
  config: {
    fontSize: 15,
  },
  container1: {
    flex: 1,
    paddingBottom: 100,
  },
  subcontainer: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    // alignContent: "center",
    // justifyContent: "center",
    flex: 1,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    color: "#3DB8FF",
  },
});
