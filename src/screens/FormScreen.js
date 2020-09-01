import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  YellowBox,
  KeyboardAvoidingView,
  Linking,
} from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import * as firebase from "firebase";
import Spinner from "react-native-loading-spinner-overlay";
export default class HomeScreen extends Component {
  constructor(props) {
    YellowBox.ignoreWarnings(["Setting a timer"]);
    super(props);
    this.state = {
      config: "",
      spinner: false,
      apiKey: "",
      authDomain: "",
      databaseURL: "",
      projectId: "",
      storageBucket: "",
      messagingSenderId: "",
      appId: "",
      data: {},
    };
  }
  handleClick=()=>{
    Linking.openURL("https://akhilchaudhary.in/").catch((err) => console.error('An error occurred', err));
  }
  handleSubmit = async () => {
    // console.log((this.state.config.replace(/\s+/g, '')));
    // var firebaseConfig = JSON.parse(tmp.replace('0',(this.state.config.replace(/\s+/g, ''))));
    // this.state.config=((((((((this.state.config).replace('apiKey','"apiKey"')).replace('authDomain','"authDomain"')).replace('databaseURL','"databaseURL"')).replace('projectId','"projectId"')).replace('storageBucket','"storageBucket"')).replace('messagingSenderId','"messagingSenderId"')).replace('appId','"appId"'));
    // console.log(((JSON.stringify(this.state.config.replace(/\s+/g, ''))).replace(/\\/g, '')));
    // var firebaseConfig=JSON.parse(((JSON.stringify(this.state.config.replace(/\s+/g, ''))).replace(/\\/g, '')));
    var firebaseConfig = {
      apiKey: this.state.apiKey,
      authDomain: this.state.authDomain,
      databaseURL: this.state.databaseURL,
      projectId: this.state.projectId,
      storageBucket: this.state.storageBucket,
      messagingSenderId: this.state.messagingSenderId,
      appId: this.state.appId,
    };
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    this.setState({ spinner: true });
    await firebase
      .database()
      .ref()
      .on("value", (snapshot) => {
        this.setState({ data: JSON.parse(JSON.stringify(snapshot)) });
        this.props.navigation.navigate("Database", {
          JSON_ListView_Clicked_Item: this.state.data,
        });

        this.setState({
          config: "",
          spinner: false,
          apiKey: "",
          authDomain: "",
          databaseURL: "",
          projectId: "",
          storageBucket: "",
          messagingSenderId: "",
          appId: "",
          data: {},
        });
      });
  };

  render() {
    return (
      <View style={{ backgroundColor: "#272727", flex: 1 }}>
        <ScrollView style={styles.container}>
          <Spinner
            visible={this.state.spinner}
            textContent={"Verifying.."}
            textStyle={styles.spinnerTextStyle}
          />
          <KeyboardAvoidingView
            style={styles.subcontainer}
            behavior="padding"
            enabled
          >
            <View style={{ flexDirection: "row" }}>
              <View>
                <Image
                  style={{ width: 100, height: 100,alignSelf:'flex-end' }}
                  source={require("../../assets/logo.png")}
                />
              </View>
              <View style={{justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{alignSelf:'flex-start',fontSize:22 }}>Firebase{"\n"}Configuration</Text>
              </View>
            </View>

            <TextInput
              placeholder="apiKey"
              placeholderTextColor="#272727"
              style={styles.input}
              autoCapitalize="none"
              onChangeText={(apiKey) => this.setState({ apiKey })}
              value={this.state.apiKey}
            />
            <TextInput
              placeholder="authDomain"
              placeholderTextColor="#272727"
              style={styles.input}
              autoCapitalize="none"
              onChangeText={(authDomain) => this.setState({ authDomain })}
              value={this.state.authDomain}
            />
            <TextInput
              placeholder="databaseURL"
              placeholderTextColor="#272727"
              style={styles.input}
              autoCapitalize="none"
              onChangeText={(databaseURL) => this.setState({ databaseURL })}
              value={this.state.databaseURL}
            />
            <TextInput
              placeholder="projectId"
              placeholderTextColor="#272727"
              style={styles.input}
              autoCapitalize="none"
              onChangeText={(projectId) => this.setState({ projectId })}
              value={this.state.projectId}
            />
            <TextInput
              placeholder="storageBucket"
              placeholderTextColor="#272727"
              style={styles.input}
              autoCapitalize="none"
              onChangeText={(storageBucket) => this.setState({ storageBucket })}
              value={this.state.storageBucket}
            />
            <TextInput
              placeholder="messagingSenderId"
              placeholderTextColor="#272727"
              style={styles.input}
              autoCapitalize="none"
              onChangeText={(messagingSenderId) =>
                this.setState({ messagingSenderId })
              }
              value={this.state.messagingSenderId}
            />
            <TextInput
              placeholder="appId"
              placeholderTextColor="#272727"
              style={styles.input}
              autoCapitalize="none"
              onChangeText={(appId) => this.setState({ appId })}
              value={this.state.appId}
            />
            {/*             
          <TextInput
            placeholder="Firebase Configuration"
            placeholderTextColor="#272727"
            style={styles.input}
            autoCapitalize="none"
            onChangeText={(config) => this.setState({ config })}
            value={this.state.config}
          />  */}
            <TouchableOpacity
              style={[styles.button, { backgroundColor: "#FFCA28" }]}
              onPress={this.handleSubmit}
            >
              <Text style={{ color: "#272727", fontSize: 20 }}>Submit</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
          <Text onPress={this.handleClick} style={{textAlign:'center',marginTop:20, color:"#F5F5F5"}}>Made with ❤ by Akhil Chaudhary</Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#272727",
    paddingTop: 70,
  },
  spinnerTextStyle: {
    color: "#FFF",
    width: 100,
  },
  container1: {
    flex: 1,
    paddingBottom: 150,
  },
  subcontainer: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 20,
    alignContent: "center",
    justifyContent: "center",
    flex: 1,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    color: "#3DB8FF",
  },
  input: {
    backgroundColor: "#FFF",
    borderColor: "#272727",
    borderWidth: 1,
    padding: 5,
    borderRadius: 5,
    height: 40,
    fontSize: 20,
    color: "#272727",
    marginVertical: 20,
    marginHorizontal: 15,
    shadowOffset: { width: 10, height: 10 },
    shadowColor: "#000",
    shadowOpacity: 1.0,
  },
  button: {
    marginVertical: 20,
    alignSelf: "flex-end",
    shadowOffset: { width: 10, height: 10 },
    shadowColor: "#000",
    shadowOpacity: 1.0,
    borderRadius: 5,
    height: 40,
    width: 100,
    marginHorizontal: 40,
    alignItems: "center",
    justifyContent: "center",
  },
});
